import { ECS } from '../core/ECS';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { PositionComponent, HealthComponent, ZonalHealthComponent, CollisionComponent, RenderStateComponent } from '../core/Components';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { TileMap, BuildingLot, TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { SpatialGrid } from '../core/SpatialGrid';

export class CityGenerator {
  public static generateCity() {
    TileMap.init(); // Initialize base 64x64 grid layout
    const GRID_DIM = TileMap.GRID_DIM; // 64x64
    const AVENUE_INTERVAL = TileMap.AVENUE_INTERVAL; // 14
    const STREET_INTERVAL = TileMap.STREET_INTERVAL; // 7

    const occupied: boolean[][] = Array.from({ length: GRID_DIM }, () => Array(GRID_DIM).fill(false));

    // 1. Mark all arterial road network cells as occupied
    for (let gx = 0; gx < GRID_DIM; gx++) {
      for (let gz = 0; gz < GRID_DIM; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (gx % AVENUE_INTERVAL === 0 || gz % STREET_INTERVAL === 0 || (cell && cell.overlayType === OverlayTileType.ROAD)) {
          occupied[gx][gz] = true;
        }
      }
    }

    let count = 0;

    // Helper to reserve lot area with spacing buffer
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

    // Helper to style underlying ground terrain tiles without overwriting roads
    const applyGroundTerrain = (gx: number, gz: number, wTiles: number, zTiles: number, terrain: TerrainType, buffer: number = 0) => {
      for (let dx = -buffer; dx < wTiles + buffer; dx++) {
        for (let dz = -buffer; dz < zTiles + buffer; dz++) {
          const tx = gx + dx;
          const tz = gz + dz;
          const cell = TileMap.getCell(tx, tz);
          if (cell && cell.overlayType !== OverlayTileType.ROAD) {
            cell.terrainType = terrain;
          }
        }
      }
    };

    // 2. Map Layout Anchor Placement (Landmark & District Hubs)
    const anchors = [
      // Central Financial Core
      { key: 'mega_titan', gx: 30, gz: 30, w: 4, z: 4, terrain: TerrainType.PLAZA_STONE, buffer: 1 },

      // South-East Waterfront / Docks
      { key: 'statue_liberty', gx: 52, gz: 52, w: 3, z: 3, terrain: TerrainType.PLAZA_STONE, buffer: 1 },
      { key: '4', gx: 45, gz: 54, w: 3, z: 3, terrain: TerrainType.SIDEWALK, buffer: 1 },

      // West / Tech District
      { key: 'spaceship_hq', gx: 10, gz: 20, w: 4, z: 4, terrain: TerrainType.GRASS, buffer: 1 },

      // Stadiums & Arenas
      { key: 'mega_stadium', gx: 10, gz: 50, w: 4, z: 3, terrain: TerrainType.GRASS, buffer: 1 },
      { key: 'mega_stadium', gx: 50, gz: 15, w: 4, z: 3, terrain: TerrainType.PLAZA_STONE, buffer: 1 },

      // Civic Landmarks
      { key: '3', gx: 40, gz: 10, w: 3, z: 3, terrain: TerrainType.GRASS, buffer: 1 },      // School
      { key: '1', gx: 20, gz: 10, w: 3, z: 3, terrain: TerrainType.PLAZA_STONE, buffer: 1 }, // Hospital
      { key: '2', gx: 20, gz: 45, w: 3, z: 3, terrain: TerrainType.PLAZA_STONE, buffer: 1 }, // Mall
      { key: 'pentagon_defense', gx: 30, gz: 10, w: 4, z: 4, terrain: TerrainType.SIDEWALK, buffer: 1 }
    ];

    for (const c of anchors) {
      reserveArea(c.gx, c.gz, c.w, c.z, c.buffer);
      applyGroundTerrain(c.gx, c.gz, c.w, c.z, c.terrain, c.buffer);

      const pos = LotManager.computeLotWorldPos(c.gx, c.gz, c.w, c.z);
      const entity = ECS.createEntity();
      const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, c.key, 'landmark');
      this.spawnBuildingEntity(entity, lot, c.key);
      count++;
    }

    // 1.5 Reserve and style South-East Harbor Water Region (no buildings can spawn in water)
    for (let gx = 50; gx < GRID_DIM; gx++) {
      for (let gz = 46; gz < GRID_DIM; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (cell && cell.overlayType !== OverlayTileType.ROAD) {
          cell.terrainType = TerrainType.WATER;
          occupied[gx][gz] = true; // Block building lots from spawning on water
        }
      }
    }

    // 2. Map Layout Anchor Placement (Landmark & District Hubs)
    const poolCenter = ['sky_cyber', 'sky_artdeco', 'sky_biotech', '5', 'b4']; // Financial Skyscrapers
    const poolSuburb = ['res_sky', 'b3', 'b2', 'res_bronze'];                  // Residential & Gardens
    const poolIndustrial = ['b1', 'b2', 'b3'];                                 // Commercial Shops & Low-rises

    // 4. Iterate Super-Blocks with Lot Buffer Spacing & Terrain Matching
    for (let startGx = 0; startGx < GRID_DIM; startGx += AVENUE_INTERVAL) {
      for (let startGz = 0; startGz < GRID_DIM; startGz += STREET_INTERVAL) {

        for (let offX = 1; offX < AVENUE_INTERVAL - 1; offX += 2) {
          for (let offZ = 1; offZ < STREET_INTERVAL - 1; offZ += 2) {
            const gx = startGx + offX;
            const gz = startGz + offZ;

            if (gx >= GRID_DIM - 1 || gz >= GRID_DIM - 1 || occupied[gx][gz]) continue;

            const cellSeed = Math.abs((startGx * 1337 + startGz * 7331 + offX * 97 + offZ * 193)) % 1000;

            const isWaterArea = gx >= 56 && gz >= 48;
            const isAirportArea = gx < 18 && gz > 15 && gz < 42;
            const isParkArea = (gx > 36 && gx < 50) && (gz > 5 && gz < 25);

            if (isWaterArea) {
              const cell = TileMap.getCell(gx, gz);
              if (cell && cell.overlayType !== OverlayTileType.ROAD) cell.terrainType = TerrainType.WATER;
              continue;
            }

            if (isAirportArea) {
              const cell = TileMap.getCell(gx, gz);
              if (cell && cell.overlayType !== OverlayTileType.ROAD) {
                cell.terrainType = TerrainType.SIDEWALK;
              }
              continue; // Keep clear runway field
            }

            if (isParkArea) {
              const cell = TileMap.getCell(gx, gz);
              if (cell && cell.overlayType !== OverlayTileType.ROAD) {
                cell.terrainType = TerrainType.GRASS;
              }
              if (cellSeed % 100 < 80) continue; // Sparse park structures
            }

            // Pick District Pool & Ground Terrain matching District
            const distToCenter = Math.sqrt(Math.pow(gx - 32, 2) + Math.pow(gz - 32, 2));

            let pool: string[];
            let lotTerrain: TerrainType;

            if (distToCenter < 16) {
              pool = poolCenter;
              lotTerrain = TerrainType.PLAZA_STONE; // Sleek urban stone plazas for skyscrapers
            } else if (distToCenter < 32) {
              pool = poolSuburb;
              lotTerrain = TerrainType.GRASS; // Green lawns & gardens around residential units
            } else {
              pool = poolIndustrial;
              lotTerrain = TerrainType.SIDEWALK; // Clean pavement for shops & low-rises
            }

            const typeKey = pool[cellSeed % pool.length];
            const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];
            const wTiles = def.footprintTiles || 1;
            const zTiles = def.footprintTiles || 1;

            // Check if full lot footprint fit is free
            let canFit = true;
            for (let dx = 0; dx < wTiles; dx++) {
              for (let dz = 0; dz < zTiles; dz++) {
                if (gx + dx >= GRID_DIM || gz + dz >= GRID_DIM || occupied[gx + dx][gz + dz]) {
                  canFit = false;
                  break;
                }
              }
              if (!canFit) break;
            }

            if (!canFit) continue;

            // Reserve lot with 1-tile buffer spacing between buildings
            reserveArea(gx, gz, wTiles, zTiles, 1);
            applyGroundTerrain(gx, gz, wTiles, zTiles, lotTerrain, 1);

            const pos = LotManager.computeLotWorldPos(gx, gz, wTiles, zTiles);
            const entity = ECS.createEntity();
            const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, typeKey, 'dense');
            this.spawnBuildingEntity(entity, lot, typeKey);
            count++;
          }
        }

      }
    }

    // 5. Fill remaining unbuilt non-road cells with lawns, plazas, and green spaces
    for (let gx = 0; gx < GRID_DIM; gx++) {
      for (let gz = 0; gz < GRID_DIM; gz++) {
        const cell = TileMap.getCell(gx, gz);
        if (cell && cell.overlayType !== OverlayTileType.ROAD && !cell.occupiedByBuildingId) {
          if (cell.terrainType === TerrainType.SIDEWALK || cell.terrainType === TerrainType.ROAD_STRAIGHT_NS) {
            const dist = Math.sqrt(Math.pow(gx - 32, 2) + Math.pow(gz - 32, 2));
            if (dist < 18) {
              cell.terrainType = TerrainType.PLAZA_STONE;
            } else if ((gx + gz) % 3 === 0) {
              cell.terrainType = TerrainType.GRASS;
            }
          }
        }
      }
    }

    console.log(`Generated ${count} city buildings with buffer lot spacing & terrain matching.`);
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

