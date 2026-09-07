import { GeneratedMapData, SerializedTile } from './GeneratedMapSchema';
import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { CityGeneratorHyperparameters, DEFAULT_CITY_HYPERPARAMETERS } from './CityConfig';

export interface AnalysisReport {
  presetName: string;
  timestamp: string;
  seed: number;
  totalTiles: number;
  totalBuildings: number;
  landUse: {
    waterRatio: number;
    roadRatio: number;
    negativeSpaceRatio: number;
    builtLotRatio: number;
  };
  heightDistribution: {
    megaTitan: { count: number; ratio: number };
    highRise: { count: number; ratio: number };
    midRise: { count: number; ratio: number };
    lowRise: { count: number; ratio: number };
  };
  footprintDistribution: {
    size1x1: { count: number; ratio: number };
    size2x2: { count: number; ratio: number };
    size3x3: { count: number; ratio: number };
    size4x4: { count: number; ratio: number };
  };
  blockOccupancy: {
    downtownCoreOccupancy: number;
    maxDowntownBuildingStreak: number;
    suburbanOccupancy: number;
    harborOccupancy: number;
  };
  paletteDistribution: Record<string, { count: number; ratio: number }>;
  refImage?: string;
  diagnostics: string[];
  score: number; // 0..100 quality score against target preset hyperparameters
}

export class MapAnalyzer {
  /**
   * Evaluates a GeneratedMapData payload against target CityGeneratorHyperparameters preset.
   */
  public static analyzeMap(
    mapData: GeneratedMapData,
    targetConfig: CityGeneratorHyperparameters = DEFAULT_CITY_HYPERPARAMETERS
  ): AnalysisReport {
    const gridDim = mapData.gridDim || 64;
    const totalTiles = gridDim * gridDim; // 4096
    const buildings = mapData.buildings || [];
    const diagnostics: string[] = [];

    // ── 1. Land-Use Coverage ──────────────────────────────────────────────
    let waterCount = 0;
    let roadCount = 0;
    let negativeSpaceCount = 0;
    let builtCellCount = 0;

    const isBuilt: boolean[][] = Array.from({ length: gridDim }, () => Array(gridDim).fill(false));

    for (const b of buildings) {
      for (let dx = 0; dx < b.w; dx++) {
        for (let dz = 0; dz < b.h; dz++) {
          const tx = b.gx + dx, tz = b.gz + dz;
          if (tx >= 0 && tx < gridDim && tz >= 0 && tz < gridDim) {
            isBuilt[tx][tz] = true;
          }
        }
      }
    }

    const is2D = Array.isArray(mapData.tiles?.[0]);
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        let tType = TerrainType.GRASS;
        let oType = OverlayTileType.NONE;

        if (is2D) {
          const tile = (mapData.tiles as SerializedTile[][])[gx]?.[gz];
          if (tile) {
            tType = tile.terrainType;
            oType = tile.overlayType;
          }
        } else if (mapData.tiles && mapData.tiles.length > 0) {
          const val = (mapData.tiles as any)[gz * gridDim + gx];
          if (typeof val === 'number') tType = val;
          else if (val && typeof val === 'object') {
            tType = val.terrainType;
            oType = val.overlayType;
          }
        }

        if (tType === TerrainType.WATER) {
          waterCount++;
        } else if (oType === OverlayTileType.ROAD || tType === TerrainType.ROAD_STRAIGHT_NS || tType === TerrainType.ROAD_STRAIGHT_EW || tType === TerrainType.ROAD_INTERSECTION) {
          roadCount++;
        } else if (isBuilt[gx][gz]) {
          builtCellCount++;
        } else {
          negativeSpaceCount++; // Parks, plazas, sidewalks, empty yards
        }
      }
    }

    const landUse = {
      waterRatio: parseFloat((waterCount / totalTiles).toFixed(4)),
      roadRatio: parseFloat((roadCount / totalTiles).toFixed(4)),
      negativeSpaceRatio: parseFloat((negativeSpaceCount / totalTiles).toFixed(4)),
      builtLotRatio: parseFloat((builtCellCount / totalTiles).toFixed(4)),
    };

    // ── 2. Building Height Hierarchy ──────────────────────────────────────
    let megaCount = 0, highCount = 0, midCount = 0, lowCount = 0;

    for (const b of buildings) {
      const def = BUILDING_DEFS[b.typeKey] || BUILDING_DEFS['3'];
      const h = def.height ?? 30;

      if (h >= 350 || b.typeKey === 'mega_titan') megaCount++;
      else if (h >= 150) highCount++;
      else if (h >= 70) midCount++;
      else lowCount++;
    }

    const totalB = Math.max(1, buildings.length);
    const heightDistribution = {
      megaTitan: { count: megaCount, ratio: parseFloat((megaCount / totalB).toFixed(4)) },
      highRise: { count: highCount, ratio: parseFloat((highCount / totalB).toFixed(4)) },
      midRise: { count: midCount, ratio: parseFloat((midCount / totalB).toFixed(4)) },
      lowRise: { count: lowCount, ratio: parseFloat((lowCount / totalB).toFixed(4)) },
    };

    // ── 3. Footprint Sizes ────────────────────────────────────────────────
    let s1 = 0, s2 = 0, s3 = 0, s4 = 0;

    for (const b of buildings) {
      const maxDim = Math.max(b.w, b.h);
      if (maxDim === 1) s1++;
      else if (maxDim === 2) s2++;
      else if (maxDim === 3) s3++;
      else s4++;
    }

    const footprintDistribution = {
      size1x1: { count: s1, ratio: parseFloat((s1 / totalB).toFixed(4)) },
      size2x2: { count: s2, ratio: parseFloat((s2 / totalB).toFixed(4)) },
      size3x3: { count: s3, ratio: parseFloat((s3 / totalB).toFixed(4)) },
      size4x4: { count: s4, ratio: parseFloat((s4 / totalB).toFixed(4)) },
    };

    // ── 4. Block Density & Monolith Diagnostics ───────────────────────────
    let dtTotal = 0, dtBuilt = 0;
    let maxStreak = 0;

    for (let gx = 20; gx <= 44; gx++) {
      let currentStreakX = 0;
      for (let gz = 20; gz <= 44; gz++) {
        dtTotal++;
        if (isBuilt[gx][gz]) {
          dtBuilt++;
          currentStreakX++;
          if (currentStreakX > maxStreak) maxStreak = currentStreakX;
        } else {
          currentStreakX = 0;
        }
      }
    }

    let subTotal = 0, subBuilt = 0;
    for (let gx = 0; gx <= 25; gx++) {
      for (let gz = 35; gz <= 63; gz++) {
        subTotal++;
        if (isBuilt[gx][gz]) subBuilt++;
      }
    }

    let hTotal = 0, hBuilt = 0;
    for (let gx = 35; gx <= 63; gx++) {
      for (let gz = 35; gz <= 63; gz++) {
        hTotal++;
        if (isBuilt[gx][gz]) hBuilt++;
      }
    }

    const blockOccupancy = {
      downtownCoreOccupancy: parseFloat((dtBuilt / Math.max(1, dtTotal)).toFixed(4)),
      maxDowntownBuildingStreak: maxStreak,
      suburbanOccupancy: parseFloat((subBuilt / Math.max(1, subTotal)).toFixed(4)),
      harborOccupancy: parseFloat((hBuilt / Math.max(1, hTotal)).toFixed(4)),
    };

    // ── 5. Texture & Palette Diversity ───────────────────────────────────
    const paletteCounts: Record<string, number> = {
      blueGlassSpire: 0,
      whiteConcreteCivic: 0,
      redBrickBrownstone: 0,
      industrialGreyMetal: 0,
      accentColorSpire: 0,
    };

    for (const b of buildings) {
      const k = b.typeKey;
      if (k === 'sky_cyber' || k === 'sky_biotech' || k === 'res_sky') paletteCounts.blueGlassSpire++;
      else if (k === '1' || k === '2' || k === 'mega_stadium' || k === 'spaceship_hq') paletteCounts.whiteConcreteCivic++;
      else if (k === 'b1' || k === 'b2' || k === '3' || k === 'res_bronze') paletteCounts.redBrickBrownstone++;
      else if (k === '4' || k === 'pentagon_defense') paletteCounts.industrialGreyMetal++;
      else paletteCounts.accentColorSpire++;
    }

    const paletteDistribution: Record<string, { count: number; ratio: number }> = {};
    for (const key of Object.keys(paletteCounts)) {
      paletteDistribution[key] = {
        count: paletteCounts[key],
        ratio: parseFloat((paletteCounts[key] / totalB).toFixed(4)),
      };
    }

    // ── 6. Preset Diagnostic Score Calculation ───────────────────────────
    let score = 100;

    if (landUse.waterRatio < targetConfig.landUse.waterRatio - 0.03) {
      diagnostics.push(`[WARN] Water coverage (${(landUse.waterRatio * 100).toFixed(1)}%) is below target (${(targetConfig.landUse.waterRatio * 100).toFixed(0)}%). Expand harbor/canal spline.`);
      score -= 10;
    }
    if (landUse.roadRatio < targetConfig.landUse.roadRatio - 0.03) {
      diagnostics.push(`[WARN] Road network ratio (${(landUse.roadRatio * 100).toFixed(1)}%) is under target (${(targetConfig.landUse.roadRatio * 100).toFixed(0)}%).`);
      score -= 10;
    }
    if (blockOccupancy.downtownCoreOccupancy > targetConfig.blockOccupancy.downtownCore + 0.05) {
      diagnostics.push(`[FAIL] Downtown Core Occupancy (${(blockOccupancy.downtownCoreOccupancy * 100).toFixed(1)}%) exceeds target cap (${(targetConfig.blockOccupancy.downtownCore * 100).toFixed(0)}%). Monolith block detected!`);
      score -= 20;
    }
    if (blockOccupancy.maxDowntownBuildingStreak > targetConfig.blockOccupancy.maxBuildingStreak) {
      diagnostics.push(`[FAIL] Continuous building streak of ${blockOccupancy.maxDowntownBuildingStreak} tiles exceeds max allowed (${targetConfig.blockOccupancy.maxBuildingStreak})! Add pedestrian alleys/plazas.`);
      score -= 15;
    }
    if (heightDistribution.lowRise.ratio < targetConfig.heightDistribution.lowRise - 0.05) {
      diagnostics.push(`[WARN] Low-rise ratio (${(heightDistribution.lowRise.ratio * 100).toFixed(1)}%) is below preset target (${(targetConfig.heightDistribution.lowRise * 100).toFixed(0)}%). Too many tall spires block camera views.`);
      score -= 15;
    }

    return {
      presetName: targetConfig.name,
      timestamp: new Date().toISOString(),
      seed: mapData.seed || 42,
      totalTiles,
      totalBuildings: buildings.length,
      landUse,
      heightDistribution,
      footprintDistribution,
      blockOccupancy,
      paletteDistribution,
      refImage: (mapData.metadata as any)?.refImage,
      diagnostics,
      score: Math.max(0, score),
    };
  }
}
