import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PlayerTagComponent, PositionComponent, WeaponComponent, HealthComponent, RenderStateComponent, ZonalHealthComponent } from '../core/Components';
import { InputManager } from '../input/InputManager';
import { HitZoneManager } from '../rendering/HitZoneManager';
import { SceneManager } from '../rendering/SceneManager';
import { DestructionSystem } from './DestructionSystem';
import { DamageZone } from '../core/ZoneDefs';
import { UIOverlay } from '../rendering/UIOverlay';
import { BUILDING_DEFS } from '../core/BuildingDefs';

export class PlayerControlSystem {
  private static groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  public static init() {
    ECS.addSystem(this.tick.bind(this));
  }

  public static tick(delta: number) {
    for (const entity of ECS.entities) {
      if (PlayerTagComponent.has(entity)) {
        const pos = PositionComponent.get(entity);
        const weapon = WeaponComponent.get(entity);
        
        if (!pos || !weapon) continue;

        // Smooth 8-directional isometric movement vector logic
        let dirX = 0;
        let dirZ = 0;

        if (InputManager.isKeyDown('KeyW') || InputManager.isKeyDown('ArrowUp')) { dirX -= 1; dirZ -= 1; }
        if (InputManager.isKeyDown('KeyS') || InputManager.isKeyDown('ArrowDown')) { dirX += 1; dirZ += 1; }
        if (InputManager.isKeyDown('KeyA') || InputManager.isKeyDown('ArrowLeft')) { dirX -= 1; dirZ += 1; }
        if (InputManager.isKeyDown('KeyD') || InputManager.isKeyDown('ArrowRight')) { dirX += 1; dirZ -= 1; }

        const len = Math.sqrt(dirX * dirX + dirZ * dirZ);
        if (len > 0) {
          const moveSpeed = 60 * delta;
          pos.worldX += (dirX / len) * moveSpeed;
          pos.worldY += (dirZ / len) * moveSpeed;
        }

        // Mouse hover inspection & targeting
        let hoveredHit = HitZoneManager.getHitZone(SceneManager.camera);
        let hoveredEntity: Entity | null = hoveredHit ? hoveredHit.entity : null;

        // Ground proximity fallback for hover
        if (!hoveredEntity) {
          const groundPoint = this.getMouseGroundPosition();
          if (groundPoint) {
            hoveredEntity = this.findClosestBuildingNear(groundPoint.x, groundPoint.z, 40);
          }
        }

        if (hoveredEntity !== null) {
          const renderState = RenderStateComponent.get(hoveredEntity);
          const zonal = ZonalHealthComponent.get(hoveredEntity);
          const health = HealthComponent.get(hoveredEntity);

          const prefixMatch = renderState ? renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/) : null;
          const typeKey = prefixMatch ? prefixMatch[1] : '3';
          const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

          const curHp = zonal ? zonal.totalHp : (health ? health.currentHP : 100);
          const maxHp = zonal ? zonal.maxTotalHp : (health ? health.maxHP : 100);
          const frame = renderState ? renderState.currentFrame : 0;

          UIOverlay.updateTargetInspector({
            name: def.name,
            key: typeKey,
            hp: curHp,
            maxHp: maxHp,
            frame: frame
          });
        } else {
          UIOverlay.updateTargetInspector(null);
        }

        // Firing logic
        const canFire = (InputManager.isPointerDown() || InputManager.isKeyDown('Space')) && weapon.heatLevel <= 0;
        if (canFire) {
          let targetEntity: Entity | null = null;
          let targetZone: DamageZone = DamageZone.CENTER;
          let targetUV = { x: 0.5, y: 0.5 };
          
          if (InputManager.isKeyDown('Space')) {
            // Decoupled targeting: Auto-lock onto the closest active building
            targetEntity = this.findClosestBuildingNear(pos.worldX, pos.worldY, Infinity);
          } else {
            // Zone-aware mouse raycast targeting with proximity fallback
            if (hoveredHit) {
              targetEntity = hoveredHit.entity;
              targetZone = hoveredHit.zone;
              targetUV = hoveredHit.uvCenter;
            } else if (hoveredEntity) {
              targetEntity = hoveredEntity;
            }
          }

          if (targetEntity !== null) {
            DestructionSystem.applyZonalDamage(targetEntity, targetZone, 15, targetUV);
            weapon.heatLevel = weapon.fireRate;

            // Trigger visual laser event
            const targetPos = PositionComponent.get(targetEntity);
            if (targetPos) {
              DestructionSystem.fxQueue.push({
                type: 'laser' as any,
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

  private static getMouseGroundPosition(): THREE.Vector3 | null {
    const ndc = InputManager.getMouseNDC();
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), SceneManager.camera);
    const target = new THREE.Vector3();
    return raycaster.ray.intersectPlane(this.groundPlane, target);
  }

  private static findClosestBuildingNear(wx: number, wz: number, maxRadius: number): Entity | null {
    let minDistance = maxRadius;
    let closestEntity: Entity | null = null;

    for (const otherEntity of ECS.entities) {
      if (PlayerTagComponent.has(otherEntity)) continue;
      const otherPos = PositionComponent.get(otherEntity);
      const otherHealth = HealthComponent.get(otherEntity);
      if (otherPos && otherHealth && otherHealth.currentHP > 0) {
        const dx = otherPos.worldX - wx;
        const dy = otherPos.worldY - wz;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDistance) {
          minDistance = dist;
          closestEntity = otherEntity;
        }
      }
    }

    return closestEntity;
  }
}
