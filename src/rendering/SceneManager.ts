import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    canvasContainer.appendChild(this.renderer.domElement);

    // 2. Setup Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d1b2a);

    // 3. Setup Camera (Isometric / Orthographic)
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 360; // Map scale (zoomed out for 64x64 NYC skyline view)
    this.camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      2000
    );
    
    // Isometric angle setup (30 degree tilt, 45 degree rotation)
    this.camera.position.set(150, 150, 150);
    this.camera.lookAt(0, 0, 0);

    // 4. Setup Groups
    this.groundGroup = new THREE.Group();
    this.cityGroup = new THREE.Group();
    this.playerGroup = new THREE.Group();
    this.effectsGroup = new THREE.Group();

    this.groundGroup.renderOrder = 0;
    this.cityGroup.renderOrder = 1;
    this.playerGroup.renderOrder = 2;
    this.effectsGroup.renderOrder = 3;

    this.scene.add(this.groundGroup);
    this.scene.add(this.cityGroup);
    this.scene.add(this.playerGroup);
    this.scene.add(this.effectsGroup);

    // 5. Lighting & Atmosphere
    const ambientLight = new THREE.AmbientLight(0x1a1a24, 1.2);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5e6, 2.5); // Late afternoon warm sun
    dirLight.position.set(400, 600, 200); // angled high overhead sun
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.left = -800;
    dirLight.shadow.camera.right = 800;
    dirLight.shadow.camera.top = 800;
    dirLight.shadow.camera.bottom = -800;
    dirLight.shadow.camera.far = 2000;
    dirLight.shadow.bias = -0.0005;
    this.scene.add(dirLight);


    this.scene.fog = new THREE.FogExp2(0x1a1a24, 0.002);

    // 6. Clock
    this.clock = new THREE.Clock();

    // 7. Post-Processing
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.8, 0.85);
    this.composer.addPass(bloomPass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
    this.clock = new THREE.Clock();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private static onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 360;
    
    this.camera.left = -frustumSize * aspect / 2;
    this.camera.right = frustumSize * aspect / 2;
    this.camera.top = frustumSize / 2;
    this.camera.bottom = -frustumSize / 2;
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
