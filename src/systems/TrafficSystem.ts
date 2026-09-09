import { TileMap, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { DestructionSystem } from './DestructionSystem';
import { DecalManager } from '../rendering/TileSystem/DecalManager';
import { ScoreSystem } from './ScoreSystem';
import { AudioSystem } from './AudioSystem';

export interface Vehicle {
  id: number;
  x: number;
  y: number; // ground depth (worldZ)
  vx: number;
  vy: number;
  speed: number;
  heading: number;
  targetHeading: number;
  roadAxis: 'EW' | 'NS';
  direction: 1 | -1;
  type: 'sedan' | 'cab' | 'truck' | 'police';
  color: number;
  alive: boolean;
  respawnTimer: number;
  laneOffset: number;
}

export class TrafficSystem {
  private static nextId = 1;
  public static vehicles: Vehicle[] = [];
  private static roadRows: number[] = [];
  private static roadCols: number[] = [];
  private static intersections: Array<{ x: number; z: number }> = [];

  private static readonly MAX_VEHICLES = 36;
  private static isInitialized = false;

  public static init() {
    this.vehicles = [];
    this.roadRows = [];
    this.roadCols = [];
    this.intersections = [];

    this.extractRoadNetwork();
    this.spawnInitialFleet();
    this.isInitialized = true;
  }

  private static extractRoadNetwork() {
    const rowSet = new Set<number>();
    const colSet = new Set<number>();

    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (cell && cell.overlayType === OverlayTileType.ROAD) {
          rowSet.add(gz);
          colSet.add(gx);
          if (cell.terrainType === 5 || (cell as any).isIntersection) { // ROAD_INTERSECTION
            this.intersections.push({ x: cell.worldX, z: cell.worldZ });
          }
        }
      }
    }

    this.roadRows = Array.from(rowSet);
    this.roadCols = Array.from(colSet);
  }

  private static spawnInitialFleet() {
    if (this.roadRows.length === 0 && this.roadCols.length === 0) return;

    for (let i = 0; i < this.MAX_VEHICLES; i++) {
      const v = this.createRandomVehicle();
      if (v) this.vehicles.push(v);
    }
  }

  private static createRandomVehicle(): Vehicle | null {
    const isEW = Math.random() > 0.5;
    const direction: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
    const laneOffset = direction * 2.8; // right-hand traffic

    let x = 0;
    let y = 0;
    let heading = 0;
    let vx = 0;
    let vy = 0;
    const speed = 26 + Math.random() * 14;

    if (isEW && this.roadRows.length > 0) {
      const gz = this.roadRows[Math.floor(Math.random() * this.roadRows.length)];
      const cell = TileMap.getCell(Math.floor(Math.random() * TileMap.GRID_DIM), gz);
      if (!cell) return null;
      x = -460 + Math.random() * 920;
      y = cell.worldZ + laneOffset;
      heading = direction === 1 ? 0 : Math.PI;
      vx = direction * speed;
      vy = 0;
    } else if (this.roadCols.length > 0) {
      const gx = this.roadCols[Math.floor(Math.random() * this.roadCols.length)];
      const cell = TileMap.getCell(gx, Math.floor(Math.random() * TileMap.GRID_DIM));
      if (!cell) return null;
      x = cell.worldX + laneOffset;
      y = -460 + Math.random() * 920;
      heading = direction === 1 ? Math.PI * 0.5 : -Math.PI * 0.5;
      vx = 0;
      vy = direction * speed;
    } else {
      return null;
    }

    // Vehicle type & color variety
    const roll = Math.random();
    let type: 'sedan' | 'cab' | 'truck' | 'police' = 'sedan';
    let color = 0x3b82f6; // blue

    if (roll < 0.15) {
      type = 'police';
      color = 0x111827; // black & white
    } else if (roll < 0.35) {
      type = 'cab';
      color = 0xfacc15; // taxi yellow
    } else if (roll < 0.55) {
      type = 'truck';
      color = 0x9ca3af; // cargo grey/white
    } else {
      const colors = [0xef4444, 0x3b82f6, 0x10b981, 0x8b5cf6, 0xe5e7eb, 0x374151];
      color = colors[Math.floor(Math.random() * colors.length)];
    }

    return {
      id: this.nextId++,
      x,
      y,
      vx,
      vy,
      speed,
      heading,
      targetHeading: heading,
      roadAxis: isEW ? 'EW' : 'NS',
      direction,
      type,
      color,
      alive: true,
      respawnTimer: 0,
      laneOffset
    };
  }

  public static tick(delta: number) {
    if (!this.isInitialized) {
      this.init();
    }

    const MAP_LIMIT = 480;

    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];

      if (!v.alive) {
        v.respawnTimer -= delta;
        if (v.respawnTimer <= 0) {
          const fresh = this.createRandomVehicle();
          if (fresh) {
            fresh.id = v.id;
            this.vehicles[i] = fresh;
          }
        }
        continue;
      }

      // Move along velocity
      v.x += v.vx * delta;
      v.y += v.vy * delta;

      // Wrap around map limits smoothly
      if (v.x > MAP_LIMIT) v.x = -MAP_LIMIT;
      else if (v.x < -MAP_LIMIT) v.x = MAP_LIMIT;
      if (v.y > MAP_LIMIT) v.y = -MAP_LIMIT;
      else if (v.y < -MAP_LIMIT) v.y = MAP_LIMIT;

      // Check intersections for turning opportunities
      for (const inter of this.intersections) {
        const dx = inter.x - v.x;
        const dy = inter.z - v.y;
        const distSq = dx * dx + dy * dy;

        // Approaching intersection center
        if (distSq < 16.0 && Math.random() < delta * 1.8) {
          // Switch axis
          if (v.roadAxis === 'EW') {
            v.roadAxis = 'NS';
            v.direction = Math.random() > 0.5 ? 1 : -1;
            v.targetHeading = v.direction === 1 ? Math.PI * 0.5 : -Math.PI * 0.5;
            v.vx = 0;
            v.vy = v.direction * v.speed;
            v.x = inter.x + v.direction * 2.8;
          } else {
            v.roadAxis = 'EW';
            v.direction = Math.random() > 0.5 ? 1 : -1;
            v.targetHeading = v.direction === 1 ? 0 : Math.PI;
            v.vx = v.direction * v.speed;
            v.vy = 0;
            v.y = inter.z + v.direction * 2.8;
          }
          break;
        }
      }

      // Smooth heading lerp
      v.heading += (v.targetHeading - v.heading) * Math.min(1.0, delta * 8.0);
    }
  }

  /** Apply damage / explosion check to nearby vehicles */
  public static applyDamageInRadius(
    originX: number,
    originY: number,
    radius: number
  ): number {
    let hits = 0;
    const radiusSq = radius * radius;

    for (const v of this.vehicles) {
      if (!v.alive) continue;

      const dx = v.x - originX;
      const dy = v.y - originY;
      if (dx * dx + dy * dy <= radiusSq) {
        this.destroyVehicle(v);
        hits++;
      }
    }
    return hits;
  }

  /** Check if a raycast point hits a vehicle */
  public static checkRayHit(point: { x: number; z: number }): Vehicle | null {
    for (const v of this.vehicles) {
      if (!v.alive) continue;
      const dx = v.x - point.x;
      const dy = v.y - point.z;
      if (dx * dx + dy * dy <= 16.0) {
        return v;
      }
    }
    return null;
  }

  public static destroyVehicle(v: Vehicle) {
    if (!v.alive) return;
    v.alive = false;
    v.respawnTimer = 6.0;

    // Fireball & smoke FX
    DestructionSystem.fxQueue.push({
      type: 'blast',
      x: v.x,
      y: v.y,
      z: 2,
      data: { entityId: 0, targetFrame: 0 }
    });
    DestructionSystem.fxQueue.push({
      type: 'fire',
      x: v.x,
      y: v.y,
      z: 0,
      data: {}
    });
    DestructionSystem.fxQueue.push({
      type: 'smoke',
      x: v.x,
      y: v.y,
      z: 0,
      data: { count: 8 }
    });
    DestructionSystem.fxQueue.push({
      type: 'shake',
      x: 0, y: 0, z: 0,
      data: { intensity: 6 }
    });

    // Scorch mark on road
    DecalManager.spawnDecal(v.x, v.y, 'scorch', 12);

    // Score award
    const label = v.type === 'police' ? 'Police Cruiser' : v.type === 'truck' ? 'Cargo Truck' : 'Vehicle';
    ScoreSystem.addScore(50, label, { x: v.x, y: v.y, z: 4 });

    AudioSystem.playExplosionSFX(0.8);
  }
}
