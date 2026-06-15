# ALINV-3D Engine

ALINV-3D is a highly-optimized 2.5D isometric city destruction game built using **TypeScript**, **Three.js**, and a custom decoupled **Entity Component System (ECS)** architecture. 

It features real-time procedural physics, modular asset pipelines, and screen-shake visual juice, migrated from a legacy 2D PixiJS renderer to a modern 2.5D WebGL environment.

---

## 🚀 Features

### 🎮 Gameplay & Physics
* **Laser Target Strikes:** Drag and click to target buildings with weapon strikes.
* **Bouncy Debris Physics:** Rubble and bricks bounce dynamically off the ground plane, slowing down due to friction and rolling before settling.
* **Building-Specific Palettes:** Debris particles match the local colors of the targeted building (e.g. brick-red, concrete-grey, school-tan).
* **Decoupled ECS Core:** Game loop, physics simulation, damage math, and controllers run in raw logical space, independent of Three.js rendering.

### 💥 Visual Juice & Animations
* **Vignette Screen Flash:** Fullscreen white flash overlay triggered on heavy weapon impacts.
* **Exponential Shake Decay:** Follow-camera shake decays smoothly using an exponential envelope rather than a binary timer.
* **Delayed Stage Transitions:** Buildings swap damage states precisely at the peak opacity of the explosion animation.
* **Ambient Persistent Fire:** Damaged buildings continuously emit small, fast, organic fire sparks and smoke plumes.

### ⚡ Optimization Systems
* **O(1) Particle Pool:** Replaced linear searches with index-stack free-lists for instant, garbage-collector-free particle spawning.
* **Sprite Pooling & Recycling:** Exploded billboard meshes are recycled from an active/inactive pool to prevent memory leaks and garbage collection spikes.
* **View Frustum Culling:** Spawning particles and sprite animations outside the camera's viewport is culled automatically.
* **Preloaded Texture Maps:** Sprite texture sheets are cached once on bootstrap.

---

## 🛠️ Tech Stack
* **Framework:** [Vite](https://vite.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Graphics:** [Three.js](https://threejs.org/) (WebGL)
* **Scripting:** [Python 3](https://www.python.org/) (with Pillow and SciPy for assets and map processing)

---

## 📂 Project Structure

```
├── src/
│   ├── assets/           # Texture loading and metadata configurations
│   ├── core/             # ECS manager, Components, and Physics engine
│   ├── input/            # Mouse raycasting and click controls
│   └── rendering/        # Three.js Scene, Camera, and Sprite/Billboard renderers
├── static/
│   ├── blast/            # Explosions frames
│   ├── fire/             # Centroid-sliced fire animation frames
│   ├── hospital/         # Building 1 animation frames
│   ├── school/           # Building 3 animation frames
│   └── scripts/          # Python pipeline scripts (background removal, partitioning, offsets)
├── index.html            # Entry markup
├── package.json          # Node dependencies
└── tsconfig.json         # TypeScript settings
```

---

## 📦 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Installation
Install the project dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Vite dev server:
```bash
npm run dev
```
Open your browser and navigate to the address shown in the terminal (usually `http://localhost:3000/`).

### 4. Build for Production
Generate the compiled production bundles in `dist/`:
```bash
npm run build
```

---

## ⚙️ Asset Processing Scripts

The `static/scripts/` folder contains Python utility scripts to automate asset processing. To run them, make sure you have `Pillow` and `scipy` installed:
```bash
pip install Pillow scipy numpy
```

### Centroid-Based Spritesheet Partitioning
To slice a linear spritesheet (like `fire2.png`) into uniform frames centered on their visual center of mass:
```bash
python3 static/scripts/partition_fire_perfect.py
```

### Background Removal & Offsets Generator
To remove background colors and calculate base pivot/ centroid offsets for new building animations:
```bash
python3 static/scripts/remove_bg_batch.py
```
This automatically updates `sprite_offsets.json` which the isometric sorting engine uses to align billboards.
