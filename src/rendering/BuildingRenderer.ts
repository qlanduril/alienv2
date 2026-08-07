import * as THREE from 'three';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, RenderStateComponent, HealthComponent, ZonalHealthComponent } from '../core/Components';
import { SceneManager } from './SceneManager';
import { AssetLoader } from '../assets/AssetLoader';
import { RaycasterHelper } from '../input/Raycaster';
import { UIOverlay } from './UIOverlay';
import { HitZoneManager } from './HitZoneManager';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { DamageCalc } from '../core/DamageCalc';
import { DestructionSystem } from '../systems/DestructionSystem';

// --- Rendering Constants ---
const HALF_DIVISOR = 2.0;
const ZERO_VALUE = 0;
const INITIAL_SCALE_UNIT = 1.0;
const DEFAULT_CANVAS_SIZE = 160;
const DEFAULT_BUILDING_KEY = '3';

// Trigonometry & Transform Constants
const COS_45_DEG = 0.70710678;
const SIN_45_DEG = 0.70710678;
const ISOMETRIC_ROTATION_Y = Math.PI / 4.0;
const RANDOM_CENTER_OFFSET = 0.5;

// Foundation Plinth Constants
const PLINTH_BOX_HEIGHT = 0.1;
const PLINTH_Z_ALTITUDE = 0.05;
const PLINTH_COLOR_HEX = 0x22262e;
const PLINTH_ROUGHNESS = 0.8;
const PLINTH_METALNESS = 0.1;
const PLINTH_POLYGON_OFFSET = -1;

// Sprite Material Constants
const SPRITE_MATERIAL_COLOR = 0xffffff;
const SPRITE_ALPHA_TEST = 0.5;
const SPRITE_ROUGHNESS = 0.6;
const SPRITE_PLANE_SIZE = 1.0;

// Trajectory & Collapse Physics Constants
const CRUSH_RANGE_DEFAULT = 64;
const CRUSH_MIN_DIST = 1.0;
const CRUSH_DOT_THRESHOLD = 0.4;
const LETHAL_CRUSH_DAMAGE = 9999;
const COLLAPSE_TILT_SPEED = 1.5;
const COLLAPSE_SINK_SPEED = 2.0;
const COLLAPSE_IMPACT_ANGLE = Math.PI / 2.5;
const RUBBLE_STAGE_FRAME = 14;

// Hit FX Micro-Transform Constants
const HEAVY_SHUDDER_DURATION = 0.2;
const HEAVY_SHUDDER_AMPLITUDE = 0.45;
const HEAVY_SQUASH_DURATION = 0.15;
const HEAVY_SQUASH_SCALE_X = 1.05;
const HEAVY_SQUASH_SCALE_Y = 0.92;
const HEAVY_FLASH_TIME = 0.075;
const HEAVY_FLASH_COLOR = 0xffffff;

const LIGHT_SQUASH_DURATION = 0.15;
const LIGHT_SQUASH_SCALE_X = 1.03;
const LIGHT_SQUASH_SCALE_Y = 0.95;
const LIGHT_FLASH_TIME = 0.04;
const LIGHT_FLASH_COLOR = 0xffeedd;

const SHUDDER_DECAY_RATE = 8;
const MAX_FRAME_CIVIC_DEFAULT = 71;
const MAX_FRAME_STANDARD_DEFAULT = 19;

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
  private static sharedGeometry = new THREE.PlaneGeometry(SPRITE_PLANE_SIZE, SPRITE_PLANE_SIZE);

  // Per-entity active effects
  private static hitFxMap = new Map<Entity, HitFX[]>();
  private static flashMap = new Map<Entity, FlashState>();
  
  // Cache for resolved texture & offsets
  private static lastFrameMap = new Map<Entity, number>();
  private static cachedTexture = new Map<Entity, THREE.Texture | null>();
  private static cachedOffset = new Map<Entity, any>();
  private static foundationPlinths = new Map<Entity, THREE.Mesh>();
  private static collapseMap = new Map<Entity, { tiltAngle: number; impactVector: THREE.Vector3 }>();

  public static triggerCollapse(entity: Entity, impactDir: THREE.Vector3) {
    if (!this.collapseMap.has(entity)) {
      this.collapseMap.set(entity, { tiltAngle: ZERO_VALUE, impactVector: impactDir.clone().normalize() });
    }
  }

  public static crushBuildingsInTrajectory(originPos: any, impactDir: THREE.Vector3, range: number = CRUSH_RANGE_DEFAULT) {
    for (const entity of ECS.entities) {
      const pos = PositionComponent.get(entity);
      const health = HealthComponent.get(entity);
      if (!pos || !health || health.currentHP <= ZERO_VALUE) continue;

      const dx = pos.worldX - originPos.worldX;
      const dz = pos.worldY - originPos.worldY;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist > CRUSH_MIN_DIST && dist <= range) {
        const dot = (dx * impactDir.x + dz * impactDir.z) / dist;
        if (dot > CRUSH_DOT_THRESHOLD) {
          DestructionSystem.applyDamage(entity, LETHAL_CRUSH_DAMAGE);
        }
      }
    }
  }

  public static getSpritePosition(entity: Entity): THREE.Vector3 | null {
    const sprite = this.sprites.get(entity);
    return sprite ? sprite.position.clone() : null;
  }

  public static getSpriteScale(entity: Entity): THREE.Vector3 | null {
    const sprite = this.sprites.get(entity);
    return sprite ? sprite.scale.clone() : null;
  }

  /**
   * Called by FXRenderer when it processes a hit_fx event or state swap.
   */
  public static applyHitFX(entity: Entity, intensity: 'light' | 'heavy') {
    let effects = this.hitFxMap.get(entity);
    if (!effects) {
      effects = [];
      this.hitFxMap.set(entity, effects);
    }

    if (intensity === 'heavy') {
      effects.push({
        type: 'shudder',
        elapsed: ZERO_VALUE,
        duration: HEAVY_SHUDDER_DURATION,
        amplitude: HEAVY_SHUDDER_AMPLITUDE
      });
      effects.push({
        type: 'squash',
        elapsed: ZERO_VALUE,
        duration: HEAVY_SQUASH_DURATION,
        scaleXMult: HEAVY_SQUASH_SCALE_X,
        scaleYMult: HEAVY_SQUASH_SCALE_Y
      });
      this.flashMap.set(entity, { timeLeft: HEAVY_FLASH_TIME, color: HEAVY_FLASH_COLOR });
      UIOverlay.triggerFlash();
    } else {
      effects.push({
        type: 'squash',
        elapsed: ZERO_VALUE,
        duration: LIGHT_SQUASH_DURATION,
        scaleXMult: LIGHT_SQUASH_SCALE_X,
        scaleYMult: LIGHT_SQUASH_SCALE_Y
      });
      this.flashMap.set(entity, { timeLeft: LIGHT_FLASH_TIME, color: LIGHT_FLASH_COLOR });
    }
  }

  public static tick(delta: number) {
    for (const entity of ECS.entities) {
      const renderState = RenderStateComponent.get(entity);
      const pos = PositionComponent.get(entity);

      if (!renderState || !pos) continue;

      const zonalHealth = ZonalHealthComponent.get(entity);
      if (zonalHealth) {
        const prefixMatch = renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
        const typeKey = prefixMatch ? prefixMatch[1] : DEFAULT_BUILDING_KEY;
        const maxFrame = typeKey === DEFAULT_BUILDING_KEY ? MAX_FRAME_CIVIC_DEFAULT : MAX_FRAME_STANDARD_DEFAULT;
        renderState.currentFrame = DamageCalc.computeFrameForZonalState(zonalHealth, maxFrame);
      }

      let sprite = this.sprites.get(entity);

      if (!sprite) {
        // 1. Create architectural foundation slab (plinth buffer) under building lot
        const prefixMatch = renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
        const typeKey = prefixMatch ? prefixMatch[1] : DEFAULT_BUILDING_KEY;
        const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS[DEFAULT_BUILDING_KEY];

        const padWidth = def.width;
        const padLength = def.length;

        const padGeo = new THREE.BoxGeometry(padWidth, PLINTH_BOX_HEIGHT, padLength);
        const padMat = new THREE.MeshStandardMaterial({
          color: PLINTH_COLOR_HEX,
          roughness: PLINTH_ROUGHNESS,
          metalness: PLINTH_METALNESS,
          polygonOffset: true,
          polygonOffsetFactor: PLINTH_POLYGON_OFFSET,
          polygonOffsetUnits: PLINTH_POLYGON_OFFSET
        });
        const padMesh = new THREE.Mesh(padGeo, padMat);
        padMesh.position.set(pos.worldX, PLINTH_Z_ALTITUDE, pos.worldY);
        padMesh.receiveShadow = true;

        SceneManager.groundGroup.add(padMesh);
        this.foundationPlinths.set(entity, padMesh);

        // 2. Use Mesh with PlaneGeometry to keep buildings standing upright vertically
        const material = new THREE.MeshStandardMaterial({ 
          color: SPRITE_MATERIAL_COLOR, 
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: true,
          alphaTest: SPRITE_ALPHA_TEST,
          roughness: SPRITE_ROUGHNESS
        });
        sprite = new THREE.Mesh(this.sharedGeometry, material);
        sprite.castShadow = true;
        sprite.receiveShadow = true;
        
        // Rotate 45 degrees around Y to face the isometric camera horizontally
        sprite.rotation.y = ISOMETRIC_ROTATION_Y;
        
        // Add to scene and register for raycasting
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
        const typeKey = prefixMatch ? prefixMatch[1] : DEFAULT_BUILDING_KEY;
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
      const typeKeyFinal = prefixMatchType ? prefixMatchType[1] : DEFAULT_BUILDING_KEY;
      const def = BUILDING_DEFS[typeKeyFinal] || BUILDING_DEFS[DEFAULT_BUILDING_KEY];
      const vScale = def.heightScale || def.visualScale || INITIAL_SCALE_UNIT;

      // 1. Lock pixel density to State 0 so world footprint remains rock-solid
      const state0Offset = AssetLoader.getSpriteOffset(typeKeyFinal, ZERO_VALUE);
      const state0Width = state0Offset ? state0Offset.w : (offset ? offset.w : (texture?.image?.width || DEFAULT_CANVAS_SIZE));

      const targetWorldWidth = def.width * Math.SQRT2;
      const PIXELS_PER_WORLD_UNIT = state0Width / targetWorldWidth;

      // 2. Compute current state dimensions & offsets
      const w = offset ? offset.w : (texture?.image?.width || DEFAULT_CANVAS_SIZE);
      const h = offset ? offset.h : (texture?.image?.height || DEFAULT_CANVAS_SIZE);
      const dx = offset ? offset.dx : -w / HALF_DIVISOR;
      const base_cy = offset ? (typeof offset.base_cy === 'number' ? offset.base_cy : (offset.y_max || h)) : h;

      const meshWidth = w / PIXELS_PER_WORLD_UNIT;
      const meshHeight = (h / PIXELS_PER_WORLD_UNIT) * vScale;

      // --- Compute scale with HitFX squash-stretch applied ---
      let scaleXMult = INITIAL_SCALE_UNIT;
      let scaleYMult = INITIAL_SCALE_UNIT;
      let shudderDX = ZERO_VALUE;
      let shudderDZ = ZERO_VALUE;

      const effects = this.hitFxMap.get(entity);
      if (effects) {
        for (let i = effects.length - 1; i >= ZERO_VALUE; i--) {
          const fx = effects[i];
          fx.elapsed += delta;

          if (fx.elapsed >= fx.duration) {
            effects.splice(i, 1);
            continue;
          }

          const t = fx.elapsed / fx.duration;

          if (fx.type === 'squash') {
            const strength = INITIAL_SCALE_UNIT - t;
            scaleXMult *= INITIAL_SCALE_UNIT + (fx.scaleXMult! - INITIAL_SCALE_UNIT) * strength;
            scaleYMult *= INITIAL_SCALE_UNIT + (fx.scaleYMult! - INITIAL_SCALE_UNIT) * strength;
          } else if (fx.type === 'shudder') {
            const decay = fx.amplitude! * Math.exp(-t * SHUDDER_DECAY_RATE);
            shudderDX += (Math.random() - RANDOM_CENTER_OFFSET) * HALF_DIVISOR * decay;
            shudderDZ += (Math.random() - RANDOM_CENTER_OFFSET) * HALF_DIVISOR * decay;
          }
        }

        if (effects.length === ZERO_VALUE) {
          this.hitFxMap.delete(entity);
        }
      }

      sprite.scale.set(meshWidth * scaleXMult, meshHeight * scaleYMult, INITIAL_SCALE_UNIT);

      // 3. Mathematical Pivot Solution: Lock (-dx, base_cy) to (worldX, 0, worldY)
      const pivotPxX = -dx - (w / HALF_DIVISOR);
      const distFromCenterToGroundPx = base_cy - (h / HALF_DIVISOR);

      const localOffsetX = pivotPxX / PIXELS_PER_WORLD_UNIT;
      const localOffsetY = (distFromCenterToGroundPx / PIXELS_PER_WORLD_UNIT) * vScale;

      const world_dx = localOffsetX * COS_45_DEG;
      const world_dz = -localOffsetX * SIN_45_DEG;
      const y_mesh = pos.worldZ + localOffsetY;

      // --- Collapse & Topple Physics ---
      const collapse = this.collapseMap.get(entity);
      if (collapse) {
        collapse.tiltAngle += delta * COLLAPSE_TILT_SPEED;

        // Rotate building mesh toward impact direction vector
        sprite.rotation.z = collapse.tiltAngle * collapse.impactVector.x;
        sprite.rotation.x = collapse.tiltAngle * collapse.impactVector.z;

        // Sink slightly into ground as it falls
        sprite.position.set(
          pos.worldX + world_dx + shudderDX,
          y_mesh - (collapse.tiltAngle * COLLAPSE_SINK_SPEED),
          pos.worldY + world_dz + shudderDZ
        );

        if (collapse.tiltAngle >= COLLAPSE_IMPACT_ANGLE) {
          // IMPACT GROUND: Spawn dust wave, crush surrounding tiles, swap to rubble
          this.crushBuildingsInTrajectory(pos, collapse.impactVector, CRUSH_RANGE_DEFAULT);
          this.collapseMap.delete(entity);

          // Force to rubble frame
          renderState.currentFrame = RUBBLE_STAGE_FRAME;
        }
      } else {
        sprite.rotation.z = ZERO_VALUE;
        sprite.rotation.x = ZERO_VALUE;
        sprite.position.set(
          pos.worldX + world_dx + shudderDX,
          y_mesh,
          pos.worldY + world_dz + shudderDZ
        );
      }

      // --- Hit flash ---
      const flash = this.flashMap.get(entity);
      if (flash) {
        material.color.setHex(flash.color);
        flash.timeLeft -= delta;
        if (flash.timeLeft <= ZERO_VALUE) {
          material.color.setHex(SPRITE_MATERIAL_COLOR);
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
