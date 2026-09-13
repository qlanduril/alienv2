import { TileMap, TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { CityPresetName, getCityPreset } from './CityConfig';
import {
  GeneratedMapData,
  SerializedTile,
  SerializedBuilding,
  SerializedWaypoint
} from './GeneratedMapSchema';

import { WFCSolver } from './WFCSolver';
import { WFC_MACRO_MODULES } from './WFCMacroModules';

export interface LayerSnapshot {
  layerIndex: number;
  layerName: string;
  description: string;
  gridDim: number;
  tiles: { terrainType: TerrainType; overlayType: OverlayTileType; roadAxis?: 'NS' | 'EW' }[][];
  buildings: SerializedBuilding[];
  occupied: boolean[][];
  macroGrid?: { district: string; name: string }[][];
}

export interface ProgressCallback {
  (layer: number, totalLayers: number, message: string, snapshot?: LayerSnapshot): void;
}

export class MapBaker {
  private static readonly SCHEMA_VERSION = '1.3.0';
  public static readonly TOTAL_LAYERS = 6;

  /**
   * Main Dual-Preset Offline Bake Pipeline (Passes 1 through 6)
   */
  public static async bake(
    seed: number = 42,
    preset: CityPresetName = 'retro_arcade',
    onProgress?: ProgressCallback,
    stepDelayMs: number = 0
  ): Promise<{ data: GeneratedMapData; jsonString: string; snapshots: LayerSnapshot[] }> {
    const startTime = performance.now();
    const config = getCityPreset(preset);
    const layerTimings: Record<string, number> = {};
    const gridDim = TileMap.GRID_DIM; // 64
    const snapshots: LayerSnapshot[] = [];

    TileMap.init();

    const occupied: boolean[][] = Array.from({ length: gridDim }, () =>
      Array(gridDim).fill(false)
    );

    // Strict boundary helpers
    const reserveArea = (gx: number, gz: number, w: number, h: number, buf = 0) => {
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const tx = gx + dx, tz = gz + dz;
          if (tx >= 0 && tx < gridDim && tz >= 0 && tz < gridDim) {
            occupied[tx][tz] = true;
          }
        }
      }
    };

    /**
     * Strict placement safety: Returns true ONLY if every cell of footprint + buffer ring is
     * free, NOT occupied, NOT a road cell, and NOT ocean water.
     */
    const canPlace = (gx: number, gz: number, w: number, h: number, buf = 0): boolean => {
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const tx = gx + dx, tz = gz + dz;
          if (tx < 0 || tx >= gridDim || tz < 0 || tz >= gridDim) return false;
          if (occupied[tx][tz]) return false;

          const cell = TileMap.getCell(tx, tz);
          if (!cell) return false;

          // STRICT INVARIANT: Buildings must NEVER overlap road tiles or ocean water!
          if (cell.overlayType === OverlayTileType.ROAD || cell.terrainType === TerrainType.WATER) {
            return false;
          }
        }
      }
      return true;
    };

    const paintTerrain = (gx: number, gz: number, w: number, h: number, terrain: TerrainType, buf = 0) => {
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const tx = gx + dx, tz = gz + dz;
          const cell = TileMap.getCell(tx, tz);
          if (cell && cell.overlayType !== OverlayTileType.ROAD) {
            cell.terrainType = terrain;
          }
        }
      }
    };

    const serializedBuildings: SerializedBuilding[] = [];
    const roadWaypoints: SerializedWaypoint[] = [];

    const placeBuilding = (gx: number, gz: number, typeKey: string, lotType: string, buf = 0): boolean => {
      const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];
      const w = def.footprintTiles ?? 1;
      const h = def.footprintTiles ?? 1;

      if (!canPlace(gx, gz, w, h, buf)) return false;

      reserveArea(gx, gz, w, h, buf);
      const pos = LotManager.computeLotWorldPos(gx, gz, w, h);
      serializedBuildings.push({
        gx,
        gz,
        w,
        h,
        typeKey,
        lotType,
        centerWorldX: pos.x,
        centerWorldZ: pos.z
      });
      return true;
    };

    const captureSnapshot = (layerIndex: number, layerName: string, description: string, macroGridRef?: any): LayerSnapshot => {
      const clonedTiles = Array.from({ length: gridDim }, (_, gx) =>
        Array.from({ length: gridDim }, (_, gz) => {
          const cell = TileMap.getCell(gx, gz)!;
          return {
            terrainType: cell.terrainType,
            overlayType: cell.overlayType,
            roadAxis: (cell.terrainType === TerrainType.ROAD_STRAIGHT_NS ? 'NS' :
                      cell.terrainType === TerrainType.ROAD_STRAIGHT_EW ? 'EW' : undefined) as 'NS' | 'EW' | undefined
          };
        })
      );
      const clonedOccupied = occupied.map(row => [...row]);
      const clonedBuildings = serializedBuildings.map(b => ({ ...b }));
      const clonedMacroGrid = macroGridRef
        ? (macroGridRef as any[][]).map(row => row.map(m => ({ district: m.district || 'any', name: m.name || '' })))
        : undefined;

      const snap: LayerSnapshot = {
        layerIndex,
        layerName,
        description,
        gridDim,
        tiles: clonedTiles,
        buildings: clonedBuildings,
        occupied: clonedOccupied,
        macroGrid: clonedMacroGrid
      };
      snapshots.push(snap);
      return snap;
    };

    // ── PASS 1: MACRO GEOGRAPHY (Ocean Coastline Spline & Grass Default) ──
    let t0 = performance.now();

    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        if (preset === 'retro_arcade') {
          // SE Canal & Harbor water body
          if (gx >= 35 && gz >= 45 && (gx + gz >= 90 || gz >= 54)) {
            TileMap.setTerrain(gx, gz, TerrainType.WATER);
            occupied[gx][gz] = true;
          } else {
            TileMap.setTerrain(gx, gz, TerrainType.GRASS);
          }
        } else {
          // Metropolitan NY ocean spline
          if (gx + gz >= 88) {
            TileMap.setTerrain(gx, gz, TerrainType.WATER);
            occupied[gx][gz] = true;
          } else {
            TileMap.setTerrain(gx, gz, TerrainType.GRASS);
          }
        }
      }
    }
    layerTimings['Pass 1 (Geography)'] = performance.now() - t0;
    const snap1 = captureSnapshot(0, 'Pass 1: Macro Geography', 'Ocean coastlines, harbor canal, and base terrain');
    onProgress?.(0, this.TOTAL_LAYERS, `Pass 1: Macro geography for '${config.name}'...`, snap1);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));

    // ── PASS 2: WATER PLATFORMS & ISLAND ANCHORS ─────────────────────────
    t0 = performance.now();

    const platformGx = 52, platformGz = 52, platformW = 6, platformH = 6;
    paintTerrain(platformGx, platformGz, platformW, platformH, TerrainType.PLAZA_STONE);
    for (let dx = 0; dx < platformW; dx++) {
      for (let dz = 0; dz < platformH; dz++) {
        const tx = platformGx + dx, tz = platformGz + dz;
        if (tx < gridDim && tz < gridDim) occupied[tx][tz] = false;
      }
    }
    placeBuilding(platformGx + 1, platformGz + 1, 'statue_liberty', 'landmark', 0);
    layerTimings['Pass 2 (Platforms)'] = performance.now() - t0;
    const snap2 = captureSnapshot(1, 'Pass 2: Islands & Platforms', 'Water platforms and Statue of Liberty island anchor');
    onProgress?.(1, this.TOTAL_LAYERS, 'Pass 2: Water platforms & island anchors...', snap2);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));
    
    // ── PASS 3: HIERARCHICAL 8x8 MACRO-BLOCK WFC SOLVE ───────────────────
    t0 = performance.now();

    const wfcSolver = new WFCSolver(gridDim);
    const macroGrid = wfcSolver.solveMacroGrid(8, WFC_MACRO_MODULES, seed);
    layerTimings['Pass 3 (Macro WFC Solve)'] = performance.now() - t0;
    const snap3 = captureSnapshot(2, 'Pass 3: Macro WFC Districts', '8x8 Macro-Block district allocation', macroGrid);
    onProgress?.(2, this.TOTAL_LAYERS, `Pass 3: Solving 8x8 Macro-Block WFC grid...`, snap3);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));

    // ── PASS 4: ROAD GRID RASTERIZATION ──────────────────────────────────
    t0 = performance.now();

    for (let mx = 0; mx < 8; mx++) {
      for (let mz = 0; mz < 8; mz++) {
        const mod = macroGrid[mx][mz];
        const baseGx = mx * 8;
        const baseGz = mz * 8;

        for (let lx = 0; lx < 8; lx++) {
          for (let lz = 0; lz < 8; lz++) {
            const gx = baseGx + lx;
            const gz = baseGz + lz;
            if (gx < gridDim && gz < gridDim) {
              const cellData = mod.grid[lx][lz];
              const cell = TileMap.getCell(gx, gz);
              if (cell && cell.terrainType !== TerrainType.WATER) {
                cell.terrainType = cellData.terrainType;
                cell.overlayType = cellData.overlayType;

                if (cellData.overlayType === OverlayTileType.ROAD) {
                  occupied[gx][gz] = true;
                }
              }
            }
          }
        }
      }
    }
    layerTimings['Pass 4 (Road Grid)'] = performance.now() - t0;
    const snap4 = captureSnapshot(3, 'Pass 4: Road Grid & Infrastructure', 'Avenues, street corridors, and intersection grid', macroGrid);
    onProgress?.(3, this.TOTAL_LAYERS, 'Pass 4: Rasterizing Macro-Module road grid...', snap4);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));

    // ── PASS 5: BUILDINGS & LANDMARKS RASTERIZATION ───────────────────────
    t0 = performance.now();

    for (let mx = 0; mx < 8; mx++) {
      for (let mz = 0; mz < 8; mz++) {
        const mod = macroGrid[mx][mz];
        const baseGx = mx * 8;
        const baseGz = mz * 8;

        for (let lx = 0; lx < 8; lx++) {
          for (let lz = 0; lz < 8; lz++) {
            const gx = baseGx + lx;
            const gz = baseGz + lz;
            if (gx < gridDim && gz < gridDim) {
              const cellData = mod.grid[lx][lz];
              const cell = TileMap.getCell(gx, gz);
              if (cell && cell.terrainType !== TerrainType.WATER) {
                if (cellData.buildingType && !occupied[gx][gz]) {
                  placeBuilding(gx, gz, cellData.buildingType, 'macro_wfc', 0);
                }
              }
            }
          }
        }
      }
    }

    // Statue of Liberty Landmark Anchor on Island
    placeBuilding(51, 51, 'statue_liberty', 'landmark', 0);
    layerTimings['Pass 5 (Buildings)'] = performance.now() - t0;
    const snap5 = captureSnapshot(4, 'Pass 5: Buildings & Footprints', 'Streetfront shops, mid-rises, skyscrapers, and civic anchors', macroGrid);
    onProgress?.(4, this.TOTAL_LAYERS, 'Pass 5: Sited civic landmarks and building lots...', snap5);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));

    // ── PASS 6: 4,096-TILE SERIALIZATION & PACKAGING ───────────────────────
    t0 = performance.now();

    const serializedTiles: SerializedTile[][] = Array.from({ length: gridDim }, (_, gx) =>
      Array.from({ length: gridDim }, (_, gz) => {
        const cell = TileMap.getCell(gx, gz)!;
        return {
          terrainType: cell.terrainType,
          overlayType: cell.overlayType,
          isIntersection: cell.terrainType === TerrainType.ROAD_INTERSECTION,
          roadAxis: cell.terrainType === TerrainType.ROAD_STRAIGHT_NS ? 'NS' :
                    cell.terrainType === TerrainType.ROAD_STRAIGHT_EW ? 'EW' : undefined
        };
      })
    );

    const totalTime = performance.now() - startTime;
    layerTimings['Total Bake Time'] = totalTime;

    const mapData: GeneratedMapData = {
      version: this.SCHEMA_VERSION,
      seed,
      gridDim,
      tiles: serializedTiles,
      buildings: serializedBuildings,
      roadWaypoints,
      metadata: {
        generatedAt: new Date().toISOString(),
        layerTimings,
        wfcAttempts: 50,
        buildingCount: serializedBuildings.length
      }
    };

    const jsonString = JSON.stringify(mapData, null, 2);
    const snap6 = captureSnapshot(5, 'Pass 6: Final Composite', '4,096-tile array serialization & map packaging', macroGrid);
    onProgress?.(5, this.TOTAL_LAYERS, 'Pass 6: Map packaging complete!', snap6);

    console.log(
      `[MapBaker] Bake complete for '${config.name}'! Buildings: ${mapData.buildings.length}, ` +
      `Tiles: ${gridDim}x${gridDim} (4096 cells), Size: ${(jsonString.length / 1024).toFixed(1)} KB`
    );

    return { data: mapData, jsonString, snapshots };
  }
}
