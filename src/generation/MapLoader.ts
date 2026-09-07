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
import { MapBaker } from './MapBaker';
import { GeneratedMapData, SerializedTile } from './GeneratedMapSchema';
import { CityPresetName } from './CityConfig';

const HP_PER_ZONE = 60;
const CURRENT_SCHEMA_VERSION = '1.3.0';

export class MapLoader {
  /**
   * Helper to determine target preset from URL query parameter (e.g. ?preset=ny or ?preset=arcade)
   */
  public static getPresetFromUrl(): CityPresetName {
    if (typeof window === 'undefined') return 'isometric_v1';
    const params = new URLSearchParams(window.location.search);
    const p = params.get('preset')?.toLowerCase();
    if (p === 'ny' || p === 'metropolitan_ny' || p === 'gotham') {
      return 'metropolitan_ny';
    }
    if (p === 'kenney' || p === 'kenney_isometric') {
      return 'kenney_isometric';
    }
    if (p === 'v1' || p === 'isometric_v1') {
      return 'isometric_v1';
    }
    return 'retro_arcade';
  }

  /**
   * Loads pre-baked city map JSON, paints TileMap, and spawns ECS building entities.
   * Checks URL parameter ?preset=v1 vs ?preset=kenney vs ?preset=ny vs ?preset=arcade, or uses explicit jsonPath.
   */
  public static async loadAndInstantiate(jsonPath?: string): Promise<boolean> {
    try {
      const activePreset = this.getPresetFromUrl();
      const targetPath = jsonPath || (
        activePreset === 'kenney_isometric' ? '/generated_map_kenney.json' :
        activePreset === 'isometric_v1' ? '/generated_map_v1.json' :
        activePreset === 'metropolitan_ny' ? '/generated_map_ny.json' :
        '/generated_map.json'
      );

      console.log(`[MapLoader] Fetching pre-baked map for preset '${activePreset}' from ${targetPath}...`);
      let response = await fetch(targetPath);

      if (!response.ok && targetPath !== '/generated_map.json') {
        response = await fetch('/generated_map.json');
      }

      let data: GeneratedMapData | null = null;
      if (response.ok) {
        data = await response.json();
      }

      // If pre-baked file missing, wrong version, or has empty tiles -> trigger rich MapBaker
      if (!data || data.version !== CURRENT_SCHEMA_VERSION || !data.tiles || data.tiles.length === 0) {
        console.warn(`[MapLoader] Pre-baked map invalid or missing tiles. Running dynamic MapBaker for '${activePreset}'...`);
        const bakeResult = await MapBaker.bake(data?.seed || 42, activePreset);
        data = bakeResult.data;
      }

      // ── Step 1: Initialize blank TileMap ──────────────────────────────
      TileMap.init();
      const gridDim = TileMap.GRID_DIM; // 64

      // ── Step 2: Hydrate TileMap cells directly from pre-baked tiles ───
      const is2D = Array.isArray(data.tiles[0]);

      for (let gx = 0; gx < gridDim; gx++) {
        for (let gz = 0; gz < gridDim; gz++) {
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

      // ── Step 4: Spawn ECS Building Entities from serialized lots with Strict Road Safety ──────
      let spawnedCount = 0;
      for (const b of data.buildings || []) {
        const cell = TileMap.getCell(b.gx, b.gz);
        if (cell && cell.overlayType === OverlayTileType.ROAD) {
          console.warn(`[MapLoader] Skipping building '${b.typeKey}' at (${b.gx}, ${b.gz}) — overlaps road tile!`);
          continue;
        }

        const entity = ECS.createEntity();
        const lot = LotManager.calculateAndRegisterLot(
          entity,
          b.centerWorldX,
          b.centerWorldZ,
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
        `[MapLoader] Successfully loaded pre-baked map for '${activePreset}'! ` +
        `(${spawnedCount} buildings, seed: ${data.seed}, baked at: ${bakedTime})`
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
