/**
 * MapDefinition.ts
 *
 * Hand-authored city map layout. Defines all zones, road segments (with future car
 * animation waypoints), landmark placements, and water islands.
 *
 * Grid coordinate system: gx = West→East (0..63), gz = North→South (0..63).
 * gz=0 is the far-background skyline; gz=63 is the closest foreground.
 *
 * Map Layout (64×64 cells, TILE_SIZE=16, MAP_BOUNDS=1024):
 *
 *  gx →   0        8    9    22   23   36   37   48       64
 *  gz
 *   0   [AIRPORT  ][R][FINANCIAL   ][R][FINANCIAL][R][TECH][R][WATER . . ]
 *   .   [ runway  ][O][CORE (sky-  ][O][CORE 2   ][O][    ][O][           ]
 *  11   [tarmac   ][A][scrapers)   ][A][          ][A][    ][A][           ]
 *  12   [══════════EW ROAD (gz=12)════════════════════════]  [   WATER    ]
 *  13   [PARK-W   ][D][ CIVIC MID  ][D][ CIVIC MID][D][PRK][D][  ISLAND  ]
 *   .   [greenery ][  ][ hospital  ][  ][ mall     ][  ][   ][  ][STATUE  ]
 *  23   [         ][  ][ spaceship ][  ][          ][  ][   ][  ][LIBERTY ]
 *  24   [══════════EW ROAD (gz=24)════════════════════════]  [   WATER    ]
 *  25   [SPORTS & LEISURE (2 stadiums)    ][RESIDENTIAL  ][R][WATER      ]
 *  35   [open grass fields                ][low-rise     ][  ][           ]
 *  36   [══════════EW ROAD (gz=36)════════════════════════]  [   WATER    ]
 *  37   [DOCKS / SOUTH DISTRICT           ][warehouses   ][  ][   WATER   ]
 *  63   [                                                 ][  ][           ]
 */

import { TerrainType } from '../rendering/TileSystem/TileMap';

// ─── Type Definitions ──────────────────────────────────────────────────────────

/** Logical district category — drives building pool and density selection */
export type ZoneId =
  | 'airport'
  | 'financial'
  | 'tech'
  | 'civic'
  | 'park'
  | 'sports'
  | 'residential'
  | 'docks'
  | 'water';

/** Rectangular zone painted onto the tile grid */
export interface ZoneDef {
  id: ZoneId;
  terrain: TerrainType;
  gx: number; gz: number; w: number; h: number;
}

/**
 * A single straight road segment (axis-aligned).
 * NS = runs North→South (constant gx, varies gz).
 * EW = runs East→West  (constant gz, varies gx).
 *
 * Waypoints mark named positions for future car path graph animation.
 */
export interface RoadSegmentDef {
  id: string;
  axis: 'NS' | 'EW';
  gx: number;     // NS: constant column; EW: start column
  gz: number;     // NS: start row;    EW: constant row
  length: number; // cell count
  waypoints?: Array<{ name: string; cellOffset: number }>;
}

/** A named world-space position on the road network for car animation */
export interface RoadWaypoint {
  worldX: number;
  worldZ: number;
  name: string;
  nextWaypoints: string[]; // populated at runtime by CityGenerator
}

/** Civic/landmark building anchor with its surrounding ground terrain */
export interface LandmarkDef {
  key: string;          // BUILDING_DEFS key
  gx: number; gz: number;
  terrain: TerrainType; // ground painted under building + buffer
  bufferTiles?: number; // reserve this many extra cells around the lot
}

/**
 * A water body with a land platform in the center.
 * The platform is painted PLAZA_STONE over the water zone and a building placed on it.
 */
export interface IslandDef {
  gx: number; gz: number; w: number; h: number;         // full island footprint (water)
  platformGx: number; platformGz: number;                // stone platform top-left cell
  platformW: number; platformH: number;                  // platform size in tiles
  landmark?: string;                                     // building key placed at center
}

export interface MapDefinition {
  defaultTerrain: TerrainType;
  zones: ZoneDef[];
  roads: RoadSegmentDef[];
  landmarks: LandmarkDef[];
  islands: IslandDef[];
}

// ─── THE MAP ───────────────────────────────────────────────────────────────────

export const MAP_DEFINITION: MapDefinition = {
  defaultTerrain: TerrainType.GRASS,

  // Zones are painted in order (later zones overwrite earlier ones).
  zones: [
    // ── North band gz 0–11: Background skyscrapers ─────────────────────────
    { id: 'airport',   terrain: TerrainType.SIDEWALK,    gx: 0,  gz: 0,  w: 8,  h: 12 },
    { id: 'financial', terrain: TerrainType.PLAZA_STONE, gx: 9,  gz: 0,  w: 13, h: 12 },
    { id: 'financial', terrain: TerrainType.PLAZA_STONE, gx: 23, gz: 0,  w: 13, h: 12 },
    { id: 'tech',      terrain: TerrainType.PLAZA_STONE, gx: 37, gz: 0,  w: 11, h: 12 },
    { id: 'water',     terrain: TerrainType.WATER,       gx: 49, gz: 0,  w: 15, h: 64 }, // East water strip

    // ── Mid band gz 13–23: Civic, parks ────────────────────────────────────
    { id: 'park',  terrain: TerrainType.GRASS,    gx: 0,  gz: 13, w: 8,  h: 11 },
    { id: 'civic', terrain: TerrainType.SIDEWALK, gx: 9,  gz: 13, w: 13, h: 11 },
    { id: 'civic', terrain: TerrainType.SIDEWALK, gx: 23, gz: 13, w: 13, h: 11 },
    { id: 'park',  terrain: TerrainType.GRASS,    gx: 37, gz: 13, w: 11, h: 11 },

    // ── South band gz 25–35: Sports & residential ──────────────────────────
    { id: 'sports',      terrain: TerrainType.GRASS, gx: 0,  gz: 25, w: 22, h: 11 },
    { id: 'residential', terrain: TerrainType.GRASS, gx: 23, gz: 25, w: 14, h: 11 },
    { id: 'residential', terrain: TerrainType.GRASS, gx: 37, gz: 25, w: 11, h: 11 },

    // ── Far south gz 37–63: Docks ───────────────────────────────────────────
    { id: 'docks', terrain: TerrainType.SIDEWALK, gx: 0, gz: 37, w: 49, h: 27 },
  ],

  roads: [
    // ── North–South Avenues (full map height) ──────────────────────────────
    {
      id: 'ave_8', axis: 'NS', gx: 8, gz: 0, length: 64,
      waypoints: [
        { name: 'ave8_north',    cellOffset: 4  },
        { name: 'ave8_cross_12', cellOffset: 12 },
        { name: 'ave8_cross_24', cellOffset: 24 },
        { name: 'ave8_cross_36', cellOffset: 36 },
        { name: 'ave8_south',    cellOffset: 58 },
      ]
    },
    {
      id: 'ave_22', axis: 'NS', gx: 22, gz: 0, length: 64,
      waypoints: [
        { name: 'ave22_north',    cellOffset: 4  },
        { name: 'ave22_cross_12', cellOffset: 12 },
        { name: 'ave22_cross_24', cellOffset: 24 },
        { name: 'ave22_cross_36', cellOffset: 36 },
        { name: 'ave22_south',    cellOffset: 58 },
      ]
    },
    {
      id: 'ave_36', axis: 'NS', gx: 36, gz: 0, length: 64,
      waypoints: [
        { name: 'ave36_north',    cellOffset: 4  },
        { name: 'ave36_cross_12', cellOffset: 12 },
        { name: 'ave36_cross_24', cellOffset: 24 },
        { name: 'ave36_cross_36', cellOffset: 36 },
        { name: 'ave36_south',    cellOffset: 58 },
      ]
    },
    {
      id: 'ave_48', axis: 'NS', gx: 48, gz: 0, length: 64,
    },

    // ── East–West Streets (stop before water at gx=49) ─────────────────────
    {
      id: 'st_12', axis: 'EW', gx: 0, gz: 12, length: 49,
      waypoints: [
        { name: 'st12_west',    cellOffset: 1  },
        { name: 'st12_cross_8', cellOffset: 8  },
        { name: 'st12_cross_22',cellOffset: 22 },
        { name: 'st12_cross_36',cellOffset: 36 },
        { name: 'st12_east',    cellOffset: 47 },
      ]
    },
    {
      id: 'st_24', axis: 'EW', gx: 0, gz: 24, length: 49,
      waypoints: [
        { name: 'st24_west',    cellOffset: 1  },
        { name: 'st24_cross_8', cellOffset: 8  },
        { name: 'st24_cross_22',cellOffset: 22 },
        { name: 'st24_cross_36',cellOffset: 36 },
        { name: 'st24_east',    cellOffset: 47 },
      ]
    },
    {
      id: 'st_36', axis: 'EW', gx: 0, gz: 36, length: 49,
      waypoints: [
        { name: 'st36_west',    cellOffset: 1  },
        { name: 'st36_cross_8', cellOffset: 8  },
        { name: 'st36_cross_22',cellOffset: 22 },
        { name: 'st36_cross_36',cellOffset: 36 },
        { name: 'st36_east',    cellOffset: 47 },
      ]
    },
  ],

  landmarks: [
    // ── Financial Core (North background) ──────────────────────────────────
    { key: 'mega_titan',       gx: 14, gz: 2,  terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },
    { key: 'pentagon_defense', gx: 1,  gz: 2,  terrain: TerrainType.SIDEWALK,    bufferTiles: 2 },
    { key: '3',                gx: 40, gz: 3,  terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // School
    { key: '5',                gx: 27, gz: 2,  terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // Skyscraper anchor

    // ── Civic Mid-band ──────────────────────────────────────────────────────
    { key: 'spaceship_hq', gx: 1,  gz: 14, terrain: TerrainType.GRASS,       bufferTiles: 2 },
    { key: '1',            gx: 11, gz: 15, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // Hospital
    { key: '2',            gx: 25, gz: 15, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // Mall

    // ── Sports District (SW) ────────────────────────────────────────────────
    { key: 'mega_stadium', gx: 1,  gz: 26, terrain: TerrainType.GRASS, bufferTiles: 2 },
    { key: 'mega_stadium', gx: 13, gz: 26, terrain: TerrainType.GRASS, bufferTiles: 2 },

    // ── Docks / South ───────────────────────────────────────────────────────
    { key: '4', gx: 10, gz: 40, terrain: TerrainType.SIDEWALK, bufferTiles: 1 }, // Warehouse A
    { key: '4', gx: 28, gz: 42, terrain: TerrainType.SIDEWALK, bufferTiles: 1 }, // Warehouse B
  ],

  islands: [
    {
      // ── Statue of Liberty Island ─────────────────────────────────────────
      // Located in the eastern water strip, south of the mid-band road.
      gx: 50, gz: 19, w: 8, h: 8,           // full island water footprint
      platformGx: 52, platformGz: 21,        // PLAZA_STONE platform top-left
      platformW: 3,   platformH: 3,          // statue_liberty needs 3×3
      landmark: 'statue_liberty',
    }
  ],
};
