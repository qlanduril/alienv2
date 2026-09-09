import { ECS } from '../core/ECS';
import { PositionComponent, PlayerTagComponent } from '../core/Components';
import { DestructionSystem } from './DestructionSystem';
import { ScoreSystem } from './ScoreSystem';
import { AudioSystem } from './AudioSystem';
import { DecalManager } from '../rendering/TileSystem/DecalManager';

export interface FighterJet {
  id: number;
  x: number;
  y: number; // depth
  z: number; // altitude
  vx: number;
  vy: number;
  vz: number;
  speed: number;
  heading: number;
  pitch: number;
  roll: number;
  state: 'approach' | 'attack' | 'breakaway';
  attackTimer: number;
  burstCount: number;
  burstInterval: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  smokeTimer: number;
}

export interface SamTurret {
  id: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  reloadTimer: number;
  hp: number;
  maxHp: number;
  alive: boolean;
}

export interface DefenseMissile {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  lifetime: number;
  speed: number;
  alive: boolean;
}

export interface TracerBullet {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  lifetime: number;
}

export class DefenseSystem {
  private static nextId = 1;

  // Active units
  public static jets: FighterJet[] = [];
  public static turrets: SamTurret[] = [];
  public static missiles: DefenseMissile[] = [];
  public static tracers: TracerBullet[] = [];

  // Player defense state
  public static playerShield: number = 100;
  public static readonly MAX_SHIELD = 100;
  public static playerHull: number = 100;
  public static readonly MAX_HULL = 100;
  private static shieldRegenTimer: number = 0;
  public static shieldFlareTimer: number = 0;

  // Spawning intervals
  private static jetSpawnTimer: number = 5.0; // initial spawn after 5s
  private static isInitialized = false;

  public static init() {
    this.jets = [];
    this.turrets = [];
    this.missiles = [];
    this.tracers = [];
    this.playerShield = 100;
    this.playerHull = 100;
    this.shieldRegenTimer = 0;
    this.shieldFlareTimer = 0;
    this.jetSpawnTimer = 5.0;

    this.spawnGroundTurrets();
    this.isInitialized = true;
  }

  private static spawnGroundTurrets() {
    // Strategic defense positions across map (e.g. bunker, civic plazas, highway checkpoints)
    const positions = [
      { x: -140, y: -160, z: 2 },  // Military outpost Alpha
      { x: 160,  y: -140, z: 2 },  // East Checkpoint
      { x: -180, y: 150,  z: 2 },  // South West Defense Battery
      { x: 150,  y: 160,  z: 2 }   // South East SAM Site
    ];

    for (const p of positions) {
      this.turrets.push({
        id: this.nextId++,
        x: p.x,
        y: p.y,
        z: p.z,
        yaw: 0,
        pitch: 0.3,
        reloadTimer: 2.0 + Math.random() * 3.0,
        hp: 120,
        maxHp: 120,
        alive: true
      });
    }
  }

  private static spawnFighterWing(playerX: number, playerY: number) {
    // Spawn a pair of supersonic interceptor jets from map border
    const side = Math.floor(Math.random() * 4);
    let startX = 0;
    let startY = 0;
    const DIST = 520;

    if (side === 0) { startX = -DIST; startY = -DIST + Math.random() * DIST * 2; }
    else if (side === 1) { startX = DIST; startY = -DIST + Math.random() * DIST * 2; }
    else if (side === 2) { startX = -DIST + Math.random() * DIST * 2; startY = -DIST; }
    else { startX = -DIST + Math.random() * DIST * 2; startY = DIST; }

    const speed = 120.0;
    const dx = playerX - startX;
    const dy = playerY - startY;
    const angle = Math.atan2(dy, dx);

    for (let i = 0; i < 2; i++) {
      const offsetAngle = angle + Math.PI * 0.5;
      const offsetDist = (i === 0 ? -16 : 16);
      const jetX = startX + Math.cos(offsetAngle) * offsetDist;
      const jetY = startY + Math.sin(offsetAngle) * offsetDist;

      this.jets.push({
        id: this.nextId++,
        x: jetX,
        y: jetY,
        z: 75 + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: 0,
        speed,
        heading: angle,
        pitch: 0,
        roll: 0,
        state: 'approach',
        attackTimer: 0,
        burstCount: 0,
        burstInterval: 0,
        hp: 40,
        maxHp: 40,
        alive: true,
        smokeTimer: 0
      });
    }

    AudioSystem.playJetFlybySFX();
  }

  public static tick(delta: number) {
    if (!this.isInitialized) {
      this.init();
    }

    // 1. Get Player UFO position
    let playerX = 0;
    let playerY = 0;
    let playerZ = 75;

    for (const entity of ECS.entities) {
      if (PlayerTagComponent.has(entity)) {
        const pos = PositionComponent.get(entity);
        if (pos) {
          playerX = pos.worldX;
          playerY = pos.worldY;
          playerZ = pos.worldZ || 75;
        }
        break;
      }
    }

    // 2. Shield Regeneration
    if (this.shieldFlareTimer > 0) {
      this.shieldFlareTimer -= delta;
    }

    if (this.shieldRegenTimer > 0) {
      this.shieldRegenTimer -= delta;
    } else if (this.playerShield < this.MAX_SHIELD) {
      this.playerShield = Math.min(this.MAX_SHIELD, this.playerShield + delta * 20.0);
    }

    // 3. Fighter Jet Wing Spawning
    const activeJetsCount = this.jets.filter(j => j.alive).length;
    if (activeJetsCount === 0) {
      this.jetSpawnTimer -= delta;
      if (this.jetSpawnTimer <= 0) {
        this.jetSpawnTimer = 16.0; // wave cooldown
        this.spawnFighterWing(playerX, playerY);
      }
    }

    // 4. Update Fighter Jets
    for (let i = this.jets.length - 1; i >= 0; i--) {
      const jet = this.jets[i];
      if (!jet.alive) {
        this.jets.splice(i, 1);
        continue;
      }

      const dx = playerX - jet.x;
      const dy = playerY - jet.y;
      const dz = playerZ - jet.z;
      const distToUfo = Math.sqrt(dx * dx + dy * dy);

      if (jet.state === 'approach') {
        // Steer towards UFO
        const targetAngle = Math.atan2(dy, dx);
        let angleDiff = targetAngle - jet.heading;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

        jet.heading += angleDiff * Math.min(1.0, delta * 3.5);
        jet.roll = angleDiff * 1.5; // bank turn

        jet.vx = Math.cos(jet.heading) * jet.speed;
        jet.vy = Math.sin(jet.heading) * jet.speed;

        // Transition to attack when close
        if (distToUfo < 180) {
          jet.state = 'attack';
          jet.burstCount = 4;
          jet.burstInterval = 0.08;
        }
      } else if (jet.state === 'attack') {
        // Fire bursts of tracers
        jet.burstInterval -= delta;
        if (jet.burstInterval <= 0 && jet.burstCount > 0) {
          jet.burstInterval = 0.12;
          jet.burstCount--;

          // Fire tracer towards UFO
          const tracerSpeed = 220.0;
          const tDist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          this.tracers.push({
            x: jet.x,
            y: jet.y,
            z: jet.z,
            vx: (dx / tDist) * tracerSpeed,
            vy: (dy / tDist) * tracerSpeed,
            vz: (dz / tDist) * tracerSpeed,
            lifetime: 1.2
          });
        }

        if (distToUfo < 60 || jet.burstCount <= 0) {
          jet.state = 'breakaway';
        }
      } else if (jet.state === 'breakaway') {
        // Bank hard and climb away
        jet.roll = 0.8;
        jet.vz = delta * 15;
        // Check if escaped beyond boundary
        if (Math.abs(jet.x) > 520 || Math.abs(jet.y) > 520) {
          jet.alive = false;
          continue;
        }
      }

      jet.x += jet.vx * delta;
      jet.y += jet.vy * delta;
      jet.z += jet.vz * delta;

      // Contrail smoke
      jet.smokeTimer += delta;
      if (jet.smokeTimer >= 0.04) {
        jet.smokeTimer = 0;
        DestructionSystem.fxQueue.push({
          type: 'smoke',
          x: jet.x,
          y: jet.y,
          z: jet.z,
          data: { count: 1 }
        });
      }
    }

    // 5. Update Tracers (Bullets)
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const tr = this.tracers[i];
      tr.x += tr.vx * delta;
      tr.y += tr.vy * delta;
      tr.z += tr.vz * delta;
      tr.lifetime -= delta;

      // Check hit on UFO
      const dx = tr.x - playerX;
      const dy = tr.y - playerY;
      const dz = tr.z - playerZ;
      if (dx * dx + dy * dy + dz * dz < 18 * 18) {
        this.applyDamageToPlayer(12);
        this.tracers.splice(i, 1);
        continue;
      }

      if (tr.lifetime <= 0) {
        this.tracers.splice(i, 1);
      }
    }

    // 6. Update SAM Turrets & Launchers
    for (const turret of this.turrets) {
      if (!turret.alive) continue;

      const dx = playerX - turret.x;
      const dy = playerY - turret.y;
      const dz = playerZ - turret.z;
      const dist = Math.sqrt(dx * dx + dy * dy);

      turret.yaw = Math.atan2(dy, dx);
      turret.pitch = Math.atan2(dz, Math.max(1, dist));

      turret.reloadTimer -= delta;
      if (turret.reloadTimer <= 0 && dist < 260) {
        turret.reloadTimer = 5.5 + Math.random() * 2.0;

        // Launch SAM homing missile
        this.missiles.push({
          id: this.nextId++,
          x: turret.x,
          y: turret.y,
          z: turret.z + 4,
          vx: Math.cos(turret.yaw) * 20,
          vy: Math.sin(turret.yaw) * 20,
          vz: 35.0, // initial upward launch boost
          speed: 85.0,
          lifetime: 5.5,
          alive: true
        });

        AudioSystem.playMissileLaunchSFX();

        DestructionSystem.fxQueue.push({
          type: 'sparks',
          x: turret.x,
          y: turret.y,
          z: turret.z + 4,
          data: { count: 8 }
        });
      }
    }

    // 7. Update Homing Missiles
    for (let i = this.missiles.length - 1; i >= 0; i--) {
      const m = this.missiles[i];
      if (!m.alive) {
        this.missiles.splice(i, 1);
        continue;
      }

      m.lifetime -= delta;
      if (m.lifetime <= 0) {
        this.detonateMissile(m, false);
        this.missiles.splice(i, 1);
        continue;
      }

      // Homing vector towards UFO
      const dx = playerX - m.x;
      const dy = playerY - m.y;
      const dz = playerZ - m.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      // Impact on UFO
      if (dist < 14.0) {
        this.applyDamageToPlayer(25);
        this.detonateMissile(m, true);
        this.missiles.splice(i, 1);
        continue;
      }

      // Turn towards UFO
      const targetDirX = dx / dist;
      const targetDirY = dy / dist;
      const targetDirZ = dz / dist;

      const TURN_RATE = 3.8 * delta;
      m.vx += (targetDirX * m.speed - m.vx) * TURN_RATE;
      m.vy += (targetDirY * m.speed - m.vy) * TURN_RATE;
      m.vz += (targetDirZ * m.speed - m.vz) * TURN_RATE;

      m.x += m.vx * delta;
      m.y += m.vy * delta;
      m.z += m.vz * delta;

      // Rocket smoke trail
      DestructionSystem.fxQueue.push({
        type: 'smoke',
        x: m.x,
        y: m.y,
        z: m.z,
        data: { count: 2 }
      });
    }
  }

  public static applyDamageToPlayer(amount: number) {
    this.shieldRegenTimer = 4.0;
    this.shieldFlareTimer = 0.35;

    if (this.playerShield > 0) {
      this.playerShield = Math.max(0, this.playerShield - amount);
      AudioSystem.playShieldHitSFX();
    } else {
      this.playerHull = Math.max(0, this.playerHull - amount);
      AudioSystem.playExplosionSFX(0.7);
    }

    DestructionSystem.fxQueue.push({
      type: 'shake',
      x: 0, y: 0, z: 0,
      data: { intensity: 8 }
    });
  }

  private static detonateMissile(m: DefenseMissile, hitTarget: boolean) {
    DestructionSystem.fxQueue.push({
      type: 'blast',
      x: m.x,
      y: m.y,
      z: m.z,
      data: { entityId: 0, targetFrame: 0 }
    });
    DestructionSystem.fxQueue.push({
      type: 'shake',
      x: 0, y: 0, z: 0,
      data: { intensity: hitTarget ? 10 : 4 }
    });
  }

  /** Player targeting: check if a laser hit ray intersects a jet, SAM turret, or missile */
  public static checkTargetHit(
    originX: number,
    originY: number,
    radius: number,
    damage: number
  ): boolean {
    // 1. Check Jets
    for (const jet of this.jets) {
      if (!jet.alive) continue;
      const dx = jet.x - originX;
      const dy = jet.y - originY;
      if (dx * dx + dy * dy <= radius * radius) {
        jet.hp -= damage;
        if (jet.hp <= 0) {
          jet.alive = false;
          DestructionSystem.fxQueue.push({
            type: 'blast360',
            x: jet.x, y: jet.y, z: jet.z,
            data: { entityId: 0, targetFrame: 0 }
          });
          DestructionSystem.fxQueue.push({
            type: 'debris',
            x: jet.x, y: jet.y, z: jet.z,
            data: { count: 25, palette: [0x555555, 0x888888, 0xff4400] }
          });
          ScoreSystem.addScore(400, 'Interceptor Jet', { x: jet.x, y: jet.y, z: jet.z });
          AudioSystem.playExplosionSFX(1.4);
        }
        return true;
      }
    }

    // 2. Check Turrets
    for (const turret of this.turrets) {
      if (!turret.alive) continue;
      const dx = turret.x - originX;
      const dy = turret.y - originY;
      if (dx * dx + dy * dy <= (radius + 8) * (radius + 8)) {
        turret.hp -= damage;
        if (turret.hp <= 0) {
          turret.alive = false;
          DestructionSystem.fxQueue.push({
            type: 'blast360',
            x: turret.x, y: turret.y, z: turret.z + 4,
            data: { entityId: 0, targetFrame: 0 }
          });
          DecalManager.spawnDecal(turret.x, turret.y, 'crater', 20);
          ScoreSystem.addScore(300, 'SAM Turret', { x: turret.x, y: turret.y, z: turret.z + 4 });
          AudioSystem.playExplosionSFX(1.2);
        }
        return true;
      }
    }

    // 3. Check Missiles (interception)
    for (const m of this.missiles) {
      if (!m.alive) continue;
      const dx = m.x - originX;
      const dy = m.y - originY;
      if (dx * dx + dy * dy <= (radius + 6) * (radius + 6)) {
        m.alive = false;
        DestructionSystem.fxQueue.push({
          type: 'blast',
          x: m.x, y: m.y, z: m.z,
          data: { entityId: 0, targetFrame: 0 }
        });
        ScoreSystem.addScore(150, 'Missile Intercepted', { x: m.x, y: m.y, z: m.z });
        return true;
      }
    }

    return false;
  }
}
