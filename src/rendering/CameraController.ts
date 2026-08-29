import * as THREE from 'three';
import { SceneManager } from './SceneManager';

// --- CameraController Constants ---
const ZERO_VALUE = 0;
const HALF_DIVISOR = 2.0;
const RANDOM_CENTER_OFFSET = 0.5;

const ISOMETRIC_CAMERA_OFFSET = 450;

const LERP_DAMPING_RATE = 14;
const SHAKE_DECAY_RATE = 5;
const SHAKE_Y_AMPLITUDE_MULT = 0.3;

const MIN_FRUSTUM_SIZE = 300;
const MAX_FRUSTUM_SIZE = 900;
const ZOOM_SENSITIVITY = 0.35;

// Map world-space bounds (TILE_SIZE=16, GRID_DIM=64 → centered at 0, -512 to +512)
const MAP_WORLD_SIZE = 1024;
const HALF_MAP = MAP_WORLD_SIZE / HALF_DIVISOR;
const CAM_CLAMP_MIN = -HALF_MAP + 60; // -452
const CAM_CLAMP_MAX = HALF_MAP - 60;   // 452

export class CameraController {
  private static camera: THREE.OrthographicCamera;
  
  // Shake state
  private static shakeIntensity: number = ZERO_VALUE;
  private static shakeDuration: number = ZERO_VALUE;
  private static shakeMaxDuration: number = ZERO_VALUE;
  
  // Target coordinates to follow (usually player)
  private static targetX: number = ZERO_VALUE;
  private static targetZ: number = ZERO_VALUE;

  // Frustum zoom state
  private static targetFrustumSize: number = 560;
  private static currentFrustumSize: number = 560;

  // The base offset for the isometric view
  private static readonly offset = ISOMETRIC_CAMERA_OFFSET;

  public static init(camera: THREE.OrthographicCamera) {
    this.camera = camera;
    this.targetFrustumSize = SceneManager.getFrustumSize();
    this.currentFrustumSize = this.targetFrustumSize;

    window.addEventListener('wheel', (e: WheelEvent) => {
      this.targetFrustumSize = Math.max(
        MIN_FRUSTUM_SIZE,
        Math.min(MAX_FRUSTUM_SIZE, this.targetFrustumSize + e.deltaY * ZOOM_SENSITIVITY)
      );
    }, { passive: true });
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
    const margin = (this.currentFrustumSize / HALF_DIVISOR) + 150;
    return Math.abs(worldX - this.targetX) < margin && Math.abs(worldZ - this.targetZ) < margin;
  }

  private static currentCamX: number = ZERO_VALUE;
  private static currentCamZ: number = ZERO_VALUE;

  public static tick(delta: number) {
    if (!this.camera) return;

    // Smooth frustum zoom interpolation
    if (Math.abs(this.currentFrustumSize - this.targetFrustumSize) > 0.05) {
      const zoomLerpFactor = 1 - Math.exp(-LERP_DAMPING_RATE * delta);
      this.currentFrustumSize += (this.targetFrustumSize - this.currentFrustumSize) * zoomLerpFactor;
      SceneManager.setFrustumSize(this.currentFrustumSize);
    }

    const targetCamX = Math.max(CAM_CLAMP_MIN, Math.min(CAM_CLAMP_MAX, this.targetX)) + this.offset;
    const targetCamZ = Math.max(CAM_CLAMP_MIN, Math.min(CAM_CLAMP_MAX, this.targetZ)) + this.offset;

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
