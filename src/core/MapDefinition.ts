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
    // ── 16-District Perimeter Road Grid (Intersections every 16 cells) ──────────────
    { id: 'ave_0',  axis: 'NS', gx: 0,  gz: 0, length: 64 },
    { id: 'ave_16', axis: 'NS', gx: 16, gz: 0, length: 64 },
    { id: 'ave_32', axis: 'NS', gx: 32, gz: 0, length: 64 },
    { id: 'ave_48', axis: 'NS', gx: 48, gz: 0, length: 54 },

    { id: 'st_0',  axis: 'EW', gx: 0, gz: 0,  length: 64 },
    { id: 'st_16', axis: 'EW', gx: 0, gz: 16, length: 64 },
    { id: 'st_32', axis: 'EW', gx: 0, gz: 32, length: 64 },
    { id: 'st_48', axis: 'EW', gx: 0, gz: 48, length: 54 },
  ],

  landmarks: [
    // ── 16-DISTRICT CENTER GRID SYSTEM (Tall spires North/Background, Low buildings South/Foreground) ──
    // District (0,0) [gx 0..15, gz 0..15] North-West: Alien Spaceship HQ 3D Spire
    { key: 'spaceship_hq',     gx: 6,  gz: 6,  terrain: TerrainType.SIDEWALK,    bufferTiles: 2 },

    // District (1,0) [gx 16..31, gz 0..15] North-Center: Apex Mega-Tower (Tallest background landmark)
    { key: 'mega_titan',       gx: 22, gz: 6,  terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },

    // District (2,0) [gx 32..47, gz 0..15] North-East: Metro Financial Tower 3D Spire
    { key: 'financial_tower',  gx: 38, gz: 6,  terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },

    // District (0,1) [gx 0..15, gz 16..31] Mid-North Tech: Cyber Quantum Reactor
    { key: 'cyber_reactor',    gx: 8,  gz: 22, terrain: TerrainType.PLAZA_STONE, bufferTiles: 2 },

    // ── MID & SOUTH CIVIC / LOW-PROFILE LANDMARKS (Zero vertical occlusion of northern towers) ──
    { key: '3',                gx: 22, gz: 22, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // District (1,1) Center: School
    { key: '1',                gx: 38, gz: 22, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // District (2,1) Center: Hospital
    { key: '2',                gx: 6,  gz: 38, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // District (0,2) Center: Mall
    { key: 'pentagon_defense', gx: 22, gz: 38, terrain: TerrainType.PLAZA_STONE, bufferTiles: 1 }, // District (1,2) Center: Defense Bunker
    { key: 'mega_stadium',     gx: 38, gz: 38, terrain: TerrainType.GRASS,       bufferTiles: 2 }, // District (2,2) Center: Stadium Arena (Low-rise)
    { key: '4',                gx: 22, gz: 52, terrain: TerrainType.SIDEWALK,    bufferTiles: 1 }, // District (1,3) Center: Warehouse
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
