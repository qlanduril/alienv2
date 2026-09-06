import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PlayerTagComponent, PositionComponent, WeaponComponent, HealthComponent, RenderStateComponent, ZonalHealthComponent } from '../core/Components';
import { InputManager } from '../input/InputManager';
import { HitZoneManager, HitZoneResult } from '../rendering/HitZoneManager';
import { SceneManager } from '../rendering/SceneManager';
import { DestructionSystem } from './DestructionSystem';
import { DamageZone } from '../core/ZoneDefs';
import { UIOverlay } from '../rendering/UIOverlay';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { SpatialGrid } from '../core/SpatialGrid';
import { PlayerRenderer } from '../rendering/PlayerRenderer';
import { BuildingRenderer } from '../rendering/BuildingRenderer';

// --- System Constants ---
const GROUND_PROXIMITY_RADIUS = 40;
const SQUARED_PROXIMITY_RADIUS = GROUND_PROXIMITY_RADIUS * GROUND_PROXIMITY_RADIUS;
const ZONAL_DAMAGE_AMOUNT = 20; // 20 dmg per hit for smooth multi-stage damage progression
const WEAPON_HEAT_DEFAULT = 0;
const LERP_FOLLOW_SPEED = 8.0; // Buoyant, smooth asynchronous UFO motion speed
const WASD_SPEED = 65;

export class PlayerControlSystem {
  private static groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  // Reusable static instances to prevent GC frame drops
  private static raycaster = new THREE.Raycaster();
  private static pointerVector = new THREE.Vector2();
  private static groundIntersectPoint = new THREE.Vector3();

  // Asynchronous UFO movement state
  private static targetPos = { x: 0, y: 0 };
  private static initializedTarget = false;

  // Throttled hover inspection timer
  private static lastHoverCheckTime = 0;
  private static cachedHoveredHit: HitZoneResult | null = null;
  private static cachedHoveredEntity: Entity | null = null;
  private static HOVER_CHECK_INTERVAL = 0.033; // ~30 FPS inspection throttling

  public static init() {
    ECS.addSystem(this.tick.bind(this));
  }

  public static tick(delta: number) {
    for (const entity of ECS.entities) {
      if (PlayerTagComponent.has(entity)) {
        const pos = PositionComponent.get(entity);
        const weapon = WeaponComponent.get(entity);

        if (!pos || !weapon) continue;

        // Initialize target on spawn
        if (!this.initializedTarget) {
          this.targetPos.x = pos.worldX;
          this.targetPos.y = pos.worldY;
          this.initializedTarget = true;
        }

        // 1. WASD Input Processing
        let dirX = 0;
        let dirZ = 0;

        if (InputManager.isKeyDown('KeyW') || InputManager.isKeyDown('ArrowUp')) { dirX -= 1; dirZ -= 1; }
        if (InputManager.isKeyDown('KeyS') || InputManager.isKeyDown('ArrowDown')) { dirX += 1; dirZ += 1; }
        if (InputManager.isKeyDown('KeyA') || InputManager.isKeyDown('ArrowLeft')) { dirX -= 1; dirZ += 1; }
        if (InputManager.isKeyDown('KeyD') || InputManager.isKeyDown('ArrowRight')) { dirX += 1; dirZ -= 1; }

        const len = Math.sqrt(dirX * dirX + dirZ * dirZ);
        if (len > 0) {
          // Keyboard input directly shifts target location
          this.targetPos.x += (dirX / len) * WASD_SPEED * delta;
          this.targetPos.y += (dirZ / len) * WASD_SPEED * delta;
        }

        // 2. Asynchronous Smooth Exponential Lerp
        // Decouples mouse movement from UFO position so mouse is lightweight and UFO glides smoothly
        const lerpFactor = 1.0 - Math.exp(-LERP_FOLLOW_SPEED * delta);
        pos.worldX += (this.targetPos.x - pos.worldX) * lerpFactor;
        pos.worldY += (this.targetPos.y - pos.worldY) * lerpFactor;

        // 3. Throttled Mouse Hover Inspection
        this.lastHoverCheckTime += delta;
        if (this.lastHoverCheckTime >= this.HOVER_CHECK_INTERVAL) {
          this.lastHoverCheckTime = 0;

          this.cachedHoveredHit = HitZoneManager.getHitZone(SceneManager.camera);
          this.cachedHoveredEntity = this.cachedHoveredHit ? this.cachedHoveredHit.entity : null;

          if (!this.cachedHoveredEntity) {
            const groundPoint = this.getMouseGroundPosition();
            if (groundPoint) {
              this.cachedHoveredEntity = this.findClosestBuildingNear(groundPoint.x, groundPoint.z, SQUARED_PROXIMITY_RADIUS);
            }
          }

          if (this.cachedHoveredEntity !== null) {
            const renderState = RenderStateComponent.get(this.cachedHoveredEntity);
            const zonal = ZonalHealthComponent.get(this.cachedHoveredEntity);
            const health = HealthComponent.get(this.cachedHoveredEntity);

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
        }

        // 4. Firing Logic
        const canFire = (InputManager.isPointerDown() || InputManager.isKeyDown('Space')) && weapon.heatLevel <= WEAPON_HEAT_DEFAULT;
        if (canFire) {
          let targetEntity: Entity | null = null;
          let targetZone: DamageZone = DamageZone.CENTER;
          let targetUV = { x: 0.5, y: 0.5 };
          let impactPoint: THREE.Vector3 | null = null;

          if (InputManager.isKeyDown('Space')) {
            targetEntity = this.findClosestBuildingNear(pos.worldX, pos.worldY, Infinity);
            if (targetEntity) {
              impactPoint = BuildingRenderer.getSpritePosition(targetEntity);
            }
          } else {
            if (this.cachedHoveredHit) {
              targetEntity = this.cachedHoveredHit.entity;
              targetZone = this.cachedHoveredHit.zone;
              targetUV = this.cachedHoveredHit.uvCenter;
              impactPoint = this.cachedHoveredHit.point;
            } else {
              const groundPoint = this.getMouseGroundPosition();
              if (groundPoint) {
                impactPoint = groundPoint;
                if (this.cachedHoveredEntity) {
                  targetEntity = this.cachedHoveredEntity;
                } else {
                  targetEntity = this.findClosestBuildingNear(groundPoint.x, groundPoint.z, SQUARED_PROXIMITY_RADIUS);
                }
              }
            }
          }

          if (targetEntity !== null && impactPoint !== null) {
            DestructionSystem.applyZonalDamage(targetEntity, targetZone, ZONAL_DAMAGE_AMOUNT, targetUV);
            weapon.heatLevel = weapon.fireRate;

            const ufoPos = PlayerRenderer.getPlayerMeshPosition() || new THREE.Vector3(pos.worldX, 75, pos.worldY);

            DestructionSystem.fxQueue.push({
              type: 'laser' as any,
              x: ufoPos.x,
              y: ufoPos.y - 3, // slightly below mothership body at beam port
              z: ufoPos.z,
              data: {
                tx: impactPoint.x,
                ty: impactPoint.y,
                tz: impactPoint.z
              }
            });
          }
        }

        // Cool down weapon
        if (weapon.heatLevel > WEAPON_HEAT_DEFAULT) {
          weapon.heatLevel -= delta;
        }
      }
    }
  }

  private static getMouseGroundPosition(): THREE.Vector3 | null {
    const ndc = InputManager.getMouseNDC();
    this.pointerVector.set(ndc.x, ndc.y);
    this.raycaster.setFromCamera(this.pointerVector, SceneManager.camera);
    return this.raycaster.ray.intersectPlane(this.groundPlane, this.groundIntersectPoint);
  }

  private static findClosestBuildingNear(wx: number, wz: number, maxRadiusSq: number): Entity | null {
    return SpatialGrid.findClosest(wx, wz, maxRadiusSq);
  }
}
