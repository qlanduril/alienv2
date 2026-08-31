import { Entity } from './ECS';
import { PlayerTagComponent, PositionComponent, HealthComponent } from './Components';

export class SpatialGrid {
  private static invCellSize: number = 1 / 64;
  private static grid: Map<number, Entity[]> = new Map();

  private static getKey(gx: number, gz: number): number {
    return ((gx + 2048) << 16) | ((gz + 2048) & 0xffff);
  }

  public static getCellCoords(wx: number, wz: number): { gx: number; gz: number } {
    return {
      gx: Math.floor(wx * this.invCellSize),
      gz: Math.floor(wz * this.invCellSize)
    };
  }

  public static clear(): void {
    this.grid.clear();
  }

  public static rebuild(): void {
    this.grid.clear();
    // Iterate directly over HealthComponent store instead of sweeping global ECS.entities
    for (const [entity, health] of HealthComponent.entries()) {
      if (health.currentHP <= 0 || PlayerTagComponent.has(entity)) continue;
      const pos = PositionComponent.get(entity);
      if (pos) {
        const { gx, gz } = this.getCellCoords(pos.worldX, pos.worldY);
        const key = this.getKey(gx, gz);
        let cell = this.grid.get(key);
        if (!cell) {
          cell = [];
          this.grid.set(key, cell);
        }
        cell.push(entity);
      }
    }
  }

  public static findClosest(wx: number, wz: number, maxRadiusSq: number): Entity | null {
    let minDistanceSq = maxRadiusSq;
    let closestEntity: Entity | null = null;

    if (!isFinite(maxRadiusSq)) {
      // First pass: local fast search (radius 128 units ~ 2 grid cells)
      const initialRadius = 128;
      const minCell = this.getCellCoords(wx - initialRadius, wz - initialRadius);
      const maxCell = this.getCellCoords(wx + initialRadius, wz + initialRadius);

      for (let gx = minCell.gx; gx <= maxCell.gx; gx++) {
        for (let gz = minCell.gz; gz <= maxCell.gz; gz++) {
          const key = this.getKey(gx, gz);
          const cell = this.grid.get(key);
          if (!cell) continue;

          for (let i = 0; i < cell.length; i++) {
            const entity = cell[i];
            const health = HealthComponent.get(entity);
            if (!health || health.currentHP <= 0) continue;

            const pos = PositionComponent.get(entity);
            if (!pos) continue;

            const dx = pos.worldX - wx;
            const dy = pos.worldY - wz;
            const distSq = dx * dx + dy * dy;

            if (distSq < minDistanceSq) {
              minDistanceSq = distSq;
              closestEntity = entity;
            }
          }
        }
      }

      // Second pass: if found, bound search radius to sqrt(minDistanceSq), else map bounds
      const searchRadius = closestEntity !== null ? Math.sqrt(minDistanceSq) : 1024;
      const fullMinCell = this.getCellCoords(wx - searchRadius, wz - searchRadius);
      const fullMaxCell = this.getCellCoords(wx + searchRadius, wz + searchRadius);

      for (let gx = fullMinCell.gx; gx <= fullMaxCell.gx; gx++) {
        for (let gz = fullMinCell.gz; gz <= fullMaxCell.gz; gz++) {
          if (closestEntity !== null && gx >= minCell.gx && gx <= maxCell.gx && gz >= minCell.gz && gz <= maxCell.gz) {
            continue;
          }

          const key = this.getKey(gx, gz);
          const cell = this.grid.get(key);
          if (!cell) continue;

          for (let i = 0; i < cell.length; i++) {
            const entity = cell[i];
            const health = HealthComponent.get(entity);
            if (!health || health.currentHP <= 0) continue;

            const pos = PositionComponent.get(entity);
            if (!pos) continue;

            const dx = pos.worldX - wx;
            const dy = pos.worldY - wz;
            const distSq = dx * dx + dy * dy;

            if (distSq < minDistanceSq) {
              minDistanceSq = distSq;
              closestEntity = entity;
            }
          }
        }
      }

      return closestEntity;
    }

    const searchRadius = Math.sqrt(maxRadiusSq);
    const minCell = this.getCellCoords(wx - searchRadius, wz - searchRadius);
    const maxCell = this.getCellCoords(wx + searchRadius, wz + searchRadius);

    for (let gx = minCell.gx; gx <= maxCell.gx; gx++) {
      for (let gz = minCell.gz; gz <= maxCell.gz; gz++) {
        const key = this.getKey(gx, gz);
        const cell = this.grid.get(key);
        if (!cell) continue;

        for (let i = 0; i < cell.length; i++) {
          const entity = cell[i];
          const health = HealthComponent.get(entity);
          if (!health || health.currentHP <= 0) continue;

          const pos = PositionComponent.get(entity);
          if (!pos) continue;

          const dx = pos.worldX - wx;
          const dy = pos.worldY - wz;
          const distSq = dx * dx + dy * dy;

          if (distSq < minDistanceSq) {
            minDistanceSq = distSq;
            closestEntity = entity;
          }
        }
      }
    }

    return closestEntity;
  }
}
