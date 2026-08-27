import * as THREE from 'three';

// --- CameraController Constants ---
const ZERO_VALUE = 0;
const HALF_DIVISOR = 2.0;
const RANDOM_CENTER_OFFSET = 0.5;

const ISOMETRIC_CAMERA_OFFSET = 80;
const FRUSTUM_VIEW_BOUNDS_MARGIN = 350;

const LERP_DAMPING_RATE = 14;
const SHAKE_DECAY_RATE = 5;
const SHAKE_Y_AMPLITUDE_MULT = 0.3;

export class CameraController {
  private static camera: THREE.OrthographicCamera;
  
  // Shake state
  private static shakeIntensity: number = ZERO_VALUE;
  private static shakeDuration: number = ZERO_VALUE;
  private static shakeMaxDuration: number = ZERO_VALUE;
  
  // Target coordinates to follow (usually player)
  private static targetX: number = ZERO_VALUE;
  private static targetZ: number = ZERO_VALUE;

  // The base offset for the isometric view
  private static readonly offset = ISOMETRIC_CAMERA_OFFSET;

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
    return Math.abs(worldX - this.targetX) < FRUSTUM_VIEW_BOUNDS_MARGIN && Math.abs(worldZ - this.targetZ) < FRUSTUM_VIEW_BOUNDS_MARGIN;
  }

  private static currentCamX: number = ZERO_VALUE;
  private static currentCamZ: number = ZERO_VALUE;

  public static tick(delta: number) {
    if (!this.camera) return;

    const targetCamX = this.targetX + this.offset;
    const targetCamZ = this.targetZ + this.offset;

    if (this.currentCamX === ZERO_VALUE && this.currentCamZ === ZERO_VALUE) {
      this.currentCamX = targetCamX;
      this.currentCamZ = targetCamZ;
    }

    // FPS-independent smooth exponential damping
    const lerpFactor = 1 - Math.exp(-LERP_DAMPING_RATE * delta);
    this.currentCamX += (targetCamX - this.currentCamX) * lerpFactor;
    this.currentCamZ += (targetCamZ - this.currentCamZ) * lerpFactor;

    let finalX = this.currentCamX;
    let finalZ = this.currentCamZ;
    let finalY = this.offset;

    // Apply shake
    if (this.shakeDuration > ZERO_VALUE) {
      const t = 1 - (this.shakeDuration / this.shakeMaxDuration);
      const envelope = Math.exp(-t * SHAKE_DECAY_RATE) * this.shakeIntensity;

      const shakeOffsetX = (Math.random() - RANDOM_CENTER_OFFSET) * HALF_DIVISOR * envelope;
      const shakeOffsetZ = (Math.random() - RANDOM_CENTER_OFFSET) * HALF_DIVISOR * envelope;
      const shakeOffsetY = (Math.random() - RANDOM_CENTER_OFFSET) * SHAKE_Y_AMPLITUDE_MULT * HALF_DIVISOR * envelope;

      finalX += shakeOffsetX;
      finalZ += shakeOffsetZ;
      finalY += shakeOffsetY;

      this.shakeDuration -= delta;
      if (this.shakeDuration <= ZERO_VALUE) {
        this.shakeIntensity = ZERO_VALUE;
      }
    }

    this.camera.position.set(finalX, finalY, finalZ);
    // Keep looking at target with shake offset
    this.camera.lookAt(finalX - this.offset, ZERO_VALUE, finalZ - this.offset);
  }
}
