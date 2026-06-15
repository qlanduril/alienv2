import { SceneManager } from './rendering/SceneManager';
import { GroundRenderer } from './rendering/GroundRenderer';
import { ParticleRenderer } from './rendering/ParticleRenderer';
import { UIOverlay } from './rendering/UIOverlay';
import { BuildingRenderer } from './rendering/BuildingRenderer';
import { PlayerRenderer } from './rendering/PlayerRenderer';
import { FXRenderer } from './rendering/FXRenderer';
import { CameraController } from './rendering/CameraController';

import { ECS } from './core/ECS';
import { PositionComponent, PlayerTagComponent, WeaponComponent } from './core/Components';
import { InputManager } from './input/InputManager';
import { RaycasterHelper } from './input/Raycaster';

import { CityGenerator } from './systems/CityGenerator';
import { PlayerControlSystem } from './systems/PlayerControlSystem';
import { DestructionSystem } from './systems/DestructionSystem';
import { ParticleSimSystem } from './systems/ParticleSimSystem';

import { AssetLoader } from './assets/AssetLoader';

async function bootstrap() {
  const container = document.getElementById('app');
  if (!container) throw new Error("No app container found!");

  // 1. Setup Input (Pure DOM)
  InputManager.init();

  // 2. Setup Rendering Layer (Three.js)
  SceneManager.init(container);
  ParticleRenderer.init();
  UIOverlay.init();
  
  CameraController.init(SceneManager.camera);
  RaycasterHelper.init(SceneManager.camera);

  // 3. Load Assets
  console.log("Loading assets...");
  await AssetLoader.loadAll();
  FXRenderer.preloadTextureArrays();
  console.log("Assets loaded.");

  // Initialize Ground after assets are loaded
  GroundRenderer.init();

  // 4. Initialize Core Systems
  PlayerControlSystem.init();
  DestructionSystem.init();
  ParticleSimSystem.init();


  // 5. Generate World
  CityGenerator.generateCity();

  // 5.5 Spawn Player (UFO)
  const playerEntity = ECS.createEntity();
  PlayerTagComponent.add(playerEntity);
  PositionComponent.set(playerEntity, { worldX: 0, worldY: 0, worldZ: 5 }); // worldZ is altitude, worldY is ground depth
  WeaponComponent.set(playerEntity, { currentSelected: 'laser', heatLevel: 0, fireRate: 0.2 });

  // 6. Start Game Loop
  let lastTime = performance.now();

  function animate() {
    requestAnimationFrame(animate);

    const currentTime = performance.now();
    const delta = (currentTime - lastTime) / 1000; // in seconds
    lastTime = currentTime;

    // --- CORE LOGIC TICK ---
    // Pure engine-free state updates
    ECS.tick(delta);

    // --- RENDERING TICK ---
    // Reads from ECS state, does not modify it
    CameraController.tick(delta);
    BuildingRenderer.tick(delta);
    PlayerRenderer.tick(delta);
    ParticleRenderer.tick(delta);
    FXRenderer.tick(delta);

    SceneManager.render();
  }

  animate();
  console.log("Engine fully initialized and running.");
}

bootstrap().catch(console.error);
