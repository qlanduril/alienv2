import * as THREE from 'three';

export class AssetLoader {
  private static loader = new THREE.TextureLoader();
  private static textures = new Map<string, THREE.Texture>();
  public static mapData: any[] = [];
  public static spriteOffsets: any = {};

  public static async loadAll(): Promise<void> {
    const promises: Promise<any>[] = [];

    // 1. Load Map Data
    promises.push(
      fetch('/map_data.json')
        .then(res => res.json())
        .then(data => { this.mapData = data; })
        .catch(err => console.error("Failed to load map data:", err))
    );

    // 1.5 Load Sprite Offsets
    promises.push(
      fetch('/sprite_offsets.json')
        .then(res => res.json())
        .then(data => { this.spriteOffsets = data; })
        .catch(err => console.error("Failed to load sprite offsets:", err))
    );

    // 2. Load Ground Texture
    promises.push(this.loadTexture('ground', '/city_background_topdown_red.png', false));

    // 3. Load School Textures (Building Type 3) — 72 frames from video
    const SCHOOL_LABELS = [
      '00_pristine', '01_damaged_1', '02_damaged_2', '03_damaged_3',
      '04_damaged_4', '05_damaged_5', '06_damaged_6', '07_damaged_7',
      '08_damaged_8', '09_damaged_9', '10_damaged_10', '11_damaged_11',
      '12_damaged_12', '13_damaged_13', '14_rubble'
    ];
    const SCHOOL_TOTAL = 72;
    for (let i = 0; i < SCHOOL_TOTAL; i++) {
      const filename = i < SCHOOL_LABELS.length
        ? `${SCHOOL_LABELS[i]}.png`
        : `${i}_damaged_${i}.png`;
      promises.push(this.loadTexture(`building_3_stage_${i}`, `/school/${filename}`));
    }

    // 4. Load Hospital Textures (Building Type 1)
    for (let i = 0; i < 20; i++) {
      promises.push(this.loadTexture(`building_1_stage_${i}`, `/hospital/frame_${i}.png`));
    }

    // 5. Load FX Textures
    for (let i = 0; i < 11; i++) {
      promises.push(this.loadTexture(`fx_blast_${i}`, `/blast/frame_${i}.png`));
    }
    for (let i = 0; i < 7; i++) {
      promises.push(this.loadTexture(`fx_blast360_${i}`, `/blast360/frame_${i}.png`));
    }
    for (let i = 0; i < 10; i++) {
      promises.push(this.loadTexture(`fx_fire_${i}`, `/fire/frame_${i}.png`));
    }

    await Promise.all(promises);
  }

  public static async loadTexture(id: string, url: string, pixelated: boolean = true): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      if (this.textures.has(id)) {
        resolve(this.textures.get(id)!);
        return;
      }

      this.loader.load(
        url,
        (texture) => {
          if (pixelated) {
            texture.minFilter = THREE.NearestFilter;
            texture.magFilter = THREE.NearestFilter;
            texture.generateMipmaps = false;
          } else {
            texture.minFilter = THREE.LinearMipmapLinearFilter;
            texture.magFilter = THREE.LinearFilter;
          }
          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          this.textures.set(id, texture);
          resolve(texture);
        },
        undefined,
        (error) => reject(error)
      );
    });
  }

  public static getTexture(id: string): THREE.Texture | null {
    return this.textures.get(id) || null;
  }

  public static getSpriteOffset(typeKey: string, frameIndex: number): { w: number, h: number, dx: number, dy: number, y_max?: number, base_cy?: number } | null {
    const typeOffsets = this.spriteOffsets[`building_${typeKey}`];
    if (!typeOffsets) return null;
    return typeOffsets[frameIndex] || typeOffsets[frameIndex.toString()] || null;
  }
}
