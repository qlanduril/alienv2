import { InputManager } from './InputManager';
import { PlayerControlSystem } from '../systems/PlayerControlSystem';
import { ECS } from '../core/ECS';
import { PlayerTagComponent, WeaponComponent } from '../core/Components';

export class MobileControls {
  private static initialized = false;
  private static container: HTMLElement | null = null;
  private static joystickKnob: HTMLElement | null = null;

  // Joystick touch tracking
  private static activeTouchId: number | null = null;
  private static joyCenterX = 0;
  private static joyCenterY = 0;
  private static readonly JOY_MAX_RADIUS = 42; // Max pixel offset from center

  public static isTouchDevice(): boolean {
    if (typeof window === 'undefined') return false;
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)
    );
  }

  public static init(): void {
    if (this.initialized) return;
    this.initialized = true;

    const isMobile = this.isTouchDevice();
    InputManager.isMobile = isMobile;

    if (!isMobile) {
      // Not a touch device, skip creating virtual joystick overlay
      return;
    }

    this.buildControlsDOM();
    this.attachJoystickEvents();
  }

  private static buildControlsDOM(): void {
    this.container = document.createElement('div');
    this.container.id = 'mobile-controls';
    this.container.style.position = 'fixed';
    this.container.style.inset = '0';
    this.container.style.pointerEvents = 'none';
    this.container.style.zIndex = '1500';
    this.container.style.userSelect = 'none';
    (this.container.style as any).webkitUserSelect = 'none';
    this.container.style.touchAction = 'none';

    // 1. Virtual Joystick Zone (Bottom Left)
    const joyZone = document.createElement('div');
    joyZone.id = 'mobile-joystick-zone';
    joyZone.style.position = 'absolute';
    joyZone.style.bottom = '26px';
    joyZone.style.left = '26px';
    joyZone.style.width = '116px';
    joyZone.style.height = '116px';
    joyZone.style.borderRadius = '50%';
    joyZone.style.background = 'radial-gradient(circle, rgba(15, 23, 42, 0.65) 0%, rgba(3, 7, 18, 0.85) 100%)';
    joyZone.style.border = '2px solid rgba(56, 189, 248, 0.45)';
    joyZone.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 16px rgba(56, 189, 248, 0.2)';
    joyZone.style.pointerEvents = 'auto';
    joyZone.style.touchAction = 'none';
    joyZone.style.display = 'flex';
    joyZone.style.justifyContent = 'center';
    joyZone.style.alignItems = 'center';

    // Center rest ring indicator
    const joyCenterRing = document.createElement('div');
    joyCenterRing.style.position = 'absolute';
    joyCenterRing.style.width = '24px';
    joyCenterRing.style.height = '24px';
    joyCenterRing.style.borderRadius = '50%';
    joyCenterRing.style.border = '1px dashed rgba(56, 189, 248, 0.35)';
    joyCenterRing.style.pointerEvents = 'none';
    joyZone.appendChild(joyCenterRing);

    // Joystick thumb knob
    this.joystickKnob = document.createElement('div');
    this.joystickKnob.id = 'mobile-joystick-knob';
    this.joystickKnob.style.width = '48px';
    this.joystickKnob.style.height = '48px';
    this.joystickKnob.style.borderRadius = '50%';
    this.joystickKnob.style.background = 'radial-gradient(circle at 35% 35%, #38bdf8 0%, #0284c7 60%, #0369a1 100%)';
    this.joystickKnob.style.boxShadow = '0 0 16px rgba(56, 189, 248, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.6)';
    this.joystickKnob.style.border = '1px solid rgba(255, 255, 255, 0.5)';
    this.joystickKnob.style.pointerEvents = 'none';
    this.joystickKnob.style.transition = 'transform 0.05s ease-out';
    joyZone.appendChild(this.joystickKnob);

    this.container.appendChild(joyZone);

    // 2. Action Buttons Dock (Bottom Right)
    const actionDock = document.createElement('div');
    actionDock.id = 'mobile-action-dock';
    actionDock.style.position = 'absolute';
    actionDock.style.bottom = '26px';
    actionDock.style.right = '26px';
    actionDock.style.display = 'flex';
    actionDock.style.flexDirection = 'column';
    actionDock.style.alignItems = 'flex-end';
    actionDock.style.gap = '14px';
    actionDock.style.pointerEvents = 'auto';

    // Primary Fire Button (Death Ray)
    const fireBtn = document.createElement('button');
    fireBtn.id = 'mobile-fire-btn';
    fireBtn.setAttribute('aria-label', 'Fire Primary Laser');
    fireBtn.style.width = '64px';
    fireBtn.style.height = '64px';
    fireBtn.style.borderRadius = '50%';
    fireBtn.style.background = 'radial-gradient(circle at 35% 35%, #0ea5e9 0%, #0284c7 70%, #0369a1 100%)';
    fireBtn.style.border = '2px solid rgba(255, 255, 255, 0.6)';
    fireBtn.style.boxShadow = '0 4px 18px rgba(14, 165, 233, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)';
    fireBtn.style.color = '#ffffff';
    fireBtn.style.fontFamily = 'system-ui, sans-serif';
    fireBtn.style.fontSize = '12px';
    fireBtn.style.fontWeight = '800';
    fireBtn.style.letterSpacing = '0.5px';
    fireBtn.style.cursor = 'pointer';
    fireBtn.style.touchAction = 'none';
    fireBtn.innerText = '⚡ RAY';

    // Secondary Bomb Button (Cluster)
    const bombBtn = document.createElement('button');
    bombBtn.id = 'mobile-bomb-btn';
    bombBtn.setAttribute('aria-label', 'Fire Cluster Bomb');
    bombBtn.style.width = '52px';
    bombBtn.style.height = '52px';
    bombBtn.style.borderRadius = '50%';
    bombBtn.style.background = 'radial-gradient(circle at 35% 35%, #f59e0b 0%, #d97706 70%, #b45309 100%)';
    bombBtn.style.border = '2px solid rgba(255, 255, 255, 0.5)';
    bombBtn.style.boxShadow = '0 4px 14px rgba(245, 158, 11, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.5)';
    bombBtn.style.color = '#000000';
    bombBtn.style.fontFamily = 'system-ui, sans-serif';
    bombBtn.style.fontSize = '11px';
    bombBtn.style.fontWeight = '900';
    bombBtn.style.cursor = 'pointer';
    bombBtn.style.touchAction = 'none';
    bombBtn.innerText = '💣 BOMB';

    // Mobile Autopilot Toggle (Mini circular button)
    const flightBtn = document.createElement('button');
    flightBtn.id = 'mobile-flight-btn';
    flightBtn.setAttribute('aria-label', 'Toggle Flight Autopilot');
    flightBtn.style.width = '42px';
    flightBtn.style.height = '42px';
    flightBtn.style.borderRadius = '50%';
    flightBtn.style.background = 'rgba(15, 23, 42, 0.8)';
    flightBtn.style.backdropFilter = 'blur(6px)';
    flightBtn.style.border = '1.5px solid rgba(56, 189, 248, 0.5)';
    flightBtn.style.color = '#38bdf8';
    flightBtn.style.fontSize = '16px';
    flightBtn.style.cursor = 'pointer';
    flightBtn.style.touchAction = 'none';
    flightBtn.innerText = '🛸';
    flightBtn.onclick = (e) => {
      e.stopPropagation();
      PlayerControlSystem.mouseFollowMode = !PlayerControlSystem.mouseFollowMode;
      flightBtn.style.background = PlayerControlSystem.mouseFollowMode ? 'rgba(16, 185, 129, 0.3)' : 'rgba(15, 23, 42, 0.8)';
      flightBtn.style.borderColor = PlayerControlSystem.mouseFollowMode ? '#10b981' : 'rgba(56, 189, 248, 0.5)';
    };

    // Continuous Mega Beam Button
    const beamBtn = document.createElement('button');
    beamBtn.id = 'mobile-beam-btn';
    beamBtn.setAttribute('aria-label', 'Fire Continuous Death Ray');
    beamBtn.style.width = '58px';
    beamBtn.style.height = '58px';
    beamBtn.style.borderRadius = '50%';
    beamBtn.style.background = 'radial-gradient(circle at 35% 35%, #06b6d4 0%, #0891b2 70%, #0e7490 100%)';
    beamBtn.style.border = '2px solid rgba(255, 255, 255, 0.6)';
    beamBtn.style.boxShadow = '0 4px 16px rgba(6, 182, 212, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)';
    beamBtn.style.color = '#ffffff';
    beamBtn.style.fontFamily = 'system-ui, sans-serif';
    beamBtn.style.fontSize = '11px';
    beamBtn.style.fontWeight = '900';
    beamBtn.style.cursor = 'pointer';
    beamBtn.style.touchAction = 'none';
    beamBtn.innerText = '⚡ BEAM';

    // Attach Action Button Handlers (multi-touch friendly)
    fireBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      for (const entity of ECS.entities) {
        if (PlayerTagComponent.has(entity)) {
          const w = WeaponComponent.get(entity);
          if (w) w.currentSelected = 'laser';
          break;
        }
      }
      InputManager.setVirtualFirePrimary(true);
      fireBtn.style.transform = 'scale(0.92)';
    }, { passive: false });

    const stopFire = (e: Event) => {
      e.preventDefault();
      InputManager.setVirtualFirePrimary(false);
      fireBtn.style.transform = 'scale(1.0)';
    };
    fireBtn.addEventListener('touchend', stopFire, { passive: false });
    fireBtn.addEventListener('touchcancel', stopFire, { passive: false });

    beamBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      for (const entity of ECS.entities) {
        if (PlayerTagComponent.has(entity)) {
          const w = WeaponComponent.get(entity);
          if (w) w.currentSelected = 'beam';
          break;
        }
      }
      InputManager.setVirtualFirePrimary(true);
      beamBtn.style.transform = 'scale(0.92)';
    }, { passive: false });

    const stopBeam = (e: Event) => {
      e.preventDefault();
      InputManager.setVirtualFirePrimary(false);
      beamBtn.style.transform = 'scale(1.0)';
    };
    beamBtn.addEventListener('touchend', stopBeam, { passive: false });
    beamBtn.addEventListener('touchcancel', stopBeam, { passive: false });

    bombBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      InputManager.setVirtualFireSecondary(true);
      bombBtn.style.transform = 'scale(0.92)';
    }, { passive: false });

    const stopBomb = (e: Event) => {
      e.preventDefault();
      InputManager.setVirtualFireSecondary(false);
      bombBtn.style.transform = 'scale(1.0)';
    };
    bombBtn.addEventListener('touchend', stopBomb, { passive: false });
    bombBtn.addEventListener('touchcancel', stopBomb, { passive: false });

    actionDock.appendChild(flightBtn);
    actionDock.appendChild(bombBtn);
    actionDock.appendChild(beamBtn);
    actionDock.appendChild(fireBtn);

    this.container.appendChild(actionDock);
    document.body.appendChild(this.container);
  }

  private static attachJoystickEvents(): void {
    const joyZone = document.getElementById('mobile-joystick-zone');
    if (!joyZone) return;

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      if (this.activeTouchId !== null) return; // already tracking a finger

      const touch = e.changedTouches[0];
      this.activeTouchId = touch.identifier;

      const rect = joyZone.getBoundingClientRect();
      this.joyCenterX = rect.left + rect.width / 2;
      this.joyCenterY = rect.top + rect.height / 2;

      this.updateJoystick(touch.clientX, touch.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (this.activeTouchId === null) return;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.activeTouchId) {
          this.updateJoystick(touch.clientX, touch.clientY);
          break;
        }
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (this.activeTouchId === null) return;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.activeTouchId) {
          this.resetJoystick();
          break;
        }
      }
    };

    joyZone.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: false });
    window.addEventListener('touchcancel', onTouchEnd, { passive: false });
  }

  private static updateJoystick(clientX: number, clientY: number): void {
    let dx = clientX - this.joyCenterX;
    let dy = clientY - this.joyCenterY;
    const distance = Math.hypot(dx, dy);

    if (distance > this.JOY_MAX_RADIUS) {
      dx = (dx / distance) * this.JOY_MAX_RADIUS;
      dy = (dy / distance) * this.JOY_MAX_RADIUS;
    }

    if (this.joystickKnob) {
      this.joystickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
    }

    // Normalized screen-space direction [-1.0, 1.0]
    const normX = dx / this.JOY_MAX_RADIUS;
    const normY = dy / this.JOY_MAX_RADIUS;

    InputManager.setVirtualJoystick(normX, normY);
  }

  private static resetJoystick(): void {
    this.activeTouchId = null;
    if (this.joystickKnob) {
      this.joystickKnob.style.transform = 'translate(0px, 0px)';
    }
    InputManager.setVirtualJoystick(0, 0);
  }
}
