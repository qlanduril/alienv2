import * as THREE from 'three';
import { TileMap, TerrainType } from './TileMap';
import { SceneManager } from '../SceneManager';

// --- TileRenderer Constants ---
const GROUND_ALTITUDE = 0;
const TEXTURE_ANISOTROPY = 4;
const GROUND_ROTATION_X = -Math.PI / 2;

// Roughness & Metalness Constants
const DEFAULT_ROUGHNESS = 0.9;
const DEFAULT_METALNESS = 0.05;

export class TileRenderer {
  private static layer0Group: THREE.Group; // Base Terrain & Connected Road Network

  public static init() {
    this.layer0Group = new THREE.Group();
    this.layer0Group.name = 'Layer0_ConnectedRoadNetwork';

    SceneManager.groundGroup.add(this.layer0Group);
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
      metalness: DEFAULT_METALNESS,
      depthWrite: false
    });

    const singleGroundMesh = new THREE.Mesh(groundGeo, groundMat);
    singleGroundMesh.rotation.x = GROUND_ROTATION_X;
    singleGroundMesh.position.set(0, GROUND_ALTITUDE, 0);
    singleGroundMesh.receiveShadow = true;

    // Dispose previous ground mesh, geometry and textures to eliminate VRAM leaks
    while (this.layer0Group.children.length > 0) {
      const child = this.layer0Group.children[0] as THREE.Mesh;
      this.layer0Group.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => {
            if ((m as any).map) (m as any).map.dispose();
            m.dispose();
          });
        } else {
          if ((child.material as any).map) (child.material as any).map.dispose();
          child.material.dispose();
        }
      }
    }

    this.layer0Group.add(singleGroundMesh);
  }
}
