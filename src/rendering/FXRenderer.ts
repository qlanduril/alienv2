import * as THREE from 'three';
import { AnimatedSprite3D } from './AnimatedSprite3D';
import { SceneManager } from './SceneManager';
import { DestructionSystem, FXEvent } from '../systems/DestructionSystem';
import { AssetLoader } from '../assets/AssetLoader';
import { CameraController } from './CameraController';
import { BuildingRenderer } from './BuildingRenderer';
import { ParticleSimSystem } from '../systems/ParticleSimSystem';

// Pre-defined easing curves for explosion animations
// Fast shockwave burst → slow smoke dissipation
const BLAST_FRAME_DURATIONS = [
  0.02, 0.02, 0.02,          // frames 0–2: shockwave burst
  0.04,                       // frame 3: transition
  0.08, 0.08, 0.08, 0.08,    // frames 4–7: smoke dissipation
  0.08, 0.08, 0.08            // frames 8–10: fade out
];

const BLAST360_FRAME_DURATIONS = [
  0.02, 0.02, 0.02,          // frames 0–2: shockwave burst
  0.04,                       // frame 3: transition
  0.08, 0.08, 0.08            // frames 4–6: smoke dissipation
];

const FIRE_FRAME_DURATIONS = [
  0.01, 0.01,                          // frames 0–1: spark flash
  0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02  // frames 2–9: fast fade out
];

export class FXRenderer {
  private static activeSprites: AnimatedSprite3D[] = [];
  private static inactiveSprites: AnimatedSprite3D[] = [];
  
  private static blastTextures: THREE.Texture[] = [];
  private static blast360Textures: THREE.Texture[] = [];
  private static fireTextures: THREE.Texture[] = [];

  public static preloadTextureArrays() {
    for (let i = 0; i < 11; i++) {
      const tex = AssetLoader.getTexture(`fx_blast_${i}`);
      if (tex) this.blastTextures.push(tex);
    }
    for (let i = 0; i < 7; i++) {
      const tex = AssetLoader.getTexture(`fx_blast360_${i}`);
      if (tex) this.blast360Textures.push(tex);
    }
    for (let i = 0; i < 10; i++) {
      const tex = AssetLoader.getTexture(`fx_fire_${i}`);
      if (tex) this.fireTextures.push(tex);
    }
    
    for (let i = 0; i < 50; i++) {
      this.inactiveSprites.push(new AnimatedSprite3D([]));
    }
  }

  private static getSprite(textures: THREE.Texture[], loop: boolean, durations?: number[]): AnimatedSprite3D {
    let sprite = this.inactiveSprites.pop();
    if (!sprite) {
      sprite = new AnimatedSprite3D(textures);
    }
    sprite.reset(textures, loop, durations);
    return sprite;
  }

  public static tick(delta: number) {
    // 1. Process queued events from Simulation Layer
    while (DestructionSystem.fxQueue.length > 0) {
      const event = DestructionSystem.fxQueue.shift() as FXEvent;
      if (!event) continue;

      // Frustum culling for FX
      if (event.type !== 'shake' && !CameraController.isPointInView(event.x, event.z)) {
        continue;
      }

      if (event.type === 'blast' || event.type === 'blast360') {
        this.spawnExplosion(event.x, event.y, event.z, event.type, event.data);
      } else if (event.type === 'blast_zonal') {
        this.spawnZonalExplosion(event.x, event.y, event.z, event.data);
      } else if (event.type === 'fire') {
        this.spawnFire(event.x, event.y, event.z, event.data);
      } else if (event.type === 'shake') {
        CameraController.addShake(event.data.intensity, 0.2); // 0.2s duration
      } else if (event.type === 'hit_fx') {
        // Delegate to BuildingRenderer's micro-transform system
        BuildingRenderer.applyHitFX(event.data.entityId, event.data.intensity);
      } else if (event.type === 'debris') {
        const bPos = this.getBuildingPos3D(event.data.entityId, event.x, event.y, event.z);
        ParticleSimSystem.spawnBrickBurst(bPos.x, bPos.y, bPos.z, event.data.count, event.data.palette);
      } else if (event.type === 'dust') {
        const bPos = this.getBuildingPos3D(event.data.entityId, event.x, event.y, event.z);
        ParticleSimSystem.spawnDustCloud(bPos.x, bPos.y, bPos.z, event.data.count);
      } else if (event.type === 'smoke') {
        const bPos = this.getBuildingPos3D(event.data.entityId, event.x, event.y, event.z);
        ParticleSimSystem.spawnSmokePlume(bPos.x, bPos.y, bPos.z, event.data.count);
      } else if (event.type === 'sparks') {
        const bPos = this.getBuildingPos3D(event.data.entityId, event.x, event.y, event.z);
        ParticleSimSystem.spawnSparkBurst(bPos.x, bPos.y, bPos.z, event.data.count);
      } else if (event.type === 'laser') {
        this.spawnLaser(event.x, event.y, event.z, event.data.tx, event.data.ty, event.data.tz);
      }
    }

    // 2. Tick active sprites
    for (let i = this.activeSprites.length - 1; i >= 0; i--) {
      const sprite = this.activeSprites[i];
      sprite.tick(delta);

      if (!sprite.active) {
        SceneManager.effectsGroup.remove(sprite.mesh);
        this.inactiveSprites.push(sprite);
        this.activeSprites.splice(i, 1);
      }
    }
  }

  /**
   * Resolve a building entity's 3D position for particle spawning.
   * Uses the building sprite's visual center if available, otherwise converts ECS coords.
   */
  private static getBuildingPos3D(entityId: number | undefined, ecsX: number, ecsY: number, ecsZ: number): THREE.Vector3 {
    if (entityId !== undefined) {
      const bPos = BuildingRenderer.getSpritePosition(entityId);
      if (bPos) return bPos;
    }
    // Fallback: convert ECS coords to Three.js (worldX → x, worldZ → y, worldY → z)
    return new THREE.Vector3(ecsX, ecsZ, ecsY);
  }

  private static spawnExplosion(x: number, y: number, z: number, type: 'blast' | 'blast360', data: any) {
    const textures = type === 'blast' ? this.blastTextures : this.blast360Textures;
    if (textures.length === 0) return;

    const durations = type === 'blast' ? [...BLAST_FRAME_DURATIONS] : [...BLAST360_FRAME_DURATIONS];
    const anim = this.getSprite(textures, false, durations);
    
    // Position centering on the building sprite's visual position
    let targetPos = new THREE.Vector3(x, z + 1.2, y); // default slightly above ground
    if (data && data.entityId !== undefined) {
      const bPos = BuildingRenderer.getSpritePosition(data.entityId);
      const bScale = BuildingRenderer.getSpriteScale(data.entityId);
      if (bPos) {
        targetPos.copy(bPos);
        if (bScale) {
          // Lower the blast center from the billboard center to be closer to the actual building center
          targetPos.y -= bScale.y * 0.15;
        }
      }
    }
    anim.mesh.position.copy(targetPos);
    anim.mesh.scale.set(10, 10, 1); // Scale explosion
    
    SceneManager.effectsGroup.add(anim.mesh);
    this.activeSprites.push(anim);

    // Secondary explosions
    for (let i = 0; i < 2; i++) {
      const subAnim = this.getSprite(textures, false, durations);
      const offsetX = (Math.random() - 0.5) * 3;
      const offsetZ = (Math.random() - 0.5) * 3;
      const offsetY = (Math.random() - 0.5) * 2;
      
      subAnim.mesh.position.set(targetPos.x + offsetX, targetPos.y + offsetY, targetPos.z + offsetZ);
      
      const subScale = 4 + Math.random() * 4; // smaller scale
      subAnim.mesh.scale.set(subScale, subScale, 1);
      
      // Delay them
      subAnim.timer = -(0.05 + Math.random() * 0.15); // delay by 0.05 - 0.2 seconds
      
      SceneManager.effectsGroup.add(subAnim.mesh);
      this.activeSprites.push(subAnim);
    }

    // The core synchronization mechanic
    const peakFrame = type === 'blast' ? 2 : 3;
    anim.onFrameChange = (frame) => {
      if (frame === peakFrame && data && data.entityId !== undefined && data.targetFrame !== undefined) {
        // Execute the masked texture swap!
        DestructionSystem.executeTextureSwap(data.entityId, data.targetFrame);
      }
    };
  }

  private static spawnZonalExplosion(x: number, y: number, z: number, data: any) {
    const textures = this.blast360Textures; // Use 360 blast for zones for now
    if (textures.length === 0) return;

    const durations = [...BLAST360_FRAME_DURATIONS];
    const anim = this.getSprite(textures, false, durations);
    
    let targetPos = new THREE.Vector3(x, z + 1.2, y);
    if (data && data.entityId !== undefined) {
      const bPos = BuildingRenderer.getSpritePosition(data.entityId);
      const bScale = BuildingRenderer.getSpriteScale(data.entityId);
      if (bPos && bScale && data.uvCenter) {
        targetPos.copy(bPos);
        
        // Offset by UV center.
        // UV U (0->1) maps to X (-0.5 -> 0.5) * scaleX
        // UV V (0->1) maps to Y (0.5 -> -0.5) * scaleY (Assuming V=0 is top)
        const uvX = data.uvCenter.x - 0.5;
        const uvY = 0.5 - data.uvCenter.y;
        
        targetPos.x += uvX * bScale.x;
        targetPos.y += uvY * bScale.y;
        
        // Push slightly forward to avoid clipping
        targetPos.z += 0.5;
      }
    }
    
    anim.mesh.position.copy(targetPos);
    
    // Scale based on damage level (level 1 to 4)
    const baseScale = 8;
    const levelScale = data.level ? (baseScale + data.level * 2) : 10;
    anim.mesh.scale.set(levelScale, levelScale, 1);
    
    SceneManager.effectsGroup.add(anim.mesh);
    this.activeSprites.push(anim);
  }

  private static spawnFire(x: number, y: number, z: number, data: any) {
    const textures = this.fireTextures;
    if (textures.length === 0) return;

    const anim = this.getSprite(textures, false, [...FIRE_FRAME_DURATIONS]);
    
    let targetPos = new THREE.Vector3(x, z + 1, y); // default slightly above ground
    if (data && data.entityId !== undefined) {
      const bPos = BuildingRenderer.getSpritePosition(data.entityId);
      if (bPos) {
        targetPos.copy(bPos);
        // Slightly random jitter around building center
        targetPos.x += (Math.random() - 0.5) * 1.0;
        targetPos.y += (Math.random() - 0.2) * 1.5;
        targetPos.z += (Math.random() - 0.5) * 1.0;
      }
    }
    anim.mesh.position.copy(targetPos);
    const scale = 1.0 + Math.random() * 0.8; // very small size (1.0 to 1.8)
    anim.mesh.scale.set(scale, scale, 1);
    
    SceneManager.effectsGroup.add(anim.mesh);
    this.activeSprites.push(anim);
  }

  private static spawnLaser(sx: number, sy: number, sz: number, tx: number, ty: number, tz: number) {
    const points = [
      new THREE.Vector3(sx, sz, sy),
      new THREE.Vector3(tx, tz, ty)
    ];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
    const line = new THREE.Line(geometry, material);
    SceneManager.effectsGroup.add(line);

    setTimeout(() => {
      SceneManager.effectsGroup.remove(line);
      geometry.dispose();
      material.dispose();
    }, 80);
  }
}
