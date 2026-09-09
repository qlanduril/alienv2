import { TileMap, TerrainType, OverlayTileType, BuildingLot } from '../rendering/TileSystem/TileMap';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { SpatialGrid } from '../core/SpatialGrid';
import { ECS } from '../core/ECS';
import { BUILDING_DEFS, getBuildingMaxHP } from '../core/BuildingDefs';
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
import { AssetLoader } from '../assets/AssetLoader';

export class MapLoader {
  /**
   * Loads the authoritative city map JSON (/map_data.json), paints TileMap, and spawns ECS building entities.
   */
  public static async loadAndInstantiate(jsonPath: string = '/map_data.json'): Promise<boolean> {
    try {
      const resolvedPath = AssetLoader.getAssetUrl(jsonPath);
      console.log(`[MapLoader] Fetching authoritative city map from ${resolvedPath}...`);
      let response = await fetch(`${resolvedPath}?t=${Date.now()}`, { cache: 'no-store' });

      if (!response.ok && jsonPath !== '/generated_map.json') {
        const fallbackPath = AssetLoader.getAssetUrl('/generated_map.json');
        response = await fetch(`${fallbackPath}?t=${Date.now()}`, { cache: 'no-store' });
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

      // Pre-seed occupied grid with all road and water cells (1 = Road / Water impassable)
      for (let x = 0; x < gridDim; x++) {
        for (let z = 0; z < gridDim; z++) {
          const c = TileMap.getCell(x, z);
          if (c && (c.overlayType === OverlayTileType.ROAD || c.terrainType === TerrainType.WATER)) {
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

      // ── Step 4.5: Urban Infill Pass (Density boost along streets/sidewalks) ──
      // Populate vacant non-road, non-water cells with low/mid-rise buildings ('b1', 'b2', 'b3', 'b4', 'res_bronze', 'res_sky')
      let seed = ((data.seed as number) || 424242) ^ 0x9e3779b9;
      const nextRand = () => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967296;
      };

      const infillTypes: Array<{ typeKey: string; lotType: string }> = [
        { typeKey: 'b1', lotType: 'commercial' },
        { typeKey: 'b2', lotType: 'residential' },
        { typeKey: 'b3', lotType: 'residential' },
        { typeKey: 'b4', lotType: 'commercial' },
        { typeKey: 'res_bronze', lotType: 'residential' },
        { typeKey: 'res_sky', lotType: 'residential' }
      ];

      for (let gx = 1; gx < gridDim - 1; gx++) {
        for (let gz = 1; gz < gridDim - 1; gz++) {
          if (occupiedGrid[gx][gz] === 0) {
            // Prefer lots adjacent to streets or sidewalks for realistic urban frontage
            let nearStreet = false;
            for (let dx = -1; dx <= 1; dx++) {
              for (let dz = -1; dz <= 1; dz++) {
                const adjCell = TileMap.getCell(gx + dx, gz + dz);
                if (adjCell && (adjCell.overlayType === OverlayTileType.ROAD || adjCell.overlayType === OverlayTileType.SIDEWALK)) {
                  nearStreet = true;
                  break;
                }
              }
              if (nearStreet) break;
            }

            if (nearStreet && nextRand() < 0.44) {
              occupiedGrid[gx][gz] = 2;
              const pick = infillTypes[Math.floor(nextRand() * infillTypes.length)];
              const pos = LotManager.computeLotWorldPos(gx, gz, 1, 1);
              const entity = ECS.createEntity();
              const lot = LotManager.calculateAndRegisterLot(
                entity,
                pos.x,
                pos.z,
                pick.typeKey,
                pick.lotType
              );
              this.spawnBuildingEntity(entity, lot, pick.typeKey);
              spawnedCount++;
            }
          }
        }
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

    const buildingMaxHp = getBuildingMaxHP(def);
    const zonesDef = BUILDING_ZONES[typeKey] || BUILDING_ZONES['3'];
    const hpPerZone = Math.max(5, Math.round(buildingMaxHp / zonesDef.length));
    const totalHp = hpPerZone * zonesDef.length;

    HealthComponent.set(entity, { currentHP: totalHp, maxHP: totalHp, state: 0 });

    const zoneMap = new Map();
    for (const zd of zonesDef) {
      zoneMap.set(zd.id, { id: zd.id, level: 0, hp: hpPerZone, maxHp: hpPerZone });
    }

    ZonalHealthComponent.set(entity, {
      zones: zoneMap,
      totalHp: totalHp,
      maxTotalHp: totalHp,
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
