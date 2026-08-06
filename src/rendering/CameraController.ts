import * as THREE from 'three';

export class CameraController {
  private static camera: THREE.OrthographicCamera;
  
  // Shake state
  private static shakeIntensity: number = 0;
  private static shakeDuration: number = 0;
  private static shakeMaxDuration: number = 0;
  
  // Target coordinates to follow (usually player)
  private static targetX: number = 0;
  private static targetZ: number = 0;

  // The base offset for the isometric view
  private static readonly offset = 150;

  public static init(camera: THREE.OrthographicCamera) {
    this.camera = camera;
  }

  public static setTarget(x: number, z: number) {
    this.targetX = x;
    this.targetZ = z;
  }

  public static addShake(intensity: number, duration: number) {
    this.shakeIntensity = intensity;
    this.shakeDuration = duration;
    this.shakeMaxDuration = duration;
  }

  public static isPointInView(worldX: number, worldZ: number): boolean {
    // 350 units fits the wide frustumSize of 360
    return Math.abs(worldX - this.targetX) < 350 && Math.abs(worldZ - this.targetZ) < 350;
  }


  private static currentCamX: number = 0;
  private static currentCamZ: number = 0;

  public static tick(delta: number) {
    if (!this.camera) return;

    const targetCamX = this.targetX + this.offset;
    const targetCamZ = this.targetZ + this.offset;

    if (this.currentCamX === 0 && this.currentCamZ === 0) {
      this.currentCamX = targetCamX;
      this.currentCamZ = targetCamZ;
    }

    // FPS-independent smooth exponential damping
    const lerpFactor = 1 - Math.exp(-14 * delta);
    this.currentCamX += (targetCamX - this.currentCamX) * lerpFactor;
    this.currentCamZ += (targetCamZ - this.currentCamZ) * lerpFactor;

    let finalX = this.currentCamX;
    let finalZ = this.currentCamZ;
    let finalY = this.offset;

    // Apply shake
    if (this.shakeDuration > 0) {
      const t = 1 - (this.shakeDuration / this.shakeMaxDuration);
      const envelope = Math.exp(-t * 5) * this.shakeIntensity;

      const shakeOffsetX = (Math.random() - 0.5) * 2 * envelope;
      const shakeOffsetZ = (Math.random() - 0.5) * 2 * envelope;
      const shakeOffsetY = (Math.random() - 0.5) * 0.3 * envelope;

      finalX += shakeOffsetX;
      finalZ += shakeOffsetZ;
      finalY += shakeOffsetY;

      this.shakeDuration -= delta;
      if (this.shakeDuration <= 0) {
        this.shakeIntensity = 0;
      }
    }

    this.camera.position.set(finalX, finalY, finalZ);
    // Keep looking at target with shake offset
    this.camera.lookAt(finalX - this.offset, 0, finalZ - this.offset);
  }
}
