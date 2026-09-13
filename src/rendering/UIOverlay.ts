import * as THREE from 'three';
import { ShowcaseManager } from '../systems/ShowcaseManager';
import { HealthComponent, RenderStateComponent, ZonalHealthComponent, WeaponComponent, PlayerTagComponent } from '../core/Components';
import { Entity, ECS } from '../core/ECS';
import { ScoreSystem } from '../systems/ScoreSystem';
import { DefenseSystem } from '../systems/DefenseSystem';
import { WeaponSystem } from '../systems/WeaponSystem';
import { PlayerControlSystem } from '../systems/PlayerControlSystem';

// --- UIOverlay Constants ---
const ZERO_VALUE = 0;
const FULL_PERCENT = 100;
const HALF_NDC_FACTOR = 0.5;

// Health Threshold & Color Constants
const HEALTH_HIGH_THRESHOLD = 60;
const HEALTH_MEDIUM_THRESHOLD = 25;
const DEFAULT_FALLBACK_HP = 100;

// Button Action & Showcase Damage Constants
const SHOWCASE_DAMAGE_PERCENT = 25;

// NDC Projection & Label Offsets
const LABEL_HEIGHT_FACTOR = 0.8;
const LABEL_Y_SCREEN_OFFSET_PX = 12;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export class UIOverlay {
  private static scoreElement: HTMLElement;
  private static flashOverlay: HTMLElement;
  private static controlPanel: HTMLElement;
  private static modeToggleButton: HTMLButtonElement;
  private static showcaseTools: HTMLElement;
  private static targetInfoPanel: HTMLElement;
  private static labelsContainer: HTMLElement;
  private static targetReticle: HTMLElement;

  private static labelElements: Map<Entity, HTMLElement> = new Map();

  // Futuristic Command Center HUD Elements
  private static scoreValEl: HTMLElement | null = null;
  private static highValEl: HTMLElement | null = null;
  private static comboBadgeEl: HTMLElement | null = null;
  private static destructValEl: HTMLElement | null = null;
  private static destructBarEl: HTMLElement | null = null;
  private static shieldValEl: HTMLElement | null = null;
  private static shieldBarEl: HTMLElement | null = null;
  private static hullValEl: HTMLElement | null = null;
  private static hullBarEl: HTMLElement | null = null;
  private static weaponBtn1: HTMLButtonElement | null = null;
  private static weaponBtn2: HTMLButtonElement | null = null;
  private static clusterOverlayEl: HTMLElement | null = null;
  private static autopilotBtn: HTMLButtonElement | null = null;
  private static popupsContainer: HTMLElement | null = null;
  private static currentDestructionPercent: number = 0;
  private static tempVec = new THREE.Vector3();

  public static init() {
    // 1. Top HUD Container
    const hudContainer = document.createElement('div');
    hudContainer.style.position = 'fixed';
    hudContainer.style.top = '14px';
    hudContainer.style.left = '14px';
    hudContainer.style.right = '14px';
    hudContainer.style.display = 'flex';
    hudContainer.style.justifyContent = 'space-between';
    hudContainer.style.alignItems = 'flex-start';
    hudContainer.style.color = 'white';
    hudContainer.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    hudContainer.style.zIndex = '1000';
    hudContainer.style.pointerEvents = 'none';

    // Minimalist Score / Command Center HUD Panel
    this.scoreElement = document.createElement('div');
    this.scoreElement.style.background = 'rgba(15, 23, 42, 0.82)';
    this.scoreElement.style.backdropFilter = 'blur(10px)';
    this.scoreElement.style.padding = '8px 14px';
    this.scoreElement.style.borderRadius = '12px';
    this.scoreElement.style.border = '1px solid rgba(255, 255, 255, 0.12)';
    this.scoreElement.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.5)';
    this.scoreElement.style.pointerEvents = 'auto';
    this.scoreElement.style.minWidth = '210px';
    this.scoreElement.style.maxWidth = '280px';

    this.scoreElement.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <!-- Row 1: Score & High Score & Combo -->
        <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 10px;">
          <div style="font-size: 15px; font-weight: 800; letter-spacing: 0.5px; color: #38bdf8;">
            SCORE <span id="hud-score-val" style="color: #ffffff; font-family: monospace; font-size: 16px;">0</span>
          </div>
          <div style="font-size: 10px; font-weight: 700; color: #94a3b8;">
            HI <span id="hud-high-val" style="color: #cbd5e1; font-family: monospace;">0</span>
          </div>
          <div id="hud-combo-badge" style="display: none; font-size: 10px; font-weight: 800; padding: 1px 6px; border-radius: 4px; background: #f59e0b; color: #000; box-shadow: 0 0 8px #f59e0b;">
            x2
          </div>
        </div>

        <!-- Row 2: Destruction Progress Bar -->
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <div style="display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; color: #f87171;">
            <span>DESTRUCTION</span>
            <span id="hud-destruct-val" style="font-family: monospace;">0.0%</span>
          </div>
          <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
            <div id="hud-destruct-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #f97316, #ef4444); border-radius: 3px; transition: width 0.2s ease;"></div>
          </div>
        </div>

        <!-- Row 3: Slim UFO Shield & Hull -->
        <div style="display: flex; gap: 8px; font-size: 9px; font-weight: 700;">
          <div style="flex: 1; display: flex; align-items: center; gap: 4px;">
            <span style="color: #38bdf8;">SHD</span>
            <div style="flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
              <div id="hud-shield-bar" style="width: 100%; height: 100%; background: #38bdf8; transition: width 0.15s ease;"></div>
            </div>
            <span id="hud-shield-val" style="color: #38bdf8; font-family: monospace;">100%</span>
          </div>
          <div style="flex: 1; display: flex; align-items: center; gap: 4px;">
            <span style="color: #4ade80;">HUL</span>
            <div style="flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
              <div id="hud-hull-bar" style="width: 100%; height: 100%; background: #4ade80; transition: width 0.15s ease;"></div>
            </div>
            <span id="hud-hull-val" style="color: #4ade80; font-family: monospace;">100%</span>
          </div>
        </div>

        <!-- Row 4: Compact Weapons & Flight Mode Dock -->
        <div style="display: flex; gap: 5px; margin-top: 2px;">
          <button id="weapon-btn-1" style="flex: 1; padding: 4px 6px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid #38bdf8; background: #0284c7; color: white; cursor: pointer; transition: all 0.15s ease;">
            [1] RAY
          </button>
          <button id="weapon-btn-2" style="position: relative; flex: 1; padding: 4px 6px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid rgba(255,255,255,0.2); background: #1e293b; color: #94a3b8; cursor: pointer; overflow: hidden; transition: all 0.15s ease;">
            <span style="position: relative; z-index: 2;">[2] BOMB</span>
            <div id="cluster-cooldown-overlay" style="position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; background: rgba(245, 158, 11, 0.4); z-index: 1;"></div>
          </button>
          <button id="autopilot-btn" title="Toggle Flight Mode [F]" style="padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid #38bdf8; background: rgba(56, 189, 248, 0.15); color: #38bdf8; cursor: pointer;">
            🛸 [F]
          </button>
        </div>
      </div>
    `;

    hudContainer.appendChild(this.scoreElement);

    this.scoreValEl = this.scoreElement.querySelector('#hud-score-val');
    this.highValEl = this.scoreElement.querySelector('#hud-high-val');
    this.comboBadgeEl = this.scoreElement.querySelector('#hud-combo-badge');
    this.destructValEl = this.scoreElement.querySelector('#hud-destruct-val');
    this.destructBarEl = this.scoreElement.querySelector('#hud-destruct-bar');
    this.shieldValEl = this.scoreElement.querySelector('#hud-shield-val');
    this.shieldBarEl = this.scoreElement.querySelector('#hud-shield-bar');
    this.hullValEl = this.scoreElement.querySelector('#hud-hull-val');
    this.hullBarEl = this.scoreElement.querySelector('#hud-hull-bar');
    this.weaponBtn1 = this.scoreElement.querySelector('#weapon-btn-1');
    this.weaponBtn2 = this.scoreElement.querySelector('#weapon-btn-2');
    this.clusterOverlayEl = this.scoreElement.querySelector('#cluster-cooldown-overlay');
    this.autopilotBtn = this.scoreElement.querySelector('#autopilot-btn');

    if (this.autopilotBtn) {
      this.autopilotBtn.onclick = () => {
        PlayerControlSystem.mouseFollowMode = !PlayerControlSystem.mouseFollowMode;
        if (this.autopilotBtn) this.autopilotBtn.blur();
      };
    }

    if (this.weaponBtn1) {
      this.weaponBtn1.onclick = () => {
        for (const entity of ECS.entities) {
          if (PlayerTagComponent.has(entity)) {
            const w = WeaponComponent.get(entity);
            if (w) w.currentSelected = 'laser';
            break;
          }
        }
      };
    }

    if (this.weaponBtn2) {
      this.weaponBtn2.onclick = () => {
        for (const entity of ECS.entities) {
          if (PlayerTagComponent.has(entity)) {
            const w = WeaponComponent.get(entity);
            if (w) w.currentSelected = 'cluster';
            break;
          }
        }
      };
    }

    this.popupsContainer = document.createElement('div');
    this.popupsContainer.style.position = 'fixed';
    this.popupsContainer.style.top = '0';
    this.popupsContainer.style.left = '0';
    this.popupsContainer.style.width = '100%';
    this.popupsContainer.style.height = '100%';
    this.popupsContainer.style.pointerEvents = 'none';
    this.popupsContainer.style.zIndex = '999';
    document.body.appendChild(this.popupsContainer);

    // Controls Panel (Right side — only shown in debug mode)
    this.controlPanel = document.createElement('div');
    this.controlPanel.style.display = 'flex';
    this.controlPanel.style.gap = '8px';
    this.controlPanel.style.pointerEvents = 'auto';

    const isDebugMode = typeof window !== 'undefined' && (
      window.location.search.includes('debug=1') ||
      window.location.search.includes('showcase=1')
    );

    // Mode Switcher Button (Showcase)
    this.modeToggleButton = document.createElement('button');
    this.modeToggleButton.setAttribute('aria-label', 'Enter test showcase mode');
    this.modeToggleButton.setAttribute('aria-pressed', 'false');
    this.modeToggleButton.style.padding = '8px 14px';
    this.modeToggleButton.style.borderRadius = '10px';
    this.modeToggleButton.style.border = '1px solid rgba(59, 130, 246, 0.5)';
    this.modeToggleButton.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
    this.modeToggleButton.style.color = 'white';
    this.modeToggleButton.style.fontWeight = '600';
    this.modeToggleButton.style.fontSize = '12px';
    this.modeToggleButton.style.cursor = 'pointer';
    this.modeToggleButton.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)';
    this.modeToggleButton.style.transition = 'all 0.2s ease';
    this.modeToggleButton.innerText = '🔬 SHOWCASE';

    this.modeToggleButton.onclick = () => {
      ShowcaseManager.toggleMode();
      this.updateModeUI();
      this.modeToggleButton.blur();
    };

    // Showcase Action Tools Container (Hidden in City mode)
    this.showcaseTools = document.createElement('div');
    this.showcaseTools.style.display = 'none';
    this.showcaseTools.style.gap = '8px';

    const btnReset = this.createActionButton('🔄 Repair', '#059669', 'Repair all showcase buildings', () => ShowcaseManager.resetAllHP());
    const btnDamage = this.createActionButton('💥 -25%', '#dc2626', 'Damage all showcase buildings by 25 percent', () => ShowcaseManager.damageAll(SHOWCASE_DAMAGE_PERCENT));

    this.showcaseTools.appendChild(btnReset);
    this.showcaseTools.appendChild(btnDamage);

    if (isDebugMode) {
      this.controlPanel.appendChild(this.modeToggleButton);
      this.controlPanel.appendChild(this.showcaseTools);
      hudContainer.appendChild(this.controlPanel);
    }

    document.body.appendChild(hudContainer);

    // 2. Target Info Card (Bottom Center, sleek and minimal)
    this.targetInfoPanel = document.createElement('div');
    this.targetInfoPanel.style.position = 'fixed';
    this.targetInfoPanel.style.bottom = '20px';
    this.targetInfoPanel.style.left = '50%';
    this.targetInfoPanel.style.transform = 'translateX(-50%)';
    this.targetInfoPanel.style.background = 'rgba(15, 23, 42, 0.88)';
    this.targetInfoPanel.style.backdropFilter = 'blur(10px)';
    this.targetInfoPanel.style.padding = '8px 18px';
    this.targetInfoPanel.style.borderRadius = '12px';
    this.targetInfoPanel.style.border = '1px solid rgba(59, 130, 246, 0.5)';
    this.targetInfoPanel.style.color = 'white';
    this.targetInfoPanel.style.fontFamily = 'system-ui, monospace';
    this.targetInfoPanel.style.fontSize = '13px';
    this.targetInfoPanel.style.pointerEvents = 'none';
    this.targetInfoPanel.style.display = 'none';
    this.targetInfoPanel.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)';
    document.body.appendChild(this.targetInfoPanel);

    // 3. Screen Labels Container for Showcase Buildings
    this.labelsContainer = document.createElement('div');
    this.labelsContainer.style.position = 'fixed';
    this.labelsContainer.style.top = '0';
    this.labelsContainer.style.left = '0';
    this.labelsContainer.style.width = '100vw';
    this.labelsContainer.style.height = '100vh';
    this.labelsContainer.style.pointerEvents = 'none';
    this.labelsContainer.style.zIndex = '900';
    document.body.appendChild(this.labelsContainer);

    // 4. White Screen Flash Overlay
    this.flashOverlay = document.createElement('div');
    this.flashOverlay.style.position = 'fixed';
    this.flashOverlay.style.top = '0';
    this.flashOverlay.style.left = '0';
    this.flashOverlay.style.width = '100vw';
    this.flashOverlay.style.height = '100vh';
    this.flashOverlay.style.backgroundColor = 'white';
    this.flashOverlay.style.opacity = '0';
    this.flashOverlay.style.pointerEvents = 'none';
    this.flashOverlay.style.transition = 'opacity 0.08s ease-out';
    this.flashOverlay.style.zIndex = '9999';
    document.body.appendChild(this.flashOverlay);

    // 5. Sci-Fi Aiming Reticle (Targeted building bracket)
    this.targetReticle = document.createElement('div');
    this.targetReticle.style.position = 'fixed';
    this.targetReticle.style.pointerEvents = 'none';
    this.targetReticle.style.display = 'none';
    this.targetReticle.style.width = '48px';
    this.targetReticle.style.height = '48px';
    this.targetReticle.style.transform = 'translate(-50%, -50%)';
    this.targetReticle.style.zIndex = '950';
    this.targetReticle.style.transition = 'left 0.04s ease-out, top 0.04s ease-out';
    this.targetReticle.innerHTML = `
      <div style="position:absolute; top:0; left:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:0; right:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; left:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; right:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:50%; left:50%; width:4px; height:4px; transform:translate(-50%, -50%); border-radius:50%; background:#38bdf8; box-shadow:0 0 6px #38bdf8;"></div>
    `;
    document.body.appendChild(this.targetReticle);
  }

  public static setTargetReticle(pos: { x: number; y: number } | null): void {
    if (!this.targetReticle) return;
    if (!pos) {
      this.targetReticle.style.display = 'none';
      return;
    }
    this.targetReticle.style.left = `${pos.x}px`;
    this.targetReticle.style.top = `${pos.y}px`;
    this.targetReticle.style.display = 'block';
  }

  private static createActionButton(text: string, bgColor: string, ariaLabel: string, onClick: () => void): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', ariaLabel);
    btn.style.padding = '10px 18px';
    btn.style.borderRadius = '12px';
    btn.style.border = 'none';
    btn.style.background = bgColor;
    btn.style.color = 'white';
    btn.style.fontWeight = '600';
    btn.style.fontSize = '14px';
    btn.style.cursor = 'pointer';
    btn.style.transition = 'transform 0.15s ease';
    btn.innerText = text;
    btn.onclick = () => {
      onClick();
      btn.blur();
    };
    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1.0)';
    btn.onfocus = () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.outline = '3px solid rgba(255, 255, 255, 0.8)';
      btn.style.outlineOffset = '2px';
    };
    btn.onblur = () => {
      btn.style.transform = 'scale(1.0)';
      btn.style.outline = 'none';
    };
    return btn;
  }

  public static updateModeUI(): void {
    const isShowcase = ShowcaseManager.isShowcaseMode;
    this.modeToggleButton.setAttribute('aria-pressed', isShowcase ? 'true' : 'false');
    if (isShowcase) {
      this.modeToggleButton.innerText = '🌆 RETURN TO CITY MODE';
      this.modeToggleButton.setAttribute('aria-label', 'Return to city mode');
      this.modeToggleButton.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
      this.modeToggleButton.style.borderColor = 'rgba(16, 185, 129, 0.5)';
      this.showcaseTools.style.display = 'flex';
    } else {
      this.modeToggleButton.innerText = '🔬 ENTER TEST SHOWCASE MODE';
      this.modeToggleButton.setAttribute('aria-label', 'Enter test showcase mode');
      this.modeToggleButton.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
      this.modeToggleButton.style.borderColor = 'rgba(59, 130, 246, 0.5)';
      this.showcaseTools.style.display = 'none';
      this.clearLabels();
    }
  }

  public static updateTargetInspector(info: { name: string; key: string; hp: number; maxHp: number; frame: number } | null): void {
    if (!info) {
      this.targetInfoPanel.style.display = 'none';
      return;
    }
    this.targetInfoPanel.style.display = 'block';
    const hpPercent = Math.round((info.hp / info.maxHp) * FULL_PERCENT);
    const hpColor = hpPercent > HEALTH_HIGH_THRESHOLD ? '#10b981' : (hpPercent > HEALTH_MEDIUM_THRESHOLD ? '#f59e0b' : '#ef4444');
    const safeName = escapeHtml(info.name);
    const safeKey = escapeHtml(info.key);
    this.targetInfoPanel.innerHTML = `
      <div style="font-weight: bold; font-size: 13px; margin-bottom: 3px; color: #60a5fa; letter-spacing: 0.5px;">🎯 TARGET: ${safeName} <span style="opacity: 0.7; font-weight: normal; font-size: 12px;">[${safeKey}]</span></div>
      <div style="font-size: 12px;">HP: <span style="color: ${hpColor}; font-weight: bold;">${info.hp}/${info.maxHp} (${hpPercent}%)</span> · Frame: <span style="color: #f472b6; font-weight: bold;">#${info.frame}</span></div>
    `;
  }

  public static tick(camera: THREE.Camera): void {
    if (!ShowcaseManager.isShowcaseMode) {
      this.clearLabels();
    } else {
      const buildings = ShowcaseManager.getShowcaseBuildings();
      const activeEntities = new Set<Entity>();

      for (const b of buildings) {
        activeEntities.add(b.entity);

        let el = this.labelElements.get(b.entity);
        if (!el) {
          el = document.createElement('div');
          el.style.position = 'absolute';
          el.style.transform = 'translate(-50%, -100%)';
          el.style.background = 'rgba(15, 23, 42, 0.85)';
          el.style.border = '1px solid rgba(255, 255, 255, 0.2)';
          el.style.borderRadius = '8px';
          el.style.padding = '4px 8px';
          el.style.color = '#e2e8f0';
          el.style.fontFamily = 'monospace';
          el.style.fontSize = '11px';
          el.style.whiteSpace = 'nowrap';
          el.style.pointerEvents = 'none';
          el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
          this.labelsContainer.appendChild(el);
          this.labelElements.set(b.entity, el);
        }

        // Project world coordinate to screen NDC
        const heightOffset = b.def.height * LABEL_HEIGHT_FACTOR;
        this.tempVec.set(b.worldX, heightOffset, b.worldY);
        this.tempVec.project(camera);

        // Check if behind camera
        if (this.tempVec.z > 1) {
          el.style.display = 'none';
          continue;
        }

        const screenX = (this.tempVec.x * HALF_NDC_FACTOR + HALF_NDC_FACTOR) * window.innerWidth;
        const screenY = (-this.tempVec.y * HALF_NDC_FACTOR + HALF_NDC_FACTOR) * window.innerHeight;

        el.style.left = `${screenX}px`;
        el.style.top = `${screenY - LABEL_Y_SCREEN_OFFSET_PX}px`;
        el.style.display = 'block';

        const health = HealthComponent.get(b.entity);
        const renderState = RenderStateComponent.get(b.entity);
        const zonal = ZonalHealthComponent.get(b.entity);

        const curHp = zonal ? zonal.totalHp : (health ? health.currentHP : DEFAULT_FALLBACK_HP);
        const maxHp = zonal ? zonal.maxTotalHp : (health ? health.maxHP : DEFAULT_FALLBACK_HP);
        const percent = Math.max(ZERO_VALUE, Math.round((curHp / maxHp) * FULL_PERCENT));
        const frame = renderState ? renderState.currentFrame : ZERO_VALUE;

        const hpColor = percent > HEALTH_HIGH_THRESHOLD ? '#34d399' : (percent > HEALTH_MEDIUM_THRESHOLD ? '#fbbf24' : '#f87171');
        const safeName = escapeHtml(b.def.name);
        const safeTypeKey = escapeHtml(b.typeKey);

        el.innerHTML = `<b>${safeName}</b> <span style="color:#94a3b8;">[${safeTypeKey}]</span><br/><span style="color:${hpColor};">HP ${percent}%</span> · Fr #${frame}`;
      }

      // Clean stale labels
      for (const [entity, el] of this.labelElements.entries()) {
        if (!activeEntities.has(entity)) {
          this.labelsContainer.removeChild(el);
          this.labelElements.delete(entity);
        }
      }
    }

    // 4. Update Command Center HUD
    if (this.scoreValEl) {
      this.scoreValEl.innerText = ScoreSystem.getScore().toLocaleString();
    }
    if (this.highValEl) {
      this.highValEl.innerText = ScoreSystem.getHighScore().toLocaleString();
    }

    if (this.comboBadgeEl) {
      const combo = ScoreSystem.getCombo();
      if (combo > 1) {
        this.comboBadgeEl.style.display = 'block';
        this.comboBadgeEl.innerText = `x${combo} COMBO!`;
        this.comboBadgeEl.style.background = combo >= 4 ? '#ef4444' : (combo >= 3 ? '#f59e0b' : '#3b82f6');
        this.comboBadgeEl.style.boxShadow = `0 0 10px ${combo >= 4 ? '#ef4444' : '#f59e0b'}`;
      } else {
        this.comboBadgeEl.style.display = 'none';
      }
    }

    if (this.destructValEl && this.destructBarEl) {
      this.destructValEl.innerText = `${this.currentDestructionPercent.toFixed(1)}%`;
      this.destructBarEl.style.width = `${Math.min(100, this.currentDestructionPercent)}%`;
    }

    if (this.shieldValEl && this.shieldBarEl) {
      const shield = Math.max(0, Math.round(DefenseSystem.playerShield));
      this.shieldValEl.innerText = `${shield}%`;
      this.shieldBarEl.style.width = `${shield}%`;
    }

    if (this.hullValEl && this.hullBarEl) {
      const hull = Math.max(0, Math.round(DefenseSystem.playerHull));
      this.hullValEl.innerText = `${hull}%`;
      this.hullBarEl.style.width = `${hull}%`;
      this.hullBarEl.style.background = hull > 50 ? '#4ade80' : (hull > 25 ? '#facc15' : '#ef4444');
    }

    // Sync Active Weapon Highlights
    let currentWeapon = 'laser';
    for (const entity of ECS.entities) {
      if (PlayerTagComponent.has(entity)) {
        const w = WeaponComponent.get(entity);
        if (w) currentWeapon = w.currentSelected;
        break;
      }
    }

    const isLaser = currentWeapon === 'laser';
    if (this.weaponBtn1) {
      this.weaponBtn1.style.background = isLaser ? '#0284c7' : '#1e293b';
      this.weaponBtn1.style.borderColor = isLaser ? '#38bdf8' : 'rgba(255,255,255,0.2)';
      this.weaponBtn1.style.color = isLaser ? '#ffffff' : '#94a3b8';
    }

    if (this.weaponBtn2) {
      this.weaponBtn2.style.background = !isLaser ? '#d97706' : '#1e293b';
      this.weaponBtn2.style.borderColor = !isLaser ? '#f59e0b' : 'rgba(255,255,255,0.2)';
      this.weaponBtn2.style.color = !isLaser ? '#ffffff' : '#94a3b8';
    }

    if (this.clusterOverlayEl) {
      this.clusterOverlayEl.style.height = `${WeaponSystem.getClusterCooldownRatio() * 100}%`;
    }

    if (this.autopilotBtn) {
      if (PlayerControlSystem.mouseFollowMode) {
        this.autopilotBtn.innerText = '⚡ [F] AUTOPILOT';
        this.autopilotBtn.style.background = 'rgba(16, 185, 129, 0.25)';
        this.autopilotBtn.style.borderColor = '#10b981';
        this.autopilotBtn.style.color = '#34d399';
        this.autopilotBtn.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.4)';
      } else {
        this.autopilotBtn.innerText = '🛸 [F] TWIN-STICK';
        this.autopilotBtn.style.background = 'rgba(56, 189, 248, 0.12)';
        this.autopilotBtn.style.borderColor = 'rgba(56, 189, 248, 0.4)';
        this.autopilotBtn.style.color = '#38bdf8';
        this.autopilotBtn.style.boxShadow = 'none';
      }
    }

    // 5. Render Floating Score Popups
    if (this.popupsContainer) {
      let popupHtml = '';
      for (const p of ScoreSystem.popups) {
        this.tempVec.set(p.worldX, p.worldZ, p.worldY);
        this.tempVec.project(camera);
        if (this.tempVec.z <= 1) {
          const sx = (this.tempVec.x * HALF_NDC_FACTOR + HALF_NDC_FACTOR) * window.innerWidth;
          const sy = (-this.tempVec.y * HALF_NDC_FACTOR + HALF_NDC_FACTOR) * window.innerHeight;
          const opacity = Math.max(0, 1 - p.elapsed / p.duration);
          popupHtml += `<div style="position: absolute; left: ${sx}px; top: ${sy}px; transform: translate(-50%, -50%); font-size: 16px; font-weight: 800; color: ${p.color}; text-shadow: 0 2px 8px rgba(0,0,0,0.9); opacity: ${opacity}; pointer-events: none; white-space: nowrap;">${p.text}</div>`;
        }
      }
      this.popupsContainer.innerHTML = popupHtml;
    }
  }

  private static clearLabels(): void {
    for (const el of this.labelElements.values()) {
      this.labelsContainer.removeChild(el);
    }
    this.labelElements.clear();
  }

  public static triggerFlash() {
    if (!this.flashOverlay) return;
    this.flashOverlay.style.transition = 'none';
    this.flashOverlay.style.opacity = '0.5';
    void this.flashOverlay.offsetWidth;
    this.flashOverlay.style.transition = 'opacity 0.1s ease-out';
    this.flashOverlay.style.opacity = '0';
  }

  public static updateScore(percent: number) {
    this.currentDestructionPercent = percent;
    if (this.destructValEl && this.destructBarEl) {
      this.destructValEl.innerText = `${percent.toFixed(1)}%`;
      this.destructBarEl.style.width = `${Math.min(100, percent)}%`;
    }
  }
}
