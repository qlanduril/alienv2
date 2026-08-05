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

    const getFilename = (i: number, isRubble: boolean = false) => {
      if (i === 0) return '00_pristine.png';
      if (isRubble && i === 14) return '14_rubble.png';
      return `${i < 10 ? '0' : ''}${i}_damaged_${i}.png`;
    };

    // 1. Load Hospital Textures (Building Type 1) - 15 frames
    for (let i = 0; i < 15; i++) promises.push(this.loadTexture(`building_1_stage_${i}`, `/building/hospital/png/${getFilename(i, true)}`));

    // 2. Load Mall Textures (Building Type 2) - 2 frames
    for (let i = 0; i < 2; i++) promises.push(this.loadTexture(`building_2_stage_${i}`, `/building/mall/png/${getFilename(i, false)}`));

    // 3. Load School Textures (Building Type 3) — 72 frames from video
    const SCHOOL_LABELS = [
      '00_pristine', '01_damaged_1', '02_damaged_2', '03_damaged_3',
      '04_damaged_4', '05_damaged_5', '06_damaged_6', '07_damaged_7',
      '08_damaged_8', '09_damaged_9', '10_damaged_10', '11_damaged_11',
      '12_damaged_12', '13_damaged_13', '14_rubble'
    ];
    for (let i = 0; i < 72; i++) {
      const filename = i < SCHOOL_LABELS.length
        ? `${SCHOOL_LABELS[i]}.png`
        : `${i}_damaged_${i}.png`;
      promises.push(this.loadTexture(`building_3_stage_${i}`, `/school/${filename}`));
    }

    // 4. Load Warehouse Textures (Building Type 4) - 14 frames
    for (let i = 0; i < 14; i++) promises.push(this.loadTexture(`building_4_stage_${i}`, `/building/warehouse/png/${getFilename(i, false)}`));

    // 5. Load Skyscraper Textures (Building Type 5) - 15 frames
    for (let i = 0; i < 15; i++) promises.push(this.loadTexture(`building_5_stage_${i}`, `/building/skyscraper/png/${getFilename(i, true)}`));

    // 6. Load New Building Sprites from static/building/
    promises.push(this.loadTexture('building_b1_stage_0', '/building/1.png'));
    promises.push(this.loadTexture('building_b2_stage_0', '/building/2.png'));
    promises.push(this.loadTexture('building_b3_stage_0', '/building/3.png'));
    promises.push(this.loadTexture('building_b4_stage_0', '/building/4.png'));

    promises.push(this.loadTexture('building_res_bronze_stage_0', '/building/residential_bronze_penthouses/png/00_pristine.png'));
    promises.push(this.loadTexture('building_res_sky_stage_0', '/building/residential_sky_gardens/png/00_pristine.png'));

    promises.push(this.loadTexture('building_sky_artdeco_stage_0', '/building/skyscraper_artdeco_titan/png/00_pristine.png'));
    promises.push(this.loadTexture('building_sky_biotech_stage_0', '/building/skyscraper_biotech_helix/png/00_pristine.png'));
    promises.push(this.loadTexture('building_sky_cyber_stage_0', '/building/skyscraper_cyber_spire/png/00_pristine.png'));

    // 7. Load FX Textures
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
    if (this.textures.has(id)) return this.textures.get(id)!;
    // Fallback for single-frame stage textures (e.g. building_res_bronze_stage_5 -> building_res_bronze_stage_0)
    const baseMatch = id.match(/^(building_[a-zA-Z0-9_]+_stage_)(\d+)$/);
    if (baseMatch) {
      const stage0 = `${baseMatch[1]}0`;
      if (this.textures.has(stage0)) return this.textures.get(stage0)!;
    }
    return null;
  }


  public static getSpriteOffset(typeKey: string, frameIndex: number): { w: number, h: number, dx: number, dy: number, y_max?: number, base_cy?: number } | null {
    const typeOffsets = this.spriteOffsets[`building_${typeKey}`];
    if (!typeOffsets) return null;
    return typeOffsets[frameIndex] || typeOffsets[frameIndex.toString()] || null;
  }
}
