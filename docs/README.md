# ALINV-3D: Game & Systems Documentation Suite

Welcome to the central documentation portal for **ALINV-3D**, a high-performance 2.5D isometric city destruction game built with **TypeScript**, **Three.js**, and a custom decoupled **Entity-Component-System (ECS)** architecture.

This documentation suite serves as both a comprehensive **Game Design Document (GDD)** and a **Deep Technical & Artistic Engineering Specification**.

---

## 🗺️ Documentation Directory Sitemap

| Document | Topic & Focus | Core Systems Covered |
| :--- | :--- | :--- |
| 🎮 [**01. Game Design Document**](file:///home/berkans/development/alienv2/docs/01-game-design-document.md) | Game Design & Concept | Core loop, UFO controls, laser targeting, destruction feedback, Target Inspector HUD |
| ⚡ [**02. ECS Architecture & Systems**](file:///home/berkans/development/alienv2/docs/02-ecs-architecture-and-systems.md) | Engine Core & ECS | Decoupled ECS, component stores, tick execution order, spatial grid queries |
| 📐 [**03. Isometric Rendering & Math**](file:///home/berkans/development/alienv2/docs/03-isometric-rendering-and-geometry.md) | 2.5D Geometry & Camera | Camera pitch/yaw math, vertical billboard planes, foreshortening, texel density ($GLOBAL\_PPM$) |
| 🏙️ [**04. City Worldgen & Tile Map**](file:///home/berkans/development/alienv2/docs/04-city-generation-and-world-building.md) | World Generation & Terrain | Multi-pass procedural layout, district density, landmark zoning, multi-layer tile maps |
| 💥 [**05. Destruction & VFX Pipeline**](file:///home/berkans/development/alienv2/docs/05-destruction-physics-and-vfx-pipeline.md) | Destruction Systems & Juice | Multi-stage zonal damage, micro-flinch transforms, O(1) particle pooling, cluster blasts |
| 📦 [**06. Asset Pipeline & Metadata**](file:///home/berkans/development/alienv2/docs/06-asset-metadata-and-memory-pipeline.md) | Asset Pipeline & VRAM | `AssetLoader`, `sprite_offsets.json` schema, Python centroid partitioner, VRAM safety |
| 🎨 [**07. Art Direction & Audio Engine**](file:///home/berkans/development/alienv2/docs/07-artistic-direction-and-audio-synthesis.md) | Aesthetics & Sound | Retro-futuristic look, lighting/bloom, 100% procedural WebAudio SFX engine |
| 🎯 [**08. Input, Targeting & UI**](file:///home/berkans/development/alienv2/docs/08-input-targeting-and-ui.md) | Input & HUD Controls | Raycast hit detection, 3D hit zone collision volumes, HUD overlays, accessibility |
| 🚀 [**09. WebGL Performance Guide**](file:///home/berkans/development/alienv2/docs/09-performance-and-optimization-guide.md) | Optimization & Benchmarks | Draw call budgets, InstancedMesh batching, zero-GC frame loops, frustum culling |

---

## 🏗️ High-Level System Architecture Overview

```mermaid
graph TD
    subgraph Browser DOM & Input
        InputManager["InputManager.ts (DOM Listeners)"]
        UIOverlay["UIOverlay.ts (Target Inspector & HUD)"]
    end

    subgraph Core Game Engine (Pure Logic - Engine Agnostic)
        ECS["ECS.ts (System Execution & State)"]
        Components["Components.ts (Data Stores)"]
        SpatialGrid["SpatialGrid.ts (O(1) Spatial Hash Query)"]
        DamageCalc["DamageCalc.ts & ZoneDefs.ts"]
    end

    subgraph Game Logic Systems
        PlayerSystem["PlayerControlSystem.ts"]
        CityGen["CityGenerator.ts"]
        DestructionSys["DestructionSystem.ts"]
        AudioSys["AudioSystem.ts (Procedural WebAudio)"]
    end

    subgraph Three.js WebGL Rendering Engine
        SceneManager["SceneManager.ts (Camera, Lights, Bloom)"]
        BuildingRenderer["BuildingRenderer.ts (Billboard & 3D Mesh)"]
        ParticleRenderer["ParticleRenderer.ts (Free-list Bouncy Rubble)"]
        FXRenderer["FXRenderer.ts (Laser Beams, Explosions)"]
        GroundRenderer["GroundRenderer.ts (TileMap Mesh & Decals)"]
    end

    InputManager --> Raycaster["Raycaster.ts"]
    Raycaster --> PlayerSystem
    PlayerSystem --> WeaponState["WeaponComponent / PositionComponent"]
    WeaponState --> ECS
    ECS --> SystemTick["ECS.tick(delta)"]
    SystemTick --> DestructionSys
    DestructionSys --> FXQueue["DestructionSystem.fxQueue"]
    FXQueue --> AudioSys
    FXQueue --> FXRenderer
    ECS --> BuildingRenderer
    ECS --> ParticleRenderer
    SceneManager --> RenderOutput["WebGL Frame Pipeline"]
```

---

## 💡 Key Architectural Principles

1. **Strict Decoupling of Engine & Renderer**: All gameplay state (positions, HP, zonal damage, velocity, collision) lives strictly inside raw ECM data structures (`Map<Entity, Component>`). Three.js is treated strictly as an output view layer.
2. **Mathematical Rigor in 2.5D Isometric Space**: Camera pitch ($\approx 35.264^\circ$) and yaw ($45^\circ$) are mathematically paired with vertical billboard plane rotations (`ISOMETRIC_ROTATION_Y = Math.PI / 4`) and Y-foreshortening compensation ($\sqrt{1.5} \approx 1.2247$) to prevent perspective tearing.
3. **The Dual Depth Buffer Breakthrough**: Ground tiles render with `depthWrite: false`, preventing diagonal ground slicing of vertical 2D billboards, while 2D sprites render with `depthTest: true` against 3D landmark meshes (`depthWrite: true`), ensuring 3D towers naturally occlude 2D buildings behind them without visual popping.
4. **Hybrid 3D Landmarks & Zero-GC Infill**: 4 unique 3D GLTF landmarks are capped at 1 instance per model to fit within the 60 FPS animation mixer budget (avoiding 70,000+ keyframe evaluations/frame), while 880+ buildings across 23 types provide dense, vibrant urban infill with $O(1)$ pooled decals and lasers.
5. **Procedural Sound Synthesis**: 100% of sound effects (lasers, explosions, cluster sub-bass booms, collapse rumbles) are generated procedurally via the WebAudio API without external WAV/MP3 downloads.

---

## 🛠️ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start Vite dev server
npm run dev

# 3. Build production bundle
npm run build
```

---
*ALINV-3D Engine Documentation — Created for Developer & Game Design Teams.*
