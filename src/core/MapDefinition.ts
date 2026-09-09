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
    { id: 'docks', terrain: TerrainType.SIDEWALK, gx: 48, gz: 33, w: 2,  h: 31 },
    { id: 'water', terrain: TerrainType.WATER,    gx: 50, gz: 33, w: 14, h: 31 },
  ],

  roads: [
    // ── 16-District Connected Road Grid ──────────────────────────────────────
    { id: 'ave_0',  axis: 'NS', gx: 0,  gz: 0, length: 64 },
    { id: 'ave_16', axis: 'NS', gx: 16, gz: 0, length: 64 },
    { id: 'ave_32', axis: 'NS', gx: 32, gz: 0, length: 64 },
    { id: 'ave_48', axis: 'NS', gx: 48, gz: 0, length: 64 }, // Waterfront Avenue

    { id: 'st_0',  axis: 'EW', gx: 0, gz: 0,  length: 64 },
    { id: 'st_16', axis: 'EW', gx: 0, gz: 16, length: 64 },
    { id: 'st_32', axis: 'EW', gx: 0, gz: 32, length: 49 }, // Meets ave_48 at (48, 32)
    { id: 'st_48', axis: 'EW', gx: 0, gz: 48, length: 49 }, // Meets ave_48 at (48, 48)
  ],

  landmarks: [
    // ── 4 Downtown 3D Mega-Landmarks Balanced Around (32, 32) ───────────────────
    { key: 'mega_titan',       gx: 22, gz: 22, terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },
    { key: 'spaceship_hq',     gx: 38, gz: 22, terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },
    { key: 'financial_tower',  gx: 22, gz: 38, terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },
    { key: 'cyber_reactor',    gx: 38, gz: 38, terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },

    // ── Outer District Civic & Commercial Anchors ──────────────────────────────
    { key: 'hospital_civic',   gx: 6,  gz: 22, terrain: TerrainType.SIDEWALK,    bufferTiles: 1 },
    { key: 'pentagon_defense', gx: 6,  gz: 38, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 },
    { key: 'mega_stadium',     gx: 38, gz: 6,  terrain: TerrainType.GRASS,       bufferTiles: 2 },
    { key: 'mall_shopping',    gx: 22, gz: 6,  terrain: TerrainType.SIDEWALK,    bufferTiles: 1 },
    { key: 'school_civic',     gx: 6,  gz: 54, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 },
    { key: '1',                gx: 54, gz: 6,  terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 },
    { key: '2',                gx: 54, gz: 22, terrain: TerrainType.SIDEWALK,    bufferTiles: 1 },
    { key: '3',                gx: 22, gz: 54, terrain: TerrainType.SIDEWALK,    bufferTiles: 1 },
  ],

  islands: [
    {
      // ── Statue of Liberty Island in South-East Harbor Water Bay ────────────
      gx: 50, gz: 33, w: 14, h: 31,
      platformGx: 54, platformGz: 42,
      platformW: 5, platformH: 5,
      landmark: 'statue_liberty',
    }
  ],
};
