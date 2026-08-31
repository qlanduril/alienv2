## 2026-08-28 - ECS Entity Sweeping Bottlenecks in Tick and Rebuild Loops
**Learning:** Iterating global `ECS.entities` in per-frame tick routines or spatial rebuilds forces O(N_entities) checks against component maps or tag sets every frame. Iterating directly over targeted component stores (`PlayerTagComponent` Set or `HealthComponent.entries()` Map) reduces iteration count to only relevant entities (e.g. 1 player entity instead of 500+ global entities).
**Action:** When adding or optimizing ECS systems, iterate directly over specific component Maps or tag Sets (`ComponentMap.keys()`, `ComponentMap.entries()`, `TagComponent`) rather than `ECS.entities`.

## 2026-08-28 - BuildingRenderer Regex & Definition Lookup Bottleneck in Render Loop
**Learning:** In Three.js / ECS render loops processing hundreds of entity sprites per frame, avoid string pattern matching (regex) or dict lookups in per-frame tick functions. Caching entity building type keys (`typeKey`) and building definitions (`def`) in a `Map<Entity, T>` eliminates regex evaluation overhead completely.
**Action:** When inspecting animation or renderer tick loops, check if string parsing or definition dictionary lookups are executed per frame for active entities, and cache them on initial resolution.
