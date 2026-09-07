import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';

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
  roadAxis?: 'NS' | 'EW';
  buildingType?: string; // Optional building type key (e.g. 'mega_titan', 'sky_cyber', '1')
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

export function areMacroSocketsCompatible(s1: MacroSocketType, s2: MacroSocketType): boolean {
  if (s1 === MacroSocketType.ANY || s2 === MacroSocketType.ANY) return true;
  if (s1 === s2) return true;
  if (
    (s1 === MacroSocketType.ALLEY_PEDESTRIAN && (s2 === MacroSocketType.PLAZA_STONE || s2 === MacroSocketType.GREEN_PARK)) ||
    (s2 === MacroSocketType.ALLEY_PEDESTRIAN && (s1 === MacroSocketType.PLAZA_STONE || s1 === MacroSocketType.GREEN_PARK)) ||
    (s1 === MacroSocketType.GREEN_PARK && s2 === MacroSocketType.PLAZA_STONE) ||
    (s2 === MacroSocketType.GREEN_PARK && s1 === MacroSocketType.PLAZA_STONE)
  ) {
    return true;
  }
  return false;
}

/** Helper to construct a default 8x8 macro grid filled with a base terrain */
function createMacroGrid(baseTerrain: TerrainType): MacroCellData[][] {
  return Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => ({
      terrainType: baseTerrain,
      overlayType: baseTerrain === TerrainType.SIDEWALK ? OverlayTileType.SIDEWALK : OverlayTileType.NONE
    }))
  );
}

// ─── 8x8 MACRO MODULE CATALOG ──────────────────────────────────────────────────
export const WFC_MACRO_MODULES: WFCMacroModule[] = [
  // 1. Downtown Core Mega-Titan Module (8x8)
  {
    id: 'downtown_mega_titan',
    name: 'Downtown Apex Mega-Titan Plaza',
    district: 'downtown',
    weight: 10.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.PLAZA_STONE,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      // North and South perimeter roads
      for (let x = 0; x < 8; x++) {
        g[x][0] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
        g[x][7] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      // Center 4x4 Mega Titan anchor
      g[2][2] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'mega_titan' };
      // Surrounding high-rises
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[6][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[1][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[6][6] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: '5' };
      return g;
    })()
  },

  // 2. Downtown Commercial Spires Module (8x8)
  {
    id: 'downtown_commercial_spires',
    name: 'Downtown Commercial High-Rise Spires',
    district: 'downtown',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.ALLEY_PEDESTRIAN,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.PLAZA_STONE);
      // West perimeter road
      for (let z = 0; z < 8; z++) {
        g[0][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      // Narrow central pedestrian alley
      for (let z = 1; z < 7; z++) {
        g[4][z] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      }
      // High-rise towers facing alley and road
      g[1][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[2][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[1][3] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      g[2][3] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'res_sky' };
      g[1][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: '5' };
      g[2][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };

      g[5][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[6][1] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[5][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_artdeco' };
      g[6][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      return g;
    })()
  },

  // 3. Tech Research Campus Quad (8x8)
  {
    id: 'tech_research_campus',
    name: 'Tech Research Campus Quad',
    district: 'tech',
    weight: 20.0,
    sockets: {
      N: MacroSocketType.GREEN_PARK,
      E: MacroSocketType.ROAD_MAIN,
      S: MacroSocketType.ALLEY_PEDESTRIAN,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // East perimeter road
      for (let z = 0; z < 8; z++) {
        g[7][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      }
      // Central quad plaza
      for (let x = 2; x <= 5; x++) {
        for (let z = 2; z <= 5; z++) {
          g[x][z] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE };
        }
      }
      // 4x4 Spaceship HQ in upper left quad
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'spaceship_hq' };
      // Biotech spires & labs
      g[5][2] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_biotech' };
      g[5][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'sky_cyber' };
      g[2][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      return g;
    })()
  },

  // 4. Winding Residential Courtyard Module (8x8)
  {
    id: 'residential_winding_courtyard',
    name: 'Serpentine Residential Courtyard & Shops',
    district: 'suburbs',
    weight: 25.0,
    sockets: {
      N: MacroSocketType.ALLEY_PEDESTRIAN,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.ROAD_MAIN,
      W: MacroSocketType.GREEN_PARK
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // South perimeter road
      for (let x = 0; x < 8; x++) {
        g[x][7] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      }
      // Winding sidewalk path
      g[3][0] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[3][1] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[4][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[4][3] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[3][4] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[3][5] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };
      g[3][6] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.SIDEWALK };

      // Low-rise brownstones, shops, apartments along path
      g[1][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      g[2][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[5][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_bronze' };
      g[6][1] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };

      g[1][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: '1' }; // Hospital
      g[5][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b2' };
      g[6][4] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b1' };
      return g;
    })()
  },

  // 5. Sports & Park Belt Module (8x8)
  {
    id: 'sports_park_belt',
    name: 'Sports Arena & Lush Park Belt',
    district: 'sports',
    weight: 20.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.GREEN_PARK,
      S: MacroSocketType.GREEN_PARK,
      W: MacroSocketType.ROAD_MAIN
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.GRASS);
      // North and West roads
      for (let x = 0; x < 8; x++) g[x][0] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };
      for (let z = 0; z < 8; z++) g[0][z] = { terrainType: TerrainType.ROAD_STRAIGHT_NS, overlayType: OverlayTileType.ROAD, roadAxis: 'NS' };
      g[0][0] = { terrainType: TerrainType.ROAD_INTERSECTION, overlayType: OverlayTileType.ROAD, isIntersection: true };

      // 4x4 Stadium Arena anchor
      g[2][2] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'mega_stadium' };
      // Mid-rise residential towers near park edge
      g[6][3] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'res_sky' };
      g[6][5] = { terrainType: TerrainType.GRASS, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      return g;
    })()
  },

  // 6. Waterfront Promenade & Docks Module (8x8)
  {
    id: 'waterfront_docks_promenade',
    name: 'Harbor Waterfront Promenade & Warehouses',
    district: 'harbor',
    weight: 20.0,
    sockets: {
      N: MacroSocketType.ROAD_MAIN,
      E: MacroSocketType.WATER_CANAL,
      S: MacroSocketType.WATER_CANAL,
      W: MacroSocketType.PLAZA_STONE
    },
    grid: (() => {
      const g = createMacroGrid(TerrainType.SIDEWALK);
      // East and South water canal
      for (let z = 0; z < 8; z++) g[7][z] = { terrainType: TerrainType.WATER, overlayType: OverlayTileType.NONE };
      for (let x = 0; x < 8; x++) g[x][7] = { terrainType: TerrainType.WATER, overlayType: OverlayTileType.NONE };

      // North road connection
      for (let x = 0; x < 7; x++) g[x][0] = { terrainType: TerrainType.ROAD_STRAIGHT_EW, overlayType: OverlayTileType.ROAD, roadAxis: 'EW' };

      // Maritime Warehouses & Dock offices
      g[1][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: '4' };
      g[4][2] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: '4' };
      g[1][5] = { terrainType: TerrainType.SIDEWALK, overlayType: OverlayTileType.NONE, buildingType: 'b3' };
      g[4][5] = { terrainType: TerrainType.PLAZA_STONE, overlayType: OverlayTileType.NONE, buildingType: 'b4' };
      return g;
    })()
  }
];
