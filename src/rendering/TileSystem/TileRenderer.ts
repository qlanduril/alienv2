import * as THREE from 'three';
import { TileMap, TerrainType } from './TileMap';
import { SceneManager } from '../SceneManager';

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
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;

      // Dark asphalt base
      const drawAsphaltBase = () => {
        ctx.fillStyle = '#1c1f24';
        ctx.fillRect(0, 0, 512, 512);
        // Asphalt grain noise
        for (let i = 0; i < 4000; i++) {
          const x = Math.random() * 512;
          const y = Math.random() * 512;
          const val = Math.floor(Math.random() * 35 + 18);
          ctx.fillStyle = `rgb(${val},${val},${val})`;
          ctx.fillRect(x, y, 2, 2);
        }
      };

      if (type === TerrainType.ROAD_STRAIGHT_NS) {
        drawAsphaltBase();

        // Outer white curb lines
        ctx.fillStyle = '#d0d7e0';
        ctx.fillRect(16, 0, 12, 512);
        ctx.fillRect(484, 0, 12, 512);

        // Double yellow center line
        ctx.fillStyle = '#f5b800';
        ctx.fillRect(248, 0, 6, 512);
        ctx.fillRect(258, 0, 6, 512);

        // Dashed white lane dividers
        ctx.fillStyle = '#ffffff';
        for (let y = 16; y < 512; y += 64) {
          ctx.fillRect(132, y, 8, 32);
          ctx.fillRect(372, y, 8, 32);
        }

      } else if (type === TerrainType.ROAD_STRAIGHT_EW) {
        drawAsphaltBase();

        // Outer white curb lines
        ctx.fillStyle = '#d0d7e0';
        ctx.fillRect(0, 16, 512, 12);
        ctx.fillRect(0, 484, 512, 12);

        // Double yellow center line
        ctx.fillStyle = '#f5b800';
        ctx.fillRect(0, 248, 512, 6);
        ctx.fillRect(0, 258, 512, 6);

        // Dashed white lane dividers
        ctx.fillStyle = '#ffffff';
        for (let x = 16; x < 512; x += 64) {
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
        ctx.fillRect(0, 0, 20, 20);
        ctx.fillRect(492, 0, 20, 20);
        ctx.fillRect(0, 492, 20, 20);
        ctx.fillRect(492, 492, 20, 20);

      } else if (type === TerrainType.SIDEWALK) {
        ctx.fillStyle = '#3a404a';
        ctx.fillRect(0, 0, 512, 512);

        // Paving joint grid
        ctx.strokeStyle = '#282c33';
        ctx.lineWidth = 6;
        for (let p = 0; p <= 512; p += 128) {
          ctx.beginPath();
          ctx.moveTo(p, 0);
          ctx.lineTo(p, 512);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(0, p);
          ctx.lineTo(512, p);
          ctx.stroke();
        }

        // Concrete grain texture
        for (let i = 0; i < 2000; i++) {
          const x = Math.random() * 512;
          const y = Math.random() * 512;
          const val = Math.floor(Math.random() * 30 + 55);
          ctx.fillStyle = `rgb(${val},${val},${val})`;
          ctx.fillRect(x, y, 2, 2);
        }

      } else if (type === TerrainType.PLAZA_STONE) {
        ctx.fillStyle = '#2d323b';
        ctx.fillRect(0, 0, 512, 512);

        // Architectural slate tiles
        ctx.strokeStyle = '#1e2128';
        ctx.lineWidth = 4;
        for (let y = 0; y < 512; y += 64) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(512, y);
          ctx.stroke();
          const offset = (y / 64) % 2 === 0 ? 0 : 64;
          for (let x = offset; x < 512; x += 128) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 64);
            ctx.stroke();
          }
        }

      } else if (type === TerrainType.GRASS) {
        ctx.fillStyle = '#1e381e';
        ctx.fillRect(0, 0, 512, 512);

        for (let i = 0; i < 6000; i++) {
          const x = Math.random() * 512;
          const y = Math.random() * 512;
          const g = Math.floor(Math.random() * 60 + 50);
          ctx.fillStyle = `rgb(18, ${g}, 18)`;
          ctx.fillRect(x, y, 3, 3);
        }
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    };

    const planeGeo = new THREE.PlaneGeometry(TileMap.TILE_SIZE, TileMap.TILE_SIZE);

    const terrainTypes = [
      TerrainType.ROAD_STRAIGHT_NS,
      TerrainType.ROAD_STRAIGHT_EW,
      TerrainType.ROAD_INTERSECTION,
      TerrainType.SIDEWALK,
      TerrainType.PLAZA_STONE,
      TerrainType.GRASS
    ];

    terrainTypes.forEach(tType => {
      const tex = generateTexture(tType);
      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: (tType === TerrainType.SIDEWALK || tType === TerrainType.PLAZA_STONE) ? 0.75 : 0.9,
        metalness: 0.05
      });

      const instancedMesh = new THREE.InstancedMesh(planeGeo, mat, 5000);
      instancedMesh.receiveShadow = true;
      instancedMesh.count = 0;

      this.instancedTerrainMeshes.set(tType, instancedMesh);
      this.layer0Group.add(instancedMesh);
    });
  }

  public static buildMapMesh() {
    const cells = TileMap.getAllCells();
    const counts = new Map<TerrainType, number>();

    this.instancedTerrainMeshes.forEach((_, key) => counts.set(key, 0));
    const dummy = new THREE.Object3D();

    // Render Connected Ground & Road Grid
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
        const cell = cells[gx][gz];

        const mesh = this.instancedTerrainMeshes.get(cell.terrainType);
        if (mesh) {
          const count = counts.get(cell.terrainType) || 0;

          dummy.position.set(cell.worldX, 0, cell.worldZ);
          dummy.rotation.set(-Math.PI / 2, 0, 0);
          dummy.scale.set(1, 1, 1);
          dummy.updateMatrix();

          mesh.setMatrixAt(count, dummy.matrix);
          counts.set(cell.terrainType, count + 1);
        }
      }
    }

    this.instancedTerrainMeshes.forEach((mesh, tType) => {
      mesh.count = counts.get(tType) || 0;
      mesh.instanceMatrix.needsUpdate = true;
    });
  }
}
