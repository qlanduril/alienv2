import { ECS } from '../core/ECS';
import { physicsModel } from '../core/PhysicsModel';

export class ParticleSimSystem {
  public static init() {
    ECS.addSystem(this.tick.bind(this));
  }

  public static tick(delta: number) {
    physicsModel.tick(delta);
  }
  
  // Brick-colored debris chunks — launched upward and outward
  public static spawnBrickBurst(x: number, y: number, z: number, count: number, palette?: number[]) {
    for (let i = 0; i < count; i++) {
      const vx = (Math.random() - 0.5) * 12;
      const vy = Math.random() * 12 + 10;
      const vz = (Math.random() - 0.5) * 12;
      const size = 0.3 + Math.random() * 0.5; // varied brick sizes
      
      let color = 0x884422;
      if (palette && palette.length > 0) {
        color = palette[Math.floor(Math.random() * palette.length)];
      }
      
      physicsModel.spawnDebris(x, y, z, vx, vy, vz, size, color);
    }
  }

  // Short-lived dust particles — low velocity, slight upward drift, linger ~1s
  public static spawnDustCloud(x: number, y: number, z: number, count: number) {
    for (let i = 0; i < count; i++) {
      const vx = (Math.random() - 0.5) * 1.5;
      const vy = Math.random() * 1.0 + 0.3;
      const vz = (Math.random() - 0.5) * 1.5;
      physicsModel.spawnParticle(x, y, z, vx, vy, vz, 1.0 + Math.random() * 0.5, 'dust');
    }
  }

  // Smoke particles — float upward slowly, long life ~2-3s
  public static spawnSmokePlume(x: number, y: number, z: number, count: number) {
    for (let i = 0; i < count; i++) {
      const vx = (Math.random() - 0.5) * 0.8;
      const vy = Math.random() * 1.2 + 0.5; // upward initial push
      const vz = (Math.random() - 0.5) * 0.8;
      physicsModel.spawnParticle(x, y, z, vx, vy, vz, 2.0 + Math.random() * 1.0, 'smoke');
    }
  }

  // Fast, short-lived sparks — high velocity, tiny lifetime ~0.3s
  public static spawnSparkBurst(x: number, y: number, z: number, count: number) {
    for (let i = 0; i < count; i++) {
      const vx = (Math.random() - 0.5) * 8;
      const vy = Math.random() * 6 + 2;
      const vz = (Math.random() - 0.5) * 8;
      physicsModel.spawnParticle(x, y, z, vx, vy, vz, 0.2 + Math.random() * 0.15, 'spark');
    }
  }

  // Legacy generic debris burst
  public static spawnDebrisBurst(x: number, y: number, z: number, count: number) {
    for (let i = 0; i < count; i++) {
      const vx = (Math.random() - 0.5) * 5;
      const vy = Math.random() * 5 + 3;
      const vz = (Math.random() - 0.5) * 5;
      physicsModel.spawnDebris(x, y, z, vx, vy, vz);
    }
  }
}
