### MASTER PROJECT PLAN: INITIALIZE ALINV-3D REPOSITORY FROM SCRATCH

**Objective:**
Build a 2.5D retro city destruction sandbox game using Vite, TypeScript, and Three.js. This repository must strictly implement a decoupled architecture: an Engine-Free Core Simulation Layer handles game states and logic, while a separate Three.js Rendering Layer handles visuals and inputs using a GPU Z-buffer and Raycasting.

---

### STEP 1: SCAFFOLD ENVIRONMENT & CONFIGURATION
1. Generate a modern `package.json` file configuring a clean Vite + TypeScript build chain.
2. Include the following precise dependency configurations:
   - "three": "^0.172.0"
   - DevDependencies: "@types/three": "^0.172.0", "typescript", "vite"
3. Configure a strict `tsconfig.json` optimized for game modules.
4. Output a boilerplate `index.html` referencing an entry point script at `src/main.ts`.

---

### STEP 2: IMPLEMENT THE ENGINE-FREE CORE SIMULATION
Write the engine-free base layer files inside `src/core/` and `src/systems/`. These files must contain ZERO imports from 'three':

1. **src/core/ECS.ts:** Re-implement the lightweight ECS system kernel managing entity IDs, the live entity registry Set, and system tick registrations.
2. **src/core/Components.ts:** Define components as pure, engine-agnostic interfaces using explicit state trackers:
   - `PositionComponent`: { worldX, worldY, worldZ }
   - `HealthComponent`: { currentHP, maxHP, state: number }
   - `CollisionComponent`: { width, length, height, active: boolean }
   - `RenderState`: { meshId: string, texturePrefix: string, currentFrame: number, visible: boolean, opacity: number }
3. **src/core/DamageCalc.ts:** Implement the pure arithmetic frame-mapping functions: `damagePercent = 1 - (hp/maxHp)`, `frameIndex = Math.floor(damagePercent * maxFrame)`.

---

### STEP 3: CONSTRUCT THE THREE.JS RENDERING ARCHITECTURE
Create the primary rendering classes inside `src/rendering/` to interface with the core simulation data:

1. **SceneManager.ts:** Initialize a `THREE.WebGLRenderer` with shadow support, a `THREE.Scene`, and a steady `THREE.Clock` game loop. Configure an `OrthographicCamera` set to an exact 30-degree isometric tilt perspective.
2. **AnimatedSprite3D.ts:** Create a custom frame-swapping controller for 3D meshes using `THREE.Sprite` or a flat `THREE.PlaneGeometry`. It must accept an array of textures, track animation speeds, allow looping, and implement a vital `onFrameChange(currentFrame)` callback interface to mask graphics updates behind explosion frames.
3. **BuildingRenderer.ts:** Maintain a local lookup map (`Map<string, THREE.Sprite>`) linked to entities via their component `meshId`. Every tick, it must read the engine-free `RenderState` component and update the `.material.map` property of the corresponding 3D object on the fly if the `currentFrame` changes. Ensure the object geometry or anchor points are offset uniformly to the bottom-center.

---

### STEP 4: IMPLEMENT THE MASKED BLAST TIMELINE & RAYCAST INTERACTION
1. **src/input/Raycaster.ts:** Build a wrapper for `THREE.Raycaster`. It must translate screen click points into Normalized Device Coordinates (NDC) and project a ray down into the scene to identify building mesh collision objects directly.
2. **src/systems/DestructionSystem.ts:** Port the full visual orchestration logic:
   - When a weapon hit registers, immediately deduct health and compute the target `newFrameIndex`.
   - If a frame transition is required, spawn a `blast` or `blast360` instance of `AnimatedSprite3D` at the 3D impact intersection point.
   - Set the `onFrameChange` callback to listen for the specific peak explosion frame (e.g., frame 2 or 3).
   - Upon hitting that peak frame, update the `RenderState.currentFrame` to `newFrameIndex`, triggering the seamless building sprite swap hidden directly behind the explosion fireball.
   - Instantly trigger a camera shake and spawn a burst of loose debris chunks.

---

### STEP 5: ENTRY ENGINE ROOT
Write `src/main.ts` to bootstrap the game: instantiate the SceneManager, fire up the asset loading processes, map out placeholder test configurations for buildings, and wire up the main ticking execution loop. Start file layout generation now.