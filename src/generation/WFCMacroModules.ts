import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { RoadAxisType } from './GeneratedMapSchema';

export enum MacroSocketType {
  ANY              = 'ANY',
  ROAD_MAIN        = 'ROAD_MAIN',
  ALLEY_PEDESTRIAN = 'ALLEY_PEDESTRIAN',
  GREEN_PARK       = 'GREEN_PARK',
  PLAZA_STONE      = 'PLAZA_STONE',
  WATER_CANAL      = 'WATER_CANAL',
}

export interface WFCMacroSockets {
  N: MacroSocketType;
  E: MacroSocketType;
  S: MacroSocketType;
  W: MacroSocketType;
}

export interface MacroCellData {
  terrainType: TerrainType;
  overlayType: OverlayTileType;
  isRoad?: boolean;
  isIntersection?: boolean;
  roadAxis?: RoadAxisType;
  buildingType?: string; // Optional building type key (e.g. 'sky_cyber', 'statue_liberty', 'b1')
}

export interface WFCMacroModule {
  id: string;
  name: string;
  district: 'downtown' | 'tech' | 'sports' | 'suburbs' | 'harbor' | 'any';
  weight: number;
  sockets: WFCMacroSockets;
  /** 8x8 internal tile matrix */
  grid: MacroCellData[][];
}

/**
 * Socket compatibility rule:
 * - ROAD_MAIN strictly requires ROAD_MAIN (guaranteeing unbroken continuity).
 * - WATER_CANAL connects to WATER_CANAL or PLAZA_STONE (harbor promenade).
 * - GREEN_PARK, PLAZA_STONE, and ALLEY_PEDESTRIAN smoothly blend into each other.
 */
export function areMacroSocketsCompatible(s1: MacroSocketType, s2: MacroSocketType): boolean {
  if (s1 === MacroSocketType.ANY || s2 === MacroSocketType.ANY) return true;
  if (s1 === MacroSocketType.ROAD_MAIN || s2 === MacroSocketType.ROAD_MAIN) {
    return s1 === s2;
  }
  if (s1 === MacroSocketType.WATER_CANAL || s2 === MacroSocketType.WATER_CANAL) {
    return s1 === s2 || (s1 === MacroSocketType.PLAZA_STONE || s2 === MacroSocketType.PLAZA_STONE);
  }
  return true;
}

/** Helper to construct an empty 8x8 macro grid */
function createMacroGrid(baseTerrain: TerrainType): MacroCellData[][] {
  return Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => ({
      terrainType: baseTerrain,
      overlayType: baseTerrain === TerrainType.SIDEWALK ? OverlayTileType.SIDEWALK : OverlayTileType.NONE
    }))
  );
}

/** Helper to construct a complete 4-sided perimeter ring road tour around a signature 3D landmark */
function createRingTourSuperblock(
  buildingKey: string,
  _buildingW: number,
  _buildingH: number,
  cornerBuildingKey: string = 'b1'
): MacroCellData[][] {
  const g = createMacroGrid(TerrainType.PLAZA_STONE);

  // 1. Center 3D building on plaza island [2..2+W-1, 2..2+H-1]
  g[2][2] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: buildingKey };

  // 2. Complete 4-Sided Perimeter Ring Road Tour around building
  // North road (z=1)
  for (let x = 2; x <= 5; x++) {
    g[x][1] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
  }
  // South road (z=6)
  for (let x = 2; x <= 5; x++) {
    g[x][6] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
  }
  // West road (x=1)
  for (let z = 2; z <= 5; z++) {
    g[1][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
  }
  // East road (x=6)
  for (let z = 2; z <= 5; z++) {
    g[6][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
  }

  // 3. Ring Corners (Smooth 90-degree curved turns)
  g[1][1] = { terrainType: TerrainType.ROAD_CURVE_NW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
  g[6][1] = { terrainType: TerrainType.ROAD_CURVE_NE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
  g[1][6] = { terrainType: TerrainType.ROAD_CURVE_SW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
  g[6][6] = { terrainType: TerrainType.ROAD_CURVE_SE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };

  // 4. Feeder Portals connecting Ring to Exterior Network (Sockets on all 4 borders)
  // North portal at (3,0), (4,0)
  g[3][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
  g[4][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
  g[3][1] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
  g[4][1] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

  // South portal at (3,7), (4,7)
  g[3][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
  g[4][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
  g[3][6] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
  g[4][6] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

  // West portal at (0,3), (0,4)
  g[0][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
  g[0][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
  g[1][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
  g[1][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

  // East portal at (7,3), (7,4)
  g[7][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
  g[7][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
  g[6][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
  g[6][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

  // 5. Outer Corner Pavilions (Outside the ring road)
  g[0][0] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: cornerBuildingKey };
  g[7][0] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: cornerBuildingKey };
  g[0][7] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: cornerBuildingKey };
  g[7][7] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: cornerBuildingKey };

  return g;
}

// ─────────────────────────────────────────────────────────────────────────────
// STANDARDIZED 8x8 MACRO MODULE CATALOG (Center Portals at x in [3, 4], z in [3, 4])
// ─────────────────────────────────────────────────────────────────────────────

export const WFC_MACRO_MODULES: WFCMacroModule[] = [
  // ── GROUP 1: 4-WAY CROSSROADS & ROUNDABOUTS (N: R, E: R, S: R, W: R) ─────────

  // 1. Grand Central Traffic Circle & Monument Rotary
  {
    id: 'grand_central_roundabout',
    name: 'Grand Central Traffic Circle & Monument Rotary',
    district: 'downtown',
    weight: 35.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);

      // North Feeder Avenue (z=0..1)
      g[3][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      // South Feeder Avenue (z=6..7)
      g[3][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      // West Feeder Avenue (x=0..1)
      g[0][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[0][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // East Feeder Avenue (x=6..7)
      g[6][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[6][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // Continuous Circular Roundabout Ring Road
      g[2][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[3][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };

      g[2][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[2][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      g[2][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[3][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };

      // Center Island Monument Plaza (2x2)
      g[3][3] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[4][3] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };
      g[3][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };
      g[4][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };

      // Corner High-Rises
      g[0][0] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[6][0] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: '5' };
      g[0][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      g[6][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'res_sky' };
      return g;
    })()
  },

  // 2. District Garden Rotary & Fountains
  {
    id: 'district_rotary_park',
    name: 'District Garden Rotary & Fountains',
    district: 'any',
    weight: 30.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);

      // Feeders
      g[3][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      g[3][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      g[0][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[0][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      g[6][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[6][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // Roundabout Ring
      g[2][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[3][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };

      g[2][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[2][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      g[2][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[3][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };

      // Central Garden Island (2x2)
      g[3][3] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[4][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
      g[3][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
      g[4][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };

      // Surrounding park pavilions
      g[0][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[6][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[0][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[6][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      return g;
    })()
  },

  // 3. Downtown 4-Way Crossroads & Commercial Spires
  {
    id: 'avenue_crossroads_downtown',
    name: 'Downtown 4-Way Crossroads & Commercial Spires',
    district: 'downtown',
    weight: 35.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      // North-South dual lane avenue
      for (let z = 0; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      // East-West dual lane avenue
      for (let x = 0; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      // 2x2 Intersection core
      g[3][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[3][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

      // High-Rise Corner Anchors
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[6][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[1][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[6][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      return g;
    })()
  },

  // 4. Suburbs 4-Way Crossroads & Bustling Streetfront
  {
    id: 'avenue_crossroads_suburbs',
    name: 'Suburban 4-Way Crossroads & Streetfront',
    district: 'suburbs',
    weight: 30.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.SIDEWALK);
      for (let z = 0; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      for (let x = 0; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      g[3][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[3][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

      // Streetfront shops & brownstones
      g[1][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[2][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[6][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[1][6] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[6][6] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      return g;
    })()
  },

  // ── GROUP 2: 3-WAY T-JUNCTIONS ───────────────────────────────────────────────

  // 5. T-Junction North (Roads on N, E, W; South is Civic Plaza/Park)
  {
    id: 't_junction_north',
    name: 'T-Junction North with Civic Anchor',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.PLAZA_STONE,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      // EW road runs across
      for (let x = 0; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      // North feeder connects to EW road
      for (let z = 0; z < 3; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      g[3][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[3][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

      // South zone: Large landmark footprint & plaza
      g[2][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'mall_shopping' };
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[6][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      return g;
    })()
  },

  // 6. T-Junction South (Roads on S, E, W; North is Plaza/Park)
  {
    id: 't_junction_south',
    name: 'T-Junction South with Civic Anchor',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.PLAZA_STONE,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      for (let x = 0; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      for (let z = 5; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      g[3][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[3][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

      // North zone: Tech / civic campus
      g[2][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[1][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[6][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      return g;
    })()
  },

  // 7. T-Junction East (Roads on E, N, S; West is Green Park)
  {
    id: 't_junction_east',
    name: 'T-Junction East with Park Boulevard',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let z = 0; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      for (let x = 5; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      g[3][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[3][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

      // West zone: Green Park with pavilion
      g[1][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[6][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_sky' };
      g[6][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      return g;
    })()
  },

  // 8. T-Junction West (Roads on W, N, S; East is Green Park)
  {
    id: 't_junction_west',
    name: 'T-Junction West with Park Boulevard',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let z = 0; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      for (let x = 0; x < 3; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      g[3][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][3] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[3][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };
      g[4][4] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

      // East zone: Green Park with residential
      g[6][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[1][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      return g;
    })()
  },

  // ── GROUP 3: 2-WAY STRAIGHT AVENUES (N-S and E-W) ─────────────────────────────

  // 9. North-South Straight Dual-Lane Avenue (Downtown / Commercial)
  {
    id: 'avenue_straight_ns_downtown',
    name: 'North-South Arterial Avenue (Downtown)',
    district: 'downtown',
    weight: 40.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.PLAZA_STONE,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      for (let z = 0; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      // High-Rise Streetfront
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[1][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[6][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      g[6][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'res_sky' };
      return g;
    })()
  },

  // 10. North-South Straight Avenue (Suburbs / Park)
  {
    id: 'avenue_straight_ns_suburbs',
    name: 'North-South Tree-Lined Avenue (Suburbs)',
    district: 'suburbs',
    weight: 35.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let z = 0; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[1][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[6][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[6][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      return g;
    })()
  },

  // 11. East-West Straight Dual-Lane Avenue (Downtown / Commercial)
  {
    id: 'avenue_straight_ew_downtown',
    name: 'East-West Arterial Avenue (Downtown)',
    district: 'downtown',
    weight: 40.0,
    sockets: {
      N: MacroSocketType.PLAZA_STONE,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.PLAZA_STONE,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      for (let x = 0; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[4][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[1][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: '5' };
      g[5][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      return g;
    })()
  },

  // 12. East-West Straight Avenue (Suburbs / Park)
  {
    id: 'avenue_straight_ew_suburbs',
    name: 'East-West Tree-Lined Avenue (Suburbs)',
    district: 'suburbs',
    weight: 35.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let x = 0; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[5][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[2][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[6][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      return g;
    })()
  },

  // ── GROUP 4: 2-WAY CURVED ARTERIAL BOULEVARDS ────────────────────────────────

  // 13. Sweeping Curved Boulevard (North to East)
  {
    id: 'curved_boulevard_ne',
    name: 'Sweeping North-to-East Curved Boulevard',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.SIDEWALK);
      // North entrance
      g[3][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      // Curving arc into East
      g[3][2] = { terrainType: TerrainType.ROAD_CURVE_NE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
      g[4][2] = { terrainType: TerrainType.ROAD_CURVE_NE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
      g[4][3] = { terrainType: TerrainType.ROAD_CURVE_NE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
      g[5][2] = { terrainType: TerrainType.ROAD_CURVE_NE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
      g[5][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // East exit
      g[6][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[6][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // Pocket park in inside corner
      for (let x = 5; x < 8; x++) {
        for (let z = 0; z < 2; z++) {
          g[x][z] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
        }
      }
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[1][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      return g;
    })()
  },

  // 14. Sweeping Curved Boulevard (North to West)
  {
    id: 'curved_boulevard_nw',
    name: 'Sweeping North-to-West Curved Boulevard',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.PLAZA_STONE,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.SIDEWALK);
      // North entrance
      g[3][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][0] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][1] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      // Curving arc into West
      g[4][2] = { terrainType: TerrainType.ROAD_CURVE_NW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[3][2] = { terrainType: TerrainType.ROAD_CURVE_NW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[3][3] = { terrainType: TerrainType.ROAD_CURVE_NW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[2][2] = { terrainType: TerrainType.ROAD_CURVE_NW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[2][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[2][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // West exit
      g[0][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[0][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      g[6][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[6][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      return g;
    })()
  },

  // 15. Sweeping Curved Boulevard (South to East)
  {
    id: 'curved_boulevard_se',
    name: 'Sweeping South-to-East Curved Boulevard',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.SIDEWALK);
      // South entrance
      g[3][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      // Curving arc into East
      g[3][5] = { terrainType: TerrainType.ROAD_CURVE_SE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };
      g[4][5] = { terrainType: TerrainType.ROAD_CURVE_SE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };
      g[4][4] = { terrainType: TerrainType.ROAD_CURVE_SE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };
      g[5][5] = { terrainType: TerrainType.ROAD_CURVE_SE, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };
      g[5][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // East exit
      g[6][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[6][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[7][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      g[1][2] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[1][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'res_sky' };
      return g;
    })()
  },

  // 16. Sweeping Curved Boulevard (South to West)
  {
    id: 'curved_boulevard_sw',
    name: 'Sweeping South-to-West Curved Boulevard',
    district: 'any',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.PLAZA_STONE,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.SIDEWALK);
      // South entrance
      g[3][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][6] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][7] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };

      // Curving arc into West
      g[4][5] = { terrainType: TerrainType.ROAD_CURVE_SW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[3][5] = { terrainType: TerrainType.ROAD_CURVE_SW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[3][4] = { terrainType: TerrainType.ROAD_CURVE_SW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[2][5] = { terrainType: TerrainType.ROAD_CURVE_SW, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[2][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[2][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // West exit
      g[0][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[0][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[1][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      g[6][2] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[6][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      return g;
    })()
  },

  // ── GROUP 5: 1-WAY CUL-DE-SAC TURNAROUND LOOPS ───────────────────────────────

  // 17. Suburban Cul-de-Sac South (Road enters ONLY from South)
  {
    id: 'culdesac_south',
    name: 'Suburban Residential Cul-de-Sac (South Entrance)',
    district: 'suburbs',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // Feeder avenue from South
      for (let z = 5; z <= 7; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      // Circular turnaround bulb at center
      g[2][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[3][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
      g[2][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // Central green floral planter
      g[3][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
      g[4][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };

      // Homes clustered along the turnaround
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[5][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[0][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[6][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      return g;
    })()
  },

  // 18. Suburban Cul-de-Sac North (Road enters ONLY from North)
  {
    id: 'culdesac_north',
    name: 'Suburban Residential Cul-de-Sac (North Entrance)',
    district: 'suburbs',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let z = 0; z <= 2; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      g[2][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[3][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
      g[2][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[4][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };

      g[3][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
      g[4][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };

      g[1][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[5][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      return g;
    })()
  },

  // 19. Suburban Cul-de-Sac East (Road enters ONLY from East)
  {
    id: 'culdesac_east',
    name: 'Suburban Residential Cul-de-Sac (East Entrance)',
    district: 'suburbs',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let x = 5; x <= 7; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      g[3][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[4][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[2][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[2][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[4][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      g[3][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
      g[3][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };

      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[1][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      return g;
    })()
  },

  // 20. Suburban Cul-de-Sac West (Road enters ONLY from West)
  {
    id: 'culdesac_west',
    name: 'Suburban Residential Cul-de-Sac (West Entrance)',
    district: 'suburbs',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let x = 0; x <= 2; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      g[3][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][2] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };
      g[5][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[3][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };

      g[4][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
      g[4][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };

      g[6][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[6][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      return g;
    })()
  },

  // ── GROUP 6: 0-WAY PURE NON-ROAD SUPERBLOCKS (Parks, Plazas, Waterfront) ──────

  // 21. Central Park Lake & Botanical Gardens (Sports / Parks / Suburbs)
  {
    id: 'central_park_lake',
    name: 'Central Park Lake & Botanical Gardens',
    district: 'sports',
    weight: 35.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // Scenic central water pond
      for (let x = 2; x <= 5; x++) {
        for (let z = 2; z <= 5; z++) {
          g[x][z] = { terrainType: TerrainType.WATER, overlayType: OverlayTileType.NONE };
        }
      }
      // Sidewalk walking trail around pond
      g[1][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[6][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[1][6] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[6][6] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      return g;
    })()
  },

  // 22. Civic Plaza & Grand Shopping Promenade (Downtown / Tech)
  {
    id: 'civic_plaza_mall',
    name: 'Civic Plaza & Grand Shopping Promenade',
    district: 'downtown',
    weight: 30.0,
    sockets: {
      N: MacroSocketType.PLAZA_STONE,
      E: MacroSocketType.PLAZA_STONE,
      S: MacroSocketType.PLAZA_STONE,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      // Center tower anchor
      g[2][2] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: '5' };
      // Surrounding boutique towers
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[6][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[1][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[6][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: '5' };
      return g;
    })()
  },

  // 23. Tech Research Campus & Cyber Quad (Tech)
  {
    id: 'tech_campus_quad',
    name: 'Tech Research Campus Quad',
    district: 'tech',
    weight: 30.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.PLAZA_STONE,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      // Cyber Research anchor
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[5][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[1][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[5][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      return g;
    })()
  },

  // 24. Harbor Basin Waterfront & Maritime Promenade (Harbor)
  {
    id: 'waterfront_harbor_basin',
    name: 'Harbor Basin Waterfront & Maritime Docks',
    district: 'harbor',
    weight: 35.0,
    sockets: {
      N: MacroSocketType.PLAZA_STONE,
      E: MacroSocketType.WATER_CANAL,
      S: MacroSocketType.WATER_CANAL,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.SIDEWALK);
      // Water canal along East and South
      for (let z = 0; z < 8; z++) g[7][z] = { terrainType: TerrainType.WATER, overlayType: OverlayTileType.NONE };
      for (let x = 0; x < 8; x++) g[x][7] = { terrainType: TerrainType.WATER, overlayType: OverlayTileType.NONE };

      // Maritime Warehouses & Dock offices
      g[1][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: '4' };
      g[4][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: '4' };
      g[1][5] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[4][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      return g;
    })()
  },

  // 25. Residential Serpentine Courtyard (Suburbs)
  {
    id: 'residential_garden_courtyard',
    name: 'Residential Serpentine Courtyard & Shops',
    district: 'suburbs',
    weight: 30.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      for (let z = 1; z <= 6; z++) {
        g[3][z] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      }
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[5][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[1][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[5][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      return g;
    })()
  },

  // ── GROUP 7: DEDICATED 3D LANDMARK SUPERBLOCKS (Ring Tour Around 3D Buildings) ─

  // 26. Downtown Apex 3D Mega-Titan Ring Tour Superblock (4x4 3D Tower)
  {
    id: 'superblock_mega_titan',
    name: 'Downtown Apex 3D Mega-Titan Ring Tour Superblock',
    district: 'downtown',
    weight: 50.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: createRingTourSuperblock('mega_titan', 4, 4, 'b1')
  },

  // 27. Alien Citadel 3D Spaceship HQ Ring Tour Superblock (4x4 3D Citadel)
  {
    id: 'superblock_spaceship_hq',
    name: 'Alien Citadel 3D Spaceship HQ Ring Tour Superblock',
    district: 'tech',
    weight: 50.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: createRingTourSuperblock('spaceship_hq', 4, 4, 'b1')
  },

  // 28. Metro Financial 3D Tower Ring Tour Superblock (3x3 3D Skyscraper)
  {
    id: 'superblock_financial_tower',
    name: 'Metro Financial 3D Tower Ring Tour Superblock',
    district: 'downtown',
    weight: 50.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: createRingTourSuperblock('financial_tower', 3, 3, 'b1')
  },

  // 29. Quantum Energy 3D Cyber Reactor Ring Tour Superblock (3x3 3D Reactor)
  {
    id: 'superblock_cyber_reactor',
    name: 'Quantum Energy 3D Cyber Reactor Ring Tour Superblock',
    district: 'tech',
    weight: 50.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: createRingTourSuperblock('cyber_reactor', 3, 3, 'b1')
  },

  // 30. Suburban Cul-de-Sac Family Homes (Suburbs - Where people live!)
  {
    id: 'residential_culdesac_homes',
    name: 'Suburban Cul-de-Sac Family Homes',
    district: 'suburbs',
    weight: 45.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // North entrance roadway [3..4, 0..2]
      for (let z = 0; z <= 2; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      // Cul-de-sac circular turnaround [2..5, 3..5]
      g[2][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NW' };
      g[3][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[4][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[5][3] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_NE' };

      g[2][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[3][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE }; // center mini-park
      g[4][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };
      g[5][4] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      g[2][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SW' };
      g[3][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[4][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      g[5][5] = { terrainType: TerrainType.ROAD_ROUNDABOUT, overlayType: OverlayTileType.ROAD, roadAxis: 'CURVE_SE' };

      // Sidewalk walkways to home doorsteps
      g[1][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[6][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[1][4] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[6][4] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };

      // Family homes & brownstones
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[6][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[1][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[6][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[1][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[6][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[3][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[4][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      return g;
    })()
  },

  // 31. Tree-Lined Residential Avenue with Homes & School (Suburbs)
  {
    id: 'residential_avenue_homes',
    name: 'Tree-Lined Residential Avenue with Homes & School',
    district: 'suburbs',
    weight: 45.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // N-S Avenue [3..4, 0..7]
      for (let z = 0; z < 8; z++) {
        g[3][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        g[4][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
        // Flanking sidewalks
        g[2][z] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
        g[5][z] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      }
      // West residential row: Family brownstones & garden homes
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[1][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[1][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };

      // East residential row: Corner bakery/grocer, homes, and school
      g[6][0] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b1' }; // corner shop
      g[6][2] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[6][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[6][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'school_civic' };
      return g;
    })()
  },

  // 32. Quiet Residential Garden Courtyard & Apartments (Suburbs)
  {
    id: 'residential_garden_block',
    name: 'Residential Garden Block with Family Homes',
    district: 'suburbs',
    weight: 40.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // E-W Avenue [0..7, 3..4]
      for (let x = 0; x < 8; x++) {
        g[x][3] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][4] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        // Flanking sidewalks
        g[x][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
        g[x][5] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      }
      // North homes
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[3][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[5][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[7][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b1' };

      // South homes & apartments
      g[1][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[3][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[5][6] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      return g;
    })()
  },

  // 33. Waterfront Beach & Coastal Promenade (Harbor - Beach transition!)
  {
    id: 'waterfront_beach_coast',
    name: 'Waterfront Beach & Coastal Surf Promenade',
    district: 'harbor',
    weight: 35.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.WATER_CANAL,
      S: MacroSocketType.WATER_CANAL,
      W: MacroSocketType.WATER_CANAL
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.WATER);
      // North rows [0..1]: Green park & paved promenade
      for (let x = 0; x < 8; x++) {
        g[x][0] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE };
        g[x][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      }
      // Middle rows [2..3]: Golden sandy beach
      for (let x = 0; x < 8; x++) {
        g[x][2] = { terrainType: TerrainType.SAND, overlayType: OverlayTileType.NONE };
        g[x][3] = { terrainType: TerrainType.SAND, overlayType: OverlayTileType.NONE };
      }
      // Coastline rows [4..5]: Shallow coastal surf with foam
      for (let x = 0; x < 8; x++) {
        g[x][4] = { terrainType: TerrainType.WATER_SHORE, overlayType: OverlayTileType.NONE };
        g[x][5] = { terrainType: TerrainType.WATER_SHORE, overlayType: OverlayTileType.NONE };
      }
      // Deep ocean water [6..7] (already set by createMacroGrid(WATER))

      // Beachside cafe / pavilion
      g[2][0] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[5][0] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      return g;
    })()
  },

  // 34. Liberty Island Offshore Basin (Harbor - Statue of Liberty in water!)
  {
    id: 'superblock_statue_liberty',
    name: 'Liberty Island Offshore Water Basin',
    district: 'harbor',
    weight: 5.0,
    sockets: {
      N: MacroSocketType.WATER_CANAL,
      E: MacroSocketType.WATER_CANAL,
      S: MacroSocketType.WATER_CANAL,
      W: MacroSocketType.WATER_CANAL
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.WATER);
      // Perimeter is deep water & shallow coastal surf
      for (let x = 1; x <= 6; x++) {
        g[x][1] = { terrainType: TerrainType.WATER_SHORE, overlayType: OverlayTileType.NONE };
        g[x][6] = { terrainType: TerrainType.WATER_SHORE, overlayType: OverlayTileType.NONE };
      }
      for (let z = 1; z <= 6; z++) {
        g[1][z] = { terrainType: TerrainType.WATER_SHORE, overlayType: OverlayTileType.NONE };
        g[6][z] = { terrainType: TerrainType.WATER_SHORE, overlayType: OverlayTileType.NONE };
      }

      // Sandy beach shoreline around island
      for (let x = 2; x <= 5; x++) {
        g[x][2] = { terrainType: TerrainType.SAND, overlayType: OverlayTileType.NONE };
        g[x][5] = { terrainType: TerrainType.SAND, overlayType: OverlayTileType.NONE };
        g[2][x] = { terrainType: TerrainType.SAND, overlayType: OverlayTileType.NONE };
        g[5][x] = { terrainType: TerrainType.SAND, overlayType: OverlayTileType.NONE };
      }

      // Center stone monument platform (3x3 footprint at [3..4, 3..4])
      g[3][3] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'statue_liberty' };
      g[4][3] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };
      g[3][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };
      g[4][4] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };
      return g;
    })()
  }
];
