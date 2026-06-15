import * as THREE from 'three';
import { Entity } from '../core/ECS';
import { InputManager } from './InputManager';

export class RaycasterHelper {
  private static raycaster = new THREE.Raycaster();
  private static camera: THREE.Camera;
  private static intersectableObjects: THREE.Object3D[] = [];
  
  // Maps a ThreeJS Object uuid to our ECS Entity ID
  private static objectToEntityMap = new Map<string, Entity>();

  public static init(camera: THREE.Camera) {
    this.camera = camera;
  }

  public static registerObject(object: THREE.Object3D, entity: Entity) {
    this.intersectableObjects.push(object);
    this.objectToEntityMap.set(object.uuid, entity);
  }

  public static getIntersectedEntity(): Entity | null {
    if (!this.camera) return null;

    const ndc = InputManager.getMouseNDC();
    const pointer = new THREE.Vector2(ndc.x, ndc.y);
    
    this.raycaster.setFromCamera(pointer, this.camera);
    
    const intersects = this.raycaster.intersectObjects(this.intersectableObjects, true);
    
    if (intersects.length > 0) {
      // Find the first intersected object that corresponds to an entity
      for (const intersect of intersects) {
        let currentObj: THREE.Object3D | null = intersect.object;
        while (currentObj) {
          const entity = this.objectToEntityMap.get(currentObj.uuid);
          if (entity !== undefined) {
            return entity;
          }
          currentObj = currentObj.parent;
        }
      }
    }
    
    return null;
  }
}
