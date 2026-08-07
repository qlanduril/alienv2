import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// --- SceneManager Constants ---
const HALF_DIVISOR = 2.0;
const ZERO_LOOKAT = 0;
const MAX_PIXEL_RATIO = 2.0;
const SCENE_BACKGROUND_HEX = 0x0d1b2a;

// Camera Orthographic Projection Constants
const DEFAULT_FRUSTUM_SIZE = 420;
const CAMERA_NEAR_PLANE = 1;
const CAMERA_FAR_PLANE = 2000;
const CAMERA_INIT_X = 200;
const CAMERA_INIT_Y = 200;
const CAMERA_INIT_Z = 200;

// Render Order Constants
const GROUND_RENDER_ORDER = 0;
const CITY_RENDER_ORDER = 1;
const PLAYER_RENDER_ORDER = 2;
const EFFECTS_RENDER_ORDER = 3;

// Lighting Constants
const AMBIENT_LIGHT_COLOR = 0x1a1a24;
const AMBIENT_LIGHT_INTENSITY = 1.2;
const DIR_LIGHT_COLOR = 0xfff5e6;
const DIR_LIGHT_INTENSITY = 2.5;
const DIR_LIGHT_POS_X = 400;
const DIR_LIGHT_POS_Y = 600;
const DIR_LIGHT_POS_Z = 200;
const SHADOW_MAP_SIZE = 2048;
const SHADOW_CAM_BOUNDS = 800;
const SHADOW_CAM_FAR = 2000;
const SHADOW_BIAS = -0.0005;

// Atmosphere & FX Post-Processing Constants
const FOG_COLOR_HEX = 0x1a1a24;
const FOG_DENSITY = 0.002;
const BLOOM_STRENGTH = 1.2;
const BLOOM_RADIUS = 0.8;
const BLOOM_THRESHOLD = 0.85;

export class SceneManager {
  public static scene: THREE.Scene;
  public static camera: THREE.OrthographicCamera;
  public static renderer: THREE.WebGLRenderer;
  public static composer: EffectComposer;
  public static clock: THREE.Clock;

  // Groups for easy management
  public static groundGroup: THREE.Group;
  public static cityGroup: THREE.Group;
  public static effectsGroup: THREE.Group;
  public static playerGroup: THREE.Group;

  public static init(canvasContainer: HTMLElement) {
    // 1. Setup Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    canvasContainer.appendChild(this.renderer.domElement);

    // 2. Setup Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(SCENE_BACKGROUND_HEX);

    // 3. Setup Camera (Isometric / Orthographic)
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = DEFAULT_FRUSTUM_SIZE;
    this.camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -HALF_DIVISOR,
      (frustumSize * aspect) / HALF_DIVISOR,
      frustumSize / HALF_DIVISOR,
      frustumSize / -HALF_DIVISOR,
      CAMERA_NEAR_PLANE,
      CAMERA_FAR_PLANE
    );
    
    // Isometric angle setup (30 degree tilt, 45 degree rotation)
    this.camera.position.set(CAMERA_INIT_X, CAMERA_INIT_Y, CAMERA_INIT_Z);
    this.camera.lookAt(ZERO_LOOKAT, ZERO_LOOKAT, ZERO_LOOKAT);

    // 4. Setup Groups
    this.groundGroup = new THREE.Group();
    this.cityGroup = new THREE.Group();
    this.playerGroup = new THREE.Group();
    this.effectsGroup = new THREE.Group();

    this.groundGroup.renderOrder = GROUND_RENDER_ORDER;
    this.cityGroup.renderOrder = CITY_RENDER_ORDER;
    this.playerGroup.renderOrder = PLAYER_RENDER_ORDER;
    this.effectsGroup.renderOrder = EFFECTS_RENDER_ORDER;

    this.scene.add(this.groundGroup);
    this.scene.add(this.cityGroup);
    this.scene.add(this.playerGroup);
    this.scene.add(this.effectsGroup);

    // 5. Lighting & Atmosphere
    const ambientLight = new THREE.AmbientLight(AMBIENT_LIGHT_COLOR, AMBIENT_LIGHT_INTENSITY);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(DIR_LIGHT_COLOR, DIR_LIGHT_INTENSITY);
    dirLight.position.set(DIR_LIGHT_POS_X, DIR_LIGHT_POS_Y, DIR_LIGHT_POS_Z);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = SHADOW_MAP_SIZE;
    dirLight.shadow.mapSize.height = SHADOW_MAP_SIZE;
    dirLight.shadow.camera.left = -SHADOW_CAM_BOUNDS;
    dirLight.shadow.camera.right = SHADOW_CAM_BOUNDS;
    dirLight.shadow.camera.top = SHADOW_CAM_BOUNDS;
    dirLight.shadow.camera.bottom = -SHADOW_CAM_BOUNDS;
    dirLight.shadow.camera.far = SHADOW_CAM_FAR;
    dirLight.shadow.bias = SHADOW_BIAS;
    this.scene.add(dirLight);

    this.scene.fog = new THREE.FogExp2(FOG_COLOR_HEX, FOG_DENSITY);

    // 6. Clock
    this.clock = new THREE.Clock();

    // 7. Post-Processing
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), BLOOM_STRENGTH, BLOOM_RADIUS, BLOOM_THRESHOLD);
    this.composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
    this.clock = new THREE.Clock();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private static onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = DEFAULT_FRUSTUM_SIZE;
    
    this.camera.left = (-frustumSize * aspect) / HALF_DIVISOR;
    this.camera.right = (frustumSize * aspect) / HALF_DIVISOR;
    this.camera.top = frustumSize / HALF_DIVISOR;
    this.camera.bottom = -frustumSize / HALF_DIVISOR;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (this.composer) {
      this.composer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  public static render() {
    this.composer.render();
  }
}
