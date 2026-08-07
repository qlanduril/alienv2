import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, PlayerTagComponent } from '../core/Components';
import { SceneManager } from './SceneManager';
import { CameraController } from './CameraController';

// --- PlayerRenderer Constants ---
const SPHERICAL_RADIUS = 1.5;
const SPHERICAL_WIDTH_SEGMENTS = 16;
const SPHERICAL_HEIGHT_SEGMENTS = 16;

const PLAYER_COLOR_HEX = 0x00ffff;
const PLAYER_EMISSIVE_HEX = 0x004444;

const SAUCER_SCALE_X = 1.0;
const SAUCER_SCALE_Y = 0.3;
const SAUCER_SCALE_Z = 1.0;

export class PlayerRenderer {
  private static playerMesh: THREE.Mesh | null = null;
  private static playerEntity: Entity | null = null;

  public static tick(_delta: number) {
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
      if (pos && this.playerMesh) {
        // Consistent 3D mapping: X = worldX, Y = worldZ (altitude), Z = worldY (depth)
        this.playerMesh.position.set(pos.worldX, pos.worldZ, pos.worldY);
        // Camera follows ground coordinates (worldX, worldY)
        CameraController.setTarget(pos.worldX, pos.worldY);
      }
    }
  }

  private static initMesh() {
    // UFO filled circle (Sphere flattened)
    const geometry = new THREE.SphereGeometry(SPHERICAL_RADIUS, SPHERICAL_WIDTH_SEGMENTS, SPHERICAL_HEIGHT_SEGMENTS);
    const material = new THREE.MeshStandardMaterial({ color: PLAYER_COLOR_HEX, emissive: PLAYER_EMISSIVE_HEX });
    this.playerMesh = new THREE.Mesh(geometry, material);
    this.playerMesh.scale.set(SAUCER_SCALE_X, SAUCER_SCALE_Y, SAUCER_SCALE_Z); // Flatten it like a saucer
    this.playerMesh.castShadow = true;
    SceneManager.playerGroup.add(this.playerMesh);
  }
}
