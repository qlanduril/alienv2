import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, RenderStateComponent } from '../core/Components';
import { SceneManager } from './SceneManager';
import { AssetLoader } from '../assets/AssetLoader';
import { RaycasterHelper } from '../input/Raycaster';
import { UIOverlay } from './UIOverlay';
import { HitZoneManager } from './HitZoneManager';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { ZonalHealthComponent } from '../core/Components';
import { DamageCalc } from '../core/DamageCalc';


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
  private static foundationPlinths = new Map<Entity, THREE.Mesh>();

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
      effects.push({
        type: 'shudder',
        elapsed: 0,
        duration: 0.2,
        amplitude: 0.3
      });
      effects.push({
        type: 'squash',
        elapsed: 0,
        duration: 0.15,
        scaleXMult: 1.12,
        scaleYMult: 0.82
      });
      this.flashMap.set(entity, { timeLeft: 0.06, color: 0xffffff });
      UIOverlay.triggerFlash();
    } else {
      effects.push({
        type: 'squash',
        elapsed: 0,
        duration: 0.12,
        scaleXMult: 1.08,
        scaleYMult: 0.88
      });
      this.flashMap.set(entity, { timeLeft: 0.03, color: 0xffccaa });
    }
  }

  public static tick(delta: number) {
    for (const entity of ECS.entities) {
      const renderState = RenderStateComponent.get(entity);
      const pos = PositionComponent.get(entity);

      if (!renderState || !pos) continue;

      const zonalHealth = ZonalHealthComponent.get(entity);
      if (zonalHealth) {
        // maxFrame for building 3 is 71, building 1 is 19. Let's infer from texturePrefix
        const prefixMatch = renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
        const typeKey = prefixMatch ? prefixMatch[1] : '3';
        const maxFrame = typeKey === '3' ? 71 : 19;
        renderState.currentFrame = DamageCalc.computeFrameForZonalState(zonalHealth, maxFrame);
      }

      let sprite = this.sprites.get(entity);

      if (!sprite) {
        // 1. Create architectural foundation slab (plinth buffer) under building lot
        const prefixMatch = renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
        const typeKey = prefixMatch ? prefixMatch[1] : '3';
        const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

        const padWidth = def.width;
        const padLength = def.length;

        const padGeo = new THREE.BoxGeometry(padWidth, 0.1, padLength);
        const padMat = new THREE.MeshStandardMaterial({
          color: 0x22262e,
          roughness: 0.8,
          metalness: 0.1,
          polygonOffset: true,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -1
        });
        const padMesh = new THREE.Mesh(padGeo, padMat);
        padMesh.position.set(pos.worldX, 0.05, pos.worldY);
        padMesh.receiveShadow = true;

        SceneManager.groundGroup.add(padMesh);
        this.foundationPlinths.set(entity, padMesh);

        // 2. Use Mesh with PlaneGeometry to keep buildings standing upright vertically
        const material = new THREE.MeshStandardMaterial({ 
          color: 0xffffff, 
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: true,
          alphaTest: 0.5,
          roughness: 0.6
        });
        sprite = new THREE.Mesh(this.sharedGeometry, material);
        sprite.castShadow = true;
        sprite.receiveShadow = true;
        
        // Rotate 45 degrees (Math.PI / 4) around Y to face the isometric camera horizontally
        sprite.rotation.y = Math.PI / 4;
        
        // Add to scene and register for raycasting (legacy fallback if needed)
        SceneManager.cityGroup.add(sprite);
        RaycasterHelper.registerObject(sprite, entity);
        
        this.sprites.set(entity, sprite);

        const zones = BUILDING_ZONES[typeKey];
        if (zones) {
          HitZoneManager.createZonesForBuilding(entity, sprite, zones);
        }
      }

      const material = sprite.material as THREE.MeshStandardMaterial;

      let texture = this.cachedTexture.get(entity);
      let offset = this.cachedOffset.get(entity);
      const lastFrame = this.lastFrameMap.get(entity);

      if (lastFrame !== renderState.currentFrame || texture === undefined) {
        const textureName = `${renderState.texturePrefix}${renderState.currentFrame}`;
        texture = AssetLoader.getTexture(textureName);
        
        const prefixMatch = renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
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

      const prefixMatchType = renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
      const typeKeyFinal = prefixMatchType ? prefixMatchType[1] : '3';
      const def = BUILDING_DEFS[typeKeyFinal] || BUILDING_DEFS['3'];
      const vScale = def.heightScale || def.visualScale || 1.0;

      // 1. Lock pixel density to State 0 so world footprint remains rock-solid
      const state0Offset = AssetLoader.getSpriteOffset(typeKeyFinal, 0);
      const state0Width = state0Offset ? state0Offset.w : (offset ? offset.w : (texture?.image?.width || 160));

      const targetWorldWidth = def.width * Math.SQRT2;
      const PIXELS_PER_WORLD_UNIT = state0Width / targetWorldWidth;

      // 2. Compute current state dimensions & offsets
      const w = offset ? offset.w : (texture?.image?.width || 160);
      const h = offset ? offset.h : (texture?.image?.height || 160);
      const dx = offset ? offset.dx : -w / 2;
      const base_cy = offset ? (typeof offset.base_cy === 'number' ? offset.base_cy : (offset.y_max || h)) : h;

      const meshWidth = w / PIXELS_PER_WORLD_UNIT;
      const meshHeight = (h / PIXELS_PER_WORLD_UNIT) * vScale;

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

          const t = fx.elapsed / fx.duration;

          if (fx.type === 'squash') {
            const strength = 1 - t;
            scaleXMult *= 1 + (fx.scaleXMult! - 1) * strength;
            scaleYMult *= 1 + (fx.scaleYMult! - 1) * strength;
          } else if (fx.type === 'shudder') {
            const decay = fx.amplitude! * Math.exp(-t * 8);
            shudderDX += (Math.random() - 0.5) * 2 * decay;
            shudderDZ += (Math.random() - 0.5) * 2 * decay;
          }
        }

        if (effects.length === 0) {
          this.hitFxMap.delete(entity);
        }
      }

      sprite.scale.set(meshWidth * scaleXMult, meshHeight * scaleYMult, 1);

      // 3. Mathematical Pivot Solution: Lock (-dx, base_cy) to (worldX, 0, worldY)
      const pivotPxX = -dx - (w / 2.0);
      const distFromCenterToGroundPx = base_cy - (h / 2.0);

      const localOffsetX = pivotPxX / PIXELS_PER_WORLD_UNIT;
      const localOffsetY = (distFromCenterToGroundPx / PIXELS_PER_WORLD_UNIT) * vScale;

      const cos45 = 0.70710678;
      const sin45 = 0.70710678;

      const world_dx = localOffsetX * cos45;
      const world_dz = -localOffsetX * sin45;
      const y_mesh = pos.worldZ + localOffsetY;

      sprite.position.set(
        pos.worldX + world_dx + shudderDX,
        y_mesh,
        pos.worldY + world_dz + shudderDZ
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
        const plinth = this.foundationPlinths.get(entity);
        if (plinth) {
          SceneManager.groundGroup.remove(plinth);
          plinth.geometry.dispose();
          if (Array.isArray(plinth.material)) {
            plinth.material.forEach(m => m.dispose());
          } else {
            plinth.material.dispose();
          }
          this.foundationPlinths.delete(entity);
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

  public static clearAll() {
    for (const [, sprite] of this.sprites.entries()) {
      SceneManager.cityGroup.remove(sprite);
      if (Array.isArray(sprite.material)) {
        sprite.material.forEach(m => m.dispose());
      } else {
        sprite.material.dispose();
      }
    }
    for (const [, plinth] of this.foundationPlinths.entries()) {
      SceneManager.groundGroup.remove(plinth);
      plinth.geometry.dispose();
      if (Array.isArray(plinth.material)) {
        plinth.material.forEach(m => m.dispose());
      } else {
        plinth.material.dispose();
      }
    }
    this.sprites.clear();
    this.foundationPlinths.clear();
    this.hitFxMap.clear();
    this.flashMap.clear();
    this.lastFrameMap.clear();
    this.cachedTexture.clear();
    this.cachedOffset.clear();
  }
}
