import { ECS, Entity } from '../core/ECS';
import { PlayerTagComponent, PositionComponent, WeaponComponent, HealthComponent } from '../core/Components';
import { InputManager } from '../input/InputManager';
import { HitZoneManager } from '../rendering/HitZoneManager';
import { SceneManager } from '../rendering/SceneManager';
import { DestructionSystem } from './DestructionSystem';
import { DamageZone } from '../core/ZoneDefs';

export class PlayerControlSystem {
  public static init() {
    ECS.addSystem(this.tick.bind(this));
  }

  public static tick(delta: number) {
    for (const entity of ECS.entities) {
      if (PlayerTagComponent.has(entity)) {
        const pos = PositionComponent.get(entity);
        const weapon = WeaponComponent.get(entity);
        
        if (!pos || !weapon) continue;

        // Basic movement logic using input manager
        const speed = 40 * delta; // Increased from 10
        if (InputManager.isKeyDown('KeyW') || InputManager.isKeyDown('ArrowUp')) pos.worldY -= speed;
        if (InputManager.isKeyDown('KeyS') || InputManager.isKeyDown('ArrowDown')) pos.worldY += speed;
        if (InputManager.isKeyDown('KeyA') || InputManager.isKeyDown('ArrowLeft')) pos.worldX -= speed;
        if (InputManager.isKeyDown('KeyD') || InputManager.isKeyDown('ArrowRight')) pos.worldX += speed;

        const canFire = (InputManager.isPointerDown() || InputManager.isKeyDown('Space')) && weapon.heatLevel <= 0;
        if (canFire) {
          let targetEntity: Entity | null = null;
          let targetZone: DamageZone = DamageZone.CENTER;
          let targetUV = { x: 0.5, y: 0.5 };
          
          if (InputManager.isKeyDown('Space')) {
            // Decoupled targeting: Auto-lock onto the closest active building
            let minDistance = Infinity;
            for (const otherEntity of ECS.entities) {
              if (otherEntity === entity) continue;
              const otherPos = PositionComponent.get(otherEntity);
              const otherHealth = HealthComponent.get(otherEntity);
              if (otherPos && otherHealth && otherHealth.currentHP > 0) {
                const dx = otherPos.worldX - pos.worldX;
                const dy = otherPos.worldY - pos.worldY; // ground distance
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minDistance) {
                  minDistance = dist;
                  targetEntity = otherEntity;
                }
              }
            }
          } else {
            // Zone-aware mouse raycast targeting
            const hit = HitZoneManager.getHitZone(SceneManager.camera);
            if (hit) {
              targetEntity = hit.entity;
              targetZone = hit.zone;
              targetUV = hit.uvCenter;
            }
          }

          if (targetEntity !== null) {
            DestructionSystem.applyZonalDamage(targetEntity, targetZone, 10, targetUV);
            weapon.heatLevel = weapon.fireRate;

            // Trigger visual laser event
            const targetPos = PositionComponent.get(targetEntity);
            if (targetPos) {
              DestructionSystem.fxQueue.push({
                type: 'laser' as any, // Cast to any to bypass strict type for custom local event
                x: pos.worldX,
                y: pos.worldY,
                z: pos.worldZ,
                data: { tx: targetPos.worldX, ty: targetPos.worldY, tz: targetPos.worldZ }
              });
            }
          }
        }

        // Cool down weapon
        if (weapon.heatLevel > 0) {
          weapon.heatLevel -= delta;
        }
      }
    }
  }
}
