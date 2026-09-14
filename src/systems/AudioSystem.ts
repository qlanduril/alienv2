import { ECS } from '../core/ECS';
import { FXEvent } from './DestructionSystem';

/**
 * AudioSystem.ts
 *
 * Cinematic Procedural WebAudio Sound Engine enforcing audio-sfx-procedural skill invariants:
 * - Lazy AudioContext creation & user gesture resume.
 * - Master gain ceiling at 0.7 (-3dB) followed by DynamicsCompressor mastering limiter to prevent digital clipping.
 * - 100% synthesized WebAudio API nodes (zero external MP3/WAV assets).
 * - Dual noise architecture: White noise for high transients + Brownian ($1/f^2$) noise for seismic mass and collapsing rubble.
 * - Soft-saturation waveshaping to eliminate harsh 8-bit Atari buzzing and introduce warm analog cinematic harmonics.
 * - Automatic AudioNode disconnection on playback end.
 */
export class AudioSystem {
  private static ctx: AudioContext | null = null;
  private static masterGain: GainNode | null = null;
  private static masterCompressor: DynamicsCompressorNode | null = null;
  private static whiteNoiseBuffer: AudioBuffer | null = null;
  private static brownNoiseBuffer: AudioBuffer | null = null;
  private static isInitialized = false;

  // Saturation curve cache for warm harmonic distortion
  private static saturationCurve: Float32Array | null = null;

  // Audio throttling to prevent rapid-fire beam tick pileups
  private static lastBuildingHitTime = 0;

  // Continuous Alien Beam Audio Nodes
  private static beamOscA: OscillatorNode | null = null;
  private static beamOscB: OscillatorNode | null = null;
  private static beamSubOsc: OscillatorNode | null = null;
  private static beamFilter: BiquadFilterNode | null = null;
  private static beamGain: GainNode | null = null;
  private static beamLFO: OscillatorNode | null = null;
  private static beamLFOGain: GainNode | null = null;
  private static beamNoiseSource: AudioBufferSourceNode | null = null;
  private static beamNoiseGain: GainNode | null = null;
  private static isBeamAudioActive = false;

  public static init() {
    // Attach lazy initialization to first user gesture
    const handleFirstGesture = () => {
      this.ensureAudioContext();
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('pointerdown', handleFirstGesture);
    window.addEventListener('keydown', handleFirstGesture);

    ECS.addSystem(this.tick.bind(this));
  }

  private static getSaturationCurve(): Float32Array {
    if (!this.saturationCurve) {
      const n = 512;
      const curve = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        const x = (i * 2) / (n - 1) - 1;
        // Soft hyperbolic tangent saturation curve for cinematic harmonic fullness
        curve[i] = Math.tanh(x * 1.5);
      }
      this.saturationCurve = curve;
    }
    return this.saturationCurve;
  }

  private static createSaturator(): WaveShaperNode | null {
    if (!this.ctx) return null;
    const shaper = this.ctx.createWaveShaper();
    shaper.curve = this.getSaturationCurve();
    shaper.oversample = 'none';
    return shaper;
  }

  private static ensureAudioContext() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }

    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtxClass();

      // Master Gain Node — capped at 0.7 (-3dB) per audio-sfx-procedural invariant
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);

      // Master Dynamics Compressor Node — transparent brickwall limiter & glue
      this.masterCompressor = this.ctx.createDynamicsCompressor();
      this.masterCompressor.threshold.setValueAtTime(-8, this.ctx.currentTime);
      this.masterCompressor.knee.setValueAtTime(10, this.ctx.currentTime);
      this.masterCompressor.ratio.setValueAtTime(8, this.ctx.currentTime);
      this.masterCompressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.masterCompressor.release.setValueAtTime(0.14, this.ctx.currentTime);

      // Signal Chain: Nodes -> masterGain -> masterCompressor -> destination
      this.masterGain.connect(this.masterCompressor);
      this.masterCompressor.connect(this.ctx.destination);

      // Pre-fill 2.0s White Noise Buffer (high transients, snaps, ionization)
      const sampleRate = this.ctx.sampleRate;
      const bufferSize = sampleRate * 2.0;

      this.whiteNoiseBuffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const whiteData = this.whiteNoiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        whiteData[i] = Math.random() * 2 - 1;
      }

      // Pre-fill 2.0s Brownian Noise Buffer (integrated 1/f² noise for thunderous rumble & falling rubble)
      this.brownNoiseBuffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const brownData = this.brownNoiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        lastOut = (lastOut + 0.04 * white) / 1.04;
        brownData[i] = lastOut * 3.5; // Normalized amplitude for solid low-frequency body
      }

      this.isInitialized = true;
      console.log('[AudioSystem] Cinematic Procedural WebAudio engine initialized.');
    } catch (err) {
      console.warn('[AudioSystem] WebAudio initialization deferred:', err);
    }
  }

  /**
   * Process gameplay FX events directly when popped from fxQueue in FXRenderer.
   * Eliminates demolition audio desync caused by inter-tick queue draining.
   */
  public static processEvent(event: FXEvent) {
    if (!this.isInitialized) {
      this.ensureAudioContext();
    }
    if (!this.ctx || this.ctx.state === 'suspended') return;

    switch (event.type) {
      case 'laser':
        this.playLaserSFX();
        break;
      case 'blast':
      case 'blast_zonal':
        this.playExplosionSFX(1.0);
        break;
      case 'blast360':
        this.playExplosionSFX(1.4);
        this.playCollapseRumbleSFX();
        break;
      case 'shake':
        if ((event.data as any).intensity > 10) {
          this.playClusterBoomSFX();
        }
        break;
      case 'building_hit':
        this.playBuildingHitSFX((event.data as any).intensity);
        break;
      case 'building_destroyed':
        this.playBuildingDestroyedSFX(!!(event.data as any).is3D);
        break;
    }
  }

  public static tick(_delta: number) {
    // Context lifecycle watchdog
    if (this.ctx && this.ctx.state === 'suspended') {
      // Will resume on next user gesture
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 1. BUILDING HIT SFX (Immediate Tactile Structural Damage Feedback)
  // Fast, punchy masonry stress crack + foundation thump (~0.12s)
  // Distinct from full destruction & explosions; throttled to prevent spam.
  // ───────────────────────────────────────────────────────────────────────────
  public static playBuildingHitSFX(intensity: 'light' | 'heavy' = 'light') {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.whiteNoiseBuffer) return;

    const now = this.ctx.currentTime;
    // Throttle minimum interval (38ms) so rapid laser/beam ticks don't crackle
    if (now - this.lastBuildingHitTime < 0.038) return;
    this.lastBuildingHitTime = now;

    const isHeavy = intensity === 'heavy';
    const duration = isHeavy ? 0.16 : 0.11;

    // Layer A: Masonry fracture transient snap (bandpass noise burst)
    const noiseSource = this.ctx.createBufferSource();
    const noiseFilter = this.ctx.createBiquadFilter();
    const noiseGain = this.ctx.createGain();

    noiseSource.buffer = this.whiteNoiseBuffer;
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(isHeavy ? 1200 : 1750, now);
    noiseFilter.Q.setValueAtTime(2.8, now);

    noiseGain.gain.setValueAtTime(isHeavy ? 0.38 : 0.28, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + (isHeavy ? 0.055 : 0.038));

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noiseSource.start(now);
    noiseSource.stop(now + 0.06);

    // Layer B: Structural foundation thump (fast descending pitch triangle)
    const thumpOsc = this.ctx.createOscillator();
    const thumpGain = this.ctx.createGain();
    const saturator = this.createSaturator();

    thumpOsc.type = 'triangle';
    thumpOsc.frequency.setValueAtTime(isHeavy ? 240 : 190, now);
    thumpOsc.frequency.exponentialRampToValueAtTime(45, now + duration);

    thumpGain.gain.setValueAtTime(isHeavy ? 0.42 : 0.32, now);
    thumpGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    if (saturator) {
      thumpOsc.connect(saturator);
      saturator.connect(thumpGain);
    } else {
      thumpOsc.connect(thumpGain);
    }
    thumpGain.connect(this.masterGain);

    thumpOsc.start(now);
    thumpOsc.stop(now + duration);

    // Layer C: Heavy stress groan (if heavy impact or level transition)
    if (isHeavy) {
      const metalOsc = this.ctx.createOscillator();
      const metalGain = this.ctx.createGain();

      metalOsc.type = 'sawtooth';
      metalOsc.frequency.setValueAtTime(540, now);
      metalOsc.frequency.exponentialRampToValueAtTime(140, now + 0.12);

      metalGain.gain.setValueAtTime(0.16, now);
      metalGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      metalOsc.connect(metalGain);
      metalGain.connect(this.masterGain);

      metalOsc.start(now);
      metalOsc.stop(now + 0.12);

      metalOsc.onended = () => {
        metalOsc.disconnect();
        metalGain.disconnect();
      };
    }

    thumpOsc.onended = () => {
      thumpOsc.disconnect();
      saturator?.disconnect();
      thumpGain.disconnect();
      noiseSource.disconnect();
      noiseFilter.disconnect();
      noiseGain.disconnect();
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 2. BUILDING DESTROYED SFX (The "Meta Check" Objective Confirmation)
  // A clean, satisfying UI/Meta confirmation cue ("Chk-Ding! ✓"):
  // - Micro tactile UI tick (notch locked)
  // - Ascending two-tone crystalline chime (E6: 1320 Hz → B6: 1980 Hz)
  // - Pristine bell decay that cleanly pierces through battle noise
  // - For 3D landmarks: Triumphant 3-note major arpeggio (C6 → E6 → C7)
  // ───────────────────────────────────────────────────────────────────────────
  public static playBuildingDestroyedSFX(is3D: boolean = false) {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;

    // Layer 1: Tactile UI Check Click / Notch Transient
    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();

    clickOsc.type = 'sine';
    clickOsc.frequency.setValueAtTime(3200, now);
    clickOsc.frequency.exponentialRampToValueAtTime(1600, now + 0.018);

    clickGain.gain.setValueAtTime(0.24, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

    clickOsc.connect(clickGain);
    clickGain.connect(this.masterGain);

    clickOsc.start(now);
    clickOsc.stop(now + 0.02);

    if (is3D) {
      // 3D Landmark Destroyed: Triumphant 3-Note Major Arpeggio Chime (C6 → E6 → C7)
      const notes = [
        { freq: 1046.5, time: 0.00, dur: 0.22, vol: 0.20 }, // C6
        { freq: 1318.5, time: 0.045, dur: 0.26, vol: 0.24 }, // E6
        { freq: 2093.0, time: 0.095, dur: 0.45, vol: 0.28 }, // C7
      ];

      notes.forEach((n) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.freq, now + n.time);

        oscGain.gain.setValueAtTime(0.001, now + n.time);
        oscGain.gain.linearRampToValueAtTime(n.vol, now + n.time + 0.008);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);

        osc.connect(oscGain);
        oscGain.connect(this.masterGain);

        osc.start(now + n.time);
        osc.stop(now + n.time + n.dur);

        osc.onended = () => {
          osc.disconnect();
          oscGain.disconnect();
        };
      });

      // Subtle warm sub-drop anchor
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(140, now);
      subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.18);
      subGain.gain.setValueAtTime(0.16, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      subOsc.connect(subGain);
      subGain.connect(this.masterGain);
      subOsc.start(now);
      subOsc.stop(now + 0.18);
      subOsc.onended = () => {
        subOsc.disconnect();
        subGain.disconnect();
      };
    } else {
      // Standard Building: Crisp 2-Tone "Check" Sound (E6: 1320 Hz → B6: 1980 Hz)
      // Note 1: Foundation Tick (E6)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1320, now);

      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.linearRampToValueAtTime(0.22, now + 0.006);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc1.connect(gain1);
      gain1.connect(this.masterGain);

      osc1.start(now);
      osc1.stop(now + 0.085);

      // Note 2: Upward Check Resolution (B6: 1980 Hz - Perfect 5th chime)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1980, now + 0.04);

      gain2.gain.setValueAtTime(0.001, now + 0.04);
      gain2.gain.linearRampToValueAtTime(0.26, now + 0.048);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc2.connect(gain2);
      gain2.connect(this.masterGain);

      osc2.start(now + 0.04);
      osc2.stop(now + 0.33);

      // Sparkle overtone (3960 Hz) for glassy crystal sheen
      const sparkleOsc = this.ctx.createOscillator();
      const sparkleGain = this.ctx.createGain();

      sparkleOsc.type = 'sine';
      sparkleOsc.frequency.setValueAtTime(3960, now + 0.04);

      sparkleGain.gain.setValueAtTime(0.001, now + 0.04);
      sparkleGain.gain.linearRampToValueAtTime(0.07, now + 0.046);
      sparkleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

      sparkleOsc.connect(sparkleGain);
      sparkleGain.connect(this.masterGain);

      sparkleOsc.start(now + 0.04);
      sparkleOsc.stop(now + 0.17);

      // Warm UI tactile anchor
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(160, now);
      subOsc.frequency.exponentialRampToValueAtTime(55, now + 0.12);
      subGain.gain.setValueAtTime(0.14, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      subOsc.connect(subGain);
      subGain.connect(this.masterGain);
      subOsc.start(now);
      subOsc.stop(now + 0.12);

      osc2.onended = () => {
        clickOsc.disconnect();
        clickGain.disconnect();
        osc1.disconnect();
        gain1.disconnect();
        osc2.disconnect();
        gain2.disconnect();
        sparkleOsc.disconnect();
        sparkleGain.disconnect();
        subOsc.disconnect();
        subGain.disconnect();
      };
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 3. CINEMATIC LASER SFX (Modern Sci-Fi Plasma Cannon)
  // Eliminates 8-bit buzz with 3 layered elements:
  // - High-voltage ionization transient snap (2200 Hz → 280 Hz)
  // - Resonant plasma core sweep through soft saturator
  // - Deep kinetic sub-thump (110 Hz → 35 Hz)
  // ───────────────────────────────────────────────────────────────────────────
  public static playLaserSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const duration = 0.10;

    // Layer 1: High transient zap snap
    const snapOsc = this.ctx.createOscillator();
    const snapFilter = this.ctx.createBiquadFilter();
    const snapGain = this.ctx.createGain();

    snapOsc.type = 'sawtooth';
    snapOsc.frequency.setValueAtTime(2200, now);
    snapOsc.frequency.exponentialRampToValueAtTime(280, now + 0.04);

    snapFilter.type = 'bandpass';
    snapFilter.frequency.setValueAtTime(1400, now);
    snapFilter.Q.setValueAtTime(2.5, now);

    snapGain.gain.setValueAtTime(0.24, now);
    snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    snapOsc.connect(snapFilter);
    snapFilter.connect(snapGain);
    snapGain.connect(this.masterGain);

    snapOsc.start(now);
    snapOsc.stop(now + 0.045);

    // Layer 2: Resonant plasma core sweep with saturation
    const plasmaOsc = this.ctx.createOscillator();
    const plasmaFilter = this.ctx.createBiquadFilter();
    const plasmaSaturator = this.createSaturator();
    const plasmaGain = this.ctx.createGain();

    plasmaOsc.type = 'sawtooth';
    plasmaOsc.frequency.setValueAtTime(950, now);
    plasmaOsc.frequency.exponentialRampToValueAtTime(110, now + duration);

    plasmaFilter.type = 'lowpass';
    plasmaFilter.frequency.setValueAtTime(1800, now);
    plasmaFilter.frequency.exponentialRampToValueAtTime(160, now + duration);
    plasmaFilter.Q.setValueAtTime(4.0, now);

    plasmaGain.gain.setValueAtTime(0.30, now);
    plasmaGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    plasmaOsc.connect(plasmaFilter);
    if (plasmaSaturator) {
      plasmaFilter.connect(plasmaSaturator);
      plasmaSaturator.connect(plasmaGain);
    } else {
      plasmaFilter.connect(plasmaGain);
    }
    plasmaGain.connect(this.masterGain);

    plasmaOsc.start(now);
    plasmaOsc.stop(now + duration);

    // Layer 3: Kinetic sub-thump (adds tactile kick)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(110, now);
    subOsc.frequency.exponentialRampToValueAtTime(35, now + 0.06);

    subGain.gain.setValueAtTime(0.22, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);

    subOsc.start(now);
    subOsc.stop(now + 0.06);

    plasmaOsc.onended = () => {
      snapOsc.disconnect();
      snapFilter.disconnect();
      snapGain.disconnect();
      plasmaOsc.disconnect();
      plasmaFilter.disconnect();
      plasmaSaturator?.disconnect();
      plasmaGain.disconnect();
      subOsc.disconnect();
      subGain.disconnect();
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 4. EXPLOSION SFX (Concussive Cinematic Detonation)
  // Replaces flat low-pass noise with:
  // - Supersonic shockwave crack front
  // - Saturated Brownian noise concussive body (thunderous fireball)
  // - Sub-bass air displacement thump
  // ───────────────────────────────────────────────────────────────────────────
  public static playExplosionSFX(volumeMult = 1.0) {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.brownNoiseBuffer || !this.whiteNoiseBuffer) return;

    const now = this.ctx.currentTime;
    const duration = 0.60;
    const v = Math.min(1.8, volumeMult);

    // Layer 1: Supersonic shockwave crack (initial 35ms burst)
    const crackSource = this.ctx.createBufferSource();
    const crackFilter = this.ctx.createBiquadFilter();
    const crackGain = this.ctx.createGain();

    crackSource.buffer = this.whiteNoiseBuffer;
    crackFilter.type = 'bandpass';
    crackFilter.frequency.setValueAtTime(1100, now);
    crackFilter.frequency.exponentialRampToValueAtTime(220, now + 0.04);
    crackFilter.Q.setValueAtTime(2.0, now);

    crackGain.gain.setValueAtTime(0.32 * v, now);
    crackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    crackSource.connect(crackFilter);
    crackFilter.connect(crackGain);
    crackGain.connect(this.masterGain);

    crackSource.start(now);
    crackSource.stop(now + 0.05);

    // Layer 2: Concussive Brownian Fireball (thick, roaring explosive body)
    const bodySource = this.ctx.createBufferSource();
    const bodyFilter = this.ctx.createBiquadFilter();
    const bodySaturator = this.createSaturator();
    const bodyGain = this.ctx.createGain();

    bodySource.buffer = this.brownNoiseBuffer;
    bodyFilter.type = 'lowpass';
    bodyFilter.frequency.setValueAtTime(360 * Math.min(1.3, v), now);
    bodyFilter.frequency.exponentialRampToValueAtTime(32, now + duration);
    bodyFilter.Q.setValueAtTime(2.2, now);

    bodyGain.gain.setValueAtTime(0.48 * v, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    bodySource.connect(bodyFilter);
    if (bodySaturator) {
      bodyFilter.connect(bodySaturator);
      bodySaturator.connect(bodyGain);
    } else {
      bodyFilter.connect(bodyGain);
    }
    bodyGain.connect(this.masterGain);

    bodySource.start(now);
    bodySource.stop(now + duration);

    // Layer 3: Sub-bass shockwave pulse (72 Hz → 20 Hz)
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(72, now);
    subOsc.frequency.exponentialRampToValueAtTime(20, now + 0.45);

    subGain.gain.setValueAtTime(0.40 * v, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);

    subOsc.start(now);
    subOsc.stop(now + 0.45);

    bodySource.onended = () => {
      crackSource.disconnect();
      crackFilter.disconnect();
      crackGain.disconnect();
      bodySource.disconnect();
      bodyFilter.disconnect();
      bodySaturator?.disconnect();
      bodyGain.disconnect();
      subOsc.disconnect();
      subGain.disconnect();
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 5. CLUSTER DETONATION SUB-BASS BOOM (Earthquake shockwave)
  // ───────────────────────────────────────────────────────────────────────────
  public static playClusterBoomSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    const saturator = this.createSaturator();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(62, now);
    osc.frequency.exponentialRampToValueAtTime(14, now + 1.1);

    oscGain.gain.setValueAtTime(0.65, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

    if (saturator) {
      osc.connect(saturator);
      saturator.connect(oscGain);
    } else {
      osc.connect(oscGain);
    }
    oscGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.1);

    osc.onended = () => {
      osc.disconnect();
      saturator?.disconnect();
      oscGain.disconnect();
    };

    // Layer heavy concussive explosion
    this.playExplosionSFX(1.7);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 6. BUILDING COLLAPSE RUMBLE (Slow seismic shifting)
  // ───────────────────────────────────────────────────────────────────────────
  public static playCollapseRumbleSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.brownNoiseBuffer) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    source.buffer = this.brownNoiseBuffer;
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, now);
    filter.frequency.exponentialRampToValueAtTime(25, now + 1.3);

    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.3);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 1.3);

    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 7. WEAPON & DEFENSE SFX UPGRADES
  // ───────────────────────────────────────────────────────────────────────────

  /** Cluster Missile Launch (Pneumatic tube + rocket ignition chirp) */
  public static playClusterLaunchSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.22);

    gain.gain.setValueAtTime(0.38, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.24);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  /** Cluster Mid-Air Dispersal Pop (Warhead separation pop & metallic dispersal) */
  public static playClusterSplitSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.whiteNoiseBuffer) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    source.buffer = this.whiteNoiseBuffer;
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1600, now);
    filter.Q.setValueAtTime(3.5, now);

    gain.gain.setValueAtTime(0.55, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 0.12);
    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  /** Jet Supersonic Flyby (Doppler shear + twin-engine roar) */
  public static playJetFlybySFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.brownNoiseBuffer) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    source.buffer = this.brownNoiseBuffer;
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.linearRampToValueAtTime(1900, now + 0.35);
    filter.frequency.exponentialRampToValueAtTime(220, now + 1.25);
    filter.Q.setValueAtTime(1.8, now);

    gain.gain.setValueAtTime(0.02, now);
    gain.gain.linearRampToValueAtTime(0.48, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.25);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 1.25);
    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  /** SAM Missile Launch (Solid rocket motor roar + thrust rise) */
  public static playMissileLaunchSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.brownNoiseBuffer) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.35);

    oscGain.gain.setValueAtTime(0.26, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.35);

    // Layer rocket motor exhaust hiss
    const noiseSource = this.ctx.createBufferSource();
    const noiseFilter = this.ctx.createBiquadFilter();
    const noiseGain = this.ctx.createGain();

    noiseSource.buffer = this.brownNoiseBuffer;
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(800, now);
    noiseGain.gain.setValueAtTime(0.3, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noiseSource.start(now);
    noiseSource.stop(now + 0.35);

    osc.onended = () => {
      osc.disconnect();
      oscGain.disconnect();
      noiseSource.disconnect();
      noiseFilter.disconnect();
      noiseGain.disconnect();
    };
  }

  /** Shield Deflection Zap (Resonant forcefield shimmer) */
  public static playShieldHitSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(680, now);
    osc1.frequency.exponentialRampToValueAtTime(140, now + 0.16);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1020, now); // Musical 5th shimmer
    osc2.frequency.exponentialRampToValueAtTime(210, now + 0.14);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.16);
    osc2.stop(now + 0.16);

    osc1.onended = () => {
      osc1.disconnect();
      osc2.disconnect();
      gain.disconnect();
    };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 8. CONTINUOUS ALIEN DEATH BEAM (Pulsing, Menacing Sci-Fi Disintegrator)
  // Dual detuned oscillators (pulsing beat frequency) + LFO filter sweep +
  // high-voltage plasma ionization crackle + deep 55 Hz sub-drone.
  // ───────────────────────────────────────────────────────────────────────────
  public static startContinuousBeamAudio() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || this.isBeamAudioActive || !this.whiteNoiseBuffer) return;

    try {
      const now = this.ctx.currentTime;
      this.isBeamAudioActive = true;

      this.beamGain = this.ctx.createGain();
      this.beamGain.gain.setValueAtTime(0.001, now);
      this.beamGain.gain.linearRampToValueAtTime(0.30, now + 0.12);

      this.beamFilter = this.ctx.createBiquadFilter();
      this.beamFilter.type = 'lowpass';
      this.beamFilter.frequency.setValueAtTime(620, now);
      this.beamFilter.Q.setValueAtTime(3.8, now);

      // LFO modulation to create an authentic pulsing alien "breathing" effect (5 Hz)
      this.beamLFO = this.ctx.createOscillator();
      this.beamLFOGain = this.ctx.createGain();
      this.beamLFO.type = 'sine';
      this.beamLFO.frequency.setValueAtTime(5.5, now);
      this.beamLFOGain.gain.setValueAtTime(220, now); // modulates filter cutoff ±220 Hz
      this.beamLFO.connect(this.beamFilter.frequency);
      this.beamLFO.start(now);

      // Dual detuned saw oscillators for menacing alien chorus phasing
      this.beamOscA = this.ctx.createOscillator();
      this.beamOscA.type = 'sawtooth';
      this.beamOscA.frequency.setValueAtTime(118, now);

      this.beamOscB = this.ctx.createOscillator();
      this.beamOscB.type = 'sawtooth';
      this.beamOscB.frequency.setValueAtTime(124, now);

      // Sub-bass oscillator for heavy foundational weight
      this.beamSubOsc = this.ctx.createOscillator();
      this.beamSubOsc.type = 'sine';
      this.beamSubOsc.frequency.setValueAtTime(55, now);

      // High-voltage plasma sizzle
      this.beamNoiseSource = this.ctx.createBufferSource();
      this.beamNoiseSource.buffer = this.whiteNoiseBuffer;
      this.beamNoiseSource.loop = true;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'highpass';
      noiseFilter.frequency.setValueAtTime(1400, now);
      this.beamNoiseGain = this.ctx.createGain();
      this.beamNoiseGain.gain.setValueAtTime(0.04, now);

      this.beamNoiseSource.connect(noiseFilter);
      noiseFilter.connect(this.beamNoiseGain);
      this.beamNoiseGain.connect(this.beamGain);

      const saturator = this.createSaturator();

      this.beamOscA.connect(this.beamFilter);
      this.beamOscB.connect(this.beamFilter);
      this.beamSubOsc.connect(this.beamFilter);

      if (saturator) {
        this.beamFilter.connect(saturator);
        saturator.connect(this.beamGain);
      } else {
        this.beamFilter.connect(this.beamGain);
      }
      this.beamGain.connect(this.masterGain);

      this.beamOscA.start(now);
      this.beamOscB.start(now);
      this.beamSubOsc.start(now);
      this.beamNoiseSource.start(now);
    } catch (err) {
      console.warn('[AudioSystem] Error starting continuous beam audio:', err);
      this.isBeamAudioActive = false;
    }
  }

  public static stopContinuousBeamAudio() {
    if (!this.isBeamAudioActive || !this.ctx) return;
    this.isBeamAudioActive = false;

    try {
      const now = this.ctx.currentTime;
      if (this.beamGain) {
        this.beamGain.gain.setValueAtTime(this.beamGain.gain.value, now);
        this.beamGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      }

      const oscA = this.beamOscA;
      const oscB = this.beamOscB;
      const subOsc = this.beamSubOsc;
      const lfo = this.beamLFO;
      const lfoGain = this.beamLFOGain;
      const noise = this.beamNoiseSource;
      const noiseGain = this.beamNoiseGain;
      const gain = this.beamGain;
      const filter = this.beamFilter;

      setTimeout(() => {
        try {
          oscA?.stop();
          oscB?.stop();
          subOsc?.stop();
          lfo?.stop();
          noise?.stop();
          oscA?.disconnect();
          oscB?.disconnect();
          subOsc?.disconnect();
          lfo?.disconnect();
          lfoGain?.disconnect();
          noise?.disconnect();
          noiseGain?.disconnect();
          filter?.disconnect();
          gain?.disconnect();
        } catch (_) {}
      }, 90);

      this.beamOscA = null;
      this.beamOscB = null;
      this.beamSubOsc = null;
      this.beamLFO = null;
      this.beamLFOGain = null;
      this.beamNoiseSource = null;
      this.beamNoiseGain = null;
      this.beamFilter = null;
      this.beamGain = null;
    } catch (err) {
      this.beamOscA = null;
      this.beamOscB = null;
      this.beamSubOsc = null;
      this.beamLFO = null;
      this.beamLFOGain = null;
      this.beamNoiseSource = null;
      this.beamNoiseGain = null;
      this.beamFilter = null;
      this.beamGain = null;
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 9. WEAPON OVERHEAT WARNING SFX
  // Dual-tone urgent sci-fi alarm + venting steam discharge
  // ───────────────────────────────────────────────────────────────────────────
  public static playOverheatSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.whiteNoiseBuffer) return;

    const now = this.ctx.currentTime;

    // Steam venting discharge
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    source.buffer = this.whiteNoiseBuffer;
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2600, now);
    filter.frequency.exponentialRampToValueAtTime(600, now + 0.45);
    filter.Q.setValueAtTime(2.2, now);

    gain.gain.setValueAtTime(0.38, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 0.45);

    // Urgent two-pulse descending alarm tone
    const toneOsc = this.ctx.createOscillator();
    const toneGain = this.ctx.createGain();

    toneOsc.type = 'triangle';
    toneOsc.frequency.setValueAtTime(784, now); // G5
    toneOsc.frequency.setValueAtTime(587, now + 0.12); // D5

    toneGain.gain.setValueAtTime(0.24, now);
    toneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

    toneOsc.connect(toneGain);
    toneGain.connect(this.masterGain);

    toneOsc.start(now);
    toneOsc.stop(now + 0.32);

    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
      toneOsc.disconnect();
      toneGain.disconnect();
    };
  }
}
