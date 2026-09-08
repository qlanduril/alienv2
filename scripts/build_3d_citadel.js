import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createAlienCitadelGLB() {
  const projectDir = path.dirname(__dirname);
  const outputDir = path.join(projectDir, 'static', '3d', 'spaceship_hq');
  const outputPath = path.join(outputDir, 'spaceship_hq.glb');

  if (fs.existsSync(outputPath)) return;

  fs.mkdirSync(outputDir, { recursive: true });

  const positions = [];
  const normals = [];
  const colors = [];
  const uvs = [];
  const indices = [];

  function addQuad(v0, v1, v2, v3, norm, col) {
    const baseIdx = positions.length / 3;
    positions.push(...v0, ...v1, ...v2, ...v3);
    for (let i = 0; i < 4; i++) {
      normals.push(...norm);
      colors.push(...col);
      uvs.push(0, 0);
    }
    indices.push(baseIdx, baseIdx + 1, baseIdx + 2, baseIdx, baseIdx + 2, baseIdx + 3);
  }

  function addCylinder(cx, cy, cz, rBot, rTop, height, sides, col) {
    for (let i = 0; i < sides; i++) {
      const a0 = (i / sides) * 2 * Math.PI;
      const a1 = ((i + 1) / sides) * 2 * Math.PI;

      const cos0 = Math.cos(a0), sin0 = Math.sin(a0);
      const cos1 = Math.cos(a1), sin1 = Math.sin(a1);

      const b0 = [cx + rBot * cos0, cy, cz + rBot * sin0];
      const b1 = [cx + rBot * cos1, cy, cz + rBot * sin1];
      const t0 = [cx + rTop * cos0, cy + height, cz + rTop * sin0];
      const t1 = [cx + rTop * cos1, cy + height, cz + rTop * sin1];

      let nx = (cos0 + cos1) * 0.5;
      let ny = 0.2;
      let nz = (sin0 + sin1) * 0.5;
      const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
      const norm = [nx / len, ny / len, nz / len];

      addQuad(b0, b1, t1, t0, norm, col);
    }
  }

  const HULL_DARK = [0.12, 0.16, 0.24];
  const HULL_ARMOR = [0.20, 0.28, 0.40];
  const NEON_CYAN = [0.0, 0.94, 1.0];
  const NEON_MAGENTA = [1.0, 0.0, 0.5];
  const GOLD_ACCENT = [0.95, 0.75, 0.2];

  // Base Fortress
  addCylinder(0, 0, 0, 24, 22, 12, 8, HULL_DARK);
  addCylinder(0, 12, 0, 22, 18, 6, 8, HULL_ARMOR);
  addCylinder(0, 18, 0, 18.2, 18.2, 2, 12, NEON_CYAN);

  // Middle Tier & Energy Rings
  addCylinder(0, 20, 0, 17, 13, 25, 8, HULL_DARK);
  addCylinder(0, 45, 0, 13.2, 13.2, 2.5, 12, NEON_MAGENTA);
  addCylinder(0, 47.5, 0, 12, 8, 30, 8, HULL_ARMOR);

  // Diagonal Wings
  for (const deg of [45, 135, 225, 315]) {
    const rad = (deg * Math.PI) / 180;
    const fx = Math.cos(rad) * 16;
    const fz = Math.sin(rad) * 16;
    addCylinder(fx, 30, fz, 3.5, 1.5, 20, 6, NEON_CYAN);
  }

  // Spire & Needle
  addCylinder(0, 77.5, 0, 7.5, 4.0, 35, 6, HULL_DARK);
  addCylinder(0, 112.5, 0, 4.2, 4.2, 3, 8, GOLD_ACCENT);
  addCylinder(0, 115.5, 0, 3.5, 0.2, 40, 6, NEON_CYAN);

  for (const deg of [0, 90, 180, 270]) {
    const rad = (deg * Math.PI) / 180;
    const ax = Math.cos(rad) * 6;
    const az = Math.sin(rad) * 6;
    addCylinder(ax, 110, az, 0.8, 0.1, 25, 4, NEON_MAGENTA);
  }

  // Pack Arrays
  const numVertices = positions.length / 3;
  const numIndices = indices.length;

  const posBuffer = Buffer.alloc(positions.length * 4);
  positions.forEach((v, i) => posBuffer.writeFloatLE(v, i * 4));

  const normBuffer = Buffer.alloc(normals.length * 4);
  normals.forEach((v, i) => normBuffer.writeFloatLE(v, i * 4));

  const colBuffer = Buffer.alloc(colors.length * 4);
  colors.forEach((v, i) => colBuffer.writeFloatLE(v, i * 4));

  let idxBuffer = Buffer.alloc(indices.length * 2);
  indices.forEach((v, i) => idxBuffer.writeUInt16LE(v, i * 2));

  while (idxBuffer.length % 4 !== 0) {
    idxBuffer = Buffer.concat([idxBuffer, Buffer.from([0])]);
  }

  const offsetPos = 0;
  const lenPos = posBuffer.length;
  const offsetNorm = lenPos;
  const lenNorm = normBuffer.length;
  const offsetCol = offsetNorm + lenNorm;
  const lenCol = colBuffer.length;
  const offsetIdx = offsetCol + lenCol;
  const lenIdx = idxBuffer.length;

  const binBuffer = Buffer.concat([posBuffer, normBuffer, colBuffer, idxBuffer]);

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  for (let i = 0; i < positions.length; i += 3) {
    minX = Math.min(minX, positions[i]);
    maxX = Math.max(maxX, positions[i]);
    minY = Math.min(minY, positions[i + 1]);
    maxY = Math.max(maxY, positions[i + 1]);
    minZ = Math.min(minZ, positions[i + 2]);
    maxZ = Math.max(maxZ, positions[i + 2]);
  }

  const gltfJson = {
    asset: { version: "2.0", generator: "ALINV-3D Procedural GLB Generator" },
    scenes: [{ nodes: [0] }],
    nodes: [{ name: "AlienSpaceshipHQ", mesh: 0 }],
    meshes: [{
      name: "AlienCitadelMesh",
      primitives: [{
        attributes: { POSITION: 0, NORMAL: 1, COLOR_0: 2 },
        indices: 3,
        mode: 4
      }]
    }],
    accessors: [
      { bufferView: 0, byteOffset: 0, componentType: 5126, count: numVertices, type: "VEC3", max: [maxX, maxY, maxZ], min: [minX, minY, minZ] },
      { bufferView: 1, byteOffset: 0, componentType: 5126, count: numVertices, type: "VEC3" },
      { bufferView: 2, byteOffset: 0, componentType: 5126, count: numVertices, type: "VEC3" },
      { bufferView: 3, byteOffset: 0, componentType: 5123, count: numIndices, type: "SCALAR" }
    ],
    bufferViews: [
      { buffer: 0, byteOffset: offsetPos, byteLength: lenPos, target: 34962 },
      { buffer: 0, byteOffset: offsetNorm, byteLength: lenNorm, target: 34962 },
      { buffer: 0, byteOffset: offsetCol, byteLength: lenCol, target: 34962 },
      { buffer: 0, byteOffset: offsetIdx, byteLength: lenIdx, target: 34963 }
    ],
    buffers: [{ byteLength: binBuffer.length }]
  };

  let jsonStr = JSON.stringify(gltfJson);
  while (Buffer.byteLength(jsonStr, 'utf-8') % 4 !== 0) {
    jsonStr += ' ';
  }
  const jsonBuffer = Buffer.from(jsonStr, 'utf-8');

  const totalLength = 12 + (8 + jsonBuffer.length) + (8 + binBuffer.length);
  const glbBuffer = Buffer.alloc(totalLength);

  let offset = 0;
  glbBuffer.writeUInt32LE(0x46546C67, offset); offset += 4; // Magic "glTF"
  glbBuffer.writeUInt32LE(2, offset); offset += 4;          // Version 2
  glbBuffer.writeUInt32LE(totalLength, offset); offset += 4;

  // JSON Chunk
  glbBuffer.writeUInt32LE(jsonBuffer.length, offset); offset += 4;
  glbBuffer.writeUInt32LE(0x4E4F534A, offset); offset += 4; // "JSON"
  jsonBuffer.copy(glbBuffer, offset); offset += jsonBuffer.length;

  // BIN Chunk
  glbBuffer.writeUInt32LE(binBuffer.length, offset); offset += 4;
  glbBuffer.writeUInt32LE(0x004E4942, offset); offset += 4; // "BIN\0"
  binBuffer.copy(glbBuffer, offset);

  fs.writeFileSync(outputPath, glbBuffer);
  console.log(`[build_3d_citadel] Created 3D Alien Spaceship HQ GLB asset -> ${outputPath} (${glbBuffer.length} bytes)`);
}

createAlienCitadelGLB();
