import * as THREE from 'three';
import { Entity } from '../core/ECS';
import { HealthComponent } from '../core/Components';
import { DamageZone, ZoneDef } from '../core/ZoneDefs';
import { InputManager } from '../input/InputManager';

// --- HitZoneManager Constants ---
const ZERO_VALUE = 0;
const HALF_OFFSET_CENTER = 0.5;
const INVISIBLE_MESH_OPACITY = 0;
const MESH_Z_OFFSET = 0.01;

// Bias constants for prioritizing small buildings & preventing foreground hitbox stealing
const SMALL_BUILDING_PRIORITY_WEIGHT = 0.36; // 0.6x distance multiplier
const MEGA_LANDMARK_PENALTY_WEIGHT = 1.30;
const SMALL_BUILDING_MAX_HEIGHT = 65;
const SMALL_BUILDING_MAX_WIDTH = 38;
const MEGA_BUILDING_MIN_HEIGHT = 140;

export interface HitZoneResult {
  entity: Entity;
  zone: DamageZone;
  uvCenter: THREE.Vector2;
  point: THREE.Vector3;
}

export class HitZoneManager {
  // Maps invisible hit mesh UUID → { entity, zone, uvOffset }
  private static zoneObjects = new Map<string, { entity: Entity, zone: DamageZone, uvCenter: THREE.Vector2 }>();
  private static allZoneMeshes: THREE.Mesh[] = [];
  
  // Reusable static Raycaster & Vectors to eliminate garbage collection spikes
  private static raycaster = new THREE.Raycaster();
  private static pointerVector = new THREE.Vector2();
  private static tempVec = new THREE.Vector3();

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

  public static getHitZone(camera: THREE.Camera): HitZoneResult | null {
    if (this.allZoneMeshes.length === ZERO_VALUE) return null;

    const ndc = InputManager.getMouseNDC();
    this.pointerVector.set(ndc.x, ndc.y);
    this.raycaster.setFromCamera(this.pointerVector, camera);
    
    // intersectObjects against invisible hit meshes
    const hits = this.raycaster.intersectObjects(this.allZoneMeshes, false);
    if (hits.length === ZERO_VALUE) return null;

    // Single hit: fast path
    if (hits.length === 1) {
      const info = this.zoneObjects.get(hits[0].object.uuid);
      if (!info) return null;
      const health = HealthComponent.get(info.entity);
      if (health && health.currentHP <= 0) return null;
      return {
        ...info,
        point: hits[0].point.clone()
      };
    }

    // Multiple hits: disambiguate using screen-space cursor proximity with small-building priority
    let bestResult: HitZoneResult | null = null;
    let minScore = Infinity;

    for (let i = 0; i < hits.length; i++) {
      const hit = hits[i];
      const info = this.zoneObjects.get(hit.object.uuid);
      if (!info) continue;

      const health = HealthComponent.get(info.entity);
      if (health && health.currentHP <= 0) continue; // Collapsed buildings don't steal hits

      const parentMesh = hit.object.parent as THREE.Mesh | null;
      if (!parentMesh) continue;

      // Project parent building quad center to NDC
      parentMesh.getWorldPosition(this.tempVec);
      this.tempVec.project(camera);

      const dx = this.tempVec.x - ndc.x;
      const dy = this.tempVec.y - ndc.y;
      let distSq = dx * dx + dy * dy;

      // Weight by building size to prioritize small buildings and prevent giant foreground hitbox stealing
      const bHeight = parentMesh.scale.y;
      const bWidth = parentMesh.scale.x;

      if (bHeight <= SMALL_BUILDING_MAX_HEIGHT || bWidth <= SMALL_BUILDING_MAX_WIDTH) {
        distSq *= SMALL_BUILDING_PRIORITY_WEIGHT; // Small buildings get targeted preferentially
      } else if (bHeight >= MEGA_BUILDING_MIN_HEIGHT) {
        distSq *= MEGA_LANDMARK_PENALTY_WEIGHT; // Large towers won't steal clicks when user clicks near their edge
      }

      // Zone centrality bonus (hitting closer to center of damage zone)
      const uvDx = info.uvCenter.x - 0.5;
      const uvDy = info.uvCenter.y - 0.5;
      const score = distSq + (uvDx * uvDx + uvDy * uvDy) * 0.002;

      if (score < minScore) {
        minScore = score;
        bestResult = {
          ...info,
          point: hit.point.clone()
        };
      }
    }

    // Fallback if all hits belonged to destroyed buildings
    if (!bestResult) {
      const firstHit = hits[0];
      const info = this.zoneObjects.get(firstHit.object.uuid);
      if (info) {
        bestResult = {
          ...info,
          point: firstHit.point.clone()
        };
      }
    }

    return bestResult;
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
