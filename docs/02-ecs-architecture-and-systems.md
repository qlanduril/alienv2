# Technical Architecture: Decoupled ECS Engine & Systems

## 1. Architectural Philosophy: Pure ECS Decoupling

ALINV-3D uses a strict **Entity-Component-System (ECS)** design pattern implemented in [`src/core/ECS.ts`](file:///home/berkans/development/alienv2/src/core/ECS.ts).

```
                      ┌────────────────────────────────────────┐
                      │             ECS Registry               │
                      │  Entities: Set<number> (1, 2, 3...)    │
                      └──────────────────┬─────────────────────┘
                                         │
               ┌─────────────────────────┼─────────────────────────┐
               ▼                         ▼                         ▼
    ┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
    │ PositionComponent  │    │ ZonalHealthComp    │    │ RenderStateComp    │
    │ Map<Entity, Pos>   │    │ Map<Entity, ZH>    │    │ Map<Entity, RS>    │
    └────────────────────┘    └────────────────────┘    └────────────────────┘
               │                         │                         │
               └─────────────────────────┼─────────────────────────┘
                                         │ Reads/Mutates Data
                                         ▼
                      ┌────────────────────────────────────────┐
                      │             Engine Systems             │
                      │  PlayerControlSystem  DestructionSystem│
                      │  ParticleSimSystem    AudioSystem      │
                      └──────────────────┬─────────────────────┘
                                         │ Emits FX & Transforms
                                         ▼
                      ┌────────────────────────────────────────┐
                      │          Three.js Renderers            │
                      │  BuildingRenderer  ParticleRenderer    │
                      │  FXRenderer        SceneManager        │
                      └────────────────────────────────────────┘
```

---

## 2. Component Schemas & Data Stores

All entity data is stored in static TypeScript `Map<Entity, Component>` instances in [`src/core/Components.ts`](file:///home/berkans/development/alienv2/src/core/Components.ts):

### Position Component
```typescript
export interface Position {
  worldX: number;
  worldY: number; // Represents Three.js Z axis (ground depth)
  worldZ: number; // Altitude above ground
}
export const PositionComponent = new Map<Entity, Position>();
```

### Zonal Health Component
```typescript
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
  globalDamageLevel: DamageLevel;
}
export const ZonalHealthComponent = new Map<Entity, ZonalHealth>();
```

### Render State Component
```typescript
export interface RenderState {
  meshId: string;
  texturePrefix: string;
  currentFrame: number;
  visible: boolean;
  opacity: number;
}
export const RenderStateComponent = new Map<Entity, RenderState>();
```

---

## 3. System Tick Execution Order

Systems execute sequentially inside `ECS.tick(delta)` on every frame tick before rendering:

```mermaid
sequenceDiagram
    autonumber
    participant Loop as Main Loop (main.ts)
    participant ECS as ECS Engine Core
    participant PlayerSys as PlayerControlSystem
    participant DestSys as DestructionSystem
    participant PartSys as ParticleSimSystem
    participant AudioSys as AudioSystem
    participant Render as Three.js Renderers

    Loop->>ECS: ECS.tick(delta)
    ECS->>PlayerSys: Tick UFO input & weapon fire
    ECS->>DestSys: Tick ambient fire/smoke & cluster scans
    ECS->>PartSys: Tick particle physics & bounce step
    ECS->>AudioSys: Process fxQueue & synthesize sound
    Loop->>Render: CameraController.tick(delta)
    Loop->>Render: BuildingRenderer.tick(delta)
    Loop->>Render: ParticleRenderer.tick(delta)
    Loop->>Render: FXRenderer.tick(delta)
    Loop->>Render: SceneManager.render()
```

---

## 4. Spatial Hash Grid (`SpatialGrid.ts`) & Radial Queries

To avoid $O(N^2)$ collision checks during explosion blasts and raycasting, [`src/core/SpatialGrid.ts`](file:///home/berkans/development/alienv2/src/core/SpatialGrid.ts) partitions the world into a 2D spatial hash grid:

$$\text{cellX} = \lfloor \frac{worldX}{\text{CELL\_SIZE}} \rfloor, \quad \text{cellZ} = \lfloor \frac{worldY}{\text{CELL\_SIZE}} \rfloor \quad (\text{CELL\_SIZE} = 32)$$

- **Grid Key**: Hash function $K(\text{cX}, \text{cZ}) = \text{cX} + \text{cZ} \times 1000$.
- **Radial Query Engine**: `SpatialGrid.queryRadius(x, y, radius)` evaluates candidate entities in overlapping grid cells, reducing candidate checks by over 90%.
- **Collateral Damage System ([`DestructionSystem.ts`](file:///home/berkans/development/alienv2/src/systems/DestructionSystem.ts))**: `applyCollateralDamage(originEntity, x, z, radius, maxDamage)` uses `queryRadius` to apply distance-attenuated damage falloff ($1 - \frac{dist}{radius}$) to surrounding structures upon skyscraper demolition.

---

## 5. Zero-GC Memory Management Rules

1. **Static Pre-Allocation**: Components use primitive structures. System tick loops do NOT allocate new `THREE.Vector3` or temporary arrays.
2. **Entity Cleanup Protocol**: `ECS.destroyEntity(entity)` removes the ID from `ECS.entities`. Associated renderers listen to component deletions and dispose of geometries/materials during render cleanup.

---
*Back to [Documentation Sitemap](file:///home/berkans/development/alienv2/docs/README.md)*
