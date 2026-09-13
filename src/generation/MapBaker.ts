import { TileMap, TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { CityPresetName, getCityPreset } from './CityConfig';
import {
  GeneratedMapData,
  SerializedTile,
  SerializedBuilding,
  SerializedWaypoint,
  RoundaboutInfo,
  RoadAxisType
} from './GeneratedMapSchema';

import { WFCSolver } from './WFCSolver';
import { WFC_MACRO_MODULES } from './WFCMacroModules';

export interface LayerSnapshot {
  layerIndex: number;
  layerName: string;
  description: string;
  gridDim: number;
  tiles: { terrainType: TerrainType; overlayType: OverlayTileType; roadAxis?: RoadAxisType }[][];
  buildings: SerializedBuilding[];
  occupied: boolean[][];
  macroGrid?: { district: string; name: string }[][];
  roundabouts?: RoundaboutInfo[];
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
    const currentRoundabouts: RoundaboutInfo[] = [];
    const cellRoadAxes: (RoadAxisType | undefined)[][] = Array.from({ length: gridDim }, () =>
      Array(gridDim).fill(undefined)
    );

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

    const UNIQUE_LANDMARK_KEYS = new Set([
      'mega_titan',
      'spaceship_hq',
      'financial_tower',
      'cyber_reactor',
      'statue_liberty'
    ]);
    const placedUniqueKeys = new Set<string>();

    const placeBuilding = (gx: number, gz: number, typeKey: string, lotType: string, buf = 0): boolean => {
      let finalKey = typeKey;
      if (UNIQUE_LANDMARK_KEYS.has(finalKey)) {
        if (placedUniqueKeys.has(finalKey)) {
          // Singularity Invariant: 3D models and Statue of Liberty can ONLY be placed once!
          if (finalKey === 'mega_titan' || finalKey === 'spaceship_hq') {
            finalKey = '5';
          } else if (finalKey === 'financial_tower' || finalKey === 'cyber_reactor') {
            finalKey = 'sky_cyber';
          } else {
            return false;
          }
        } else {
          placedUniqueKeys.add(finalKey);
        }
      }

      const def = BUILDING_DEFS[finalKey] || BUILDING_DEFS['3'];
      const w = def.footprintTiles ?? 1;
      const h = def.footprintTiles ?? 1;

      if (!canPlace(gx, gz, w, h, buf)) {
        if (UNIQUE_LANDMARK_KEYS.has(finalKey)) {
          placedUniqueKeys.delete(finalKey); // allow retry if placement failed
        }
        return false;
      }

      reserveArea(gx, gz, w, h, buf);
      const pos = LotManager.computeLotWorldPos(gx, gz, w, h);
      serializedBuildings.push({
        gx,
        gz,
        w,
        h,
        typeKey: finalKey,
        lotType,
        centerWorldX: pos.x,
        centerWorldZ: pos.z
      });
      return true;
    };

    const captureSnapshot = (
      layerIndex: number,
      layerName: string,
      description: string,
      macroGridRef?: any,
      roundaboutsRef?: RoundaboutInfo[]
    ): LayerSnapshot => {
      const clonedTiles = Array.from({ length: gridDim }, (_, gx) =>
        Array.from({ length: gridDim }, (_, gz) => {
          const cell = TileMap.getCell(gx, gz)!;
          let axis = cellRoadAxes[gx]?.[gz];
          if (!axis) {
            if (cell.terrainType === TerrainType.ROAD_STRAIGHT_NS) axis = 'NS';
            else if (cell.terrainType === TerrainType.ROAD_STRAIGHT_EW) axis = 'EW';
            else if (cell.terrainType === TerrainType.ROAD_ROUNDABOUT) axis = 'ROUNDABOUT';
            else if (cell.terrainType === TerrainType.ROAD_CURVE_NE) axis = 'CURVE_NE';
            else if (cell.terrainType === TerrainType.ROAD_CURVE_NW) axis = 'CURVE_NW';
            else if (cell.terrainType === TerrainType.ROAD_CURVE_SE) axis = 'CURVE_SE';
            else if (cell.terrainType === TerrainType.ROAD_CURVE_SW) axis = 'CURVE_SW';
          }
          return {
            terrainType: cell.terrainType,
            overlayType: cell.overlayType,
            roadAxis: axis
          };
        })
      );
      const clonedOccupied = occupied.map(row => [...row]);
      const clonedBuildings = serializedBuildings.map(b => ({ ...b }));
      const clonedMacroGrid = macroGridRef
        ? (macroGridRef as any[][]).map(row => row.map(m => ({ district: m.district || 'any', name: m.name || '' })))
        : undefined;

      const activeRoundabouts = roundaboutsRef || (currentRoundabouts.length > 0 ? currentRoundabouts : undefined);

      const snap: LayerSnapshot = {
        layerIndex,
        layerName,
        description,
        gridDim,
        tiles: clonedTiles,
        buildings: clonedBuildings,
        occupied: clonedOccupied,
        macroGrid: clonedMacroGrid,
        roundabouts: activeRoundabouts ? activeRoundabouts.map(r => ({ ...r })) : undefined
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

    // Natural Shoreline (WATER_SHORE) and Beach (SAND) Transition Pass
    const isWater = (x: number, z: number) => {
      const c = TileMap.getCell(x, z);
      return c && (c.terrainType === TerrainType.WATER || c.terrainType === TerrainType.WATER_SHORE);
    };

    const toShore: Array<{ gx: number; gz: number }> = [];
    const toSand: Array<{ gx: number; gz: number }> = [];

    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        const c = TileMap.getCell(gx, gz);
        if (!c) continue;

        if (c.terrainType === TerrainType.WATER) {
          // If water borders land, it becomes shallow coastal surf with white foam
          const hasLandNeighbor = [[gx - 1, gz], [gx + 1, gz], [gx, gz - 1], [gx, gz + 1]].some(([nx, nz]) => {
            if (nx < 0 || nx >= gridDim || nz < 0 || nz >= gridDim) return false;
            const nc = TileMap.getCell(nx, nz);
            return nc && nc.terrainType !== TerrainType.WATER;
          });
          if (hasLandNeighbor) toShore.push({ gx, gz });
        } else if (c.terrainType === TerrainType.GRASS) {
          // If grass borders water, it becomes golden beach sand
          const hasWaterNeighbor = [[gx - 1, gz], [gx + 1, gz], [gx, gz - 1], [gx, gz + 1]].some(([nx, nz]) => {
            if (nx < 0 || nx >= gridDim || nz < 0 || nz >= gridDim) return false;
            return isWater(nx, nz);
          });
          if (hasWaterNeighbor) toSand.push({ gx, gz });
        }
      }
    }

    for (const { gx, gz } of toShore) {
      TileMap.setTerrain(gx, gz, TerrainType.WATER_SHORE);
      occupied[gx][gz] = true;
    }
    for (const { gx, gz } of toSand) {
      TileMap.setTerrain(gx, gz, TerrainType.SAND);
    }

    layerTimings['Pass 1 (Geography)'] = performance.now() - t0;
    const snap1 = captureSnapshot(0, 'Pass 1: Macro Geography', 'Ocean coastlines, beach transitions, and shallow surf');
    onProgress?.(0, this.TOTAL_LAYERS, `Pass 1: Macro geography for '${config.name}'...`, snap1);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));

    // ── PASS 2: 3D BUILDING ZONES & ISLAND ANCHORS (ZONES FIRST) ─────────
    t0 = performance.now();

    // 1. South-East Island Platform (Statue of Liberty exclusively in water area!)
    const platformGx = 50, platformGz = 50, platformW = 6, platformH = 6;
    for (let dx = 0; dx < platformW; dx++) {
      for (let dz = 0; dz < platformH; dz++) {
        const tx = platformGx + dx, tz = platformGz + dz;
        if (tx < gridDim && tz < gridDim) {
          if (dx === 0 || dx === platformW - 1 || dz === 0 || dz === platformH - 1) {
            TileMap.setTerrain(tx, tz, TerrainType.SAND); // Island beach shoreline
          } else {
            TileMap.setTerrain(tx, tz, TerrainType.PLAZA_STONE); // Center monument plaza
          }
          occupied[tx][tz] = false;
        }
      }
    }
    placeBuilding(platformGx + 1, platformGz + 1, 'statue_liberty', 'landmark', 0);

    // 2. Pre-establish 3D Building Superblock Ground Zones (before road stamping)
    // - Tech Citadel Superblock at mx=1, mz=1 (gx 8..15, gz 8..15)
    paintTerrain(8, 8, 8, 8, TerrainType.PLAZA_STONE);
    // - Financial District Superblock at mx=2, mz=2 (gx 16..23, gz 16..23)
    paintTerrain(16, 16, 8, 8, TerrainType.PLAZA_STONE);
    // - Downtown Apex Citadel at mx=4, mz=2 (gx 32..39, gz 16..23)
    paintTerrain(32, 16, 8, 8, TerrainType.PLAZA_STONE);
    // - Quantum Energy Reactor at mx=4, mz=4 (gx 32..39, gz 32..39)
    paintTerrain(32, 32, 8, 8, TerrainType.PLAZA_STONE);
    // - Central Traffic Nexus at mx=3, mz=3 (gx 24..31, gz 24..31)
    paintTerrain(24, 24, 8, 8, TerrainType.PLAZA_STONE);

    layerTimings['Pass 2 (Zones & Platforms)'] = performance.now() - t0;
    const snap2 = captureSnapshot(1, 'Pass 2: 3D Building Zones & Platforms', 'Established 3D landmark superblocks and harbor island platform');
    onProgress?.(1, this.TOTAL_LAYERS, 'Pass 2: Establishing 3D building zones & superblocks...', snap2);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));
    
    // ── PASS 3: ZONE-CONSTRAINED MACRO WFC ROAD SOLVE ───────────────────
    t0 = performance.now();

    const wfcSolver = new WFCSolver(gridDim);
    const macroGrid = wfcSolver.solveMacroGrid(8, WFC_MACRO_MODULES, seed);
    layerTimings['Pass 3 (Macro WFC Solve)'] = performance.now() - t0;
    const snap3 = captureSnapshot(2, 'Pass 3: Macro WFC Districts', '8x8 Macro-Block district allocation with 3D anchors', macroGrid);
    onProgress?.(2, this.TOTAL_LAYERS, `Pass 3: Solving 8x8 Macro-Block WFC grid around zones...`, snap3);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));

    // ── PASS 4: ARTERIAL ROAD NETWORK & INTERIOR ALLEYS ─────────────────
    t0 = performance.now();

    for (let mx = 0; mx < 8; mx++) {
      for (let mz = 0; mz < 8; mz++) {
        const mod = macroGrid[mx][mz];
        const baseGx = mx * 8;
        const baseGz = mz * 8;

        if (mod.id === 'grand_central_roundabout' || mod.id === 'district_rotary_park') {
          currentRoundabouts.push({
            cx: baseGx + 4.0,
            cz: baseGz + 4.0,
            radius: 2.3,
            islandType: mod.id === 'district_rotary_park' ? 'grass' : 'plaza',
            monumentKey: mod.id === 'grand_central_roundabout' ? 'sky_artdeco' : 'b1'
          });
        } else if (mod.id.startsWith('culdesac_') || mod.id === 'suburban_culdesac_loop' || mod.id === 'residential_culdesac_homes') {
          currentRoundabouts.push({
            cx: baseGx + 4.0,
            cz: baseGz + 4.0,
            radius: 1.6,
            islandType: 'grass'
          });
        }

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
                cellRoadAxes[gx][gz] = cellData.roadAxis;

                if (TileMap.isRoad(cellData.terrainType, cellData.overlayType)) {
                  occupied[gx][gz] = true;
                }
              }
            }
          }
        }
      }
    }

    // Guarantee at least one signature Grand Central Roundabout at city center if none was placed
    if (currentRoundabouts.length === 0) {
      const rcx = 28.0, rcz = 28.0;
      currentRoundabouts.push({
        cx: rcx,
        cz: rcz,
        radius: 2.3,
        islandType: 'plaza',
        monumentKey: 'sky_artdeco'
      });

      for (let gx = 25; gx <= 30; gx++) {
        for (let gz = 25; gz <= 30; gz++) {
          const dist = Math.hypot(gx + 0.5 - rcx, gz + 0.5 - rcz);
          if (dist <= 1.2) {
            TileMap.setTerrain(gx, gz, TerrainType.PLAZA_STONE);
            if (gx === 27 && gz === 27) {
              placeBuilding(gx, gz, 'sky_artdeco', 'landmark', 0);
            }
          } else if (dist <= 2.8) {
            TileMap.setRoundabout(gx, gz);
            occupied[gx][gz] = true;
            cellRoadAxes[gx][gz] = 'ROUNDABOUT';
          }
        }
      }
      // Radial feeder avenues connecting to surrounding grid
      for (let d = 0; d < 2; d++) {
        TileMap.setRoad(27 + d, 24, 'NS'); occupied[27 + d][24] = true; cellRoadAxes[27 + d][24] = 'NS';
        TileMap.setRoad(27 + d, 31, 'NS'); occupied[27 + d][31] = true; cellRoadAxes[27 + d][31] = 'NS';
        TileMap.setRoad(24, 27 + d, 'EW'); occupied[24][27 + d] = true; cellRoadAxes[24][27 + d] = 'EW';
        TileMap.setRoad(31, 27 + d, 'EW'); occupied[31][27 + d] = true; cellRoadAxes[31][27 + d] = 'EW';
      }
    }

    layerTimings['Pass 4 (Road Grid)'] = performance.now() - t0;
    const snap4 = captureSnapshot(3, 'Pass 4: Arterial Roads & Alleys', 'Arterial avenues around zones, circular rotaries & interior alleys', macroGrid, currentRoundabouts);
    onProgress?.(3, this.TOTAL_LAYERS, 'Pass 4: Routing arterial roads around zones & interior alleys...', snap4);
    if (stepDelayMs > 0) await new Promise(r => setTimeout(r, stepDelayMs));

    // ── PASS 5: 3D LANDMARKS & HIGH-DENSITY BUILDING INFILL ───────────────
    t0 = performance.now();

    // 1. Gather all candidate buildings from the solved macro grid
    const candidateBuildings: Array<{ gx: number; gz: number; typeKey: string; fp: number }> = [];

    for (let mx = 0; mx < 8; mx++) {
      for (let mz = 0; mz < 8; mz++) {
        const mod = macroGrid[mx][mz];
        const baseGx = mx * 8;
        const baseGz = mz * 8;

        for (let lx = 0; lx < 8; lx++) {
          for (let lz = 0; lz < 8; lz++) {
            const cellData = mod.grid[lx][lz];
            if (cellData.buildingType) {
              const def = BUILDING_DEFS[cellData.buildingType];
              const fp = def?.footprintTiles ?? 1;
              candidateBuildings.push({
                gx: baseGx + lx,
                gz: baseGz + lz,
                typeKey: cellData.buildingType,
                fp
              });
            }
          }
        }
      }
    }

    // 2. Sort by footprint size descending so 3D landmarks (4x4, 3x3) claim lots first!
    candidateBuildings.sort((a, b) => b.fp - a.fp);

    for (const b of candidateBuildings) {
      if (!occupied[b.gx][b.gz]) {
        const is3D = !!BUILDING_DEFS[b.typeKey]?.is3D;
        placeBuilding(b.gx, b.gz, b.typeKey, is3D ? 'landmark_3d' : b.fp >= 3 ? 'landmark' : 'macro_wfc', 0);
      }
    }

    // 3. Guarantee all 4 signature 3D Landmark models are placed
    const landmark3DList = [
      { key: 'mega_titan',       gx: 34, gz: 18, lotType: 'landmark_3d' }, // 4x4 Apex Mega-Tower at mx=4, mz=2
      { key: 'spaceship_hq',     gx: 10, gz: 10, lotType: 'landmark_3d' }, // 4x4 Alien Spaceship HQ at mx=1, mz=1
      { key: 'financial_tower',  gx: 18, gz: 18, lotType: 'landmark_3d' }, // 3x3 Metro Financial Tower at mx=2, mz=2
      { key: 'cyber_reactor',    gx: 34, gz: 34, lotType: 'landmark_3d' }, // 3x3 Quantum Cyber Reactor at mx=4, mz=4
    ];

    for (const lm of landmark3DList) {
      if (!serializedBuildings.some(b => b.typeKey === lm.key)) {
        console.log(`[MapBaker] Ensuring placement of signature 3D landmark: '${lm.key}' at (${lm.gx}, ${lm.gz})`);
        placeBuilding(lm.gx, lm.gz, lm.key, lm.lotType, 0);
      }
    }

    // 4. Urban streetfront infill pass: ensure vibrant streets without empty pavement
    for (let gx = 1; gx < gridDim - 1; gx++) {
      for (let gz = 1; gz < gridDim - 1; gz++) {
        if (!occupied[gx][gz]) {
          const cell = TileMap.getCell(gx, gz);
          if (
            cell &&
            cell.overlayType !== OverlayTileType.ROAD &&
            cell.terrainType !== TerrainType.WATER &&
            cell.terrainType !== TerrainType.WATER_SHORE
          ) {
            // Check if cell borders a sidewalk or road
            let hasStreetfront = false;
            const neighbors = [[gx - 1, gz], [gx + 1, gz], [gx, gz - 1], [gx, gz + 1]];
            for (const [nx, nz] of neighbors) {
              const nc = TileMap.getCell(nx, nz);
              if (nc && (nc.overlayType === OverlayTileType.SIDEWALK || nc.overlayType === OverlayTileType.ROAD)) {
                hasStreetfront = true;
                break;
              }
            }

            // Keep sandy beaches open, with occasional beach pavilion
            if (cell.terrainType === TerrainType.SAND) {
              if (hasStreetfront && Math.abs(gx * 31 + gz * 97) % 100 < 20) {
                placeBuilding(gx, gz, 'b1', 'beach_kiosk', 0);
              }
              continue;
            }

            // District-aware infill: Suburbs get family homes (Brownstones b2) and quiet apartments (b3)
            const mx = Math.floor(gx / 8);
            const mz = Math.floor(gz / 8);
            const mod = macroGrid[mx]?.[mz];
            const isSuburbs = mod?.district === 'suburbs';

            const pool = isSuburbs
              ? ['b2', 'b2', 'b2', 'b3', 'b1', 'res_bronze'] // 75% family homes & brownstones
              : ['b1', 'b2', 'b3', 'b4', 'res_bronze', 'res_sky'];

            if (hasStreetfront && Math.abs(gx * 1337 + gz * 7331) % 100 < 80) {
              const pickKey = pool[Math.abs(gx * 31 + gz * 97) % pool.length];
              placeBuilding(gx, gz, pickKey, isSuburbs ? 'suburban_home' : 'dense_infill', 0);
            }
          }
        }
      }
    }

    layerTimings['Pass 5 (Buildings)'] = performance.now() - t0;
    const snap5 = captureSnapshot(4, 'Pass 5: 3D Landmarks & Buildings', 'Signature 3D towers, commercial spires & streetfront infill', macroGrid);
    onProgress?.(4, this.TOTAL_LAYERS, 'Pass 5: Instantiating 3D landmarks & building streetfronts...', snap5);
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
          roadAxis: cellRoadAxes[gx]?.[gz] ||
                    (cell.terrainType === TerrainType.ROAD_STRAIGHT_NS ? 'NS' :
                     cell.terrainType === TerrainType.ROAD_STRAIGHT_EW ? 'EW' :
                     cell.terrainType === TerrainType.ROAD_ROUNDABOUT ? 'ROUNDABOUT' :
                     cell.terrainType === TerrainType.ROAD_CURVE_NE ? 'CURVE_NE' :
                     cell.terrainType === TerrainType.ROAD_CURVE_NW ? 'CURVE_NW' :
                     cell.terrainType === TerrainType.ROAD_CURVE_SE ? 'CURVE_SE' :
                     cell.terrainType === TerrainType.ROAD_CURVE_SW ? 'CURVE_SW' : undefined)
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
