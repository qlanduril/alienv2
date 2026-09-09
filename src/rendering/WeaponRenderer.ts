import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { WeaponSystem } from '../systems/WeaponSystem';

export class WeaponRenderer {
  private static group: THREE.Group | null = null;

  // Visual mesh pools
  private static canisterMeshes: THREE.Group[] = [];
  private static bombletMeshes: THREE.Mesh[] = [];

  private static canisterMaterial: THREE.MeshStandardMaterial | null = null;
  private static canisterTipMaterial: THREE.MeshBasicMaterial | null = null;
  private static bombletMaterial: THREE.MeshStandardMaterial | null = null;

  public static init() {
    if (this.group) return;

    this.group = new THREE.Group();
    SceneManager.scene.add(this.group);

    this.canisterMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.8,
      roughness: 0.3
    });
    this.canisterTipMaterial = new THREE.MeshBasicMaterial({
      color: 0xef4444
    });
    this.bombletMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.8,
      roughness: 0.2
    });
  }

  public static tick(_delta: number) {
    if (!this.group) {
      this.init();
    }
    if (!this.group) return;

    const canisters = WeaponSystem.canisters;
    const bomblets = WeaponSystem.bomblets;

    // 1. Sync canister meshes
    while (this.canisterMeshes.length < canisters.length) {
      const cGroup = this.createCanisterMesh();
      this.group.add(cGroup);
      this.canisterMeshes.push(cGroup);
    }

    for (let i = 0; i < this.canisterMeshes.length; i++) {
      const mesh = this.canisterMeshes[i];
      if (i < canisters.length) {
        const c = canisters[i];
        mesh.visible = true;
        mesh.position.set(c.x, c.z, c.y); // worldX, altitude (Y), depth (Z)

        // Point downwards towards trajectory
        const speed = Math.sqrt(c.vx * c.vx + c.vy * c.vy + c.vz * c.vz);
        if (speed > 0.1) {
          mesh.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(c.vx, c.vz, c.vy).normalize()
          );
        }
      } else {
        mesh.visible = false;
      }
    }

    // 2. Sync bomblet meshes
    while (this.bombletMeshes.length < bomblets.length) {
      const bMesh = this.createBombletMesh();
      this.group.add(bMesh);
      this.bombletMeshes.push(bMesh);
    }

    for (let i = 0; i < this.bombletMeshes.length; i++) {
      const mesh = this.bombletMeshes[i];
      if (i < bomblets.length) {
        const b = bomblets[i];
        mesh.visible = true;
        mesh.position.set(b.x, b.z, b.y);
        mesh.rotation.y = b.rotation;
        mesh.rotation.x = b.rotation * 0.7;
      } else {
        mesh.visible = false;
      }
    }
  }

  private static createCanisterMesh(): THREE.Group {
    const grp = new THREE.Group();

    // Body
    const bodyGeom = new THREE.CylinderGeometry(0.9, 0.9, 3.2, 8);
    const bodyMesh = new THREE.Mesh(bodyGeom, this.canisterMaterial!);
    grp.add(bodyMesh);

    // Warhead tip
    const tipGeom = new THREE.ConeGeometry(0.9, 1.4, 8);
    const tipMesh = new THREE.Mesh(tipGeom, this.canisterTipMaterial!);
    tipMesh.position.y = -2.0; // pointing down
    tipMesh.rotation.x = Math.PI;
    grp.add(tipMesh);

    // Fins
    const finGeom = new THREE.BoxGeometry(2.4, 0.8, 0.1);
    const finMesh = new THREE.Mesh(finGeom, this.canisterMaterial!);
    finMesh.position.y = 1.2;
    grp.add(finMesh);

    const finMesh2 = finMesh.clone();
    finMesh2.rotation.y = Math.PI / 2;
    grp.add(finMesh2);

    return grp;
  }

  private static createBombletMesh(): THREE.Mesh {
    const geom = new THREE.DodecahedronGeometry(0.85);
    return new THREE.Mesh(geom, this.bombletMaterial!);
  }
}
