import * as THREE from 'three';

export class AnimatedSprite3D {
  public mesh: THREE.Sprite;
  public material: THREE.SpriteMaterial;
  
  public textures: THREE.Texture[];
  public currentFrame: number = 0;
  public speed: number = 0.25; // seconds per frame (default / fallback)
  public frameDurations?: number[]; // per-frame timing override for non-linear easing
  public loop: boolean = true;
  
  public timer: number = 0;
  public playing: boolean = true;
  public active: boolean = true;

  // Callbacks
  public onFrameChange?: (frame: number) => void;
  public onComplete?: () => void;

  constructor(textures: THREE.Texture[]) {
    this.textures = textures;
    this.material = new THREE.SpriteMaterial({ 
      map: this.textures[0] || null,
      color: 0xffffff,
      transparent: true,
      alphaTest: 0.1
    });
    this.mesh = new THREE.Sprite(this.material);
  }

  public reset(textures: THREE.Texture[], loop: boolean, durations?: number[]) {
    this.textures = textures;
    this.currentFrame = 0;
    this.timer = 0;
    this.loop = loop;
    this.frameDurations = durations;
    this.playing = true;
    this.active = true;
    this.material.map = textures[0] || null;
    this.material.needsUpdate = true;
    this.onComplete = undefined;
    this.onFrameChange = undefined;
    this.mesh.visible = true;
  }

  public gotoFrame(n: number) {
    if (this.textures.length === 0) return;
    this.currentFrame = Math.max(0, Math.min(n, this.textures.length - 1));
    this.timer = 0;
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
    if (!this.active || !this.playing || this.textures.length === 0) return;

    this.timer += delta;
    
    if (this.timer < 0) {
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
          this.currentFrame = 0;
        } else {
          this.currentFrame = this.textures.length - 1;
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
