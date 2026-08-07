import * as THREE from 'three';

// --- AnimatedSprite3D Constants ---
const ZERO_VALUE = 0;
const INITIAL_FRAME_INDEX = 0;
const DEFAULT_SECONDS_PER_FRAME = 0.25;
const SPRITE_MATERIAL_COLOR = 0xffffff;
const SPRITE_ALPHA_TEST_THRESHOLD = 0.1;
const BOUNDS_END_OFFSET = 1;

export class AnimatedSprite3D {
  public mesh: THREE.Sprite;
  public material: THREE.SpriteMaterial;
  
  public textures: THREE.Texture[];
  public currentFrame: number = INITIAL_FRAME_INDEX;
  public speed: number = DEFAULT_SECONDS_PER_FRAME; // seconds per frame (default / fallback)
  public frameDurations?: number[]; // per-frame timing override for non-linear easing
  public loop: boolean = true;
  
  public timer: number = ZERO_VALUE;
  public playing: boolean = true;
  public active: boolean = true;

  // Callbacks
  public onFrameChange?: (frame: number) => void;
  public onComplete?: () => void;

  constructor(textures: THREE.Texture[]) {
    this.textures = textures;
    this.material = new THREE.SpriteMaterial({ 
      map: this.textures[INITIAL_FRAME_INDEX] || null,
      color: SPRITE_MATERIAL_COLOR,
      transparent: true,
      alphaTest: SPRITE_ALPHA_TEST_THRESHOLD
    });
    this.mesh = new THREE.Sprite(this.material);
  }

  public reset(textures: THREE.Texture[], loop: boolean, durations?: number[]) {
    this.textures = textures;
    this.currentFrame = INITIAL_FRAME_INDEX;
    this.timer = ZERO_VALUE;
    this.loop = loop;
    this.frameDurations = durations;
    this.playing = true;
    this.active = true;
    this.material.map = textures[INITIAL_FRAME_INDEX] || null;
    this.material.needsUpdate = true;
    this.onComplete = undefined;
    this.onFrameChange = undefined;
    this.mesh.visible = true;
  }

  public gotoFrame(n: number) {
    if (this.textures.length === ZERO_VALUE) return;
    this.currentFrame = Math.max(INITIAL_FRAME_INDEX, Math.min(n, this.textures.length - BOUNDS_END_OFFSET));
    this.timer = ZERO_VALUE;
    this.material.map = this.textures[this.currentFrame];
    this.material.needsUpdate = true;
  }

  public play() {
    this.playing = true;
  }

  public stop() {
    this.playing = false;
  }

  public tick(delta: number) {
    if (!this.active || !this.playing || this.textures.length === ZERO_VALUE) return;

    this.timer += delta;
    
    if (this.timer < ZERO_VALUE) {
      this.mesh.visible = false;
      return;
    } else if (!this.mesh.visible) {
      this.mesh.visible = true;
    }
    
    // Use per-frame duration if available, otherwise fall back to flat speed
    const frameSpeed = this.frameDurations?.[this.currentFrame] ?? this.speed;

    if (this.timer >= frameSpeed) {
      this.timer -= frameSpeed;
      this.currentFrame++;

      if (this.currentFrame >= this.textures.length) {
        if (this.loop) {
          this.currentFrame = INITIAL_FRAME_INDEX;
        } else {
          this.currentFrame = this.textures.length - BOUNDS_END_OFFSET;
          this.playing = false;
          this.active = false;
          if (this.onComplete) this.onComplete();
          return;
        }
      }

      // Update texture
      this.material.map = this.textures[this.currentFrame];
      this.material.needsUpdate = true;

      // Fire callback
      if (this.onFrameChange) {
        this.onFrameChange(this.currentFrame);
      }
    }
  }

  public destroy() {
    this.active = false;
    this.material.dispose();
  }
}
