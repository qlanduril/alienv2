import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, PlayerTagComponent } from '../core/Components';
import { SceneManager } from './SceneManager';
import { CameraController } from './CameraController';

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

  public static tick(delta: number) {
    if (this.playerEntity === null) {
      for (const entity of ECS.entities) {
        if (PlayerTagComponent.has(entity)) {
          this.playerEntity = entity;
          this.initMesh();
          break;
        }
      }
    }

    if (this.playerEntity !== null) {
      const pos = PositionComponent.get(this.playerEntity);
      if (pos) {
        // Enforce high altitude for mothership if low
        if (pos.worldZ < 40) {
          pos.worldZ = DEFAULT_UFO_ALTITUDE;
        }

        if (this.mothershipGroup) {
          // Consistent 3D mapping: X = worldX, Y = worldZ (altitude), Z = worldY (depth)
          this.mothershipGroup.position.set(pos.worldX, pos.worldZ, pos.worldY);
          
          // Gentle hovering rotation & bobbing oscillation
          this.mothershipGroup.rotation.y += delta * 0.4;
          this.mothershipGroup.position.y = pos.worldZ + Math.sin(performance.now() * 0.002) * 1.5;

          // Ground shadow / targeting ring follows ground projection (Y = 0.05)
          if (this.groundShadowRing) {
            this.groundShadowRing.position.set(pos.worldX, 0.05, pos.worldY);
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
      metalness: 0.8
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.scale.set(DISC_SCALE_X, DISC_SCALE_Y, DISC_SCALE_Z);
    discMesh.castShadow = true;
    this.mothershipGroup.add(discMesh);

    // 2. Top Energy Dome
    const domeGeo = new THREE.SphereGeometry(MOTHERSHIP_RADIUS * 0.65, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const domeMat = new THREE.MeshStandardMaterial({
      color: DOME_COLOR_HEX,
      emissive: DOME_EMISSIVE_HEX,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.85,
      roughness: 0.1
    });
    const domeMesh = new THREE.Mesh(domeGeo, domeMat);
    domeMesh.position.y = MOTHERSHIP_RADIUS * 0.15;
    domeMesh.scale.set(DISC_SCALE_X * 0.7, DISC_SCALE_Y * 1.5, DISC_SCALE_Z * 0.7);
    this.mothershipGroup.add(domeMesh);

    // 3. Bottom Energy Beam Port
    const portGeo = new THREE.CylinderGeometry(MOTHERSHIP_RADIUS * 0.3, MOTHERSHIP_RADIUS * 0.1, MOTHERSHIP_RADIUS * 0.1, 16);
    const portMat = new THREE.MeshBasicMaterial({ color: BEAM_PORT_HEX });
    const portMesh = new THREE.Mesh(portGeo, portMat);
    portMesh.position.y = -MOTHERSHIP_RADIUS * 0.18;
    this.mothershipGroup.add(portMesh);

    // Render Order 500 ensures Mothership renders strictly in front / above all city building sprites
    this.mothershipGroup.renderOrder = 500;
    SceneManager.playerGroup.add(this.mothershipGroup);

    // 4. Ground Projection Shadow / Targeting Ring
    const shadowGeo = new THREE.RingGeometry(MOTHERSHIP_RADIUS * 0.8, MOTHERSHIP_RADIUS * 1.2, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    });
    this.groundShadowRing = new THREE.Mesh(shadowGeo, shadowMat);
    this.groundShadowRing.rotation.x = -Math.PI / 2;
    SceneManager.groundGroup.add(this.groundShadowRing);
  }

  public static getPlayerMeshPosition(): THREE.Vector3 | null {
    return this.mothershipGroup ? this.mothershipGroup.position.clone() : null;
  }
}
