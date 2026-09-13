import { MapBaker } from '../src/generation/MapBaker';
import { CityPresetName } from '../src/generation/CityConfig';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const seedArg = process.argv[2];
  const presetArg = (process.argv[3] || 'retro_arcade') as CityPresetName;
  const seed = seedArg ? parseInt(seedArg, 10) : 42;

  console.log(`[BakeScript] Baking offline city map with seed ${seed} and preset '${presetArg}'...`);

  const { data, jsonString } = await MapBaker.bake(
    seed,
    presetArg,
    (layer, total, msg) => {
      console.log(`[Pass ${layer + 1}/${total}] ${msg}`);
    },
    0
  );

  const staticDir = path.join(process.cwd(), 'static');
  fs.mkdirSync(staticDir, { recursive: true });

  const targetMapData = path.join(staticDir, 'map_data.json');
  const targetGeneratedMap = path.join(staticDir, 'generated_map.json');

  fs.writeFileSync(targetMapData, jsonString, 'utf-8');
  fs.writeFileSync(targetGeneratedMap, jsonString, 'utf-8');

  console.log(`\n[BakeScript] Successfully baked city map!`);
  console.log(`  - Seed: ${data.seed}`);
  console.log(`  - Buildings: ${data.buildings.length}`);
  console.log(`  - Road tiles: ${data.tiles.flat().filter(t => t.overlayType === 1 || t.terrainType >= 2).length}`);
  console.log(`  - Written to: ${targetMapData}`);
  console.log(`  - Written to: ${targetGeneratedMap}`);
}

main().catch(err => {
  console.error('[BakeScript] Error:', err);
  process.exit(1);
});
