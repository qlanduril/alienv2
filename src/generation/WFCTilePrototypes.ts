import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { BUILDING_DEFS } from '../core/BuildingDefs';

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
  rotation?: number;     // 0, 90, 180, 270
}

// ─── Socket Compatibility Verification ──────────────────────────────────────────
export function areSocketsCompatible(s1: SocketType, s2: SocketType): boolean {
  if (s1 === SocketType.ANY || s2 === SocketType.ANY) return true;
  if (s1 === s2) return true;
  // Sidewalks connect to sidewalks, grass, building lots, or plazas
  if (
    (s1 === SocketType.SIDEWALK && (s2 === SocketType.GRASS || s2 === SocketType.BUILDING_LOT || s2 === SocketType.PLAZA)) ||
    (s2 === SocketType.SIDEWALK && (s1 === SocketType.GRASS || s1 === SocketType.BUILDING_LOT || s1 === SocketType.PLAZA)) ||
    (s1 === SocketType.GRASS && s2 === SocketType.PLAZA) ||
    (s2 === SocketType.GRASS && s1 === SocketType.PLAZA)
  ) {
    return true;
  }
  return false;
}

// ─── Auto-Rotator Helper (Generates 90°, 180°, 270° Cardinal Rotations) ──────────
export function createRotatedPrototypes(base: WFCTilePrototype): WFCTilePrototype[] {
  const result: WFCTilePrototype[] = [ { ...base, rotation: 0 } ];

  const rotateSockets = (s: WFCSockets): WFCSockets => ({
    N: s.W,
    E: s.N,
    S: s.E,
    W: s.S
  });

  let currentSockets = base.sockets;
  for (let rot = 90; rot <= 270; rot += 90) {
    currentSockets = rotateSockets(currentSockets);
    result.push({
      ...base,
      id: `${base.id}_rot${rot}`,
      name: `${base.name} (${rot}°)`,
      sockets: currentSockets,
      rotation: rot,
      roadAxis: base.roadAxis ? (base.roadAxis === 'NS' ? 'EW' : 'NS') : undefined
    });
  }

  return result;
}

// ─── WFC Tile Prototype Catalog ─────────────────────────────────────────────────
// Calibrated tile weights based on Hillman (2022) Sec. 8.1:
// - Straight Roads: 50.0 (High weight to produce long natural avenues)
// - Road Corners: 15.0
// - T-Junctions: 10.0
// - 4-Way Cross Intersections: 5.0 (Low weight to eliminate junction mazes)
// - Building Lots: 25.0
// - Green Parks: 20.0
// - Sandstone Plazas: 15.0
// - Water Canals: 12.0

export const RAW_TILE_PROTOTYPES: WFCTilePrototype[] = [
  // 1. Straight Roads
  {
    id: 'road_straight_ns',
    name: 'Road Straight North-South',
    sockets: { N: SocketType.ROAD, E: SocketType.SIDEWALK, S: SocketType.ROAD, W: SocketType.SIDEWALK },
    weight: 50.0,
    terrainType: TerrainType.ROAD_STRAIGHT_NS,
    overlayType: OverlayTileType.ROAD,
    roadAxis: 'NS'
  },
  {
    id: 'road_straight_ew',
    name: 'Road Straight East-West',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.ROAD, S: SocketType.SIDEWALK, W: SocketType.ROAD },
    weight: 50.0,
    terrainType: TerrainType.ROAD_STRAIGHT_EW,
    overlayType: OverlayTileType.ROAD,
    roadAxis: 'EW'
  },

  // 2. Road Turns / Corners
  {
    id: 'road_turn_ne',
    name: 'Road Turn North-East',
    sockets: { N: SocketType.ROAD, E: SocketType.ROAD, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 15.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD
  },

  // 3. T-Intersections
  {
    id: 'road_t_north',
    name: 'Road T-Intersection (North Branch)',
    sockets: { N: SocketType.ROAD, E: SocketType.ROAD, S: SocketType.SIDEWALK, W: SocketType.ROAD },
    weight: 10.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD,
    isIntersection: true
  },

  // 4. 4-Way Cross Intersections (Low weight 5.0 prevents dense junction mazes)
  {
    id: 'road_cross',
    name: 'Road 4-Way Cross Intersection',
    sockets: { N: SocketType.ROAD, E: SocketType.ROAD, S: SocketType.ROAD, W: SocketType.ROAD },
    weight: 5.0,
    terrainType: TerrainType.ROAD_INTERSECTION,
    overlayType: OverlayTileType.ROAD,
    isIntersection: true
  },

  // 5. Dead Ends / Cul-de-sacs
  {
    id: 'road_deadend_n',
    name: 'Road Dead-End North',
    sockets: { N: SocketType.ROAD, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 6.0,
    terrainType: TerrainType.ROAD_STRAIGHT_NS,
    overlayType: OverlayTileType.ROAD
  },

  // 6. Commercial & Residential Building Lots
  {
    id: 'lot_cyber_spire',
    name: 'Cyber Spire Skyscraper Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.BUILDING_LOT, S: SocketType.BUILDING_LOT, W: SocketType.SIDEWALK },
    weight: 25.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE,
    buildingType: 'sky_cyber'
  },
  {
    id: 'lot_artdeco_titan',
    name: 'Art Deco Titan Lot',
    sockets: { N: SocketType.BUILDING_LOT, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.BUILDING_LOT },
    weight: 25.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE,
    buildingType: 'sky_artdeco'
  },
  {
    id: 'lot_biotech_helix',
    name: 'Biotech Helix Lab Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.GRASS, S: SocketType.SIDEWALK, W: SocketType.GRASS },
    weight: 25.0,
    terrainType: TerrainType.GRASS,
    overlayType: OverlayTileType.NONE,
    buildingType: 'sky_biotech'
  },
  {
    id: 'lot_brownstone_residential',
    name: 'Residential Brownstone Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 30.0,
    terrainType: TerrainType.SIDEWALK,
    overlayType: OverlayTileType.NONE,
    buildingType: 'b1'
  },
  {
    id: 'lot_lowrise_shop',
    name: 'Low-rise Shop Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 30.0,
    terrainType: TerrainType.SIDEWALK,
    overlayType: OverlayTileType.NONE,
    buildingType: 'b2'
  },
  {
    id: 'lot_midrise_apartments',
    name: 'Mid-rise Apartments Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.GRASS, S: SocketType.SIDEWALK, W: SocketType.GRASS },
    weight: 25.0,
    terrainType: TerrainType.GRASS,
    overlayType: OverlayTileType.NONE,
    buildingType: 'b3'
  },
  {
    id: 'lot_midrise_office',
    name: 'Mid-rise Office Lot',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.PLAZA, S: SocketType.SIDEWALK, W: SocketType.PLAZA },
    weight: 25.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE,
    buildingType: 'b4'
  },

  // 7. Parks, Plazas, & Open Spaces
  {
    id: 'civic_park',
    name: 'Central Civic Park',
    sockets: { N: SocketType.SIDEWALK, E: SocketType.SIDEWALK, S: SocketType.SIDEWALK, W: SocketType.SIDEWALK },
    weight: 20.0,
    terrainType: TerrainType.GRASS,
    overlayType: OverlayTileType.NONE
  },
  {
    id: 'plaza_stone',
    name: 'Urban Plaza Stone',
    sockets: { N: SocketType.PLAZA, E: SocketType.PLAZA, S: SocketType.PLAZA, W: SocketType.PLAZA },
    weight: 15.0,
    terrainType: TerrainType.PLAZA_STONE,
    overlayType: OverlayTileType.NONE
  },

  {
    id: 'water_deep',
    name: 'Water Deep Canal',
    sockets: { N: SocketType.WATER, E: SocketType.WATER, S: SocketType.WATER, W: SocketType.WATER },
    weight: 12.0,
    terrainType: TerrainType.WATER,
    overlayType: OverlayTileType.NONE
  }
];

// Dynamically generate WFC building lot prototypes directly from BUILDING_DEFS catalog
export function generateBuildingCatalogPrototypes(): WFCTilePrototype[] {
  const dynamicLots: WFCTilePrototype[] = [];

  for (const [typeKey, def] of Object.entries(BUILDING_DEFS)) {
    // Skip 3x3 and 4x4 multi-tile landmarks from single-cell lot prototypes (handled by macro-block placement)
    if ((def.footprintTiles || 1) > 1) continue;

    const isSkyscraper = def.tier === 'background';
    const isMidrise = def.tier === 'midground';

    dynamicLots.push({
      id: `lot_auto_${typeKey}`,
      name: `${def.name} Lot`,
      sockets: {
        N: SocketType.SIDEWALK,
        E: isSkyscraper ? SocketType.BUILDING_LOT : SocketType.SIDEWALK,
        S: SocketType.SIDEWALK,
        W: isSkyscraper ? SocketType.BUILDING_LOT : SocketType.SIDEWALK,
      },
      weight: isSkyscraper ? 25.0 : isMidrise ? 28.0 : 30.0,
      terrainType: isSkyscraper || isMidrise ? TerrainType.PLAZA_STONE : TerrainType.SIDEWALK,
      overlayType: OverlayTileType.NONE,
      buildingType: typeKey,
    });
  }

  return dynamicLots;
}

// Expanded catalog containing all cardinal rotations and dynamic sprite catalog prototypes
export const WFC_TILE_PROTOTYPES: WFCTilePrototype[] = [
  ...RAW_TILE_PROTOTYPES.flatMap(p =>
    p.id === 'road_cross' || p.id === 'civic_park' || p.id === 'plaza_stone' || p.id === 'water_deep'
      ? [{ ...p, rotation: 0 }]
      : createRotatedPrototypes(p)
  ),
  ...generateBuildingCatalogPrototypes()
];
