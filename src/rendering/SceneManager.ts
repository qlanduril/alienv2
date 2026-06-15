import * as THREE from 'three';


export class SceneManager {
  public static scene: THREE.Scene;
  public static camera: THREE.OrthographicCamera;
  public static renderer: THREE.WebGLRenderer;
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
    canvasContainer.appendChild(this.renderer.domElement);

    // 2. Setup Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d1b2a);

    // 3. Setup Camera (Isometric / Orthographic)
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 50; // Map scale
    this.camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      1000
    );
    
    // Isometric angle setup (30 degree tilt, 45 degree rotation)
    this.camera.position.set(50, 50, 50);
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

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(20, 50, 20);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    // 6. Clock
    this.clock = new THREE.Clock();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private static onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 50;
    
    this.camera.left = -frustumSize * aspect / 2;
    this.camera.right = frustumSize * aspect / 2;
    this.camera.top = frustumSize / 2;
    this.camera.bottom = -frustumSize / 2;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public static render() {
    this.renderer.render(this.scene, this.camera);
  }
}
