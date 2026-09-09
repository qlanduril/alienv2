import { ECS } from '../core/ECS';
import { FXEvent } from './DestructionSystem';

/**
 * AudioSystem.ts
 *
 * Procedural WebAudio sound engine enforcing audio-sfx-procedural skill invariants:
 * - Lazy AudioContext creation & user gesture resume.
 * - Master gain ceiling at 0.7 to prevent clipping.
 * - Zero external MP3/WAV assets (100% synthesized WebAudio API nodes).
 * - Automatic AudioNode disconnection on playback end.
 */
export class AudioSystem {
  private static ctx: AudioContext | null = null;
  private static masterGain: GainNode | null = null;
  private static noiseBuffer: AudioBuffer | null = null;
  private static isInitialized = false;

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
      this.masterGain.connect(this.ctx.destination);

      // Pre-fill 1.0s stereo white noise buffer for explosion & rumble synthesis
      const bufferSize = this.ctx.sampleRate * 1.0;
      this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      this.isInitialized = true;
      console.log('[AudioSystem] Procedural WebAudio engine initialized.');
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

    if (event.type === 'laser') {
      this.playLaserSFX();
    } else if (event.type === 'blast' || event.type === 'blast_zonal') {
      this.playExplosionSFX(1.0);
    } else if (event.type === 'blast360') {
      this.playExplosionSFX(1.4);
      this.playCollapseRumbleSFX();
    } else if (event.type === 'shake' && (event.data as any).intensity > 10) {
      // High intensity shake = cluster explosion sub-bass boom
      this.playClusterBoomSFX();
    }
  }

  public static tick(_delta: number) {
    // Context lifecycle watchdog
    if (this.ctx && this.ctx.state === 'suspended') {
      // Will resume on next user gesture
    }
  }

  // ─── Laser Fire Synthesizer ───────────────────────────────────────────────
  // Sawtooth oscillator frequency sweep: 800 Hz → 150 Hz over 0.08 seconds
  public static playLaserSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.08);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.08);

    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // ─── Explosion Noise Synthesizer ──────────────────────────────────────────
  // Filtered noise buffer + biquad low-pass decay: 120 Hz → 20 Hz over 0.6s
  public static playExplosionSFX(volumeMult = 1.0) {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    source.buffer = this.noiseBuffer;

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160 * volumeMult, now);
    filter.frequency.exponentialRampToValueAtTime(20, now + 0.5);

    gain.gain.setValueAtTime(0.5 * volumeMult, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 0.55);

    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  // ─── Cluster Explosion Sub-Bass Synthesizer ────────────────────────────────
  // Sine sub-bass drop 55 Hz → 15 Hz + noise impact tail
  public static playClusterBoomSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.exponentialRampToValueAtTime(15, now + 0.9);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.95);

    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };

    // Layer heavy low-pass noise blast
    this.playExplosionSFX(1.8);
  }

  // ─── Building Collapse Rumble Synthesizer ─────────────────────────────────
  // Sine oscillator low-frequency sweep 45 Hz → 15 Hz over 1.2s per domain spec
  public static playCollapseRumbleSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(45, now);
    osc.frequency.exponentialRampToValueAtTime(15, now + 1.2);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.2);

    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // ─── Cluster Launch Synthesizer ──────────────────────────────────────────
  public static playClusterLaunchSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.25);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // ─── Cluster Mid-Air Dispersal Pop ───────────────────────────────────────
  public static playClusterSplitSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    source.buffer = this.noiseBuffer;
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(4.0, now);

    gain.gain.setValueAtTime(0.6, now);
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

  // ─── Jet Supersonic Flyby Whoosh ────────────────────────────────────────
  public static playJetFlybySFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain || !this.noiseBuffer) return;

    const now = this.ctx.currentTime;
    const source = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    source.buffer = this.noiseBuffer;
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, now);
    filter.frequency.linearRampToValueAtTime(1800, now + 0.4);
    filter.frequency.exponentialRampToValueAtTime(200, now + 1.2);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0.45, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start(now);
    source.stop(now + 1.2);
    source.onended = () => {
      source.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  }

  // ─── SAM Missile Launch Rocket Whoosh ────────────────────────────────────
  public static playMissileLaunchSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.35);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.35);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }

  // ─── Player Shield Deflection Zap ────────────────────────────────────────
  public static playShieldHitSFX() {
    this.ensureAudioContext();
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(550, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.15);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  }
}
