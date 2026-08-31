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

## 3. Code & File Dependencies
- [CityGenerator.ts](file:///home/berkans/development/alienv2/src/systems/CityGenerator.ts) — Procedural civic landmark anchor placement, lot reservations, and building entity spawning.
- [TileMap.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileMap.ts) — Logical 2D cell grid, `TileCell` state, lot registration, and road boundary checks.
- [LotManager.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/LotManager.ts) — World-to-grid coordinate conversions and inner block footprint calculations.
- [TileRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/TileRenderer.ts) — `THREE.InstancedMesh` terrain renderer with Canvas 2D procedural road/asphalt textures.

## 4. Implementation Rules & Best Practices
- **Preserve Road Cells:** Always verify `cell.overlayType !== OverlayTileType.ROAD` before assigning building lots to prevent buildings from spawning over roads.
- **Register Footprints:** Register every spawned building through `LotManager.calculateAndRegisterLot()` to update logical tile occupancy.
- **Single-Draw Call Terrain:** Use `TileRenderer` instanced meshes for ground tiles. Do not create individual plane meshes per tile cell.

## 5. Anti-Patterns (Strict Prohibitions)
- ❌ **Overwriting Road Tiles:** NEVER clear or overwrite `OverlayTileType.ROAD` cells when placing building lots.
- ❌ **Direct Grid Index Off-by-One:** NEVER calculate world coordinates without adding `0.5 * TILE_SIZE` cell-centering offset.
- ❌ **Unregistered Entity Spawning:** NEVER spawn building entities in ECS without calling `LotManager.calculateAndRegisterLot()` and updating `SpatialGrid`.

## 6. Verification Checklist
- Run `npm run dev` and verify that city generation creates a connected road grid with intact asphalt intersections.
- Check that civic landmarks (Hospital, Mall, Defense Bunker) spawn cleanly without overlapping surrounding road lines.
- Toggle Showcase Mode (`ShowcaseManager.toggleMode()`) and return to City Mode to verify clean map regeneration.
