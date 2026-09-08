---
name: city-worldgen
description: Govern city generation, grid coordinate math, terrain instancing, lot reservation, landmark placement, and road network layout.
---

# SKILL: City World Generation & Tile System

## 1. Domain Scope & Responsibilities
Governs procedural city layout generation, tile map data structures, lot allocation, road network grid intervals, terrain instancing, and world-space ↔ grid-space coordinate math.

## 2. Mathematical Invariants & Constants
- **Map Bounds:** `MAP_BOUNDS = 1024` world units ($64 \times 64$ cells $\times$ `TILE_SIZE = 16`). Centered at $(0, 0)$, spanning $[-512, +512]$ along X and Z.
- **Tile Size:** `TILE_SIZE = 16` world units per grid cell.
- **Road Grid Interval:** `ROAD_INTERVAL_CELLS = 6`. Roads recur every 6 cells; inner blocks span $4 \times 4$ cells.
- **Coordinate Conversion Math:**
  $$\text{worldX} = -\frac{\text{MAP\_BOUNDS}}{2} + \left(gx + \text{widthTiles} \times 0.5\right) \times \text{TILE\_SIZE}$$
  $$\text{worldZ} = -\frac{\text{MAP\_BOUNDS}}{2} + \left(gz + \text{lengthTiles} \times 0.5\right) \times \text{TILE\_SIZE}$$
- **Instanced Terrain Batching:** `MAX_INSTANCES_PER_TYPE = 8000` per terrain type to render the ground layer in minimal draw calls.
- **3D Landmark Budget:** Exactly 1 instance per 3D model (`mega_titan`, `spaceship_hq`, `financial_tower`, `cyber_reactor`) in designated downtown lots.
- **3D Landmark North Clearance:** 6-tile corridor to the North ($-Z$) and 4-tile corridor to the North-West ($-X$) reserved as open `PLAZA_STONE` paving with `occupied = true`.
- **High-Density District Packing:** Commercial districts pack 1x1 shops side-by-side (step 1) along sidewalks with mid-block pedestrian breezeways, creating crowded, lively urban streetfronts.

## 3. Code & File Dependencies
- [bake_assets.py](file:///home/berkans/development/alienv2/scripts/bake_assets.py) — Macro 16-chunk district generator, landmark placement, and static map JSON baker.
- [CityGenerator.ts](file:///home/berkans/development/alienv2/src/systems/CityGenerator.ts) — Procedural civic landmark anchor placement, lot reservations, and building entity spawning.
- [MapLoader.ts](file:///home/berkans/development/alienv2/src/generation/MapLoader.ts) — Pre-baked map JSON loader, TileMap hydration, and ECS building spawning.
- [TileMap.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileMap.ts) — Logical 2D cell grid, `TileCell` state, lot registration, and road boundary checks.
- [LotManager.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/LotManager.ts) — World-to-grid coordinate conversions and inner block footprint calculations.
- [TileRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileRenderer.ts) — Single canvas ground mesh with `depthWrite: false` and PCF soft shadow reception.

## 4. Implementation Rules & Best Practices
- **Preserve Road Cells:** Always verify `cell.overlayType !== OverlayTileType.ROAD` before assigning building lots to prevent buildings from spawning over roads.
- **3D Model Singularity:** Allocate each 3D GLTF model at most once across the city map to prevent CPU animation mixer bottlenecks.
- **North Clearance for 3D Towers:** Always clear the North corridor behind tall 3D landmarks as open plaza paving.
- **High-Density Streetfronts:** In commercial market chunks, pack 1x1 low-rises continuously (step 1) along street sidewalks rather than leaving artificial checkerboard gaps.
- **Register Footprints:** Register every spawned building through `LotManager.calculateAndRegisterLot()` to update logical tile occupancy.

## 5. Anti-Patterns (Strict Prohibitions)
- ❌ **Duplicate 3D Landmark Models:** NEVER spawn dozens of animated 3D GLTF models — each model must remain a unique mega-landmark.
- ❌ **Overwriting Road Tiles:** NEVER clear or overwrite `OverlayTileType.ROAD` cells when placing building lots.
- ❌ **Direct Grid Index Off-by-One:** NEVER calculate world coordinates without adding `0.5 * TILE_SIZE` cell-centering offset.
- ❌ **Unregistered Entity Spawning:** NEVER spawn building entities in ECS without calling `LotManager.calculateAndRegisterLot()` and updating `SpatialGrid`.

## 6. Verification Checklist
- Run `npm run dev` and verify that city generation creates a connected road grid with intact asphalt intersections.
- Check that civic landmarks (Hospital, Mall, Defense Bunker) spawn cleanly without overlapping surrounding road lines.
- Toggle Showcase Mode (`ShowcaseManager.toggleMode()`) and return to City Mode to verify clean map regeneration.
