import * as THREE from 'three';
import { SceneManager } from '../SceneManager';
import { AssetLoader } from '../../assets/AssetLoader';

// --- DecalManager Constants ---
const ZERO_VALUE = 0;
const DECAL_LAYER_Y_ALTITUDE = 0.02;
const MESH_Y_BASE_ALTITUDE = 0.01;
const MESH_Y_JITTER_RANGE = 0.005;

const CANVAS_DIMENSION = 128;
const CANVAS_CENTER = 64;
const RADIAL_GRADIENT_INNER_R = 5;
const RADIAL_GRADIENT_OUTER_R = 60;
const CRATER_GRADIENT_INNER_R = 10;
const CRATER_GRADIENT_OUTER_R = 55;

const BLAST_RAYS_COUNT = 12;
const BLAST_RAY_BASE_LEN = 30;
const BLAST_RAY_RANDOM_LEN = 25;

const DEFAULT_DECAL_SIZE = 15;
const DECAL_ROTATION_X = -Math.PI / 2;
const DECAL_ROUGHNESS = 0.95;
const DECAL_METALNESS = 0.05;
const MAX_ACTIVE_DECALS = 80;

export interface DecalInstance {
  id: string;
  worldX: number;
  worldZ: number;
  type: 'scorch' | 'crater' | 'rubble_spill';
  scale: number;
  opacity: number;
}

/**
 * DecalManager.ts
 *
 * High-performance ground scorch & impact crater manager.
 * Uses InstancedMesh batching to collapse up to 80 active decals into 2 draw calls,
 * completely eliminating per-explosion PlaneGeometry and Material heap thrashing.
 */
export class DecalManager {
  private static decalGroup: THREE.Group;
  private static decalTextures: Map<string, THREE.Texture> = new Map();

  private static unitGeometry: THREE.PlaneGeometry;
  private static scorchMaterial: THREE.MeshStandardMaterial;
  private static craterMaterial: THREE.MeshStandardMaterial;

  private static scorchMesh: THREE.InstancedMesh;
  private static craterMesh: THREE.InstancedMesh;

  private static scorchIndex: number = ZERO_VALUE;
  private static scorchCount: number = ZERO_VALUE;
  private static craterIndex: number = ZERO_VALUE;
  private static craterCount: number = ZERO_VALUE;

  private static dummy: THREE.Object3D = new THREE.Object3D();

  public static init() {
    this.decalGroup = new THREE.Group();
    this.decalGroup.name = 'DecalLayer_L2';
    // Position layer 2 slightly above ground plane to prevent Z-fighting
    this.decalGroup.position.y = DECAL_LAYER_Y_ALTITUDE;

    SceneManager.groundGroup.add(this.decalGroup);
    this.createDecalTextures();

    // Shared unit plane geometry for all instanced decals
    this.unitGeometry = new THREE.PlaneGeometry(1, 1);

    const scorchTex = this.decalTextures.get('scorch')!;
    const loadedCraterTex = AssetLoader.getTexture('fx_crater');
    const craterTex = loadedCraterTex || this.decalTextures.get('crater')!;

    this.scorchMaterial = new THREE.MeshStandardMaterial({
      map: scorchTex,
      transparent: true,
      depthWrite: false,
      roughness: DECAL_ROUGHNESS,
      metalness: DECAL_METALNESS
    });

    this.craterMaterial = new THREE.MeshStandardMaterial({
      map: craterTex,
      transparent: true,
      depthWrite: false,
      roughness: DECAL_ROUGHNESS,
      metalness: DECAL_METALNESS
    });

    // If preloaded crater texture was still pending, load asynchronously and swap
    if (!loadedCraterTex) {
      new THREE.TextureLoader().load('/crater.png', (tex) => {
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        this.craterMaterial.map = tex;
        this.craterMaterial.needsUpdate = true;
      });
    }

    // Pre-allocate InstancedMesh pools (MAX_ACTIVE_DECALS per type)
    this.scorchMesh = new THREE.InstancedMesh(this.unitGeometry, this.scorchMaterial, MAX_ACTIVE_DECALS);
    this.scorchMesh.count = ZERO_VALUE;
    this.scorchMesh.receiveShadow = true;
    this.scorchMesh.renderOrder = 10;

    this.craterMesh = new THREE.InstancedMesh(this.unitGeometry, this.craterMaterial, MAX_ACTIVE_DECALS);
    this.craterMesh.count = ZERO_VALUE;
    this.craterMesh.receiveShadow = true;
    this.craterMesh.renderOrder = 10;

    this.decalGroup.add(this.scorchMesh);
    this.decalGroup.add(this.craterMesh);
  }

  private static createDecalTextures() {
    // Canvas-generated procedural scorch/crater textures for crisp rendering
    const createScorchTex = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = CANVAS_DIMENSION;
      canvas.height = CANVAS_DIMENSION;
      const ctx = canvas.getContext('2d')!;

      // Radial burn gradient
      const grad = ctx.createRadialGradient(CANVAS_CENTER, CANVAS_CENTER, RADIAL_GRADIENT_INNER_R, CANVAS_CENTER, CANVAS_CENTER, RADIAL_GRADIENT_OUTER_R);
      grad.addColorStop(0, 'rgba(10, 10, 10, 0.9)');
      grad.addColorStop(0.4, 'rgba(40, 25, 20, 0.7)');
      grad.addColorStop(0.7, 'rgba(80, 50, 30, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(CANVAS_CENTER, CANVAS_CENTER, RADIAL_GRADIENT_OUTER_R, ZERO_VALUE, Math.PI * 2);
      ctx.fill();

      // Irregular blast rays
      ctx.strokeStyle = 'rgba(15, 10, 8, 0.6)';
      ctx.lineWidth = 2;
      for (let i = ZERO_VALUE; i < BLAST_RAYS_COUNT; i++) {
        const angle = (i / BLAST_RAYS_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
        const len = BLAST_RAY_BASE_LEN + Math.random() * BLAST_RAY_RANDOM_LEN;
        ctx.beginPath();
        ctx.moveTo(CANVAS_CENTER, CANVAS_CENTER);
        ctx.lineTo(CANVAS_CENTER + Math.cos(angle) * len, CANVAS_CENTER + Math.sin(angle) * len);
        ctx.stroke();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const createCraterTex = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = CANVAS_DIMENSION;
      canvas.height = CANVAS_DIMENSION;
      const ctx = canvas.getContext('2d')!;

      // Impact crater ring
      const grad = ctx.createRadialGradient(CANVAS_CENTER, CANVAS_CENTER, CRATER_GRADIENT_INNER_R, CANVAS_CENTER, CANVAS_CENTER, CRATER_GRADIENT_OUTER_R);
      grad.addColorStop(0, 'rgba(5, 5, 5, 0.95)');
      grad.addColorStop(0.3, 'rgba(30, 20, 15, 0.85)');
      grad.addColorStop(0.6, 'rgba(70, 50, 35, 0.5)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(CANVAS_CENTER, CANVAS_CENTER, CRATER_GRADIENT_OUTER_R, ZERO_VALUE, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    this.decalTextures.set('scorch', createScorchTex());
    this.decalTextures.set('crater', createCraterTex());
  }

  /**
   * Spawns or recycles a decal in the pre-allocated InstancedMesh ring buffers.
   * Zero heap allocations inside this function.
   */
  public static spawnDecal(
    worldX: number,
    worldZ: number,
    type: 'scorch' | 'crater' | 'rubble_spill',
    size: number = DEFAULT_DECAL_SIZE
  ) {
    const isCrater = type === 'crater';
    const targetMesh = isCrater ? this.craterMesh : this.scorchMesh;
    const targetIndex = isCrater ? this.craterIndex : this.scorchIndex;

    this.dummy.position.set(worldX, MESH_Y_BASE_ALTITUDE + Math.random() * MESH_Y_JITTER_RANGE, worldZ);
    this.dummy.rotation.set(DECAL_ROTATION_X, 0, Math.random() * Math.PI * 2);
    this.dummy.scale.set(size, size, 1);
    this.dummy.updateMatrix();

    targetMesh.setMatrixAt(targetIndex, this.dummy.matrix);
    targetMesh.instanceMatrix.needsUpdate = true;

    if (isCrater) {
      this.craterIndex = (this.craterIndex + 1) % MAX_ACTIVE_DECALS;
      if (this.craterCount < MAX_ACTIVE_DECALS) {
        this.craterCount++;
        this.craterMesh.count = this.craterCount;
      }
    } else {
      this.scorchIndex = (this.scorchIndex + 1) % MAX_ACTIVE_DECALS;
      if (this.scorchCount < MAX_ACTIVE_DECALS) {
        this.scorchCount++;
        this.scorchMesh.count = this.scorchCount;
      }
    }
  }
}
