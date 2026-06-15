import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, PlayerTagComponent } from '../core/Components';
import { SceneManager } from './SceneManager';

import { CameraController } from './CameraController';

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
    const geometry = new THREE.SphereGeometry(1.5, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x004444 });
    this.playerMesh = new THREE.Mesh(geometry, material);
    this.playerMesh.scale.set(1, 0.3, 1); // Flatten it like a saucer
    this.playerMesh.castShadow = true;
    SceneManager.playerGroup.add(this.playerMesh);
  }
}
