---
name: targeting-gameplay
description: Govern mouse raycasting, 3D hit zone inspection, UFO movement control, weapon cooldowns, target inspector HUD, and ARIA UI accessibility.
---

# SKILL: Targeting, Input & Gameplay Controls

## 1. Domain Scope & Responsibilities
Governs player WASD & pointer input handling, mouse raycasting, 3D sub-mesh damage zone detection, UFO movement interpolation, weapon firing & heat cooldowns, real-time target inspector HUD, and accessibility overlay controls.

## 2. Mathematical Invariants & Constants
- **NDC Transformation:**
  $$\text{ndc.x} = \left(\frac{\text{mouseX}}{\text{screenWidth}}\right) \times 2 - 1, \quad \text{ndc.y} = -\left(\frac{\text{mouseY}}{\text{screenHeight}}\right) \times 2 + 1$$
- **Asynchronous UFO Flight Lerp:**
  - `LERP_FOLLOW_SPEED = 8.0`. Position update: `pos += (targetPos - pos) * (1 - Math.exp(-8.0 * delta))`.
  - WASD Speed: `WASD_SPEED = 65` world units/sec.
- **Throttled Hover Raycast:**
  - `HOVER_CHECK_INTERVAL = 0.033s` (~30 FPS). Prevents raycasting against all invisible hit meshes every single frame.
- **Weapon Heat Cooldown:**
  - `WEAPON_HEAT_DEFAULT = 0`, `fireRate = 0.2s`.
- **Damage Per Laser Shot:**
  - `ZONAL_DAMAGE_AMOUNT = 15` HP per hit to targeted zone.

## 3. Code & File Dependencies
- [InputManager.ts](file:///home/berkans/development/alienv2/src/input/InputManager.ts) — DOM keyboard and pointer event listeners, NDC conversion helper.
- [Raycaster.ts](file:///home/berkans/development/alienv2/src/input/Raycaster.ts) — Static Three.js `Raycaster` helper wrapper.
- [PlayerControlSystem.ts](file:///home/berkans/development/alienv2/src/systems/PlayerControlSystem.ts) — WASD flight logic, exponential UFO follow lerp, throttled hover inspection, and laser weapon firing.
- [HitZoneManager.ts](file:///home/berkans/development/alienv2/src/rendering/HitZoneManager.ts) — 9 invisible damage zone hit meshes (`PlaneGeometry`, `opacity: 0`), raycast zone intersection math.
- [UIOverlay.ts](file:///home/berkans/development/alienv2/src/rendering/UIOverlay.ts) — DOM HUD card, mode toggle button, target inspector updates, and keyboard focus accessibility styling.

## 4. Implementation Rules & Best Practices
- **Throttle Hover Checks:** Keep hover inspection raycasting throttled at $\le 30$ FPS (`HOVER_CHECK_INTERVAL`) to preserve frame rates.
- **Raycast Invisible Hit Meshes:** Perform raycasting against `HitZoneManager` invisible sub-meshes to identify specific 3×3 damage zones on buildings.
- **Maintain Accessibility Standards:** Ensure all new UI buttons in `UIOverlay` include `aria-label`, `aria-pressed` (where applicable), and keyboard focus styles (`onfocus` / `onblur`).

## 5. Anti-Patterns (Strict Prohibitions)
- ❌ **Unthrottled Per-Frame Raycasting:** NEVER execute complex `raycaster.intersectObjects()` calls on every `requestAnimationFrame` frame.
- ❌ **Hardcoded Screen Coordinates:** NEVER calculate NDC coordinates without dividing by `window.innerWidth` and `window.innerHeight`.
- ❌ **Direct Weapon Firing Bypass:** NEVER apply damage directly without checking `weapon.heatLevel` cooldown state.

## 6. Verification Checklist
- Move mouse over buildings and verify target inspector HUD updates with correct building name, HP, and frame index.
- Click to fire laser weapon and verify damage applies to targeted zone and weapon enters heat cooldown.
- Tab through UI buttons using keyboard to verify visible focus rings and ARIA accessibility labels.
