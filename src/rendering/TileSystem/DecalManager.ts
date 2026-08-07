import * as THREE from 'three';
import { SceneManager } from '../SceneManager';

// --- DecalManager Constants ---
const ZERO_VALUE = 0;
const INITIAL_OPACITY = 1.0;
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
const MAX_ACTIVE_DECALS = 50;

export interface DecalInstance {
  id: string;
  mesh: THREE.Mesh;
  worldX: number;
  worldZ: number;
  type: 'scorch' | 'crater' | 'rubble_spill';
  scale: number;
  opacity: number;
}

export class DecalManager {
  private static decalGroup: THREE.Group;
  private static decals: DecalInstance[] = [];
  private static decalTextures: Map<string, THREE.Texture> = new Map();

  public static init() {
    this.decalGroup = new THREE.Group();
    this.decalGroup.name = 'DecalLayer_L2';
    // Position layer 2 slightly above ground plane to prevent Z-fighting
    this.decalGroup.position.y = DECAL_LAYER_Y_ALTITUDE;

    SceneManager.groundGroup.add(this.decalGroup);
    this.createDecalTextures();
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

  public static spawnDecal(
    worldX: number,
    worldZ: number,
    type: 'scorch' | 'crater' | 'rubble_spill',
    size: number = DEFAULT_DECAL_SIZE
  ) {
    const texture = this.decalTextures.get(type) || this.decalTextures.get('scorch')!;

    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      roughness: DECAL_ROUGHNESS,
      metalness: DECAL_METALNESS
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = DECAL_ROTATION_X;
    mesh.rotation.z = Math.random() * Math.PI * 2; // Random rotation for variation
    mesh.position.set(worldX, MESH_Y_BASE_ALTITUDE + Math.random() * MESH_Y_JITTER_RANGE, worldZ);
    mesh.receiveShadow = true;

    this.decalGroup.add(mesh);

    this.decals.push({
      id: `decal_${Date.now()}_${Math.random()}`,
      mesh,
      worldX,
      worldZ,
      type,
      scale: size,
      opacity: INITIAL_OPACITY
    });

    // Cap maximum active decals to prevent memory leaks
    if (this.decals.length > MAX_ACTIVE_DECALS) {
      const oldest = this.decals.shift();
      if (oldest) {
        this.decalGroup.remove(oldest.mesh);
        oldest.mesh.geometry.dispose();
        (oldest.mesh.material as THREE.Material).dispose();
      }
    }
  }
}
