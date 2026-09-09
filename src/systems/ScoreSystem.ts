export interface ScorePopupEvent {
  text: string;
  points: number;
  worldX: number;
  worldY: number;
  worldZ: number;
  color: string;
  duration: number;
  elapsed: number;
}

export class ScoreSystem {
  private static score: number = 0;
  private static highScore: number = 0;
  private static combo: number = 1;
  private static comboCount: number = 0;
  private static comboTimer: number = 0;
  private static readonly COMBO_TIMEOUT = 3.5; // seconds
  private static readonly MAX_COMBO = 5;

  public static popups: ScorePopupEvent[] = [];

  public static init() {
    try {
      const saved = localStorage.getItem('alienv2_highscore');
      if (saved) {
        this.highScore = parseInt(saved, 10) || 0;
      }
    } catch {
      this.highScore = 0;
    }
  }

  public static tick(delta: number) {
    if (this.comboTimer > 0) {
      this.comboTimer -= delta;
      if (this.comboTimer <= 0) {
        this.combo = 1;
        this.comboCount = 0;
        this.comboTimer = 0;
      }
    }

    // Update active popups
    for (let i = this.popups.length - 1; i >= 0; i--) {
      const p = this.popups[i];
      p.elapsed += delta;
      p.worldZ += delta * 12; // float upwards
      if (p.elapsed >= p.duration) {
        this.popups.splice(i, 1);
      }
    }
  }

  public static addScore(
    basePoints: number,
    label?: string,
    worldPos?: { x: number; y: number; z?: number }
  ): number {
    // Increase combo
    this.comboCount++;
    this.combo = Math.min(this.MAX_COMBO, 1 + Math.floor(this.comboCount / 2));
    this.comboTimer = this.COMBO_TIMEOUT;

    const awarded = basePoints * this.combo;
    this.score += awarded;

    if (this.score > this.highScore) {
      this.highScore = this.score;
      try {
        localStorage.setItem('alienv2_highscore', this.highScore.toString());
      } catch {
        // storage disabled
      }
    }

    if (worldPos) {
      const displayText = this.combo > 1 ? `+${awarded} (x${this.combo})` : `+${awarded}`;
      const color = this.combo >= 4 ? '#f59e0b' : this.combo >= 2 ? '#3b82f6' : '#10b981';
      this.popups.push({
        text: label ? `${label} ${displayText}` : displayText,
        points: awarded,
        worldX: worldPos.x,
        worldY: worldPos.y,
        worldZ: worldPos.z ?? 15,
        color,
        duration: 1.4,
        elapsed: 0
      });
    }

    return awarded;
  }

  public static getScore(): number {
    return this.score;
  }

  public static getHighScore(): number {
    return this.highScore;
  }

  public static getCombo(): number {
    return this.combo;
  }

  public static getComboTimerRatio(): number {
    return this.comboTimer / this.COMBO_TIMEOUT;
  }

  public static reset() {
    this.score = 0;
    this.combo = 1;
    this.comboCount = 0;
    this.comboTimer = 0;
    this.popups = [];
  }
}
