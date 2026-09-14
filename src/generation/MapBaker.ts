import {
  TileMap,
  TerrainType,
  OverlayTileType,
  ELEVATION_TIER_WATER,
  ELEVATION_TIER_LOW,
  ELEVATION_TIER_MID,
  ELEVATION_TIER_HIGH
} from '../rendering/TileSystem/TileMap';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { CityPresetName, getCityPreset } from './CityConfig';
import {
  GeneratedMapData,
  SerializedTile,
  SerializedBuilding,
  SerializedWaypoint,
  RoundaboutInfo,
  RoadAxisType,
  BoundaryExitInfo,
  BoundaryWaterInfo
} from './GeneratedMapSchema';

import { WFCSolver } from './WFCSolver';
import { WFC_MACRO_MODULES } from './WFCMacroModules';

export interface LayerSnapshot {
  layerIndex: number;
  layerName: string;
  description: string;
  gridDim: number;
  tiles: { terrainType: TerrainType; overlayType: OverlayTileType; roadAxis?: RoadAxisType; elevation?: number; elevationTier?: number }[][];
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
    /**
     * Strict placement safety: Returns true ONLY if every cell of footprint + buffer ring is
     * free, NOT occupied, NOT a road cell, NOT water/shore/sand, and maintains a proper
     * water clearance buffer.
     */
    const canPlace = (gx: number, gz: number, w: number, h: number, buf = 0, typeKey?: string): boolean => {
      // Singularity exception for Statue of Liberty on its dedicated offshore platform
      if (typeKey === 'statue_liberty') {
        for (let dx = 0; dx < w; dx++) {
          for (let dz = 0; dz < h; dz++) {
            const tx = gx + dx, tz = gz + dz;
            if (tx < 0 || tx >= gridDim || tz < 0 || tz >= gridDim) return false;
            if (occupied[tx][tz]) return false;
          }
        }
        return true;
      }

      // 1. Boundary Ring 0 Check: NO buildings may sit on the outermost world perimeter
      if (gx <= 0 || gx + w >= gridDim || gz <= 0 || gz + h >= gridDim) {
        return false;
      }

      // 2. Highrises, Spires & 3D Landmarks must be indented at least 2 tiles from world borders
      const isTallOrLandmark = w >= 2 || h >= 2 || (typeKey && (
        typeKey.startsWith('sky_') ||
        typeKey.startsWith('mega_') ||
        UNIQUE_LANDMARK_KEYS.has(typeKey) ||
        typeKey === '5' || typeKey === '4' ||
        typeKey === '1' || typeKey === '2' || typeKey === '3'
      ));

      if (isTallOrLandmark) {
        if (gx < 2 || gx + w > gridDim - 2 || gz < 2 || gz + h > gridDim - 2) {
          return false;
        }
      }

      // 3. Footprint + Buffer Check
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const tx = gx + dx, tz = gz + dz;
          if (tx < 0 || tx >= gridDim || tz < 0 || tz >= gridDim) return false;
          if (occupied[tx][tz]) return false;

          const cell = TileMap.getCell(tx, tz);
          if (!cell) return false;

          // STRICT INVARIANT: Buildings must NEVER overlap road tiles, water, shoreline or beach sand!
          if (
            cell.overlayType === OverlayTileType.ROAD ||
            cell.terrainType === TerrainType.WATER ||
            cell.terrainType === TerrainType.WATER_SHORE ||
            cell.terrainType === TerrainType.SAND
          ) {
            return false;
          }
        }
      }

      // 3.5 Elevation Uniformity Check:
      // Multi-tile buildings must sit on a single flat plateau tier (never straddle a cliff or ramp)
      const baseTier = TileMap.getCell(gx, gz)?.elevationTier;
      for (let dx = 0; dx < w; dx++) {
        for (let dz = 0; dz < h; dz++) {
          const tx = gx + dx, tz = gz + dz;
          const c = TileMap.getCell(tx, tz);
          if (!c || c.elevationTier !== baseTier) {
            return false;
          }
        }
      }

      // 4. Coastal Water Clearance Buffer:
      // Regular buildings must be at least 1 tile away from water & shoreline surf.
      // Skyscrapers and 3D landmarks must be at least 2 tiles away from water & shoreline surf.
      const waterClearance = isTallOrLandmark ? 2 : 1;
      for (let dx = -waterClearance; dx < w + waterClearance; dx++) {
        for (let dz = -waterClearance; dz < h + waterClearance; dz++) {
          const tx = gx + dx, tz = gz + dz;
          if (tx >= 0 && tx < gridDim && tz >= 0 && tz < gridDim) {
            const cell = TileMap.getCell(tx, tz);
            if (
              cell &&
              (cell.terrainType === TerrainType.WATER ||
               cell.terrainType === TerrainType.WATER_SHORE ||
               cell.terrainType === TerrainType.SAND)
            ) {
              return false;
            }
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
      'art_deco_skyscraper',
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
          } else if (finalKey === 'art_deco_skyscraper') {
            finalKey = 'sky_artdeco';
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

      if (!canPlace(gx, gz, w, h, buf, finalKey)) {
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
        centerWorldZ: pos.z,
        elevation: TileMap.getCell(gx, gz)?.elevation ?? 0
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
            else if (cell.terrainType === TerrainType.ROAD_RAMP_NS) axis = 'RAMP_NS';
            else if (cell.terrainType === TerrainType.ROAD_RAMP_EW) axis = 'RAMP_EW';
          }
          return {
            terrainType: cell.terrainType,
            overlayType: cell.overlayType,
            roadAxis: axis,
            elevation: cell.elevation,
            elevationTier: cell.elevationTier
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

    const isMacroWater = (gx: number, gz: number): boolean => {
      if (preset === 'retro_arcade') {
        // SE Canal & Harbor water body
        return gx >= 35 && gz >= 45 && (gx + gz >= 90 || gz >= 54);
      } else {
        // Metropolitan NY ocean spline
        return gx + gz >= 88;
      }
    };

    // Pre-calculate exact distance-to-water map using multi-source BFS
    const distToWater: number[][] = Array.from({ length: gridDim }, () =>
      Array(gridDim).fill(999)
    );
    const waterQueue: [number, number][] = [];

    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        if (isMacroWater(gx, gz)) {
          TileMap.setTerrain(gx, gz, TerrainType.WATER);
          occupied[gx][gz] = true;
          distToWater[gx][gz] = 0;
          waterQueue.push([gx, gz]);
        } else {
          TileMap.setTerrain(gx, gz, TerrainType.GRASS);
        }
      }
    }

    let qHead = 0;
    while (qHead < waterQueue.length) {
      const [qx, qz] = waterQueue[qHead++];
      const d = distToWater[qx][qz];
      for (const [nx, nz] of [[qx - 1, qz], [qx + 1, qz], [qx, qz - 1], [qx, qz + 1]]) {
        if (nx >= 0 && nx < gridDim && nz >= 0 && nz < gridDim) {
          if (distToWater[nx][nz] > d + 1) {
            distToWater[nx][nz] = d + 1;
            waterQueue.push([nx, nz]);
          }
        }
      }
    }

    // Initial Natural Shoreline (WATER_SHORE) and Beach (SAND) Transition Pass
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        if (distToWater[gx][gz] === 0) {
          // If water borders land, it becomes shallow coastal surf with white foam
          const hasLandNeighbor = [[gx - 1, gz], [gx + 1, gz], [gx, gz - 1], [gx, gz + 1]].some(([nx, nz]) => {
            if (nx < 0 || nx >= gridDim || nz < 0 || nz >= gridDim) return false;
            return distToWater[nx][nz] > 0;
          });
          if (hasLandNeighbor) {
            TileMap.setTerrain(gx, gz, TerrainType.WATER_SHORE);
            occupied[gx][gz] = true;
          }
        } else if (distToWater[gx][gz] === 1) {
          // Immediate border with water becomes golden beach sand
          TileMap.setTerrain(gx, gz, TerrainType.SAND);
          occupied[gx][gz] = true;
        }
      }
    }

    // ── ESTABLISH STEPPED PLATEAU ELEVATION TIERS ──
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        const cell = TileMap.getCell(gx, gz)!;

        // Tier 0 (Sunken Waterfront / Sea Level: Y = -14)
        if (
          cell.terrainType === TerrainType.WATER ||
          cell.terrainType === TerrainType.WATER_SHORE ||
          cell.terrainType === TerrainType.SAND ||
          distToWater[gx][gz] <= 1
        ) {
          cell.elevationTier = 0;
          cell.elevation = ELEVATION_TIER_WATER;
          continue;
        }

        // Tier 3 (High-Tech Apex Citadel Summit: Y = +32)
        // Pedestal centered around the central core (mega_titan at 34, 18)
        const inApexX = gx >= 24 && gx <= 43;
        const inApexZ = gz >= 14 && gz <= 33;
        if (inApexX && inApexZ && distToWater[gx][gz] >= 6) {
          cell.elevationTier = 3;
          cell.elevation = ELEVATION_TIER_HIGH;
          continue;
        }

        // Tier 2 (Mid-City Uptown Plateau: Y = +16)
        // Wide raised terrace surrounding the citadel
        const inMidX = gx >= 12 && gx <= 51;
        const inMidZ = gz >= 10 && gz <= 47;
        if (inMidX && inMidZ && distToWater[gx][gz] >= 4) {
          cell.elevationTier = 2;
          cell.elevation = ELEVATION_TIER_MID;
          continue;
        }

        // Tier 1 (Downtown Lower Plains: Y = 0)
        // Outer urban street grid, parks, and residential neighborhoods
        cell.elevationTier = 1;
        cell.elevation = ELEVATION_TIER_LOW;
      }
    }

    layerTimings['Pass 1 (Geography)'] = performance.now() - t0;
    const snap1 = captureSnapshot(0, 'Pass 1: Macro Geography', 'Stepped plateaus, ocean coastlines, and beach transitions');
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
          const c = TileMap.getCell(tx, tz);
          if (c) {
            c.elevationTier = 1;
            c.elevation = ELEVATION_TIER_LOW; // Raised monument island out of sunken water
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
              // Preserve Statue of Liberty offshore island platform
              if (gx >= platformGx && gx < platformGx + platformW && gz >= platformGz && gz < platformGz + platformH) {
                continue;
              }

              const cellData = mod.grid[lx][lz];
              const cell = TileMap.getCell(gx, gz);
              if (!cell) continue;

              if (distToWater[gx][gz] === 0) {
                // Keep deep ocean water
                cell.terrainType = TerrainType.WATER;
                cell.overlayType = OverlayTileType.NONE;
                cellRoadAxes[gx][gz] = undefined;
                occupied[gx][gz] = true;
                continue;
              }

              if (distToWater[gx][gz] <= 2) {
                // Strict coastal buffer zone: NO roads may collide with water/shoreline!
                if (distToWater[gx][gz] === 1) {
                  cell.terrainType = TerrainType.SAND;
                  cell.overlayType = OverlayTileType.NONE;
                  occupied[gx][gz] = true;
                } else {
                  // Distance 2: Pedestrian promenade boardwalk or lush coastal park
                  const isPedestrianOrRoad = cellData.overlayType === OverlayTileType.ROAD || cellData.terrainType === TerrainType.SIDEWALK;
                  cell.terrainType = isPedestrianOrRoad ? TerrainType.SIDEWALK : TerrainType.GRASS;
                  cell.overlayType = cell.terrainType === TerrainType.SIDEWALK ? OverlayTileType.SIDEWALK : OverlayTileType.NONE;
                }
                cellRoadAxes[gx][gz] = undefined;
                continue;
              }

              // Normal urban zone stamping (distToWater >= 3)
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

    // ── POST-ROAD COASTAL SHORELINE & PROMENADE SYNTHESIS ──
    // Re-verify that water transitions smoothly: WATER -> WATER_SHORE -> SAND -> SIDEWALK/GRASS -> ROADS
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        if (gx >= platformGx && gx < platformGx + platformW && gz >= platformGz && gz < platformGz + platformH) {
          continue;
        }

        const cell = TileMap.getCell(gx, gz);
        if (!cell) continue;

        if (distToWater[gx][gz] === 0) {
          // If water borders land, it becomes shallow coastal surf with white foam
          const hasLandNeighbor = [[gx - 1, gz], [gx + 1, gz], [gx, gz - 1], [gx, gz + 1]].some(([nx, nz]) => {
            if (nx < 0 || nx >= gridDim || nz < 0 || nz >= gridDim) return false;
            return distToWater[nx][nz] > 0;
          });
          cell.terrainType = hasLandNeighbor ? TerrainType.WATER_SHORE : TerrainType.WATER;
          cell.overlayType = OverlayTileType.NONE;
          cellRoadAxes[gx][gz] = undefined;
          occupied[gx][gz] = true;
        } else if (distToWater[gx][gz] === 1) {
          cell.terrainType = TerrainType.SAND;
          cell.overlayType = OverlayTileType.NONE;
          cellRoadAxes[gx][gz] = undefined;
          occupied[gx][gz] = true;
        } else if (distToWater[gx][gz] === 2) {
          if (TileMap.isRoad(cell.terrainType, cell.overlayType)) {
            cell.terrainType = TerrainType.SIDEWALK;
            cell.overlayType = OverlayTileType.SIDEWALK;
            cellRoadAxes[gx][gz] = undefined;
          }
        }
      }
    }

    // ── MAP PERIMETER GREEN BUFFER PASS ──
    // Smoothly blend the 64x64 city grid into the outer infinite green landscape
    // by ensuring all non-arterial highway perimeter cells (Ring 0) are pure GRASS.
    for (let i = 0; i < gridDim; i++) {
      const perimeterCoords: Array<{ gx: number; gz: number; edge: 'N' | 'S' | 'W' | 'E' }> = [
        { gx: i, gz: 0, edge: 'N' },
        { gx: i, gz: gridDim - 1, edge: 'S' },
        { gx: 0, gz: i, edge: 'W' },
        { gx: gridDim - 1, gz: i, edge: 'E' },
      ];

      for (const { gx, gz, edge } of perimeterCoords) {
        const cell = TileMap.getCell(gx, gz);
        if (!cell) continue;

        // Coastal water/beach at the border flows into the outer ocean
        if (cell.terrainType === TerrainType.WATER || cell.terrainType === TerrainType.WATER_SHORE || cell.terrainType === TerrainType.SAND) {
          continue;
        }

        let isArterialHighway = false;
        const axis = cellRoadAxes[gx][gz];
        const isRoad = TileMap.isRoad(cell.terrainType, cell.overlayType);

        if (isRoad) {
          if (edge === 'N' && (axis === 'NS' || cell.terrainType === TerrainType.ROAD_STRAIGHT_NS)) {
            isArterialHighway = true;
          } else if (edge === 'S' && (axis === 'NS' || cell.terrainType === TerrainType.ROAD_STRAIGHT_NS)) {
            // South highway must have safe clearance from the water body
            if (distToWater[gx][gz] >= 4) {
              isArterialHighway = true;
            }
          } else if (edge === 'W' && (axis === 'EW' || cell.terrainType === TerrainType.ROAD_STRAIGHT_EW)) {
            isArterialHighway = true;
          } else if (edge === 'E' && (axis === 'EW' || cell.terrainType === TerrainType.ROAD_STRAIGHT_EW)) {
            // East highway must have safe clearance from the water body
            if (distToWater[gx][gz] >= 4) {
              isArterialHighway = true;
            }
          }
        }

        if (!isArterialHighway) {
          cell.terrainType = TerrainType.GRASS;
          cell.overlayType = OverlayTileType.NONE;
          cellRoadAxes[gx][gz] = undefined;
          occupied[gx][gz] = true; // reserve buffer cell so no buildings spawn on Ring 0
        }
      }
    }

    // ── DETECT & DESIGNATE ROAD RAMPS BETWEEN ELEVATION TIERS ──
    for (let gx = 1; gx < gridDim - 1; gx++) {
      for (let gz = 1; gz < gridDim - 1; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (!cell || !TileMap.isRoad(cell.terrainType, cell.overlayType)) continue;

        const northCell = TileMap.getCell(gx, gz - 1);
        const southCell = TileMap.getCell(gx, gz + 1);
        const westCell = TileMap.getCell(gx - 1, gz);
        const eastCell = TileMap.getCell(gx + 1, gz);

        const axis = cellRoadAxes[gx][gz];

        // North-South road transition
        if (northCell && southCell && northCell.elevation !== southCell.elevation) {
          if (axis === 'NS' || cell.terrainType === TerrainType.ROAD_STRAIGHT_NS || cell.terrainType === TerrainType.ROAD_INTERSECTION) {
            TileMap.setRoadRamp(gx, gz, 'NS');
            cellRoadAxes[gx][gz] = 'RAMP_NS';
            cell.elevation = (northCell.elevation + southCell.elevation) / 2;
            cell.elevationTier = Math.min(northCell.elevationTier ?? 1, southCell.elevationTier ?? 1);
            continue;
          }
        }

        // East-West road transition
        if (westCell && eastCell && westCell.elevation !== eastCell.elevation) {
          if (axis === 'EW' || cell.terrainType === TerrainType.ROAD_STRAIGHT_EW || cell.terrainType === TerrainType.ROAD_INTERSECTION) {
            TileMap.setRoadRamp(gx, gz, 'EW');
            cellRoadAxes[gx][gz] = 'RAMP_EW';
            cell.elevation = (westCell.elevation + eastCell.elevation) / 2;
            cell.elevationTier = Math.min(westCell.elevationTier ?? 1, eastCell.elevationTier ?? 1);
            continue;
          }
        }
      }
    }

    layerTimings['Pass 4 (Road Grid)'] = performance.now() - t0;
    const snap4 = captureSnapshot(3, 'Pass 4: Arterial Roads & Alleys', 'Arterial avenues, connecting ramps & interior alleys', macroGrid, currentRoundabouts);
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

    // 3. Guarantee all 5 signature 3D Landmark models are placed
    const landmark3DList = [
      { key: 'mega_titan',           gx: 34, gz: 18, lotType: 'landmark_3d' }, // 4x4 Apex Mega-Tower at mx=4, mz=2
      { key: 'spaceship_hq',         gx: 10, gz: 10, lotType: 'landmark_3d' }, // 4x4 Alien Spaceship HQ at mx=1, mz=1
      { key: 'financial_tower',      gx: 18, gz: 18, lotType: 'landmark_3d' }, // 3x3 Metro Financial Tower at mx=2, mz=2
      { key: 'cyber_reactor',        gx: 34, gz: 34, lotType: 'landmark_3d' }, // 3x3 Quantum Cyber Reactor at mx=4, mz=4
      { key: 'art_deco_skyscraper',  gx: 18, gz: 34, lotType: 'landmark_3d' }, // 4x4 Art Deco Empire Tower at mx=2, mz=4
    ];

    for (const lm of landmark3DList) {
      if (!serializedBuildings.some(b => b.typeKey === lm.key)) {
        console.log(`[MapBaker] Ensuring placement of signature 3D landmark: '${lm.key}' at (${lm.gx}, ${lm.gz})`);
        placeBuilding(lm.gx, lm.gz, lm.key, lm.lotType, 0);
      }
    }

    // 4. Urban streetfront infill pass: ensure vibrant streets without empty pavement
    // Strictly bounds inside [2..gridDim - 3] to leave outer perimeter buffer rings pristine green!
    for (let gx = 2; gx < gridDim - 2; gx++) {
      for (let gz = 2; gz < gridDim - 2; gz++) {
        if (!occupied[gx][gz]) {
          const cell = TileMap.getCell(gx, gz);
          if (
            cell &&
            cell.overlayType !== OverlayTileType.ROAD &&
            cell.terrainType !== TerrainType.WATER &&
            cell.terrainType !== TerrainType.WATER_SHORE &&
            cell.terrainType !== TerrainType.SAND &&
            distToWater[gx][gz] > 2
          ) {
            // Check if cell borders a sidewalk or road
            let hasStreetfront = false;
            for (let dx = -1; dx <= 1; dx++) {
              for (let dz = -1; dz <= 1; dz++) {
                const adj = TileMap.getCell(gx + dx, gz + dz);
                if (adj && (adj.overlayType === OverlayTileType.ROAD || adj.overlayType === OverlayTileType.SIDEWALK)) {
                  hasStreetfront = true;
                  break;
                }
              }
              if (hasStreetfront) break;
            }

            // High density infill: 80% chance if bordering streetfront
            const isSuburbs = gx < 12 || gx > 52 || gz < 12 || gz > 52;
            const pool = isSuburbs
              ? ['res_bronze', 'res_sky', '1', '2']
              : ['b1', 'b2', 'b3', 'b4', 'res_bronze', 'res_sky', '1', '2', '3', '4'];

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
          elevation: cell.elevation,
          elevationTier: cell.elevationTier,
          isIntersection: cell.terrainType === TerrainType.ROAD_INTERSECTION,
          roadAxis: cellRoadAxes[gx]?.[gz] ||
                    (cell.terrainType === TerrainType.ROAD_RAMP_NS ? 'RAMP_NS' :
                     cell.terrainType === TerrainType.ROAD_RAMP_EW ? 'RAMP_EW' :
                     cell.terrainType === TerrainType.ROAD_STRAIGHT_NS ? 'NS' :
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

    const { boundaryExits, boundaryWater } = MapBaker.analyzeBoundaries(serializedTiles, gridDim);

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
        buildingCount: serializedBuildings.length,
        boundaryExits,
        boundaryWater
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

  /**
   * Analyzes the 4 boundary borders of the tile grid to detect where arterial highways exit
   * and where the coastal ocean/sea borders the map.
   */
  public static analyzeBoundaries(
    tiles: SerializedTile[][],
    gridDim: number
  ): { boundaryExits: BoundaryExitInfo[]; boundaryWater: BoundaryWaterInfo } {
    const boundaryExits: BoundaryExitInfo[] = [];

    const isRoadTile = (t: SerializedTile): boolean => {
      return (
        t.overlayType === OverlayTileType.ROAD ||
        t.terrainType === TerrainType.ROAD_STRAIGHT_NS ||
        t.terrainType === TerrainType.ROAD_STRAIGHT_EW ||
        t.terrainType === TerrainType.ROAD_INTERSECTION ||
        t.terrainType === TerrainType.ROAD_ROUNDABOUT ||
        (t.terrainType >= TerrainType.ROAD_CURVE_NE && t.terrainType <= TerrainType.ROAD_CURVE_SW)
      );
    };

    const isWaterTile = (t: SerializedTile): boolean => {
      return t.terrainType === TerrainType.WATER || t.terrainType === TerrainType.WATER_SHORE;
    };

    // 1. North Border (gz = 0): Roads pointing NS
    let currentSpanStart: number | null = null;
    for (let gx = 0; gx < gridDim; gx++) {
      const tile = tiles[gx]?.[0];
      const road = tile && isRoadTile(tile) && (tile.roadAxis === 'NS' || tile.terrainType === TerrainType.ROAD_STRAIGHT_NS || tile.isIntersection || tile.overlayType === OverlayTileType.ROAD);
      if (road) {
        if (currentSpanStart === null) currentSpanStart = gx;
      } else {
        if (currentSpanStart !== null) {
          const width = gx - currentSpanStart;
          const centerWorldX = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
          boundaryExits.push({ axis: 'NS', edge: 'N', gridIndex: currentSpanStart, worldCoord: centerWorldX, widthTiles: width });
          currentSpanStart = null;
        }
      }
    }
    if (currentSpanStart !== null) {
      const width = gridDim - currentSpanStart;
      const centerWorldX = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
      boundaryExits.push({ axis: 'NS', edge: 'N', gridIndex: currentSpanStart, worldCoord: centerWorldX, widthTiles: width });
    }

    // 2. Water Analysis (South & East coasts) computed first for exit safety checks
    let hasSouthWater = false;
    let southWaterMinX = gridDim;
    for (let gx = 0; gx < gridDim; gx++) {
      if (isWaterTile(tiles[gx][gridDim - 1])) {
        hasSouthWater = true;
        if (gx < southWaterMinX) southWaterMinX = gx;
      }
    }

    let hasEastWater = false;
    let eastWaterMinZ = gridDim;
    for (let gz = 0; gz < gridDim; gz++) {
      if (isWaterTile(tiles[gridDim - 1][gz])) {
        hasEastWater = true;
        if (gz < eastWaterMinZ) eastWaterMinZ = gz;
      }
    }

    // 3. South Border (gz = gridDim - 1): Roads pointing NS (safe land only, >= 4 tiles from water)
    currentSpanStart = null;
    for (let gx = 0; gx < gridDim; gx++) {
      const tile = tiles[gx]?.[gridDim - 1];
      const isNearWater = hasSouthWater && gx >= southWaterMinX - 4;
      const road = tile && !isWaterTile(tile) && !isNearWater && isRoadTile(tile) && (tile.roadAxis === 'NS' || tile.terrainType === TerrainType.ROAD_STRAIGHT_NS || tile.isIntersection || tile.overlayType === OverlayTileType.ROAD);
      if (road) {
        if (currentSpanStart === null) currentSpanStart = gx;
      } else {
        if (currentSpanStart !== null) {
          const width = gx - currentSpanStart;
          const centerWorldX = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
          boundaryExits.push({ axis: 'NS', edge: 'S', gridIndex: currentSpanStart, worldCoord: centerWorldX, widthTiles: width });
          currentSpanStart = null;
        }
      }
    }
    if (currentSpanStart !== null) {
      const width = gridDim - currentSpanStart;
      const centerWorldX = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
      boundaryExits.push({ axis: 'NS', edge: 'S', gridIndex: currentSpanStart, worldCoord: centerWorldX, widthTiles: width });
    }

    // 4. West Border (gx = 0): Roads pointing EW
    currentSpanStart = null;
    for (let gz = 0; gz < gridDim; gz++) {
      const tile = tiles[0]?.[gz];
      const road = tile && isRoadTile(tile) && (tile.roadAxis === 'EW' || tile.terrainType === TerrainType.ROAD_STRAIGHT_EW || tile.isIntersection || tile.overlayType === OverlayTileType.ROAD);
      if (road) {
        if (currentSpanStart === null) currentSpanStart = gz;
      } else {
        if (currentSpanStart !== null) {
          const width = gz - currentSpanStart;
          const centerWorldZ = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
          boundaryExits.push({ axis: 'EW', edge: 'W', gridIndex: currentSpanStart, worldCoord: centerWorldZ, widthTiles: width });
          currentSpanStart = null;
        }
      }
    }
    if (currentSpanStart !== null) {
      const width = gridDim - currentSpanStart;
      const centerWorldZ = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
      boundaryExits.push({ axis: 'EW', edge: 'W', gridIndex: currentSpanStart, worldCoord: centerWorldZ, widthTiles: width });
    }

    // 5. East Border (gx = gridDim - 1): Roads pointing EW (safe land only, >= 4 tiles from water)
    currentSpanStart = null;
    for (let gz = 0; gz < gridDim; gz++) {
      const tile = tiles[gridDim - 1]?.[gz];
      const isNearWater = hasEastWater && gz >= eastWaterMinZ - 4;
      const road = tile && !isWaterTile(tile) && !isNearWater && isRoadTile(tile) && (tile.roadAxis === 'EW' || tile.terrainType === TerrainType.ROAD_STRAIGHT_EW || tile.isIntersection || tile.overlayType === OverlayTileType.ROAD);
      if (road) {
        if (currentSpanStart === null) currentSpanStart = gz;
      } else {
        if (currentSpanStart !== null) {
          const width = gz - currentSpanStart;
          const centerWorldZ = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
          boundaryExits.push({ axis: 'EW', edge: 'E', gridIndex: currentSpanStart, worldCoord: centerWorldZ, widthTiles: width });
          currentSpanStart = null;
        }
      }
    }
    if (currentSpanStart !== null) {
      const width = gridDim - currentSpanStart;
      const centerWorldZ = -TileMap.MAP_BOUNDS / 2 + (currentSpanStart + width * 0.5) * TileMap.TILE_SIZE;
      boundaryExits.push({ axis: 'EW', edge: 'E', gridIndex: currentSpanStart, worldCoord: centerWorldZ, widthTiles: width });
    }

    return {
      boundaryExits,
      boundaryWater: {
        hasSouthWater,
        southWaterMinX: hasSouthWater ? southWaterMinX : gridDim,
        hasEastWater,
        eastWaterMinZ: hasEastWater ? eastWaterMinZ : gridDim,
      }
    };
  }
}
