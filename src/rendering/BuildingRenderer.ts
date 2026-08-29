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

// Trigonometry & Transform Constants for 45-degree Cardboard Cutout Alignment
const COS_45_DEG = Math.SQRT1_2;
const SIN_45_DEG = Math.SQRT1_2;
const ISOMETRIC_ROTATION_Y = Math.PI / 4;
const ISOMETRIC_Y_COMPENSATION = Math.sqrt(1.5); // 1.22474487 - Compensates for orthographic 35.264° camera pitch foreshortening on vertical planes
const RANDOM_CENTER_OFFSET = 0.5;

// Manual Fine-Tuning Sprite Offsets (pixel offsets)
const GLOBAL_SPRITE_DX_OFFSET = 0;
const GLOBAL_SPRITE_DY_OFFSET = -250;

// Foundation Plinth Constants
const PLINTH_BOX_HEIGHT = 0.1;
const PLINTH_Z_ALTITUDE = 0.05;
const PLINTH_COLOR_HEX = 0x22262e;
const PLINTH_ROUGHNESS = 0.8;
const PLINTH_METALNESS = 0.1;
const PLINTH_POLYGON_OFFSET = -1;
const BUILDING_Y_ALTITUDE_OFFSET = 50;

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
  private static typeKeyCache = new Map<Entity, string>();
  private static pixelsPerWorldUnitCache = new Map<string, number>();
  private static foundationPlinths = new Map<Entity, THREE.Mesh>();
  private static collapseMap = new Map<Entity, { tiltAngle: number; impactVector: THREE.Vector3 }>();

  /**
   * Memoize typeKey extraction per entity to avoid regex execution every frame.
   */
  private static getTypeKey(entity: Entity, texturePrefix: string): string {
    let typeKey = this.typeKeyCache.get(entity);
    if (!typeKey) {
      const prefixMatch = texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
      typeKey = prefixMatch ? prefixMatch[1] : DEFAULT_BUILDING_KEY;
      this.typeKeyCache.set(entity, typeKey);
    }
    return typeKey;
  }

  /**
   * Memoize PIXELS_PER_WORLD_UNIT per building typeKey once asset offsets are loaded.
   */
  private static getPixelsPerWorldUnit(typeKey: string, offset: any, texture: THREE.Texture | null | undefined): number {
    let ppwu = this.pixelsPerWorldUnitCache.get(typeKey);
    if (ppwu === undefined) {
      const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS[DEFAULT_BUILDING_KEY];
      const state0Offset = AssetLoader.getSpriteOffset(typeKey, ZERO_VALUE);
      const targetWorldWidth = def.width * Math.SQRT2;
      if (state0Offset) {
        ppwu = state0Offset.w / targetWorldWidth;
        this.pixelsPerWorldUnitCache.set(typeKey, ppwu);
      } else {
        const fallbackWidth = offset ? offset.w : (texture?.image?.width || DEFAULT_CANVAS_SIZE);
        return fallbackWidth / targetWorldWidth;
      }
    }
    return ppwu;
  }

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
    // Iterate RenderStateComponent directly to skip non-building entities and map lookups
    for (const [entity, renderState] of RenderStateComponent.entries()) {
      const pos = PositionComponent.get(entity);

      if (!renderState || !pos) continue;

      const typeKey = this.getTypeKey(entity, renderState.texturePrefix);

      this.updateZonalFrame(entity, renderState, typeKey);

      const sprite = this.getOrCreateSprite(entity, pos, typeKey);
      const material = sprite.material as THREE.MeshStandardMaterial;

      const { texture, offset } = this.updateTextureAndOffset(entity, renderState, material, typeKey);
      const fx = this.processHitEffects(entity, delta);

      this.updateTransformAndPhysics(entity, sprite, pos, renderState, typeKey, offset, texture, delta, fx);
      this.processHitFlash(entity, material, delta);

      sprite.visible = renderState.visible;
      material.opacity = renderState.opacity;
    }

    this.cleanupDestroyedEntities();
  }

  public static BUILDING_MAX_FRAMES: Record<string, number> = {
    '1': 14,
    '2': 14,
    '3': 14,
    '4': 13,
    '5': 14,
    'b1': 3,
    'b2': 0,
    'b3': 3,
    'b4': 3,
    'res_bronze': 0,
    'res_sky': 0,
    'sky_artdeco': 0,
    'sky_biotech': 0,
    'sky_cyber': 3,
    'mega_titan': 3,
    'spaceship_hq': 6,
    'statue_liberty': 2,
    'pentagon_defense': 4,
    'hospital_civic': 4,
    'mall_shopping': 4,
    'school_civic': 4
  };

  private static updateZonalFrame(entity: Entity, renderState: any, typeKey: string) {
    const zonalHealth = ZonalHealthComponent.get(entity);
    if (zonalHealth) {
      const maxFrame = this.BUILDING_MAX_FRAMES[typeKey] ?? 14;
      renderState.currentFrame = DamageCalc.computeFrameForZonalState(zonalHealth, maxFrame);
    }
  }

  private static getOrCreateSprite(entity: Entity, pos: any, typeKey: string): THREE.Mesh {
    let sprite = this.sprites.get(entity);

    if (!sprite) {
      // 1. Create architectural foundation slab (plinth buffer) under building lot
      const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS[DEFAULT_BUILDING_KEY];

      const padGeo = new THREE.BoxGeometry(def.width, PLINTH_BOX_HEIGHT, def.length);
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

      // 2. Use Mesh with PlaneGeometry to keep buildings standing upright vertically on cityGroup layer
      const material = new THREE.MeshStandardMaterial({
        color: SPRITE_MATERIAL_COLOR,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: true,
        alphaTest: SPRITE_ALPHA_TEST,
        roughness: SPRITE_ROUGHNESS
      });
      sprite = new THREE.Mesh(this.sharedGeometry, material);
      sprite.castShadow = false;
      sprite.receiveShadow = false;

      // Rotate 45 degrees around Y to face the isometric camera horizontally
      sprite.rotation.y = ISOMETRIC_ROTATION_Y;

      // Add to SceneManager.cityGroup (same layer as all buildings)
      SceneManager.cityGroup.add(sprite);
      RaycasterHelper.registerObject(sprite, entity);

      this.sprites.set(entity, sprite);

      const zones = BUILDING_ZONES[typeKey];
      if (zones) {
        HitZoneManager.createZonesForBuilding(entity, sprite, zones);
      }
    }

    return sprite;
  }

  private static updateTextureAndOffset(entity: Entity, renderState: any, material: THREE.MeshStandardMaterial, typeKey: string) {
    let texture = this.cachedTexture.get(entity);
    let offset = this.cachedOffset.get(entity);
    const lastFrame = this.lastFrameMap.get(entity);

    if (lastFrame !== renderState.currentFrame || texture === undefined) {
      const textureName = `${renderState.texturePrefix}${renderState.currentFrame}`;
      texture = AssetLoader.getTexture(textureName);
      offset = AssetLoader.getSpriteOffset(typeKey, renderState.currentFrame);

      this.lastFrameMap.set(entity, renderState.currentFrame);
      this.cachedTexture.set(entity, texture);
      this.cachedOffset.set(entity, offset);

      if (texture && material.map !== texture) {
        material.map = texture;
        material.needsUpdate = true;
      }
    }

    return { texture, offset };
  }

  private static processHitEffects(entity: Entity, delta: number) {
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

    return { scaleXMult, scaleYMult, shudderDX, shudderDZ };
  }

  private static updateTransformAndPhysics(
    entity: Entity,
    sprite: THREE.Mesh,
    pos: any,
    renderState: any,
    typeKey: string,
    offset: any,
    texture: THREE.Texture | null | undefined,
    delta: number,
    fx: { scaleXMult: number; scaleYMult: number; shudderDX: number; shudderDZ: number }
  ) {
    // 1. Lock pixel density to State 0 so world footprint remains rock-solid (memoized per typeKey)
    const PIXELS_PER_WORLD_UNIT = this.getPixelsPerWorldUnit(typeKey, offset, texture);

    // 2. Compute current state dimensions & offsets
    const w = offset ? offset.w : (texture?.image?.width || DEFAULT_CANVAS_SIZE);
    const h = offset ? offset.h : (texture?.image?.height || DEFAULT_CANVAS_SIZE);
    const dx = (offset ? offset.dx : -w / HALF_DIVISOR) + GLOBAL_SPRITE_DX_OFFSET;
    const base_cy = (offset ? (typeof offset.base_cy === 'number' ? offset.base_cy : (offset.y_max || h)) : h) + GLOBAL_SPRITE_DY_OFFSET;

    const meshWidth = w / PIXELS_PER_WORLD_UNIT;
    const meshHeight = (h / PIXELS_PER_WORLD_UNIT) * ISOMETRIC_Y_COMPENSATION;

    sprite.scale.set(meshWidth * fx.scaleXMult, meshHeight * fx.scaleYMult, INITIAL_SCALE_UNIT);

    // 3. Mathematical Pivot Solution: Lock pixel (-dx, base_cy) to world origin (pos.worldX, 0, pos.worldY)
    const localPivotX = (-w / HALF_DIVISOR - dx) / PIXELS_PER_WORLD_UNIT;
    const localPivotY = ((h / HALF_DIVISOR - base_cy) / PIXELS_PER_WORLD_UNIT) * ISOMETRIC_Y_COMPENSATION;

    const world_dx = localPivotX * COS_45_DEG;
    const world_dz = -localPivotX * SIN_45_DEG;
    const y_mesh = pos.worldZ - localPivotY + BUILDING_Y_ALTITUDE_OFFSET;

    // 4. Collapse & Topple Physics
    const collapse = this.collapseMap.get(entity);
    if (collapse) {
      collapse.tiltAngle += delta * COLLAPSE_TILT_SPEED;

      // Rotate building mesh toward impact direction vector
      sprite.rotation.z = collapse.tiltAngle * collapse.impactVector.x;
      sprite.rotation.x = collapse.tiltAngle * collapse.impactVector.z;

      // Sink slightly into ground as it falls
      sprite.position.set(
        pos.worldX + world_dx + fx.shudderDX,
        y_mesh - (collapse.tiltAngle * COLLAPSE_SINK_SPEED),
        pos.worldY + world_dz + fx.shudderDZ
      );

      if (collapse.tiltAngle >= COLLAPSE_IMPACT_ANGLE) {
        // IMPACT GROUND: Spawn dust wave, crush surrounding tiles, swap to rubble
        this.crushBuildingsInTrajectory(pos, collapse.impactVector, CRUSH_RANGE_DEFAULT);
        this.collapseMap.delete(entity);

        // Force to rubble frame
        renderState.currentFrame = this.BUILDING_MAX_FRAMES[typeKey] ?? RUBBLE_STAGE_FRAME;
      }
    } else {
      sprite.rotation.z = ZERO_VALUE;
      sprite.rotation.x = ZERO_VALUE;
      sprite.position.set(
        pos.worldX + world_dx + fx.shudderDX,
        y_mesh,
        pos.worldY + world_dz + fx.shudderDZ
      );
    }
  }

  private static processHitFlash(entity: Entity, material: THREE.MeshStandardMaterial, delta: number) {
    const flash = this.flashMap.get(entity);
    if (flash) {
      material.color.setHex(flash.color);
      flash.timeLeft -= delta;
      if (flash.timeLeft <= ZERO_VALUE) {
        material.color.setHex(SPRITE_MATERIAL_COLOR);
        this.flashMap.delete(entity);
      }
    }
  }

  private static cleanupDestroyedEntities() {
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
        this.typeKeyCache.delete(entity);
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
    this.typeKeyCache.clear();
    this.pixelsPerWorldUnitCache.clear();
  }
}
