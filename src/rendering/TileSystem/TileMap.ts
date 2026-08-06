export enum TerrainType {
  ROAD_STRAIGHT_NS = 0,
  ROAD_STRAIGHT_EW = 1,
  ROAD_INTERSECTION = 2,
  SIDEWALK = 3,
  PLAZA_STONE = 4,
  GRASS = 5
}

export enum OverlayTileType {
  NONE = 0,
  ROAD = 1,
  SIDEWALK = 2,
  COURTYARD = 3
}

export interface BuildingLot {
  entityId: number;
  centerWorldX: number;
  centerWorldZ: number;
  footprintWidth: number;
  footprintLength: number;
  visualScale: number;
  zoneType: string;
}

export interface TileCell {
  gridX: number;
  gridZ: number;
  worldX: number;
  worldZ: number;
  elevation: number;
  terrainType: TerrainType;
  overlayType: OverlayTileType;
  occupiedByBuildingId?: number;
}

export class TileMap {
  public static readonly TILE_SIZE = 16; // 16x16 units per grid cell
  public static readonly MAP_BOUNDS = 1024;
  public static readonly GRID_DIM = TileMap.MAP_BOUNDS / TileMap.TILE_SIZE; // 64x64 grid
  public static readonly AVENUE_INTERVAL = 14; // North-South Avenues (X)
  public static readonly STREET_INTERVAL = 7;   // East-West Cross Streets (Z)

  private static cells: TileCell[][] = [];
  private static buildingLots: Map<number, BuildingLot> = new Map();

  public static init() {
    this.cells = [];
    this.buildingLots.clear();

    const halfBound = this.MAP_BOUNDS / 2;

    for (let gx = 0; gx < this.GRID_DIM; gx++) {
      this.cells[gx] = [];
      for (let gz = 0; gz < this.GRID_DIM; gz++) {
        const worldX = -halfBound + (gx + 0.5) * this.TILE_SIZE;
        const worldZ = -halfBound + (gz + 0.5) * this.TILE_SIZE;

        const isAvenue = (gx % TileMap.AVENUE_INTERVAL === 0);
        const isStreet = (gz % TileMap.STREET_INTERVAL === 0);

        let terrain: TerrainType;
        let overlay = OverlayTileType.NONE;

        if (isAvenue && isStreet) {
          terrain = TerrainType.ROAD_INTERSECTION;
          overlay = OverlayTileType.ROAD;
        } else if (isAvenue) {
          terrain = TerrainType.ROAD_STRAIGHT_NS;
          overlay = OverlayTileType.ROAD;
        } else if (isStreet) {
          terrain = TerrainType.ROAD_STRAIGHT_EW;
          overlay = OverlayTileType.ROAD;
        } else {
          const isNearRoadX = ((gx + 1) % TileMap.AVENUE_INTERVAL === 0) || ((gx - 1) % TileMap.AVENUE_INTERVAL === 0);
          const isNearRoadZ = ((gz + 1) % TileMap.STREET_INTERVAL === 0) || ((gz - 1) % TileMap.STREET_INTERVAL === 0);

          if (isNearRoadX || isNearRoadZ) {
            terrain = TerrainType.SIDEWALK;
            overlay = OverlayTileType.SIDEWALK;
          } else {
            // Plaza & courtyard ground for inner micro-lots
            terrain = TerrainType.PLAZA_STONE;
            overlay = OverlayTileType.COURTYARD;
          }
        }

        this.cells[gx][gz] = {
          gridX: gx,
          gridZ: gz,
          worldX,
          worldZ,
          elevation: 0,
          terrainType: terrain,
          overlayType: overlay
        };
      }
    }
  }


  public static worldToGrid(worldX: number, worldZ: number): { gx: number; gz: number } {
    const halfBound = this.MAP_BOUNDS / 2;
    const gx = Math.floor((worldX + halfBound) / this.TILE_SIZE);
    const gz = Math.floor((worldZ + halfBound) / this.TILE_SIZE);
    return {
      gx: Math.max(0, Math.min(this.GRID_DIM - 1, gx)),
      gz: Math.max(0, Math.min(this.GRID_DIM - 1, gz))
    };
  }

  public static getCell(gx: number, gz: number): TileCell | null {
    if (gx < 0 || gx >= this.GRID_DIM || gz < 0 || gz >= this.GRID_DIM) return null;
    return this.cells[gx][gz];
  }

  public static registerLot(lot: BuildingLot) {
    this.buildingLots.set(lot.entityId, lot);

    const minGrid = this.worldToGrid(lot.centerWorldX - lot.footprintWidth / 2, lot.centerWorldZ - lot.footprintLength / 2);
    const maxGrid = this.worldToGrid(lot.centerWorldX + lot.footprintWidth / 2, lot.centerWorldZ + lot.footprintLength / 2);

    for (let gx = minGrid.gx; gx <= maxGrid.gx; gx++) {
      for (let gz = minGrid.gz; gz <= maxGrid.gz; gz++) {
        const cell = this.getCell(gx, gz);
        if (cell && cell.overlayType !== OverlayTileType.ROAD) {
          cell.occupiedByBuildingId = lot.entityId;
        }
      }
    }
  }

  public static getAllCells(): TileCell[][] {
    return this.cells;
  }

  public static getLots(): Map<number, BuildingLot> {
    return this.buildingLots;
  }
}
