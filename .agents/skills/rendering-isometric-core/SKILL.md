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

## 3. Code & File Dependencies
- [BuildingRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/BuildingRenderer.ts) — Billboard sprite quads, Y-rotation, visual juice flinch, and collapse physics.
- [CameraController.ts](file:///home/berkans/development/alienv2/src/rendering/CameraController.ts) — Exponential camera follow (`1 - exp(-14 * delta)`), frustum zoom lerp, and exponential screen shake envelope.
- [SceneManager.ts](file:///home/berkans/development/alienv2/src/rendering/SceneManager.ts) — Three.js `OrthographicCamera`, `WebGLRenderer`, PCF soft shadow directional lighting, and `EffectComposer` bloom pass.

## 4. Implementation Rules & Best Practices
- **Preserve Vertical Stand:** Keep sprite plane quads standing vertically along Y. Never apply X-axis pitch tilt to billboard meshes.
- **Apply Texel Density Uniformly:** Compute mesh scales using `GLOBAL_PPM = 25.0`. Never hardcode static mesh widths or height ratios.
- **Use Exponential Lerp:** Camera follow and frustum zoom must use framerate-independent exponential lerp `1 - Math.exp(-rate * delta)`.

## 5. Anti-Patterns (Strict Prohibitions)
- ❌ **Double Isometric Projection:** NEVER tilt sprite quads backward on the X-axis (`rotation.x`). The orthographic camera handles the pitch angle.
- ❌ **Hardcoded Plane Dimensions:** NEVER set `PlaneGeometry` dimensions directly to multi-tile grid spans without scaling by `GLOBAL_PPM`.
- ❌ **Direct Position Mutation without Compensation:** NEVER modify sprite Y positions without accounting for `base_cy` pivot offsets and `BUILDING_BASE_LIFT`.

## 6. Verification Checklist
- Run `npm run dev` and verify that building bases rest flush on ground tiles without dipping below terrain or floating.
- Test camera zoom (scroll wheel) to verify smooth frustum scaling without geometry distortion.
- Confirm screen shake decays exponentially without sharp cutoff jumps.
