/**
 * MapDefinition.ts
 *
 * Dense, rich city map definition spanning full 64x64 grid with active building pools
 * across all districts to ensure zero empty pavement deserts.
 */

import { TerrainType } from '../rendering/TileSystem/TileMap';

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

export interface ZoneDef {
  id: ZoneId;
  terrain: TerrainType;
  gx: number; gz: number; w: number; h: number;
}

export interface RoadSegmentDef {
  id: string;
  axis: 'NS' | 'EW';
  gx: number;
  gz: number;
  length: number;
  waypoints?: Array<{ name: string; cellOffset: number }>;
}

export interface LandmarkDef {
  key: string;
  gx: number; gz: number;
  terrain: TerrainType;
  bufferTiles?: number;
}

export interface IslandDef {
  gx: number; gz: number; w: number; h: number;
  platformGx: number; platformGz: number;
  platformW: number; platformH: number;
  landmark?: string;
}

export interface MapDefinition {
  defaultTerrain: TerrainType;
  zones: ZoneDef[];
  roads: RoadSegmentDef[];
  landmarks: LandmarkDef[];
  islands: IslandDef[];
}

export const MAP_DEFINITION: MapDefinition = {
  defaultTerrain: TerrainType.GRASS,

  zones: [
    // ── 1. North-West Tech & Flight District ────────────────────────────────
    { id: 'airport', terrain: TerrainType.SIDEWALK, gx: 0, gz: 0, w: 16, h: 16 },
    { id: 'tech',    terrain: TerrainType.PLAZA_STONE, gx: 0, gz: 16, w: 16, h: 21 },

    // ── 2. North-East Sports, Arenas & Parks ────────────────────────────────
    { id: 'sports', terrain: TerrainType.GRASS, gx: 37, gz: 0, w: 27, h: 16 },
    { id: 'park',   terrain: TerrainType.GRASS, gx: 37, gz: 16, w: 27, h: 21 },

    // ── 3. Central Financial Downtown Core (Skyscraper Spines) ─────────────
    { id: 'financial', terrain: TerrainType.PLAZA_STONE, gx: 16, gz: 0,  w: 21, h: 16 },
    { id: 'financial', terrain: TerrainType.PLAZA_STONE, gx: 16, gz: 16, w: 21, h: 21 },

    // ── 4. South-West Residential & Civic Borough ───────────────────────────
    { id: 'civic',       terrain: TerrainType.PLAZA_STONE, gx: 0,  gz: 37, w: 16, h: 27 },
    { id: 'residential', terrain: TerrainType.GRASS,       gx: 16, gz: 37, w: 21, h: 27 },

    // ── 5. South-East Water Harbor & Docks ────────────────────────────────────
    { id: 'docks', terrain: TerrainType.SIDEWALK, gx: 37, gz: 37, w: 17, h: 27 },
    { id: 'water', terrain: TerrainType.WATER,    gx: 54, gz: 37, w: 10, h: 27 },
  ],

  roads: [
    // ── 6 North-South Avenues (every 10 cells) ────────────────────────────────
    { id: 'ave_6',  axis: 'NS', gx: 6,  gz: 0, length: 64 },
    { id: 'ave_16', axis: 'NS', gx: 16, gz: 0, length: 64 },
    { id: 'ave_26', axis: 'NS', gx: 26, gz: 0, length: 64 },
    { id: 'ave_36', axis: 'NS', gx: 36, gz: 0, length: 64 },
    { id: 'ave_46', axis: 'NS', gx: 46, gz: 0, length: 64 },
    { id: 'ave_56', axis: 'NS', gx: 56, gz: 0, length: 64 },

    // ── 6 East-West Streets (every 10 cells) ──────────────────────────────────
    { id: 'st_6',  axis: 'EW', gx: 0, gz: 6,  length: 54 },
    { id: 'st_16', axis: 'EW', gx: 0, gz: 16, length: 54 },
    { id: 'st_26', axis: 'EW', gx: 0, gz: 26, length: 54 },
    { id: 'st_36', axis: 'EW', gx: 0, gz: 36, length: 54 },
    { id: 'st_46', axis: 'EW', gx: 0, gz: 46, length: 54 },
    { id: 'st_56', axis: 'EW', gx: 0, gz: 56, length: 54 },
  ],

  landmarks: [
    // ── 1. EXACT MAP CENTER: 3D Skyscraper Landmark ───────────────────────────
    { key: '5',                gx: 28, gz: 28, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // 3D Skyscraper at Map Center!
    { key: 'mega_titan',       gx: 28, gz: 18, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 },
    { key: 'pentagon_defense', gx: 18, gz: 28, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 },
    { key: '3',                gx: 18, gz: 18, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // School

    // ── 2. North-West Airfield Control Tower ──────────────────────────────────
    { key: 'spaceship_hq', gx: 1, gz: 1, terrain: TerrainType.SIDEWALK, bufferTiles: 1 },

    // ── 3. North-East Twin Sports Arenas ──────────────────────────────────────
    { key: 'mega_stadium', gx: 38, gz: 1,  terrain: TerrainType.GRASS, bufferTiles: 1 },
    { key: 'mega_stadium', gx: 38, gz: 14, terrain: TerrainType.GRASS, bufferTiles: 1 },

    // ── 4. South-West Civic & Shopping ────────────────────────────────────────
    { key: '1', gx: 8,  gz: 38, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // Hospital
    { key: '2', gx: 18, gz: 38, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // Mall

    // ── 5. South Docks Warehouses ──────────────────────────────────────────────
    { key: '4', gx: 38, gz: 38, terrain: TerrainType.SIDEWALK, bufferTiles: 1 }, // Warehouse A
    { key: '4', gx: 48, gz: 38, terrain: TerrainType.SIDEWALK, bufferTiles: 1 }, // Warehouse B
  ],

  islands: [
    {
      // ── Statue of Liberty Island in South-East Water ────────────────────────
      gx: 54, gz: 48, w: 8, h: 8,
      platformGx: 56, platformGz: 50,
      platformW: 3, platformH: 3,
      landmark: 'statue_liberty',
    }
  ],
};
