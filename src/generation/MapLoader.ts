import { TileMap, TerrainType, OverlayTileType, BuildingLot } from '../rendering/TileSystem/TileMap';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { SpatialGrid } from '../core/SpatialGrid';
import { ECS } from '../core/ECS';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import {
  PositionComponent,
  HealthComponent,
  ZonalHealthComponent,
  CollisionComponent,
  RenderStateComponent
} from '../core/Components';
import { CityGenerator } from '../systems/CityGenerator';
import { GeneratedMapData, SerializedTile } from './GeneratedMapSchema';

const HP_PER_ZONE = 60;

export class MapLoader {
  /**
   * Loads the authoritative city map JSON (/map_data.json), paints TileMap, and spawns ECS building entities.
   */
  public static async loadAndInstantiate(jsonPath: string = '/map_data.json'): Promise<boolean> {
    try {
      console.log(`[MapLoader] Fetching authoritative city map from ${jsonPath}...`);
      let response = await fetch(`${jsonPath}?t=${Date.now()}`, { cache: 'no-store' });

      if (!response.ok && jsonPath !== '/generated_map.json') {
        response = await fetch(`/generated_map.json?t=${Date.now()}`, { cache: 'no-store' });
      }

      let data: GeneratedMapData | null = null;
      if (response.ok) {
        data = await response.json();
      }

      if (!data || !data.tiles || data.tiles.length === 0) {
        console.warn(`[MapLoader] Pre-baked map invalid or missing tiles. Falling back to live CityGenerator...`);
        CityGenerator.generateCity();
        return true;
      }

      // ── Step 1: Initialize blank TileMap ──────────────────────────────
      TileMap.init();
      const gridDim = TileMap.GRID_DIM; // 64

      // ── Step 2: Hydrate TileMap cells directly from pre-baked tiles ───
      const is2D = Array.isArray(data.tiles[0]);

      for (let gx = 0; gx < gridDim; gx++) {
        for (let gz = 0; gz < gridDim; gz++) {
          let terrainType: TerrainType = TerrainType.GRASS;
          let overlayType: OverlayTileType = OverlayTileType.NONE;
          let isIntersection = false;
          let roadAxis: 'NS' | 'EW' | 'DIAG' | undefined = undefined;
          let tileSprite: string | undefined = undefined;

          if (is2D) {
            const serializedTile = (data.tiles as SerializedTile[][])[gx]?.[gz];
            if (serializedTile) {
              terrainType = serializedTile.terrainType;
              overlayType = serializedTile.overlayType;
              isIntersection = !!serializedTile.isIntersection;
              roadAxis = serializedTile.roadAxis;
              tileSprite = serializedTile.tileSprite;
            }
          } else {
            const val = (data.tiles as any)[gz * gridDim + gx];
            if (typeof val === 'number') {
              terrainType = val as TerrainType;
              if (terrainType === TerrainType.ROAD_STRAIGHT_NS || terrainType === TerrainType.ROAD_STRAIGHT_EW || terrainType === TerrainType.ROAD_INTERSECTION) {
                overlayType = OverlayTileType.ROAD;
              } else if (terrainType === TerrainType.SIDEWALK) {
                overlayType = OverlayTileType.SIDEWALK;
              }
            } else if (val && typeof val === 'object') {
              terrainType = val.terrainType;
              overlayType = val.overlayType;
              isIntersection = !!val.isIntersection;
              roadAxis = val.roadAxis;
              tileSprite = val.tileSprite;
            }
          }

          TileMap.setTerrain(gx, gz, terrainType);
          const cell = TileMap.getCell(gx, gz);
          if (cell && tileSprite) {
            cell.tileSprite = tileSprite;
          }

          if (overlayType === OverlayTileType.ROAD) {
            if (isIntersection || terrainType === TerrainType.ROAD_INTERSECTION) {
              TileMap.setIntersection(gx, gz);
            } else {
              TileMap.setRoad(gx, gz, roadAxis === 'EW' ? 'EW' : 'NS');
            }
          } else if (overlayType === OverlayTileType.SIDEWALK) {
            TileMap.setSidewalkIfNotRoad(gx, gz);
          }
        }
      }

      // ── Step 3: Re-hydrate road waypoints ─────────────────────────────
      TileMap.roadWaypoints = (data.roadWaypoints || []).map(wp => ({
        worldX: wp.worldX,
        worldZ: wp.worldZ,
        name: wp.name,
        nextWaypoints: []
      }));

      // ── Step 4: Spawn ECS Building Entities with Strict Occupancy & Buffer Safety ──────
      let spawnedCount = 0;
      const occupiedGrid = Array.from({ length: gridDim }, () => new Uint8Array(gridDim));

      // Pre-seed occupied grid with all road cells (1 = Road / Hard impassable)
      for (let x = 0; x < gridDim; x++) {
        for (let z = 0; z < gridDim; z++) {
          const c = TileMap.getCell(x, z);
          if (c && c.overlayType === OverlayTileType.ROAD) {
            occupiedGrid[x][z] = 1;
          }
        }
      }

      for (const b of data.buildings || []) {
        const gx = b.gx ?? (b as any).gridX ?? 0;
        const gz = b.gz ?? (b as any).gridZ ?? 0;
        const rawW = b.w ?? (b as any).footprintWidth ?? 1;
        const rawH = b.h ?? (b as any).footprintHeight ?? 1;
        const def = BUILDING_DEFS[b.typeKey];
        const fpW = def?.footprintTiles ?? rawW;
        const fpH = def?.footprintTiles ?? rawH;

        // Boundary safety
        if (gx < 0 || gz < 0 || gx + fpW > gridDim || gz + fpH > gridDim) {
          console.warn(`[MapLoader] Skipping building '${b.typeKey}' at (${gx}, ${gz}) — exceeds grid bounds!`);
          continue;
        }

        // Buffer requirement: large buildings and landmarks (>= 3x3) require 1-tile clearance buffer
        const buf = (fpW >= 3 || fpH >= 3) ? 1 : 0;
        let collides = false;

        // Check footprint + buffer clearance
        for (let dx = -buf; dx < fpW + buf; dx++) {
          for (let dz = -buf; dz < fpH + buf; dz++) {
            const tx = gx + dx;
            const tz = gz + dz;
            if (tx < 0 || tx >= gridDim || tz < 0 || tz >= gridDim) continue;

            // Inside actual footprint: cannot touch road, building, or buffer
            const isInsideFootprint = dx >= 0 && dx < fpW && dz >= 0 && dz < fpH;
            if (isInsideFootprint) {
              if (occupiedGrid[tx][tz] !== 0) {
                collides = true;
                break;
              }
            } else if (buf > 0) {
              // Landmark buffer zone: cannot touch other buildings
              if (occupiedGrid[tx][tz] === 2) { // 2 = building footprint
                collides = true;
                break;
              }
            }
          }
          if (collides) break;
        }

        if (collides) {
          console.warn(`[MapLoader] Skipping overlapping building '${b.typeKey}' at (${gx}, ${gz})`);
          continue;
        }

        // Reserve footprint (2 = building) and surrounding buffer (3 = reserved buffer)
        for (let dx = -buf; dx < fpW + buf; dx++) {
          for (let dz = -buf; dz < fpH + buf; dz++) {
            const tx = gx + dx;
            const tz = gz + dz;
            if (tx < 0 || tx >= gridDim || tz < 0 || tz >= gridDim) continue;
            const isInsideFootprint = dx >= 0 && dx < fpW && dz >= 0 && dz < fpH;
            if (isInsideFootprint) {
              occupiedGrid[tx][tz] = 2;
            } else if (occupiedGrid[tx][tz] === 0) {
              occupiedGrid[tx][tz] = 3;
            }
          }
        }

        let centerWorldX = b.centerWorldX;
        let centerWorldZ = b.centerWorldZ;
        if (centerWorldX === undefined || centerWorldZ === undefined) {
          const pos = LotManager.computeLotWorldPos(gx, gz, fpW, fpH);
          centerWorldX = pos.x;
          centerWorldZ = pos.z;
        }

        const entity = ECS.createEntity();
        const lot = LotManager.calculateAndRegisterLot(
          entity,
          centerWorldX,
          centerWorldZ,
          b.typeKey,
          b.lotType
        );
        this.spawnBuildingEntity(entity, lot, b.typeKey);
        spawnedCount++;
      }

      // ── Step 5: Rebuild spatial hash grid for raycasting / collision ──
      SpatialGrid.rebuild();

      const bakedTime = data.metadata?.generatedAt
        ? new Date(data.metadata.generatedAt).toLocaleString()
        : 'unknown date';

      console.log(
        `[MapLoader] Successfully loaded city map (${spawnedCount} buildings, seed: ${data.seed}, baked at: ${bakedTime})`
      );
      return true;
    } catch (err) {
      console.warn(`[MapLoader] Error loading pre-baked map:`, err);
      console.log(`[MapLoader] Falling back to live CityGenerator...`);
      CityGenerator.generateCity();
      return false;
    }
  }

  /** ECS Building Entity Factory matching CityGenerator */
  private static spawnBuildingEntity(entity: number, lot: BuildingLot, typeKey: string) {
    const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

    PositionComponent.set(entity, {
      worldX: lot.centerWorldX,
      worldY: lot.centerWorldZ, // Three.js depth axis
      worldZ: 0.0               // Ground level
    });

    HealthComponent.set(entity, { currentHP: 100, maxHP: 100, state: 0 });

    const zoneMap = new Map();
    const zonesDef = BUILDING_ZONES[typeKey] || BUILDING_ZONES['3'];
    for (const zd of zonesDef) {
      zoneMap.set(zd.id, { id: zd.id, level: 0, hp: HP_PER_ZONE, maxHp: HP_PER_ZONE });
    }

    ZonalHealthComponent.set(entity, {
      zones: zoneMap,
      totalHp: HP_PER_ZONE * zonesDef.length,
      maxTotalHp: HP_PER_ZONE * zonesDef.length,
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
