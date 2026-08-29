import * as THREE from 'three';
import { AnimatedSprite3D } from './AnimatedSprite3D';
import { SceneManager } from './SceneManager';
import { DestructionSystem, FXEvent } from '../systems/DestructionSystem';
import { AssetLoader } from '../assets/AssetLoader';
import { CameraController } from './CameraController';
import { BuildingRenderer } from './BuildingRenderer';
import { ParticleSimSystem } from '../systems/ParticleSimSystem';
import { DecalManager } from './TileSystem/DecalManager';

// --- FXRenderer Constants ---
const ZERO_VALUE = 0;
const HALF_OFFSET_CENTER = 0.5;
const RANDOM_CENTER_OFFSET = 0.5;

// Sprite Pool & Texture Count Constants
const BLAST_TEXTURE_COUNT = 11;
const BLAST360_TEXTURE_COUNT = 7;
const FIRE_TEXTURE_COUNT = 10;
const INACTIVE_SPRITE_POOL_SIZE = 50;

// Peak Frame Synchronization Constants
const PEAK_FRAME_BLAST = 2;
const PEAK_FRAME_BLAST360 = 3;

// Blast FX Geometry & Scale Constants
const BLAST_DEFAULT_ALTITUDE_OFFSET = 1.2;
const BLAST_Y_OFFSET_SCALE_FACTOR = 0.15;
const BLAST_MAIN_SCALE = 10;

// Sub-Explosion Constants
const SUB_EXPLOSION_COUNT = 2;
const SUB_EXPLOSION_XZ_JITTER = 3;
const SUB_EXPLOSION_Y_JITTER = 2;
const SUB_EXPLOSION_BASE_SCALE = 4;
const SUB_EXPLOSION_RANDOM_SCALE = 4;
const SUB_EXPLOSION_MIN_DELAY = 0.05;
const SUB_EXPLOSION_RANDOM_DELAY = 0.15;

// Zonal Explosion Constants
const ZONAL_EXPLOSION_Z_OFFSET = 0.5;
const ZONAL_BASE_SCALE = 8;
const ZONAL_LEVEL_SCALE_MULT = 2;
const ZONAL_DEFAULT_SCALE = 10;

// Fire FX Constants
const FIRE_DEFAULT_ALTITUDE_OFFSET = 1.0;
const FIRE_XZ_JITTER = 1.0;
const FIRE_Y_JITTER = 1.5;
const FIRE_Y_BASE_JITTER = 0.2;
const FIRE_BASE_SCALE = 1.0;
const FIRE_RANDOM_SCALE = 0.8;

// Laser FX Constants
const LASER_COLOR_HEX = 0x00ffff;
const LASER_LINE_WIDTH = 2;
const LASER_DURATION_MS = 80;

// Pre-defined easing curves for explosion animations
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

interface ImpactLight {
  light: THREE.PointLight;
  elapsed: number;
  duration: number;
}

interface Shockwave {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  elapsed: number;
  duration: number;
  maxRadius: number;
}

export class FXRenderer {
  private static activeSprites: AnimatedSprite3D[] = [];
  private static inactiveSprites: AnimatedSprite3D[] = [];
  private static activeImpactFlashes: ImpactLight[] = [];
  private static activeShockwaves: Shockwave[] = [];
  
  private static blastTextures: THREE.Texture[] = [];
  private static blast360Textures: THREE.Texture[] = [];
  private static fireTextures: THREE.Texture[] = [];

  public static preloadTextureArrays() {
    for (let i = ZERO_VALUE; i < BLAST_TEXTURE_COUNT; i++) {
      const tex = AssetLoader.getTexture(`fx_blast_${i}`);
      if (tex) this.blastTextures.push(tex);
    }
    for (let i = ZERO_VALUE; i < BLAST360_TEXTURE_COUNT; i++) {
      const tex = AssetLoader.getTexture(`fx_blast360_${i}`);
      if (tex) this.blast360Textures.push(tex);
    }
    for (let i = ZERO_VALUE; i < FIRE_TEXTURE_COUNT; i++) {
      const tex = AssetLoader.getTexture(`fx_fire_${i}`);
      if (tex) this.fireTextures.push(tex);
    }
    
    for (let i = ZERO_VALUE; i < INACTIVE_SPRITE_POOL_SIZE; i++) {
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
    while (DestructionSystem.fxQueue.length > ZERO_VALUE) {
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

    // 2. Tick dynamic impact lights (dimming over 100-200ms)
    for (let i = this.activeImpactFlashes.length - 1; i >= ZERO_VALUE; i--) {
      const flash = this.activeImpactFlashes[i];
      flash.elapsed += delta;
      if (flash.elapsed >= flash.duration) {
        SceneManager.effectsGroup.remove(flash.light);
        this.activeImpactFlashes.splice(i, 1);
      } else {
        const factor = 1.0 - (flash.elapsed / flash.duration);
        flash.light.intensity = factor * 10.0;
      }
    }

    // 3. Tick expanding ground shockwave rings (RingGeometry)
    for (let i = this.activeShockwaves.length - 1; i >= ZERO_VALUE; i--) {
      const sw = this.activeShockwaves[i];
      sw.elapsed += delta;
      if (sw.elapsed >= sw.duration) {
        SceneManager.effectsGroup.remove(sw.mesh);
        sw.mesh.geometry.dispose();
        sw.material.dispose();
        this.activeShockwaves.splice(i, 1);
      } else {
        const t = sw.elapsed / sw.duration;
        const radius = Math.max(0.1, t * sw.maxRadius);
        sw.mesh.scale.set(radius, radius, 1);
        sw.material.opacity = (1.0 - t) * 0.8;
      }
    }

    // 4. Tick active sprites
    for (let i = this.activeSprites.length - 1; i >= ZERO_VALUE; i--) {
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
    if (textures.length === ZERO_VALUE) return;

    const durations = type === 'blast' ? [...BLAST_FRAME_DURATIONS] : [...BLAST360_FRAME_DURATIONS];
    const anim = this.getSprite(textures, false, durations);
    
    // Position centering on the building sprite's visual position
    let targetPos = new THREE.Vector3(x, z + BLAST_DEFAULT_ALTITUDE_OFFSET, y);
    if (data && data.entityId !== undefined) {
      const bPos = BuildingRenderer.getSpritePosition(data.entityId);
      const bScale = BuildingRenderer.getSpriteScale(data.entityId);
      if (bPos) {
        targetPos.copy(bPos);
        if (bScale) {
          targetPos.y -= bScale.y * BLAST_Y_OFFSET_SCALE_FACTOR;
        }
      }
    }
    anim.mesh.position.copy(targetPos);
    anim.mesh.scale.set(BLAST_MAIN_SCALE, BLAST_MAIN_SCALE, 1);
    
    SceneManager.effectsGroup.add(anim.mesh);
    this.activeSprites.push(anim);

    // Impact FX Composite 1: Dynamic Point Light Flash (dimming over 100-200ms)
    const light = new THREE.PointLight(0xffaa44, 10, 20);
    light.position.copy(targetPos);
    SceneManager.effectsGroup.add(light);
    this.activeImpactFlashes.push({ light, elapsed: ZERO_VALUE, duration: 0.15 });

    // Impact FX Composite 2: Expanding Ground Shockwave Ring (RingGeometry)
    const ringGeo = new THREE.RingGeometry(0.8, 1.2, 16);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffcc88,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const shockwaveMesh = new THREE.Mesh(ringGeo, ringMat);
    shockwaveMesh.rotation.x = -Math.PI / 2;
    shockwaveMesh.position.set(targetPos.x, 0.05, targetPos.z);
    SceneManager.effectsGroup.add(shockwaveMesh);
    this.activeShockwaves.push({ mesh: shockwaveMesh, material: ringMat, elapsed: ZERO_VALUE, duration: 0.2, maxRadius: 12 });

    // Impact FX Composite 3 & 4: Instanced Debris Spray (THREE.InstancedMesh) & Permanent Ground Decal
    ParticleSimSystem.spawnBrickBurst(targetPos.x, targetPos.y, targetPos.z, 15);
    ParticleSimSystem.spawnSparkBurst(targetPos.x, targetPos.y, targetPos.z, 10);
    DecalManager.spawnDecal(targetPos.x, targetPos.z, 'scorch', 12);

    // Secondary explosions
    for (let i = ZERO_VALUE; i < SUB_EXPLOSION_COUNT; i++) {
      const subAnim = this.getSprite(textures, false, durations);
      const offsetX = (Math.random() - RANDOM_CENTER_OFFSET) * SUB_EXPLOSION_XZ_JITTER;
      const offsetZ = (Math.random() - RANDOM_CENTER_OFFSET) * SUB_EXPLOSION_XZ_JITTER;
      const offsetY = (Math.random() - RANDOM_CENTER_OFFSET) * SUB_EXPLOSION_Y_JITTER;
      
      subAnim.mesh.position.set(targetPos.x + offsetX, targetPos.y + offsetY, targetPos.z + offsetZ);
      
      const subScale = SUB_EXPLOSION_BASE_SCALE + Math.random() * SUB_EXPLOSION_RANDOM_SCALE;
      subAnim.mesh.scale.set(subScale, subScale, 1);
      
      // Delay them
      subAnim.timer = -(SUB_EXPLOSION_MIN_DELAY + Math.random() * SUB_EXPLOSION_RANDOM_DELAY);
      
      SceneManager.effectsGroup.add(subAnim.mesh);
      this.activeSprites.push(subAnim);
    }

    // The core synchronization mechanic
    const peakFrame = type === 'blast' ? PEAK_FRAME_BLAST : PEAK_FRAME_BLAST360;
    anim.onFrameChange = (frame) => {
      if (frame === peakFrame && data && data.entityId !== undefined && data.targetFrame !== undefined) {
        // Execute the masked texture swap!
        DestructionSystem.executeTextureSwap(data.entityId, data.targetFrame);
      }
    };
  }

  private static spawnZonalExplosion(x: number, y: number, z: number, data: any) {
    const textures = this.blast360Textures;
    if (textures.length === ZERO_VALUE) return;

    const durations = [...BLAST360_FRAME_DURATIONS];
    const anim = this.getSprite(textures, false, durations);
    
    let targetPos = new THREE.Vector3(x, z + BLAST_DEFAULT_ALTITUDE_OFFSET, y);
    if (data && data.entityId !== undefined) {
      const bPos = BuildingRenderer.getSpritePosition(data.entityId);
      const bScale = BuildingRenderer.getSpriteScale(data.entityId);
      if (bPos && bScale && data.uvCenter) {
        targetPos.copy(bPos);
        
        const uvX = data.uvCenter.x - HALF_OFFSET_CENTER;
        const uvY = HALF_OFFSET_CENTER - data.uvCenter.y;
        
        targetPos.x += uvX * bScale.x;
        targetPos.y += uvY * bScale.y;
        targetPos.z += ZONAL_EXPLOSION_Z_OFFSET;
      }
    }
    
    anim.mesh.position.copy(targetPos);
    
    const baseScale = ZONAL_BASE_SCALE;
    const levelScale = data.level ? (baseScale + data.level * ZONAL_LEVEL_SCALE_MULT) : ZONAL_DEFAULT_SCALE;
    anim.mesh.scale.set(levelScale, levelScale, 1);
    
    SceneManager.effectsGroup.add(anim.mesh);
    this.activeSprites.push(anim);

    // Synchronize building texture frame swap to peak explosion frame (frame 2)
    const peakFrame = PEAK_FRAME_BLAST;
    anim.onFrameChange = (frame) => {
      if (frame === peakFrame && data && data.entityId !== undefined && data.targetFrame !== undefined) {
        DestructionSystem.executeTextureSwap(data.entityId, data.targetFrame);
      }
    };
  }

  private static spawnFire(x: number, y: number, z: number, data: any) {
    const textures = this.fireTextures;
    if (textures.length === ZERO_VALUE) return;

    const anim = this.getSprite(textures, false, [...FIRE_FRAME_DURATIONS]);
    
    let targetPos = new THREE.Vector3(x, z + FIRE_DEFAULT_ALTITUDE_OFFSET, y);
    if (data && data.entityId !== undefined) {
      const bPos = BuildingRenderer.getSpritePosition(data.entityId);
      if (bPos) {
        targetPos.copy(bPos);
        targetPos.x += (Math.random() - RANDOM_CENTER_OFFSET) * FIRE_XZ_JITTER;
        targetPos.y += (Math.random() - FIRE_Y_BASE_JITTER) * FIRE_Y_JITTER;
        targetPos.z += (Math.random() - RANDOM_CENTER_OFFSET) * FIRE_XZ_JITTER;
      }
    }
    anim.mesh.position.copy(targetPos);
    const scale = FIRE_BASE_SCALE + Math.random() * FIRE_RANDOM_SCALE;
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
    const material = new THREE.LineBasicMaterial({ color: LASER_COLOR_HEX, linewidth: LASER_LINE_WIDTH });
    const line = new THREE.Line(geometry, material);
    SceneManager.effectsGroup.add(line);

    setTimeout(() => {
      SceneManager.effectsGroup.remove(line);
      geometry.dispose();
      material.dispose();
    }, LASER_DURATION_MS);
  }
}
