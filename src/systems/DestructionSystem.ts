import { ECS, Entity } from '../core/ECS';
import { HealthComponent, RenderStateComponent, PositionComponent } from '../core/Components';
import { DamageCalc } from '../core/DamageCalc';

// Events for the rendering layer to pick up and spawn visual effects
export type FXEvent =
  | { type: 'blast' | 'blast360'; x: number; y: number; z: number; data: { entityId: Entity; targetFrame: number } }
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
      // It's a stage transition
      health.state = newFrameIndex;

      // Spawn blast FX. The rendering layer will handle the delayed texture swap!
      this.fxQueue.push({
        type: newFrameIndex === maxFrame ? 'blast' : 'blast360',
        x: pos.worldX,
        y: pos.worldY,
        z: pos.worldZ,
        data: {
          entityId: entity,
          targetFrame: newFrameIndex
        }
      });

      // Camera shake
      this.fxQueue.push({ type: 'shake', x: 0, y: 0, z: 0, data: { intensity: 8 } });

      // Brick debris burst (more chunks for later damage stages)
      const debrisCount = Math.min(newFrameIndex * 3, 30);
      
      const prefixMatch = renderState.texturePrefix.match(/building_(\d+)_stage_/);
      const typeKey = prefixMatch ? prefixMatch[1] : '3';
      
      let palette = [0x884422, 0xaa5533, 0x663311]; // default bricks
      if (typeKey === '1') {
        // Hospital (white, light grey, some red)
        palette = [0xffffff, 0xdddddd, 0xaaaaaa, 0xff4444];
      } else if (typeKey === '3') {
        // School (tan, grey, brown)
        palette = [0xd2b48c, 0xaaaaaa, 0x888888, 0x5c4033];
      }
      
      this.fxQueue.push({ type: 'debris', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: debrisCount, entityId: entity, palette } });

      // Dust cloud at base
      this.fxQueue.push({ type: 'dust', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 15, entityId: entity } });

      // Smoke plume rising
      this.fxQueue.push({ type: 'smoke', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 8, entityId: entity } });

      // Sparks flying
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 12, entityId: entity } });

      // Building shudder + heavy flash
      this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'heavy' } });
    } else {
      // Just a spark
      this.fxQueue.push({
        type: 'fire',
        x: pos.worldX,
        y: pos.worldY,
        z: pos.worldZ,
        data: { entityId: entity }
      });

      // Small spark burst
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 5, entityId: entity } });

      // Building squash + subtle flash
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
