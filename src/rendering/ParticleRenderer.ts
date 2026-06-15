import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { physicsModel } from '../core/PhysicsModel';

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
    const particleGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xffffff }); // white base, tinted per-instance
    this.particleMesh = new THREE.InstancedMesh(particleGeo, particleMat, physicsModel.particles.length);
    this.particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    // Enable per-instance color
    this.particleMesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(physicsModel.particles.length * 3), 3
    );
    this.particleMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    SceneManager.effectsGroup.add(this.particleMesh);

    // 2. Debris (brick chunks)
    const debrisGeo = new THREE.BoxGeometry(1, 1, 1); // unit cube, scaled per instance via size
    const debrisMat = new THREE.MeshStandardMaterial({ color: 0xffffff }); // white base, tinted per-instance
    this.debrisMesh = new THREE.InstancedMesh(debrisGeo, debrisMat, physicsModel.debris.length);
    this.debrisMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    // Enable per-instance color
    this.debrisMesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(physicsModel.debris.length * 3), 3
    );
    this.debrisMesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.debrisMesh.castShadow = true;
    SceneManager.effectsGroup.add(this.debrisMesh);
  }

  public static tick(_delta: number) {
    if (!this.particleMesh || !this.debrisMesh) return;

    // Sync particles
    let pCount = 0;
    for (let i = 0; i < physicsModel.particles.length; i++) {
      const p = physicsModel.particles[i];
      if (p.active) {
        this.dummy.position.set(p.x, p.y, p.z);
        
        const lifeRatio = p.life / p.maxLife;

        if (p.type === 'smoke') {
          // Smoke grows as it dissipates
          const smokeScale = 0.5 + lifeRatio * 2.0;
          this.dummy.scale.set(smokeScale, smokeScale, smokeScale);
        } else {
          // Others shrink as they die
          const scale = Math.max(0.05, 1 - lifeRatio);
          this.dummy.scale.set(scale, scale, scale);
        }

        this.dummy.updateMatrix();
        this.particleMesh.setMatrixAt(pCount, this.dummy.matrix);

        // Per-instance color
        this.tempColor.copy(PARTICLE_COLORS[p.type] || PARTICLE_COLORS.spark);

        // Fade smoke to transparent gray
        if (p.type === 'smoke') {
          const fade = 1 - lifeRatio * 0.7;
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
    let dCount = 0;
    for (let i = 0; i < physicsModel.debris.length; i++) {
      const d = physicsModel.debris[i];
      if (d.active) {
        this.dummy.position.set(d.x, d.y, d.z);
        // Use the debris size field for per-instance scale
        this.dummy.scale.set(d.size, d.size, d.size);
        // Set rotation from accumulated physics values
        this.dummy.rotation.set(d.rx, d.ry, 0);
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
