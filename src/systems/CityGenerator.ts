import { ECS } from '../core/ECS';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { PositionComponent, HealthComponent, ZonalHealthComponent, CollisionComponent, RenderStateComponent } from '../core/Components';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { TileMap, BuildingLot } from '../rendering/TileSystem/TileMap';

export class CityGenerator {
  public static generateCity() {
    const GRID_DIM = TileMap.GRID_DIM; // 64x64
    const AVENUE_INTERVAL = TileMap.AVENUE_INTERVAL; // 14
    const STREET_INTERVAL = TileMap.STREET_INTERVAL; // 7

    const occupied: boolean[][] = Array.from({ length: GRID_DIM }, () => Array(GRID_DIM).fill(false));

    // 1. Mark all arterial road network cells as occupied
    for (let gx = 0; gx < GRID_DIM; gx++) {
      for (let gz = 0; gz < GRID_DIM; gz++) {
        if (gx % AVENUE_INTERVAL === 0 || gz % STREET_INTERVAL === 0) {
          occupied[gx][gz] = true;
        }
      }
    }

    let count = 0;

    // Helper to reserve lot area and clear buffer
    const reserveArea = (gx: number, gz: number, wTiles: number, zTiles: number, buffer: number = 1) => {
      for (let dx = -buffer; dx < wTiles + buffer; dx++) {
        for (let dz = -buffer; dz < zTiles + buffer; dz++) {
          const tx = gx + dx;
          const tz = gz + dz;
          if (tx >= 0 && tx < GRID_DIM && tz >= 0 && tz < GRID_DIM) {
            occupied[tx][tz] = true;
          }
        }
      }
    };

    // 2. District Anchor Placement: Tier 4 Mega-Structures & Civic Landmarks

    // Anchor 1: Apex Mega-Tower (mega_titan) in Zone A (Financial Core)
    const titanGx = 15;
    const titanGz = 15;
    reserveArea(titanGx, titanGz, 4, 4, 1);
    const titanPos = LotManager.computeLotWorldPos(titanGx, titanGz, 4, 4);
    const titanEntity = ECS.createEntity();
    const titanLot = LotManager.calculateAndRegisterLot(titanEntity, titanPos.x, titanPos.z, 'mega_titan', 'mega_anchor');
    this.spawnBuildingEntity(titanEntity, titanLot, 'mega_titan');
    count++;

    // Anchor 2: Metropolitan Arena (mega_stadium) in Zone B (Civic & Leisure)
    const stadiumGx = 43;
    const stadiumGz = 8;
    reserveArea(stadiumGx, stadiumGz, 4, 3, 1);
    const stadiumPos = LotManager.computeLotWorldPos(stadiumGx, stadiumGz, 4, 3);
    const stadiumEntity = ECS.createEntity();
    const stadiumLot = LotManager.calculateAndRegisterLot(stadiumEntity, stadiumPos.x, stadiumPos.z, 'mega_stadium', 'mega_anchor');
    this.spawnBuildingEntity(stadiumEntity, stadiumLot, 'mega_stadium');
    count++;

    // Civic Landmarks Across Districts
    const civicAnchors = [
      { key: '3', gx: 43, gz: 22, w: 3, z: 3, name: 'School' },                  // Zone B Civic
      { key: '1', gx: 2, gz: 2, w: 3, z: 3, name: 'Hospital' },                  // Zone A Hospital
      { key: '2', gx: 2, gz: 16, w: 3, z: 3, name: 'Mall' },                     // Zone A Shopping
      { key: '4', gx: 43, gz: 43, w: 3, z: 3, name: 'Warehouse' },                // Zone C Docks
      { key: 'statue_liberty', gx: 29, gz: 2, w: 3, z: 3, name: 'Statue of Liberty' }, // Harbor Park Landmark
      { key: 'pentagon_defense', gx: 29, gz: 43, w: 4, z: 4, name: 'Defense Bunker' },// Defense Perimeter
      { key: 'spaceship_hq', gx: 2, gz: 43, w: 4, z: 4, name: 'Alien Spaceship HQ' }    // Alien Outpost
    ];

    for (const c of civicAnchors) {
      reserveArea(c.gx, c.gz, c.w, c.z, 1);
      const pos = LotManager.computeLotWorldPos(c.gx, c.gz, c.w, c.z);
      const entity = ECS.createEntity();
      const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, c.key, 'civic_landmark');
      this.spawnBuildingEntity(entity, lot, c.key);
      count++;
    }

    // 3. District Infill Pools
    const poolZoneA = ['sky_cyber', 'sky_artdeco', 'sky_biotech', '5', 'b4'];      // Financial Core Skyscrapers
    const poolZoneB = ['res_sky', 'b3', 'b4', 'b2', 'sky_cyber'];                 // Civic & Leisure High-Rises
    const poolZoneC = ['4', 'b1', 'b2', 'b3', 'pentagon_defense'];                // Waterfront Docks & Heavy Base
    const poolZoneD = ['b1', 'b2', 'res_bronze', 'b3'];                           // Residential Slums Brownstones

    // 4. Iterate Super-Blocks and Infill Micro-Lots by District
    for (let startGx = 0; startGx < GRID_DIM; startGx += AVENUE_INTERVAL) {
      for (let startGz = 0; startGz < GRID_DIM; startGz += STREET_INTERVAL) {

        for (let offX = 1; offX < AVENUE_INTERVAL; offX++) {
          for (let offZ = 1; offZ < STREET_INTERVAL; offZ++) {
            const gx = startGx + offX;
            const gz = startGz + offZ;

            if (gx >= GRID_DIM || gz >= GRID_DIM || occupied[gx][gz]) continue;

            const cellSeed = Math.abs((startGx * 1337 + startGz * 7331 + offX * 97 + offZ * 193)) % 1000;

            // Density Tuning per District
            let isZoneA = gx < 32 && gz < 32;
            let isZoneB = gx >= 32 && gz < 32;
            let isZoneC = gx >= 32 && gz >= 32;
            
            // Skip probability for parks / plazas / dock yards
            let skipProb = 20;
            if (isZoneB) skipProb = 35; // More open parks in Leisure zone
            if (isZoneC) skipProb = 30; // Docks open space

            if (cellSeed % 100 < skipProb) {
              continue;
            }

            occupied[gx][gz] = true;

            // Pick District Pool
            let pool: string[];
            if (isZoneA) pool = poolZoneA;
            else if (isZoneB) pool = poolZoneB;
            else if (isZoneC) pool = poolZoneC;
            else pool = poolZoneD;

            const typeKey = pool[cellSeed % pool.length];

            const pos = LotManager.computeLotWorldPos(gx, gz, 1, 1);
            const entity = ECS.createEntity();
            const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, typeKey, 'dense');
            this.spawnBuildingEntity(entity, lot, typeKey);
            count++;
          }
        }

      }
    }

    console.log(`Generated ${count} district-partitioned city buildings across Financial Core, Civic, Waterfront & Slums.`);
  }

  private static spawnBuildingEntity(entity: number, lot: BuildingLot, typeKey: string) {
    const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

    PositionComponent.set(entity, {
      worldX: lot.centerWorldX,
      worldY: lot.centerWorldZ, // Three.js ground depth (Z)
      worldZ: 0.05 // Altitude above foundation
    });

    HealthComponent.set(entity, {
      currentHP: 100,
      maxHP: 100,
      state: 0
    });

    // Initialize Zonal Health
    const zoneMap = new Map();
    const zonesDef = BUILDING_ZONES[typeKey] || BUILDING_ZONES['3'];
    for (const zd of zonesDef) {
      zoneMap.set(zd.id, {
        id: zd.id,
        level: 0, // PRISTINE
        hp: 100,
        maxHp: 100
      });
    }

    ZonalHealthComponent.set(entity, {
      zones: zoneMap,
      totalHp: 100 * zonesDef.length,
      maxTotalHp: 100 * zonesDef.length,
      globalDamageLevel: 0
    });

    CollisionComponent.set(entity, {
      width: def.width * def.visualScale,
      length: def.length * def.visualScale,
      height: def.height,
      active: true
    });

    RenderStateComponent.set(entity, {
      meshId: `building_${entity}`,
      texturePrefix: `building_${typeKey}_stage_`,
      currentFrame: 0,
      visible: true,
      opacity: 1
    });
  }
}
