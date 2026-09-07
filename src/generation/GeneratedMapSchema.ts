import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';

export interface SerializedTile {
  terrainType: TerrainType;
  overlayType: OverlayTileType;
  isIntersection?: boolean;
  roadAxis?: 'NS' | 'EW' | 'DIAG';
  tileSprite?: string;
}

export interface SerializedBuilding {
  gx: number;
  gz: number;
  w: number;
  h: number;
  typeKey: string;
  lotType: string;
  centerWorldX: number;
  centerWorldZ: number;
}

export interface SerializedWaypoint {
  worldX: number;
  worldZ: number;
  name: string;
}

export interface GenerationMetadata {
  generatedAt: string;
  layerTimings: Record<string, number>;
  wfcAttempts: number;
  buildingCount: number;
}

export interface GeneratedMapData {
  version: string;
  seed: number;
  gridDim: number;
  tiles: SerializedTile[][] | number[];
  buildings: SerializedBuilding[];
  roadWaypoints: SerializedWaypoint[];
  metadata: GenerationMetadata;
}
