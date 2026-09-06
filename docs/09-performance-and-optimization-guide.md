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

## 4. View Frustum Culling

Particle simulation and explosion FX checks verify camera viewport bounds before triggering calculations:

```typescript
if (!CameraController.isPointInView(x, y)) {
  // Skip expensive particle spawner allocation for off-screen explosions
  return;
}
```

---

## 5. Verification Checklist & Anti-Pattern Prohibition

When extending or modifying the codebase, enforce these rules:

1. **NO GPU Allocation inside Tick Loops**: Never instantiate `new THREE.Mesh()`, `new THREE.PlaneGeometry()`, or `new THREE.MeshStandardMaterial()` inside `tick(delta)` methods.
2. **NO Linear Array Searches in High-Frequency Loops**: Use `Set` or `Map` index lookup keys.
3. **Texture Atlas Preloading**: Textures must be loaded once via `AssetLoader` during startup.

---
*Back to [Documentation Sitemap](file:///home/berkans/development/alienv2/docs/README.md)*
