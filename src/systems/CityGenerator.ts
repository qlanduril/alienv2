import { ECS } from '../core/ECS';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { PositionComponent, HealthComponent, ZonalHealthComponent, CollisionComponent, RenderStateComponent } from '../core/Components';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { TileMap, BuildingLot, TerrainType } from '../rendering/TileSystem/TileMap';
import { SpatialGrid } from '../core/SpatialGrid';

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

    // 2. Map Layout Anchor Placement (Mimicking reference image)

    const anchors = [
      // Center: Mega Titan surrounded by dense area
      { key: 'mega_titan', gx: 30, gz: 30, w: 4, z: 4 },

      // South-East (Harbor/Water area)
      { key: 'statue_liberty', gx: 52, gz: 52, w: 3, z: 3 },
      { key: '4', gx: 45, gz: 55, w: 3, z: 3 }, // Warehouse near harbor

      // West (Airport area)
      { key: 'spaceship_hq', gx: 10, gz: 20, w: 4, z: 4 },

      // Stadiums
      { key: 'mega_stadium', gx: 10, gz: 50, w: 4, z: 3 }, // SW Stadium
      { key: 'mega_stadium', gx: 50, gz: 15, w: 4, z: 3 }, // East Stadium

      // Other Civic Landmarks
      { key: '3', gx: 40, gz: 10, w: 3, z: 3 }, // School
      { key: '1', gx: 20, gz: 10, w: 3, z: 3 }, // Hospital
      { key: '2', gx: 20, gz: 45, w: 3, z: 3 }, // Mall
      { key: 'pentagon_defense', gx: 30, gz: 10, w: 4, z: 4 } // Defense Bunker
    ];

    for (const c of anchors) {
      reserveArea(c.gx, c.gz, c.w, c.z, 1);
      if (c.key === 'statue_liberty') {
        for (let dx = 0; dx < c.w; dx++) {
          for (let dz = 0; dz < c.z; dz++) {
            const cell = TileMap.getCell(c.gx + dx, c.gz + dz);
            if (cell) cell.terrainType = TerrainType.WATER;
          }
        }
      }
      const pos = LotManager.computeLotWorldPos(c.gx, c.gz, c.w, c.z);
      const entity = ECS.createEntity();
      const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, c.key, 'landmark');
      this.spawnBuildingEntity(entity, lot, c.key);
      count++;
    }

    // 3. District Infill Pools
    const poolCenter = ['sky_cyber', 'sky_artdeco', 'sky_biotech', '5', 'b4'];   // Dense high-rises
    const poolSuburb = ['res_sky', 'b3', 'b2', 'res_bronze'];                     // Residential
    const poolIndustrial = ['b1', 'b2', 'b3'];                                    // Docks/Industrial

    // 4. Iterate Super-Blocks and Infill Micro-Lots by District
    for (let startGx = 0; startGx < GRID_DIM; startGx += AVENUE_INTERVAL) {
      for (let startGz = 0; startGz < GRID_DIM; startGz += STREET_INTERVAL) {

        for (let offX = 1; offX < AVENUE_INTERVAL; offX++) {
          for (let offZ = 1; offZ < STREET_INTERVAL; offZ++) {
            const gx = startGx + offX;
            const gz = startGz + offZ;

            if (gx >= GRID_DIM || gz >= GRID_DIM || occupied[gx][gz]) continue;

            const cellSeed = Math.abs((startGx * 1337 + startGz * 7331 + offX * 97 + offZ * 193)) % 1000;

            let skipProb = 20; // Default density
            let isWaterArea = gx > 40 && gz > 40;
            let isAirportArea = gx < 20 && gz > 15 && gz < 45;
            let isParkArea = gx > 40 && gz < 30;

            if (isWaterArea) {
              const cell = TileMap.getCell(gx, gz);
              if (cell) cell.terrainType = TerrainType.WATER;
              skipProb = 100; // No buildings in water
            } else if (isAirportArea) {
              const cell = TileMap.getCell(gx, gz);
              // Make it look like runway/tarmac
              if (cell) cell.terrainType = (gx % 2 === 0) ? TerrainType.ROAD_STRAIGHT_NS : TerrainType.ROAD_STRAIGHT_EW;
              skipProb = 100; // No buildings on runway
            } else if (isParkArea) {
              const cell = TileMap.getCell(gx, gz);
              if (cell && cell.terrainType !== TerrainType.ROAD_STRAIGHT_NS && cell.terrainType !== TerrainType.ROAD_STRAIGHT_EW && cell.terrainType !== TerrainType.ROAD_INTERSECTION) {
                cell.terrainType = TerrainType.GRASS;
              }
              skipProb = 70; // Very sparse buildings in park area
            }

            if (cellSeed % 100 < skipProb) {
              continue;
            }

            occupied[gx][gz] = true;

            // Pick District Pool based on distance to center
            const distToCenter = Math.sqrt(Math.pow(gx - 32, 2) + Math.pow(gz - 32, 2));

            let pool: string[];
            if (distToCenter < 15) {
              pool = poolCenter;
            } else if (distToCenter < 30) {
              pool = poolSuburb;
            } else {
              pool = poolIndustrial;
            }

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

    console.log(`Generated ${count} city buildings matching reference map layout.`);
    SpatialGrid.rebuild();
  }

  private static spawnBuildingEntity(entity: number, lot: BuildingLot, typeKey: string) {
    const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

    PositionComponent.set(entity, {
      worldX: lot.centerWorldX,
      worldY: lot.centerWorldZ, // Three.js ground depth (Z)
      worldZ: 0.0 // Ground level
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
