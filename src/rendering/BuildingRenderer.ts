import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { ECS, Entity } from '../core/ECS';
import { PositionComponent, RenderStateComponent, HealthComponent, ZonalHealthComponent } from '../core/Components';
import { SceneManager } from './SceneManager';
import { AssetLoader } from '../assets/AssetLoader';
import { RaycasterHelper } from '../input/Raycaster';
import { UIOverlay } from './UIOverlay';
import { HitZoneManager } from './HitZoneManager';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { DestructionSystem } from '../systems/DestructionSystem';

// --- Rendering Constants ---
const HALF_DIVISOR = 2.0;
const ZERO_VALUE = 0;
const INITIAL_SCALE_UNIT = 1.0;
const DEFAULT_CANVAS_SIZE = 160;
const DEFAULT_BUILDING_KEY = '3';

// Universal Texel Density Constant (Pixels Per Meter / World Unit)
export const GLOBAL_PPM = 25.0;

// Trigonometry & Transform Constants for 45-degree Cardboard Cutout Alignment
const COS_45_DEG = Math.SQRT1_2;
const SIN_45_DEG = Math.SQRT1_2;
const ISOMETRIC_ROTATION_Y = Math.PI / 4;
// Compensates for the orthographic 35.264° camera pitch foreshortening on vertical sprite planes.
// Without this, the pivot math places building bases below the ground plane.
const ISOMETRIC_Y_COMPENSATION = Math.sqrt(1.5); // 1.22474487 ≈ 1/cos(35.264°)
const RANDOM_CENTER_OFFSET = 0.5;

// Manual Fine-Tuning Sprite Offsets (pixel offsets)
const GLOBAL_SPRITE_DX_OFFSET = 0;
const GLOBAL_SPRITE_DY_OFFSET = 0;

// Vertical Lift to keep sprite base strictly above ground tiles (preventing GPU depth clipping)
const BUILDING_BASE_LIFT = 0.2;

const SPRITE_PLANE_SIZE = 1.0;

/**
 * Correct isometric depth calculation for camera at (+X, +Y, +Z).
 * Sorts strictly by ground-plane footprint distance (worldX + worldZ).
 * NEVER uses worldY (altitude) — tall buildings must NOT outrank closer shorter ones.
 */
export function calculateIsoOrder(worldX: number, worldZ: number): number {
  // Objects with larger (worldX + worldZ) are closer to the isometric camera and render later
  const depthValue = Math.floor((worldX + worldZ) * 0.5);
  return Math.min(600, Math.max(10, 10 + depthValue));
}


// Trajectory & Collapse Physics Constants
const CRUSH_RANGE_DEFAULT = 64;
const CRUSH_MIN_DIST = 1.0;
const CRUSH_DOT_THRESHOLD = 0.4;
const LETHAL_CRUSH_DAMAGE = 9999;
const COLLAPSE_TILT_SPEED = 1.5;
const COLLAPSE_SINK_SPEED = 2.0;
const COLLAPSE_IMPACT_ANGLE = Math.PI / 2.5;
const RUBBLE_STAGE_FRAME = 14;

// 150ms Visual Juice & Flinch Pipeline Constants
const FLINCH_DURATION = 0.15;           // 150ms transition pipeline
const HEAVY_FLINCH_SCALE_X = 1.05;       // Expand X by 5%
const HEAVY_FLINCH_SCALE_Y = 0.92;       // Compress Y by 8%
const HEAVY_SHUDDER_AMPLITUDE = 0.45;
const HEAVY_FLASH_TIME = 0.15;           // Emissive flash synced to 150ms pipeline
const HEAVY_FLASH_COLOR = 0xffffff;

const LIGHT_FLINCH_SCALE_X = 1.025;
const LIGHT_FLINCH_SCALE_Y = 0.96;
const LIGHT_FLASH_TIME = 0.08;
const LIGHT_FLASH_COLOR = 0xffeedd;

const SHUDDER_DECAY_RATE = 8;
const SPRING_BOUNCE_FREQUENCY = Math.PI * 2 * 3; // Spring bounce frequency

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

interface AnimData3D {
  actions: THREE.AnimationAction[];
  maxDuration: number;
}

interface BlendState {
  texA: THREE.Texture | null;
  texB: THREE.Texture | null;
  mixRatio: number;
  isBlending: boolean;
}

const BUILDING_VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const BUILDING_FRAGMENT_SHADER = `
  uniform sampler2D mapA;
  uniform sampler2D mapB;
  uniform float mixRatio;
  uniform vec3 flashColor;
  uniform float flashIntensity;
  uniform float opacity;

  varying vec2 vUv;

  void main() {
    vec4 colA = texture2D(mapA, vUv);
    vec4 colB = texture2D(mapB, vUv);

    vec4 blended = mix(colA, colB, mixRatio);

    if (blended.a < 0.05) discard;

    vec3 finalColor = mix(blended.rgb, flashColor, flashIntensity);

    gl_FragColor = vec4(finalColor, blended.a * opacity);
  }
`;

export class BuildingRenderer {
  private static sprites = new Map<Entity, THREE.Mesh>();
  private static models3D = new Map<Entity, THREE.Object3D>();
  private static mixers = new Map<Entity, THREE.AnimationMixer>();
  private static animActions = new Map<Entity, AnimData3D>();
  private static dummyHitSprites = new Map<Entity, THREE.Mesh>();
  private static sharedGeometry = new THREE.PlaneGeometry(SPRITE_PLANE_SIZE, SPRITE_PLANE_SIZE);

  // Per-entity active effects
  private static hitFxMap = new Map<Entity, HitFX[]>();
  private static flashMap = new Map<Entity, FlashState>();
  private static blendMap = new Map<Entity, BlendState>();

  // Cache for resolved texture, offsets, and building type info
  private static lastFrameMap = new Map<Entity, number>();
  private static cachedTexture = new Map<Entity, THREE.Texture | null>();
  private static cachedOffset = new Map<Entity, any>();
  private static cachedTypeKey = new Map<Entity, string>();
  private static cachedDef = new Map<Entity, any>();
  private static collapseMap = new Map<Entity, { tiltAngle: number; impactVector: THREE.Vector3 }>();

  // Smooth 2D frame interpolation & 3D real-time demolition state
  private static FRAME_STEP_SPEED = 10.0;
  private static displayFrameMap = new Map<Entity, number>();
  private static demoStateMap = new Map<Entity, { isDemolishing: boolean; elapsedTime: number; maxDuration: number }>();

  /**
   * Helper to resolve typeKey and def with caching per entity.
   * Avoids running regex match on texturePrefix every frame in tick().
   */
  public static getTypeInfo(entity: Entity, texturePrefix: string): { typeKey: string; def: any } {
    let typeKey = this.cachedTypeKey.get(entity);
    let def = this.cachedDef.get(entity);

    if (!typeKey || !def) {
      const prefixMatch = texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
      typeKey = prefixMatch ? prefixMatch[1] : DEFAULT_BUILDING_KEY;
      def = BUILDING_DEFS[typeKey] || BUILDING_DEFS[DEFAULT_BUILDING_KEY];

      this.cachedTypeKey.set(entity, typeKey);
      this.cachedDef.set(entity, def);
    }

    return { typeKey, def };
  }

  public static triggerCollapse(entity: Entity, impactDir: THREE.Vector3) {
    if (!this.collapseMap.has(entity)) {
      this.collapseMap.set(entity, { tiltAngle: ZERO_VALUE, impactVector: impactDir.clone().normalize() });
    }
  }

  public static crushBuildingsInTrajectory(originPos: any, impactDir: THREE.Vector3, range: number = CRUSH_RANGE_DEFAULT) {
    for (const entity of RenderStateComponent.keys()) {
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
    const model = this.models3D.get(entity);
    if (model) return model.position.clone();
    const sprite = this.sprites.get(entity);
    return sprite ? sprite.position.clone() : null;
  }

  public static getSpriteScale(entity: Entity): THREE.Vector3 | null {
    const model = this.models3D.get(entity);
    if (model) return model.scale.clone();
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
        duration: FLINCH_DURATION,
        amplitude: HEAVY_SHUDDER_AMPLITUDE
      });
      effects.push({
        type: 'squash',
        elapsed: ZERO_VALUE,
        duration: FLINCH_DURATION,
        scaleXMult: HEAVY_FLINCH_SCALE_X,
        scaleYMult: HEAVY_FLINCH_SCALE_Y
      });
      this.flashMap.set(entity, { timeLeft: HEAVY_FLASH_TIME, color: HEAVY_FLASH_COLOR });
      UIOverlay.triggerFlash();
    } else {
      effects.push({
        type: 'squash',
        elapsed: ZERO_VALUE,
        duration: FLINCH_DURATION,
        scaleXMult: LIGHT_FLINCH_SCALE_X,
        scaleYMult: LIGHT_FLINCH_SCALE_Y
      });
      this.flashMap.set(entity, { timeLeft: LIGHT_FLASH_TIME, color: LIGHT_FLASH_COLOR });
    }
  }

  public static tick(delta: number) {
    for (const entity of RenderStateComponent.keys()) {
      const renderState = RenderStateComponent.get(entity);
      const pos = PositionComponent.get(entity);

      if (!renderState || !pos) continue;

      const { typeKey, def } = this.getTypeInfo(entity, renderState.texturePrefix);

      if (def && def.is3D) {
        const rendered3D = this.update3DBuilding(entity, renderState, pos, typeKey, def, delta);
        if (rendered3D) continue;
      }

      this.updateZonalFrame(entity, renderState, delta);

      const sprite = this.getOrCreateSprite(entity, renderState, pos);
      const material = sprite.material as THREE.ShaderMaterial;

      const { texture, offset } = this.updateTextureAndOffset(entity, renderState, material, delta);
      const fx = this.processHitEffects(entity, delta);

      this.updateTransformAndPhysics(entity, sprite, pos, renderState, typeKey, offset, texture, delta, fx);
      this.processHitFlash(entity, material, delta);

      sprite.visible = renderState.visible;
      material.uniforms.opacity.value = renderState.opacity;
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
    'b2': 3,
    'b3': 3,
    'b4': 3,
    'res_bronze': 3,
    'res_sky': 3,
    'sky_artdeco': 3,
    'sky_biotech': 3,
    'sky_cyber': 3,
    'mega_titan': 3,
    'spaceship_hq': 6,
    'statue_liberty': 2,
    'pentagon_defense': 4,
    'hospital_civic': 4,
    'mall_shopping': 4,
    'school_civic': 4
  };

  private static updateZonalFrame(entity: Entity, renderState: any, delta: number) {
    const zonal = ZonalHealthComponent.get(entity);
    const health = HealthComponent.get(entity);
    const curHp = zonal ? zonal.totalHp : (health ? health.currentHP : 100);
    const maxHp = zonal ? zonal.maxTotalHp : (health ? health.maxHP : 100);

    const { typeKey } = this.getTypeInfo(entity, renderState.texturePrefix);
    const maxFrame = this.BUILDING_MAX_FRAMES[typeKey] ?? 14;

    const dmgFraction = Math.max(0, Math.min(1, 1 - curHp / maxHp));
    const targetFrame = Math.min(Math.floor(dmgFraction * maxFrame), maxFrame);

    let displayFrame = this.displayFrameMap.get(entity) ?? renderState.currentFrame ?? 0;

    if (displayFrame < targetFrame) {
      const prevInt = Math.floor(displayFrame);
      displayFrame = Math.min(targetFrame, displayFrame + delta * this.FRAME_STEP_SPEED);
      this.displayFrameMap.set(entity, displayFrame);
      const nextInt = Math.floor(displayFrame);

      renderState.currentFrame = nextInt;

      // Mask frame transition behind micro explosion/smoke when crossing integer boundary
      if (nextInt > prevInt) {
        const pos = PositionComponent.get(entity);
        if (pos) {
          DestructionSystem.fxQueue.push({
            type: 'smoke',
            x: pos.worldX, y: pos.worldY, z: pos.worldZ,
            data: { count: 3, entityId: entity }
          });
        }
      }
    }
  }

  private static getOrCreateSprite(entity: Entity, renderState: any, pos: any): THREE.Mesh {
    let sprite = this.sprites.get(entity);

    if (!sprite) {
      // ShaderMaterial for 2D building sprites: cross-dissolves between texture stages seamlessly
      const material = new THREE.ShaderMaterial({
        vertexShader: BUILDING_VERTEX_SHADER,
        fragmentShader: BUILDING_FRAGMENT_SHADER,
        uniforms: {
          mapA: { value: null },
          mapB: { value: null },
          mixRatio: { value: 0.0 },
          flashColor: { value: new THREE.Color(0xffffff) },
          flashIntensity: { value: 0.0 },
          opacity: { value: 1.0 }
        },
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        depthTest: false
      });
      sprite = new THREE.Mesh(this.sharedGeometry, material);
      sprite.castShadow = false;
      sprite.receiveShadow = false;

      // Rotate 45 degrees around Y to face the isometric camera horizontally
      sprite.rotation.y = ISOMETRIC_ROTATION_Y;

      // 2.5D Isometric Back-to-Front Painter's Order:
      // Sort strictly by ground-plane footprint (worldX + worldZ). Never use building height.
      // pos.worldY stores Three.js Z-depth in this ECS convention.
      // Capped at 600 so UFO (9999), Shadow Ring (800), and FX (2000) render strictly on top.
      const isoOrder = calculateIsoOrder(pos.worldX, pos.worldY);
      sprite.renderOrder = isoOrder;

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

  private static updateTextureAndOffset(entity: Entity, renderState: any, material: THREE.ShaderMaterial, delta: number) {
    let texture = this.cachedTexture.get(entity);
    let offset = this.cachedOffset.get(entity);
    const lastFrame = this.lastFrameMap.get(entity);

    const { typeKey } = this.getTypeInfo(entity, renderState.texturePrefix);

    let blendState = this.blendMap.get(entity);
    if (!blendState) {
      const textureName = `${renderState.texturePrefix}${renderState.currentFrame}`;
      const initTex = AssetLoader.getTexture(textureName);
      blendState = {
        texA: initTex,
        texB: initTex,
        mixRatio: 0.0,
        isBlending: false
      };
      this.blendMap.set(entity, blendState);
    }

    if (lastFrame !== renderState.currentFrame || texture === undefined) {
      const textureName = `${renderState.texturePrefix}${renderState.currentFrame}`;
      const newTexture = AssetLoader.getTexture(textureName);
      offset = AssetLoader.getSpriteOffset(typeKey, renderState.currentFrame);

      this.lastFrameMap.set(entity, renderState.currentFrame);
      this.cachedTexture.set(entity, newTexture);
      this.cachedOffset.set(entity, offset);

      if (newTexture && blendState.texB !== newTexture) {
        blendState.texA = blendState.texB || newTexture;
        blendState.texB = newTexture;
        blendState.mixRatio = 0.0;
        blendState.isBlending = true;
      }
    }

    if (blendState.isBlending) {
      blendState.mixRatio = Math.min(1.0, blendState.mixRatio + delta * 3.33);
      if (blendState.mixRatio >= 1.0) {
        blendState.texA = blendState.texB;
        blendState.isBlending = false;
      }
    }

    if (blendState.texA) material.uniforms.mapA.value = blendState.texA;
    if (blendState.texB) material.uniforms.mapB.value = blendState.texB;
    material.uniforms.mixRatio.value = blendState.mixRatio;

    return { texture: blendState.texB, offset, typeKey };
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
          // 150ms pipeline: Micro-flinch + damped spring-bounce recovery curve
          const springDamp = Math.exp(-t * 6.0) * Math.cos(t * SPRING_BOUNCE_FREQUENCY);
          const flinchCurve = Math.sin(t * Math.PI);
          const totalEffect = flinchCurve * springDamp;

          scaleXMult *= INITIAL_SCALE_UNIT + (fx.scaleXMult! - INITIAL_SCALE_UNIT) * totalEffect;
          scaleYMult *= INITIAL_SCALE_UNIT + (fx.scaleYMult! - INITIAL_SCALE_UNIT) * totalEffect;
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
    // 1. Universal Texel Density (GLOBAL_PPM): derive world size from pixel dimensions
    const PIXELS_PER_WORLD_UNIT = GLOBAL_PPM;

    // Resolve definition visual scale for landmark sizing (Pentagon, Apple HQ, etc.)
    const { def } = this.getTypeInfo(entity, renderState.texturePrefix);
    const vScale = def ? (def.visualScale || 1.0) : 1.0;

    // 2. Compute current state dimensions & offsets dynamically from sprite metadata
    const w = offset ? offset.w : (texture?.image?.width || DEFAULT_CANVAS_SIZE);
    const h = offset ? offset.h : (texture?.image?.height || DEFAULT_CANVAS_SIZE);
    const dx = (offset ? offset.dx : -w / HALF_DIVISOR) + GLOBAL_SPRITE_DX_OFFSET;
    const base_cy = (offset ? (typeof offset.base_cy === 'number' ? offset.base_cy : (offset.y_max || h)) : h) + GLOBAL_SPRITE_DY_OFFSET;

    const meshWidth = (w / PIXELS_PER_WORLD_UNIT) * vScale;
    const meshHeight = ((h / PIXELS_PER_WORLD_UNIT) * ISOMETRIC_Y_COMPENSATION) * vScale;

    const sx = meshWidth * fx.scaleXMult;
    const sy = meshHeight * fx.scaleYMult;

    // 3. Mathematical Pivot & Zero Floating Policy:
    // Anchor bottom-center ground contact line (base_cy) strictly to Y = 0 (or pos.worldZ if elevated).
    const localPivotX = ((-w / HALF_DIVISOR - dx) / PIXELS_PER_WORLD_UNIT) * vScale;
    const localPivotY = (((h / HALF_DIVISOR - base_cy) / PIXELS_PER_WORLD_UNIT) * ISOMETRIC_Y_COMPENSATION) * vScale;

    const world_dx = localPivotX * COS_45_DEG;
    const world_dz = -localPivotX * SIN_45_DEG;
    const y_mesh = (pos.worldZ || 0) - localPivotY + BUILDING_BASE_LIFT;

    const tx = pos.worldX + world_dx + fx.shudderDX;
    const tz = pos.worldY + world_dz + fx.shudderDZ;

    // 4. Collapse & Topple Physics
    const collapse = this.collapseMap.get(entity);
    if (collapse) {
      sprite.matrixAutoUpdate = true;
      collapse.tiltAngle += delta * COLLAPSE_TILT_SPEED;

      // Keep billboard Y-rotation facing camera (ISOMETRIC_ROTATION_Y) and apply subtle in-plane Z lean
      const inPlaneTilt = collapse.tiltAngle * 0.3 * (collapse.impactVector.x >= 0 ? 1 : -1);
      sprite.scale.set(sx, sy, INITIAL_SCALE_UNIT);
      sprite.rotation.set(0, ISOMETRIC_ROTATION_Y, inPlaneTilt);

      sprite.position.set(
        tx,
        y_mesh - (collapse.tiltAngle * COLLAPSE_SINK_SPEED),
        tz
      );

      if (collapse.tiltAngle >= COLLAPSE_IMPACT_ANGLE) {
        this.crushBuildingsInTrajectory(pos, collapse.impactVector, CRUSH_RANGE_DEFAULT);
        this.collapseMap.delete(entity);
        renderState.currentFrame = this.BUILDING_MAX_FRAMES[typeKey] ?? RUBBLE_STAGE_FRAME;
      }
    } else {
      // Clean upright vertical placement facing isometric camera
      sprite.matrixAutoUpdate = true;
      sprite.scale.set(sx, sy, INITIAL_SCALE_UNIT);
      sprite.rotation.set(0, ISOMETRIC_ROTATION_Y, 0);
      sprite.position.set(tx, y_mesh, tz);
    }
  }

  private static processHitFlash(entity: Entity, material: THREE.ShaderMaterial, delta: number) {
    const flash = this.flashMap.get(entity);
    if (flash) {
      material.uniforms.flashColor.value.setHex(flash.color);
      material.uniforms.flashIntensity.value = 0.8;
      flash.timeLeft -= delta;
      if (flash.timeLeft <= ZERO_VALUE) {
        material.uniforms.flashIntensity.value = 0.0;
        this.flashMap.delete(entity);
      }
    } else {
      material.uniforms.flashIntensity.value = 0.0;
    }
  }

  private static update3DBuilding(
    entity: Entity,
    renderState: any,
    pos: any,
    typeKey: string,
    def: any,
    delta: number
  ): boolean {
    const model = this.getOrCreateModel3D(entity, renderState, pos, typeKey, def);
    if (!model) return false;

    // 1. Process damage animation playback: real-time video playback triggered on demolition!
    const zonal = ZonalHealthComponent.get(entity);
    const health = HealthComponent.get(entity);
    const curHp = zonal ? zonal.totalHp : (health ? health.currentHP : 100);

    const mixer = this.mixers.get(entity);
    const animData = this.animActions.get(entity);

    let demoState = this.demoStateMap.get(entity);

    // Trigger video demolition when HP reaches 0
    if (curHp <= 0 && !demoState) {
      demoState = {
        isDemolishing: true,
        elapsedTime: 0,
        maxDuration: animData ? animData.maxDuration : 6.25
      };
      this.demoStateMap.set(entity, demoState);
    }

    if (demoState && demoState.isDemolishing && mixer) {
      if (demoState.elapsedTime < demoState.maxDuration) {
        const prevTime = demoState.elapsedTime;
        demoState.elapsedTime += delta;
        mixer.update(delta); // Play forward continuously in real-time video style!

        // 1. Random height blast animations popping up along 3D tower structure
        if (Math.random() < 0.25) {
          const randX = pos.worldX + (Math.random() - 0.5) * 30;
          const randZ = pos.worldY + (Math.random() - 0.5) * 30;
          const randH = 10 + Math.random() * 80;
          const blastType = Math.random() > 0.5 ? 'blast' : 'blast360';

          DestructionSystem.fxQueue.push({
            type: blastType,
            x: randX, y: randZ, z: randH,
            data: { entityId: entity, targetFrame: 0 }
          });
        }

        // 2. Periodic camera rumbles
        if (Math.random() < 0.15) {
          DestructionSystem.fxQueue.push({
            type: 'shake',
            x: 0, y: 0, z: 0,
            data: { intensity: 6 }
          });
        }

        // 3. Collateral shockwave damage to surrounding buildings at demolition milestones (t = 1.0s, 2.5s, 4.0s)
        const milestone1 = prevTime < 1.0 && demoState.elapsedTime >= 1.0;
        const milestone2 = prevTime < 2.5 && demoState.elapsedTime >= 2.5;
        const milestone3 = prevTime < 4.0 && demoState.elapsedTime >= 4.0;

        if (milestone1 || milestone2 || milestone3) {
          DestructionSystem.applyCollateralDamage(entity, pos.worldX, pos.worldY, 64, 25);
          DestructionSystem.fxQueue.push({
            type: 'shake',
            x: 0, y: 0, z: 0,
            data: { intensity: 10 }
          });
        }

        // Continuous demolition smoke, sparks & debris
        if (Math.random() < 0.35) {
          DestructionSystem.fxQueue.push({
            type: 'smoke',
            x: pos.worldX, y: pos.worldY, z: pos.worldZ,
            data: { count: 3, entityId: entity }
          });
        }
        if (Math.random() < 0.25) {
          DestructionSystem.fxQueue.push({
            type: 'sparks',
            x: pos.worldX, y: pos.worldY, z: pos.worldZ,
            data: { count: 4, entityId: entity }
          });
        }
        if (Math.random() < 0.2) {
          DestructionSystem.fxQueue.push({
            type: 'debris',
            x: pos.worldX, y: pos.worldY, z: pos.worldZ,
            data: { count: 5, entityId: entity, palette: [0x888888, 0x555555, 0xaaaaaa] }
          });
        }
      }
    } else if (mixer) {
      // Intact standing pose (t = 0) while receiving laser hits
      mixer.setTime(0);
    }

    // 2. Process micro hit effects (flinch shudder & squash)
    const fx = this.processHitEffects(entity, delta);

    const baseScale = model.userData.baseScale || 1.0;
    model.scale.set(
      baseScale * fx.scaleXMult,
      baseScale * fx.scaleYMult,
      baseScale * fx.scaleXMult
    );

    const basePosX = model.userData.basePosX ?? pos.worldX;
    const basePosZ = model.userData.basePosZ ?? pos.worldY;
    const basePosY = model.userData.basePosY ?? 0;

    // 3D buildings remain strictly upright, relying exclusively on GLTF demolition keyframe tracks (no sideways tilt laying down)
    model.position.set(basePosX + fx.shudderDX, basePosY, basePosZ + fx.shudderDZ);

    // 3. Process hit flash
    this.processHitFlash3D(entity, model, delta);

    model.visible = renderState.visible;
    return true;
  }

  private static getOrCreateModel3D(
    entity: Entity,
    _renderState: any,
    pos: any,
    typeKey: string,
    def: any
  ): THREE.Object3D | null {
    let model = this.models3D.get(entity);

    if (!model) {
      const gltfKey = def.gltfKey || 'skyscraper_demolition';
      const gltf = AssetLoader.getGLTF(gltfKey);
      if (!gltf) return null;

      model = SkeletonUtils.clone(gltf.scene);

      // Sort 3D models by ground-plane footprint only — no height bias (height inflates sort order causing tall spires to occlude closer buildings)
      const isoOrder = calculateIsoOrder(pos.worldX, pos.worldY);
      model.renderOrder = isoOrder;

      // Setup materials for depth, shadow casting & hit flash + Hide GroundPlane base mesh
      model.traverse((child) => {
        child.renderOrder = isoOrder;
        if (child.name === 'GroundPlane' || child.name.toLowerCase().includes('ground')) {
          child.visible = false;
        }
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          if (mesh.material) {
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            mats.forEach((m: any) => {
              if (m.name === 'PixelGround' || m.name.toLowerCase().includes('ground')) {
                mesh.visible = false;
              }
              m.depthWrite = true;
              m.depthTest = true;
              m.side = THREE.DoubleSide;
              if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
                m.roughness = 0.6;
                m.metalness = 0.1;
                if (m.emissive) {
                  m.emissiveIntensity = 0.2;
                }
              }
            });
          }
        }
      });

      // Initialize AnimationMixer & play ALL animation tracks (all 590 demolition clips)
      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);
        const actions: THREE.AnimationAction[] = [];
        let maxDuration = 0;

        for (const clip of gltf.animations) {
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = true;
          action.play();
          actions.push(action);
          if (clip.duration > maxDuration) {
            maxDuration = clip.duration;
          }
        }

        this.mixers.set(entity, mixer);
        this.animActions.set(entity, { actions, maxDuration });

        // Snap animation to pristine state at t = 0
        mixer.setTime(0);
      }

      // Compute bounding box at t = 0 pose to set scale and base pivot
      model.updateMatrixWorld(true);
      const bbox = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      bbox.getSize(size);

      // Target sizing: compute scale using def.height, def.width, and def.visualScale
      const vScale = def ? (def.visualScale || 1.0) : 1.0;
      const targetHeight = (def.height || 220) * vScale;
      const targetFootprint = (def.width || 64) * vScale;
      const scaleByHeight = size.y > 0.1 ? (targetHeight / size.y) : 1.0;
      const scaleByWidth = (size.x > 0.1 && size.z > 0.1) ? (targetFootprint / Math.max(size.x, size.z)) : scaleByHeight;
      const targetScale = Math.min(scaleByHeight, scaleByWidth);

      model.scale.set(targetScale, targetScale, targetScale);
      model.updateMatrixWorld(true);

      // Bottom pivot strictly on ground plane (Y = 0)
      const scaledBbox = new THREE.Box3().setFromObject(model);
      const minY = scaledBbox.min.y;

      const basePosX = pos.worldX;
      const basePosZ = pos.worldY; // Three.js Z depth
      const basePosY = -minY;      // Sitting on Y = 0 ground plane

      model.position.set(basePosX, basePosY, basePosZ);
      model.userData = { baseScale: targetScale, basePosX, basePosY, basePosZ };

      SceneManager.cityGroup.add(model);
      RaycasterHelper.registerObject(model, entity);

      this.models3D.set(entity, model);

      // Create hit zones for raycasting / targeting HUD
      const zones = BUILDING_ZONES[typeKey] || BUILDING_ZONES['mega_titan'];
      if (zones) {
        const dummySprite = new THREE.Mesh(
          this.sharedGeometry,
          new THREE.MeshBasicMaterial({ visible: true, transparent: true, opacity: 0, depthWrite: false })
        );
        dummySprite.position.set(pos.worldX, (def.height || 400) / 2, pos.worldY);
        dummySprite.scale.set(def.width || 64, def.height || 400, 1);
        dummySprite.rotation.y = ISOMETRIC_ROTATION_Y;
        SceneManager.cityGroup.add(dummySprite);
        HitZoneManager.createZonesForBuilding(entity, dummySprite, zones);
        this.dummyHitSprites.set(entity, dummySprite);
      }
    }

    return model;
  }

  private static processHitFlash3D(entity: Entity, model: THREE.Object3D, delta: number) {
    const flash = this.flashMap.get(entity);
    if (flash) {
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            mats.forEach((m: any) => {
              if (m.emissive) {
                m.emissive.setHex(flash.color);
                m.emissiveIntensity = 0.8;
              }
            });
          }
        }
      });
      flash.timeLeft -= delta;
      if (flash.timeLeft <= ZERO_VALUE) {
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              mats.forEach((m: any) => {
                if (m.emissive) {
                  m.emissive.setHex(0x000000);
                  m.emissiveIntensity = 0.0;
                }
              });
            }
          }
        });
        this.flashMap.delete(entity);
      }
    }
  }

  private static cleanupDestroyedEntities() {
    // 2D Sprites Cleanup
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
        this.cachedTypeKey.delete(entity);
        this.cachedDef.delete(entity);
        this.displayFrameMap.delete(entity);
        this.demoStateMap.delete(entity);
        this.blendMap.delete(entity);
      }
    }

    // 3D Models Cleanup
    for (const [entity, model] of this.models3D.entries()) {
      if (!ECS.entities.has(entity) || !RenderStateComponent.has(entity)) {
        SceneManager.cityGroup.remove(model);
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(m => m.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
        const dummy = this.dummyHitSprites.get(entity);
        if (dummy) {
          SceneManager.cityGroup.remove(dummy);
          dummy.geometry.dispose();
          this.dummyHitSprites.delete(entity);
        }
        this.models3D.delete(entity);
        this.mixers.delete(entity);
        this.animActions.delete(entity);
        this.hitFxMap.delete(entity);
        this.flashMap.delete(entity);
        this.cachedTypeKey.delete(entity);
        this.cachedDef.delete(entity);
        this.displayFrameMap.delete(entity);
        this.demoStateMap.delete(entity);
        this.blendMap.delete(entity);
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
    for (const [, model] of this.models3D.entries()) {
      SceneManager.cityGroup.remove(model);
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(m => m.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });
    }
    for (const [, dummy] of this.dummyHitSprites.entries()) {
      SceneManager.cityGroup.remove(dummy);
      dummy.geometry.dispose();
    }
    this.sprites.clear();
    this.models3D.clear();
    this.mixers.clear();
    this.animActions.clear();
    this.dummyHitSprites.clear();
    this.hitFxMap.clear();
    this.flashMap.clear();
    this.lastFrameMap.clear();
    this.cachedTexture.clear();
    this.cachedOffset.clear();
    this.cachedTypeKey.clear();
    this.cachedDef.clear();
  }
}
