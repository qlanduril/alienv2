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

export interface ProgressCallback {
  (layer: number, totalLayers: number, message: string): void;
}

export class MapBaker {
  private static readonly SCHEMA_VERSION = '1.0.0';
  private static readonly TOTAL_LAYERS = 6;

  /**
   * Main Dual-Preset Offline Bake Pipeline (Passes 1 through 6)
   */
  public static async bake(
    seed: number = 42,
    preset: CityPresetName = 'retro_arcade',
    onProgress?: ProgressCallback
  ): Promise<{ data: GeneratedMapData; jsonString: string }> {
    const startTime = performance.now();
    const config = getCityPreset(preset);
    const layerTimings: Record<string, number> = {};
    const gridDim = TileMap.GRID_DIM; // 64

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

    // ── PASS 1: MACRO GEOGRAPHY (Ocean Coastline Spline & Grass Default) ──
    let t0 = performance.now();
    onProgress?.(0, this.TOTAL_LAYERS, `Pass 1: Macro geography for '${config.name}'...`);

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

    // ── PASS 2: WATER PLATFORMS & ISLAND ANCHORS ─────────────────────────
    t0 = performance.now();
    onProgress?.(1, this.TOTAL_LAYERS, 'Pass 2: Water platforms & Statue of Liberty island anchor...');

    const platformGx = 52, platformGz = 52, platformW = 6, platformH = 6;
    paintTerrain(platformGx, platformGz, platformW, platformH, TerrainType.PLAZA_STONE);
    for (let dx = 0; dx < platformW; dx++) {
      for (let dz = 0; dz < platformH; dz++) {
        const tx = platformGx + dx, tz = platformGz + dz;
        if (tx < gridDim && tz < gridDim) occupied[tx][tz] = false;
      }
    }
    placeBuilding(platformGx + 1, platformGz + 1, 'statue_liberty', 'landmark', 0);
    layerTimings['Pass 2 (Islands)'] = performance.now() - t0;

    // ── PASS 3: HIERARCHICAL ROAD NETWORK ─────────────────────────────────
    t0 = performance.now();
    onProgress?.(2, this.TOTAL_LAYERS, `Pass 3: Road network hierarchy for '${config.name}'...`);

    const markRoadCell = (gx: number, gz: number, axis: 'NS' | 'EW') => {
      if (gx < 0 || gx >= gridDim || gz < 0 || gz >= gridDim) return;
      if (TileMap.getCell(gx, gz)?.terrainType === TerrainType.WATER) return;

      TileMap.setRoad(gx, gz, axis);
      occupied[gx][gz] = true;
    };

    // Primary Arterial Avenues (2-lanes wide through center)
    const arterialCols = [31, 32];
    for (const gx of arterialCols) {
      for (let gz = 0; gz < 56; gz++) markRoadCell(gx, gz, 'NS');
      const cell = TileMap.getCell(gx, 0);
      if (cell) roadWaypoints.push({ worldX: cell.worldX, worldZ: cell.worldZ, name: `Arterial Prime Ave ${gx}` });
    }

    if (preset === 'retro_arcade') {
      // NW Airfield Runways & Tarmac (gx=0..16, gz=0..16)
      for (let gx = 1; gx <= 15; gx++) {
        markRoadCell(gx, 4, 'EW');
        markRoadCell(gx, 10, 'EW');
      }
    }

    // Coastal Diagonal Boulevard
    for (let i = 0; i <= 44; i++) {
      const gx = 10 + i;
      const gz = 54 - Math.floor(i * 0.65);
      if (gx < gridDim && gz >= 0) {
        markRoadCell(gx, gz, 'EW');
        markRoadCell(gx + 1, gz, 'EW');
      }
    }

    // Local Secondary Grid
    const gridLines = preset === 'metropolitan_ny' ? [20, 26, 32, 38, 44] : [16, 26, 36, 46];
    for (const line of gridLines) {
      for (let gz = 16; gz <= 44; gz++) markRoadCell(line, gz, 'NS');
      for (let gx = 16; gx <= 44; gx++) markRoadCell(gx, line, 'EW');
    }

    // Outer Avenues
    for (const gx of [8, 14, 50]) {
      for (let gz = 0; gz < 52; gz++) markRoadCell(gx, gz, 'NS');
    }
    for (const gz of [8, 14, 50]) {
      for (let gx = 0; gx < 52; gx++) markRoadCell(gx, gz, 'EW');
    }

    // Intersections
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (cell && cell.overlayType === OverlayTileType.ROAD) {
          const hasNS = TileMap.getCell(gx, gz - 1)?.overlayType === OverlayTileType.ROAD || TileMap.getCell(gx, gz + 1)?.overlayType === OverlayTileType.ROAD;
          const hasEW = TileMap.getCell(gx - 1, gz)?.overlayType === OverlayTileType.ROAD || TileMap.getCell(gx + 1, gz)?.overlayType === OverlayTileType.ROAD;
          if (hasNS && hasEW) {
            TileMap.setIntersection(gx, gz);
          }
        }
      }
    }

    // Sidewalk Flanks
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (cell && cell.overlayType === OverlayTileType.ROAD) {
          TileMap.setSidewalkIfNotRoad(gx - 1, gz);
          TileMap.setSidewalkIfNotRoad(gx + 1, gz);
          TileMap.setSidewalkIfNotRoad(gx, gz - 1);
          TileMap.setSidewalkIfNotRoad(gx, gz + 1);
        }
      }
    }
    layerTimings['Pass 3 (Road Hierarchy)'] = performance.now() - t0;

    // ── PASS 4: LANDMARK ANCHORS WITH BUFFER ZONES ────────────────────────
    t0 = performance.now();
    onProgress?.(3, this.TOTAL_LAYERS, 'Pass 4: Landmark anchors with dedicated buffer rings...');

    paintTerrain(6, 10, 8, 8, TerrainType.GRASS, 2);
    placeBuilding(8, 12, 'spaceship_hq', 'landmark', 2);

    paintTerrain(28, 24, 6, 6, TerrainType.PLAZA_STONE, 1);
    placeBuilding(29, 25, 'mega_titan', 'landmark', 1);

    paintTerrain(36, 1, 6, 6, TerrainType.GRASS, 1);
    placeBuilding(37, 2, 'mega_stadium', 'landmark', 1);
    paintTerrain(36, 12, 6, 6, TerrainType.GRASS, 1);
    placeBuilding(37, 13, 'mega_stadium', 'landmark', 1);

    placeBuilding(9, 39, '1', 'landmark', 1);
    placeBuilding(18, 39, '2', 'landmark', 1);
    placeBuilding(18, 28, 'pentagon_defense', 'landmark', 1);
    placeBuilding(18, 18, '3', 'landmark', 1);
    placeBuilding(28, 28, '5', 'landmark', 1);
    layerTimings['Pass 4 (Landmarks)'] = performance.now() - t0;

    // ── PASS 5: DISTRICT MORPHOLOGY & PERIMETER LOT INFILL ───────────────
    t0 = performance.now();
    onProgress?.(4, this.TOTAL_LAYERS, `Pass 5: Perimeter infill & monolith break (Max ${config.blockOccupancy.maxBuildingStreak} tiles)...`);

    const downtownPool = preset === 'metropolitan_ny'
      ? ['sky_cyber', 'b2', 'sky_artdeco', 'b1', 'sky_biotech', 'b3', 'res_sky', 'res_bronze', '5', 'b4']
      : ['b4', 'b3', 'b1', 'b2', 'sky_artdeco', 'res_sky', '5', 'res_bronze'];
    let dIdx = 0;
    let currentBuildingStreak = 0;

    for (let gx = 20; gx <= 44; gx++) {
      for (let gz = 20; gz <= 44; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (!cell || cell.overlayType === OverlayTileType.ROAD || cell.terrainType === TerrainType.WATER) continue;

        // Break continuous building clusters to prevent solid monoliths!
        if (currentBuildingStreak >= config.blockOccupancy.maxBuildingStreak) {
          cell.terrainType = TerrainType.PLAZA_STONE;
          currentBuildingStreak = 0;
          continue;
        }

        if (!occupied[gx][gz]) {
          const typeKey = downtownPool[dIdx % downtownPool.length];
          dIdx++;
          if (placeBuilding(gx, gz, typeKey, 'urban_cluster', 0)) {
            cell.terrainType = TerrainType.PLAZA_STONE;
            currentBuildingStreak++;
          } else {
            cell.terrainType = TerrainType.PLAZA_STONE;
            currentBuildingStreak = 0;
          }
        } else {
          currentBuildingStreak = 0;
        }
      }
    }

    // Suburban Low-Rise Infill
    const suburbPool = ['b1', 'b2', 'res_bronze', 'b3'];
    let sIdx = 0;

    for (let gx = 1; gx <= 25; gx++) {
      for (let gz = 35; gz <= 60; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (!cell || cell.overlayType === OverlayTileType.ROAD || cell.terrainType === TerrainType.WATER) continue;

        const isPerimeter = TileMap.getCell(gx - 1, gz)?.overlayType === OverlayTileType.SIDEWALK ||
                            TileMap.getCell(gx + 1, gz)?.overlayType === OverlayTileType.SIDEWALK ||
                            TileMap.getCell(gx, gz - 1)?.overlayType === OverlayTileType.SIDEWALK ||
                            TileMap.getCell(gx, gz + 1)?.overlayType === OverlayTileType.SIDEWALK;

        if (isPerimeter && !occupied[gx][gz]) {
          const typeKey = suburbPool[sIdx % suburbPool.length];
          sIdx++;
          placeBuilding(gx, gz, typeKey, 'suburban_house', 0);
        } else if (!occupied[gx][gz]) {
          cell.terrainType = TerrainType.GRASS;
        }
      }
    }

    // Harbor Docks Infill
    for (let gx = 35; gx < gridDim; gx++) {
      for (let gz = 35; gz < gridDim; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (!cell || cell.overlayType === OverlayTileType.ROAD || cell.terrainType === TerrainType.WATER) continue;

        if (!occupied[gx][gz]) {
          if (placeBuilding(gx, gz, '4', 'harbor_warehouse', 0)) {
            cell.terrainType = TerrainType.SIDEWALK;
          } else {
            cell.terrainType = TerrainType.PLAZA_STONE;
          }
        }
      }
    }
    layerTimings['Pass 5 (Perimeter Infill)'] = performance.now() - t0;

    // ── PASS 6: 4,096-TILE SERIALIZATION & PACKAGING ───────────────────────
    t0 = performance.now();
    onProgress?.(5, this.TOTAL_LAYERS, 'Pass 6: 4,096-tile array serialization & map packaging...');

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
    console.log(
      `[MapBaker] Bake complete for '${config.name}'! Buildings: ${mapData.buildings.length}, ` +
      `Tiles: ${gridDim}x${gridDim} (4096 cells), Size: ${(jsonString.length / 1024).toFixed(1)} KB`
    );

    return { data: mapData, jsonString };
  }
}
