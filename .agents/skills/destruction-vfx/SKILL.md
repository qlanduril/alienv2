---
name: destruction-vfx
description: Govern explosion animations, particle physics pools, visual juice flinch transforms, scorch decals, laser effects, and screen shake.
---

# SKILL: Destruction Systems & Visual FX

## 1. Domain Scope & Responsibilities
Governs destruction events, 150ms visual juice flinch transforms, explosion billboard animations, particle/debris physics simulation pools, laser beam FX, and ground decal generation.

## 2. Mathematical Invariants & Constants
- **150ms Visual Juice Pipeline:**
  - `HEAVY` hit: Scale X multiplier `1.05` (+5%), Scale Y multiplier `0.92` (-8%), emissive flash time `0.15s` (`0xffffff`), shudder amplitude `0.45`.
  - `LIGHT` hit: Scale X `1.025`, Scale Y `0.96`, flash time `0.08s` (`0xffeedd`).
  - Shudder decay rate: `8×` per second. Spring bounce frequency: $2\pi \times 3$ Hz.
- **Physics Particle Pools:**
  - Particle Pool: `maxParticles = 500` (sparks, dust, smoke).
  - Debris Pool: `maxDebris = 300` (brick chunks). Gravity $= 35.0$, bounce restitution $= 0.35$, friction $= 0.7$, max bounces $= 5$.
  - Free-list index stacks (`freeParticleIndices`, `freeDebrisIndices`) guarantee $O(1)$ allocation without GC heap allocations.
- **Explosion Peak-Frame Swap:**
  - `PEAK_FRAME_BLAST = 2` (frame 2 of 11).
  - `PEAK_FRAME_BLAST360 = 3` (frame 3 of 7).
  - Texture swaps trigger at peak explosion frame via `DestructionSystem.executeTextureSwap()`.
- **Decal Limits:** `MAX_ACTIVE_DECALS = 50` on Layer 2 (`Y = 0.02`).

## 3. Code & File Dependencies
- [DestructionSystem.ts](file:///home/berkans/development/alienv2/src/systems/DestructionSystem.ts) — Damage calculation, zonal health reduction, and `fxQueue` message bus.
- [FXRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/FXRenderer.ts) — Animated blast/fire sprite pools, shockwave rings, laser lines, point lights, and `fxQueue` draining.
- [PhysicsModel.ts](file:///home/berkans/development/alienv2/src/core/PhysicsModel.ts) — Pre-allocated particle/debris pools and floor bounce physics loop.
- [ParticleSimSystem.ts](file:///home/berkans/development/alienv2/src/systems/ParticleSimSystem.ts) — Particle simulation tick and burst spawning facade.
- [ParticleRenderer.ts](file:///home/berkans/development/alienv2/src/rendering/ParticleRenderer.ts) — Three.js Point/Instanced sync for physics debris.
- [DecalManager.ts](file:///home/berkans/development/alienv2/src/rendering/TileSystem/DecalManager.ts) — Canvas-generated scorch and crater ground decals.

## 4. Implementation Rules & Best Practices
- **Use `fxQueue` Message Bus:** Always push events to `DestructionSystem.fxQueue` from logic code instead of calling `FXRenderer` directly.
- **Synchronize Texture Swaps:** Defer building damage texture swaps until the explosion reaches peak opacity/frame to maintain visual continuity.
- **Recycle FX Sprites:** Use pre-allocated `AnimatedSprite3D` instances from `inactiveSprites` pool in `FXRenderer`. Never create new textures or materials inside tick loops.

## 5. Anti-Patterns (Strict Prohibitions)
- ❌ **Mid-Loop Heap Allocations:** NEVER instantiate `new THREE.Mesh()`, `new THREE.Material()`, or array objects inside `tick()` frame loops.
- ❌ **Instant Texture Swaps:** NEVER swap building damage frames immediately before explosion visual FX spawn.
- ❌ **Unbounded Decal Spawning:** NEVER add decals without enforcing the `MAX_ACTIVE_DECALS` fifo eviction cap.

## 6. Verification Checklist
- Strike a building with laser weapon and verify 150ms squash/shudder flinch effect.
- Confirm explosion sprite plays, peaks, and triggers texture swap smoothly.
- Verify debris bricks bounce on ground plane and dissipate after 5 bounces.
