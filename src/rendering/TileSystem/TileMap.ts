// --- TileMap Constants ---
const ZERO_VALUE = 0;
const BOUNDS_END_OFFSET = 1;
const HALF_DIVISOR = 2.0;
const GRID_CELL_CENTER_OFFSET = 0.5;
const DEFAULT_ELEVATION = 0;

export enum TerrainType {
  ROAD_STRAIGHT_NS = 0,
  ROAD_STRAIGHT_EW = 1,
  ROAD_INTERSECTION = 2,
  SIDEWALK = 3,
  PLAZA_STONE = 4,
  GRASS = 5,
  WATER = 6
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

/** Named world-space point on the road network — used for future car path animation */
export interface RoadWaypoint {
  worldX: number;
  worldZ: number;
  name: string;
  nextWaypoints: string[]; // populated at runtime
}

export class TileMap {
  public static readonly TILE_SIZE = 16;        // 16 world units per grid cell
  public static readonly MAP_BOUNDS = 1024;
  public static readonly GRID_DIM = TileMap.MAP_BOUNDS / TileMap.TILE_SIZE; // 64×64

  // Legacy constants kept for reference — no longer drive road generation.
  // CityGenerator now reads road layout from MapDefinition.
  public static readonly AVENUE_INTERVAL = 14;
  public static readonly STREET_INTERVAL = 7;

  private static cells: TileCell[][] = [];
  private static buildingLots: Map<number, BuildingLot> = new Map();

  /** Populated by CityGenerator from MapDefinition road waypoints */
  public static roadWaypoints: RoadWaypoint[] = [];

  // ─── Initialisation ──────────────────────────────────────────────────────────

  /**
   * Initialises a blank 64×64 cell grid — all cells default to GRASS / NONE.
   * CityGenerator then paints zones and roads via the helper methods below.
   */
  public static init() {
    this.cells = [];
    this.buildingLots.clear();
    this.roadWaypoints = [];

    const halfBound = this.MAP_BOUNDS / HALF_DIVISOR;

    for (let gx = ZERO_VALUE; gx < this.GRID_DIM; gx++) {
      this.cells[gx] = [];
      for (let gz = ZERO_VALUE; gz < this.GRID_DIM; gz++) {
        const worldX = -halfBound + (gx + GRID_CELL_CENTER_OFFSET) * this.TILE_SIZE;
        const worldZ = -halfBound + (gz + GRID_CELL_CENTER_OFFSET) * this.TILE_SIZE;

        this.cells[gx][gz] = {
          gridX: gx,
          gridZ: gz,
          worldX,
          worldZ,
          elevation: DEFAULT_ELEVATION,
          terrainType: TerrainType.GRASS,
          overlayType: OverlayTileType.NONE
        };
      }
    }
  }

  // ─── Paint Helpers (called by CityGenerator) ─────────────────────────────────

  /** Set terrain type on a single cell (no-op if out of bounds). */
  public static setTerrain(gx: number, gz: number, terrain: TerrainType) {
    const cell = this.getCell(gx, gz);
    if (cell) cell.terrainType = terrain;
  }

  /** Mark a cell as a road (sets terrain + overlayType). */
  public static setRoad(gx: number, gz: number, axis: 'NS' | 'EW') {
    const cell = this.getCell(gx, gz);
    if (!cell) return;
    cell.terrainType = axis === 'NS' ? TerrainType.ROAD_STRAIGHT_NS : TerrainType.ROAD_STRAIGHT_EW;
    cell.overlayType = OverlayTileType.ROAD;
  }

  /** Mark a cell as a road intersection (crosswalk texture + road overlay). */
  public static setIntersection(gx: number, gz: number) {
    const cell = this.getCell(gx, gz);
    if (!cell) return;
    cell.terrainType = TerrainType.ROAD_INTERSECTION;
    cell.overlayType = OverlayTileType.ROAD;
  }

  /** Mark sidewalk flanks without overwriting road cells. */
  public static setSidewalkIfNotRoad(gx: number, gz: number) {
    const cell = this.getCell(gx, gz);
    if (cell && cell.overlayType !== OverlayTileType.ROAD) {
      cell.terrainType = TerrainType.SIDEWALK;
      cell.overlayType = OverlayTileType.SIDEWALK;
    }
  }

  // ─── Coordinate & Lookup Helpers ────────────────────────────────────────────

  public static worldToGrid(worldX: number, worldZ: number): { gx: number; gz: number } {
    const halfBound = this.MAP_BOUNDS / HALF_DIVISOR;
    const gx = Math.floor((worldX + halfBound) / this.TILE_SIZE);
    const gz = Math.floor((worldZ + halfBound) / this.TILE_SIZE);
    return {
      gx: Math.max(ZERO_VALUE, Math.min(this.GRID_DIM - BOUNDS_END_OFFSET, gx)),
      gz: Math.max(ZERO_VALUE, Math.min(this.GRID_DIM - BOUNDS_END_OFFSET, gz))
    };
  }

  public static getCell(gx: number, gz: number): TileCell | null {
    if (gx < ZERO_VALUE || gx >= this.GRID_DIM || gz < ZERO_VALUE || gz >= this.GRID_DIM) return null;
    return this.cells[gx][gz];
  }

  // ─── Lot Registration ────────────────────────────────────────────────────────

  public static registerLot(lot: BuildingLot) {
    this.buildingLots.set(lot.entityId, lot);

    const minGrid = this.worldToGrid(
      lot.centerWorldX - lot.footprintWidth / HALF_DIVISOR,
      lot.centerWorldZ - lot.footprintLength / HALF_DIVISOR
    );
    const maxGrid = this.worldToGrid(
      lot.centerWorldX + lot.footprintWidth / HALF_DIVISOR,
      lot.centerWorldZ + lot.footprintLength / HALF_DIVISOR
    );

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
