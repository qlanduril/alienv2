import { ZoneDef } from './ZoneDefs';
import { ZonalHealth } from './Components';

export enum DamageLevel {
  PRISTINE  = 0,
  LIGHT     = 1,
  MODERATE  = 2,
  HEAVY     = 3,
  RUBBLE    = 4,
}

export class DamageStateTree {
  /**
   * Given a zone's HP ratio, return the correct DamageLevel.
   */
  public static computeZoneLevel(hpRatio: number): DamageLevel {
    if (hpRatio >= 0.80) return DamageLevel.PRISTINE;
    if (hpRatio >= 0.55) return DamageLevel.LIGHT;
    if (hpRatio >= 0.25) return DamageLevel.MODERATE;
    if (hpRatio > 0.0)   return DamageLevel.HEAVY;
    return DamageLevel.RUBBLE;
  }

  /**
   * Compute the building's global damage level from all zone structural weights.
   */
  public static computeGlobalLevel(zonalHealth: ZonalHealth, buildingZoneDefs: ZoneDef[]): DamageLevel {
    let collapseScore = 0;
    
    for (const def of buildingZoneDefs) {
      const zone = zonalHealth.zones.get(def.id);
      if (!zone) continue;
      
      // Each zone contributes its structureWeight × its level fraction
      // A pristine zone (0) contributes 0 to collapse. A rubble zone (4) contributes 100% of its weight.
      const levelFraction = zone.level / DamageLevel.RUBBLE;
      collapseScore += def.structureWeight * levelFraction;
    }
    
    // clamp between 0 and 1
    collapseScore = Math.max(0, Math.min(1, collapseScore));
    
    // collapseScore in [0, 1] — map to global level using the inverse of hp ratio
    // i.e., hpRatio = 1 - collapseScore
    return this.computeZoneLevel(1 - collapseScore);
  }
}
