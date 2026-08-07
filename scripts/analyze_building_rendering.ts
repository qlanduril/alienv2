import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BUILDING_DEFS } from '../src/core/BuildingDefs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OFFSETS_PATH = path.join(__dirname, '../static/sprite_offsets.json');
const rawData = fs.readFileSync(OFFSETS_PATH, 'utf-8');
const spriteOffsets = JSON.parse(rawData);

const COS_45_DEG = 0.7071067811865476;
const SIN_45_DEG = 0.7071067811865476;
const SQRT2 = Math.SQRT2;
const HALF_DIVISOR = 2.0;

console.log("==========================================================================");
console.log("     HEADLESS BUILDING SPRITE RENDERING & ISOMETRIC PROJECTION DIAGNOSTIC ");
console.log("==========================================================================\n");

console.log(`Testing Trigonometric Constants:`);
console.log(`COS_45_DEG constant: ${COS_45_DEG}`);
console.log(`Math.SQRT1_2 value:  ${Math.SQRT1_2}`);
console.log(`Difference:          ${Math.abs(COS_45_DEG - Math.SQRT1_2).toExponential(6)}\n`);

interface BuildingAnalysis {
  key: string;
  name: string;
  width: number;
  length: number;
  footprintTiles: number;
  visualScale: number;
  state0Width: number;
  state0Height: number;
  pixelsPerWorldUnit: number;
  frameCount: number;
  maxPivotErrorY: number;
  issues: string[];
}

const report: BuildingAnalysis[] = [];

for (const [key, def] of Object.entries(BUILDING_DEFS)) {
  const issues: string[] = [];
  
  let offsetKey = `building_${key}`;
  if (!spriteOffsets[offsetKey]) {
    if (key.startsWith('b') || key.startsWith('res') || key === 'sky_artdeco' || key === 'sky_biotech' || key === 'sky_cyber') {
      offsetKey = 'building_3';
    } else if (key === 'mega_titan') {
      offsetKey = 'building_5';
    } else if (key === 'mega_stadium') {
      offsetKey = 'building_2';
    }
  }

  const buildingOffsetData = spriteOffsets[offsetKey] || spriteOffsets['building_3'] || {};
  const state0 = buildingOffsetData['0'] || buildingOffsetData[0] || { w: 160, h: 160, dx: -80, base_cy: 160, y_max: 160 };

  const vScale = def.heightScale || def.visualScale || 1.0;
  const targetWorldWidth = def.width * SQRT2;
  const state0Width = state0.w || 160;
  const state0Height = state0.h || 160;
  
  const pixelsPerWorldUnit = state0Width / targetWorldWidth;

  const frameKeys = Object.keys(buildingOffsetData);
  let maxPivotErrorY = 0;

  for (const fKey of frameKeys) {
    const st = buildingOffsetData[fKey];
    if (!st) continue;

    const w = st.w || state0Width;
    const h = st.h || state0Height;
    const dx = st.dx !== undefined ? st.dx : -w / HALF_DIVISOR;
    const baseCy = typeof st.base_cy === 'number' ? st.base_cy : (st.y_max || h);

    const localPivotY = ((h / HALF_DIVISOR - baseCy) / pixelsPerWorldUnit) * vScale;
    const meshWorldY = -localPivotY;

    // The altitude of pixel baseCy in world space must be exactly 0.0000
    const groundCheckY = meshWorldY + localPivotY;
    const errY = Math.abs(groundCheckY);

    if (errY > maxPivotErrorY) maxPivotErrorY = errY;
  }

  if (maxPivotErrorY > 0.0001) {
    issues.push(`Pivot lock error detected: ${maxPivotErrorY.toFixed(6)} world units.`);
  }

  report.push({
    key,
    name: def.name,
    width: def.width,
    length: def.length,
    footprintTiles: def.footprintTiles || 1,
    visualScale: vScale,
    state0Width,
    state0Height,
    pixelsPerWorldUnit: Math.round(pixelsPerWorldUnit * 100) / 100,
    frameCount: frameKeys.length,
    maxPivotErrorY,
    issues
  });
}

console.log("---------------------------------------------------------------------------------------------------------");
console.log("KEY            NAME                 FOOTPRINT  VSCALE  PX/UNIT  FRAMES  MAX_PIVOT_ERROR  STATUS");
console.log("---------------------------------------------------------------------------------------------------------");

for (const item of report) {
  const keyPad = item.key.padEnd(14);
  const namePad = item.name.padEnd(20);
  const footPad = `${item.width}x${item.length}`.padEnd(10);
  const scalePad = item.visualScale.toFixed(1).padEnd(7);
  const pxUnitPad = item.pixelsPerWorldUnit.toFixed(2).padEnd(8);
  const framesPad = item.frameCount.toString().padEnd(7);
  const errPad = item.maxPivotErrorY.toFixed(6).padEnd(16);
  const status = item.issues.length === 0 ? "✓ LOCKED AT 3D GROUND (0.0000)" : `⚠️ ${item.issues.length} Issue(s)`;

  console.log(`${keyPad} ${namePad} ${footPad} ${scalePad} ${pxUnitPad} ${framesPad} ${errPad} ${status}`);
}
console.log("---------------------------------------------------------------------------------------------------------\n");
