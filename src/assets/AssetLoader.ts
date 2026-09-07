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

    // 0. Load 3D GLB Models
    promises.push(this.loadGLTF('skyscraper_demolition', '/3d/skyscrapper1/skyscraper_demolition.glb'));

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

    // 1. Load Hospital Textures (Building Type 1) - 15 frames from buildingv2
    for (let i = 0; i < 15; i++) promises.push(this.loadTexture(`building_1_stage_${i}`, `/buildingv2/hospital/png/${getFilename(i, true)}`));

    // 2. Load Mall Textures (Building Type 2) - 15 frames from buildingv2
    for (let i = 0; i < 15; i++) promises.push(this.loadTexture(`building_2_stage_${i}`, `/buildingv2/mall/png/${getFilename(i, true)}`));

    // 3. Load School Textures (Building Type 3) - 15 frames from buildingv2
    for (let i = 0; i < 15; i++) promises.push(this.loadTexture(`building_3_stage_${i}`, `/buildingv2/school/png/${getFilename(i, true)}`));

    // 4. Load Warehouse Textures (Building Type 4) - 14 frames from buildingv2
    for (let i = 0; i < 14; i++) promises.push(this.loadTexture(`building_4_stage_${i}`, `/buildingv2/warehouse/png/${getFilename(i, false)}`));

    // 5. Load Skyscraper Textures (Building Type 5) - 15 frames from buildingv2
    for (let i = 0; i < 15; i++) promises.push(this.loadTexture(`building_5_stage_${i}`, `/buildingv2/skyscraper/png/${getFilename(i, true)}`));

    // 6. Load Low-rise Shops & Mid-rises from buildingv2 (with aliases so ALL buildings have damage stages)
    const shopFrames = ['state_000_pristine.png', 'state_033_shattered_front.png', 'state_066_facade_breached.png', 'state_100_rubble.png'];
    shopFrames.forEach((f, i) => {
      promises.push(this.loadTexture(`building_b1_stage_${i}`, `/buildingv2/shop_lowrise/png/${f}`));
      promises.push(this.loadTexture(`building_b2_stage_${i}`, `/buildingv2/shop_lowrise/png/${f}`));
    });
    
    const midriseFrames = ['state_000_pristine.png', 'state_033_roof_hvac_destroyed.png', 'state_066_mid_floors_gutted.png', 'state_100_collapsed_ruins.png'];
    midriseFrames.forEach((f, i) => {
      promises.push(this.loadTexture(`building_b3_stage_${i}`, `/buildingv2/tower_midrise/png/${f}`));
      promises.push(this.loadTexture(`building_res_bronze_stage_${i}`, `/buildingv2/tower_midrise/png/${f}`));
    });

    const highriseFrames = ['state_000_pristine.png', 'state_033_spire_blast.png', 'state_066_midsection_crater.png', 'state_100_skeleton_ruin.png'];
    highriseFrames.forEach((f, i) => {
      promises.push(this.loadTexture(`building_b4_stage_${i}`, `/buildingv2/skyscraper_highrise/png/${f}`));
      promises.push(this.loadTexture(`building_res_sky_stage_${i}`, `/buildingv2/skyscraper_highrise/png/${f}`));
    });

    const cyberFrames = ['state_000_pristine.png', 'state_033_needle_antenna_snap.png', 'state_066_laser_conduit_overload.png', 'state_100_core_meltdown_rubble.png'];
    cyberFrames.forEach((f, i) => {
      promises.push(this.loadTexture(`building_sky_cyber_stage_${i}`, `/buildingv2/sky_cyber/png/${f}`));
      promises.push(this.loadTexture(`building_sky_artdeco_stage_${i}`, `/buildingv2/sky_cyber/png/${f}`));
      promises.push(this.loadTexture(`building_sky_biotech_stage_${i}`, `/buildingv2/sky_cyber/png/${f}`));
    });

    // Tier 4 Mega-Landmarks & Landmark Buildings from buildingv2
    const megaTitanFrames = ['state_000_pristine.png', 'state_033_setback_tier1_destroyed.png', 'state_066_lobby_facade_shattered.png', 'state_100_titan_split_collapse.png'];
    megaTitanFrames.forEach((f, i) => promises.push(this.loadTexture(`building_mega_titan_stage_${i}`, `/buildingv2/mega_titan/png/${f}`)));

    const spaceshipFrames = [
      'state_000_pristine.png', 'state_025_east_ring_breached.png', 'state_025_north_ring_breached.png',
      'state_025_south_ring_breached.png', 'state_025_west_ring_breached.png', 'state_066_multi_sector_ruin.png',
      'state_100_ring_rubble.png'
    ];
    spaceshipFrames.forEach((f, i) => promises.push(this.loadTexture(`building_spaceship_hq_stage_${i}`, `/buildingv2/spaceship_hq/png/${f}`)));

    // 7. Load JanaChumi Isometric Pack V1 Building Textures
    const janaBuildingMap: Record<string, string> = {
      'jana_building0': '/tiles/v1/IsometricPack_ByJanaChumi/png/building0.png',
      'jana_building1': '/tiles/v1/IsometricPack_ByJanaChumi/png/building1.png',
      'jana_building2': '/tiles/v1/IsometricPack_ByJanaChumi/png/building2.png',
      'jana_police': '/tiles/v1/IsometricPack_ByJanaChumi/png/police0.png',
      'jana_shop0': '/tiles/v1/IsometricPack_ByJanaChumi/png/shop0.png',
      'jana_shop1': '/tiles/v1/IsometricPack_ByJanaChumi/png/shop1.png',
      'jana_pink_house': '/tiles/v1/IsometricPack_ByJanaChumi/png/pinkHouse.png',
      'jana_purple_house': '/tiles/v1/IsometricPack_ByJanaChumi/png/purpleHouse.png',
      'jana_school': '/tiles/v1/IsometricPack_ByJanaChumi/png/school0.png',
      'jana_fountain': '/tiles/v1/IsometricPack_ByJanaChumi/png/fountain.png'
    };

    for (const [key, texPath] of Object.entries(janaBuildingMap)) {
      promises.push(this.loadTexture(`building_${key}_stage_0`, texPath));
    }

    // 8. Load Kenney Isometric City Pack Building Textures
    const kenneyBuildingMap: Record<string, string> = {
      'kenney_tower_cyber': '/tiles/kenny/PNG/cityTiles_036.png',
      'kenney_tower_office': '/tiles/kenny/PNG/cityTiles_044.png',
      'kenney_tower_artdeco': '/tiles/kenny/PNG/cityTiles_048.png',
      'kenney_building_block': '/tiles/kenny/PNG/cityTiles_052.png',
      'kenney_house_red': '/tiles/kenny/PNG/cityTiles_072.png',
      'kenney_house_beige': '/tiles/kenny/PNG/cityTiles_078.png',
      'kenney_shop_blue': '/tiles/kenny/PNG/cityTiles_086.png',
      'kenney_shop_green': '/tiles/kenny/PNG/cityTiles_088.png',
      'kenney_hospital': '/tiles/kenny/PNG/cityTiles_092.png',
      'kenney_stadium': '/tiles/kenny/PNG/cityTiles_090.png'
    };

    for (const [key, texPath] of Object.entries(kenneyBuildingMap)) {
      promises.push(this.loadTexture(`building_${key}_stage_0`, texPath));
    }

    const statueFrames = ['state_000_pristine.png', 'state_050_head_torch_snapped.png', 'state_100_pedestal_shattered.png'];
    statueFrames.forEach((f, i) => promises.push(this.loadTexture(`building_statue_liberty_stage_${i}`, `/buildingv2/statue_liberty/png/${f}`)));

    const pentagonFrames = ['state_000_pristine.png', 'state_033_helipad_tarmac_crater.png', 'state_033_outer_ring_breach.png', 'state_066_fortress_core_gutted.png', 'state_100_bunker_ruins.png'];
    pentagonFrames.forEach((f, i) => promises.push(this.loadTexture(`building_pentagon_defense_stage_${i}`, `/buildingv2/pentagon_defense/png/${f}`)));

    // Legacy Stadium mapping fallback
    for (let i = 0; i < 15; i++) {
      promises.push(this.loadTexture(`building_mega_stadium_stage_${i}`, `/buildingv2/mall/png/${getFilename(i, true)}`));
    }

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
        (error) => {
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
