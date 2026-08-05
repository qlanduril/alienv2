import * as THREE from 'three';
import { SceneManager } from '../SceneManager';

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
    this.decalGroup.position.y = 0.02;

    SceneManager.groundGroup.add(this.decalGroup);
    this.createDecalTextures();
  }

  private static createDecalTextures() {
    // Canvas-generated procedural scorch/crater textures for crisp rendering
    const createScorchTex = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;

      // Radial burn gradient
      const grad = ctx.createRadialGradient(64, 64, 5, 64, 64, 60);
      grad.addColorStop(0, 'rgba(10, 10, 10, 0.9)');
      grad.addColorStop(0.4, 'rgba(40, 25, 20, 0.7)');
      grad.addColorStop(0.7, 'rgba(80, 50, 30, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(64, 64, 60, 0, Math.PI * 2);
      ctx.fill();

      // Irregular blast rays
      ctx.strokeStyle = 'rgba(15, 10, 8, 0.6)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
        const len = 30 + Math.random() * 25;
        ctx.beginPath();
        ctx.moveTo(64, 64);
        ctx.lineTo(64 + Math.cos(angle) * len, 64 + Math.sin(angle) * len);
        ctx.stroke();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const createCraterTex = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;

      // Impact crater ring
      const grad = ctx.createRadialGradient(64, 64, 10, 64, 64, 55);
      grad.addColorStop(0, 'rgba(5, 5, 5, 0.95)');
      grad.addColorStop(0.3, 'rgba(30, 20, 15, 0.85)');
      grad.addColorStop(0.6, 'rgba(70, 50, 35, 0.5)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(64, 64, 55, 0, Math.PI * 2);
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
    size: number = 15
  ) {
    const texture = this.decalTextures.get(type) || this.decalTextures.get('scorch')!;

    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      roughness: 0.95,
      metalness: 0.05
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = Math.random() * Math.PI * 2; // Random rotation for variation
    mesh.position.set(worldX, 0.01 + Math.random() * 0.005, worldZ);
    mesh.receiveShadow = true;

    this.decalGroup.add(mesh);

    this.decals.push({
      id: `decal_${Date.now()}_${Math.random()}`,
      mesh,
      worldX,
      worldZ,
      type,
      scale: size,
      opacity: 1.0
    });

    // Cap maximum active decals to prevent memory leaks
    if (this.decals.length > 50) {
      const oldest = this.decals.shift();
      if (oldest) {
        this.decalGroup.remove(oldest.mesh);
        oldest.mesh.geometry.dispose();
        (oldest.mesh.material as THREE.Material).dispose();
      }
    }
  }
}
