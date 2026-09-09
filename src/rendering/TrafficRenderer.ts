import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { TrafficSystem, Vehicle } from '../systems/TrafficSystem';

export class TrafficRenderer {
  private static group: THREE.Group | null = null;
  private static vehicleMeshes: THREE.Group[] = [];

  // Reusable materials
  private static glassMaterial: THREE.MeshStandardMaterial | null = null;
  private static headlightMaterial: THREE.MeshBasicMaterial | null = null;
  private static taillightMaterial: THREE.MeshBasicMaterial | null = null;
  private static policeRedMaterial: THREE.MeshBasicMaterial | null = null;
  private static policeBlueMaterial: THREE.MeshBasicMaterial | null = null;
  private static policeOffMaterial: THREE.MeshBasicMaterial | null = null;

  private static flasherTimer = 0;
  private static flasherPhase = false;

  public static init() {
    if (this.group) return;

    this.group = new THREE.Group();
    SceneManager.scene.add(this.group);

    this.glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.1,
      metalness: 0.9
    });

    this.headlightMaterial = new THREE.MeshBasicMaterial({ color: 0xfffbeb });
    this.taillightMaterial = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    this.policeRedMaterial = new THREE.MeshBasicMaterial({ color: 0xff0033 });
    this.policeBlueMaterial = new THREE.MeshBasicMaterial({ color: 0x0088ff });
    this.policeOffMaterial = new THREE.MeshBasicMaterial({ color: 0x334155 });
  }

  public static tick(delta: number) {
    if (!this.group) {
      this.init();
    }
    if (!this.group) return;

    // Police flasher cycle (approx 6 Hz)
    this.flasherTimer += delta;
    if (this.flasherTimer >= 0.15) {
      this.flasherTimer = 0;
      this.flasherPhase = !this.flasherPhase;
    }

    const vehicles = TrafficSystem.vehicles;

    // Ensure mesh pool matches vehicle count
    while (this.vehicleMeshes.length < vehicles.length) {
      const v = vehicles[this.vehicleMeshes.length];
      const mesh = this.createVehicleMesh(v);
      this.group.add(mesh);
      this.vehicleMeshes.push(mesh);
    }

    for (let i = 0; i < this.vehicleMeshes.length; i++) {
      const mesh = this.vehicleMeshes[i];
      if (i < vehicles.length) {
        const v = vehicles[i];
        if (v.alive) {
          mesh.visible = true;
          mesh.position.set(v.x, 0.7, v.y);
          mesh.rotation.y = -v.heading + Math.PI * 0.5; // Three.js coordinate alignment

          // Update police strobe lights
          if (v.type === 'police') {
            const redLight = mesh.getObjectByName('police_red') as THREE.Mesh;
            const blueLight = mesh.getObjectByName('police_blue') as THREE.Mesh;
            if (redLight && blueLight) {
              redLight.material = this.flasherPhase ? this.policeRedMaterial! : this.policeOffMaterial!;
              blueLight.material = this.flasherPhase ? this.policeOffMaterial! : this.policeBlueMaterial!;
            }
          }
        } else {
          mesh.visible = false;
        }
      } else {
        mesh.visible = false;
      }
    }
  }

  private static createVehicleMesh(v: Vehicle): THREE.Group {
    const grp = new THREE.Group();

    const isTruck = v.type === 'truck';
    const bodyW = isTruck ? 3.0 : 2.2;
    const bodyH = isTruck ? 2.4 : 1.1;
    const bodyL = isTruck ? 6.2 : 4.4;

    // Main Chassis
    const bodyMat = new THREE.MeshStandardMaterial({
      color: v.color,
      roughness: 0.4,
      metalness: 0.3
    });
    const bodyGeom = new THREE.BoxGeometry(bodyW, bodyH, bodyL);
    const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
    bodyMesh.position.y = bodyH * 0.5;
    grp.add(bodyMesh);

    // Windshield / Cabin
    if (!isTruck) {
      const cabinW = bodyW * 0.85;
      const cabinH = 0.85;
      const cabinL = bodyL * 0.55;
      const cabinGeom = new THREE.BoxGeometry(cabinW, cabinH, cabinL);
      const cabinMesh = new THREE.Mesh(cabinGeom, this.glassMaterial!);
      cabinMesh.position.set(0, bodyH + cabinH * 0.5, -0.2);
      grp.add(cabinMesh);
    } else {
      // Truck cargo container
      const cargoMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.6 });
      const cargoGeom = new THREE.BoxGeometry(bodyW * 0.95, bodyH * 1.1, bodyL * 0.65);
      const cargoMesh = new THREE.Mesh(cargoGeom, cargoMat);
      cargoMesh.position.set(0, bodyH * 1.05, -0.8);
      grp.add(cargoMesh);
    }

    // Headlights
    const hlGeom = new THREE.BoxGeometry(0.45, 0.3, 0.1);
    const hl1 = new THREE.Mesh(hlGeom, this.headlightMaterial!);
    hl1.position.set(-bodyW * 0.35, bodyH * 0.5, bodyL * 0.5 + 0.05);
    grp.add(hl1);

    const hl2 = new THREE.Mesh(hlGeom, this.headlightMaterial!);
    hl2.position.set(bodyW * 0.35, bodyH * 0.5, bodyL * 0.5 + 0.05);
    grp.add(hl2);

    // Taillights
    const tlGeom = new THREE.BoxGeometry(0.5, 0.3, 0.1);
    const tl1 = new THREE.Mesh(tlGeom, this.taillightMaterial!);
    tl1.position.set(-bodyW * 0.35, bodyH * 0.5, -bodyL * 0.5 - 0.05);
    grp.add(tl1);

    const tl2 = new THREE.Mesh(tlGeom, this.taillightMaterial!);
    tl2.position.set(bodyW * 0.35, bodyH * 0.5, -bodyL * 0.5 - 0.05);
    grp.add(tl2);

    // Police rooftop strobe lightbar
    if (v.type === 'police') {
      const barGeom = new THREE.BoxGeometry(0.45, 0.25, 0.45);
      const redLight = new THREE.Mesh(barGeom, this.policeRedMaterial!);
      redLight.name = 'police_red';
      redLight.position.set(-0.4, bodyH + 0.95, -0.2);
      grp.add(redLight);

      const blueLight = new THREE.Mesh(barGeom, this.policeBlueMaterial!);
      blueLight.name = 'police_blue';
      blueLight.position.set(0.4, bodyH + 0.95, -0.2);
      grp.add(blueLight);
    }

    return grp;
  }
}
