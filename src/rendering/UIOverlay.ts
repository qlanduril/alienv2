import * as THREE from 'three';
import { ShowcaseManager } from '../systems/ShowcaseManager';
import { HealthComponent, RenderStateComponent, ZonalHealthComponent } from '../core/Components';
import { Entity } from '../core/ECS';

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

  private static labelElements: Map<Entity, HTMLElement> = new Map();

  public static init() {
    // 1. Top HUD Container
    const hudContainer = document.createElement('div');
    hudContainer.style.position = 'fixed';
    hudContainer.style.top = '20px';
    hudContainer.style.left = '20px';
    hudContainer.style.right = '20px';
    hudContainer.style.display = 'flex';
    hudContainer.style.justifyContent = 'space-between';
    hudContainer.style.alignItems = 'center';
    hudContainer.style.color = 'white';
    hudContainer.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    hudContainer.style.zIndex = '1000';
    hudContainer.style.pointerEvents = 'none';

    // Score / Title
    this.scoreElement = document.createElement('div');
    this.scoreElement.style.fontSize = '20px';
    this.scoreElement.style.fontWeight = '700';
    this.scoreElement.style.background = 'rgba(15, 23, 42, 0.75)';
    this.scoreElement.style.backdropFilter = 'blur(8px)';
    this.scoreElement.style.padding = '10px 20px';
    this.scoreElement.style.borderRadius = '12px';
    this.scoreElement.style.border = '1px solid rgba(255, 255, 255, 0.15)';
    this.scoreElement.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
    this.scoreElement.innerText = 'DESTRUCTION: 0%';
    hudContainer.appendChild(this.scoreElement);

    // Controls Panel (Right side)
    this.controlPanel = document.createElement('div');
    this.controlPanel.style.display = 'flex';
    this.controlPanel.style.gap = '12px';
    this.controlPanel.style.pointerEvents = 'auto';

    // Mode Switcher Button
    this.modeToggleButton = document.createElement('button');
    this.modeToggleButton.type = 'button';
    this.modeToggleButton.setAttribute('aria-label', 'Toggle test showcase mode');
    this.modeToggleButton.setAttribute('aria-pressed', 'false');
    this.modeToggleButton.style.padding = '10px 20px';
    this.modeToggleButton.style.borderRadius = '12px';
    this.modeToggleButton.style.border = '1px solid rgba(59, 130, 246, 0.5)';
    this.modeToggleButton.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
    this.modeToggleButton.style.color = 'white';
    this.modeToggleButton.style.fontWeight = '600';
    this.modeToggleButton.style.fontSize = '14px';
    this.modeToggleButton.style.cursor = 'pointer';
    this.modeToggleButton.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)';
    this.modeToggleButton.style.transition = 'all 0.2s ease';
    this.modeToggleButton.innerText = '🔬 ENTER TEST SHOWCASE MODE';

    this.modeToggleButton.onclick = () => {
      ShowcaseManager.toggleMode();
      this.updateModeUI();
    };

    this.modeToggleButton.onmouseover = () => {
      this.modeToggleButton.style.transform = 'scale(1.05)';
    };
    this.modeToggleButton.onmouseout = () => {
      this.modeToggleButton.style.transform = 'scale(1.0)';
    };

    this.modeToggleButton.onfocus = () => {
      this.modeToggleButton.style.outline = '2px solid #60a5fa';
      this.modeToggleButton.style.outlineOffset = '2px';
    };
    this.modeToggleButton.onblur = () => {
      this.modeToggleButton.style.outline = 'none';
    };

    this.controlPanel.appendChild(this.modeToggleButton);

    // Showcase Action Tools Container (Hidden in City mode)
    this.showcaseTools = document.createElement('div');
    this.showcaseTools.style.display = 'none';
    this.showcaseTools.style.gap = '10px';

    const btnReset = this.createActionButton('🔄 Repair All', '#059669', () => ShowcaseManager.resetAllHP());
    const btnDamage = this.createActionButton('💥 Damage All 25%', '#dc2626', () => ShowcaseManager.damageAll(SHOWCASE_DAMAGE_PERCENT));

    this.showcaseTools.appendChild(btnReset);
    this.showcaseTools.appendChild(btnDamage);
    this.controlPanel.appendChild(this.showcaseTools);

    hudContainer.appendChild(this.controlPanel);
    document.body.appendChild(hudContainer);

    // 2. Target Info Card (Bottom Center)
    this.targetInfoPanel = document.createElement('div');
    this.targetInfoPanel.style.position = 'fixed';
    this.targetInfoPanel.style.bottom = '24px';
    this.targetInfoPanel.style.left = '50%';
    this.targetInfoPanel.style.transform = 'translateX(-50%)';
    this.targetInfoPanel.style.background = 'rgba(15, 23, 42, 0.85)';
    this.targetInfoPanel.style.backdropFilter = 'blur(10px)';
    this.targetInfoPanel.style.padding = '12px 24px';
    this.targetInfoPanel.style.borderRadius = '16px';
    this.targetInfoPanel.style.border = '1px solid rgba(255, 255, 255, 0.15)';
    this.targetInfoPanel.style.color = 'white';
    this.targetInfoPanel.style.fontFamily = 'monospace';
    this.targetInfoPanel.style.fontSize = '14px';
    this.targetInfoPanel.style.pointerEvents = 'none';
    this.targetInfoPanel.style.display = 'none';
    this.targetInfoPanel.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
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
  }

  private static createActionButton(text: string, bgColor: string, onClick: () => void): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.type = 'button';
    const cleanLabel = text.replace(/^[^\w\s]+\s*/, '');
    btn.setAttribute('aria-label', cleanLabel);
    btn.style.padding = '8px 16px';
    btn.style.borderRadius = '10px';
    btn.style.border = 'none';
    btn.style.background = bgColor;
    btn.style.color = 'white';
    btn.style.fontWeight = '600';
    btn.style.fontSize = '13px';
    btn.style.cursor = 'pointer';
    btn.style.transition = 'transform 0.15s ease';
    btn.innerText = text;
    btn.onclick = onClick;
    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1.0)';
    btn.onfocus = () => {
      btn.style.outline = '2px solid #60a5fa';
      btn.style.outlineOffset = '2px';
    };
    btn.onblur = () => {
      btn.style.outline = 'none';
    };
    return btn;
  }

  public static updateModeUI(): void {
    const isShowcase = ShowcaseManager.isShowcaseMode;
    this.modeToggleButton.setAttribute('aria-pressed', isShowcase ? 'true' : 'false');
    if (isShowcase) {
      this.modeToggleButton.innerText = '🌆 RETURN TO CITY MODE';
      this.modeToggleButton.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
      this.modeToggleButton.style.borderColor = 'rgba(16, 185, 129, 0.5)';
      this.showcaseTools.style.display = 'flex';
    } else {
      this.modeToggleButton.innerText = '🔬 ENTER TEST SHOWCASE MODE';
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
      <div style="font-weight: bold; font-size: 15px; margin-bottom: 4px; color: #60a5fa;">TARGET: ${safeName} <span style="opacity: 0.6; font-weight: normal;">[key: ${safeKey}]</span></div>
      <div>HP: <span style="color: ${hpColor}; font-weight: bold;">${info.hp}/${info.maxHp} (${hpPercent}%)</span> | Stage Frame: <span style="color: #f472b6;">#${info.frame}</span></div>
    `;
  }

  public static tick(camera: THREE.Camera): void {
    if (!ShowcaseManager.isShowcaseMode) {
      this.clearLabels();
      return;
    }

    const buildings = ShowcaseManager.getShowcaseBuildings();
    const activeEntities = new Set<Entity>();

    const tempVec = new THREE.Vector3();

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
      tempVec.set(b.worldX, heightOffset, b.worldY);
      tempVec.project(camera);

      // Check if behind camera
      if (tempVec.z > 1) {
        el.style.display = 'none';
        continue;
      }

      const screenX = (tempVec.x * HALF_NDC_FACTOR + HALF_NDC_FACTOR) * window.innerWidth;
      const screenY = (-tempVec.y * HALF_NDC_FACTOR + HALF_NDC_FACTOR) * window.innerHeight;

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
    if (this.scoreElement) {
      this.scoreElement.innerText = `DESTRUCTION: ${Math.floor(percent)}%`;
    }
  }
}
