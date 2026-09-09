import { ECS, Entity } from '../core/ECS';
import { HealthComponent, RenderStateComponent, PositionComponent, ZonalHealthComponent } from '../core/Components';
import { DamageCalc } from '../core/DamageCalc';
import { DamageZone } from '../core/ZoneDefs';
import { DamageStateTree, DamageLevel } from '../core/DamageStateTree';
import { DecalManager } from '../rendering/TileSystem/DecalManager';
import { BuildingRenderer } from '../rendering/BuildingRenderer';
import { ParticleSimSystem } from './ParticleSimSystem';

export type FXEvent =
  | { type: 'blast' | 'blast360'; x: number; y: number; z: number; data: { entityId: Entity; targetFrame: number } }
  | { type: 'blast_zonal'; x: number; y: number; z: number; data: { entityId: Entity; targetFrame: number; zone: DamageZone; level: DamageLevel; uvCenter: { x: number; y: number } } }
  | { type: 'shake'; x: number; y: number; z: number; data: { intensity: number } }
  | { type: 'hit_fx'; x: number; y: number; z: number; data: { entityId: Entity; intensity: 'light' | 'heavy' } }
  | { type: 'debris' | 'dust' | 'smoke' | 'sparks'; x: number; y: number; z: number; data: { count: number; entityId?: Entity; palette?: number[] } }
  | { type: 'fire'; x: number; y: number; z: number; data: { entityId?: Entity } }
  | { type: 'laser'; x: number; y: number; z: number; data: { tx: number; ty: number; tz: number } };

// ─── Cluster Explosion Settings ───────────────────────────────────────────────
const CLUSTER_CHECK_INTERVAL  = 3.0;  // seconds between cluster scans
const CLUSTER_RADIUS_SQ       = 80 * 80; // world units² — cluster detection radius
const CLUSTER_THRESHOLD       = 3;    // minimum damaged buildings to trigger cluster blast
const CLUSTER_DAMAGE_THRESHOLD = 0.35; // building must be ≥35% damaged to count

// ─── Ambient Damage Smoke/Fire Timers ────────────────────────────────────────
const AMBIENT_TICK_INTERVAL = 0.5;
const AMBIENT_FIRE_THRESHOLD = 0.3;
const AMBIENT_SMOKE_THRESHOLD = 0.6;

import { SpatialGrid } from '../core/SpatialGrid';

export class DestructionSystem {
  public static fxQueue: FXEvent[] = [];

  private static ambientTimer: number = 0;
  private static clusterTimer: number = 0;

  /** Set of entities that have already triggered a cluster blast (reset after 10s) */
  private static clusterCooldown: Map<Entity, number> = new Map();

  public static init() {
    ECS.addSystem(this.tick.bind(this));
  }

  public static tick(delta: number) {
    // ── Ambient fire/smoke on damaged buildings ─────────────────────────
    this.ambientTimer += delta;
    if (this.ambientTimer >= AMBIENT_TICK_INTERVAL) {
      this.ambientTimer = 0;
      for (const entity of ECS.entities) {
        const zonalHealth = ZonalHealthComponent.get(entity);
        const pos = PositionComponent.get(entity);
        if (!zonalHealth || !pos) continue;
        const dmgRatio = 1 - zonalHealth.totalHp / zonalHealth.maxTotalHp;
        if (dmgRatio > AMBIENT_FIRE_THRESHOLD && Math.random() < dmgRatio * 0.6) {
          this.fxQueue.push({ type: 'fire', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { entityId: entity } });
        }
        if (dmgRatio > AMBIENT_SMOKE_THRESHOLD && Math.random() < (dmgRatio - 0.3) * 0.4) {
          this.fxQueue.push({ type: 'smoke', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 2, entityId: entity } });
        }
      }
    }

    // ── Cluster explosion scan ──────────────────────────────────────────
    this.clusterTimer += delta;
    if (this.clusterTimer >= CLUSTER_CHECK_INTERVAL) {
      this.clusterTimer = 0;
      this.checkClusterExplosions();
    }

    // Age out cluster cooldowns
    const now = performance.now() / 1000;
    for (const [entity, expiry] of this.clusterCooldown) {
      if (now > expiry) this.clusterCooldown.delete(entity);
    }
  }

  /**
   * Apply collateral shockwave damage to surrounding buildings within radius.
   */
  public static applyCollateralDamage(
    originEntity: Entity,
    originX: number,
    originZ: number,
    radius: number = 64,
    maxDamage: number = 25
  ) {
    const candidates = SpatialGrid.queryRadius(originX, originZ, radius);

    for (const entity of candidates) {
      if (entity === originEntity) continue;
      const pos = PositionComponent.get(entity);
      const zonal = ZonalHealthComponent.get(entity);
      if (!pos || !zonal || zonal.totalHp <= 0) continue;

      const dx = pos.worldX - originX;
      const dz = pos.worldY - originZ;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist <= radius && dist > 0.1) {
        const falloff = 1 - dist / radius;
        const damage = Math.round(maxDamage * falloff);
        if (damage <= 0) continue;

        const zoneKeys: DamageZone[] = [
          DamageZone.CENTER,
          DamageZone.TOP_CENTER,
          DamageZone.BASE_CENTER,
          DamageZone.BASE_LEFT,
          DamageZone.BASE_RIGHT
        ];
        const targetZone = zoneKeys[Math.floor(Math.random() * zoneKeys.length)];
        const zone = zonal.zones.get(targetZone);

        if (zone) {
          zone.hp = Math.max(0, zone.hp - damage);
          zonal.totalHp = Math.max(0, zonal.totalHp - damage);

          const health = HealthComponent.get(entity);
          if (health) {
            health.currentHP = zonal.totalHp;
          }

          const newLevel = DamageStateTree.computeZoneLevel(zone.hp / zone.maxHp);
          if (newLevel > zone.level) {
            zone.level = newLevel;
            zonal.globalDamageLevel = DamageStateTree.computeGlobalLevel(
              zonal,
              Array.from(zonal.zones.values()) as any
            );
          }

          this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'light' } });
          this.fxQueue.push({ type: 'smoke', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 3, entityId: entity } });
          this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 4, entityId: entity } });
        }
      }
    }
  }

  // ─── Cluster Explosion Detection ─────────────────────────────────────────────

  private static checkClusterExplosions() {
    // Collect all significantly damaged buildings
    const damaged: Array<{ entity: Entity; x: number; z: number }> = [];
    for (const entity of ECS.entities) {
      if (this.clusterCooldown.has(entity)) continue;
      const zh = ZonalHealthComponent.get(entity);
      const pos = PositionComponent.get(entity);
      if (!zh || !pos) continue;
      const ratio = 1 - zh.totalHp / zh.maxTotalHp;
      if (ratio >= CLUSTER_DAMAGE_THRESHOLD) {
        damaged.push({ entity, x: pos.worldX, z: pos.worldY });
      }
    }

    if (damaged.length < CLUSTER_THRESHOLD) return;

    // Find clusters using a simple O(n²) adjacency check (small n in practice)
    const triggered = new Set<number>();
    for (let i = 0; i < damaged.length; i++) {
      if (triggered.has(i)) continue;
      const cluster = [damaged[i]];

      for (let j = i + 1; j < damaged.length; j++) {
        if (triggered.has(j)) continue;
        const dx = damaged[i].x - damaged[j].x;
        const dz = damaged[i].z - damaged[j].z;
        if (dx * dx + dz * dz <= CLUSTER_RADIUS_SQ) cluster.push(damaged[j]);
      }

      if (cluster.length < CLUSTER_THRESHOLD) continue;

      // Compute centroid of the cluster
      const cx = cluster.reduce((s, b) => s + b.x, 0) / cluster.length;
      const cz = cluster.reduce((s, b) => s + b.z, 0) / cluster.length;

      // Mark all cluster members on cooldown (10 s)
      const now = performance.now() / 1000;
      cluster.forEach((b) => {
        triggered.add(damaged.indexOf(b));
        this.clusterCooldown.set(b.entity, now + 10);
      });

      // ── Fire cluster blast FX ──────────────────────────────────────────
      // Multiple overlapping blasts across the cluster centroid region
      const anchorEntity = cluster[0].entity;
      this.fxQueue.push({ type: 'blast', x: cx,       y: cz,     z: 10, data: { entityId: anchorEntity, targetFrame: 0 } });
      this.fxQueue.push({ type: 'blast', x: cx + 12,  y: cz + 8, z: 12, data: { entityId: anchorEntity, targetFrame: 0 } });
      this.fxQueue.push({ type: 'blast', x: cx - 10,  y: cz - 6, z: 8,  data: { entityId: anchorEntity, targetFrame: 0 } });
      this.fxQueue.push({ type: 'blast360', x: cx,    y: cz,     z: 6,  data: { entityId: anchorEntity, targetFrame: 0 } });

      this.fxQueue.push({ type: 'shake',  x: 0, y: 0, z: 0, data: { intensity: 14 } });
      this.fxQueue.push({ type: 'smoke',  x: cx, y: cz, z: 0, data: { count: 20,         entityId: anchorEntity } });
      this.fxQueue.push({ type: 'debris', x: cx, y: cz, z: 0, data: { count: 35, palette: [0x884422, 0xaa5533, 0x663311, 0x222222], entityId: anchorEntity } });
      this.fxQueue.push({ type: 'dust',   x: cx, y: cz, z: 0, data: { count: 18,         entityId: anchorEntity } });
      this.fxQueue.push({ type: 'sparks', x: cx, y: cz, z: 0, data: { count: 20,         entityId: anchorEntity } });

      console.log(`[DestructionSystem] Cluster blast! ${cluster.length} buildings @ (${cx.toFixed(0)}, ${cz.toFixed(0)})`);
    }
  }

  // ─── Direct Hit Damage ────────────────────────────────────────────────────────

  /**
   * Apply direct hit damage to a building.
   * Frame advances on every single hit — no threshold gate.
   * Buildings die in ~6 hits (3 zones × 50 HP / 25 damage per hit).
   */
  public static applyZonalDamage(
    entity: Entity,
    zoneId: DamageZone,
    amount: number,
    uvCenter: { x: number; y: number }
  ) {
    const zonalHealth = ZonalHealthComponent.get(entity);
    const renderState = RenderStateComponent.get(entity);
    const pos         = PositionComponent.get(entity);
    if (!zonalHealth || !renderState || !pos) return;

    const zone = zonalHealth.zones.get(zoneId);
    if (!zone) return;

    // Deduct HP
    zone.hp = Math.max(0, zone.hp - amount);
    zonalHealth.totalHp = Math.max(0, zonalHealth.totalHp - amount);

    const health = HealthComponent.get(entity);
    if (health) {
      health.currentHP = zonalHealth.totalHp;
    }

    // Update damage level for zone (drives collapse flag)
    const newLevel = DamageStateTree.computeZoneLevel(zone.hp / zone.maxHp);
    const levelChanged = newLevel > zone.level;
    if (levelChanged) {
      zone.level = newLevel;
      zonalHealth.globalDamageLevel = DamageStateTree.computeGlobalLevel(
        zonalHealth,
        Array.from(zonalHealth.zones.values()) as any
      );
    }

    // ── 1. Calculate target damage frame (swap deferred to peak explosion frame mask) ──
    const { typeKey, def } = BuildingRenderer.getTypeInfo(entity, renderState.texturePrefix);
    const maxFrame    = BuildingRenderer.BUILDING_MAX_FRAMES[typeKey] ?? 14;

    // Direct mapping: damage fraction → targetFrame
    const dmgFraction = 1 - zonalHealth.totalHp / zonalHealth.maxTotalHp;
    const targetFrame = Math.min(Math.floor(dmgFraction * maxFrame), maxFrame);

    // Compute footprint-scaled size for crater / effects
    const vScale = def ? (def.visualScale || 1.0) : 1.0;
    const footprintWidth = def ? (def.width || 16) : 16;
    const footprintDiagonal = footprintWidth * Math.SQRT2 * vScale;
    const craterSize = Math.max(18, Math.round(footprintDiagonal * 1.15));

    // ── 2. Scorch / crater decal ─────────────────────────────────────────
    if (zonalHealth.totalHp > 0) {
      const decalType = dmgFraction > 0.6 ? 'crater' : 'scorch';
      const decalSize = dmgFraction > 0.6 ? Math.round(craterSize * 0.6) : (10 + newLevel * 3);
      DecalManager.spawnDecal(pos.worldX, pos.worldY, decalType, decalSize);
    }

    // ── 3. Zonal blast FX ────────────────────────────────────────────────
    this.fxQueue.push({
      type: 'blast_zonal',
      x: pos.worldX, y: pos.worldY, z: pos.worldZ,
      data: { entityId: entity, targetFrame, zone: zoneId, level: Math.max(1, newLevel) as DamageLevel, uvCenter }
    });

    // ── 4. Screen shake ──────────────────────────────────────────────────
    const shakeIntensity = levelChanged ? newLevel * 2 + 4 : 3;
    this.fxQueue.push({ type: 'shake', x: 0, y: 0, z: 0, data: { intensity: shakeIntensity } });

    // ── 5. Physics debris, fire, smoke, sparks — every hit ───────────────
    const debrisCount = Math.max(8, newLevel * 6 + 8);
    let palette = [0x884422, 0xaa5533, 0x663311];
    if (typeKey === '1') palette = [0xffffff, 0xdddddd, 0xaaaaaa, 0xff4444];
    else if (typeKey === '3') palette = [0xd2b48c, 0xaaaaaa, 0x888888, 0x5c4033];

    this.fxQueue.push({ type: 'debris', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: debrisCount, entityId: entity, palette } });
    this.fxQueue.push({ type: 'dust',   x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 12, entityId: entity } });
    this.fxQueue.push({ type: 'smoke',  x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 8,  entityId: entity } });
    this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 10, entityId: entity } });
    this.fxQueue.push({ type: 'fire',   x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { entityId: entity } });
    this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: (levelChanged || newLevel >= 2) ? 'heavy' : 'light' } });

    // ── 6. Building demolition & collapse when totally destroyed ─────────
    if (zonalHealth.totalHp <= 0) {
      if (def && def.is3D) {
        // 3D building handled by update3DBuilding timeline
      } else {
        // 2D building demolition lifecycle (crumble, sink, footprint-scaled crater)
        BuildingRenderer.trigger2DDemolition(entity, craterSize, palette);
        ParticleSimSystem.spawnDemolitionVolcano(pos.worldX, 1, pos.worldY, craterSize, palette);
        this.fxQueue.push({ type: 'shake', x: 0, y: 0, z: 0, data: { intensity: 12 } });
        this.fxQueue.push({
          type: 'blast360',
          x: pos.worldX, y: pos.worldY, z: 6,
          data: { entityId: entity, targetFrame: maxFrame }
        });
      }
    }
  }

  // ─── Legacy flat-damage path (used by non-zonal buildings) ───────────────────
  public static applyDamage(entity: Entity, amount: number) {
    const health      = HealthComponent.get(entity);
    const renderState = RenderStateComponent.get(entity);
    const pos         = PositionComponent.get(entity);
    if (!health || !renderState || !pos) return;

    health.currentHP = Math.max(0, health.currentHP - amount);
    const zonalHealth = ZonalHealthComponent.get(entity);
    if (zonalHealth) {
      zonalHealth.totalHp = health.currentHP;
    }

    const prefixMatch = renderState.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/);
    const typeKey     = prefixMatch ? prefixMatch[1] : '3';
    const maxFrame    = BuildingRenderer.BUILDING_MAX_FRAMES[typeKey] ?? 14;
    const newFrameIndex = DamageCalc.computeFrameIndex(health.currentHP, health.maxHP, maxFrame);

    let palette = [0x884422, 0xaa5533, 0x663311];
    if (typeKey === '1') palette = [0xffffff, 0xdddddd, 0xaaaaaa, 0xff4444];
    else if (typeKey === '3') palette = [0xd2b48c, 0xaaaaaa, 0x888888, 0x5c4033];

    if (newFrameIndex !== health.state) {
      health.state = newFrameIndex;

      const { def } = BuildingRenderer.getTypeInfo(entity, renderState.texturePrefix);
      const vScale = def ? (def.visualScale || 1.0) : 1.0;
      const footprintWidth = def ? (def.width || 16) : 16;
      const craterSize = Math.max(18, Math.round(footprintWidth * Math.SQRT2 * vScale * 1.15));

      if (health.currentHP <= 0 && (!def || !def.is3D)) {
        BuildingRenderer.trigger2DDemolition(entity, craterSize, palette);
        ParticleSimSystem.spawnDemolitionVolcano(pos.worldX, 1, pos.worldY, craterSize, palette);
        this.fxQueue.push({ type: 'shake', x: 0, y: 0, z: 0, data: { intensity: 12 } });
      } else {
        DecalManager.spawnDecal(pos.worldX, pos.worldY, 'scorch', 15);
      }

      this.fxQueue.push({
        type: newFrameIndex === maxFrame ? 'blast' : 'blast360',
        x: pos.worldX, y: pos.worldY, z: pos.worldZ,
        data: { entityId: entity, targetFrame: newFrameIndex }
      });
      this.fxQueue.push({ type: 'shake', x: 0, y: 0, z: 0, data: { intensity: 8 } });

      this.fxQueue.push({ type: 'debris', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: Math.min(newFrameIndex * 3, 30), entityId: entity, palette } });
      this.fxQueue.push({ type: 'dust',   x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 15, entityId: entity } });
      this.fxQueue.push({ type: 'smoke',  x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 8,  entityId: entity } });
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 12, entityId: entity } });
      this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'heavy' } });
    } else {
      this.fxQueue.push({ type: 'fire',   x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { entityId: entity } });
      this.fxQueue.push({ type: 'sparks', x: pos.worldX, y: pos.worldY, z: pos.worldZ, data: { count: 5, entityId: entity } });
      this.fxQueue.push({ type: 'hit_fx', x: 0, y: 0, z: 0, data: { entityId: entity, intensity: 'light' } });
    }
  }

  // Executed by FXRenderer at peak explosion frame to sync texture
  public static executeTextureSwap(entity: Entity, targetFrame: number) {
    const renderState = RenderStateComponent.get(entity);
    if (renderState) renderState.currentFrame = targetFrame;
  }
}
