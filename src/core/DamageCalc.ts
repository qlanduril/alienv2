export class DamageCalc {
  /**
   * Computes the current damage state frame index based on health.
   * @param currentHP Current health of the entity
   * @param maxHP Maximum health of the entity
   * @param maxFrame The highest index frame available for destruction stages
   * @returns An integer between 0 and maxFrame representing damage level
   */
  public static computeFrameIndex(currentHP: number, maxHP: number, maxFrame: number): number {
    const damagePercent = 1 - (currentHP / maxHP);
    const frameIndex = Math.floor(damagePercent * maxFrame);
    
    // Clamp between 0 and maxFrame
    return Math.max(0, Math.min(frameIndex, maxFrame));
  }
}
