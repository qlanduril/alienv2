import { MapAnalyzer } from '../src/generation/MapAnalyzer';
import { GeneratedMapData } from '../src/generation/GeneratedMapSchema';
import * as fs from 'fs';
import * as path from 'path';

function runAnalysis() {
  const targetFile = process.argv[2]
    ? path.resolve(process.cwd(), process.argv[2])
    : path.resolve(process.cwd(), 'static/generated_map.json');

  console.log(`\n======================================================`);
  console.log(`   ALINV-3D — CITY MAP HYPERPARAMETER ANALYZER        `);
  console.log(`======================================================\n`);
  console.log(`Analyzing map file: ${targetFile}`);

  if (!fs.existsSync(targetFile)) {
    console.error(`Error: Map file not found at ${targetFile}`);
    process.exit(1);
  }

  const rawJson = fs.readFileSync(targetFile, 'utf-8');
  const mapData: GeneratedMapData = JSON.parse(rawJson);

  const report = MapAnalyzer.analyzeMap(mapData);

  console.log(`\n--- GENERAL MAP INFO ---`);
  console.log(`Seed: ${report.seed}`);
  console.log(`Total Grid Tiles: ${report.totalTiles} (${mapData.gridDim}x${mapData.gridDim})`);
  console.log(`Total Spawned Buildings: ${report.totalBuildings}`);
  console.log(`Overall Compliance Score: ${report.score} / 100`);

  console.log(`\n--- 1. LAND-USE COVERAGE BUDGET ---`);
  console.log(`Water Ratio:          ${(report.landUse.waterRatio * 100).toFixed(2)}%  (Target: 12 - 18%)`);
  console.log(`Road Network Ratio:   ${(report.landUse.roadRatio * 100).toFixed(2)}%  (Target: 18 - 22%)`);
  console.log(`Negative Space Ratio: ${(report.landUse.negativeSpaceRatio * 100).toFixed(2)}%  (Target: 20 - 25%)`);
  console.log(`Built Footprint Ratio:${(report.landUse.builtLotRatio * 100).toFixed(2)}%  (Target: 40 - 45%)`);

  console.log(`\n--- 2. BUILDING HEIGHT HIERARCHY ---`);
  console.log(`Mega-Titan (Supertall): ${(report.heightDistribution.megaTitan.ratio * 100).toFixed(2)}% (${report.heightDistribution.megaTitan.count} bldgs)`);
  console.log(`High-Rise (Towers):     ${(report.heightDistribution.highRise.ratio * 100).toFixed(2)}% (${report.heightDistribution.highRise.count} bldgs)`);
  console.log(`Mid-Rise (Offices):     ${(report.heightDistribution.midRise.ratio * 100).toFixed(2)}% (${report.heightDistribution.midRise.count} bldgs)`);
  console.log(`Low-Rise (Shops/Houses):${(report.heightDistribution.lowRise.ratio * 100).toFixed(2)}% (${report.heightDistribution.lowRise.count} bldgs)`);

  console.log(`\n--- 3. FOOTPRINT SIZE DISTRIBUTION ---`);
  console.log(`1x1 Lots: ${(report.footprintDistribution.size1x1.ratio * 100).toFixed(2)}% (${report.footprintDistribution.size1x1.count})`);
  console.log(`2x2 Lots: ${(report.footprintDistribution.size2x2.ratio * 100).toFixed(2)}% (${report.footprintDistribution.size2x2.count})`);
  console.log(`3x3 Lots: ${(report.footprintDistribution.size3x3.ratio * 100).toFixed(2)}% (${report.footprintDistribution.size3x3.count})`);
  console.log(`4x4 Lots: ${(report.footprintDistribution.size4x4.ratio * 100).toFixed(2)}% (${report.footprintDistribution.size4x4.count})`);

  console.log(`\n--- 4. BLOCK DENSITY & MONOLITH METRICS ---`);
  console.log(`Downtown Core Occupancy:    ${(report.blockOccupancy.downtownCoreOccupancy * 100).toFixed(2)}% (Cap: 80%)`);
  console.log(`Max Downtown Streak:        ${report.blockOccupancy.maxDowntownBuildingStreak} consecutive tiles (Cap: 4)`);
  console.log(`Suburban Borough Occupancy: ${(report.blockOccupancy.suburbanOccupancy * 100).toFixed(2)}% (Target: ~45%)`);

  console.log(`\n--- 5. PALETTE & TEXTURE DIVERSITY ---`);
  for (const [key, data] of Object.entries(report.paletteDistribution)) {
    console.log(`${key.padEnd(22)}: ${(data.ratio * 100).toFixed(2)}% (${data.count} bldgs)`);
  }

  console.log(`\n--- DIAGNOSTICS & AUDIT WARNS ---`);
  if (report.diagnostics.length === 0) {
    console.log(`✅ All hyperparameter targets met cleanly! No defects detected.`);
  } else {
    report.diagnostics.forEach(d => console.log(d));
  }
  console.log(`======================================================\n`);
}

runAnalysis();
