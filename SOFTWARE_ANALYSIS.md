# Software Analysis & Architecture Report: ALINV-3D Engine

> **Last analyzed:** All 27 TypeScript source files across `src/core`, `src/rendering`, `src/systems`, and `src/input`.

---

## Executive Overview

**ALINV-3D** (`alinv-3d`) is a 2.5D isometric city destruction game engine written in **TypeScript 5.6**, rendered via **Three.js 0.172 (WebGL)**, bundled with **Vite 5.4**, and deployed as a pure browser application with zero backend dependencies.

The engine simulates interactive urban destruction: a player-controlled UFO fires weapons at procedurally-generated city blocks, triggering multi-stage structural collapse, per-zone damage, physical debris flight, cascading fire/smoke effects, and ground decals — all at a target 60 FPS.

The dominant architectural principle is **strict decoupling of game logic from the rendering engine**. The ECS/logic layer is pure TypeScript with no Three.js imports. The Three.js layer reads ECS state each frame but never writes to it. This boundary is enforced consistently across every file in the codebase.

---

## 🏗️ Architecture Diagram

```
Browser DOM
  │
  └── index.html ──► main.ts (bootstrap())
                          │
          ┌───────────────┼──────────────────┐
          │               │                  │
    ┌─────▼──────┐  ┌─────▼──────┐  ┌───────▼──────┐
    │ INPUT LAYER│  │ CORE (ECS) │  │ RENDERING    │
    │            │  │ Pure Logic │  │ (Three.js)   │
    │InputManager│  │            │  │              │
    │Raycaster   │  │ECS         │  │SceneManager  │
    └────────────┘  │Components  │  │BuildingRend. │
                    │SpatialGrid │  │FXRenderer    │
                    │PhysicsModel│  │ParticleRend. │
                    │DamageCalc  │  │TileSystem/   │
                    │DamageState │  │ TileMap      │
                    │ZoneDefs    │  │ TileRenderer │
                    │BuildingDefs│  │ LotManager   │
                    └─────┬──────┘  │ DecalManager │
                          │         │UIOverlay     │
                    ┌─────▼──────┐  │CameraCtrl.   │
                    │  SYSTEMS   │  └──────────────┘
                    │            │
                    │PlayerCtrl  │
                    │Destruction │
                    │ParticleSim │
                    │ShowcaseMgr │
                    │CityGenerat.│
                    └────────────┘
```

---

## 📁 Complete Source File Inventory

| File | Lines | LOC Purpose |
|:-----|------:|:------------|
| `src/main.ts` | 93 | Bootstrap, game loop |
| **core/** | | |
| `ECS.ts` | 29 | Entity registry & system runner |
| `Components.ts` | 69 | All component interfaces & global Map stores |
| `SpatialGrid.ts` | 149 | Bitwise spatial hash for O(1) proximity queries |
| `PhysicsModel.ts` | 145 | Pre-allocated particle & debris pool with floor bounce |
| `DamageCalc.ts` | 41 | Frame index mapping for flat & zonal health |
| `DamageStateTree.ts` | 48 | Zone-level thresholds & global collapse scoring |
| `ZoneDefs.ts` | 59 | 3×3 UV zone grid with structural weights |
| `BuildingDefs.ts` | 49 | All building type definitions with visual/height scales |
| **systems/** | | |
| `CityGenerator.ts` | 207 | Procedural city block placement |
| `DestructionSystem.ts` | 176 | Damage application, FX event queue |
| `PlayerControlSystem.ts` | 175 | WASD, mouse click, weapon fire, hover inspection |
| `ParticleSimSystem.ts` | 70 | Facade that calls PhysicsModel tick + spawn helpers |
| `ShowcaseManager.ts` | 217 | Dev mode: spawn all building types in grid layout |
| **rendering/** | | |
| `SceneManager.ts` | 176 | Three.js scene, camera, lighting, post-processing |
| `BuildingRenderer.ts` | 491 | Billboard sprites, flinch, collapse physics |
| `FXRenderer.ts` | 386 | Explosion sprites, fire, laser, shockwave, impact flash |
| `CameraController.ts` | 127 | Exponential follow + screen shake |
| `ParticleRenderer.ts` | ~150 | Renders PhysicsModel particles & debris as Three.js points |
| `UIOverlay.ts` | 335 | DOM HUD, target inspector, showcase tools |
| `HitZoneManager.ts` | 81 | Invisible hit-mesh raycasting for zone detection |
| `GroundRenderer.ts` | ~30 | Delegates to TileSystem |
| `AnimatedSprite3D.ts` | ~120 | Frame-timed billboard helper used by FXRenderer |
| **TileSystem/** | | |
| `TileMap.ts` | 152 | Terrain cell grid, road detection, lot registration |
| `TileRenderer.ts` | 288 | Instanced mesh rendering with procedural canvas textures |
| `LotManager.ts` | 77 | World-space ↔ grid-space coordinate math |
| `DecalManager.ts` | 163 | Ground scorch/crater layer via canvas-generated textures |
| **input/** | | |
| `InputManager.ts` | 50 | Keyboard + pointer event state |
| `Raycaster.ts` | ~40 | Convenience wrapper around Three.js Raycaster |

---

## 🧩 Subsystem Deep Dives

### 1. ECS — Entity Component System

**Files:** [ECS.ts](file:///home/berkans/development/alienv2/src/core/ECS.ts), [Components.ts](file:///home/berkans/development/alienv2/src/core/Components.ts)

Entities are plain integers (`type Entity = number`). Components are pure data stored in static global `Map<Entity, Component>` stores. There is no class hierarchy or polymorphism in component data.

```typescript
// ECS is a minimal registry: entity IDs + system function array
export class ECS {
  public static entities: Set<Entity>
  public static systems: ((delta: number) => void)[]
  // createEntity(), destroyEntity(), addSystem(), tick()
}

// All component storage is flat global Maps — O(1) get/set/delete by entity ID
export const PositionComponent    = new Map<Entity, Position>();
export const HealthComponent      = new Map<Entity, Health>();
export const ZonalHealthComponent = new Map<Entity, ZonalHealth>();
export const CollisionComponent   = new Map<Entity, Collision>();
export const RenderStateComponent = new Map<Entity, RenderState>();
export const WeaponComponent      = new Map<Entity, Weapon>();
export const PlayerTagComponent   = new Set<Entity>(); // tag = no data
```

**`RenderStateComponent` is the crucial bridge**: it contains `texturePrefix` (string key into the asset loader) and `currentFrame` (which damage animation frame to show). The rendering layer reads this; the logic layer writes to it.

---

### 2. Non-Linear Zonal Damage System

**Files:** [ZoneDefs.ts](file:///home/berkans/development/alienv2/src/core/ZoneDefs.ts), [DamageStateTree.ts](file:///home/berkans/development/alienv2/src/core/DamageStateTree.ts), [DamageCalc.ts](file:///home/berkans/development/alienv2/src/core/DamageCalc.ts)

Every building is divided into a **3×3 UV grid of 9 named zones**, each with an `hpWeight` (damage multiplier) and `structureWeight` (contribution to global collapse score):

```
┌──────────┬──────────┬──────────┐
│ TOP_LEFT │TOP_CENTER│ TOP_RIGHT│  structureWeight: 0.05 / 0.15 / 0.05
├──────────┼──────────┼──────────┤
│ MID_LEFT │  CENTER  │ MID_RIGHT│  structureWeight: 0.10 / 0.30 / 0.10
├──────────┼──────────┼──────────┤
│BASE_LEFT │BASE_CENTER│BASE_RIGHT│  structureWeight: 0.05 / 0.15 / 0.05
└──────────┴──────────┴──────────┘
```

The **CENTER** zone has `hpWeight: 2.0` (double damage) and `structureWeight: 0.30` (controls 30% of collapse). **BASE_CENTER** has `hpWeight: 2.5` — targeting the base of a skyscraper causes the most structural damage. This creates emergent gameplay: precision shots at the base or center cause faster collapse.

Each zone independently transitions through 5 `DamageLevel` states (`PRISTINE → LIGHT → MODERATE → HEAVY → RUBBLE`). `DamageStateTree.computeGlobalLevel()` aggregates these into a building-level collapse score using weighted sums.

`DamageCalc.computeFrameForZonalState()` maps the complex multi-zone state to a single 1D animation frame index using a three-band linear allocation:
- **55% of frames** driven by global HP ratio
- **28% of frames** driven by CENTER zone damage
- **17% of frames** driven by TOP_CENTER zone damage

---

### 3. FX Event Queue Pattern (Observer/Message Bus)

**Files:** [DestructionSystem.ts](file:///home/berkans/development/alienv2/src/systems/DestructionSystem.ts), [FXRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/FXRenderer.ts)

`DestructionSystem.fxQueue` is a **statically allocated event queue array** that decouples damage logic from rendering effects. When `applyZonalDamage()` processes a hit, it pushes typed `FXEvent` objects into this queue rather than calling rendering functions directly:

```typescript
export type FXEvent =
  | { type: 'blast' | 'blast360'; ... }
  | { type: 'blast_zonal'; ... data: { zone, level, uvCenter } }
  | { type: 'shake'; data: { intensity } }
  | { type: 'hit_fx'; data: { entityId, intensity: 'light'|'heavy' } }
  | { type: 'debris' | 'dust' | 'smoke' | 'sparks'; data: { count, palette? } }
  | { type: 'fire'; ... }
  | { type: 'laser'; data: { tx, ty, tz } }
```

`FXRenderer` drains this queue each render tick. This is the **only point of communication** between the pure-logic and rendering layers for visual effects. It also enables **delayed texture swap**: the explosion animation plays to its peak frame, _then_ `FXRenderer` calls `DestructionSystem.executeTextureSwap()` to advance the building's damage texture — creating the illusion of the building being destroyed by the explosion.

---

### 4. Physics Model — Pre-allocated Pool Architecture

**File:** [PhysicsModel.ts](file:///home/berkans/development/alienv2/src/core/PhysicsModel.ts)

Two separate pre-allocated fixed-size arrays manage all particles and debris:

| Pool | Default Size | Purpose |
|:-----|------------:|:--------|
| `particles[]` | 500 | sparks, dust, smoke — velocity + lifetime only |
| `debris[]` | 300 | brick chunks — gravity, bounce (up to 5), rotation |

Both use an **index stack free-list** (`freeParticleIndices`, `freeDebrisIndices`). Spawning pops an index from the stack and resets the slot in-place. Retirement pushes the index back. **Zero heap allocations occur in the hot path**. The `gravity` value per debris chunk is `35.0` world-units/s², bounce energy coefficient is `0.35` (restitution), and friction applies at `0.7×` per bounce.

Smoke particles have special behavior: they receive **upward acceleration** (`+1.5 * delta`) and horizontal drag (`0.5 * delta` damping per axis), producing organic rising plume shapes.

---

### 5. Spatial Grid — Bitwise Hash Map

**File:** [SpatialGrid.ts](file:///home/berkans/development/alienv2/src/core/SpatialGrid.ts)

Uses a 64-unit cell size (`invCellSize = 1/64`). Each cell is addressed by a packed integer key:

```typescript
key = ((gx + 2048) << 16) | ((gz + 2048) & 0xffff)
```

This encodes a 2D integer coordinate into a single number, using a 2048-unit offset to handle negative world coordinates. The grid is rebuilt each time entities change (city switch, showcase mode), not every frame. `findClosest()` implements a ring-expansion spiral to find the nearest building entity to a query point.

---

### 6. Rendering Pipeline & Post-Processing

**File:** [SceneManager.ts](file:///home/berkans/development/alienv2/src/rendering/SceneManager.ts)

The render pipeline uses **Three.js EffectComposer** with three passes:

```
WebGLRenderer
  └── EffectComposer
        ├── RenderPass         (standard scene render)
        ├── UnrealBloomPass    (strength: 1.2, radius: 0.8, threshold: 0.85)
        └── OutputPass         (gamma correction / tone mapping)
```

**Bloom** causes glowing weapon fire, laser beams, and explosion halos to bleed luminance into surrounding pixels, giving the game a cinematic night-city look.

The camera is a **Three.js `OrthographicCamera`** positioned at `(200, 200, 200)` with `lookAt(0, 0, 0)`, producing a classic isometric ~45° view. Frustum size (`DEFAULT_FRUSTUM_SIZE = 560`) is zoomed smoothly via mouse wheel using exponential interpolation (`Math.exp`). The camera is bounded to a `1024×1024` world map clamp.

**Lighting** consists of:
- `AmbientLight(0x1a1a24, 1.2)` — deep blue-gray fill (night atmosphere)
- `DirectionalLight(0xfff5e6, 2.5)` — warm sun from `(400, 600, 200)` with 2048×2048 PCF soft shadow maps

**Fog:** `FogExp2(0x1a1a24, 0.0002)` — exponential atmospheric haze that fades distant buildings.

**Render Groups** control Z-order:

| Group | Render Order | Contents |
|:------|------------:|:---------|
| `groundGroup` | 0 | TileRenderer + DecalManager |
| `cityGroup` | 1 | Building billboard sprites |
| `playerGroup` | 2 | UFO mesh |
| `effectsGroup` | 3 | Explosion sprites, shockwaves |

---

### 7. BuildingRenderer — Billboard Isometric Alignment

**File:** [BuildingRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/BuildingRenderer.ts)

Buildings are rendered as flat `PlaneGeometry(1, 1)` quads ("billboard sprites") with their textures from a preloaded sprite sheet. The critical alignment mathematics:

| Constant | Value | Purpose |
|:---------|------:|:--------|
| `GLOBAL_PPM` | 25.0 | Pixels-per-meter: standardizes world-space scale |
| `ISOMETRIC_ROTATION_Y` | π/4 | Rotates billboard 45° to face the isometric camera |
| `ISOMETRIC_Y_COMPENSATION` | √1.5 ≈ 1.2247 | Corrects vertical foreshortening under 35.264° orthographic pitch |
| `BUILDING_BASE_LIFT` | 0.2 | Raises sprite base above ground to avoid GPU depth clipping |

**Visual Juice Pipeline (per hit, 150ms):**
- `HEAVY` hit: 5% X squash + 8% Y compression + `0xffffff` emissive flash for 150ms + shudder at amplitude 0.45
- `LIGHT` hit: 2.5% X, 4% Y, `0xffeedd` flash for 80ms
- Spring bounce: frequency `2π × 3 Hz` on scale recovery
- Shudder decays at rate `8×` per second

**Collapse Physics** (triggered on mega-buildings at DamageLevel ≥ 3 or BASE zone destruction):
- Building tilts toward `fallDir = (0.707, 0, 0.707)` at `COLLAPSE_TILT_SPEED = 1.5` rad/s
- Sinks into ground at `COLLAPSE_SINK_SPEED = 2.0` m/s
- Target tilt angle: `π/2.5 = 72°`
- At `RUBBLE_STAGE_FRAME = 14`, triggers crush damage to nearby entities via `SpatialGrid.findClosest()`

---

### 8. FXRenderer — Animated Sprite Pool & Special FX

**File:** [FXRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/FXRenderer.ts)

Manages three texture arrays:

| Asset | Frame Count | Frame Timing |
|:------|------------:|:-------------|
| Blast explosion | 11 frames | 20ms×3 → 40ms → 80ms×7 |
| Blast360 (smaller) | 7 frames | 20ms×3 → 40ms → 80ms×3 |
| Fire | 10 frames | 10ms×2 → 20ms×8 |

**Sprite Pool:** 50 pre-allocated `AnimatedSprite3D` instances cycle between `activeSprites` and `inactiveSprites` arrays. Acquiring a sprite from the inactive pool is O(1); no garbage collection.

**Sub-explosions:** Each major blast spawns 2 additional smaller `blast360` sprites at ±3 world-unit XZ jitter, staggered 50–200ms apart for organic shrapnel feel.

**Impact Flash:** A `THREE.PointLight` (temporary, pooled) is placed at the hit position and removed after 1 frame, creating a brief illumination burst on surrounding geometry.

**Shockwave Ring:** A `THREE.Mesh` with a flat `RingGeometry` expands from radius 0 to `maxRadius` over `0.4s` while fading opacity from `0.7 → 0`. Uses `MeshBasicMaterial` for performance (no lighting calculation).

**Laser Beam:** A `THREE.Line` with `LineBasicMaterial(0x00ffff)` is drawn from UFO position to target, then removed after `80ms`.

---

### 9. TileSystem — Ground Layer

**Files:** [TileMap.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileMap.ts), [TileRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileRenderer.ts)

**TileMap** is the logical grid: a 64×64 grid of `TileCell` objects (64 cells × 16 units = 1024 world units). Each cell stores:
- `terrainType` (ROAD variants, SIDEWALK, BUILDING_BASE, PLAZA, WATER, GRASS)
- `overlayType` (ROAD, NONE)
- `occupiedByBuildingId` — entity ID or undefined

**TileRenderer** converts the logical tile map into **instanced meshes** (`THREE.InstancedMesh`): one `InstancedMesh` per terrain type, each capped at `MAX_INSTANCES_PER_TYPE = 8000`. This batches all road tiles of the same type into a **single draw call**, which is critical for GPU performance given 64×64 = 4096 possible tiles.

All ground textures are **procedurally generated via Canvas 2D API** at init time — road markings, curb lines, lane dividers, sidewalk textures — eliminating external texture file dependencies for the ground layer.

**DecalManager** sits on **Layer 2** (Y offset: `+0.02`) above ground. Scorch marks and craters are drawn using `THREE.CanvasTexture` with radial gradients and random blast-ray lines. A maximum of `50 active decals` is enforced with FIFO eviction.

---

### 10. HitZoneManager — Invisible Raycasting Mesh Overlay

**File:** [HitZoneManager.ts](file:///home/berkans/development/alienv2/src/rendering/HitZoneManager.ts)

For each building's 9 damage zones, `HitZoneManager` creates an **invisible `PlaneGeometry` mesh** (opacity 0, `visible: false`) sized and positioned to match the zone's UV region on the sprite:

```typescript
// UV-to-local-space transform
mesh.position.x = uCenter - 0.5;        // UV [0,1] → local [-0.5, +0.5]
mesh.position.y = 0.5 - vCenter;        // V is flipped (Three.js Y up, UV V down)
mesh.position.z = 0.01;                 // z-fighting offset
```

These hit meshes are children of the building's sprite mesh, so they automatically follow it through scale/position transforms. `raycaster.intersectObjects(allZoneMeshes)` determines which zone was clicked, returning both the zone enum and the UV center for visual effect placement.

**Hover throttle:** `PlayerControlSystem` re-runs the raycast at max `30 Hz` (`HOVER_CHECK_INTERVAL = 0.033s`), caching the result between checks to avoid a full raycast call every single frame.

---

### 11. ShowcaseManager — Developer Testing Mode

**File:** [ShowcaseManager.ts](file:///home/berkans/development/alienv2/src/systems/ShowcaseManager.ts)

A full second world state that replaces the city with all 18 building types arranged in a `7 × 3` grid (`spacingX: 90, spacingY: 110` world units). Toggling showcase mode:

1. Destroys all non-player entities and clears all component stores
2. Clears `BuildingRenderer`, `HitZoneManager`, `TileMap`, `SpatialGrid`
3. Spawns buildings with fresh `ZonalHealthComponent` states
4. Rebuilds the `SpatialGrid`
5. Repositions the player UFO to `(0, -120)` (south of first row)

Provides `resetAllHP()` and `damageAll(percent)` for mass testing. This mode is accessible in-game via the HUD toggle button and is the primary tool for visual QA of building damage animations.

---

### 12. PlayerControlSystem — Input to Action Pipeline

**File:** [PlayerControlSystem.ts](file:///home/berkans/development/alienv2/src/systems/PlayerControlSystem.ts)

Movement uses **asynchronous exponential lerp** (`1 - exp(-8 × delta)`) rather than direct position assignment — the UFO smoothly "floats" toward the target position. Both WASD and mouse click set `targetPos`, and the UFO follows at a buoyant speed.

Firing chain:
1. `InputManager.isPointerDown()` or `Space` key
2. `HitZoneManager.getHitZone(camera)` → specific zone under cursor
3. Falls back to `SpatialGrid.findClosest()` for ground-plane proximity
4. `DestructionSystem.applyZonalDamage(entity, zone, 15, uvCenter)`
5. Weapon `heatLevel = fireRate` (0.2s cooldown before next shot)

**Target Inspector:** While hovering, `UIOverlay.updateTargetInspector()` is called with the building name, type key, HP, and current animation frame — populating a real-time building info card.

---

## ⚡ Complete Execution Pipeline

```
requestAnimationFrame → animate(delta)
│
├── [LOGIC TICK] ECS.tick(delta)  ← pure TypeScript, no Three.js
│   ├── PlayerControlSystem.tick(delta)
│   │   ├── WASD → targetPos
│   │   ├── exponential lerp → worldX/Y
│   │   ├── hover raycast (throttled 30Hz) → cachedHoveredHit
│   │   └── fire → DestructionSystem.applyZonalDamage()
│   │         └── pushes FXEvents to DestructionSystem.fxQueue[]
│   ├── DestructionSystem.tick(delta)   ← ambient fire/smoke every 0.5s
│   │   └── probabilistic fire FX based on damage ratio (>30% damage)
│   └── ParticleSimSystem.tick(delta)
│       └── physicsModel.tick(delta)   ← gravity, bounce, lifetime
│
├── [RENDER TICK] reads ECS state (no mutations)
│   ├── CameraController.tick(delta)
│   │   ├── exponential lerp follow player
│   │   ├── frustum zoom interpolation
│   │   └── exponential-decay screen shake
│   ├── BuildingRenderer.tick(delta)
│   │   ├── drain fxQueue for hit_fx events → apply squash/flash
│   │   ├── update collapse physics (tilt + sink)
│   │   └── update sprite frame from RenderStateComponent
│   ├── FXRenderer.tick(delta)
│   │   ├── drain fxQueue: blast, fire, laser, shake, debris events
│   │   ├── advance AnimatedSprite3D frame timers
│   │   ├── at peak frame → DestructionSystem.executeTextureSwap()
│   │   └── spawn/advance impact lights, shockwave rings
│   ├── ParticleRenderer.tick(delta)    ← sync Three.js point positions to physicsModel
│   └── UIOverlay.tick(camera)          ← project world labels to screen space
│
└── SceneManager.render()              ← EffectComposer (Bloom + Output)
```

---

## 🔍 Technical Details & Known Design Notes

### Assets
- **Building sprites** are external image sequences (PNG frames) loaded by `AssetLoader`. File naming convention: `building_<typeKey>_stage_<N>.png`. Frame counts vary per building: Hospital = 14, School = 71, Warehouse = 13, Skyscraper = 14.
- **Fire/Explosion assets** are preloaded into `THREE.Texture[]` arrays at init, not per-event.
- **Sprite offsets** (pivot/centroid for isometric alignment) are read from a `sprite_offsets.json` file generated by Python asset pipeline scripts.

### Known Design Constraints
- `ZoneDefs` currently assigns the same `createStandard3x3Grid()` to **all building types**. There is no per-building customization of zone structural weights.
- `DestructionSystem.applyDamage()` (flat health path) and `applyZonalDamage()` (zonal path) are both present. The zonal path is the primary path for player firing (`PlayerControlSystem` always calls zonal). The flat path appears to be a legacy method.
- Frame counts are **hardcoded string matches** in `DestructionSystem` (`texturePrefix.includes('building_1_')`) rather than being stored in `BuildingDefs`. This is a potential source of bugs when adding new building types.
- The `DecalManager` allocates a new `THREE.PlaneGeometry` + `THREE.MeshStandardMaterial` per decal spawn (up to 50 max). This is fine with the 50-decal cap, but the material is not pooled.
- `ShowcaseManager.damageAll()` routes through `DestructionSystem.applyZonalDamage()` for each zone of each building, which correctly triggers the full FX event chain including screen shake per hit.

---

## 📂 Directory Map

```
alienv2/
├── src/
│   ├── main.ts                          # Bootstrap & game loop
│   ├── assets/
│   │   └── AssetLoader.ts               # PNG preloader, sprite_offsets.json reader
│   ├── core/                            # Pure logic — NO Three.js imports
│   │   ├── ECS.ts                       # Entity registry + system runner
│   │   ├── Components.ts                # All component stores (Map<Entity, Data>)
│   │   ├── SpatialGrid.ts               # Bitwise spatial hash for proximity queries
│   │   ├── PhysicsModel.ts              # Pre-allocated particle & debris pool
│   │   ├── DamageCalc.ts                # Frame index math (flat + zonal)
│   │   ├── DamageStateTree.ts           # Zone HP → DamageLevel enum transitions
│   │   ├── ZoneDefs.ts                  # 3×3 UV zone grid + structural weights
│   │   └── BuildingDefs.ts              # Building type catalog (scale, tier, footprint)
│   ├── systems/                         # ECS-registered logic systems
│   │   ├── CityGenerator.ts             # Lot reservation, landmark placement
│   │   ├── DestructionSystem.ts         # Damage processing + FXEvent queue
│   │   ├── PlayerControlSystem.ts       # Input → movement → fire pipeline
│   │   ├── ParticleSimSystem.ts         # Particle spawn helpers + physicsModel relay
│   │   └── ShowcaseManager.ts           # Dev mode: all-buildings test grid
│   ├── rendering/                       # Three.js layer — reads ECS, does not write
│   │   ├── SceneManager.ts              # Scene, camera, lighting, EffectComposer
│   │   ├── BuildingRenderer.ts          # Billboard sprites + flinch + collapse
│   │   ├── FXRenderer.ts                # Explosion/fire/laser/shockwave animations
│   │   ├── CameraController.ts          # Exponential follow + screen shake
│   │   ├── ParticleRenderer.ts          # PhysicsModel → Three.js point sync
│   │   ├── UIOverlay.ts                 # DOM HUD with ARIA accessibility
│   │   ├── HitZoneManager.ts            # Invisible mesh raycasting for damage zones
│   │   ├── AnimatedSprite3D.ts          # Frame-timer billboard helper
│   │   ├── GroundRenderer.ts            # Delegates to TileSystem
│   │   └── TileSystem/
│   │       ├── TileMap.ts               # 64×64 logical cell grid
│   │       ├── TileRenderer.ts          # InstancedMesh + procedural canvas textures
│   │       ├── LotManager.ts            # World ↔ grid coordinate math
│   │       └── DecalManager.ts          # Ground scorch/crater layer (canvas textures)
│   └── input/
│       ├── InputManager.ts              # Keyboard + pointer events
│       └── Raycaster.ts                 # Mouse NDC → 3D ray wrapper
├── static/                              # Pre-built sprite assets
│   ├── blast/, fire/, hospital/, school/  # PNG animation frame sequences
│   └── scripts/                         # Python asset pipeline (remove_bg, partition)
├── index.html                           # Single-page entry point
├── package.json                         # Three.js + Vite + TypeScript
├── tsconfig.json                        # Strict TypeScript config
└── vite.config.ts                       # Vite build config
```

---

## 💡 Summary: Architectural Strengths

| Strength | Implementation |
|:---------|:---------------|
| **Zero-GC main loop** | Pre-allocated particle/debris pools, static raycaster instances, no `new` in hot paths |
| **Strict ECS isolation** | Core layer has zero Three.js imports; rendering layer never writes ECS state |
| **FX message bus** | `DestructionSystem.fxQueue` fully decouples damage logic from visual effects |
| **Delayed texture swap** | Explosion peak-frame synchronization makes destruction feel physically grounded |
| **Procedural ground art** | Canvas 2D road textures eliminate external asset dependencies for terrain |
| **Instanced ground rendering** | Single draw call per terrain type via `THREE.InstancedMesh` |
| **Exponential motion math** | `1 - exp(-k × delta)` for camera follow, UFO movement, zoom, and shake decay — all framerate-independent |
| **Accessibility UI** | ARIA labels, keyboard focus rings, `aria-pressed` on toggle buttons |
