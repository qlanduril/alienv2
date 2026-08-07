import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { physicsModel } from '../core/PhysicsModel';

// --- ParticleRenderer Constants ---
const ZERO_VALUE = 0;
const COLOR_COMPONENTS_PER_INSTANCE = 3;

// Particle Sphere Geometry Constants
const PARTICLE_SPHERE_RADIUS = 0.2;
const PARTICLE_SPHERE_WIDTH_SEGMENTS = 8;
const PARTICLE_SPHERE_HEIGHT_SEGMENTS = 8;
const BASE_WHITE_HEX = 0xffffff;

// Debris Box Geometry Constants
const DEBRIS_CUBE_SIZE = 1;

// Scale & Animation Constants
const SMOKE_BASE_SCALE = 0.5;
const SMOKE_GROWTH_FACTOR = 2.0;
const SMOKE_FADE_MULTIPLIER = 0.7;
const PARTICLE_MIN_SCALE = 0.05;
const BASE_FULL_SCALE = 1.0;

// Color palette for particle types
const PARTICLE_COLORS: Record<string, THREE.Color> = {
  spark: new THREE.Color(0xffdd44),
  dust:  new THREE.Color(0xaa8866),
  smoke: new THREE.Color(0x444444),
  brick: new THREE.Color(0x884422),
};

export class ParticleRenderer {
  private static particleMesh: THREE.InstancedMesh;
  private static debrisMesh: THREE.InstancedMesh;
  
  private static dummy = new THREE.Object3D();
  private static tempColor = new THREE.Color();

  public static init() {
    // 1. Particles (sparks, dust, smoke)
    const particleGeo = new THREE.SphereGeometry(PARTICLE_SPHERE_RADIUS, PARTICLE_SPHERE_WIDTH_SEGMENTS, PARTICLE_SPHERE_HEIGHT_SEGMENTS);
    const particleMat = new THREE.MeshBasicMaterial({ color: BASE_WHITE_HEX }); // white base, tinted per-instance
    this.particleMesh = new THREE.InstancedMesh(particleGeo, particleMat, physicsModel.particles.length);
    this.particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    // Enable per-instance color
    this.particleMesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(physicsModel.particles.length * COLOR_COMPONENTS_PER_INSTANCE), COLOR_COMPONENTS_PER_INSTANCE
    );
    this.particleMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    SceneManager.effectsGroup.add(this.particleMesh);

    // 2. Debris (brick chunks)
    const debrisGeo = new THREE.BoxGeometry(DEBRIS_CUBE_SIZE, DEBRIS_CUBE_SIZE, DEBRIS_CUBE_SIZE); // unit cube, scaled per instance via size
    const debrisMat = new THREE.MeshStandardMaterial({ color: BASE_WHITE_HEX }); // white base, tinted per-instance
    this.debrisMesh = new THREE.InstancedMesh(debrisGeo, debrisMat, physicsModel.debris.length);
    this.debrisMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    // Enable per-instance color
    this.debrisMesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(physicsModel.debris.length * COLOR_COMPONENTS_PER_INSTANCE), COLOR_COMPONENTS_PER_INSTANCE
    );
    this.debrisMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.debrisMesh.castShadow = true;
    SceneManager.effectsGroup.add(this.debrisMesh);
  }

  public static tick(_delta: number) {
    if (!this.particleMesh || !this.debrisMesh) return;

    // Sync particles
    let pCount = ZERO_VALUE;
    for (let i = ZERO_VALUE; i < physicsModel.particles.length; i++) {
      const p = physicsModel.particles[i];
      if (p.active) {
        this.dummy.position.set(p.x, p.y, p.z);
        
        const lifeRatio = p.life / p.maxLife;

        if (p.type === 'smoke') {
          // Smoke grows as it dissipates
          const smokeScale = SMOKE_BASE_SCALE + lifeRatio * SMOKE_GROWTH_FACTOR;
          this.dummy.scale.set(smokeScale, smokeScale, smokeScale);
        } else {
          // Others shrink as they die
          const scale = Math.max(PARTICLE_MIN_SCALE, BASE_FULL_SCALE - lifeRatio);
          this.dummy.scale.set(scale, scale, scale);
        }

        this.dummy.updateMatrix();
        this.particleMesh.setMatrixAt(pCount, this.dummy.matrix);

        // Per-instance color
        this.tempColor.copy(PARTICLE_COLORS[p.type] || PARTICLE_COLORS.spark);

        // Fade smoke to transparent gray
        if (p.type === 'smoke') {
          const fade = BASE_FULL_SCALE - lifeRatio * SMOKE_FADE_MULTIPLIER;
          this.tempColor.multiplyScalar(fade);
        }

        this.particleMesh.setColorAt(pCount, this.tempColor);
        pCount++;
      }
    }
    this.particleMesh.count = pCount;
    this.particleMesh.instanceMatrix.needsUpdate = true;
    if (this.particleMesh.instanceColor) {
      this.particleMesh.instanceColor.needsUpdate = true;
    }

    // Sync debris
    let dCount = ZERO_VALUE;
    for (let i = ZERO_VALUE; i < physicsModel.debris.length; i++) {
      const d = physicsModel.debris[i];
      if (d.active) {
        this.dummy.position.set(d.x, d.y, d.z);
        // Use the debris size field for per-instance scale
        this.dummy.scale.set(d.size, d.size, d.size);
        // Set rotation from accumulated physics values
        this.dummy.rotation.set(d.rx, d.ry, ZERO_VALUE);
        this.dummy.updateMatrix();
        this.debrisMesh.setMatrixAt(dCount, this.dummy.matrix);

        // Brick color with slight variation per chunk
        this.tempColor.setHex(d.color);
        this.debrisMesh.setColorAt(dCount, this.tempColor);
        dCount++;
      }
    }
    this.debrisMesh.count = dCount;
    this.debrisMesh.instanceMatrix.needsUpdate = true;
    if (this.debrisMesh.instanceColor) {
      this.debrisMesh.instanceColor.needsUpdate = true;
    }
  }
}
