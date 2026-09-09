import * as THREE from 'three';
import { ECS } from '../core/ECS';
import { WeaponComponent, PlayerTagComponent } from '../core/Components';
import { DestructionSystem } from './DestructionSystem';
import { DecalManager } from '../rendering/TileSystem/DecalManager';
import { AudioSystem } from './AudioSystem';

export interface ClusterCanister {
  id: number;
  x: number;
  y: number; // depth (Three.js Z)
  z: number; // altitude (Three.js Y)
  vx: number;
  vy: number;
  vz: number;
  targetX: number;
  targetY: number;
  splitAltitude: number;
}

export interface ClusterBomblet {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotation: number;
  rotSpeed: number;
}

export class WeaponSystem {
  private static nextId: number = 1;
  public static canisters: ClusterCanister[] = [];
  public static bomblets: ClusterBomblet[] = [];

  public static readonly CLUSTER_COOLDOWN_TIME = 2.5; // seconds
  private static clusterCooldown: number = 0;

  public static init() {
    this.canisters = [];
    this.bomblets = [];
    this.clusterCooldown = 0;
    ECS.addSystem(this.tick.bind(this));
  }

  public static tick(delta: number) {
    // 1. Cool down cluster bomb
    if (this.clusterCooldown > 0) {
      this.clusterCooldown = Math.max(0, this.clusterCooldown - delta);
    }

    // Update Player WeaponComponent clusterCooldown
    for (const entity of ECS.entities) {
      if (PlayerTagComponent.has(entity)) {
        const weapon = WeaponComponent.get(entity);
        if (weapon) {
          weapon.clusterCooldown = this.clusterCooldown;
          weapon.clusterMaxCooldown = this.CLUSTER_COOLDOWN_TIME;
        }
        break;
      }
    }

    const GRAVITY = 85.0; // world units / sec²

    // 2. Simulate falling canisters
    for (let i = this.canisters.length - 1; i >= 0; i--) {
      const c = this.canisters[i];
      c.vz -= GRAVITY * delta;
      c.x += c.vx * delta;
      c.y += c.vy * delta;
      c.z += c.vz * delta;

      // Smoke trail while falling
      if (Math.random() < 0.4) {
        DestructionSystem.fxQueue.push({
          type: 'smoke',
          x: c.x,
          y: c.y,
          z: c.z,
          data: { count: 1 }
        });
      }

      // Check if reached split altitude
      if (c.z <= c.splitAltitude) {
        this.splitCanister(c);
        this.canisters.splice(i, 1);
      }
    }

    // 3. Simulate bomblets
    for (let i = this.bomblets.length - 1; i >= 0; i--) {
      const b = this.bomblets[i];
      b.vz -= (GRAVITY * 1.1) * delta;
      b.x += b.vx * delta;
      b.y += b.vy * delta;
      b.z += b.vz * delta;
      b.rotation += b.rotSpeed * delta;

      // Sparks / smoke particle stream
      if (Math.random() < 0.3) {
        DestructionSystem.fxQueue.push({
          type: 'sparks',
          x: b.x,
          y: b.y,
          z: b.z,
          data: { count: 2 }
        });
      }

      // Ground impact
      if (b.z <= 0) {
        this.detonateBomblet(b);
        this.bomblets.splice(i, 1);
      }
    }
  }

  /** Launch a cluster bomb canister from UFO position towards target ground coordinates */
  public static fireClusterBomb(
    origin: THREE.Vector3,
    targetGround: { x: number; y: number }
  ): boolean {
    if (this.clusterCooldown > 0) return false;

    this.clusterCooldown = this.CLUSTER_COOLDOWN_TIME;

    const dx = targetGround.x - origin.x;
    const dy = targetGround.y - origin.z; // worldY is Three.js Z
    const dz = origin.y; // altitude is Three.js Y

    // Compute ballistic velocity to arrive smoothly near target
    const estTime = Math.max(0.6, Math.sqrt((2 * dz) / 85.0));
    const vx = dx / (estTime * 1.5);
    const vy = dy / (estTime * 1.5);
    const vz = -15.0; // initial downward ejection impulse

    this.canisters.push({
      id: this.nextId++,
      x: origin.x,
      y: origin.z,
      z: origin.y,
      vx,
      vy,
      vz,
      targetX: targetGround.x,
      targetY: targetGround.y,
      splitAltitude: Math.max(25, origin.y * 0.45)
    });

    AudioSystem.playClusterLaunchSFX();

    return true;
  }

  /** Mid-air canister detonation & dispersal into 6 bomblets */
  private static splitCanister(c: ClusterCanister) {
    AudioSystem.playClusterSplitSFX();

    // Mid-air airburst flash FX
    DestructionSystem.fxQueue.push({
      type: 'blast',
      x: c.x,
      y: c.y,
      z: c.z,
      data: { entityId: 0, targetFrame: 0 }
    });
    DestructionSystem.fxQueue.push({
      type: 'shake',
      x: 0, y: 0, z: 0,
      data: { intensity: 6 }
    });

    const SUB_COUNT = 6;
    const SPREAD_SPEED = 28.0;

    for (let i = 0; i < SUB_COUNT; i++) {
      const angle = (i / SUB_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const speed = SPREAD_SPEED * (0.8 + Math.random() * 0.4);
      const vx = c.vx * 0.4 + Math.cos(angle) * speed;
      const vy = c.vy * 0.4 + Math.sin(angle) * speed;
      const vz = 8.0 + Math.random() * 8.0; // upward pop

      this.bomblets.push({
        id: this.nextId++,
        x: c.x,
        y: c.y,
        z: c.z,
        vx,
        vy,
        vz,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 15
      });
    }
  }

  /** Catastrophic ground impact of an individual bomblet */
  private static detonateBomblet(b: ClusterBomblet) {
    // 1. Heavy collateral damage
    DestructionSystem.applyCollateralDamage(0, b.x, b.y, 45, 50);

    // 2. Permanent ground crater decal
    DecalManager.spawnDecal(b.x, b.y, 'crater', 28);

    // 3. Shockwave & explosion FX
    DestructionSystem.fxQueue.push({
      type: 'blast360',
      x: b.x,
      y: b.y,
      z: 2,
      data: { entityId: 0, targetFrame: 0 }
    });
    DestructionSystem.fxQueue.push({
      type: 'shake',
      x: 0, y: 0, z: 0,
      data: { intensity: 10 }
    });
    DestructionSystem.fxQueue.push({
      type: 'debris',
      x: b.x,
      y: b.y,
      z: 0,
      data: { count: 18, palette: [0x884422, 0xaa5533, 0x555555, 0x222222] }
    });
    DestructionSystem.fxQueue.push({
      type: 'dust',
      x: b.x,
      y: b.y,
      z: 0,
      data: { count: 12 }
    });
    DestructionSystem.fxQueue.push({
      type: 'fire',
      x: b.x,
      y: b.y,
      z: 0,
      data: {}
    });

    AudioSystem.playExplosionSFX(1.3);
  }

  public static isClusterReady(): boolean {
    return this.clusterCooldown <= 0;
  }

  public static getClusterCooldownRatio(): number {
    return this.clusterCooldown / this.CLUSTER_COOLDOWN_TIME;
  }
}
