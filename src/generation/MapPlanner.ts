import { BUILDING_DEFS } from '../core/BuildingDefs';
import { MAP_DEFINITION, ZoneId } from '../core/MapDefinition';
import { TerrainType } from '../rendering/TileSystem/TileMap';
import { WFCSolvedCell } from './WFCSolver';

export interface PlannedLot {
  gx: number;
  gz: number;
  w: number;
  h: number;
  typeKey: string;
  lotType: string;
}

export interface CityPlan {
  lots: PlannedLot[];
  bufferTerrain: Array<{ gx: number; gz: number; terrain: TerrainType }>;
}

export class MapPlanner {
  /**
   * Intermediate Map Planning Layer
   * Consumes WFC-solved map data to group adjacent building lots into dense urban clusters,
   * creating rich, vibrant city skylines without empty tile deserts.
   */
  public static planCityLayout(
    gridDim: number,
    occupied: boolean[][],
    zonePools: Partial<Record<ZoneId, string[]>>,
    zoneDensity: Partial<Record<ZoneId, number>>,
    wfcResult: WFCSolvedCell[][] | null
  ): CityPlan {
    const plannedLots: PlannedLot[] = [];
    const bufferTerrain: Array<{ gx: number; gz: number; terrain: TerrainType }> = [];

    /** Check if exact footprint tiles + optional buffer ring are completely free */
    const canPlaceFootprint = (gx: number, gz: number, w: number, h: number, buf = 0): boolean => {
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const tx = gx + dx;
          const tz = gz + dz;
          if (tx < 0 || tx >= gridDim || tz < 0 || tz >= gridDim || occupied[tx][tz]) return false;
        }
      }
      return true;
    };

    /** Reserve footprint tiles + optional buffer ring */
    const reserveFootprint = (gx: number, gz: number, w: number, h: number, buf = 0) => {
      for (let dx = -buf; dx < w + buf; dx++) {
        for (let dz = -buf; dz < h + buf; dz++) {
          const tx = gx + dx;
          const tz = gz + dz;
          if (tx >= 0 && tx < gridDim && tz >= 0 && tz < gridDim) {
            occupied[tx][tz] = true;
          }
        }
      }
    };

    // ── Phase A: First, place WFC-guided prototype building lots ────────────────
    if (wfcResult) {
      for (let gx = 0; gx < gridDim; gx++) {
        for (let gz = 0; gz < gridDim; gz++) {
          if (occupied[gx][gz]) continue;

          const solvedCell = wfcResult[gx][gz];
          const proto = solvedCell?.prototype;

          if (proto && proto.buildingType) {
            const typeKey = proto.buildingType;
            const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];
            const w = def.footprintTiles ?? 1;
            const h = def.footprintTiles ?? 1;
            const buf = (w > 1 || h > 1) ? 1 : 0;

            if (canPlaceFootprint(gx, gz, w, h, buf)) {
              reserveFootprint(gx, gz, w, h, buf);
              plannedLots.push({ gx, gz, w, h, typeKey, lotType: 'wfc_cluster' });
            }
          }
        }
      }
    }

    // ── Phase B: Populate district zones with ultra-high density building groups ────
    for (const zone of MAP_DEFINITION.zones) {
      const pool = zonePools[zone.id];
      if (!pool || pool.length === 0) continue;

      // Gather all available unoccupied candidate cells in this zone
      const candidates: Array<{ gx: number; gz: number }> = [];
      for (let gx = zone.gx; gx < zone.gx + zone.w && gx < gridDim; gx++) {
        for (let gz = zone.gz; gz < zone.gz + zone.h && gz < gridDim; gz++) {
          if (!occupied[gx][gz]) candidates.push({ gx, gz });
        }
      }

      // Deterministic shuffle seed
      const seed = zone.gx * 1337 + zone.gz * 7331;
      candidates.sort((a, b) =>
        ((a.gx * 97 + a.gz * 193 + seed) % 100) -
        ((b.gx * 97 + b.gz * 193 + seed) % 100)
      );

      // Target 85-98% block fill density to eliminate empty deserts
      const targetDensity = zoneDensity[zone.id] ?? 0.95;
      const maxBuildings = Math.floor(candidates.length * Math.min(0.98, targetDensity));
      let built = 0;

      for (const { gx, gz } of candidates) {
        if (built >= maxBuildings) break;
        if (occupied[gx][gz]) continue;

        const cellSeed = Math.abs(gx * 97 + gz * 193 + seed + built * 13) % pool.length;
        let typeKey = pool[cellSeed];
        let def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

        let w = def.footprintTiles ?? 1;
        let h = def.footprintTiles ?? 1;
        let buf = (w > 1 || h > 1) ? 1 : 0;

        // If multi-tile building does not fit, fallback to a 1x1 building from pool
        if (!canPlaceFootprint(gx, gz, w, h, buf)) {
          const fallbackKey = pool.find(k => (BUILDING_DEFS[k]?.footprintTiles ?? 1) === 1) || 'b1';
          typeKey = fallbackKey;
          def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];
          w = 1;
          h = 1;
          buf = 0;
        }

        if (canPlaceFootprint(gx, gz, w, h, buf)) {
          reserveFootprint(gx, gz, w, h, buf);
          plannedLots.push({
            gx,
            gz,
            w,
            h,
            typeKey,
            lotType: 'urban_cluster'
          });
          built++;
        }
      }
    }

    // ── Phase C: Final 100% Dense Infill Pass ──────────────────────────────────
    // Guarantees every single unoccupied non-road land cell receives a building
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        if (!occupied[gx][gz]) {
          const zone = MAP_DEFINITION.zones.find(
            z => gx >= z.gx && gx < z.gx + z.w && gz >= z.gz && gz < z.gz + z.h
          );
          if (zone && zone.terrain === TerrainType.WATER) continue;

          const pool = zone ? (zonePools[zone.id] || ['b1', 'b2', 'b3', 'b4']) : ['b1', 'b2', 'b3', 'b4'];
          const cellSeed = Math.abs(gx * 1337 + gz * 7331) % pool.length;
          let fallbackKey = pool[cellSeed];
          if ((BUILDING_DEFS[fallbackKey]?.footprintTiles ?? 1) > 1) {
            fallbackKey = pool.find(k => (BUILDING_DEFS[k]?.footprintTiles ?? 1) === 1) || 'b1';
          }

          if (canPlaceFootprint(gx, gz, 1, 1, 0)) {
            reserveFootprint(gx, gz, 1, 1, 0);
            plannedLots.push({
              gx,
              gz,
              w: 1,
              h: 1,
              typeKey: fallbackKey,
              lotType: 'dense_infill'
            });
          }
        }
      }
    }

    return { lots: plannedLots, bufferTerrain };
  }
}
