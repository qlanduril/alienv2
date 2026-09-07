import { MapBaker } from './MapBaker';
import { GeneratedMapData } from './GeneratedMapSchema';
import { CityPresetName } from './CityConfig';

let currentMapData: GeneratedMapData | null = null;
let currentJsonString: string | null = null;

document.addEventListener('DOMContentLoaded', () => {
  const seedInput = document.getElementById('seed-input') as HTMLInputElement;
  const presetSelect = document.getElementById('preset-select') as HTMLSelectElement;
  const btnBake = document.getElementById('btn-bake') as HTMLButtonElement;
  const btnDownload = document.getElementById('btn-download') as HTMLButtonElement;
  const progressBar = document.getElementById('progress-bar') as HTMLProgressElement;
  const statusText = document.getElementById('status-text') as HTMLDivElement;
  const logTerminal = document.getElementById('log-terminal') as HTMLTextAreaElement;
  const statsPanel = document.getElementById('stats-panel') as HTMLDivElement;

  function appendLog(msg: string) {
    if (!logTerminal) return;
    const timestamp = new Date().toLocaleTimeString();
    logTerminal.value += `[${timestamp}] ${msg}\n`;
    logTerminal.scrollTop = logTerminal.scrollHeight;
  }

  btnBake.addEventListener('click', async () => {
    const seed = parseInt(seedInput.value, 10) || 42;
    const preset = (presetSelect.value || 'retro_arcade') as CityPresetName;
    btnBake.disabled = true;
    btnDownload.disabled = true;
    logTerminal.value = '';

    appendLog(`Starting offline map bake for preset '${preset}' with seed ${seed}...`);

    try {
      const { data, jsonString } = await MapBaker.bake(seed, preset, (layer, total, msg) => {
        const percent = Math.round(((layer + 1) / total) * 100);
        progressBar.value = percent;
        statusText.innerText = `${percent}% — ${msg}`;
        appendLog(`[Pass ${layer}/${total - 1}] ${msg}`);
      });

      currentMapData = data;
      currentJsonString = jsonString;

      statusText.innerText = `100% — Bake Completed Successfully!`;
      btnDownload.disabled = false;

      const kbSize = (jsonString.length / 1024).toFixed(1);
      statsPanel.innerHTML = `
        <h3>Bake Complete (${preset})</h3>
        <ul>
          <li><strong>Preset:</strong> ${preset}</li>
          <li><strong>Version:</strong> ${data.version}</li>
          <li><strong>Seed:</strong> ${data.seed}</li>
          <li><strong>Buildings:</strong> ${data.metadata.buildingCount}</li>
          <li><strong>JSON File Size:</strong> ${kbSize} KB</li>
          <li><strong>Total Bake Time:</strong> ${data.metadata.layerTimings['Total Bake Time']?.toFixed(1)} ms</li>
        </ul>
      `;

      appendLog(`Done! Map serialized (${kbSize} KB). Click 'Download JSON' to save.`);
    } catch (err: any) {
      appendLog(`ERROR during map bake: ${err?.message || err}`);
      statusText.innerText = `Bake Failed — Check Terminal Log`;
    } finally {
      btnBake.disabled = false;
    }
  });

  btnDownload.addEventListener('click', () => {
    if (!currentJsonString) return;
    const preset = presetSelect.value || 'map';
    const filename = `generated_${preset}.json`;

    const blob = new Blob([currentJsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    appendLog(`Downloaded '${filename}'. Move this file into static/folder!`);
  });
});
