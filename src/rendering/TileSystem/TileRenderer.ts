import * as THREE from 'three';
import { TileMap, TerrainType } from './TileMap';
import { SceneManager } from '../SceneManager';
import { AssetLoader } from '../../assets/AssetLoader';

// --- TileRenderer Constants ---
const ZERO_VALUE = 0;
const INITIAL_SCALE_UNIT = 1;
const GROUND_ALTITUDE = 0;
const MAX_INSTANCES_PER_TYPE = 8000;
const CANVAS_DIMENSION = 512;
const TEXTURE_REPEAT_COUNT = 1;
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
        // Light blue-grey concrete — clearly brighter than asphalt
        ctx.fillStyle = '#5a6473';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        // Paving joint grid
        ctx.strokeStyle = '#424c58';
        ctx.lineWidth = 5;
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
          const val = Math.floor(Math.random() * 30 + 80);  // lighter range: 80–110
          ctx.fillStyle = `rgb(${val},${val + 4},${val + 8})`;
          ctx.fillRect(x, y, 2, 2);
        }

      } else if (type === TerrainType.PLAZA_STONE) {
        // Warm sandstone / travertine — distinctly beige/tan vs dark roads
        ctx.fillStyle = '#9e8e78';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        // Architectural stone tile grout lines
        ctx.strokeStyle = '#6e6050';
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

        // Warm speckle texture
        for (let i = 0; i < 1500; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          const r = Math.floor(Math.random() * 30 + 130);
          const g = Math.floor(Math.random() * 25 + 118);
          const b = Math.floor(Math.random() * 20 + 95);
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, y, 2, 2);
        }

      } else if (type === TerrainType.GRASS) {
        // Vivid medium green — clearly distinct from dark asphalt roads
        ctx.fillStyle = '#2d6a2d';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        // Fine grass noise with brighter green variation
        for (let i = ZERO_VALUE; i < 8000; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          const g = Math.floor(Math.random() * 55 + 90);  // 90–145 green channel
          const r = Math.floor(Math.random() * 10 + 25);  // slight warmth variation
          ctx.fillStyle = `rgb(${r}, ${g}, ${r})`;
          ctx.fillRect(x, y, 3, 3);
        }

        // Subtle darker grass blade streaks for depth
        ctx.fillStyle = 'rgba(10, 60, 10, 0.4)';
        for (let i = 0; i < 120; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          ctx.fillRect(x, y, 1, Math.floor(Math.random() * 8 + 4));
        }
      } else if (type === TerrainType.WATER) {
        // Deep navy harbor blue
        ctx.fillStyle = '#0d3d7a';
        ctx.fillRect(ZERO_VALUE, ZERO_VALUE, CANVAS_DIMENSION, CANVAS_DIMENSION);

        // Lighter blue mid-layer shimmer
        ctx.fillStyle = '#1565c0';
        for (let i = 0; i < 80; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          ctx.fillRect(x, y, Math.random() * 40 + 20, Math.random() * 8 + 4);
        }

        // Bright cyan wave highlights
        ctx.strokeStyle = '#55ccff';
        ctx.lineWidth = 2;
        for (let i = 0; i < 200; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          const len = Math.random() * 40 + 10;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + len, y);
          ctx.stroke();
        }

        // Subtle white foam tips
        ctx.fillStyle = 'rgba(200, 240, 255, 0.25)';
        for (let i = 0; i < 40; i++) {
          const x = Math.random() * CANVAS_DIMENSION;
          const y = Math.random() * CANVAS_DIMENSION;
          ctx.fillRect(x, y, Math.random() * 20 + 5, 2);
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
        r = 0.1;
        m = 0.8;
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
    const mapSize = 2048; // 2048x2048 texture resolution for 64x64 grid (32px per tile)
    const cellSize = mapSize / TileMap.GRID_DIM;

    const canvas = document.createElement('canvas');
    canvas.width = mapSize;
    canvas.height = mapSize;
    const ctx = canvas.getContext('2d')!;

    // PASS 1: Base Land & Water Layer (Grass & Sea)
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
        const cell = cells[gx][gz];
        const px = gx * cellSize;
        const py = gz * cellSize;

        if (cell.terrainType === TerrainType.WATER) {
          ctx.fillStyle = '#0d3d7a'; // Navy harbor water
        } else {
          ctx.fillStyle = '#2d6a2d'; // Park green grass
        }
        ctx.fillRect(px, py, cellSize, cellSize);
      }
    }

    // PASS 2: Connected Road Network Layer (Asphalt, Continuous Yellow Center Lines & Zebra Crosswalks)
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
        const cell = cells[gx][gz];
        const px = gx * cellSize;
        const py = gz * cellSize;
        const t = cell.terrainType;

        if (t === TerrainType.ROAD_STRAIGHT_NS || t === TerrainType.ROAD_STRAIGHT_EW || t === TerrainType.ROAD_INTERSECTION) {
          // Asphalt base
          ctx.fillStyle = '#1c1f24';
          ctx.fillRect(px, py, cellSize, cellSize);

          if (t === TerrainType.ROAD_STRAIGHT_NS) {
            // Outer white curb lines
            ctx.fillStyle = '#d0d7e0';
            ctx.fillRect(px + 1, py, 1, cellSize);
            ctx.fillRect(px + cellSize - 2, py, 1, cellSize);
            // Yellow center double line
            ctx.fillStyle = '#f5b800';
            ctx.fillRect(px + cellSize / 2 - 1, py, 2, cellSize);
            // Dashed white lane dividers
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(px + cellSize * 0.25, py + 4, 1, 8);
            ctx.fillRect(px + cellSize * 0.25, py + 20, 1, 8);
            ctx.fillRect(px + cellSize * 0.75, py + 4, 1, 8);
            ctx.fillRect(px + cellSize * 0.75, py + 20, 1, 8);

          } else if (t === TerrainType.ROAD_STRAIGHT_EW) {
            // Outer white curb lines
            ctx.fillStyle = '#d0d7e0';
            ctx.fillRect(px, py + 1, cellSize, 1);
            ctx.fillRect(px, py + cellSize - 2, cellSize, 1);
            // Yellow center double line
            ctx.fillStyle = '#f5b800';
            ctx.fillRect(px, py + cellSize / 2 - 1, cellSize, 2);
            // Dashed white lane dividers
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(px + 4, py + cellSize * 0.25, 8, 1);
            ctx.fillRect(px + 20, py + cellSize * 0.25, 8, 1);
            ctx.fillRect(px + 4, py + cellSize * 0.75, 8, 1);
            ctx.fillRect(px + 20, py + cellSize * 0.75, 8, 1);

          } else if (t === TerrainType.ROAD_INTERSECTION) {
            // 4-Way Crosswalk Zebra Stripes
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(px + 4, py + 2, cellSize - 8, 3);
            ctx.fillRect(px + 4, py + cellSize - 5, cellSize - 8, 3);
            ctx.fillRect(px + 2, py + 4, 3, cellSize - 8);
            ctx.fillRect(px + cellSize - 5, py + 4, 3, cellSize - 8);
            // Corner curb caps
            ctx.fillStyle = '#6a7280';
            ctx.fillRect(px, py, 2, 2);
            ctx.fillRect(px + cellSize - 2, py, 2, 2);
            ctx.fillRect(px, py + cellSize - 2, 2, 2);
            ctx.fillRect(px + cellSize - 2, py + cellSize - 2, 2, 2);
          }
        }
      }
    }

    // PASS 3: Urban Building Lots & Courtyards Layer (Sidewalk Concrete & Plaza Stone)
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
        const cell = cells[gx][gz];
        const px = gx * cellSize;
        const py = gz * cellSize;

        if (cell.terrainType === TerrainType.SIDEWALK) {
          ctx.fillStyle = '#5a6473'; // Brighter concrete sidewalk
          ctx.fillRect(px, py, cellSize, cellSize);
          ctx.strokeStyle = '#424c58';
          ctx.lineWidth = 1;
          ctx.strokeRect(px + 0.5, py + 0.5, cellSize - 1, cellSize - 1);
        } else if (cell.terrainType === TerrainType.PLAZA_STONE) {
          ctx.fillStyle = '#9e8e78'; // Sandstone travertine plaza
          ctx.fillRect(px, py, cellSize, cellSize);
          ctx.strokeStyle = '#6e6050';
          ctx.lineWidth = 1;
          ctx.strokeRect(px + 0.5, py + 0.5, cellSize - 1, cellSize - 1);
        }
      }
    }

    const groundTex = new THREE.CanvasTexture(canvas);
    groundTex.wrapS = THREE.ClampToEdgeWrapping;
    groundTex.wrapT = THREE.ClampToEdgeWrapping;
    groundTex.minFilter = THREE.LinearFilter;
    groundTex.magFilter = THREE.LinearFilter;
    groundTex.anisotropy = TEXTURE_ANISOTROPY;
    groundTex.needsUpdate = true;

    const groundGeo = new THREE.PlaneGeometry(TileMap.MAP_BOUNDS, TileMap.MAP_BOUNDS);
    const groundMat = new THREE.MeshStandardMaterial({
      map: groundTex,
      roughness: DEFAULT_ROUGHNESS,
      metalness: DEFAULT_METALNESS
    });

    const singleGroundMesh = new THREE.Mesh(groundGeo, groundMat);
    singleGroundMesh.rotation.x = GROUND_ROTATION_X;
    singleGroundMesh.position.set(0, GROUND_ALTITUDE, 0);
    singleGroundMesh.receiveShadow = true;

    this.layer0Group.clear();
    this.layer0Group.add(singleGroundMesh);
  }
}
