import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';

export type RoadAxisType = 'NS' | 'EW' | 'DIAG' | 'ROUNDABOUT' | 'CURVE_NE' | 'CURVE_NW' | 'CURVE_SE' | 'CURVE_SW';

export interface RoundaboutInfo {
  cx: number;
  cz: number;
  radius: number;
  islandType: 'plaza' | 'grass';
  monumentKey?: string;
}

export interface SerializedTile {
  terrainType: TerrainType;
  overlayType: OverlayTileType;
  isIntersection?: boolean;
  roadAxis?: RoadAxisType;
  tileSprite?: string;
  roundaboutCenter?: { cx: number; cz: number; radius: number };
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

export interface BoundaryExitInfo {
  axis: 'NS' | 'EW';
  gridIndex: number; // gx for NS, gz for EW
  edge: 'N' | 'S' | 'W' | 'E';
  worldCoord: number; // worldX for NS, worldZ for EW
  widthTiles: number; // e.g. 1 or 2 tiles
}

export interface BoundaryWaterInfo {
  hasSouthWater: boolean;
  southWaterMinX: number;
  hasEastWater: boolean;
  eastWaterMinZ: number;
}

export interface GenerationMetadata {
  generatedAt: string;
  layerTimings: Record<string, number>;
  wfcAttempts: number;
  buildingCount: number;
  boundaryExits?: BoundaryExitInfo[];
  boundaryWater?: BoundaryWaterInfo;
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
