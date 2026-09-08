# 2.5D Isometric Rendering & Camera Math

## 1. Camera Projection & Angle Mathematics

ALINV-3D uses a true **2.5D Isometric Projection** built on an `OrthographicCamera` ([`SceneManager.ts`](file:///home/berkans/development/alienv2/src/rendering/SceneManager.ts)):

```
                          Y (Up / Altitude)
                          ▲
                          │
                          │     / Camera (Position: 200, 200, 200)
                          │    /  Pitch Angle: ~35.264°
                          │   /   Yaw Angle: 45°
                          │  /
                          │ /
  ────────────────────────┼────────────────────────► X (World East)
                         /│
                        / │
                       /  │
                      ▼
                      Z (World South / Depth)
```

### Camera Rig Parameters
- **Camera Orientation**: Positioned at $(200, 200, 200)$ looking at origin $(0,0,0)$.
- **Yaw Angle**: Exactly $45^\circ$ around the Y-axis.
- **Pitch Angle**: $\theta = \arctan(1 / \sqrt{2}) \approx 35.264^\circ$ (True Isometric Pitch).
- **Default Frustum Size**: $320$ units (`DEFAULT_FRUSTUM_SIZE`).

---

## 2. Mathematical Invariants & Constants

The rendering engine ([`BuildingRenderer.ts`](file:///home/berkans/development/alienv2/src/rendering/BuildingRenderer.ts)) enforces strict mathematical invariants to ensure 2D pixel-art building billboards sit perfectly upright on 3D ground terrain without visual stretching or ground-clipping:

```typescript
export const GLOBAL_PPM = 25.0;                   // Pixels Per World Unit (Texel Density)
const ISOMETRIC_ROTATION_Y = Math.PI / 4;           // 45-degree billboard orientation
const ISOMETRIC_Y_COMPENSATION = Math.sqrt(1.5);    // 1.22474487 ≈ 1/cos(35.264°)
```

### 1. Universal Texel Density Formula
World mesh dimensions are derived dynamically from sprite pixel dimensions $(w, h)$ to prevent pixel distortion:

$$\text{meshWidth} = \frac{w}{\text{GLOBAL\_PPM}} \times \text{visualScale}$$

$$\text{meshHeight} = \left( \frac{h}{\text{GLOBAL\_PPM}} \times \sqrt{1.5} \right) \times \text{visualScale}$$

### 2. Y-Foreshortening Compensation
In orthographic projection pitched at $35.264^\circ$, vertical lines along the Y-axis undergo foreshortening by a factor of $\cos(35.264^\circ) = \sqrt{2/3} \approx 0.8165$.

To preserve full pixel height without vertical squishing, billboard heights are scaled by:

$$\text{ISOMETRIC\_Y\_COMPENSATION} = \frac{1}{\cos(35.264^\circ)} = \sqrt{1.5} \approx 1.22474487$$

---

## 3. Ground Contact Pivot Mathematics & Roof-Sample Rejection

To ensure building footprints align exactly with ground grid tiles ($Y = 0$) regardless of sprite frame dimensions, the engine dynamically calculates the ground contact point $groundY$:

```typescript
// In isometric projection, the ground diamond center is located at base_cy.
// Validate base_cy: must be >= 0.55 * h and within reasonable distance of y_max (not sampled on roof/midsection).
// If base_cy is invalid or missing, derive from y_max - half diamond height.
const yMax = (offset && typeof offset.y_max === 'number') ? offset.y_max : h * 0.95;
const yMin = (offset && typeof offset.y_min === 'number') ? offset.y_min : 0;
const halfDiamond = Math.min(w * 0.25, Math.max(16, (yMax - yMin) * 0.25));
const derivedGround = yMax - halfDiamond;

let groundY: number;
if (
  offset &&
  typeof offset.base_cy === 'number' &&
  offset.base_cy >= h * 0.55 &&
  (yMax - offset.base_cy) <= h * 0.45
) {
  groundY = offset.base_cy;
} else {
  groundY = derivedGround; // Safely lifts malls, warehouses, and midrises out of the ground
}
groundY += GLOBAL_SPRITE_DY_OFFSET;

// Physical quad dimensions
const meshWidth = footprintWidth * Math.SQRT2 * visualScale;
const meshHeight = meshWidth * (h / w) * ISOMETRIC_Y_COMPENSATION * heightScale;

// Align building centroid in PNG directly with pos.worldX, pos.worldY (lot center)
const localPivotX = ((-dx - w / 2.0) / w) * meshWidth;
const world_dx = -localPivotX * Math.SQRT1_2;
const world_dz = localPivotX * Math.SQRT1_2;

const tx = pos.worldX + world_dx + fx.shudderDX;
const tz = pos.worldY + world_dz + fx.shudderDZ;

// Align groundY pixel in PNG directly with ground level pos.worldZ + BUILDING_BASE_LIFT
const normBaseY = (groundY - h / 2.0) / h;
const y_mesh = (pos.worldZ || 0) + normBaseY * meshHeight + BUILDING_BASE_LIFT;
```

> **Roof-Sample Rejection Invariant:** Automated sprite offset extractors sometimes sample the roof line or middle atrium rather than the true ground diamond (e.g., shopping mall `base_cy = 369` on a `768` height sprite). The validation `base_cy >= h * 0.55 && (yMax - base_cy) <= h * 0.45` catches these anomalies and derives the true ground contact point from $y_{\text{max}} - \text{halfDiamond}$, preventing wide buildings from sinking into the terrain.

---

## 4. The Dual Depth Buffer Architecture (Ground Protection & 3D Occlusion)

In 2.5D isometric view with both 2D vertical billboard planes and 3D GLTF meshes, naive depth settings create an impossible trade-off:
- If 2D sprites enable `depthTest: true` against standard ground tiles, the $Y = 0$ ground plane slices through the $45^\circ$ vertical sprite quads, cutting buildings in half diagonally along the street.
- If 2D sprites disable `depthTest: false`, 2D sprites drawn behind tall 3D buildings unconditionally render over the 3D meshes in Three.js's transparent pass, pasting 2D shops over 3D balconies and spires.

ALINV-3D resolves this with the **Dual Depth Buffer Architecture**:

```
┌────────────────────────────────────────────────────────────────────────────┐
│ 1. Ground Plane (TileRenderer.ts): depthWrite = false, depthTest = true    │
│    Paints ground terrain & roads to color buffer, leaving depth at 1.0     │
├────────────────────────────────────────────────────────────────────────────┤
│ 2. 3D Buildings (BuildingRenderer.ts): depthWrite = true, depthTest = true │
│    Renders 3D landmark geometry and writes real 3D depth into Z-buffer     │
├────────────────────────────────────────────────────────────────────────────┤
│ 3. 2D Sprites (BuildingRenderer.ts): depthWrite = false, depthTest = true  │
│    • Never clipped by ground plane (ground left depth buffer empty!)       │
│    • Occluded by 3D buildings (3D buildings wrote their depth!)            │
│    • Sort against each other via Painter's Order (calculateIsoOrder)       │
└────────────────────────────────────────────────────────────────────────────┘
```

1. **Ground Tile Material ([`TileRenderer.ts`](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileRenderer.ts))**:
   `groundMat.depthWrite = false`. Ground plane tiles never write into the hardware depth buffer. Consequently, 2D sprite billboards can never be depth-clipped, sliced, or cut diagonally by the ground plane.

2. **2D Sprite Material ([`BuildingRenderer.ts`](file:///home/berkans/development/alienv2/src/rendering/BuildingRenderer.ts))**:
   `depthTest: true` and `depthWrite: false`. Because 3D buildings write depth (`depthWrite: true`), WebGL automatically occludes any 2D sprite located behind a 3D tower. 2D sprites never render on top of 3D balconies.

3. **Monotonic Isometric Painter's Order Sorting**:
   All 2D sprite billboards and 3D GLTF building models assign `renderOrder` dynamically according to ground-plane footprint distance:

   ```typescript
   export function calculateIsoOrder(worldX: number, worldZ: number): number {
     // Grid coordinates span [-512, 512], so (worldX + worldZ) spans [-1024, 1024].
     // Map this monotonically into [100, 750] range for painter's order sorting
     // above ground (0) and decals (10), while staying below player ring (800) and UFO (1000).
     const normalized = (worldX + worldZ + 1024) / 2048;
     return Math.min(750, Math.max(100, 100 + Math.floor(normalized * 650)));
   }
   ```

   > **Critical invariant:** Sorting uses **ground-plane footprint only** (`worldX + worldZ`). Mapping $[-1024, +1024]$ to $[100, 750]$ prevents clamping artifacts in the Northwest grid ($worldX + worldZ < 0$), ensuring uniform back-to-front sorting across the entire city.

---

## 5. Render Architecture: Two-Scene Depth-Isolation Pipeline

ALINV-3D uses **two separate Three.js scenes** rendered by the `EffectComposer` to guarantee the UFO mothership is always on top, even against 3D GLTF buildings that write to the hardware depth buffer:

```
Composer Pass 1: RenderPass(scene, camera)   ← City, ground, effects, shadow ring
      ↓ UnrealBloomPass
Composer Pass 2: RenderPass(ufoScene, camera) ← UFO mothership ONLY
      clear=false       ← preserves pass 1 colour buffer
      clearDepth=true   ← WIPES depth buffer — city Z-values cannot occlude UFO
      ↓ OutputPass
```

| Scene / Group | Composer Pass | Depth Flags | Purpose & Elements |
| :--- | :--- | :--- | :--- |
| **`groundGroup`** (`renderOrder=0`) | Pass 1 | `depthWrite: false`, `depthTest: true` | Ground tiles, asphalt noise, road markings, scorch decals |
| **`cityGroup`** (`renderOrder=100–750`) | Pass 1 | `depthWrite: false`, `depthTest: true` | 2D building billboards (`depthWrite:false`) and 3D GLTF models (`depthWrite:true`) |
| **`playerGroup`** (shadow ring `renderOrder=800`) | Pass 1 | `depthTest: false` | Targeting ring projected onto roofs / ground |
| **`effectsGroup`** (`renderOrder=2000`) | Pass 1 | `depthTest: false` | Laser beam, explosion rings, FX particles |
| **`ufoScene`** (UFO meshes `renderOrder=0,1`) | Pass 2 (clearDepth) | `depthTest: true` | UFO disc, dome, beam port — **physically impossible to be occluded** |

### GLSL Cross-Dissolve Texture Blending Shader
2D building billboard sprites use a custom GLSL shader ([`BUILDING_FRAGMENT_SHADER`](file:///home/berkans/development/alienv2/src/rendering/BuildingRenderer.ts#L115-L137)) to morph seamlessly between damage state frames over $0.3\text{s}$:

```glsl
uniform sampler2D mapA;
uniform sampler2D mapB;
uniform float mixRatio;

void main() {
  vec4 colA = texture2D(mapA, vUv);
  vec4 colB = texture2D(mapB, vUv);
  vec4 blended = mix(colA, colB, mixRatio);
  if (blended.a < 0.05) discard;
  gl_FragColor = blended;
}
```

---
*Back to [Documentation Sitemap](file:///home/berkans/development/alienv2/docs/README.md)*
