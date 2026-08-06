import { TileMap, BuildingLot } from './TileMap';
import { BUILDING_DEFS } from '../../core/BuildingDefs';

export class LotManager {
  /**
   * Computes exact world center coordinates for a lot starting at grid cell (gx, gz) with tile dimensions (widthTiles, lengthTiles).
   */
  public static computeLotWorldPos(gx: number, gz: number, widthTiles: number = 1, lengthTiles: number = 1): { x: number; z: number } {
    const halfBound = TileMap.MAP_BOUNDS / 2;
    const worldX = -halfBound + (gx + widthTiles * 0.5) * TileMap.TILE_SIZE;
    const worldZ = -halfBound + (gz + lengthTiles * 0.5) * TileMap.TILE_SIZE;
    return { x: worldX, z: worldZ };
  }

  public static computeGridCellWorldPos(gx: number, gz: number): { x: number; z: number } {
    return this.computeLotWorldPos(gx, gz, 1, 1);
  }


  /**
   * Maps a block column/row and relative block ratio (0..1) to unique inner block grid coordinates,
   * avoiding road cells (gx % 6 === 0 or gz % 6 === 0).
   */
  public static computeInnerBlockWorldPos(blockCol: number, blockRow: number, ratioX: number, ratioY: number): { x: number; z: number } {
    const ROAD_INTERVAL = 6;
    const baseGx = blockCol * ROAD_INTERVAL;
    const baseGz = blockRow * ROAD_INTERVAL;

    const offsetX = 1 + ratioX * 4;
    const offsetZ = 1 + ratioY * 4;

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
    const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];
    const visualScale = def.visualScale || 1.0;

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
