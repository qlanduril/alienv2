import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, RenderStateComponent } from '../core/Components';
import { SceneManager } from './SceneManager';
import { AssetLoader } from '../assets/AssetLoader';
import { RaycasterHelper } from '../input/Raycaster';
import { UIOverlay } from './UIOverlay';


// --- Hit FX micro-transform system ---
interface HitFX {
  type: 'squash' | 'shudder';
  elapsed: number;
  duration: number;
  amplitude?: number;        // for shudder
  scaleXMult?: number;       // for squash (peak multiplier)
  scaleYMult?: number;       // for squash (peak multiplier)
}

interface FlashState {
  timeLeft: number;
  color: number;
}

export class BuildingRenderer {
  private static sprites = new Map<Entity, THREE.Mesh>();
  private static sharedGeometry = new THREE.PlaneGeometry(1, 1);

  // Per-entity active effects
  private static hitFxMap = new Map<Entity, HitFX[]>();
  private static flashMap = new Map<Entity, FlashState>();
  
  // Cache for resolved texture & offsets
  private static lastFrameMap = new Map<Entity, number>();
  private static cachedTexture = new Map<Entity, THREE.Texture | null>();
  private static cachedOffset = new Map<Entity, any>();

  public static getSpritePosition(entity: Entity): THREE.Vector3 | null {
    const sprite = this.sprites.get(entity);
    return sprite ? sprite.position.clone() : null;
  }

  public static getSpriteScale(entity: Entity): THREE.Vector3 | null {
    const sprite = this.sprites.get(entity);
    return sprite ? sprite.scale.clone() : null;
  }

  /**
   * Called by FXRenderer when it processes a hit_fx event.
   */
  public static applyHitFX(entity: Entity, intensity: 'light' | 'heavy') {
    // Get or create the effects list for this entity
    let effects = this.hitFxMap.get(entity);
    if (!effects) {
      effects = [];
      this.hitFxMap.set(entity, effects);
    }

    if (intensity === 'heavy') {
      // Shudder: high-frequency jitter for 200ms
      effects.push({
        type: 'shudder',
        elapsed: 0,
        duration: 0.2,
        amplitude: 0.3
      });
      // Also squash
      effects.push({
        type: 'squash',
        elapsed: 0,
        duration: 0.15,
        scaleXMult: 1.12,
        scaleYMult: 0.82
      });
      // White flash
      this.flashMap.set(entity, { timeLeft: 0.06, color: 0xffffff });
      UIOverlay.triggerFlash();
    } else {
      // Light squash only
      effects.push({
        type: 'squash',
        elapsed: 0,
        duration: 0.12,
        scaleXMult: 1.08,
        scaleYMult: 0.88
      });
      // Warm flash
      this.flashMap.set(entity, { timeLeft: 0.03, color: 0xffccaa });
    }
  }

  public static tick(delta: number) {
    for (const entity of ECS.entities) {
      const renderState = RenderStateComponent.get(entity);
      const pos = PositionComponent.get(entity);

      if (!renderState || !pos) continue;

      let sprite = this.sprites.get(entity);

      if (!sprite) {
        // Use Mesh with PlaneGeometry to keep buildings standing upright vertically
        const material = new THREE.MeshBasicMaterial({ 
          color: 0xffffff, 
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        sprite = new THREE.Mesh(this.sharedGeometry, material);
        
        // Rotate 45 degrees (Math.PI / 4) around Y to face the isometric camera horizontally
        sprite.rotation.y = Math.PI / 4;
        
        // Add to scene and register for raycasting
        SceneManager.cityGroup.add(sprite);
        RaycasterHelper.registerObject(sprite, entity);
        
        this.sprites.set(entity, sprite);
      }

      const material = sprite.material as THREE.MeshBasicMaterial;

      let texture = this.cachedTexture.get(entity);
      let offset = this.cachedOffset.get(entity);
      const lastFrame = this.lastFrameMap.get(entity);

      if (lastFrame !== renderState.currentFrame || texture === undefined) {
        const textureName = `${renderState.texturePrefix}${renderState.currentFrame}`;
        texture = AssetLoader.getTexture(textureName);
        
        const prefixMatch = renderState.texturePrefix.match(/building_(\d+)_stage_/);
        const typeKey = prefixMatch ? prefixMatch[1] : '3';
        offset = AssetLoader.getSpriteOffset(typeKey, renderState.currentFrame);
        
        this.lastFrameMap.set(entity, renderState.currentFrame);
        this.cachedTexture.set(entity, texture);
        this.cachedOffset.set(entity, offset);
        
        if (texture && material.map !== texture) {
          material.map = texture;
          material.needsUpdate = true;
        }
      }

      let width = 2.5;
      let height = 2.5;
      let dx = -width * 64 / 2;

      if (offset) {
        width = offset.w / 64;
        height = offset.h / 64;
        dx = offset.dx;
      } else if (texture && texture.image) {
        width = texture.image.width / 64;
        height = texture.image.height / 64;
        dx = -texture.image.width / 2;
      }

      // --- Compute scale with HitFX squash-stretch applied ---
      let scaleXMult = 1;
      let scaleYMult = 1;
      let shudderDX = 0;
      let shudderDZ = 0;

      const effects = this.hitFxMap.get(entity);
      if (effects) {
        for (let i = effects.length - 1; i >= 0; i--) {
          const fx = effects[i];
          fx.elapsed += delta;

          if (fx.elapsed >= fx.duration) {
            effects.splice(i, 1);
            continue;
          }

          // Normalized progress 0→1
          const t = fx.elapsed / fx.duration;

          if (fx.type === 'squash') {
            // Ease out: strongest at start, snaps back to 1.0
            const strength = 1 - t;
            scaleXMult *= 1 + (fx.scaleXMult! - 1) * strength;
            scaleYMult *= 1 + (fx.scaleYMult! - 1) * strength;
          } else if (fx.type === 'shudder') {
            // Exponentially decaying high-frequency random jitter
            const decay = fx.amplitude! * Math.exp(-t * 8);
            shudderDX += (Math.random() - 0.5) * 2 * decay;
            shudderDZ += (Math.random() - 0.5) * 2 * decay;
          }
        }

        // Cleanup empty arrays
        if (effects.length === 0) {
          this.hitFxMap.delete(entity);
        }
      }

      sprite.scale.set(width * scaleXMult, height * scaleYMult, 1);

      // Horizontal displacement to center the visual weight (centroid)
      const geom_tx = (dx + (offset ? offset.w : width * 64) / 2) / 64;

      const cos45 = 0.70710678;
      const sin45 = 0.70710678;

      const world_dx = geom_tx * cos45;
      const world_dz = -geom_tx * sin45;

      // Calculate the vertical offset so the bottom-most active pixel (y_max)
      // sits exactly on the ground plane (pos.worldZ).
      let y_mesh = pos.worldZ + height / 2;
      let dy_base = 0;
      if (offset && typeof offset.y_max === 'number') {
        const h_pixels = offset.h;
        y_mesh = pos.worldZ + (offset.y_max - h_pixels / 2) / 64;
        
        if (typeof offset.base_cy === 'number') {
          dy_base = (offset.y_max - offset.base_cy) / 64;
        }
      }

      sprite.position.set(
        pos.worldX + dy_base + world_dx + shudderDX,
        y_mesh,
        pos.worldY + dy_base + world_dz + shudderDZ
      );

      // --- Hit flash ---
      const flash = this.flashMap.get(entity);
      if (flash) {
        material.color.setHex(flash.color);
        flash.timeLeft -= delta;
        if (flash.timeLeft <= 0) {
          material.color.setHex(0xffffff);
          this.flashMap.delete(entity);
        }
      }

      sprite.visible = renderState.visible;
      material.opacity = renderState.opacity;
    }

    // Cleanup destroyed entities
    for (const [entity, sprite] of this.sprites.entries()) {
      if (!ECS.entities.has(entity) || !RenderStateComponent.has(entity)) {
        SceneManager.cityGroup.remove(sprite);
        if (Array.isArray(sprite.material)) {
          sprite.material.forEach(m => m.dispose());
        } else {
          sprite.material.dispose();
        }
        this.sprites.delete(entity);
        this.hitFxMap.delete(entity);
        this.flashMap.delete(entity);
        this.lastFrameMap.delete(entity);
        this.cachedTexture.delete(entity);
        this.cachedOffset.delete(entity);
      }
    }
  }
}
