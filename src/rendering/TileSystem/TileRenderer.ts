import * as THREE from 'three';
import { TileMap, TerrainType } from './TileMap';
import { SceneManager } from '../SceneManager';

// --- TileRenderer Constants ---
const ZERO_VALUE = 0;
const INITIAL_SCALE_UNIT = 1;
const GROUND_ALTITUDE = 0;
const MAX_INSTANCES_PER_TYPE = 5000;
const CANVAS_DIMENSION = 512;
const TEXTURE_REPEAT_COUNT = 2;
const TEXTURE_ANISOTROPY = 4;
const GROUND_ROTATION_X = -Math.PI / 2;

// Roughness & Metalness Constants
const SIDEWALK_ROUGHNESS = 0.75;
const DEFAULT_ROUGHNESS = 0.9;
const DEFAULT_METALNESS = 0.05;

export class TileRenderer {
  private static layer0Group: THREE.Group; // Base Terrain & Connected Road Network
  private static instancedTerrainMeshes: Map<TerrainType, THREE.InstancedMesh> = new Map();

  public static init() {
    this.layer0Group = new THREE.Group();
    this.layer0Group.name = 'Layer0_ConnectedRoadNetwork';

    SceneManager.groundGroup.add(this.layer0Group);

    this.buildTerrainMaterialsAndMeshes();
  }

  private static buildTerrainMaterialsAndMeshes() {
    const generateTexture = (type: TerrainType): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = CANVAS_DIMENSION;
      canvas.height = CANVAS_DIMENSION;
      const ctx = canvas.getContext('2d')!;

      // Dark asphalt base
      const drawAsphaltBase = () => {
        ctx.fillStyle = '#1c1f24';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);
        // Asphalt grain noise
        for (let i = ZERO_VALUE; i < 4000; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          const val = Math.floor(Math.random() * 35 + 18);
          ctx.fillStyle = `rgb(${val},${val},${val})`;
          ctx.fillRect(x, y, 2, 2);
        }
      };

      if (type === TerrainType.ROAD_STRAIGHT_NS) {
        drawAsphaltBase();

        // Outer white curb lines
        ctx.fillStyle = '#d0d7e0';
        ctx.fillRect(16, ZERO_VALUE, 12, CANVAS_DIMENSION);
        ctx.fillRect(484, ZERO_VALUE, 12, CANVAS_DIMENSION);

        // Double yellow center line
        ctx.fillStyle = '#f5b800';
        ctx.fillRect(248, ZERO_VALUE, 6, CANVAS_DIMENSION);
        ctx.fillRect(258, ZERO_VALUE, 6, CANVAS_DIMENSION);

        // Dashed white lane dividers
        ctx.fillStyle = '#ffffff';
        for (let y = 16; y < CANVAS_DIMENSION; y += 64) {
          ctx.fillRect(132, y, 8, 32);
          ctx.fillRect(372, y, 8, 32);
        }

      } else if (type === TerrainType.ROAD_STRAIGHT_EW) {
        drawAsphaltBase();

        // Outer white curb lines
        ctx.fillStyle = '#d0d7e0';
        ctx.fillRect(ZERO_VALUE, 16, CANVAS_DIMENSION, 12);
        ctx.fillRect(ZERO_VALUE, 484, CANVAS_DIMENSION, 12);

        // Double yellow center line
        ctx.fillStyle = '#f5b800';
        ctx.fillRect(ZERO_VALUE, 248, CANVAS_DIMENSION, 6);
        ctx.fillRect(ZERO_VALUE, 258, CANVAS_DIMENSION, 6);

        // Dashed white lane dividers
        ctx.fillStyle = '#ffffff';
        for (let x = 16; x < CANVAS_DIMENSION; x += 64) {
          ctx.fillRect(x, 132, 32, 8);
          ctx.fillRect(x, 372, 32, 8);
        }

      } else if (type === TerrainType.ROAD_INTERSECTION) {
        drawAsphaltBase();

        // 4-Way Crosswalk Zebra Stripes
        ctx.fillStyle = '#ffffff';
        for (let x = 40; x < 472; x += 32) {
          ctx.fillRect(x, 20, 18, 50);
          ctx.fillRect(x, 442, 18, 50);
        }
        for (let y = 40; y < 472; y += 32) {
          ctx.fillRect(20, y, 50, 18);
          ctx.fillRect(442, y, 50, 18);
        }

        // Corner sidewalk curb caps
        ctx.fillStyle = '#6a7280';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, 20, 20);
        ctx.fillRect(492, ZERO_VALUE, 20, 20);
        ctx.fillRect(ZERO_VALUE, 492, 20, 20);
        ctx.fillRect(492, 492, 20, 20);

      } else if (type === TerrainType.SIDEWALK) {
        ctx.fillStyle = '#3a404a';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        // Paving joint grid
        ctx.strokeStyle = '#282c33';
        ctx.lineWidth = 6;
        for (let p = ZERO_VALUE; p <= CANVAS_DIMENSION; p += 128) {
          ctx.beginPath();
          ctx.moveTo(p, ZERO_VALUE);
          ctx.lineTo(p, CANVAS_DIMENSION);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(ZERO_VALUE, p);
          ctx.lineTo(CANVAS_DIMENSION, p);
          ctx.stroke();
        }

        // Concrete grain texture
        for (let i = ZERO_VALUE; i < 2000; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          const val = Math.floor(Math.random() * 30 + 55);
          ctx.fillStyle = `rgb(${val},${val},${val})`;
          ctx.fillRect(x, y, 2, 2);
        }

      } else if (type === TerrainType.PLAZA_STONE) {
        ctx.fillStyle = '#2d323b';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        // Architectural slate tiles
        ctx.strokeStyle = '#1e2128';
        ctx.lineWidth = 4;
        for (let y = ZERO_VALUE; y < CANVAS_DIMENSION; y += 64) {
          ctx.beginPath();
          ctx.moveTo(ZERO_VALUE, y);
          ctx.lineTo(CANVAS_DIMENSION, y);
          ctx.stroke();
          const offset = (y / 64) % 2 === ZERO_VALUE ? ZERO_VALUE : 64;
          for (let x = offset; x < CANVAS_DIMENSION; x += 128) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 64);
            ctx.stroke();
          }
        }

      } else if (type === TerrainType.GRASS) {
        ctx.fillStyle = '#1e381e';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        for (let i = ZERO_VALUE; i < 6000; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          const g = Math.floor(Math.random() * 60 + 50);
          ctx.fillStyle = `rgb(18, ${g}, 18)`;
          ctx.fillRect(x, y, 3, 3);
        }
      } else if (type === TerrainType.WATER) {
        ctx.fillStyle = '#1ca3ec'; // Deep harbor blue
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        // Light wave patterns
        ctx.strokeStyle = '#23b5f7';
        ctx.lineWidth = 2;
        for (let i = 0; i < 150; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          const len = Math.random() * 30 + 10;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + len, y);
          ctx.stroke();
        }
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(TEXTURE_REPEAT_COUNT, TEXTURE_REPEAT_COUNT);
      tex.anisotropy = TEXTURE_ANISOTROPY;
      return tex;
    };

    const planeGeo = new THREE.PlaneGeometry(TileMap.TILE_SIZE, TileMap.TILE_SIZE);

    const terrainTypes = [
      TerrainType.ROAD_STRAIGHT_NS,
      TerrainType.ROAD_STRAIGHT_EW,
      TerrainType.ROAD_INTERSECTION,
      TerrainType.SIDEWALK,
      TerrainType.PLAZA_STONE,
      TerrainType.GRASS,
      TerrainType.WATER
    ];

    terrainTypes.forEach(tType => {
      const tex = generateTexture(tType);

      let r = DEFAULT_ROUGHNESS;
      let m = DEFAULT_METALNESS;
      if (tType === TerrainType.SIDEWALK || tType === TerrainType.PLAZA_STONE) {
        r = SIDEWALK_ROUGHNESS;
      } else if (tType === TerrainType.WATER) {
        r = 0.1; // Low roughness for water reflection
        m = 0.8; // High metalness
      }

      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: r,
        metalness: m
      });

      const instancedMesh = new THREE.InstancedMesh(planeGeo, mat, MAX_INSTANCES_PER_TYPE);
      instancedMesh.receiveShadow = true;
      instancedMesh.count = ZERO_VALUE;

      this.instancedTerrainMeshes.set(tType, instancedMesh);
      this.layer0Group.add(instancedMesh);
    });
  }

  public static buildMapMesh() {
    const cells = TileMap.getAllCells();
    const counts = new Map<TerrainType, number>();

    this.instancedTerrainMeshes.forEach((_, key) => counts.set(key, ZERO_VALUE));
    const dummy = new THREE.Object3D();

    // Render Connected Ground & Road Grid
    for (let gx = ZERO_VALUE; gx < TileMap.GRID_DIM; gx++) {
      for (let gz = ZERO_VALUE; gz < TileMap.GRID_DIM; gz++) {
        const cell = cells[gx][gz];

        const mesh = this.instancedTerrainMeshes.get(cell.terrainType);
        if (mesh) {
          const count = counts.get(cell.terrainType) || ZERO_VALUE;

          dummy.position.set(cell.worldX, GROUND_ALTITUDE, cell.worldZ);
          dummy.rotation.set(GROUND_ROTATION_X, ZERO_VALUE, ZERO_VALUE);
          dummy.scale.set(INITIAL_SCALE_UNIT, INITIAL_SCALE_UNIT, INITIAL_SCALE_UNIT);
          dummy.updateMatrix();

          mesh.setMatrixAt(count, dummy.matrix);
          counts.set(cell.terrainType, count + 1);
        }
      }
    }

    this.instancedTerrainMeshes.forEach((mesh, tType) => {
      mesh.count = counts.get(tType) || ZERO_VALUE;
      mesh.instanceMatrix.needsUpdate = true;
    });
  }
}
