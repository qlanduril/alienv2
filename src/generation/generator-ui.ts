import { MapBaker, LayerSnapshot } from './MapBaker';
import { MapRendererCanvas, CellInspectInfo } from './MapRendererCanvas';
import { CityPresetName } from './CityConfig';
import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const canvasEl = document.getElementById('map-canvas') as HTMLCanvasElement;
  const viewportContainer = document.getElementById('viewport-container') as HTMLElement;

  const presetSelect = document.getElementById('preset-select') as HTMLSelectElement;
  const seedInput = document.getElementById('seed-input') as HTMLInputElement;
  const btnBake = document.getElementById('btn-bake') as HTMLButtonElement;
  const btnPlayLayer = document.getElementById('btn-play-layer') as HTMLButtonElement;
  const btnDownload = document.getElementById('btn-download') as HTMLButtonElement;
  const btnExportPng = document.getElementById('btn-export-png') as HTMLButtonElement;

  const btnPrevLayer = document.getElementById('btn-prev-layer') as HTMLButtonElement;
  const btnNextLayer = document.getElementById('btn-next-layer') as HTMLButtonElement;
  const layerStepBadge = document.getElementById('layer-step-badge') as HTMLElement;
  const speedSlider = document.getElementById('speed-slider') as HTMLInputElement;
  const speedVal = document.getElementById('speed-val') as HTMLElement;

  const proj2dBtn = document.getElementById('proj-2d-btn') as HTMLButtonElement;
  const projIsoBtn = document.getElementById('proj-iso-btn') as HTMLButtonElement;
  const themeBlueprintBtn = document.getElementById('theme-blueprint-btn') as HTMLButtonElement;
  const themeGameBtn = document.getElementById('theme-game-btn') as HTMLButtonElement;
  const btnZoomIn = document.getElementById('btn-zoom-in') as HTMLButtonElement;
  const btnZoomOut = document.getElementById('btn-zoom-out') as HTMLButtonElement;
  const btnFitView = document.getElementById('btn-fit-view') as HTMLButtonElement;

  // Layer switches
  const layerWater = document.getElementById('layer-water') as HTMLInputElement;
  const layerTerrain = document.getElementById('layer-terrain') as HTMLInputElement;
  const layerRoads = document.getElementById('layer-roads') as HTMLInputElement;
  const layerDistricts = document.getElementById('layer-districts') as HTMLInputElement;
  const layerBuildings = document.getElementById('layer-buildings') as HTMLInputElement;
  const layerLandmarks = document.getElementById('layer-landmarks') as HTMLInputElement;
  const layerOccupancy = document.getElementById('layer-occupancy') as HTMLInputElement;
  const layerGrid = document.getElementById('layer-grid') as HTMLInputElement;

  const btnAllLayers = document.getElementById('btn-all-layers') as HTMLButtonElement;
  const btnResetLayers = document.getElementById('btn-reset-layers') as HTMLButtonElement;

  // Floating HUD Elements
  const hudPassBadge = document.getElementById('hud-pass-badge') as HTMLElement;
  const hudPassDesc = document.getElementById('hud-pass-desc') as HTMLElement;
  const hudCoordGrid = document.getElementById('hud-coord-grid') as HTMLElement;
  const hudCoordWorld = document.getElementById('hud-coord-world') as HTMLElement;
  const hudTerrainType = document.getElementById('hud-terrain-type') as HTMLElement;

  // Inspector Elements
  const inspectTitleName = document.getElementById('inspect-title-name') as HTMLElement;
  const inspectTierBadge = document.getElementById('inspect-tier-badge') as HTMLElement;
  const inspectSubtitle = document.getElementById('inspect-subtitle') as HTMLElement;
  const inspectCell = document.getElementById('inspect-cell') as HTMLElement;
  const inspectWorld = document.getElementById('inspect-world') as HTMLElement;
  const inspectDistrict = document.getElementById('inspect-district') as HTMLElement;
  const inspectHp = document.getElementById('inspect-hp') as HTMLElement;

  // Stats Elements
  const statBuildings = document.getElementById('stat-buildings') as HTMLElement;
  const statSize = document.getElementById('stat-size') as HTMLElement;
  const statTime = document.getElementById('stat-time') as HTMLElement;
  const logTerminal = document.getElementById('log-terminal') as HTMLTextAreaElement;

  // State
  const renderer = new MapRendererCanvas(canvasEl);
  let snapshots: LayerSnapshot[] = [];
  let currentSnapshotIndex = -1;
  let currentJsonString: string | null = null;
  let isPlaying = false;

  function appendLog(msg: string) {
    if (!logTerminal) return;
    const time = new Date().toLocaleTimeString();
    logTerminal.value += `[${time}] ${msg}\n`;
    logTerminal.scrollTop = logTerminal.scrollHeight;
  }

  // Handle Window & Container Resize
  function updateCanvasSize() {
    if (!viewportContainer) return;
    const rect = viewportContainer.getBoundingClientRect();
    renderer.resize(rect.width, rect.height);
  }
  window.addEventListener('resize', updateCanvasSize);
  setTimeout(updateCanvasSize, 50);

  // Sync Layer Controls
  function syncLayerSwitches() {
    renderer.setLayers({
      water: layerWater.checked,
      terrain: layerTerrain.checked,
      roads: layerRoads.checked,
      districts: layerDistricts.checked,
      buildings: layerBuildings.checked,
      landmarks: layerLandmarks.checked,
      occupancy: layerOccupancy.checked,
      grid: layerGrid.checked,
    });
  }

  [
    layerWater,
    layerTerrain,
    layerRoads,
    layerDistricts,
    layerBuildings,
    layerLandmarks,
    layerOccupancy,
    layerGrid,
  ].forEach((input) => {
    input.addEventListener('change', syncLayerSwitches);
  });

  btnAllLayers.addEventListener('click', () => {
    [
      layerWater,
      layerTerrain,
      layerRoads,
      layerDistricts,
      layerBuildings,
      layerLandmarks,
      layerOccupancy,
      layerGrid,
    ].forEach((i) => (i.checked = true));
    syncLayerSwitches();
  });

  btnResetLayers.addEventListener('click', () => {
    layerWater.checked = true;
    layerTerrain.checked = true;
    layerRoads.checked = true;
    layerDistricts.checked = true;
    layerBuildings.checked = true;
    layerLandmarks.checked = true;
    layerOccupancy.checked = false;
    layerGrid.checked = true;
    syncLayerSwitches();
  });

  // Projection toggles
  proj2dBtn.addEventListener('click', () => {
    proj2dBtn.classList.add('active');
    projIsoBtn.classList.remove('active');
    renderer.setProjection('2d');
  });

  projIsoBtn.addEventListener('click', () => {
    projIsoBtn.classList.add('active');
    proj2dBtn.classList.remove('active');
    renderer.setProjection('isometric');
  });

  // Render Theme toggles
  themeBlueprintBtn.addEventListener('click', () => {
    themeBlueprintBtn.classList.add('active');
    themeGameBtn.classList.remove('active');
    renderer.setRenderTheme('blueprint');
    appendLog('Switched render theme: Studio Blueprint');
  });

  themeGameBtn.addEventListener('click', () => {
    themeGameBtn.classList.add('active');
    themeBlueprintBtn.classList.remove('active');
    renderer.setRenderTheme('game_tiles');
    appendLog('Switched render theme: In-Game Tiles & Sprites');
  });

  // Zoom Controls
  btnZoomIn.addEventListener('click', () => renderer.setZoom(1.25));
  btnZoomOut.addEventListener('click', () => renderer.setZoom(0.8));
  btnFitView.addEventListener('click', () => renderer.fitToScreen());

  // Speed Slider
  speedSlider.addEventListener('input', () => {
    speedVal.innerText = `${speedSlider.value}ms`;
  });

  // Update Snapshot Display
  function showSnapshot(index: number) {
    if (snapshots.length === 0) return;
    currentSnapshotIndex = Math.max(0, Math.min(snapshots.length - 1, index));
    const snap = snapshots[currentSnapshotIndex];

    renderer.setSnapshot(snap);

    layerStepBadge.innerText = `Pass ${currentSnapshotIndex + 1} / ${snapshots.length}`;
    hudPassBadge.innerText = `PASS ${currentSnapshotIndex + 1}`;
    hudPassDesc.innerText = `${snap.layerName} — ${snap.description}`;

    btnPrevLayer.disabled = currentSnapshotIndex === 0;
    btnNextLayer.disabled = currentSnapshotIndex === snapshots.length - 1;
  }

  btnPrevLayer.addEventListener('click', () => {
    showSnapshot(currentSnapshotIndex - 1);
  });

  btnNextLayer.addEventListener('click', () => {
    showSnapshot(currentSnapshotIndex + 1);
  });

  // Cell Inspector Callbacks
  renderer.onHoverCell = (info: CellInspectInfo | null) => {
    if (!info) {
      hudCoordGrid.innerText = '--';
      hudCoordWorld.innerText = '--';
      hudTerrainType.innerText = '--';
      return;
    }

    const overlayName = OverlayTileType[info.overlayType] || 'NONE';
    const terrainName = TerrainType[info.terrainType] || 'GRASS';

    let displayTerrain = overlayName !== 'NONE' ? overlayName : terrainName;
    let displayTitle = overlayName !== 'NONE' ? `Road (${overlayName})` : terrainName;

    if (info.terrainType === TerrainType.ROAD_ROUNDABOUT) {
      displayTerrain = 'ROUNDABOUT';
      displayTitle = 'Traffic Circle Rotary';
    } else if (info.terrainType >= TerrainType.ROAD_CURVE_NE && info.terrainType <= TerrainType.ROAD_CURVE_SW) {
      const curveSuffix = TerrainType[info.terrainType].replace('ROAD_CURVE_', '');
      displayTerrain = `CURVE (${curveSuffix})`;
      displayTitle = `Curved Avenue (${curveSuffix})`;
    }

    hudCoordGrid.innerText = `[${info.gx}, ${info.gz}]`;
    hudCoordWorld.innerText = `(${info.worldX.toFixed(0)}, ${info.worldZ.toFixed(0)})`;
    hudTerrainType.innerText = displayTerrain;

    inspectCell.innerText = `[${info.gx}, ${info.gz}]`;
    inspectWorld.innerText = `(${info.worldX.toFixed(0)}, ${info.worldZ.toFixed(0)})`;
    inspectDistrict.innerText = info.district ? info.district.toUpperCase() : 'NONE';

    if (info.building && info.buildingDef) {
      inspectTitleName.innerText = info.buildingDef.name;
      inspectSubtitle.innerText = `${info.buildingDef.width}x${info.buildingDef.length}m • ${info.building.lotType}`;
      inspectHp.innerText = `${info.buildingDef.maxHp || 100} HP`;

      inspectTierBadge.style.display = 'inline-block';
      inspectTierBadge.innerText = info.buildingDef.tier || 'building';
      inspectTierBadge.className = `tier-badge tier-${info.buildingDef.tier || 'foreground'}`;
    } else {
      inspectTitleName.innerText = displayTitle;
      inspectSubtitle.innerText = info.isOccupied ? 'Reserved / Occupied' : 'Open Ground';
      inspectHp.innerText = '--';
      inspectTierBadge.style.display = 'none';
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // MAP GENERATION ACTIONS
  // ─────────────────────────────────────────────────────────────────────────────
  async function generateMap(animated: boolean = false) {
    const seed = parseInt(seedInput.value, 10) || 42;
    const preset = (presetSelect.value || 'retro_arcade') as CityPresetName;
    const stepDelay = animated ? parseInt(speedSlider.value, 10) : 0;

    btnBake.disabled = true;
    btnPlayLayer.disabled = true;
    btnDownload.disabled = true;
    snapshots = [];
    currentSnapshotIndex = -1;

    appendLog(`Starting ${animated ? 'animated layer-by-layer' : 'instant'} bake for '${preset}' (seed: ${seed})...`);

    try {
      const result = await MapBaker.bake(
        seed,
        preset,
        (layer, total, msg, snapshot) => {
          appendLog(`[Pass ${layer + 1}/${total}] ${msg}`);
          if (snapshot) {
            snapshots.push(snapshot);
            if (animated) {
              showSnapshot(snapshots.length - 1);
            }
          }
        },
        stepDelay
      );

      snapshots = result.snapshots;
      currentJsonString = result.jsonString;
      showSnapshot(snapshots.length - 1);

      // Update metrics panel
      statBuildings.innerText = result.data.metadata.buildingCount.toString();
      statSize.innerText = `${(result.jsonString.length / 1024).toFixed(1)} KB`;
      statTime.innerText = `${result.data.metadata.layerTimings['Total Bake Time']?.toFixed(0) || 0} ms`;

      btnDownload.disabled = false;
      appendLog(`Bake finished in ${result.data.metadata.layerTimings['Total Bake Time']?.toFixed(1)}ms. Buildings: ${result.data.metadata.buildingCount}`);
    } catch (err: any) {
      appendLog(`ERROR during generation: ${err?.message || err}`);
    } finally {
      btnBake.disabled = false;
      btnPlayLayer.disabled = false;
      isPlaying = false;
      btnPlayLayer.innerText = '▶ Play Layers';
    }
  }

  btnBake.addEventListener('click', () => generateMap(false));
  btnPlayLayer.addEventListener('click', () => {
    if (!isPlaying) {
      isPlaying = true;
      btnPlayLayer.innerText = '⏹ Generating...';
      generateMap(true);
    }
  });

  // Download JSON
  btnDownload.addEventListener('click', () => {
    if (!currentJsonString) return;
    const preset = presetSelect.value || 'map';
    const filename = `map_${preset}.json`;

    const blob = new Blob([currentJsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    appendLog(`Downloaded '${filename}'.`);
  });

  // Export Canvas Image
  btnExportPng.addEventListener('click', () => {
    const dataUrl = renderer.exportPNG();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `city_map_${presetSelect.value || 'view'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    appendLog(`Exported map view as PNG.`);
  });

  // Auto-generate on boot so user sees the map right away!
  generateMap(false);
});
