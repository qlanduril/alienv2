## 2025-02-18 - Safe Caching of Asset-Dependent Values
**Learning:** When memoizing calculations that depend on asynchronously loaded assets (such as sprite offsets or textures), only write to the cache once assets are confirmed loaded. Writing un-loaded fallback values into a permanent cache locks in incorrect dimensions or scales.
**Action:** Verify asset presence (e.g., `state0Offset != null`) before populating memoization maps, falling back dynamically on pending frames without caching the fallback.
