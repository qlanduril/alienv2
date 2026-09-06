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

const DEFAULT_UFO_ALTITUDE = 75.0;       // High flight altitude hovering well above skyscraper roofs

const PLAYER_COLOR_HEX = 0x00f3ff;
const PLAYER_EMISSIVE_HEX = 0x004466;
const DOME_COLOR_HEX = 0x93c5fd;
const DOME_EMISSIVE_HEX = 0x3b82f6;
const BEAM_PORT_HEX = 0x00ffff;

export class PlayerRenderer {
  private static mothershipGroup: THREE.Group | null = null;
  private static playerEntity: Entity | null = null;
  private static groundShadowRing: THREE.Mesh | null = null;

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
          }
          break;
        }
      }
    }

    if (this.playerEntity !== null) {
      const pos = PositionComponent.get(this.playerEntity);
      if (pos) {
        // Enforce high altitude for mothership
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

          // Dynamic Surface Shadow & Targeting Ring Elevation Tracking:
          // Checks building heights directly under UFO position (worldX, worldY)
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
              ringMat.opacity = 0.45 + Math.sin(performance.now() * 0.004) * 0.15; // pulse opacity
            }
          }

          // Camera follows ground target (worldX, worldY)
          CameraController.setTarget(pos.worldX, pos.worldY);
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
      depthTest: false,
      depthWrite: true
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.scale.set(DISC_SCALE_X, DISC_SCALE_Y, DISC_SCALE_Z);
    discMesh.castShadow = true;
    discMesh.renderOrder = 1000;
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
      depthTest: false,
      depthWrite: true
    });
    const domeMesh = new THREE.Mesh(domeGeo, domeMat);
    domeMesh.position.y = MOTHERSHIP_RADIUS * 0.15;
    domeMesh.scale.set(DISC_SCALE_X * 0.7, DISC_SCALE_Y * 1.5, DISC_SCALE_Z * 0.7);
    domeMesh.renderOrder = 1001;
    this.mothershipGroup.add(domeMesh);

    // 3. Bottom Energy Beam Port
    const portGeo = new THREE.CylinderGeometry(MOTHERSHIP_RADIUS * 0.3, MOTHERSHIP_RADIUS * 0.1, MOTHERSHIP_RADIUS * 0.1, 16);
    const portMat = new THREE.MeshBasicMaterial({ color: BEAM_PORT_HEX, depthTest: false, depthWrite: true });
    const portMesh = new THREE.Mesh(portGeo, portMat);
    portMesh.position.y = -MOTHERSHIP_RADIUS * 0.18;
    portMesh.renderOrder = 1002;
    this.mothershipGroup.add(portMesh);

    // Render Order 1000 ensures Mothership renders strictly in front / above all city building sprites & 3D models
    this.mothershipGroup.renderOrder = 1000;
    SceneManager.playerGroup.add(this.mothershipGroup);

    // 4. Projection Shadow / Targeting Ring (Render order 800, depthTest=false so always visible on roofs/ground)
    const shadowGeo = new THREE.RingGeometry(MOTHERSHIP_RADIUS * 0.8, MOTHERSHIP_RADIUS * 1.2, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      depthTest: false,
      depthWrite: false
    });
    this.groundShadowRing = new THREE.Mesh(shadowGeo, shadowMat);
    this.groundShadowRing.rotation.x = -Math.PI / 2;
    this.groundShadowRing.renderOrder = 800;
    SceneManager.playerGroup.add(this.groundShadowRing);
  }

  public static getPlayerMeshPosition(): THREE.Vector3 | null {
    return this.mothershipGroup ? this.mothershipGroup.position.clone() : null;
  }
}
