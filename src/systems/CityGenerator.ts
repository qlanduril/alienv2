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
    const TILE_SIZE = TileMap.TILE_SIZE; // 16

    const occupied: boolean[][] = Array.from({ length: GRID_DIM }, () => Array(GRID_DIM).fill(false));

    // 1. Mark all road network cells as occupied
    for (let gx = 0; gx < GRID_DIM; gx++) {
      for (let gz = 0; gz < GRID_DIM; gz++) {
        if (gx % AVENUE_INTERVAL === 0 || gz % STREET_INTERVAL === 0) {
          occupied[gx][gz] = true;
        }
      }
    }

    let count = 0;

    // Landmark Map for civic buildings in specific super-blocks
    const landmarkMap = new Map<string, string>([
      ['0,0', '3'], // School campus in Block (0,0)
      ['2,2', '1'], // Hospital complex in Block (2,2)
      ['1,4', '2'], // Shopping Mall in Block (1,4)
      ['3,6', '4'], // Industrial Warehouse in Block (3,6)
    ]);

    const foregroundPool = ['b1', 'b2'];
    const midgroundPool = ['b3', 'b4', 'res_bronze', 'res_sky'];
    const backgroundPool = ['sky_cyber', 'sky_artdeco', 'sky_biotech', '5'];

    // 2. Iterate through super-blocks and execute 100% dense lot filling
    let blockIndexX = 0;
    for (let startGx = 0; startGx < GRID_DIM; startGx += AVENUE_INTERVAL) {
      let blockIndexZ = 0;
      for (let startGz = 0; startGz < GRID_DIM; startGz += STREET_INTERVAL) {

        const blockKey = `${blockIndexX},${blockIndexZ}`;
        const civicTypeKey = landmarkMap.get(blockKey);

        // Check if block interior fits a 3x3 Landmark Civic Building
        if (civicTypeKey) {
          const def = BUILDING_DEFS[civicTypeKey];
          const wxTiles = Math.max(1, Math.round(def.width / TILE_SIZE));  // 3 tiles
          const wzTiles = Math.max(1, Math.round(def.length / TILE_SIZE)); // 3 tiles

          const gx = startGx + 2;
          const gz = startGz + 2;

          let canFit = true;
          for (let dx = 0; dx < wxTiles; dx++) {
            for (let dz = 0; dz < wzTiles; dz++) {
              if (gx + dx >= startGx + AVENUE_INTERVAL || gz + dz >= startGz + STREET_INTERVAL || gx + dx >= GRID_DIM || gz + dz >= GRID_DIM || occupied[gx + dx][gz + dz]) {
                canFit = false;
              }
            }
          }

          if (canFit) {
            // Reserve 3x3 footprint AND clear plaza buffer around landmark so it remains 100% unobstructed
            for (let dx = -1; dx <= wxTiles; dx++) {
              for (let dz = -1; dz <= wzTiles; dz++) {
                const tx = gx + dx;
                const tz = gz + dz;
                if (tx >= 0 && tx < GRID_DIM && tz >= 0 && tz < GRID_DIM) {
                  occupied[tx][tz] = true;
                }
              }
            }

            const pos = LotManager.computeLotWorldPos(gx, gz, wxTiles, wzTiles);
            const entity = ECS.createEntity();
            const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, civicTypeKey, 'civic_landmark');
            this.spawnBuildingEntity(entity, lot, civicTypeKey);
            count++;
          }
        }

        // Fill block interior micro-lots with balanced density & height gradient
        for (let offX = 1; offX < AVENUE_INTERVAL; offX++) {
          for (let offZ = 1; offZ < STREET_INTERVAL; offZ++) {
            const gx = startGx + offX;
            const gz = startGz + offZ;

            if (gx >= GRID_DIM || gz >= GRID_DIM || occupied[gx][gz]) continue;

            const cellSeed = Math.abs((startGx * 1337 + startGz * 7331 + offX * 97 + offZ * 193)) % 1000;

            // Controlled density: skip ~25% of micro-lots to leave open plazas & clear road views
            if (cellSeed % 100 < 25) {
              continue;
            }

            occupied[gx][gz] = true;

            // Height Gradient: Low-rises on South/West edges, Skyscrapers sparingly on North/East edges
            let typeKey: string;
            if ((offZ === STREET_INTERVAL - 1 || offX === AVENUE_INTERVAL - 1) && (cellSeed % 100 > 60)) {
              typeKey = backgroundPool[cellSeed % backgroundPool.length];
            } else if (offZ <= 2 || offX <= 2) {
              typeKey = foregroundPool[cellSeed % foregroundPool.length];
            } else {
              typeKey = midgroundPool[cellSeed % midgroundPool.length];
            }

            const pos = LotManager.computeLotWorldPos(gx, gz, 1, 1);
            const entity = ECS.createEntity();
            const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, typeKey, 'dense');
            this.spawnBuildingEntity(entity, lot, typeKey);
            count++;
          }
        }

        blockIndexZ++;
      }
      blockIndexX++;
    }

    console.log(`Generated ${count} wall-to-wall Manhattan super-block buildings.`);
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


