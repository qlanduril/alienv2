import { ECS } from '../core/ECS';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { PositionComponent, HealthComponent, ZonalHealthComponent, CollisionComponent, RenderStateComponent } from '../core/Components';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { TileMap, BuildingLot } from '../rendering/TileSystem/TileMap';

export class CityGenerator {
  public static generateCity() {
    const GRID_DIM = TileMap.GRID_DIM; // 64x64
    const ROAD_INTERVAL = 6;
    const TILE_SIZE = TileMap.TILE_SIZE; // 16

    const occupied: boolean[][] = Array.from({ length: GRID_DIM }, () => Array(GRID_DIM).fill(false));

    // Mark all road tiles as occupied
    for (let gx = 0; gx < GRID_DIM; gx++) {
      for (let gz = 0; gz < GRID_DIM; gz++) {
        if (gx % ROAD_INTERVAL === 0 || gz % ROAD_INTERVAL === 0) {
          occupied[gx][gz] = true;
        }
      }
    }

    const totalBlocksX = Math.floor(GRID_DIM / ROAD_INTERVAL);
    const totalBlocksZ = Math.floor(GRID_DIM / ROAD_INTERVAL);

    let count = 0;

    // Map specific rare landmark civic blocks across the 10x10 city grid
    const landmarkMap = new Map<string, string>([
      ['2,2', '3'], // 1 School campus in Block (2,2)
      ['7,3', '1'], // 1 Hospital complex in Block (7,3)
      ['3,7', '2'], // 1 Shopping Mall in Block (3,7)
      ['8,8', '4'], // 1 Industrial Warehouse in Block (8,8)
    ]);

    for (let bx = 0; bx < totalBlocksX; bx++) {
      for (let bz = 0; bz < totalBlocksZ; bz++) {
        const startGx = bx * ROAD_INTERVAL + 1;
        const startGz = bz * ROAD_INTERVAL + 1;

        const blockKey = `${bx},${bz}`;
        const civicTypeKey = landmarkMap.get(blockKey);

        // 1. Spawning Rare 3x3 Landmark Civic Building
        if (civicTypeKey) {
          const def = BUILDING_DEFS[civicTypeKey];
          const wxTiles = Math.max(1, Math.round(def.width / TILE_SIZE));  // 3 tiles
          const wzTiles = Math.max(1, Math.round(def.length / TILE_SIZE)); // 3 tiles

          // Center 3x3 building inside 5x5 block at offset (1,1)
          const gx = startGx + 1;
          const gz = startGz + 1;

          let canFit = true;
          for (let dx = 0; dx < wxTiles; dx++) {
            for (let dz = 0; dz < wzTiles; dz++) {
              if (gx + dx >= startGx + 5 || gz + dz >= startGz + 5 || occupied[gx + dx][gz + dz]) {
                canFit = false;
              }
            }
          }

          if (canFit) {
            for (let dx = 0; dx < wxTiles; dx++) {
              for (let dz = 0; dz < wzTiles; dz++) {
                occupied[gx + dx][gz + dz] = true;
              }
            }

            const pos = LotManager.computeLotWorldPos(gx, gz, wxTiles, wzTiles);
            const entity = ECS.createEntity();
            const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, civicTypeKey, 'civic_landmark');
            this.spawnBuildingEntity(entity, lot, civicTypeKey);
            count++;
          }
        }


        // 2. Spawn Single-Tile Buildings with Balanced Density (~50-60% occupancy target)
        const blockSeed = Math.abs((bx * 1337 + bz * 7331)) % 1000;
        const foregroundPool = ['b1', 'b2'];
        const midgroundPool = ['res_bronze', 'res_sky', 'b3', 'b4'];
        const backgroundPool = ['sky_artdeco', 'sky_biotech', 'sky_cyber', '5'];


        for (let offX = 0; offX < 5; offX++) {
          for (let offZ = 0; offZ < 5; offZ++) {
            const gx = startGx + offX;
            const gz = startGz + offZ;

            if (occupied[gx][gz]) continue;

            const cellSeed = Math.abs((blockSeed * 37 + offX * 97 + offZ * 193)) % 100;

            // Controlled density: skip ~35% of remaining tiles to leave open plazas & green courtyards
            if (cellSeed < 35) {
              continue;
            }

            const distToEdge = Math.min(offX + 1, 5 - offX, offZ + 1, 5 - offZ);

            let typeKey: string;
            if (distToEdge === 1) {
              typeKey = foregroundPool[cellSeed % foregroundPool.length];
            } else if (distToEdge === 2) {
              typeKey = midgroundPool[cellSeed % midgroundPool.length];
            } else {
              typeKey = backgroundPool[cellSeed % backgroundPool.length];
            }

            occupied[gx][gz] = true;
            const pos = LotManager.computeLotWorldPos(gx, gz, 1, 1);
            const entity = ECS.createEntity();
            const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, typeKey, 'dense');
            this.spawnBuildingEntity(entity, lot, typeKey);
            count++;
          }
        }

      }
    }

    console.log(`Generated ${count} balanced city buildings across ${totalBlocksX}x${totalBlocksZ} grid blocks.`);
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


