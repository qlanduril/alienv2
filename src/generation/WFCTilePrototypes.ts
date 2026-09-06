import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';

export enum SocketType {
  ANY          = 'ANY',
  ROAD         = 'ROAD',
  GRASS        = 'GRASS',
  PLAZA        = 'PLAZA',
  WATER        = 'WATER',
  SIDEWALK     = 'SIDEWALK',
  BUILDING_LOT = 'BUILDING_LOT',
}

export interface WFCSockets {
  N: SocketType;
  E: SocketType;
  S: SocketType;
  W: SocketType;
}

export interface WFCTilePrototype {
  id: string;
  name: string;
  sockets: WFCSockets;
  weight: number;
  terrainType: TerrainType;
  overlayType: OverlayTileType;
  roadAxis?: 'NS' | 'EW';
  isIntersection?: boolean;
  buildingType?: string; // Optional building def key for single-cell lot prototypes
  district?: string;     // Optional zone filter
}

// ─── Socket Compatibility Verification ──────────────────────────────────────────
export function areSocketsCompatible(s1: SocketType, s2: SocketType): boolean {
  if (s1 === SocketType.ANY || s2 === SocketType.ANY) return true;
  if (s1 === s2) return true;
  // Sidewalks connect to sidewalks, grass, or building lots
  if (
    (s1 === SocketType.SIDEWALK && (s2 === SocketType.GRASS || s2 === SocketType.BUILDING_LOT || s2 === SocketType.PLAZA)) ||
    (s2 === SocketType.SIDEWALK && (s1 === SocketType.GRASS || s1 === SocketType.BUILDING_LOT || s1 === SocketType.PLAZA))
  ) {
    return true;
  }
  return false;
}

// ─── WFC Tile Prototype Catalog ─────────────────────────────────────────────────
export const WFC_TILE_PROTOTYPES: WFCTilePrototype[] = [
  // ── 1. Straight Roads ──────────────────────────────────────────────────────────
  {
    id: 'road_straight_ns',
    name: 'Road Straight North-South',
    sockets: { N: SocketType.ROAD, E: SocketType.SIDEWALK, S: SocketType.ROAD, W: SocketType.SIDEWALK },
    weight: 25.0,
    terrainType: TerrainType.ROAD_STRAIGHT_NS,
    overlayType: OverlayTileType.ROAD,
    roadAxis: 'NS'
  },
  {
    id: 'road_straight_ew',
    name: 'Road Straight East-West',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.ROAD, S: SocketType.SIDEWALK, W: SocketType.ROAD },
    weight: 25.0,
    terrainType: TerrainType.ROAD_STRAIGHT_EW,
    overlayType: OverlayTileType.ROAD,
    roadAxis: 'EW'
  },

  // ── 2. Road Turns / Corners ────────────────────────────────────────────────────
  {
    id: 'road_turn_ne',
    name: 'Road Turn North-East',
    sockets: { N: SocketType.ROAD, E: SocketType.ROAD, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 12.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD
  },
  {
    id: 'road_turn_nw',
    name: 'Road Turn North-West',
    sockets: { N: SocketType.ROAD, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.ROAD },
    weight: 12.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD
  },
  {
    id: 'road_turn_se',
    name: 'Road Turn South-East',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.ROAD, S: SocketType.ROAD, W: SocketType.SIDEWALK },
    weight: 12.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD
  },
  {
    id: 'road_turn_sw',
    name: 'Road Turn South-West',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.ROAD, W: SocketType.ROAD },
    weight: 12.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD
  },

  // ── 3. T-Intersections ─────────────────────────────────────────────────────────
  {
    id: 'road_t_north',
    name: 'Road T-Intersection (North Branch)',
    sockets: { N: SocketType.ROAD, E: SocketType.ROAD, S: SocketType.SIDEWALK, W: SocketType.ROAD },
    weight: 10.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD,
    isIntersection: true
  },
  {
    id: 'road_t_east',
    name: 'Road T-Intersection (East Branch)',
    sockets: { N: SocketType.ROAD, E: SocketType.ROAD, S: SocketType.ROAD, W: SocketType.SIDEWALK },
    weight: 10.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD,
    isIntersection: true
  },
  {
    id: 'road_t_south',
    name: 'Road T-Intersection (South Branch)',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.ROAD, S: SocketType.ROAD, W: SocketType.ROAD },
    weight: 10.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD,
    isIntersection: true
  },
  {
    id: 'road_t_west',
    name: 'Road T-Intersection (West Branch)',
    sockets: { N: SocketType.ROAD, E: SocketType.SIDEWALK, S: SocketType.ROAD, W: SocketType.ROAD },
    weight: 10.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD,
    isIntersection: true
  },

  // ── 4. 4-Way Cross Intersections ───────────────────────────────────────────────
  {
    id: 'road_cross',
    name: 'Road 4-Way Cross Intersection',
    sockets: { N: SocketType.ROAD, E: SocketType.ROAD, S: SocketType.ROAD, W: SocketType.ROAD },
    weight: 15.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD,
    isIntersection: true
  },

  // ── 5. Dead Ends / Cul-de-sacs ─────────────────────────────────────────────────
  {
    id: 'road_deadend_n',
    name: 'Road Dead-End North',
    sockets: { N: SocketType.ROAD, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 4.0,
    terrainType: TerrainType.ROAD_STRAIGHT_NS,
    overlayType: OverlayTileType.ROAD
  },
  {
    id: 'road_deadend_e',
    name: 'Road Dead-End East',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.ROAD, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 4.0,
    terrainType: TerrainType.ROAD_STRAIGHT_EW,
    overlayType: OverlayTileType.ROAD
  },
  {
    id: 'road_deadend_s',
    name: 'Road Dead-End South',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.ROAD, W: SocketType.SIDEWALK },
    weight: 4.0,
    terrainType: TerrainType.ROAD_STRAIGHT_NS,
    overlayType: OverlayTileType.ROAD
  },
  {
    id: 'road_deadend_w',
    name: 'Road Dead-End West',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.ROAD },
    weight: 4.0,
    terrainType: TerrainType.ROAD_STRAIGHT_EW,
    overlayType: OverlayTileType.ROAD
  },

  // ── 6. Building Lots & Commercial Zones ────────────────────────────────────────
  {
    id: 'lot_commercial_tower',
    name: 'Commercial Skyscraper Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.BUILDING_LOT, S: SocketType.BUILDING_LOT, W: SocketType.SIDEWALK },
    weight: 20.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE,
    buildingType: 'sky_cyber'
  },
  {
    id: 'lot_artdeco_titan',
    name: 'Art Deco Titan Lot',
    sockets: { N: SocketType.BUILDING_LOT, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.BUILDING_LOT },
    weight: 20.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE,
    buildingType: 'sky_artdeco'
  },
  {
    id: 'lot_residential_block',
    name: 'Residential Borough Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 25.0,
    terrainType: TerrainType.SIDEWALK,
    overlayType: OverlayTileType.NONE,
    buildingType: 'b1'
  },
  {
    id: 'lot_civic_hospital',
    name: 'Hospital Civic Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.PLAZA, S: SocketType.SIDEWALK, W: SocketType.PLAZA },
    weight: 15.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE,
    buildingType: '1'
  },

  // ── 7. Parks, Plazas, & Open Spaces ───────────────────────────────────────────
  {
    id: 'civic_park',
    name: 'Central Civic Park',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 18.0,
    terrainType: TerrainType.GRASS,
    overlayType: OverlayTileType.NONE
  },
  {
    id: 'plaza_stone',
    name: 'Urban Plaza Stone',
    sockets: { N: SocketType.PLAZA, E: SocketType.PLAZA, S: SocketType.PLAZA, W: SocketType.PLAZA },
    weight: 14.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE
  },

  // ── 8. Waterfront & Docks ──────────────────────────────────────────────────────
  {
    id: 'water_deep',
    name: 'Water Deep Canal',
    sockets: { N: SocketType.WATER, E: SocketType.WATER, S: SocketType.WATER, W: SocketType.WATER },
    weight: 12.0,
    terrainType: TerrainType.WATER,
    overlayType: OverlayTileType.NONE
  }
];
