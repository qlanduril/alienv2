---
name: rendering-isometric-core
description: Govern camera projection angles, 45-degree billboard plane rotations, texel density scaling, isometric Y foreshortening, and ground contact pivot math.
---

# SKILL: Rendering & Isometric Core

## 1. Domain Scope & Responsibilities
Governs the 2.5D isometric orthographic rendering engine, camera rig math, billboard plane orientation, texel density standardization, and ground-plane alignment math.

## 2. Mathematical Invariants & Constants
- **Camera Orientation:** Pitch $\approx 35.264^\circ$ ($\tan\theta = 1/\sqrt{2}$), Yaw $= 45^\circ$ ($\pi / 4$).
- **Camera Rig Position:** Initial position `(200, 200, 200)` with `lookAt(0, 0, 0)`. Camera frustum zoom bounded between `300` and `900` (default `560`).
- **Texel Density Constant:** `GLOBAL_PPM = 25.0` pixels per world unit. All mesh world scales must be calculated via `(textureWidth / GLOBAL_PPM) * visualScale`.
- **Y-Foreshortening Compensation:** `ISOMETRIC_Y_COMPENSATION = Math.sqrt(1.5)` ($\approx 1.2247$). Applied to vertical sprite quad scale to prevent ground clipping under 35.264° camera pitch.
- **Y-Up Billboard Rotation:** `ISOMETRIC_ROTATION_Y = Math.PI / 4` ($45^\circ$). Sprite quads stand vertically along Y and rotate around Y-axis to face camera.
- **Ground Lift Offset:** `BUILDING_BASE_LIFT = 0.2` world units. Lifts sprite base strictly above ground plane tiles to prevent GPU z-fighting.
- **Dual Depth Architecture:** `groundMat.depthWrite = false` on ground plane; `depthTest = true, depthWrite = false` on 2D sprites; `depthWrite = true, depthTest = true` on 3D buildings.
- **Monotonic Iso Depth:** `calculateIsoOrder(worldX, worldZ)` maps $[-1024, +1024]$ to $[100, 750]$ for strictly monotonic back-to-front sorting.

## 3. Code & File Dependencies
- [BuildingRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/BuildingRenderer.ts) — Billboard sprite quads, Y-rotation, visual juice flinch, and collapse physics.
- [TileRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileRenderer.ts) — Canvas 2D ground mesh with `depthWrite: false`.
- [CameraController.ts](file:///home/berkans/development/alienv2/src/rendering/CameraController.ts) — Exponential camera follow (`1 - exp(-14 * delta)`), frustum zoom lerp, and exponential screen shake envelope.
- [SceneManager.ts](file:///home/berkans/development/alienv2/src/rendering/SceneManager.ts) — Three.js `OrthographicCamera`, `WebGLRenderer`, PCF soft shadow directional lighting, and `EffectComposer` bloom pass.

## 4. Implementation Rules & Best Practices
- **Dual Depth Buffer Strategy:** Ground plane must ALWAYS have `depthWrite: false` so it never depth-clips or diagonally slices vertical billboard sprites. 2D billboard sprites must ALWAYS have `depthTest: true` so 3D buildings properly occlude sprites behind them.
- **Validate `base_cy` (Roof-Sample Rejection):** `base_cy` is only valid if $\ge 0.55 \cdot h$ and within $0.45 \cdot h$ of $y_{\text{max}}$. When invalid (sampled on roof/midsection), derive ground contact from $y_{\text{max}} - \text{halfDiamond}$ to prevent sunken buildings.
- **Preserve Vertical Stand:** Keep sprite plane quads standing vertically along Y. Never apply X-axis pitch tilt to billboard meshes.
- **Apply Texel Density Uniformly:** Compute mesh scales using `GLOBAL_PPM = 25.0`. Never hardcode static mesh widths or height ratios.
- **Monotonic Painter's Order:** Always compute sprite and model `renderOrder` via `calculateIsoOrder(pos.worldX, pos.worldY)` mapped across the entire $[-1024, +1024]$ coordinate span.

## 5. Anti-Patterns (Strict Prohibitions)
- ❌ **Enabling `depthWrite: true` on Ground Plane:** NEVER write depth on the ground plane material — it causes diagonal slicing through 2D billboard sprite bases.
- ❌ **Disabling `depthTest: false` on 2D Sprites:** NEVER turn off depth testing on 2D sprites when 3D buildings exist — sprites behind 3D towers will render on top of balconies and roofs.
- ❌ **Unvalidated `base_cy` Usage:** NEVER trust raw `base_cy` without checking for roof-line samples (`base_cy >= h * 0.55`).
- ❌ **Double Isometric Projection:** NEVER tilt sprite quads backward on the X-axis (`rotation.x`). The orthographic camera handles the pitch angle.

## 6. Verification Checklist
- Run `npm run dev` and verify that building bases rest flush on ground tiles without dipping below terrain or floating.
- Check that 2D sprites located behind 3D landmarks are cleanly occluded and do not render on balconies.
- Check wide flat buildings (shopping mall, warehouse) to confirm their bases are not sliced diagonally by ground tiles.
