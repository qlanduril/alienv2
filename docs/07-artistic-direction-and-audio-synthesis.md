# Artistic Direction & Procedural WebAudio SFX Engine

## 1. Visual Art Direction & Aesthetic Vision

ALINV-3D features a **retro-futuristic 2.5D hybrid aesthetic** blending pre-rendered 3D isometric sprites, high-contrast neon visual FX, and modern WebGL post-processing.

```
       ┌─────────────────────────────────────────────────────────┐
       │                 Retro-Futuristic Palette                │
       │                                                         │
       │   Night Background:   #0D1B2A (Deep Midnight Blue)     │
       │   Atmospheric Fog:    #1A1A24 (Dark Industrial Haze)   │
       │   Plasma Beam FX:     #00FFFF (Cyan Neon Glow)         │
       │   Explosion Sparks:   #FFA500 / #FF4500 (Orange Fire)  │
       │   HUD Interface:      #00F0FF (Holographic Cyan)      │
       └─────────────────────────────────────────────────────────┘
```

### Building Palette Strategy
Debris particle pools inherit specific color palettes depending on targeted building types:
- **Hospital Civic (`1`)**: Clean white, light grey, medical red cross (`[0xffffff, 0xdddddd, 0xaaaaaa, 0xff4444]`).
- **School Civic (`3`)**: Warm brick red, tan, mortar grey (`[0xd2b48c, 0xaaaaaa, 0x888888, 0x5c4033]`).
- **Commercial & Skyscrapers**: Concrete grey, dark steel, rust brown (`[0x884422, 0xaa5533, 0x663311]`).

---

## 2. Lighting, Shadows, & Post-Processing

The WebGL scene ([`SceneManager.ts`](file:///home/berkans/development/alienv2/src/rendering/SceneManager.ts)) is lit with a dual-light setup and post-processing stack:

### Lighting Configuration
- **Ambient Light**: `0x4a5568` at $1.6$ intensity (soft industrial fill).
- **Directional Shadow Light**: `0xfff5e6` at $2.5$ intensity positioned at $(400, 600, 200)$, casting PCF soft shadows (`SHADOW_MAP_SIZE = 2048`, `bias = -0.0005`).
- **Atmospheric Fog**: `FogExp2` (`0x1a1a24`, density $= 0.0002$).

### Post-Processing Pipeline
1. **RenderPass**: Standard scene WebGL render.
2. **UnrealBloomPass**: Strength $= 0.4$, Radius $= 0.35$, Threshold $= 0.9$ (gives plasma lasers and fire sparks a vibrant halo glow).
3. **OutputPass**: Tone mapping and color space correction.

---

## 3. Procedural WebAudio SFX Engine

In accordance with procedural audio standards, [`AudioSystem.ts`](file:///home/berkans/development/alienv2/src/systems/AudioSystem.ts) synthesizes 100% of game sound effects in real time using the native browser **WebAudio API**.

> **Zero External Audio Assets**: The project contains 0 WAV or MP3 audio files.

```mermaid
graph TD
    subgraph User Interaction
        Gesture[Pointer Down / Keydown] --> ResumeCtx[AudioContext.resume()]
    end

    subgraph Audio Context Architecture
        MasterGain["Master Gain Node (Capped at 0.7 / -3dB)"] --> Destination[Audio Destination / Speakers]
        NoiseBuffer["1.0s Pre-filled Stereo White Noise Buffer"]
    end

    subgraph Synthesizer Nodes
        LaserOsc["Sawtooth Oscillator (800 Hz -> 150 Hz)"] --> LaserGain[Exponential Decay Gain]
        LaserGain --> MasterGain

        NoiseSource[BufferSourceNode] --> LowPassFilter["Biquad LowPass (160 Hz -> 20 Hz)"]
        NoiseBuffer --> NoiseSource
        LowPassFilter --> ExplosionGain[Exponential Decay Gain]
        ExplosionGain --> MasterGain

        SubOsc["Sine Oscillator (65 Hz -> 15 Hz)"] --> SubGain[Sub-Bass Boom Gain]
        SubGain --> MasterGain
    end
```

---

## 4. Synthesizer Algorithms & Formulas

### 1. Laser Beam Fire Synthesizer
- **Waveform**: `sawtooth` oscillator.
- **Frequency Envelope**: Exponential sweep $f(t): 800\text{Hz} \rightarrow 150\text{Hz}$ over $0.08\text{s}$.
- **Gain Envelope**: $g(t): 0.35 \rightarrow 0.001$ exponential decay over $0.08\text{s}$.

### 2. Explosion Noise Synthesizer
- **Source**: Filtered white noise buffer.
- **Filter**: `biquad` low-pass filter sweeping $f(t): 160\text{Hz} \rightarrow 20\text{Hz}$ over $0.5\text{s}$.
- **Gain Envelope**: $g(t): 0.5 \times \text{vol} \rightarrow 0.001$ over $0.55\text{s}$.

### 3. Cluster Explosion Sub-Bass Synthesizer
- **Waveform**: `sine` sub-bass oscillator.
- **Frequency Envelope**: $f(t): 65\text{Hz} \rightarrow 15\text{Hz}$ over $0.9\text{s}$.
- **Gain Envelope**: $g(t): 0.7 \rightarrow 0.001$ over $0.95\text{s}$.

### Master Safety Ceiling
Master volume is strictly clamped to $0.7$ ($-3\text{dB}$) to prevent clipping during simultaneous multi-building explosions.

---
*Back to [Documentation Sitemap](file:///home/berkans/development/alienv2/docs/README.md)*
