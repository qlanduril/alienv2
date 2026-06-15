import * as THREE from 'three';
import { Entity } from '../core/ECS';
import { DamageZone, ZoneDef } from '../core/ZoneDefs';
import { InputManager } from '../input/InputManager';

export class HitZoneManager {
  // Maps invisible hit mesh UUID → { entity, zone, uvOffset }
  private static zoneObjects = new Map<string, { entity: Entity, zone: DamageZone, uvCenter: THREE.Vector2 }>();
  private static allZoneMeshes: THREE.Object3D[] = [];

  public static createZonesForBuilding(entity: Entity, sprite: THREE.Mesh, zones: ZoneDef[]) {

    for (const def of zones) {
      // The parent sprite has geometry PlaneGeometry(1, 1) and its origin is at center.
      // In UV space, u goes 0 to 1 (left to right), v goes 0 to 1 (bottom to top, or top to bottom?).
      // In Three.js PlaneGeometry, standard UV is 0,1 at top-left, 1,0 at bottom-right.
      // So width is (u1 - u0), height is (v1 - v0).
      const width = def.u1 - def.u0;
      const height = def.v1 - def.v0;
      
      const geo = new THREE.PlaneGeometry(width, height);
      // material is transparent and opacity 0 so it's fully invisible but can be raycasted
      const mat = new THREE.MeshBasicMaterial({ visible: false, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(geo, mat);
      
      // Position relative to sprite center. 
      // The parent sprite goes from x: -0.5 to 0.5, y: -0.5 to 0.5.
      const uCenter = def.u0 + width / 2;
      const vCenter = def.v0 + height / 2;
      
      mesh.position.x = uCenter - 0.5;
      mesh.position.y = 0.5 - vCenter; // Three.js Y goes UP, UV V goes DOWN
      mesh.position.z = 0.01; // slightly in front to avoid z-fighting if made visible
      
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
    if (hits.length === 0) return null;
    
    // return the closest hit's zone info
    return this.zoneObjects.get(hits[0].object.uuid) || null;
  }
}
