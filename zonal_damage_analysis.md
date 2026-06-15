# Zonal Damage System — Analysis & Design Proposal

## Current System: What We Have

### Architecture at a Glance

| Layer | File | Role |
|---|---|---|
| State | `Components.ts` → `Health` | Linear `currentHP / maxHP`, `state: number` (0..maxFrame) |
| Logic | `DamageCalc.ts` | `computeFrameIndex` — pure linear map from HP% to frame index |
| Input | `Raycaster.ts` | Single ray → single entity intersection (no hit position) |
| Event | `DestructionSystem.ts` | `applyDamage(entity, amount)` — no spatial context, no zone |
| Visual | `BuildingRenderer.ts` | Displays `currentFrame` from `RenderState`, one texture per state |

### Problems With the Current System

1. **Damage is blind to *where* you hit** — Every shot at a hospital does identical, position-agnostic damage. A corner snipe and a center direct hit both advance through the same linear sequence.
2. **A single flat integer encodes all destruction state** — `Health.state` is a `number` (0..71 for school). This cannot represent "top-left corner heavily damaged, center undamaged", because that is not a scalar value.
3. **All buildings follow the exact same visual curve** — `DamageCalc.computeFrameIndex` is a pure linear function. A single frame transition triggers the same blast animation, debris burst, and texture swap regardless of context.
4. **Raycaster returns only an entity** — `getIntersectedEntity()` discards the rich `THREE.Intersection` data (UV position, local hit point, normal). The hit position within the building is completely lost.
5. **72 school frames are a single animation track** — They cannot branch. Damage to the roof, left wing, and lobby all look identical at the same HP%.

---

## Proposed System: Zonal Hit-Box Damage

The core idea is a **two-layer expansion**:

1. **Spatial Hit-Zones** — Each building billboard has a set of invisible rectangular "zone detectors" layered in front of it. Raycasting hits one of these zones, not just the building entity.
2. **Non-Linear Damage State Tree** — Instead of `state: number`, each building maintains a tree of `DamageNode`s. Each node has an enum type (`PRISTINE`, `LIGHT`, `MODERATE`, `HEAVY`, `RUBBLE`) and children that unlock via accumulated damage.

---

## 1. Zone Definitions

Every building type gets a `ZoneDef[]` array that describes its layout in **normalized (0→1) UV space** relative to the building's bounding rectangle.

```typescript
// src/core/ZoneDefs.ts

export enum DamageZone {
  TOP_LEFT     = 'TOP_LEFT',
  TOP_CENTER   = 'TOP_CENTER',
  TOP_RIGHT    = 'TOP_RIGHT',
  MID_LEFT     = 'MID_LEFT',
  CENTER       = 'CENTER',
  MID_RIGHT    = 'MID_RIGHT',
  BASE_LEFT    = 'BASE_LEFT',
  BASE_CENTER  = 'BASE_CENTER',
  BASE_RIGHT   = 'BASE_RIGHT',
}

export interface ZoneDef {
  id: DamageZone;
  u0: number; v0: number; // top-left UV corner
  u1: number; v1: number; // bottom-right UV corner
  hpWeight: number;       // damage multiplier for structural damage calc
  structureWeight: number; // how much this zone collapse contributes to total
}

// Example: School (building_3) — 3 wide, 2 tall
export const SCHOOL_ZONES: ZoneDef[] = [
  { id: DamageZone.TOP_LEFT,    u0: 0.0, v0: 0.0, u1: 0.33, v1: 0.5, hpWeight: 1.0, structureWeight: 0.08 },
  { id: DamageZone.TOP_CENTER,  u0: 0.33, v0: 0.0, u1: 0.66, v1: 0.5, hpWeight: 1.5, structureWeight: 0.15 },
  { id: DamageZone.TOP_RIGHT,   u0: 0.66, v0: 0.0, u1: 1.0, v1: 0.5, hpWeight: 1.0, structureWeight: 0.08 },
  { id: DamageZone.MID_LEFT,    u0: 0.0, v0: 0.5, u1: 0.33, v1: 1.0, hpWeight: 1.2, structureWeight: 0.12 },
  { id: DamageZone.CENTER,      u0: 0.33, v0: 0.5, u1: 0.66, v1: 1.0, hpWeight: 2.0, structureWeight: 0.25 },  // critical
  { id: DamageZone.MID_RIGHT,   u0: 0.66, v0: 0.5, u1: 1.0, v1: 1.0, hpWeight: 1.2, structureWeight: 0.12 },
];
```

**`hpWeight`** scales how much raw damage this zone deals to total HP.  
**`structureWeight`** is the fraction of total building collapse this zone's destruction contributes. Destroying the CENTER (0.25) is much more significant than a corner (0.08).

---

## 2. New ECS Component — `ZonalHealth`

Replace the existing flat `Health` component (or augment it) with a structured component:

```typescript
// src/core/Components.ts (additions)

export enum DamageLevel {
  PRISTINE  = 0,
  LIGHT     = 1,
  MODERATE  = 2,
  HEAVY     = 3,
  RUBBLE    = 4,
}

export interface ZoneState {
  id: DamageZone;
  level: DamageLevel;
  hp: number;
  maxHp: number;
}

export interface ZonalHealth {
  zones: Map<DamageZone, ZoneState>;
  totalHp: number;
  maxTotalHp: number;
  globalDamageLevel: DamageLevel; // derived from structureWeights
}

export const ZonalHealthComponent = new Map<Entity, ZonalHealth>();
```

Each `ZoneState` carries its own HP pool. Shooting the roof drains roof HP. Shooting the lobby drains lobby HP. They are completely independent damage buckets.

---

## 3. The Hit-Zone Raycasting Pipeline

This is the crux of the user's "invisible square" idea. For every building, we place a set of invisible `THREE.Mesh` objects (one per zone) as children of the building group, positioned to match the zone's UV region.

### HitZoneManager

```typescript
// src/rendering/HitZoneManager.ts

export class HitZoneManager {
  // Maps invisible hit mesh UUID → { entity, zone }
  private static zoneObjects = new Map<string, { entity: Entity, zone: DamageZone }>();
  private static allZoneMeshes: THREE.Object3D[] = [];

  public static createZonesForBuilding(entity: Entity, sprite: THREE.Mesh, zones: ZoneDef[]) {
    for (const def of zones) {
      const width = (def.u1 - def.u0) * sprite.scale.x;
      const height = (def.v1 - def.v0) * sprite.scale.y;
      const geo = new THREE.PlaneGeometry(width, height);
      const mat = new THREE.MeshBasicMaterial({ visible: false, transparent: true, opacity: 0 });
      const mesh = new THREE.Mesh(geo, mat);
      
      // Position relative to sprite center
      mesh.position.x = sprite.position.x + (def.u0 + (def.u1 - def.u0) / 2 - 0.5) * sprite.scale.x;
      mesh.position.y = sprite.position.y - (def.v0 + (def.v1 - def.v0) / 2 - 0.5) * sprite.scale.y;
      mesh.rotation.copy(sprite.rotation);
      
      SceneManager.cityGroup.add(mesh);
      this.zoneObjects.set(mesh.uuid, { entity, zone: def.id });
      this.allZoneMeshes.push(mesh);
    }
  }

  public static getHitZone(camera: THREE.Camera, ndc: {x: number, y: number}): { entity: Entity, zone: DamageZone } | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(ndc.x, ndc.y), camera);
    const hits = raycaster.intersectObjects(this.allZoneMeshes);
    if (hits.length === 0) return null;
    return this.zoneObjects.get(hits[0].object.uuid) || null;
  }
}
```

`PlayerControlSystem` would call `HitZoneManager.getHitZone()` instead of `RaycasterHelper.getIntersectedEntity()`, giving us both the entity AND the exact zone that was clicked.

---

## 4. The Damage State Tree

The non-linear progression is handled as a **transition graph per zone**. Each zone's `DamageLevel` can advance independently, but the building's global state is derived from a **weighted sum of structural contributions**.

```typescript
// src/core/DamageStateTree.ts

interface Transition {
  from: DamageLevel;
  to: DamageLevel;
  hpThreshold: number; // fraction of zone HP remaining to trigger
}

const ZONE_TRANSITIONS: Transition[] = [
  { from: DamageLevel.PRISTINE,  to: DamageLevel.LIGHT,    hpThreshold: 0.80 },
  { from: DamageLevel.LIGHT,     to: DamageLevel.MODERATE,  hpThreshold: 0.55 },
  { from: DamageLevel.MODERATE,  to: DamageLevel.HEAVY,     hpThreshold: 0.25 },
  { from: DamageLevel.HEAVY,     to: DamageLevel.RUBBLE,    hpThreshold: 0.0  },
];

export class DamageStateTree {
  /**
   * Given a zone's HP ratio, return the correct DamageLevel.
   */
  public static computeZoneLevel(hpRatio: number): DamageLevel {
    if (hpRatio >= 0.80) return DamageLevel.PRISTINE;
    if (hpRatio >= 0.55) return DamageLevel.LIGHT;
    if (hpRatio >= 0.25) return DamageLevel.MODERATE;
    if (hpRatio > 0.0)   return DamageLevel.HEAVY;
    return DamageLevel.RUBBLE;
  }

  /**
   * Compute the building's global damage level from all zone structural weights.
   */
  public static computeGlobalLevel(zonalHealth: ZonalHealth, buildingZoneDefs: ZoneDef[]): DamageLevel {
    let collapseScore = 0;
    for (const def of buildingZoneDefs) {
      const zone = zonalHealth.zones.get(def.id);
      if (!zone) continue;
      // Each zone contributes its structureWeight × its level fraction
      const levelFraction = zone.level / DamageLevel.RUBBLE;
      collapseScore += def.structureWeight * levelFraction;
    }
    // collapseScore in [0, 1] — map to global level
    return this.computeZoneLevel(1 - collapseScore);
  }
}
```

### The "Tree" Aspect

The "tree" refers to a branching event graph for each zone. This is most naturally expressed as a matrix of `(zone, level) → animation_variant`:

```
                  ┌─────────────────────────────────────────────┐
                  │              DamageNode Tree                │
                  │                                             │
          Zone: CENTER              Zone: TOP_LEFT              │
             │                          │                      │
      LIGHT → blast360_v1       LIGHT → blast360_v2           │
      HEAVY → blast_full        HEAVY → blast_small           │
      RUBBLE → collapse_down    RUBBLE → crumble_corner       │
                  └─────────────────────────────────────────────┘
```

This is expressed as a lookup table:

```typescript
type AnimationVariant = 'blast' | 'blast360' | 'blast360_small' | 'collapse' | 'crumble_corner';

const ZONE_TRANSITION_ANIMATIONS: Record<DamageZone, Partial<Record<DamageLevel, AnimationVariant>>> = {
  [DamageZone.CENTER]:     { [DamageLevel.LIGHT]: 'blast360', [DamageLevel.HEAVY]: 'blast', [DamageLevel.RUBBLE]: 'collapse' },
  [DamageZone.TOP_CENTER]: { [DamageLevel.LIGHT]: 'blast360_small', [DamageLevel.HEAVY]: 'blast360', [DamageLevel.RUBBLE]: 'crumble_corner' },
  [DamageZone.TOP_LEFT]:   { [DamageLevel.LIGHT]: 'blast360_small', [DamageLevel.RUBBLE]: 'crumble_corner' },
  // ...etc.
};
```

The FXEvent system remains structurally the same but `type` expands to include these variant identifiers.

---

## 5. New Texture Frame Selection: Zone-Aware

Currently, `currentFrame` is a single integer that BuildingRenderer looks up in the asset array. In the new system, we need to map `(zone, level)` to a frame. This can be done in two ways:

### Option A — Composite Frame Index
Treat the existing multi-frame sequence as partitioned by zone. For a 72-frame school:
- Frames 0–11: pristine → general progression
- Frames 12–35: center damage variants  
- Frames 36–59: corner/roof damage variants
- Frames 60–71: full collapse

The `BuildingRenderer` receives a structured object instead of a scalar frame index.

### Option B — Multiple Texture Atlases (Recommended)
Have separate asset directories per zone state. This requires new asset preparation:

```
static/school/
  zone_center_light.png
  zone_center_heavy.png
  zone_center_rubble.png
  zone_top_light.png
  zone_top_rubble.png
  zone_collapse.png
```

The building's visual state becomes a **composited read** of which zone assets to overlay. This is the most powerful approach but requires the most asset work.

### Option C — Dirty Flag Indexing (Least Effort, Recommended First Step)
Keep the existing frame array but make `computeFrameIndex` zone-aware by partitioning the 72 frames into "columns":

```typescript
// New DamageCalc
public static computeFrameForZonalState(zonalHealth: ZonalHealth): number {
  // Primary driver: global damage level
  const globalFraction = 1 - (zonalHealth.totalHp / zonalHealth.maxTotalHp);
  const baseFrame = Math.floor(globalFraction * 40); // 0-40 range for general damage
  
  // Offset based on center zone damage (critical zone)
  const centerZone = zonalHealth.zones.get(DamageZone.CENTER);
  const centerBonus = centerZone ? Math.floor((1 - centerZone.hp/centerZone.maxHp) * 20) : 0;
  
  // Offset based on structural collapse (roof)
  const topZone = zonalHealth.zones.get(DamageZone.TOP_CENTER);
  const topBonus = topZone ? Math.floor((1 - topZone.hp/topZone.maxHp) * 10) : 0;
  
  return Math.min(baseFrame + centerBonus + topBonus, 71);
}
```

This cleverly repurposes the existing 72 frames as a 3D space — base damage + center focus + roof focus — producing 72 distinct visual states without new assets.

---

## 6. FXEvent Expansion

`DestructionSystem` currently calls `applyDamage(entity, amount)` with no spatial context. The signature must expand:

```typescript
// New signature
public static applyZonalDamage(
  entity: Entity,
  zone: DamageZone,
  amount: number
): void

// New event types for FXEvent discriminated union
| { type: 'blast_zonal'; x: number; y: number; z: number; 
    data: { entityId: Entity; targetFrame: number; zone: DamageZone; level: DamageLevel } }
```

The spawned visual FX — debris direction, blast position, animation size — can now be guided by the hit zone:

- **CENTER** hit → large centered blast, lots of structural debris downward
- **TOP_LEFT** hit → smaller blast offset to top-left, rubble falls leftward
- **BASE** hit → dust cloud at ground level, short smoke, no flying debris

---

## 7. Asset Requirements

### What's Required Now (Do Not Lose)
- `static/school/00_pristine.png` through `71_damaged_71.png` — fully usable, just repurposed
- `static/hospital/frame_0.png` through `frame_19.png` — fully usable

### New Assets Needed
| Asset | Purpose |
|---|---|
| `static/school/zone_collapse.png` | Center-column collapse overlay |
| `static/school/zone_corner_crumble.png` | Corner crumble overlay |
| Additional blast/rubble variants | Directional blast for each zone type |

### Asset Pipeline Implications
The `partition_fire_perfect.py` and `remove_bg_batch.py` scripts are the right tools for processing new frames. New zone-specific overlays can be processed the same way.

---

## 8. Implementation Roadmap

| Phase | Scope | Effort |
|---|---|---|
| **Phase 1** | Expose hit position from Raycaster; classify into 9 zones (3×3 grid) using UV from hit; pipe `zone` into `applyDamage` | Low |
| **Phase 2** | Add `ZonalHealthComponent`; replace `DamageCalc.computeFrameIndex` with `DamageStateTree.computeZoneLevel`; each zone tracks its own HP | Medium |
| **Phase 3** | Use `DamageStateTree.computeGlobalLevel` to derive `currentFrame`; wire zone → animation variant lookup; directional FX offsets | Medium |
| **Phase 4** | Create invisible zone-hit meshes via `HitZoneManager`; wire `PlayerControlSystem` to use `HitZoneManager.getHitZone()` | Medium |
| **Phase 5** | Asset work — create zone-specific overlay sprites; load in AssetLoader; implement composited rendering in BuildingRenderer | High |

---

## 9. Files to Modify / Create

### New Files
| File | Purpose |
|---|---|
| `src/core/ZoneDefs.ts` | Zone enum, per-building `ZoneDef[]` arrays, UV definitions |
| `src/core/DamageStateTree.ts` | `computeZoneLevel()`, `computeGlobalLevel()`, transition animation lookup table |
| `src/rendering/HitZoneManager.ts` | Invisible zone mesh creation, zone-aware raycasting |

### Modified Files
| File | Changes |
|---|---|
| `src/core/Components.ts` | Add `ZonalHealth`, `ZoneState`, `DamageLevel` enum, `ZonalHealthComponent` map |
| `src/core/DamageCalc.ts` | Replace scalar `computeFrameIndex` with `computeFrameForZonalState` |
| `src/systems/DestructionSystem.ts` | Replace `applyDamage(entity, amount)` with `applyZonalDamage(entity, zone, amount)`; zone-dependent FX selection |
| `src/systems/PlayerControlSystem.ts` | Replace `RaycasterHelper.getIntersectedEntity()` with `HitZoneManager.getHitZone()` |
| `src/systems/CityGenerator.ts` | Call `HitZoneManager.createZonesForBuilding()` for each spawned building |
| `src/rendering/BuildingRenderer.ts` | Read from `ZonalHealthComponent` instead of `Health`; derive frame from zone state |
| `src/rendering/FXRenderer.ts` | Handle new `blast_zonal` event type; offset FX position by zone UV |

---

## 10. Open Questions for the User

> [!IMPORTANT]
> **Asset Strategy** — Do you plan to create new sprite assets for each zone state, or should we use the existing 72-frame sequence and remap it as a 3D address space (Option C above)? Option C is fast but limited. New assets give full creative freedom.

> [!IMPORTANT]
> **Zone Grid Resolution** — The 3×3 grid (9 zones) shown above is a reasonable starting point. Buildings could also have a 3×2 or 2×2 grid. What granularity feels right for the game's scale?

> [!NOTE]
> **Backward Compat** — We can run the old `HealthComponent` and the new `ZonalHealthComponent` in parallel during the transition, keeping the game running at all times. Both systems can write to `currentFrame` until the old one is fully replaced.

> [!NOTE]
> **Invisible Hit-Zone Mesh Overhead** — Each building with 6 zones creates 6 extra invisible meshes for raycasting. With ~200 buildings on screen, that's ~1200 invisible meshes. They're not rendered (material `visible: false`) but they do participate in raycast intersection tests. We should keep the `allZoneMeshes` array separate from the regular `intersectableObjects` to avoid bloating the current raycaster.
