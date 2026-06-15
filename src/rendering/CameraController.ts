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
  private static readonly offset = 50;

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
    // Simple bounding box check around the camera target
    // 45 units is safely larger than the typical orthographic viewport
    return Math.abs(worldX - this.targetX) < 45 && Math.abs(worldZ - this.targetZ) < 45;
  }

  public static tick(delta: number) {
    if (!this.camera) return;

    // Follow target smoothly (lerp could be added here)
    const camX = this.targetX + this.offset;
    const camZ = this.targetZ + this.offset;
    const camY = this.offset;

    let finalX = camX;
    let finalZ = camZ;
    let finalY = camY;

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
