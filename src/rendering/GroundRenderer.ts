import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { AssetLoader } from '../assets/AssetLoader';

export class GroundRenderer {
  private static groundMesh: THREE.Mesh;

  public static init() {
    // 1000x1000 plane for a long range surface
    const geometry = new THREE.PlaneGeometry(1000, 1000);

    const groundTexture = AssetLoader.getTexture('ground');
    if (groundTexture) {
      groundTexture.wrapS = THREE.RepeatWrapping;
      groundTexture.wrapT = THREE.RepeatWrapping;
      // Tile it 100x100 times across the 1000x1000 plane (each tile is 10x10 units)
      groundTexture.repeat.set(15, 15);
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff, // White so texture shows correctly
      map: groundTexture || null,
      roughness: 0.8,
      metalness: 0.2
    });

    this.groundMesh = new THREE.Mesh(geometry, material);

    this.groundMesh.rotation.x = -Math.PI / 2;
    this.groundMesh.position.y = 0;

    this.groundMesh.receiveShadow = true;

    SceneManager.groundGroup.add(this.groundMesh);
  }
}
