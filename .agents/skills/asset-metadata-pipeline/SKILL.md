---
name: asset-metadata-pipeline
description: Govern texture preloading, sprite offset metadata contracts, building type definitions, texture filtering, and VRAM memory management.
---

# SKILL: Asset & Metadata Pipeline

## 1. Domain Scope & Responsibilities
Governs static asset preloading, image texture caching lifecycle, sprite offset metadata schemas, building definition catalogues, texture filtering settings, and GPU VRAM asset disposal.

## 2. Mathematical Invariants & Constants
- **Offset Contract Schema (`sprite_offsets.json`):**
  - `{ w, h, dx, dy, base_cy }`
  - `w`, `h`: Source frame pixel width and height.
  - `dx`, `dy`: Centroid origin shift offsets in pixels.
  - `base_cy`: Ground-contact pivot offset in pixels for isometric anchor placement.
- **Pixelated Texture Filtering:**
  - `minFilter = THREE.NearestFilter`, `magFilter = THREE.NearestFilter`, `generateMipmaps = false`. Applied to pixel art building and unit textures to preserve crispness and save VRAM.
- **Background Texture Filtering:**
  - `minFilter = THREE.LinearMipmapLinearFilter`, `magFilter = THREE.LinearFilter`. Applied to large background terrain textures.
- **Texture Cache Store:** $O(1)$ lookup via `AssetLoader.getTexture(id)` backed by `Map<string, THREE.Texture>`.

## 3. Code & File Dependencies
- [AssetLoader.ts](file:///home/berkans/development/alienv2/src/assets/AssetLoader.ts) — Preloading asset manifest, texture caching, sprite offset JSON lookup, and stage fallback logic.
- [BuildingDefs.ts](file:///home/berkans/development/alienv2/src/core/BuildingDefs.ts) — `BUILDING_DEFS` registry mapping building type keys to footprint dimensions, heights, visual scales, and tier classifications.
- `public/sprite_offsets.json` — Generated JSON metadata file containing pivot/centroid offsets per building frame.

## 4. Implementation Rules & Best Practices
- **Preload All Textures at Bootstrap:** Register all sprite frames in `AssetLoader.loadAll()` before initializing world rendering.
- **Reuse Cached Textures:** Always check `AssetLoader.getTexture()` before loading or creating new texture instances.
- **Apply Pivot Offsets:** Always incorporate `dx`, `dy`, and `base_cy` offsets from `AssetLoader.getSpriteOffset()` when positioning billboard quads.

## 5. Anti-Patterns (Strict Prohibitions)
- ❌ **Runtime Texture Fetching:** NEVER call `TextureLoader.load()` dynamically inside frame tick updates.
- ❌ **Missing Pivot Compensation:** NEVER swap sprite textures without re-reading `base_cy` and updating mesh offsets.
- ❌ **Duplicate Texture Instances:** NEVER create duplicate `THREE.Texture` objects for the same asset path.

## 6. Verification Checklist
- Run `npm run dev` and confirm console logs "Loading assets..." -> "Assets loaded." without texture load errors.
- Verify building damage frame transitions seamlessly update without jumping pivot positions.
- Inspect browser Developer Tools Memory tab to confirm no texture allocation leak over time.
