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

  // Continuous Death Ray Mega Beam meshes
  private static beamGroup: THREE.Group | null = null;
  private static beamOuterMesh: THREE.Mesh | null = null;
  private static beamInnerMesh: THREE.Mesh | null = null;
  private static beamImpactDisc: THREE.Mesh | null = null;
  private static beamImpactLight: THREE.PointLight | null = null;
  private static beamTime: number = 0;

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

    // ── Mega Beam Assembly ──────────────────────────────────────────────
    this.beamGroup = new THREE.Group();
    this.beamGroup.visible = false;

    // Outer pulsating plasma sheath
    const outerGeo = new THREE.CylinderGeometry(1.0, 1.0, 1.0, 16, 1, true);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.beamOuterMesh = new THREE.Mesh(outerGeo, outerMat);
    this.beamOuterMesh.renderOrder = 2100;
    this.beamGroup.add(this.beamOuterMesh);

    // Inner searing white core beam
    const innerGeo = new THREE.CylinderGeometry(1.0, 1.0, 1.0, 12, 1, true);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.beamInnerMesh = new THREE.Mesh(innerGeo, innerMat);
    this.beamInnerMesh.renderOrder = 2101;
    this.beamGroup.add(this.beamInnerMesh);

    // Ground impact plasma flare disc
    const discGeo = new THREE.RingGeometry(0.4, 3.5, 24);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.beamImpactDisc = new THREE.Mesh(discGeo, discMat);
    this.beamImpactDisc.rotation.x = -Math.PI / 2;
    this.beamImpactDisc.renderOrder = 2102;
    this.beamGroup.add(this.beamImpactDisc);

    // High-intensity dynamic point light at impact site
    this.beamImpactLight = new THREE.PointLight(0x00f0ff, 4.5, 36);
    this.beamImpactLight.castShadow = false;
    this.beamGroup.add(this.beamImpactLight);

    SceneManager.scene.add(this.beamGroup);
  }

  public static tick(delta: number) {
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

    // 3. Render Continuous Mega Death Ray Beam
    if (this.beamGroup) {
      if (WeaponSystem.isBeamFiring()) {
        this.beamTime += delta;
        this.beamGroup.visible = true;

        const origin = WeaponSystem.beamOrigin;
        const target = WeaponSystem.beamTarget;

        this.beamDir.subVectors(target, origin);
        const dist = this.beamDir.length();

        if (dist > 0.1) {
          this.beamMid.addVectors(origin, target).multiplyScalar(0.5);
          this.beamQuat.setFromUnitVectors(this.upVector, this.beamDir.normalize());

          // Pulsating high-energy outer plasma radius & blazing incandescent core
          const pulse = 1.65 + Math.sin(this.beamTime * 28.0) * 0.35 + (Math.random() - 0.5) * 0.18;
          const coreRadius = 0.65 + (Math.random() - 0.5) * 0.10;

          if (this.beamOuterMesh) {
            this.beamOuterMesh.position.copy(this.beamMid);
            this.beamOuterMesh.quaternion.copy(this.beamQuat);
            this.beamOuterMesh.scale.set(pulse, dist, pulse);
          }

          if (this.beamInnerMesh) {
            this.beamInnerMesh.position.copy(this.beamMid);
            this.beamInnerMesh.quaternion.copy(this.beamQuat);
            this.beamInnerMesh.scale.set(coreRadius, dist, coreRadius);
          }

          // Impact plasma flare disc
          if (this.beamImpactDisc) {
            this.beamImpactDisc.position.set(target.x, target.y + 0.1, target.z);
            this.beamImpactDisc.rotation.z += delta * 16.0;
            const discScale = 1.45 + Math.sin(this.beamTime * 24.0) * 0.35;
            this.beamImpactDisc.scale.set(discScale, discScale, 1);
          }

          // Impact dynamic light
          if (this.beamImpactLight) {
            this.beamImpactLight.position.set(target.x, target.y + 0.8, target.z);
            this.beamImpactLight.intensity = 6.8 + Math.random() * 3.0;
          }
        }
      } else {
        this.beamGroup.visible = false;
      }
    }
  }

  private static beamDir = new THREE.Vector3();
  private static beamMid = new THREE.Vector3();
  private static beamQuat = new THREE.Quaternion();
  private static upVector = new THREE.Vector3(0, 1, 0);

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
