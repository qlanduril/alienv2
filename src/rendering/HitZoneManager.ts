import * as THREE from 'three';
import { Entity } from '../core/ECS';
import { DamageZone, ZoneDef } from '../core/ZoneDefs';
import { InputManager } from '../input/InputManager';

// --- HitZoneManager Constants ---
const ZERO_VALUE = 0;
const FIRST_HIT_INDEX = 0;
const HALF_OFFSET_CENTER = 0.5;
const INVISIBLE_MESH_OPACITY = 0;
const MESH_Z_OFFSET = 0.01;

export class HitZoneManager {
  // Maps invisible hit mesh UUID → { entity, zone, uvOffset }
  private static zoneObjects = new Map<string, { entity: Entity, zone: DamageZone, uvCenter: THREE.Vector2 }>();
  private static allZoneMeshes: THREE.Mesh[] = [];

  public static createZonesForBuilding(entity: Entity, sprite: THREE.Mesh, zones: ZoneDef[]) {
    for (const def of zones) {
      const width = def.u1 - def.u0;
      const height = def.v1 - def.v0;
      
      const geo = new THREE.PlaneGeometry(width, height);
      // material is transparent and opacity 0 so it's fully invisible but can be raycasted
      const mat = new THREE.MeshBasicMaterial({ visible: false, transparent: true, opacity: INVISIBLE_MESH_OPACITY });
      const mesh = new THREE.Mesh(geo, mat);
      
      // Position relative to sprite center. 
      const uCenter = def.u0 + width / 2;
      const vCenter = def.v0 + height / 2;
      
      mesh.position.x = uCenter - HALF_OFFSET_CENTER;
      mesh.position.y = HALF_OFFSET_CENTER - vCenter; // Three.js Y goes UP, UV V goes DOWN
      mesh.position.z = MESH_Z_OFFSET; // slightly in front to avoid z-fighting if made visible
      
      sprite.add(mesh);
      this.zoneObjects.set(mesh.uuid, { 
        entity, 
        zone: def.id, 
        uvCenter: new THREE.Vector2(uCenter, vCenter) 
      });
      this.allZoneMeshes.push(mesh);
    }
  }

  public static getHitZone(camera: THREE.Camera): { entity: Entity, zone: DamageZone, uvCenter: THREE.Vector2 } | null {
    const ndc = InputManager.getMouseNDC();
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
    
    // intersectObjects against our invisible meshes
    const hits = raycaster.intersectObjects(this.allZoneMeshes, false);
    if (hits.length === ZERO_VALUE) return null;
    
    // return the closest hit's zone info
    return this.zoneObjects.get(hits[FIRST_HIT_INDEX].object.uuid) || null;
  }

  public static clearAll() {
    for (const mesh of this.allZoneMeshes) {
      if (mesh.parent) {
        mesh.parent.remove(mesh);
      }
      mesh.geometry.dispose();
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach(m => m.dispose());
      } else {
        mesh.material.dispose();
      }
    }
    this.zoneObjects.clear();
    this.allZoneMeshes = [];
  }
}
