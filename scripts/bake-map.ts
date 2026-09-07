import { MapBaker } from '../src/generation/MapBaker';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const seed = process.argv[2] ? parseInt(process.argv[2], 10) : 1337;
  console.log(`[BakeScript] Baking offline city map with seed ${seed}...`);

  const { data, jsonString } = await MapBaker.bake(seed, (layer, total, msg) => {
    console.log(`[Layer ${layer}/${total - 1}] ${msg}`);
  });

  const targetPath = path.join(process.cwd(), 'static', 'generated_map.json');
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, jsonString, 'utf-8');

  console.log(`[BakeScript] Successfully baked map with ${data.buildings.length} buildings (seed ${seed})!`);
  console.log(`[BakeScript] Saved to: ${targetPath}`);
}

main().catch(err => {
  console.error('[BakeScript] Error:', err);
  process.exit(1);
});
