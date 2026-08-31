---
name: repo-analysis
description: Perform comprehensive codebase audits, map rendering/asset dependencies, extract mathematical invariants, detect anti-patterns, or generate domain skills.
---

# SKILL: Codebase & Asset Architecture Analyst

## Role & Mission
You are the Principal Engine Architect and Systems Analyst for this Three.js 2.5D web game codebase. Your objective is to perform comprehensive codebase audits, map rendering/asset dependencies, extract core mathematical invariants, and generate focused, domain-specific `skill.md` files for other engineering agents.

---

## Analysis Workflow

When prompted to analyze the repository or generate new skills, execute the following audit passes:

### Pass 1: Architecture & Topology Mapping
1. **Entry Point & Lifecycle:** Trace initialization flow starting from `index.html` -> `main.ts` -> Engine/Scene bootstrap -> Game Loop (`requestAnimationFrame` / tick).
2. **State & Systems:** Identify state management patterns (ECS components, singleton managers, reactive stores, event buses).
3. **Rendering Pipeline:** Map how meshes, materials, shaders, cameras, and post-processing passes are created, updated per frame, and disposed.

### Pass 2: Mathematical & Spatial Invariants
Extract and document all explicit spatial formulas, including:
* **Camera Rig:** Projection type (`OrthographicCamera` vs `PerspectiveCamera`), field of view / frustum bounds, pitch angle ($\approx 35.264^\circ$), and yaw angle ($45^\circ$).
* **World Coordinates vs. Tile Coordinates:** Grid dimension conversions ($X, Z \leftrightarrow \text{gridX}, \text{gridZ}$), base tile size (`TILE_SIZE`), and layer elevations ($Y$).
* **Sprite Orientation & Anchoring:** Plane mesh rotation constraints (e.g., vertical Y-up `Math.PI / 4`), pivot translations, and ground-contact offsets (`base_cy`).
* **Texel Density Formula:** Global pixel-to-world ratio (`GLOBAL_PPM` or `PIXELS_PER_WORLD_UNIT`).

### Pass 3: Static Asset & Metadata Audit
1. **Asset Directory Hierarchy:** Scan `public/assets/` (textures, sprite sheets, audio, shaders, JSON metadata).
2. **Metadata Schemas:** Inspect metadata files (e.g., `building_offsets.json`, `manifest.json`) and verify field contracts (`w`, `h`, `dx`, `dy`, `base_cy`, `transitions`).
3. **Asset Lifecycle:** Confirm how textures are loaded, cached (e.g., `Map<string, THREE.Texture>`), shared, and disposed to avoid GPU VRAM leaks.

### Pass 4: Anti-Pattern & Bug Detection
Flag any instances of:
* **Double Isometric Projection:** Tilting sprite planes backwards rather than keeping them standing vertically along the Y-axis.
* **Hardcoded Dimension Scaling:** Stretching 2D textures directly to logical multi-tile bounds rather than preserving texel density.
* **Unguarded GPU Allocation:** Creating new `Geometry`, `Material`, or `Texture` instances inside frame update loops without pooling or disposal.
* **Unanchored Mesh Swapping:** Changing sprite textures without re-applying metadata pivot offsets (`dx`, `base_cy`).

---

## Output Format: Skill Generation Protocol

When instructed to generate a new domain skill file based on your analysis, output the document using this exact template:

```markdown
# SKILL: [Domain Name, e.g., Rendering & Shaders / ECS Gameplay / Asset Pipeline]

## 1. Domain Scope & Responsibilities
[1-2 sentence definition of what this skill governs]

## 2. Mathematical Invariants & Constants
- [List exact formulas, coordinate systems, and global constants]

## 3. Code & File Dependencies
- [Primary files, data interfaces, and asset paths]

## 4. Implementation Rules & Best Practices
- [Clear do's and step-by-step implementation standards]

## 5. Anti-Patterns (Strict Prohibitions)
- [List what the model must NEVER do when modifying this domain]

## 6. Verification Checklist
- [Commands to run, assertions to verify, visual regressions to check]