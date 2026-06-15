export type ParticleType = 'spark' | 'dust' | 'smoke' | 'brick';

export interface ParticleData {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  active: boolean;
  type: ParticleType;
}

export interface DebrisChunk {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  gravity: number;
  active: boolean;
  size: number;
  rx: number;
  ry: number;
  bounces: number;
  color: number;
}

export class PhysicsModel {
  public particles: ParticleData[] = [];
  public debris: DebrisChunk[] = [];
  
  private freeParticleIndices: number[] = [];
  private freeDebrisIndices: number[] = [];

  constructor(maxParticles: number = 500, maxDebris: number = 300) {
    // Pre-allocate pools
    for (let i = 0; i < maxParticles; i++) {
      this.particles.push({
        x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
        life: 0, maxLife: 0, active: false, type: 'spark'
      });
      this.freeParticleIndices.push(i);
    }

    for (let i = 0; i < maxDebris; i++) {
      this.debris.push({
        x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
        gravity: 35.0, active: false, size: 0.5, rx: 0, ry: 0, bounces: 0, color: 0x884422
      });
      this.freeDebrisIndices.push(i);
    }
  }

  public tick(delta: number) {
    // Update particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (!p.active) continue;
      
      // Smoke floats upward (negative gravity), others just drift
      if (p.type === 'smoke') {
        p.vy += 1.5 * delta; // gentle upward acceleration
        // Slow down horizontal drift
        p.vx *= (1 - 0.5 * delta);
        p.vz *= (1 - 0.5 * delta);
      }

      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.z += p.vz * delta;
      
      p.life += delta;
      if (p.life >= p.maxLife) {
        p.active = false;
        this.freeParticleIndices.push(i);
      }
    }

    // Update debris with gravity (y is up in Three.js)
    for (let i = 0; i < this.debris.length; i++) {
      const d = this.debris[i];
      if (!d.active) continue;
      
      d.vy -= d.gravity * delta; // apply gravity
      
      d.x += d.vx * delta;
      d.y += d.vy * delta;
      d.z += d.vz * delta;
      
      // Accumulate rotation
      d.rx += d.vy * delta * 0.1;
      d.ry += d.vx * delta * 0.1;

      // Floor collision
      if (d.y < 0) {
        d.y = 0;
        d.vy *= -0.35; // bounce energy loss
        d.vx *= 0.7; // friction
        d.vz *= 0.7; // friction
        d.bounces++;
        
        if (d.bounces >= 5) {
          d.active = false;
          this.freeDebrisIndices.push(i);
        }
      }
    }
  }

  public spawnParticle(x: number, y: number, z: number, vx: number, vy: number, vz: number, maxLife: number, type: ParticleType = 'spark') {
    const idx = this.freeParticleIndices.pop();
    if (idx !== undefined) {
      const p = this.particles[idx];
      p.x = x; p.y = y; p.z = z;
      p.vx = vx; p.vy = vy; p.vz = vz;
      p.life = 0;
      p.maxLife = maxLife;
      p.type = type;
      p.active = true;
    }
  }

  public spawnDebris(x: number, y: number, z: number, vx: number, vy: number, vz: number, size: number = 0.5, color: number = 0x884422) {
    const idx = this.freeDebrisIndices.pop();
    if (idx !== undefined) {
      const d = this.debris[idx];
      d.x = x; d.y = y; d.z = z;
      d.vx = vx; d.vy = vy; d.vz = vz;
      d.size = size;
      d.rx = 0;
      d.ry = 0;
      d.bounces = 0;
      d.color = color;
      d.active = true;
    }
  }
}

// Global instance for systems to use
export const physicsModel = new PhysicsModel();
