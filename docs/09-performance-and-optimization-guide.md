# WebGL Performance Engineering & Optimization

## 1. Frame Budget & Target Benchmarks

ALINV-3D is engineered to maintain a solid **60 FPS frame rate** on modern desktop and mobile browsers:

| Metric | Budget Ceiling | Achieved Average |
| :--- | :--- | :--- |
| **Frame Time Budget** | $16.6\text{ms}$ per frame | $\sim 4.2\text{ms} - 8.1\text{ms}$ |
| **Draw Call Budget** | $< 50$ draw calls | $18 - 28$ draw calls |
| **VRAM Texture Memory** | $< 250\text{MB}$ | $\sim 140\text{MB}$ |
| **Active Particles** | 2,000 simultaneous particles | 2,000 @ 60 FPS |
| **Garbage Collection Spikes** | 0 MB allocated / tick | 0 B allocations in tick |

---

## 2. Instanced Mesh Batching (`TileRenderer.ts`)

Instead of creating individual Three.js meshes for each of the $64 \times 64 = 4,096$ terrain grid cells:

```typescript
// TileRenderer.ts merges ground geometry into single batched InstancedMeshes
const instancedMesh = new THREE.InstancedMesh(sharedTileGeometry, terrainMaterial, count);
```

### Render Optimization Impact
- **Without Instancing**: 4,096 individual mesh draw calls.
- **With Instancing**: **1 single draw call** for the entire terrain layer.

---

## 3. Free-List O(1) Particle Allocation

As detailed in [05. Destruction Systems](file:///home/berkans/development/alienv2/docs/05-destruction-physics-and-vfx-pipeline.md), particle spawning avoids `Array.push()` or `Array.filter()` calls:

```typescript
// O(1) Free-List index stack popping
const freeIndex = this.freeStack.pop();
if (freeIndex !== undefined) {
  this.particles[freeIndex].active = true;
  // Initialize particle properties without object creation
}
```

---

## 4. View Frustum Culling & FX Optimization

Particle simulation, explosion FX checks, and laser renders verify camera viewport bounds via [`CameraController.isPointInView`](file:///home/berkans/development/alienv2/src/rendering/CameraController.ts#L92) before triggering calculations or GPU updates:

```typescript
// FXRenderer.ts frustum culling
if (event.type === 'laser') {
  const ufoInView = CameraController.isPointInView(event.x, event.z);
  const targetInView = CameraController.isPointInView(event.data.tx, event.data.tz);
  if (!ufoInView && !targetInView) return; // Skip off-screen beam rendering
} else if (!CameraController.isPointInView(event.x, event.y)) {
  return; // Skip off-screen blast rings, sparks, and point lights
}
```

---

## 5. Instanced Decal Pooling (`DecalManager.ts`)

Instead of dynamically creating Three.js textured quad meshes or redrawing ground canvas textures per impact:
- Pre-allocates two `THREE.InstancedMesh` pools of 50 instances each (`scorchMesh` and `craterMesh`) on Layer 2 (`Y = 0.02`).
- Collapses up to 100 simultaneous ground decals into **exactly 2 draw calls**.
- Uses an $O(1)$ ring buffer `(index + 1) % MAX_ACTIVE_DECALS` to mutate instance transform matrices in-place, achieving 0 runtime heap allocations.

---

## 6. Pre-Allocated Laser Beam Pool (`FXRenderer.ts`)

Rapid-fire weapon mechanics allocate zero runtime objects:
- `MAX_POOLED_LASERS = 8` pre-allocated line and impact ring meshes.
- In-place vertex buffer mutations (`laser.posAttr.needsUpdate = true`).
- Oldest-elapsed LRU recycling guarantees stable memory footprint under hyper-rapid fire.

---

## 7. Ground VRAM Disposal & Texture Lifecycle (`TileRenderer.ts`)

During procedural city regeneration or map reloads:
- `TileRenderer.dispose()` walks ground mesh children and explicitly calls `.geometry.dispose()`, `material.map.dispose()`, and `material.dispose()`.
- Eliminates multi-megabyte VRAM memory leaks from orphaned 4,096-tile vertex buffers and Canvas textures.

---

## 8. 3D Animation Mixer CPU Budget & Hybrid Landmark Pipeline

A critical performance bottleneck occurs when multiple animated 3D GLTF models are placed across a procedural city:
- **The Bottleneck**: Each 3D skyscraper model (`skyscraper_demolition.glb`) contains **590 animation clips** (separate fracture chunk keyframe tracks). Placing 135 models meant the browser was ticking over **70,000 keyframe tracks per frame**, collapsing CPU framerate from 60 FPS down to 15–20 FPS.
- **The Solution**: 
  1. Each 3D model is allocated to **exactly 1 unique landmark** on the map (`mega_titan`, `spaceship_hq`, `financial_tower`, `cyber_reactor`), reducing total active animation mixers from 135 down to **4** (~97% CPU overhead reduction).
  2. All standard high-rise towers (`5`, `sky_artdeco`, `sky_cyber`, `sky_biotech`) are rendered as lightweight 2D billboard sprites.
  3. The city achieves high visual density (880+ buildings) with buttery-smooth **60 FPS** gameplay.

---

## 9. Verification Checklist & Anti-Pattern Prohibition

When extending or modifying the codebase, enforce these rules:

1. **NO GPU Allocation inside Tick Loops**: Never instantiate `new THREE.Mesh()`, `new THREE.PlaneGeometry()`, or `new THREE.MeshStandardMaterial()` inside `tick(delta)` methods.
2. **NO Linear Array Searches in High-Frequency Loops**: Use `Set` or `Map` index lookup keys.
3. **Texture Atlas Preloading**: Textures must be loaded once via `AssetLoader` during startup.

---
*Back to [Documentation Sitemap](file:///home/berkans/development/alienv2/docs/README.md)*
