import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { DefenseSystem } from '../systems/DefenseSystem';
import { PlayerRenderer } from './PlayerRenderer';

export class DefenseRenderer {
  private static group: THREE.Group | null = null;

  // Pools
  private static jetMeshes: THREE.Group[] = [];
  private static turretMeshes: THREE.Group[] = [];
  private static missileMeshes: THREE.Group[] = [];
  private static tracerLine: THREE.LineSegments | null = null;
  private static tracerPositions: Float32Array | null = null;
  private static tracerGeometry: THREE.BufferGeometry | null = null;

  // Materials
  private static jetFuselageMat: THREE.MeshStandardMaterial | null = null;
  private static jetCanopyMat: THREE.MeshStandardMaterial | null = null;
  private static jetEngineMat: THREE.MeshBasicMaterial | null = null;
  private static turretBaseMat: THREE.MeshStandardMaterial | null = null;
  private static missileMat: THREE.MeshStandardMaterial | null = null;

  // Player Shield Bubble
  private static shieldMesh: THREE.Mesh | null = null;
  private static shieldMaterial: THREE.MeshBasicMaterial | null = null;

  public static init() {
    if (this.group) return;

    this.group = new THREE.Group();
    SceneManager.scene.add(this.group);

    this.jetFuselageMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // slate military grey
      metalness: 0.7,
      roughness: 0.3
    });
    this.jetCanopyMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // sky tint glass
      metalness: 0.9,
      roughness: 0.1
    });
    this.jetEngineMat = new THREE.MeshBasicMaterial({
      color: 0xf97316 // burning afterburner orange
    });

    this.turretBaseMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.4
    });

    this.missileMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.5,
      roughness: 0.3
    });

    // Tracer line pool
    const MAX_TRACERS = 30;
    this.tracerPositions = new Float32Array(MAX_TRACERS * 6);
    this.tracerGeometry = new THREE.BufferGeometry();
    this.tracerGeometry.setAttribute('position', new THREE.BufferAttribute(this.tracerPositions, 3));
    const tracerMat = new THREE.LineBasicMaterial({ color: 0xfef08a, linewidth: 2 });
    this.tracerLine = new THREE.LineSegments(this.tracerGeometry, tracerMat);
    this.group.add(this.tracerLine);

    // Shield Bubble attached to Player
    const shieldGeom = new THREE.SphereGeometry(22, 16, 16);
    this.shieldMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0,
      wireframe: true
    });
    this.shieldMesh = new THREE.Mesh(shieldGeom, this.shieldMaterial);
    this.group.add(this.shieldMesh);
  }

  public static tick(_delta: number) {
    if (!this.group) this.init();
    if (!this.group) return;

    // 1. Sync Fighter Jets
    const jets = DefenseSystem.jets;
    while (this.jetMeshes.length < jets.length) {
      const jGroup = this.createJetMesh();
      this.group.add(jGroup);
      this.jetMeshes.push(jGroup);
    }

    for (let i = 0; i < this.jetMeshes.length; i++) {
      const mesh = this.jetMeshes[i];
      if (i < jets.length && jets[i].alive) {
        const j = jets[i];
        mesh.visible = true;
        mesh.position.set(j.x, j.z, j.y); // worldX, altitude (Y), depth (Z)

        mesh.rotation.y = -j.heading + Math.PI * 0.5;
        mesh.rotation.z = j.roll;
        mesh.rotation.x = j.pitch;
      } else {
        mesh.visible = false;
      }
    }

    // 2. Sync SAM Turrets
    const turrets = DefenseSystem.turrets;
    while (this.turretMeshes.length < turrets.length) {
      const tGroup = this.createTurretMesh();
      this.group.add(tGroup);
      this.turretMeshes.push(tGroup);
    }

    for (let i = 0; i < this.turretMeshes.length; i++) {
      const mesh = this.turretMeshes[i];
      if (i < turrets.length && turrets[i].alive) {
        const t = turrets[i];
        mesh.visible = true;
        mesh.position.set(t.x, t.z, t.y);

        const launcher = mesh.getObjectByName('launcher');
        if (launcher) {
          launcher.rotation.y = -t.yaw + Math.PI * 0.5;
          launcher.rotation.x = -t.pitch;
        }
      } else {
        mesh.visible = false;
      }
    }

    // 3. Sync Missiles
    const missiles = DefenseSystem.missiles;
    while (this.missileMeshes.length < missiles.length) {
      const mGroup = this.createMissileMesh();
      this.group.add(mGroup);
      this.missileMeshes.push(mGroup);
    }

    for (let i = 0; i < this.missileMeshes.length; i++) {
      const mesh = this.missileMeshes[i];
      if (i < missiles.length && missiles[i].alive) {
        const m = missiles[i];
        mesh.visible = true;
        mesh.position.set(m.x, m.z, m.y);

        const speed = Math.sqrt(m.vx * m.vx + m.vy * m.vy + m.vz * m.vz);
        if (speed > 0.1) {
          mesh.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(m.vx, m.vz, m.vy).normalize()
          );
        }
      } else {
        mesh.visible = false;
      }
    }

    // 4. Sync Tracers
    const tracers = DefenseSystem.tracers;
    if (this.tracerPositions && this.tracerGeometry) {
      let idx = 0;
      for (const tr of tracers) {
        if (idx >= this.tracerPositions.length) break;
        // Start
        this.tracerPositions[idx++] = tr.x;
        this.tracerPositions[idx++] = tr.z;
        this.tracerPositions[idx++] = tr.y;
        // End (elongated forward in velocity)
        this.tracerPositions[idx++] = tr.x + tr.vx * 0.04;
        this.tracerPositions[idx++] = tr.z + tr.vz * 0.04;
        this.tracerPositions[idx++] = tr.y + tr.vy * 0.04;
      }
      // Zero remaining
      for (let k = idx; k < this.tracerPositions.length; k++) {
        this.tracerPositions[k] = 0;
      }
      this.tracerGeometry.attributes.position.needsUpdate = true;
    }

    // 5. Shield Bubble Flare on Player UFO
    const ufoPos = PlayerRenderer.getPlayerMeshPosition();
    if (this.shieldMesh && this.shieldMaterial && ufoPos) {
      this.shieldMesh.position.copy(ufoPos);
      if (DefenseSystem.shieldFlareTimer > 0) {
        this.shieldMaterial.opacity = (DefenseSystem.shieldFlareTimer / 0.35) * 0.7;
        this.shieldMesh.visible = true;
      } else {
        this.shieldMesh.visible = false;
      }
    }
  }

  private static createJetMesh(): THREE.Group {
    const grp = new THREE.Group();

    // Fuselage (Cylinder / Cone)
    const bodyGeom = new THREE.ConeGeometry(1.2, 8.5, 6);
    const body = new THREE.Mesh(bodyGeom, this.jetFuselageMat!);
    body.rotation.x = Math.PI * 0.5; // pointing forward
    grp.add(body);

    // Canopy (Cockpit)
    const canopyGeom = new THREE.BoxGeometry(1.0, 0.7, 2.8);
    const canopy = new THREE.Mesh(canopyGeom, this.jetCanopyMat!);
    canopy.position.set(0, 0.6, 0.4);
    grp.add(canopy);

    // Delta Wings
    const wingGeom = new THREE.BoxGeometry(9.0, 0.15, 3.4);
    const wings = new THREE.Mesh(wingGeom, this.jetFuselageMat!);
    wings.position.set(0, 0, -1.0);
    grp.add(wings);

    // Vertical Stabilizer (Tail fin)
    const finGeom = new THREE.BoxGeometry(0.15, 1.8, 1.8);
    const fin = new THREE.Mesh(finGeom, this.jetFuselageMat!);
    fin.position.set(0, 0.9, -3.2);
    grp.add(fin);

    // Afterburner Engine
    const engineGeom = new THREE.CylinderGeometry(0.6, 0.6, 0.4, 8);
    const engine = new THREE.Mesh(engineGeom, this.jetEngineMat!);
    engine.position.set(0, 0, -4.2);
    engine.rotation.x = Math.PI * 0.5;
    grp.add(engine);

    return grp;
  }

  private static createTurretMesh(): THREE.Group {
    const grp = new THREE.Group();

    // Armored ground base
    const baseGeom = new THREE.CylinderGeometry(4.0, 4.8, 2.0, 8);
    const base = new THREE.Mesh(baseGeom, this.turretBaseMat!);
    base.position.y = 1.0;
    grp.add(base);

    // Launcher head (rotates)
    const head = new THREE.Group();
    head.name = 'launcher';
    head.position.y = 2.4;

    const podGeom = new THREE.BoxGeometry(3.2, 1.8, 4.0);
    const pod = new THREE.Mesh(podGeom, this.turretBaseMat!);
    head.add(pod);

    // Missile rails
    const rail1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 3.8, 6), this.missileMat!);
    rail1.position.set(-1.0, 0.4, 0.4);
    rail1.rotation.x = Math.PI * 0.5;
    head.add(rail1);

    const rail2 = rail1.clone();
    rail2.position.x = 1.0;
    head.add(rail2);

    grp.add(head);

    return grp;
  }

  private static createMissileMesh(): THREE.Group {
    const grp = new THREE.Group();

    const bodyGeom = new THREE.CylinderGeometry(0.35, 0.35, 2.6, 6);
    const body = new THREE.Mesh(bodyGeom, this.missileMat!);
    grp.add(body);

    const tipGeom = new THREE.ConeGeometry(0.35, 0.8, 6);
    const tip = new THREE.Mesh(tipGeom, this.missileMat!);
    tip.position.y = 1.6;
    grp.add(tip);

    return grp;
  }
}
