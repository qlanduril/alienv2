import { ZonalHealth } from './Components';
import { DamageZone } from './ZoneDefs';

export class DamageCalc {
  /**
   * Computes the current damage state frame index based on flat health.
   * (Legacy method, kept for backward compatibility during transition)
   */
  public static computeFrameIndex(currentHP: number, maxHP: number, maxFrame: number): number {
    const damagePercent = 1 - (currentHP / maxHP);
    const frameIndex = Math.floor(damagePercent * maxFrame);
    return Math.max(0, Math.min(frameIndex, maxFrame));
  }

  /**
   * Computes the frame index for a building based on its ZonalHealth state.
   * Uses Option C (Dirty Flag Indexing) to map non-linear zone states to a 1D frame array.
   */
  public static computeFrameForZonalState(zonalHealth: ZonalHealth, maxFrame: number): number {
    // Primary driver: global damage level (base 0-40 for a 72 frame anim)
    // We scale the base frames to take up ~55% of the total animation frames
    const globalFraction = 1 - (zonalHealth.totalHp / zonalHealth.maxTotalHp);
    const baseMax = Math.floor(maxFrame * 0.55); 
    const baseFrame = Math.floor(globalFraction * baseMax);
    
    // Offset based on center zone damage (critical structural zone)
    // Takes up ~28% of the frames
    const centerZone = zonalHealth.zones.get(DamageZone.CENTER);
    const centerMax = Math.floor(maxFrame * 0.28);
    const centerBonus = centerZone ? Math.floor((1 - centerZone.hp/centerZone.maxHp) * centerMax) : 0;
    
    // Offset based on roof/top zone collapse
    // Takes up ~17% of the frames
    const topZone = zonalHealth.zones.get(DamageZone.TOP_CENTER);
    const topMax = maxFrame - baseMax - centerMax; // The rest of the frames
    const topBonus = topZone ? Math.floor((1 - topZone.hp/topZone.maxHp) * topMax) : 0;
    
    return Math.max(0, Math.min(baseFrame + centerBonus + topBonus, maxFrame));
  }
}
