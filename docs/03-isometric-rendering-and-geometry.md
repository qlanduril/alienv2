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

## 3. Ground Contact Pivot Mathematics

To ensure building footprints align exactly with ground grid tiles ($Y = 0$) regardless of sprite frame dimensions, the engine converts pixel offsets $(dx, base\_cy)$ into world pivot offsets:

```typescript
const localPivotX = ((-w / 2.0 - dx) / GLOBAL_PPM) * visualScale;
const localPivotY = (((h / 2.0 - base_cy) / GLOBAL_PPM) * ISOMETRIC_Y_COMPENSATION) * visualScale;

const world_dx = localPivotX * Math.SQRT1_2;
const world_dz = -localPivotX * Math.SQRT1_2;
const y_mesh   = pos.worldZ - localPivotY + BUILDING_BASE_LIFT;
```

```
           Sprite Frame Bounding Box (w x h)
     ┌──────────────────────────────────────────┐
     │                                          │
     │                 Center                   │
     │                   •                      │
     │                                          │
     └───────────────────▲──────────────────────┘
                         │
                   (dx, base_cy) ───► Ground Contact Anchor (Y = 0)
```

---

## 4. 2.5D Isometric Back-to-Front Painter's Order & Ground Sinking Prevention

In 2.5D isometric view, rotated $45^\circ$ vertical billboard planes can clip into flat ground tiles ($Y=0$) if hardware Z-buffer depth testing is enabled against ground plane fragments.

ALINV-3D resolves both ground clipping and sprite sorting with a **2.5D Isometric Back-to-Front Painter's Depth System**:

1. **Ground Tile Protection (`depthTest: false`, `depthWrite: false`)**:
   Building sprite materials configure `depthTest: false` and `depthWrite: false`. Because ground tiles (`renderOrder = 0`) are drawn first, ground plane tiles **never clip or sink** building bases. `BUILDING_BASE_LIFT = 0.2` ensures sprite contact lines rest flush on street asphalt.

2. **Bounded Isometric Depth Sort**:
   All 2D sprite billboards and 3D GLTF building models assign `renderOrder` dynamically according to camera view distance:

   $$\text{isoOrder} = \min\left(600, 10 + \lfloor (worldX + worldY) \times 0.15 \rfloor\right)$$

   - Objects further from the camera (smaller $worldX + worldY$) get smaller `renderOrder` (e.g., `25`) and render first.
   - Objects closer to the camera (larger $worldX + worldY$) get larger `renderOrder` (e.g., `110`), properly overlapping buildings behind them (including large lot structures like the Mall).
   - Capped at `600` so building render orders never spill into UFO or FX layers.

---

## 5. 5-Layer Scene Render Hierarchy & Shaders

| Layer / Group | `renderOrder` | Depth Flags | Purpose & Elements |
| :--- | :--- | :--- | :--- |
| **`groundGroup`** | `0` | `depthTest: true` | Ground tiles, asphalt noise, road markings, scorch decals |
| **`cityGroup`** | `10` to `600` | `depthTest: false` | 2D building billboards and 3D GLTF building models |
| **`groundShadowRing`** | `800` | `depthTest: false` | Alien targeting ring lerp-projected onto roofs ($Y_{roof}$) or street asphalt ($Y=0.1$) |
| **`playerGroup`** | `1000` | `depthTest: false` | UFO Mothership (`discMesh = 1000`, `domeMesh = 1001`, `portMesh = 1002`) |
| **`effectsGroup`** | `2000` | `depthTest: false` | Outer cyan laser line (`2000`), inner white core (`2001`), laser hit ring (`2002`) |

### GLSL Cross-Dissolve Texture Blending Shader
2D building billboard sprites use a custom GLSL shader ([`BUILDING_FRAGMENT_SHADER`](file:///home/berkans/development/alienv2/src/rendering/BuildingRenderer.ts#L104-L126)) to morph seamlessly between damage state frames over $0.3\text{s}$:

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
