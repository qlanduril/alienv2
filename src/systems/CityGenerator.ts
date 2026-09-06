import { ECS } from '../core/ECS';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import {
  PositionComponent,
  HealthComponent,
  ZonalHealthComponent,
  CollisionComponent,
  RenderStateComponent
} from '../core/Components';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { TileMap, BuildingLot, TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { SpatialGrid } from '../core/SpatialGrid';
import { MAP_DEFINITION, ZoneId } from '../core/MapDefinition';

import { WFCSolver } from '../generation/WFCSolver';
import { MapPlanner } from '../generation/MapPlanner';

// ─── District building pools (by zone id) ────────────────────────────────────
const ZONE_POOLS: Partial<Record<ZoneId, string[]>> = {
  airport:     ['b4', 'sky_biotech', '4', 'b3', 'sky_cyber', 'b1', 'b2'],
  financial:   ['sky_cyber', 'sky_artdeco', 'sky_biotech', '5', 'b4', 'mega_titan', 'b3', 'res_sky'],
  tech:        ['sky_cyber', 'sky_biotech', 'b4', '5', 'sky_artdeco', 'res_sky', 'b3', 'b2'],
  civic:       ['res_sky', 'b3', 'b4', 'res_bronze', '1', '2', 'b1', 'b2'],
  park:        ['b1', 'b2', 'b3', 'res_bronze'],
  sports:      ['mega_stadium', 'b3', 'b4', 'res_sky', 'b1', 'b2'],
  residential: ['b1', 'b2', 'res_bronze', 'b3', 'res_sky', 'b1', 'b2'],
  docks:       ['b1', 'b2', '4', 'b3', 'b4', 'b1', 'b2'],
};

// Max fraction of candidate cells that can receive buildings per zone (1.0 = 100% crowded block fill)
const ZONE_DENSITY: Partial<Record<ZoneId, number>> = {
  airport:     1.0,
  financial:   1.0,
  tech:        1.0,
  civic:       1.0,
  park:        1.0,
  sports:      1.0,
  residential: 1.0,
  docks:       1.0,
};

// HP per zone (3 zones × HP_PER_ZONE = 180 total HP per building)
const HP_PER_ZONE = 60;

export class CityGenerator {
  public static generateCity() {
    // ── Phase 1: Blank-slate grid ─────────────────────────────────────────
    TileMap.init();
    const GRID_DIM = TileMap.GRID_DIM; // 64

    // Master occupancy grid — true = no building may be placed here
    const occupied: boolean[][] = Array.from(
      { length: GRID_DIM }, () => Array(GRID_DIM).fill(false)
    );

    // ── Utility helpers ───────────────────────────────────────────────────

    /** Reserve a rectangle + buffer ring as occupied */
    const reserveArea = (gx: number, gz: number, w: number, h: number, buf = 1) => {
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const tx = gx + dx, tz = gz + dz;
          if (tx >= 0 && tx < GRID_DIM && tz >= 0 && tz < GRID_DIM) occupied[tx][tz] = true;
        }
      }
    };

    /** Return true only if every cell of a lot footprint is free */
    const canPlace = (gx: number, gz: number, w: number, h: number): boolean => {
      for (let dx = 0; dx < w; dx++) {
        for (let dz = 0; dz < h; dz++) {
          const tx = gx + dx, tz = gz + dz;
          if (tx >= GRID_DIM || tz >= GRID_DIM || occupied[tx][tz]) return false;
        }
      }
      return true;
    };

    /** Paint terrain onto a rectangle (+ optional buffer) respecting road cells */
    const paintTerrain = (gx: number, gz: number, w: number, h: number, terrain: TerrainType, buf = 0) => {
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const cell = TileMap.getCell(gx + dx, gz + dz);
          if (cell && cell.overlayType !== OverlayTileType.ROAD) {
            cell.terrainType = terrain;
          }
        }
      }
    };

    /** Spawn a building entity and register it; returns true on success */
    const spawnBuilding = (gx: number, gz: number, typeKey: string, lotType = 'dense', buf = 0): boolean => {
      const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];
      const w = def.footprintTiles ?? 1;
      const h = def.footprintTiles ?? 1;
      if (!canPlace(gx, gz, w, h)) return false;
      reserveArea(gx, gz, w, h, buf);
      const pos = LotManager.computeLotWorldPos(gx, gz, w, h);
      const entity = ECS.createEntity();
      const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, typeKey, lotType);
      this.spawnBuildingEntity(entity, lot, typeKey);
      return true;
    };

    // ── Phase 2: Place landmark anchors & central 3D Skyscraper ────────────
    let count = 0;
    for (const lm of MAP_DEFINITION.landmarks) {
      const def = BUILDING_DEFS[lm.key] || BUILDING_DEFS['3'];
      const w = def.footprintTiles ?? 1;
      const h = def.footprintTiles ?? 1;
      const buf = lm.bufferTiles ?? 1;
      // Paint primary terrain + buffer area
      paintTerrain(lm.gx, lm.gz, w, h, lm.terrain, buf);
      if (spawnBuilding(lm.gx, lm.gz, lm.key, 'landmark', buf)) count++;
    }

    // ── Phase 3: Place water islands (Statue of Liberty, etc.) ───────────
    for (const island of MAP_DEFINITION.islands) {
      // Paint the PLAZA_STONE platform on top of the water
      paintTerrain(island.platformGx, island.platformGz, island.platformW, island.platformH, TerrainType.PLAZA_STONE);

      // Free the platform cells so the building can be placed there
      for (let dx = 0; dx < island.platformW; dx++) {
        for (let dz = 0; dz < island.platformH; dz++) {
          const tx = island.platformGx + dx, tz = island.platformGz + dz;
          if (tx >= 0 && tx < GRID_DIM && tz >= 0 && tz < GRID_DIM) occupied[tx][tz] = false;
        }
      }

      if (island.landmark) {
        const def = BUILDING_DEFS[island.landmark] || BUILDING_DEFS['3'];
        const lw = def.footprintTiles ?? 1;
        const lh = def.footprintTiles ?? 1;
        // Centre the landmark on the platform
        const lmGx = island.platformGx + Math.floor((island.platformW - lw) / 2);
        const lmGz = island.platformGz + Math.floor((island.platformH - lh) / 2);
        if (spawnBuilding(lmGx, lmGz, island.landmark, 'landmark', 0)) count++;
      }
    }

    // ── Phase 4: Paint zone terrain ────────────────────────────────────────
    for (const zone of MAP_DEFINITION.zones) {
      for (let gx = zone.gx; gx < zone.gx + zone.w && gx < GRID_DIM; gx++) {
        for (let gz = zone.gz; gz < zone.gz + zone.h && gz < GRID_DIM; gz++) {
          const cell = TileMap.getCell(gx, gz);
          if (cell && cell.overlayType !== OverlayTileType.ROAD) {
            cell.terrainType = zone.terrain;
          }
          // Block building placement inside water
          if (zone.terrain === TerrainType.WATER) occupied[gx][gz] = true;
        }
      }
    }

    // ── Phase 5: Paint roads, collect intersections & waypoints ───────────
    const nsColumns = new Set<number>(); // gx values of NS avenues
    const ewRows    = new Set<number>(); // gz values of EW streets

    for (const road of MAP_DEFINITION.roads) {
      if (road.axis === 'NS') nsColumns.add(road.gx);
      else                     ewRows.add(road.gz);

      for (let i = 0; i < road.length; i++) {
        const rx = road.axis === 'NS' ? road.gx       : road.gx + i;
        const rz = road.axis === 'NS' ? road.gz + i   : road.gz;
        if (rx < 0 || rx >= GRID_DIM || rz < 0 || rz >= GRID_DIM) continue;

        TileMap.setRoad(rx, rz, road.axis);
        occupied[rx][rz] = true;
      }

      // Register named waypoints into TileMap.roadWaypoints
      for (const wp of road.waypoints ?? []) {
        const rx = road.axis === 'NS' ? road.gx           : road.gx + wp.cellOffset;
        const rz = road.axis === 'NS' ? road.gz + wp.cellOffset : road.gz;
        const cell = TileMap.getCell(rx, rz);
        if (cell) {
          TileMap.roadWaypoints.push({
            worldX: cell.worldX,
            worldZ: cell.worldZ,
            name: wp.name,
            nextWaypoints: [] // filled by car system later
          });
        }
      }
    }

    // Mark intersection tiles
    for (const gxNS of nsColumns) {
      for (const gzEW of ewRows) {
        TileMap.setIntersection(gxNS, gzEW);
      }
    }

    // Paint 1-cell-wide sidewalk flanks adjacent to every road (visual curbs)
    for (const gxNS of nsColumns) {
      for (let gz = 0; gz < GRID_DIM; gz++) {
        TileMap.setSidewalkIfNotRoad(gxNS - 1, gz);
        TileMap.setSidewalkIfNotRoad(gxNS + 1, gz);
      }
    }
    for (const gzEW of ewRows) {
      for (let gx = 0; gx < GRID_DIM; gx++) {
        TileMap.setSidewalkIfNotRoad(gx, gzEW - 1);
        TileMap.setSidewalkIfNotRoad(gx, gzEW + 1);
      }
    }

    // ── Phase 6: Execute Wave Function Collapse (WFC) Solver for Infill ────
    const wfcSolver = new WFCSolver(GRID_DIM);
    const wfcResult = wfcSolver.solve(42);

    if (wfcResult) {
      for (let gx = 0; gx < GRID_DIM; gx++) {
        for (let gz = 0; gz < GRID_DIM; gz++) {
          if (occupied[gx][gz]) continue;
          const cell = wfcResult[gx][gz];
          const proto = cell.prototype;

          TileMap.setTerrain(gx, gz, proto.terrainType);
          if (proto.overlayType === OverlayTileType.ROAD) {
            if (proto.isIntersection) {
              TileMap.setIntersection(gx, gz);
            } else {
              TileMap.setRoad(gx, gz, proto.roadAxis || 'NS');
            }
            occupied[gx][gz] = true;
          }
        }
      }
    }

    // ── Phase 6: Execute WFC-Driven Map Planner for Dense Urban Building Groups ──
    const plan = MapPlanner.planCityLayout(GRID_DIM, occupied, ZONE_POOLS, ZONE_DENSITY, wfcResult);

    // Paint buffer terrain (plazas/sidewalks)
    for (const bt of plan.bufferTerrain) {
      const cell = TileMap.getCell(bt.gx, bt.gz);
      if (cell && cell.overlayType !== OverlayTileType.ROAD) {
        cell.terrainType = bt.terrain;
      }
    }

    /** Instantiate a pre-planned building lot (validated and reserved by MapPlanner) */
    const instantiatePlannedLot = (gx: number, gz: number, typeKey: string, lotType = 'dense'): boolean => {
      const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];
      const w = def.footprintTiles ?? 1;
      const h = def.footprintTiles ?? 1;
      const pos = LotManager.computeLotWorldPos(gx, gz, w, h);
      const entity = ECS.createEntity();
      const lot = LotManager.calculateAndRegisterLot(entity, pos.x, pos.z, typeKey, lotType);
      this.spawnBuildingEntity(entity, lot, typeKey);
      return true;
    };

    // Instantiate planned building lots from MapPlanner
    for (const lotDef of plan.lots) {
      if (instantiatePlannedLot(lotDef.gx, lotDef.gz, lotDef.typeKey, lotDef.lotType)) {
        count++;
      }
    }

    // ── Phase 7: Sports & Airport zones — keep open ─────────────────────────
    // (pools are empty for those zones, so they're already skipped above)

    console.log(
      `[CityGenerator] ${count} buildings | ` +
      `${MAP_DEFINITION.roads.length} road segs | ` +
      `${TileMap.roadWaypoints.length} waypoints | ` +
      `${MAP_DEFINITION.islands.length} island(s)`
    );
    SpatialGrid.rebuild();
  }

  // ─── ECS Building Entity Factory ──────────────────────────────────────────────
  private static spawnBuildingEntity(entity: number, lot: BuildingLot, typeKey: string) {
    const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

    PositionComponent.set(entity, {
      worldX: lot.centerWorldX,
      worldY: lot.centerWorldZ, // Three.js depth axis
      worldZ: 0.0               // Ground level
    });

    HealthComponent.set(entity, { currentHP: 100, maxHP: 100, state: 0 });

    // ── Zonal Health — each zone starts at HP_PER_ZONE (50).
    // With ZONAL_DAMAGE_AMOUNT=25, each zone takes 2 hits, total 6 hits to destroy.
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
