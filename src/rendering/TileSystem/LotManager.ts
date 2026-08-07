import { TileMap, BuildingLot } from './TileMap';
import { BUILDING_DEFS } from '../../core/BuildingDefs';

// --- LotManager Constants ---
const HALF_DIVISOR = 2.0;
const TILE_CENTER_MULTIPLIER = 0.5;
const DEFAULT_TILE_SPAN = 1;
const DEFAULT_BUILDING_KEY = '3';
const DEFAULT_VISUAL_SCALE = 1.0;

const ROAD_INTERVAL_CELLS = 6;
const INNER_BLOCK_MIN_OFFSET = 1;
const INNER_BLOCK_SPAN_FACTOR = 4;

export class LotManager {
  /**
   * Computes exact world center coordinates for a lot starting at grid cell (gx, gz) with tile dimensions (widthTiles, lengthTiles).
   */
  public static computeLotWorldPos(gx: number, gz: number, widthTiles: number = DEFAULT_TILE_SPAN, lengthTiles: number = DEFAULT_TILE_SPAN): { x: number; z: number } {
    const halfBound = TileMap.MAP_BOUNDS / HALF_DIVISOR;
    const worldX = -halfBound + (gx + widthTiles * TILE_CENTER_MULTIPLIER) * TileMap.TILE_SIZE;
    const worldZ = -halfBound + (gz + lengthTiles * TILE_CENTER_MULTIPLIER) * TileMap.TILE_SIZE;
    return { x: worldX, z: worldZ };
  }

  public static computeGridCellWorldPos(gx: number, gz: number): { x: number; z: number } {
    return this.computeLotWorldPos(gx, gz, DEFAULT_TILE_SPAN, DEFAULT_TILE_SPAN);
  }

  /**
   * Maps a block column/row and relative block ratio (0..1) to unique inner block grid coordinates,
   * avoiding road cells.
   */
  public static computeInnerBlockWorldPos(blockCol: number, blockRow: number, ratioX: number, ratioY: number): { x: number; z: number } {
    const baseGx = blockCol * ROAD_INTERVAL_CELLS;
    const baseGz = blockRow * ROAD_INTERVAL_CELLS;

    const offsetX = INNER_BLOCK_MIN_OFFSET + ratioX * INNER_BLOCK_SPAN_FACTOR;
    const offsetZ = INNER_BLOCK_MIN_OFFSET + ratioY * INNER_BLOCK_SPAN_FACTOR;

    const gx = baseGx + offsetX;
    const gz = baseGz + offsetZ;

    return this.computeGridCellWorldPos(gx, gz);
  }

  /**
   * Registers a building lot and marks footprint cells, strictly preserving all road tiles.
   */
  public static calculateAndRegisterLot(
    entityId: number,
    worldX: number,
    worldZ: number,
    typeKey: string,
    zoneType: string
  ): BuildingLot {
    const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS[DEFAULT_BUILDING_KEY];
    const visualScale = def.visualScale || DEFAULT_VISUAL_SCALE;

    const footprintWidth = def.width;
    const footprintLength = def.length;

    const lot: BuildingLot = {
      entityId,
      centerWorldX: worldX,
      centerWorldZ: worldZ,
      footprintWidth,
      footprintLength,
      visualScale,
      zoneType
    };

    TileMap.registerLot(lot);
    return lot;
  }
}
