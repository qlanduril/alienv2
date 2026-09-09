import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, PlayerTagComponent } from '../core/Components';
import { SceneManager } from './SceneManager';
import { CameraController } from './CameraController';
import { SpatialGrid } from '../core/SpatialGrid';
import { BuildingRenderer } from './BuildingRenderer';

// --- PlayerRenderer Constants (Giant Mothership Scale) ---
const MOTHERSHIP_RADIUS = 14.0;          // 28-unit wide main saucer disc
const DISC_SCALE_X = 2.2;                // Scaled out to ~60 world units total width
const DISC_SCALE_Y = 0.45;
const DISC_SCALE_Z = 2.2;

const DEFAULT_UFO_ALTITUDE = 75.0;        // Natural hover altitude hovering over rooftops in classic 2:1 isometric view

const PLAYER_COLOR_HEX = 0x00f3ff;
const PLAYER_EMISSIVE_HEX = 0x004466;
const DOME_COLOR_HEX = 0x93c5fd;
const DOME_EMISSIVE_HEX = 0x3b82f6;
const BEAM_PORT_HEX = 0x00ffff;

export class PlayerRenderer {
  private static mothershipGroup: THREE.Group | null = null;
  private static playerEntity: Entity | null = null;
  private static groundShadowRing: THREE.Mesh | null = null;
  private static aimReticleGroup: THREE.Group | null = null;
  private static reticleRingMat: THREE.MeshBasicMaterial | null = null;
  private static reticleDotMat: THREE.MeshBasicMaterial | null = null;
  private static aimTargetX: number = 0;
  private static aimTargetZ: number = 0;

  private static lastX: number = 0;
  private static lastZ: number = 0;
  private static currentTiltX: number = 0;
  private static currentTiltZ: number = 0;
  private static currentShadowY: number = 0.1;

  public static tick(delta: number) {
    if (this.playerEntity === null) {
      for (const entity of ECS.entities) {
        if (PlayerTagComponent.has(entity)) {
          this.playerEntity = entity;
          this.initMesh();
          const pos = PositionComponent.get(entity);
          if (pos) {
            this.lastX = pos.worldX;
            this.lastZ = pos.worldY;
            this.aimTargetX = pos.worldX;
            this.aimTargetZ = pos.worldY;
          }
          break;
        }
      }
    }

    if (this.playerEntity !== null) {
      const pos = PositionComponent.get(this.playerEntity);
      if (pos) {
        // Enforce hover altitude for mothership
        if (pos.worldZ < 40) {
          pos.worldZ = DEFAULT_UFO_ALTITUDE;
        }

        if (this.mothershipGroup) {
          // Calculate movement velocity vector for tilt banking
          const vx = (pos.worldX - this.lastX) / Math.max(0.001, delta);
          const vz = (pos.worldY - this.lastZ) / Math.max(0.001, delta);
          this.lastX = pos.worldX;
          this.lastZ = pos.worldY;

          // Target tilt angles (pitch & roll proportional to velocity, max 0.25 rad)
          const targetTiltZ = Math.max(-0.25, Math.min(0.25, -vx * 0.003));
          const targetTiltX = Math.max(-0.25, Math.min(0.25, vz * 0.003));

          // Exponential lerp smoothing for smooth flight inertia
          const lerpRate = 1 - Math.exp(-10 * delta);
          this.currentTiltX += (targetTiltX - this.currentTiltX) * lerpRate;
          this.currentTiltZ += (targetTiltZ - this.currentTiltZ) * lerpRate;

          // Position & hover oscillation
          const hoverOffset = Math.sin(performance.now() * 0.0025) * 1.8;
          this.mothershipGroup.position.set(pos.worldX, pos.worldZ + hoverOffset, pos.worldY);

          // Apply rotation: continuous slow yaw spin + velocity tilt banking
          this.mothershipGroup.rotation.y += delta * 0.3;
          this.mothershipGroup.rotation.x = this.currentTiltX;
          this.mothershipGroup.rotation.z = this.currentTiltZ;

          // Dynamic Surface Shadow directly under UFO position (worldX, worldY)
          if (this.groundShadowRing) {
            let targetSurfaceY = 0.1;
            const nearbyEntities = SpatialGrid.queryRadius(pos.worldX, pos.worldY, 16);
            for (const entity of nearbyEntities) {
              const bPos = PositionComponent.get(entity);
              if (!bPos) continue;
              const dx = Math.abs(bPos.worldX - pos.worldX);
              const dz = Math.abs(bPos.worldY - pos.worldY);
              if (dx < 14 && dz < 14) {
                const bScale = BuildingRenderer.getSpriteScale(entity);
                const roofY = bScale ? Math.min(60, bScale.y * 0.7) : 20.0;
                if (roofY > targetSurfaceY) {
                  targetSurfaceY = roofY;
                }
              }
            }

            const shadowLerp = 1 - Math.exp(-12 * delta);
            this.currentShadowY += (targetSurfaceY - this.currentShadowY) * shadowLerp;

            this.groundShadowRing.position.set(pos.worldX, this.currentShadowY + 0.1, pos.worldY);
            this.groundShadowRing.rotation.z += delta * 0.4; // slow ring spin
            const ringMat = this.groundShadowRing.material as THREE.MeshBasicMaterial;
            if (ringMat) {
              ringMat.opacity = 0.35 + Math.sin(performance.now() * 0.004) * 0.12; // pulse opacity
            }
          }

          // Director Camera Framing (weighted 80% UFO flight position, 20% mouse aim crosshair)
          const aimOffsetX = Math.max(-80, Math.min(80, (this.aimTargetX - pos.worldX) * 0.22));
          const aimOffsetZ = Math.max(-80, Math.min(80, (this.aimTargetZ - pos.worldY) * 0.22));
          CameraController.setTarget(pos.worldX + aimOffsetX, pos.worldY + aimOffsetZ);
        }
      }
    }
  }

  private static initMesh() {
    this.mothershipGroup = new THREE.Group();
    this.mothershipGroup.name = 'MothershipUFO';

    // 1. Main Disc Saucer Body
    const discGeo = new THREE.CylinderGeometry(MOTHERSHIP_RADIUS * 0.4, MOTHERSHIP_RADIUS, MOTHERSHIP_RADIUS * 0.35, 32);
    const discMat = new THREE.MeshStandardMaterial({
      color: PLAYER_COLOR_HEX,
      emissive: PLAYER_EMISSIVE_HEX,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      depthTest: true,
      depthWrite: true
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.scale.set(DISC_SCALE_X, DISC_SCALE_Y, DISC_SCALE_Z);
    discMesh.castShadow = true;
    discMesh.renderOrder = 0;
    this.mothershipGroup.add(discMesh);

    // 2. Top Energy Dome
    const domeGeo = new THREE.SphereGeometry(MOTHERSHIP_RADIUS * 0.65, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const domeMat = new THREE.MeshStandardMaterial({
      color: DOME_COLOR_HEX,
      emissive: DOME_EMISSIVE_HEX,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.85,
      roughness: 0.1,
      depthTest: true,
      depthWrite: false   // Transparent dome doesn't write depth (standard transparent rendering)
    });
    const domeMesh = new THREE.Mesh(domeGeo, domeMat);
    domeMesh.position.y = MOTHERSHIP_RADIUS * 0.15;
    domeMesh.scale.set(DISC_SCALE_X * 0.7, DISC_SCALE_Y * 1.5, DISC_SCALE_Z * 0.7);
    domeMesh.renderOrder = 1;
    this.mothershipGroup.add(domeMesh);

    // 3. Bottom Energy Beam Port
    const portGeo = new THREE.CylinderGeometry(MOTHERSHIP_RADIUS * 0.3, MOTHERSHIP_RADIUS * 0.1, MOTHERSHIP_RADIUS * 0.1, 16);
    const portMat = new THREE.MeshBasicMaterial({ color: BEAM_PORT_HEX, depthTest: true, depthWrite: true });
    const portMesh = new THREE.Mesh(portGeo, portMat);
    portMesh.position.y = -MOTHERSHIP_RADIUS * 0.18;
    portMesh.renderOrder = 0;
    this.mothershipGroup.add(portMesh);

    // ── ISOLATED UFO SCENE ────────────────────────────────────────────────────
    // The mothershipGroup lives in SceneManager.ufoScene, NOT the main scene.
    // The EffectComposer renders ufoScene in a second RenderPass AFTER bloom,
    // with clearDepth=true — this wipes all city depth values from the Z-buffer
    // before drawing the UFO, making it physically impossible for any building
    // to occlude the mothership via hardware depth testing.
    SceneManager.ufoScene.add(this.mothershipGroup);

    // 4. Ground Shadow underneath UFO Saucer
    const shadowGeo = new THREE.RingGeometry(MOTHERSHIP_RADIUS * 0.8, MOTHERSHIP_RADIUS * 1.2, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      depthTest: false,
      depthWrite: false
    });
    this.groundShadowRing = new THREE.Mesh(shadowGeo, shadowMat);
    this.groundShadowRing.rotation.x = -Math.PI / 2;
    this.groundShadowRing.renderOrder = 800;
    SceneManager.playerGroup.add(this.groundShadowRing);

    // 5. Independent 3D Mouse Aiming Crosshair / Reticle
    this.aimReticleGroup = new THREE.Group();
    this.aimReticleGroup.name = 'AimTargetReticle';

    // Outer spinning reticle ring
    const reticleRingGeo = new THREE.RingGeometry(4.2, 5.4, 32);
    this.reticleRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      depthTest: false,
      depthWrite: false
    });
    const reticleRing = new THREE.Mesh(reticleRingGeo, this.reticleRingMat);
    reticleRing.rotation.x = -Math.PI / 2;
    reticleRing.renderOrder = 900;
    this.aimReticleGroup.add(reticleRing);

    // 4 Crosshair Tick Marks
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const tickGeo = new THREE.PlaneGeometry(0.8, 2.5);
      const tickMesh = new THREE.Mesh(tickGeo, this.reticleRingMat);
      tickMesh.rotation.x = -Math.PI / 2;
      tickMesh.position.set(Math.cos(angle) * 6.5, 0, Math.sin(angle) * 6.5);
      tickMesh.rotation.z = -angle;
      tickMesh.renderOrder = 900;
      this.aimReticleGroup.add(tickMesh);
    }

    // Center Aiming Pip / Dot
    const dotGeo = new THREE.CircleGeometry(0.9, 16);
    this.reticleDotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      depthTest: false,
      depthWrite: false
    });
    const dotMesh = new THREE.Mesh(dotGeo, this.reticleDotMat);
    dotMesh.rotation.x = -Math.PI / 2;
    dotMesh.renderOrder = 901;
    this.aimReticleGroup.add(dotMesh);

    SceneManager.playerGroup.add(this.aimReticleGroup);
  }

  public static updateAimTarget(worldX: number, surfaceY: number, worldZ: number, isLocked: boolean) {
    this.aimTargetX = worldX;
    this.aimTargetZ = worldZ;
    if (this.aimReticleGroup) {
      this.aimReticleGroup.position.set(worldX, surfaceY + 0.15, worldZ);
      this.aimReticleGroup.rotation.y += 0.04;

      const targetColor = isLocked ? 0xff3366 : 0x00f3ff;
      if (this.reticleRingMat && this.reticleRingMat.color.getHex() !== targetColor) {
        this.reticleRingMat.color.setHex(targetColor);
      }
    }
  }

  public static getPlayerMeshPosition(): THREE.Vector3 | null {
    return this.mothershipGroup ? this.mothershipGroup.position.clone() : null;
  }
}
