import { MapBaker } from '../src/generation/MapBaker';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const seed = process.argv[2] ? parseInt(process.argv[2], 10) : 42;
  console.log(`[BakeScript] Executing 6-pass MapBaker with seed ${seed}...`);

  const { data, jsonString } = await MapBaker.bake(seed, (layer, total, msg) => {
    console.log(`[Pass ${layer}/${total - 1}] ${msg}`);
  });

  const targetPath = path.join(process.cwd(), 'static', 'generated_map.json');
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, jsonString, 'utf-8');

  console.log(
    `[BakeScript] Successfully baked map!\n` +
    `  Seed: ${data.seed}\n` +
    `  Tiles: ${data.gridDim}x${data.gridDim} (${data.tiles.length * (data.tiles[0]?.length || 1)} cells)\n` +
    `  Buildings: ${data.buildings.length}\n` +
    `  Saved to: ${targetPath} (${(jsonString.length / 1024).toFixed(1)} KB)`
  );
}

main().catch(err => {
  console.error('[BakeScript] Error:', err);
  process.exit(1);
});
