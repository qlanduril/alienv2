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
const ZONAL_DAMAGE_AMOUNT = 20; // 20 dmg per hit for smooth multi-stage damage progression
const WEAPON_HEAT_DEFAULT = 0;
const LERP_FOLLOW_SPEED = 8.0; // Buoyant, smooth asynchronous UFO motion speed
const WASD_SPEED = 90;
const MAX_HOVER_SCREEN_RADIUS_NDC = 0.10; // ~65px screen radius on 1080p

export class PlayerControlSystem {
  private static groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private static midHeightPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -30);

  // Reusable static instances to prevent GC frame drops
  private static raycaster = new THREE.Raycaster();
  private static pointerVector = new THREE.Vector2();
  private static groundIntersectPoint = new THREE.Vector3();
  private static midIntersectPoint = new THREE.Vector3();
  private static tempProj = new THREE.Vector3();

  // Asynchronous UFO movement state
  private static targetPos = { x: 0, y: 0 };
  private static initializedTarget = false;

  // Throttled hover inspection timer
  private static lastHoverCheckTime = 0;
  private static cachedHoveredHit: HitZoneResult | null = null;
  private static cachedHoveredEntity: Entity | null = null;
  private static cachedFallbackPoint: THREE.Vector3 | null = null;
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

        // 1. WASD & Arrow Key Input Processing (Isometric screen-aligned vectors)
        let dirX = 0;
        let dirZ = 0;

        if (InputManager.isKeyDown('KeyW') || InputManager.isKeyDown('ArrowUp') || InputManager.isKeyDown('w')) {
          dirX -= 1; dirZ -= 1; // Screen UP
        }
        if (InputManager.isKeyDown('KeyS') || InputManager.isKeyDown('ArrowDown') || InputManager.isKeyDown('s')) {
          dirX += 1; dirZ += 1; // Screen DOWN
        }
        if (InputManager.isKeyDown('KeyA') || InputManager.isKeyDown('ArrowLeft') || InputManager.isKeyDown('a')) {
          dirX -= 1; dirZ += 1; // Screen LEFT
        }
        if (InputManager.isKeyDown('KeyD') || InputManager.isKeyDown('ArrowRight') || InputManager.isKeyDown('d')) {
          dirX += 1; dirZ -= 1; // Screen RIGHT (Fixed: was dirZ += 1 which moved down)
        }

        const len = Math.sqrt(dirX * dirX + dirZ * dirZ);
        if (len > 0) {
          // Keyboard input directly shifts target location
          this.targetPos.x += (dirX / len) * WASD_SPEED * delta;
          this.targetPos.y += (dirZ / len) * WASD_SPEED * delta;

          // Clamp within map boundaries (-480 to +480)
          this.targetPos.x = Math.max(-480, Math.min(480, this.targetPos.x));
          this.targetPos.y = Math.max(-480, Math.min(480, this.targetPos.y));
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
          this.cachedFallbackPoint = null;

          if (this.cachedHoveredHit) {
            this.cachedHoveredEntity = this.cachedHoveredHit.entity;
          } else {
            const ndc = InputManager.getMouseNDC();
            this.pointerVector.set(ndc.x, ndc.y);
            const fallback = this.findBestBuildingNearCursor(this.pointerVector, SceneManager.camera);
            if (fallback) {
              this.cachedHoveredEntity = fallback.entity;
              this.cachedFallbackPoint = fallback.point;
            } else {
              this.cachedHoveredEntity = null;
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

            const center = BuildingRenderer.getVisualCenter(this.cachedHoveredEntity) || BuildingRenderer.getSpritePosition(this.cachedHoveredEntity);
            if (center) {
              this.tempProj.copy(center).project(SceneManager.camera);
              if (this.tempProj.z <= 1) {
                const screenX = (this.tempProj.x * 0.5 + 0.5) * window.innerWidth;
                const screenY = (-this.tempProj.y * 0.5 + 0.5) * window.innerHeight;
                UIOverlay.setTargetReticle({ x: screenX, y: screenY });
              } else {
                UIOverlay.setTargetReticle(null);
              }
            } else {
              UIOverlay.setTargetReticle(null);
            }
          } else {
            UIOverlay.updateTargetInspector(null);
            UIOverlay.setTargetReticle(null);
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
              impactPoint = BuildingRenderer.getVisualCenter(targetEntity) || BuildingRenderer.getSpritePosition(targetEntity);
            }
          } else {
            if (this.cachedHoveredHit) {
              targetEntity = this.cachedHoveredHit.entity;
              targetZone = this.cachedHoveredHit.zone;
              targetUV = this.cachedHoveredHit.uvCenter;
              impactPoint = this.cachedHoveredHit.point;
            } else if (this.cachedHoveredEntity !== null) {
              targetEntity = this.cachedHoveredEntity;
              targetZone = DamageZone.CENTER;
              targetUV = { x: 0.5, y: 0.5 };
              impactPoint = this.cachedFallbackPoint || BuildingRenderer.getVisualCenter(targetEntity) || BuildingRenderer.getSpritePosition(targetEntity);
            } else {
              const ndc = InputManager.getMouseNDC();
              this.pointerVector.set(ndc.x, ndc.y);
              const fallback = this.findBestBuildingNearCursor(this.pointerVector, SceneManager.camera);
              if (fallback) {
                targetEntity = fallback.entity;
                targetZone = DamageZone.CENTER;
                targetUV = { x: 0.5, y: 0.5 };
                impactPoint = fallback.point;
              } else {
                const groundPoint = this.getMouseGroundPosition();
                if (groundPoint) {
                  impactPoint = groundPoint;
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
          } else if (impactPoint !== null) {
            // Weapon fired into ground (miss)
            weapon.heatLevel = weapon.fireRate;
            const ufoPos = PlayerRenderer.getPlayerMeshPosition() || new THREE.Vector3(pos.worldX, 75, pos.worldY);
            DestructionSystem.fxQueue.push({
              type: 'laser' as any,
              x: ufoPos.x,
              y: ufoPos.y - 3,
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

  /**
   * Screen-space candidate search near cursor to allow easily picking small buildings
   * or resolving buildings packed tightly together.
   */
  private static findBestBuildingNearCursor(ndc: THREE.Vector2, camera: THREE.Camera): { entity: Entity; point: THREE.Vector3 } | null {
    this.raycaster.setFromCamera(ndc, camera);
    const hasMidHit = this.raycaster.ray.intersectPlane(this.midHeightPlane, this.midIntersectPoint);
    const searchX = hasMidHit ? this.midIntersectPoint.x : 0;
    const searchZ = hasMidHit ? this.midIntersectPoint.z : 0;

    const candidates = SpatialGrid.queryRadius(searchX, searchZ, 64);
    if (candidates.length === 0) return null;

    let bestCandidate: { entity: Entity; point: THREE.Vector3 } | null = null;
    let minScore = MAX_HOVER_SCREEN_RADIUS_NDC;

    for (let i = 0; i < candidates.length; i++) {
      const entity = candidates[i];
      const health = HealthComponent.get(entity);
      if (!health || health.currentHP <= 0) continue;

      const center = BuildingRenderer.getVisualCenter(entity) || BuildingRenderer.getSpritePosition(entity);
      if (!center) continue;

      this.tempProj.copy(center).project(camera);
      const dx = this.tempProj.x - ndc.x;
      const dy = this.tempProj.y - ndc.y;
      let dist = Math.hypot(dx, dy);

      const renderState = RenderStateComponent.get(entity);
      const { def } = BuildingRenderer.getTypeInfo(entity, renderState ? renderState.texturePrefix : '');
      if (def && (def.tier === 'foreground' || def.width <= 32 || (def.height && def.height <= 60))) {
        dist *= 0.60; // Small building priority boost
      } else if (def && def.tier === 'landmark') {
        dist *= 1.25;
      }

      if (dist < minScore) {
        minScore = dist;
        bestCandidate = { entity, point: center };
      }
    }

    return bestCandidate;
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
