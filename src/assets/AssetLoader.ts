import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export class AssetLoader {
  private static loader = new THREE.TextureLoader();
  private static dracoLoader = new DRACOLoader();
  private static gltfLoader = new GLTFLoader();
  private static textures = new Map<string, THREE.Texture>();
  private static gltfModels = new Map<string, GLTF>();
  public static mapData: any[] = [];
  public static spriteOffsets: any = {};

  public static async loadAll(): Promise<void> {
    // Configure DRACOLoader for compressed GLTF models
    this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/gltf/');
    this.gltfLoader.setDRACOLoader(this.dracoLoader);

    const promises: Promise<any>[] = [];

    // 0. Preload 3D GLB Models (awaited so they are immediately available on frame 0)
    promises.push(this.loadGLTF('skyscraper_demolition', '/3d/skyscrapper1/skyscraper_demolition.glb').catch(err => {
      console.warn('[AssetLoader] GLTF load notice:', err);
    }));
    promises.push(this.loadGLTF('spaceship_hq', '/3d/spaceship_hq/spaceship_hq.glb').catch(err => {
      console.warn('[AssetLoader] spaceship_hq 3D load notice:', err);
    }));
    promises.push(this.loadGLTF('cyber_reactor', '/3d/cyber_reactor/cyber_reactor.glb').catch(err => {
      console.warn('[AssetLoader] cyber_reactor 3D load notice:', err);
    }));
    promises.push(this.loadGLTF('financial_tower', '/3d/financial_tower/financial_tower.glb').catch(err => {
      console.warn('[AssetLoader] financial_tower 3D load notice:', err);
    }));

    // 1. Load Map Data
    promises.push(
      fetch(`/map_data.json?t=${Date.now()}`, { cache: 'no-store' })
        .then(res => res.json())
        .then(data => { this.mapData = data; })
        .catch(err => console.error("Failed to load map data:", err))
    );

    // 1.5 Load Sprite Offsets
    promises.push(
      fetch(`/sprite_offsets.json?t=${Date.now()}`, { cache: 'no-store' })
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

    // Preload Pristine (stage_0) Building Textures for Instant Boot
    promises.push(this.loadTexture('building_1_stage_0', `/buildingv2/hospital/png/${getFilename(0, true)}`));
    promises.push(this.loadTexture('building_2_stage_0', `/buildingv2/mall/png/${getFilename(0, true)}`));
    promises.push(this.loadTexture('building_3_stage_0', `/buildingv2/school/png/${getFilename(0, true)}`));
    promises.push(this.loadTexture('building_4_stage_0', `/buildingv2/warehouse/png/${getFilename(0, false)}`));
    promises.push(this.loadTexture('building_5_stage_0', `/buildingv2/skyscraper/png/${getFilename(0, true)}`));

    promises.push(this.loadTexture('building_b1_stage_0', '/buildingv2/shop_lowrise/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_b2_stage_0', '/buildingv2/shop_lowrise/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_b3_stage_0', '/buildingv2/tower_midrise/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_b4_stage_0', '/buildingv2/skyscraper_highrise/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_res_bronze_stage_0', '/buildingv2/residential_bronze_penthouses/png/00_pristine.png'));
    promises.push(this.loadTexture('building_res_sky_stage_0', '/buildingv2/residential_sky_gardens/png/00_pristine.png'));

    promises.push(this.loadTexture('building_sky_cyber_stage_0', '/buildingv2/skyscraper_cyber_spire/png/00_pristine.png'));
    promises.push(this.loadTexture('building_sky_artdeco_stage_0', '/buildingv2/skyscraper_artdeco_titan/png/00_pristine.png'));
    promises.push(this.loadTexture('building_sky_biotech_stage_0', '/buildingv2/skyscraper_biotech_helix/png/00_pristine.png'));

    promises.push(this.loadTexture('building_hospital_civic_stage_0', '/buildingv2/hospital_civic/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_mall_shopping_stage_0', '/buildingv2/mall_shopping/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_school_civic_stage_0', '/buildingv2/school_civic/png/state_000_pristine.png'));

    promises.push(this.loadTexture('building_spaceship_hq_stage_0', '/buildingv2/spaceship_hq/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_statue_liberty_stage_0', '/buildingv2/statue_liberty/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_pentagon_defense_stage_0', '/buildingv2/pentagon_defense/png/state_000_pristine.png'));
    promises.push(this.loadTexture('building_mega_stadium_stage_0', `/buildingv2/mall/png/${getFilename(0, true)}`));

    // Background asynchronous preload of damage stage frames (does not block initial loadAll)
    setTimeout(() => {
      for (let i = 1; i < 15; i++) {
        this.loadTexture(`building_1_stage_${i}`, `/buildingv2/hospital/png/${getFilename(i, true)}`);
        this.loadTexture(`building_2_stage_${i}`, `/buildingv2/mall/png/${getFilename(i, true)}`);
        this.loadTexture(`building_3_stage_${i}`, `/buildingv2/school/png/${getFilename(i, true)}`);
        this.loadTexture(`building_4_stage_${i}`, `/buildingv2/warehouse/png/${getFilename(i, false)}`);
        this.loadTexture(`building_5_stage_${i}`, `/buildingv2/skyscraper/png/${getFilename(i, true)}`);
        this.loadTexture(`building_mega_stadium_stage_${i}`, `/buildingv2/mall/png/${getFilename(i, true)}`);
      }
      const shopFrames = ['state_033_shattered_front.png', 'state_066_facade_breached.png', 'state_100_rubble.png'];
      shopFrames.forEach((f, idx) => {
        this.loadTexture(`building_b1_stage_${idx+1}`, `/buildingv2/shop_lowrise/png/${f}`);
        this.loadTexture(`building_b2_stage_${idx+1}`, `/buildingv2/shop_lowrise/png/${f}`);
      });
      const midriseFrames = ['state_033_roof_hvac_destroyed.png', 'state_066_mid_floors_gutted.png', 'state_100_collapsed_ruins.png'];
      midriseFrames.forEach((f, idx) => {
        this.loadTexture(`building_b3_stage_${idx+1}`, `/buildingv2/tower_midrise/png/${f}`);
        this.loadTexture(`building_res_bronze_stage_${idx+1}`, `/buildingv2/tower_midrise/png/${f}`);
      });
      const highriseFrames = ['state_066_midsection_crater.png', 'state_100_skeleton_ruin.png'];
      highriseFrames.forEach((f, idx) => {
        this.loadTexture(`building_b4_stage_${idx+1}`, `/buildingv2/skyscraper_highrise/png/${f}`);
        this.loadTexture(`building_res_sky_stage_${idx+1}`, `/buildingv2/skyscraper_highrise/png/${f}`);
      });
      const cyberFrames = ['state_033_needle_antenna_snap.png', 'state_066_laser_conduit_overload.png', 'state_100_core_meltdown_rubble.png'];
      cyberFrames.forEach((f, idx) => {
        this.loadTexture(`building_sky_cyber_stage_${idx+1}`, `/buildingv2/sky_cyber/png/${f}`);
        this.loadTexture(`building_sky_artdeco_stage_${idx+1}`, `/buildingv2/sky_cyber/png/${f}`);
        this.loadTexture(`building_sky_biotech_stage_${idx+1}`, `/buildingv2/sky_cyber/png/${f}`);
      });
      const hcFrames = ['state_033_ambulance_bay_blasted.png', 'state_033_helipad_destroyed.png', 'state_066_er_block_gutted.png', 'state_100_hospital_rubble.png'];
      hcFrames.forEach((f, idx) => {
        this.loadTexture(`building_hospital_civic_stage_${idx+1}`, `/buildingv2/hospital_civic/png/${f}`);
      });
      const msFrames = ['state_033_atrium_glass_caved.png', 'state_033_parking_plaza_crater.png', 'state_066_retail_wings_gutted.png', 'state_100_mall_rubble.png'];
      msFrames.forEach((f, idx) => {
        this.loadTexture(`building_mall_shopping_stage_${idx+1}`, `/buildingv2/mall_shopping/png/${f}`);
      });
      const scFrames = ['state_033_east_wing_breached.png', 'state_033_west_wing_breached.png', 'state_066_courtyard_crater.png', 'state_100_campus_rubble.png'];
      scFrames.forEach((f, idx) => {
        this.loadTexture(`building_school_civic_stage_${idx+1}`, `/buildingv2/school_civic/png/${f}`);
      });
      const pdFrames = ['state_033_helipad_tarmac_crater.png', 'state_033_outer_ring_breach.png', 'state_066_fortress_core_gutted.png', 'state_100_bunker_ruins.png'];
      pdFrames.forEach((f, idx) => {
        this.loadTexture(`building_pentagon_defense_stage_${idx+1}`, `/buildingv2/pentagon_defense/png/${f}`);
      });
      const slFrames = ['state_050_head_torch_snapped.png', 'state_100_pedestal_shattered.png'];
      slFrames.forEach((f, idx) => {
        this.loadTexture(`building_statue_liberty_stage_${idx+1}`, `/buildingv2/statue_liberty/png/${f}`);
      });
    }, 100);

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
    promises.push(this.loadTexture('fx_crater', '/crater.png', false));

    await Promise.all(promises);
  }

  public static async loadTexture(id: string, url: string, pixelated: boolean = true): Promise<THREE.Texture> {
    return new Promise((resolve) => {
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
        (_error) => {
          console.warn(`[AssetLoader] Texture '${id}' at ${url} failed to load. Proceeding with fallback.`);
          resolve(null as any);
        }
      );
    });
  }

  public static getTexture(id: string): THREE.Texture | null {
    if (this.textures.has(id)) return this.textures.get(id)!;
    // Fallback for stage textures (e.g. building_sky_cyber_stage_5 -> highest available stage <= 5)
    const baseMatch = id.match(/^(building_[a-zA-Z0-9_]+_stage_)(\d+)$/);
    if (baseMatch) {
      const requestedFrame = parseInt(baseMatch[2], 10);
      const prefix = baseMatch[1];
      for (let f = requestedFrame; f >= 0; f--) {
        const candidate = `${prefix}${f}`;
        if (this.textures.has(candidate)) return this.textures.get(candidate)!;
      }
      if (this.textures.has(`${prefix}0`)) return this.textures.get(`${prefix}0`)!;
    }
    return null;
  }


  public static getSpriteOffset(typeKey: string, frameIndex: number): { w: number, h: number, dx: number, dy: number, y_max?: number, base_cy?: number } | null {
    const typeOffsets = this.spriteOffsets[`building_${typeKey}`];
    if (!typeOffsets) return null;
    for (let f = frameIndex; f >= 0; f--) {
      const off = typeOffsets[f] || typeOffsets[f.toString()];
      if (off) return off;
    }
    return typeOffsets['0'] || null;
  }

  public static async loadGLTF(id: string, url: string): Promise<GLTF | null> {
    return new Promise((resolve) => {
      if (this.gltfModels.has(id)) {
        resolve(this.gltfModels.get(id)!);
        return;
      }

      this.gltfLoader.load(
        url,
        (gltf) => {
          console.log(`[AssetLoader] Successfully loaded 3D GLTF asset [${id}] from ${url}`, gltf);
          this.gltfModels.set(id, gltf);
          resolve(gltf);
        },
        undefined,
        (error) => {
          console.error(`[AssetLoader] ERROR loading 3D GLTF asset [${id}] from ${url}:`, error);
          resolve(null);
        }
      );
    });
  }

  public static getGLTF(id: string): GLTF | null {
    return this.gltfModels.get(id) || null;
  }
}
