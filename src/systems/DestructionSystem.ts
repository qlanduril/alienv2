import { ECS, Entity } from '../core/ECS';
import { HealthComponent, RenderStateComponent, PositionComponent, ZonalHealthComponent } from '../core/Components';
import { DamageCalc } from '../core/DamageCalc';
import { DamageZone } from '../core/ZoneDefs';
import { DamageStateTree, DamageLevel } from '../core/DamageStateTree';

// Events for the rendering layer to pick up and spawn visual effects
export type FXEvent =
  | { type: 'blast' | 'blast360'; x: number; y: number; z: number; data: { entityId: Entity; targetFrame: number } }
  | { type: 'blast_zonal'; x: number; y: number; z: number; data: { entityId: Entity; zone: DamageZone; level: DamageLevel; uvCenter: { x: number; y: number } } }
  | { type: 'shake'; x: number; y: number; z: number; data: { intensity: number } }
  | { type: 'hit_fx'; x: number; y: number; z: number; data: { entityId: Entity; intensity: 'light' | 'heavy' } }
  | { type: 'debris' | 'dust' | 'smoke' | 'sparks'; x: number; y: number; z: number; data: { count: number; entityId?: Entity; palette?: number[] } }
  | { type: 'fire'; x: number; y: number; z: number; data: { entityId?: Entity } }
  | { type: 'laser'; x: number; y: number; z: number; data: { tx: number; ty: number; tz: number } };

export class DestructionSystem {
  public static fxQueue: FXEvent[] = [];

  private static ambientTimer: number = 0;

  public static init() {
    ECS.addSystem(this.tick.bind(this));
  }

  public static tick(delta: number) {
    this.ambientTimer += delta;
    if (this.ambientTimer < 0.5) return;
    this.ambientTimer = 0;

    for (const entity of ECS.entities) {
      const health = HealthComponent.get(entity);
      const pos = PositionComponent.get(entity);
      if (!health || !pos || health.currentHP >= health.maxHP) continue;
      
      const dmgRatio = 1 - health.currentHP / health.maxHP;
      if (dmgRatio > 0.3 && Math.random() < dmgRatio) {
        this.fxQueue.push({ type: 'fire', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { entityId: entity } });
      }
      
      if (dmgRatio > 0.6 && Math.random() < (dmgRatio - 0.3)) {
        this.fxQueue.push({ type: 'smoke', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 2, entityId: entity } });
      }
    }
  }

  public static applyZonalDamage(entity: Entity, zoneId: DamageZone, amount: number, uvCenter: {x: number, y: number}) {
    const zonalHealth = ZonalHealthComponent.get(entity);
    const renderState = RenderStateComponent.get(entity);
    const pos = PositionComponent.get(entity);

    if (!zonalHealth || !renderState || !pos) return;

    const zone = zonalHealth.zones.get(zoneId);
    if (!zone) return;

    zone.hp = Math.max(0, zone.hp - amount);
    zonalHealth.totalHp = Math.max(0, zonalHealth.totalHp - amount);

    const newLevel = DamageStateTree.computeZoneLevel(zone.hp / zone.maxHp);

    if (newLevel > zone.level) {
      // It's a stage transition
      zone.level = newLevel;
      zonalHealth.globalDamageLevel = DamageStateTree.computeGlobalLevel(zonalHealth, Array.from(zonalHealth.zones.values()) as any); // Update global level

      this.fxQueue.push({
        type: 'blast_zonal',
        x: pos.worldX,
        y: pos.worldY,
        z: pos.worldZ,
        data: {
          entityId: entity,
          zone: zoneId,
          level: newLevel,
          uvCenter: uvCenter
        }
      });

      // Camera shake
      this.fxQueue.push({ type: 'shake', x: 0, y: 0, z: 0, data: { intensity: newLevel * 2 + 2 } });

      const debrisCount = newLevel * 8 + 5;
      
      const prefixMatch = renderState.texturePrefix.match(/building_(\d+)_stage_/);
      const typeKey = prefixMatch ? prefixMatch[1] : '3';
      
      let palette = [0x884422, 0xaa5533, 0x663311];
      if (typeKey === '1') {
        palette = [0xffffff, 0xdddddd, 0xaaaaaa, 0xff4444];
      } else if (typeKey === '3') {
        palette = [0xd2b48c, 0xaaaaaa, 0x888888, 0x5c4033];
      }
      
      this.fxQueue.push({ type: 'debris', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: debrisCount, entityId: entity, palette } });
      this.fxQueue.push({ type: 'dust', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 15, entityId: entity } });
      this.fxQueue.push({ type: 'smoke', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 8, entityId: entity } });
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 12, entityId: entity } });
      this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'heavy' } });
    } else {
      // Just a spark
      this.fxQueue.push({ type: 'fire', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { entityId: entity } });
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 5, entityId: entity } });
      this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'light' } });
    }
  }

  // Keeping legacy applyDamage around just in case it's called elsewhere (like by old enemies)
  public static applyDamage(entity: Entity, amount: number) {
    const health = HealthComponent.get(entity);
    const renderState = RenderStateComponent.get(entity);
    const pos = PositionComponent.get(entity);

    if (!health || !renderState || !pos) return;

    health.currentHP = Math.max(0, health.currentHP - amount);
    
    let maxFrame = 71; // School (type 3) — 72 frames from video (0–71)
    if (renderState.texturePrefix.includes('building_1_')) {
      maxFrame = 19; // Hospital
    }

    const newFrameIndex = DamageCalc.computeFrameIndex(health.currentHP, health.maxHP, maxFrame);

    if (newFrameIndex !== health.state) {
      health.state = newFrameIndex;
      this.fxQueue.push({
        type: newFrameIndex === maxFrame ? 'blast' : 'blast360',
        x: pos.worldX,
        y: pos.worldY,
        z: pos.worldZ,
        data: { entityId: entity, targetFrame: newFrameIndex }
      });
      this.fxQueue.push({ type: 'shake', x: 0, y: 0, z: 0, data: { intensity: 8 } });
      
      const prefixMatch = renderState.texturePrefix.match(/building_(\d+)_stage_/);
      const typeKey = prefixMatch ? prefixMatch[1] : '3';
      let palette = [0x884422, 0xaa5533, 0x663311]; // default bricks
      if (typeKey === '1') palette = [0xffffff, 0xdddddd, 0xaaaaaa, 0xff4444];
      else if (typeKey === '3') palette = [0xd2b48c, 0xaaaaaa, 0x888888, 0x5c4033];

      this.fxQueue.push({ type: 'debris', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: Math.min(newFrameIndex * 3, 30), entityId: entity, palette } });
      this.fxQueue.push({ type: 'dust', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 15, entityId: entity } });
      this.fxQueue.push({ type: 'smoke', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 8, entityId: entity } });
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 12, entityId: entity } });
      this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'heavy' } });
    } else {
      this.fxQueue.push({ type: 'fire', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { entityId: entity } });
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 5, entityId: entity } });
      this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'light' } });
    }
  }

  // Called by the rendering layer when the explosion animation reaches its peak
  public static executeTextureSwap(entity: Entity, targetFrame: number) {
    const renderState = RenderStateComponent.get(entity);
    if (renderState) {
      renderState.currentFrame = targetFrame;
    }
  }
}
