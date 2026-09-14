import * as THREE from 'three';
import { TileMap, TerrainType, ELEVATION_TIER_WATER } from './TileMap';
import { SceneManager } from '../SceneManager';

// --- TileRenderer Constants ---
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
          ctx.fillStyle = '#0a2f64'; // Deep ocean navy
          ctx.fillRect(px, py, cellSize, cellSize);
          // Subtle ocean swells
          ctx.fillStyle = '#114488';
          ctx.fillRect(px + 4, py + 6, cellSize - 8, 2);
          ctx.fillRect(px + 8, py + 18, cellSize - 14, 2);
        } else if (cell.terrainType === TerrainType.WATER_SHORE) {
          // Shallow coastal water / surf
          ctx.fillStyle = '#1888c8'; // Turquoise coastal water
          ctx.fillRect(px, py, cellSize, cellSize);
          // Foamy wave crests
          ctx.fillStyle = '#8be4f8';
          ctx.fillRect(px + 2, py + 6, cellSize - 4, 3);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(px + 6, py + 18, cellSize - 10, 2);
        } else if (cell.terrainType === TerrainType.SAND) {
          // Warm golden beach sand
          ctx.fillStyle = '#d4b27a';
          ctx.fillRect(px, py, cellSize, cellSize);
          // Subtle sand grains & pebbles
          ctx.fillStyle = '#c4a268';
          ctx.fillRect(px + 4, py + 4, 2, 2);
          ctx.fillRect(px + 18, py + 10, 2, 2);
          ctx.fillRect(px + 10, py + 22, 2, 2);
        } else {
          ctx.fillStyle = '#2d6a2d'; // Park green grass
          ctx.fillRect(px, py, cellSize, cellSize);
        }
      }
    }

    // PASS 2: Connected Road Network Layer (Asphalt, Continuous Yellow Center Lines & Zebra Crosswalks)
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
        const cell = cells[gx][gz];
        const px = gx * cellSize;
        const py = gz * cellSize;
        const t = cell.terrainType;

        if (
          t === TerrainType.ROAD_STRAIGHT_NS ||
          t === TerrainType.ROAD_STRAIGHT_EW ||
          t === TerrainType.ROAD_RAMP_NS ||
          t === TerrainType.ROAD_RAMP_EW ||
          t === TerrainType.ROAD_INTERSECTION ||
          t === TerrainType.ROAD_ROUNDABOUT ||
          (t >= TerrainType.ROAD_CURVE_NE && t <= TerrainType.ROAD_CURVE_SW)
        ) {
          // Asphalt base
          ctx.fillStyle = '#1c1f24';
          ctx.fillRect(px, py, cellSize, cellSize);

          if (t === TerrainType.ROAD_STRAIGHT_NS || t === TerrainType.ROAD_RAMP_NS) {
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

          } else if (t === TerrainType.ROAD_STRAIGHT_EW || t === TerrainType.ROAD_RAMP_EW) {
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

          } else if (t === TerrainType.ROAD_ROUNDABOUT) {
            // Circular Roundabout rotary tile
            ctx.strokeStyle = '#d0d7e0';
            ctx.lineWidth = 1;
            ctx.strokeRect(px + 0.5, py + 0.5, cellSize - 1, cellSize - 1);
            // Yellow circular dashed lane arc
            ctx.strokeStyle = '#f5b800';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize * 0.38, 0, Math.PI * 2);
            ctx.stroke();

          } else if (t === TerrainType.ROAD_CURVE_NE) {
            ctx.strokeStyle = '#f5b800';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px + cellSize, py, cellSize / 2, Math.PI, Math.PI / 2, true);
            ctx.stroke();
            ctx.strokeStyle = '#d0d7e0';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(px + cellSize, py, cellSize - 1, Math.PI, Math.PI / 2, true);
            ctx.stroke();

          } else if (t === TerrainType.ROAD_CURVE_NW) {
            ctx.strokeStyle = '#f5b800';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px, py, cellSize / 2, 0, Math.PI / 2, false);
            ctx.stroke();
            ctx.strokeStyle = '#d0d7e0';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(px, py, cellSize - 1, 0, Math.PI / 2, false);
            ctx.stroke();

          } else if (t === TerrainType.ROAD_CURVE_SE) {
            ctx.strokeStyle = '#f5b800';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px + cellSize, py + cellSize, cellSize / 2, Math.PI, 3 * Math.PI / 2, false);
            ctx.stroke();
            ctx.strokeStyle = '#d0d7e0';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(px + cellSize, py + cellSize, cellSize - 1, Math.PI, 3 * Math.PI / 2, false);
            ctx.stroke();

          } else if (t === TerrainType.ROAD_CURVE_SW) {
            ctx.strokeStyle = '#f5b800';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px, py + cellSize, cellSize / 2, 0, 3 * Math.PI / 2, true);
            ctx.stroke();
            ctx.strokeStyle = '#d0d7e0';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(px, py + cellSize, cellSize - 1, 0, 3 * Math.PI / 2, true);
            ctx.stroke();
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

    const halfBound = TileMap.MAP_BOUNDS / 2; // 512
    const tileSize = TileMap.TILE_SIZE;       // 16
    const gridDim = TileMap.GRID_DIM;         // 64

    const groundPositions: number[] = [];
    const groundNormals: number[] = [];
    const groundUvs: number[] = [];

    const wallPositions: number[] = [];
    const wallNormals: number[] = [];
    const wallUvs: number[] = [];

    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        const cell = cells[gx][gz];
        const x0 = -halfBound + gx * tileSize;
        const x1 = -halfBound + (gx + 1) * tileSize;
        const z0 = -halfBound + gz * tileSize;
        const z1 = -halfBound + (gz + 1) * tileSize;

        const u0 = gx / gridDim;
        const u1 = (gx + 1) / gridDim;
        const v0 = 1.0 - gz / gridDim;
        const v1 = 1.0 - (gz + 1) / gridDim;

        let yNW = cell.elevation;
        let yNE = cell.elevation;
        let ySW = cell.elevation;
        let ySE = cell.elevation;

        // Smooth slope on road ramps
        if (cell.terrainType === TerrainType.ROAD_RAMP_NS) {
          const northCell = TileMap.getCell(gx, gz - 1);
          const southCell = TileMap.getCell(gx, gz + 1);
          const nElev = northCell ? northCell.elevation : cell.elevation;
          const sElev = southCell ? southCell.elevation : cell.elevation;
          yNW = nElev;
          yNE = nElev;
          ySW = sElev;
          ySE = sElev;
        } else if (cell.terrainType === TerrainType.ROAD_RAMP_EW) {
          const westCell = TileMap.getCell(gx - 1, gz);
          const eastCell = TileMap.getCell(gx + 1, gz);
          const wElev = westCell ? westCell.elevation : cell.elevation;
          const eElev = eastCell ? eastCell.elevation : cell.elevation;
          yNW = wElev;
          ySW = wElev;
          yNE = eElev;
          ySE = eElev;
        }

        // Top Face Quad (Two triangles: SW->NE->NW, SW->SE->NE)
        groundPositions.push(
          x0, ySW, z1,
          x1, yNE, z0,
          x0, yNW, z0,

          x0, ySW, z1,
          x1, ySE, z1,
          x1, yNE, z0
        );

        groundUvs.push(
          u0, v1,
          u1, v0,
          u0, v0,

          u0, v1,
          u1, v1,
          u1, v0
        );

        groundNormals.push(
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0
        );

        // ── VERTICAL RETAINING WALL FACES ──
        const cellElev = cell.elevation;

        // 1. North Edge (Z = z0, normal: 0, 0, -1)
        const northCell = gz > 0 ? cells[gx][gz - 1] : null;
        const northElev = northCell ? northCell.elevation : (cellElev > 0 ? 0 : cellElev);
        if (cellElev > northElev && cell.terrainType !== TerrainType.ROAD_RAMP_NS) {
          const dy = cellElev - northElev;
          const vTop = dy / 16;
          wallPositions.push(
            x1, northElev, z0,
            x0, cellElev, z0,
            x1, cellElev, z0,

            x1, northElev, z0,
            x0, northElev, z0,
            x0, cellElev, z0
          );
          wallNormals.push(
            0, 0, -1,  0, 0, -1,  0, 0, -1,
            0, 0, -1,  0, 0, -1,  0, 0, -1
          );
          wallUvs.push(
            1, 0,  0, vTop,  1, vTop,
            1, 0,  0, 0,     0, vTop
          );
        }

        // 2. South Edge (Z = z1, normal: 0, 0, 1)
        const southCell = gz < gridDim - 1 ? cells[gx][gz + 1] : null;
        const southElev = southCell
          ? southCell.elevation
          : (cell.terrainType === TerrainType.WATER ? ELEVATION_TIER_WATER : (cellElev > 0 ? 0 : cellElev));
        if (cellElev > southElev && cell.terrainType !== TerrainType.ROAD_RAMP_NS) {
          const dy = cellElev - southElev;
          const vTop = dy / 16;
          wallPositions.push(
            x0, southElev, z1,
            x1, cellElev, z1,
            x0, cellElev, z1,

            x0, southElev, z1,
            x1, southElev, z1,
            x1, cellElev, z1
          );
          wallNormals.push(
            0, 0, 1,  0, 0, 1,  0, 0, 1,
            0, 0, 1,  0, 0, 1,  0, 0, 1
          );
          wallUvs.push(
            0, 0,  1, vTop,  0, vTop,
            0, 0,  1, 0,     1, vTop
          );
        }

        // 3. West Edge (X = x0, normal: -1, 0, 0)
        const westCell = gx > 0 ? cells[gx - 1][gz] : null;
        const westElev = westCell ? westCell.elevation : (cellElev > 0 ? 0 : cellElev);
        if (cellElev > westElev && cell.terrainType !== TerrainType.ROAD_RAMP_EW) {
          const dy = cellElev - westElev;
          const vTop = dy / 16;
          wallPositions.push(
            x0, westElev, z0,
            x0, cellElev, z1,
            x0, cellElev, z0,

            x0, westElev, z0,
            x0, westElev, z1,
            x0, cellElev, z1
          );
          wallNormals.push(
            -1, 0, 0,  -1, 0, 0,  -1, 0, 0,
            -1, 0, 0,  -1, 0, 0,  -1, 0, 0
          );
          wallUvs.push(
            0, 0,  1, vTop,  0, vTop,
            0, 0,  1, 0,     1, vTop
          );
        }

        // 4. East Edge (X = x1, normal: 1, 0, 0)
        const eastCell = gx < gridDim - 1 ? cells[gx + 1][gz] : null;
        const eastElev = eastCell
          ? eastCell.elevation
          : (cell.terrainType === TerrainType.WATER ? ELEVATION_TIER_WATER : (cellElev > 0 ? 0 : cellElev));
        if (cellElev > eastElev && cell.terrainType !== TerrainType.ROAD_RAMP_EW) {
          const dy = cellElev - eastElev;
          const vTop = dy / 16;
          wallPositions.push(
            x1, eastElev, z1,
            x1, cellElev, z0,
            x1, cellElev, z1,

            x1, eastElev, z1,
            x1, eastElev, z0,
            x1, cellElev, z0
          );
          wallNormals.push(
            1, 0, 0,  1, 0, 0,  1, 0, 0,
            1, 0, 0,  1, 0, 0,  1, 0, 0
          );
          wallUvs.push(
            1, 0,  0, vTop,  1, vTop,
            1, 0,  0, 0,     0, vTop
          );
        }
      }
    }

    const groundGeo = new THREE.BufferGeometry();
    groundGeo.setAttribute('position', new THREE.Float32BufferAttribute(groundPositions, 3));
    groundGeo.setAttribute('normal', new THREE.Float32BufferAttribute(groundNormals, 3));
    groundGeo.setAttribute('uv', new THREE.Float32BufferAttribute(groundUvs, 2));
    groundGeo.computeVertexNormals();

    const groundMat = new THREE.MeshStandardMaterial({
      map: groundTex,
      roughness: DEFAULT_ROUGHNESS,
      metalness: DEFAULT_METALNESS,
      depthWrite: false
    });

    const singleGroundMesh = new THREE.Mesh(groundGeo, groundMat);
    singleGroundMesh.position.set(0, 0, 0);
    singleGroundMesh.receiveShadow = true;
    singleGroundMesh.renderOrder = 0;

    const wallGeo = new THREE.BufferGeometry();
    wallGeo.setAttribute('position', new THREE.Float32BufferAttribute(wallPositions, 3));
    wallGeo.setAttribute('normal', new THREE.Float32BufferAttribute(wallNormals, 3));
    wallGeo.setAttribute('uv', new THREE.Float32BufferAttribute(wallUvs, 2));

    const wallTex = this.createRetainingWallTexture();
    const wallMat = new THREE.MeshStandardMaterial({
      map: wallTex,
      roughness: 0.85,
      metalness: 0.1,
      depthWrite: true,
      side: THREE.FrontSide
    });

    const retainingWallMesh = new THREE.Mesh(wallGeo, wallMat);
    retainingWallMesh.position.set(0, 0, 0);
    retainingWallMesh.receiveShadow = true;
    retainingWallMesh.castShadow = true;
    retainingWallMesh.renderOrder = 1;

    // Extended base green landscape layer below the tiles
    const BASE_GROUND_SIZE = 4800; // Expansive exterior horizon
    const baseGreenGeo = new THREE.PlaneGeometry(BASE_GROUND_SIZE, BASE_GROUND_SIZE);
    const baseGreenMat = new THREE.MeshStandardMaterial({
      color: 0x2d6a2d, // Seamlessly matches city park green grass (#2d6a2d)
      roughness: DEFAULT_ROUGHNESS,
      metalness: DEFAULT_METALNESS,
      depthWrite: false
    });
    const baseGreenMesh = new THREE.Mesh(baseGreenGeo, baseGreenMat);
    baseGreenMesh.rotation.x = GROUND_ROTATION_X;
    baseGreenMesh.position.set(0, -0.25, 0); // Positioned below the tile level (y=0)
    baseGreenMesh.receiveShadow = true;
    baseGreenMesh.renderOrder = -10;

    // ── PASS 4: EXTENDED OCEAN HORIZON & ARTERIAL HIGHWAYS ────────────────────
    const EXTERIOR_LIMIT = BASE_GROUND_SIZE / 2; // 2400 world units
    const highwayLength = EXTERIOR_LIMIT - halfBound; // 1888 world units

    // Detect water boundary on South & East coasts
    let hasSouthWater = false;
    let southWaterMinX = TileMap.GRID_DIM;
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      const cell = cells[gx][TileMap.GRID_DIM - 1];
      if (cell.terrainType === TerrainType.WATER || cell.terrainType === TerrainType.WATER_SHORE) {
        hasSouthWater = true;
        if (gx < southWaterMinX) southWaterMinX = gx;
      }
    }

    let hasEastWater = false;
    let eastWaterMinZ = TileMap.GRID_DIM;
    for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
      const cell = cells[TileMap.GRID_DIM - 1][gz];
      if (cell.terrainType === TerrainType.WATER || cell.terrainType === TerrainType.WATER_SHORE) {
        hasEastWater = true;
        if (gz < eastWaterMinZ) eastWaterMinZ = gz;
      }
    }

    const additionalMeshes: THREE.Mesh[] = [];

    // 1. Extended Ocean Plane (South-East bay & ocean horizon)
    if (hasSouthWater || hasEastWater) {
      const oceanStartX = -halfBound + Math.max(0, southWaterMinX - 1) * TileMap.TILE_SIZE;
      const oceanStartZ = -halfBound + Math.max(0, eastWaterMinZ - 1) * TileMap.TILE_SIZE;
      const oceanWidth = EXTERIOR_LIMIT - oceanStartX;
      const oceanHeight = EXTERIOR_LIMIT - oceanStartZ;

      const oceanGeo = new THREE.PlaneGeometry(oceanWidth, oceanHeight);
      const oceanTex = this.createOceanTexture();
      const oceanMat = new THREE.MeshStandardMaterial({
        map: oceanTex,
        roughness: 0.2,
        metalness: 0.25,
        depthWrite: false
      });

      const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
      oceanMesh.rotation.x = GROUND_ROTATION_X;
      oceanMesh.position.set(oceanStartX + oceanWidth / 2, ELEVATION_TIER_WATER, oceanStartZ + oceanHeight / 2);
      oceanMesh.receiveShadow = true;
      oceanMesh.renderOrder = -6;
      additionalMeshes.push(oceanMesh);

      // ── EXTERIOR COASTLINE BEACH BUFFER STRIP ──
      // Provides a natural golden beach & shallow foamy surf buffer between the exterior green countryside and the open ocean.
      const BEACH_WIDTH = 32; // 2-tile wide coastal buffer (32 world units)

      // West Coastline Beach Buffer (along West border of extended ocean)
      const westBeachGeo = new THREE.PlaneGeometry(BEACH_WIDTH, oceanHeight);
      const westBeachTex = this.createCoastlineBeachTexture('NS');
      const westRepeatY = Math.max(1, Math.round(oceanHeight / 32));
      westBeachTex.repeat.set(1, westRepeatY);
      const westBeachMat = new THREE.MeshStandardMaterial({
        map: westBeachTex,
        roughness: 0.8,
        metalness: 0.05,
        depthWrite: false
      });
      const westBeachMesh = new THREE.Mesh(westBeachGeo, westBeachMat);
      westBeachMesh.rotation.x = GROUND_ROTATION_X;
      westBeachMesh.position.set(oceanStartX - BEACH_WIDTH / 2, -0.09, oceanStartZ + oceanHeight / 2);
      westBeachMesh.receiveShadow = true;
      westBeachMesh.renderOrder = -5;
      additionalMeshes.push(westBeachMesh);

      // North Coastline Beach Buffer (along North border of extended ocean)
      const northBeachGeo = new THREE.PlaneGeometry(oceanWidth, BEACH_WIDTH);
      const northBeachTex = this.createCoastlineBeachTexture('EW');
      const northRepeatX = Math.max(1, Math.round(oceanWidth / 32));
      northBeachTex.repeat.set(northRepeatX, 1);
      const northBeachMat = new THREE.MeshStandardMaterial({
        map: northBeachTex,
        roughness: 0.8,
        metalness: 0.05,
        depthWrite: false
      });
      const northBeachMesh = new THREE.Mesh(northBeachGeo, northBeachMat);
      northBeachMesh.rotation.x = GROUND_ROTATION_X;
      northBeachMesh.position.set(oceanStartX + oceanWidth / 2, -0.09, oceanStartZ - BEACH_WIDTH / 2);
      northBeachMesh.receiveShadow = true;
      northBeachMesh.renderOrder = -5;
      additionalMeshes.push(northBeachMesh);

      // Corner Beach Cap (at Northwest corner junction of exterior beaches)
      const cornerBeachGeo = new THREE.PlaneGeometry(BEACH_WIDTH, BEACH_WIDTH);
      const cornerBeachTex = this.createCoastlineBeachTexture('CORNER');
      const cornerBeachMat = new THREE.MeshStandardMaterial({
        map: cornerBeachTex,
        roughness: 0.8,
        metalness: 0.05,
        depthWrite: false
      });
      const cornerBeachMesh = new THREE.Mesh(cornerBeachGeo, cornerBeachMat);
      cornerBeachMesh.rotation.x = GROUND_ROTATION_X;
      cornerBeachMesh.position.set(oceanStartX - BEACH_WIDTH / 2, -0.09, oceanStartZ - BEACH_WIDTH / 2);
      cornerBeachMesh.receiveShadow = true;
      cornerBeachMesh.renderOrder = -5;
      additionalMeshes.push(cornerBeachMesh);
    }

    // 2. Procedural Highway Ribbons extending to the horizon
    const isRoadCell = (c: any): boolean => {
      return (
        c.overlayType === 1 ||
        c.terrainType === TerrainType.ROAD_STRAIGHT_NS ||
        c.terrainType === TerrainType.ROAD_STRAIGHT_EW ||
        c.terrainType === TerrainType.ROAD_INTERSECTION ||
        c.terrainType === TerrainType.ROAD_ROUNDABOUT ||
        (c.terrainType >= TerrainType.ROAD_CURVE_NE && c.terrainType <= TerrainType.ROAD_CURVE_SW)
      );
    };

    const isWaterCell = (c: any): boolean => {
      return c.terrainType === TerrainType.WATER || c.terrainType === TerrainType.WATER_SHORE;
    };

    // Helper to spawn highway strip
    const spawnHighway = (centerX: number, centerZ: number, width: number, length: number, orientation: 'NS' | 'EW') => {
      const isDual = width >= 28;
      const highwayTex = this.createHighwayTexture(isDual, orientation);
      const repeatT = Math.max(1, Math.round(length / (isDual ? 32 : 16)));
      highwayTex.repeat.set(1, repeatT);

      // PlaneGeometry(width, length)
      const geo = new THREE.PlaneGeometry(width, length);
      const mat = new THREE.MeshStandardMaterial({
        map: highwayTex,
        roughness: 0.85,
        metalness: 0.05,
        depthWrite: false
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = GROUND_ROTATION_X;
      if (orientation === 'EW') {
        mesh.rotation.z = Math.PI / 2;
      }
      mesh.position.set(centerX, -0.06, centerZ);
      mesh.receiveShadow = true;
      mesh.renderOrder = -3;
      additionalMeshes.push(mesh);
    };

    // North highways (gz = 0)
    let spanStart: number | null = null;
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      const c = cells[gx][0];
      if (isRoadCell(c) && !isWaterCell(c)) {
        if (spanStart === null) spanStart = gx;
      } else {
        if (spanStart !== null) {
          const wTiles = gx - spanStart;
          const roadW = wTiles * TileMap.TILE_SIZE;
          const cX = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
          const cZ = -halfBound - highwayLength / 2;
          spawnHighway(cX, cZ, roadW, highwayLength, 'NS');
          spanStart = null;
        }
      }
    }
    if (spanStart !== null) {
      const wTiles = TileMap.GRID_DIM - spanStart;
      const roadW = wTiles * TileMap.TILE_SIZE;
      const cX = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
      const cZ = -halfBound - highwayLength / 2;
      spawnHighway(cX, cZ, roadW, highwayLength, 'NS');
    }

    // South highways (gz = 63, land only, >= 4 tiles from water)
    spanStart = null;
    for (let gx = 0; gx < TileMap.GRID_DIM; gx++) {
      const c = cells[gx][TileMap.GRID_DIM - 1];
      if (isRoadCell(c) && !isWaterCell(c) && (!hasSouthWater || gx < southWaterMinX - 4)) {
        if (spanStart === null) spanStart = gx;
      } else {
        if (spanStart !== null) {
          const wTiles = gx - spanStart;
          const roadW = wTiles * TileMap.TILE_SIZE;
          const cX = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
          const cZ = halfBound + highwayLength / 2;
          spawnHighway(cX, cZ, roadW, highwayLength, 'NS');
          spanStart = null;
        }
      }
    }
    if (spanStart !== null) {
      const wTiles = TileMap.GRID_DIM - spanStart;
      const roadW = wTiles * TileMap.TILE_SIZE;
      const cX = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
      const cZ = halfBound + highwayLength / 2;
      spawnHighway(cX, cZ, roadW, highwayLength, 'NS');
    }

    // West highways (gx = 0)
    spanStart = null;
    for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
      const c = cells[0][gz];
      if (isRoadCell(c) && !isWaterCell(c)) {
        if (spanStart === null) spanStart = gz;
      } else {
        if (spanStart !== null) {
          const wTiles = gz - spanStart;
          const roadW = wTiles * TileMap.TILE_SIZE;
          const cZ = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
          const cX = -halfBound - highwayLength / 2;
          spawnHighway(cX, cZ, roadW, highwayLength, 'EW');
          spanStart = null;
        }
      }
    }
    if (spanStart !== null) {
      const wTiles = TileMap.GRID_DIM - spanStart;
      const roadW = wTiles * TileMap.TILE_SIZE;
      const cZ = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
      const cX = -halfBound - highwayLength / 2;
      spawnHighway(cX, cZ, roadW, highwayLength, 'EW');
    }

    // East highways (gx = 63, land only, >= 4 tiles from water)
    spanStart = null;
    for (let gz = 0; gz < TileMap.GRID_DIM; gz++) {
      const c = cells[TileMap.GRID_DIM - 1][gz];
      if (isRoadCell(c) && !isWaterCell(c) && (!hasEastWater || gz < eastWaterMinZ - 4)) {
        if (spanStart === null) spanStart = gz;
      } else {
        if (spanStart !== null) {
          const wTiles = gz - spanStart;
          const roadW = wTiles * TileMap.TILE_SIZE;
          const cZ = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
          const cX = halfBound + highwayLength / 2;
          spawnHighway(cX, cZ, roadW, highwayLength, 'EW');
          spanStart = null;
        }
      }
    }
    if (spanStart !== null) {
      const wTiles = TileMap.GRID_DIM - spanStart;
      const roadW = wTiles * TileMap.TILE_SIZE;
      const cZ = -halfBound + (spanStart + wTiles * 0.5) * TileMap.TILE_SIZE;
      const cX = halfBound + highwayLength / 2;
      spawnHighway(cX, cZ, roadW, highwayLength, 'EW');
    }

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

    this.layer0Group.add(baseGreenMesh);
    for (const m of additionalMeshes) {
      this.layer0Group.add(m);
    }
    this.layer0Group.add(retainingWallMesh);
    this.layer0Group.add(singleGroundMesh);
  }

  private static createHighwayTexture(isDualLane: boolean, _orientation: 'NS' | 'EW'): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#1c1f24'; // Asphalt base
    ctx.fillRect(0, 0, 128, 128);

    // Outer white curb stripes
    ctx.fillStyle = '#d0d7e0';
    ctx.fillRect(0, 0, 3, 128);
    ctx.fillRect(125, 0, 3, 128);

    // Double yellow center divider
    ctx.fillStyle = '#f5b800';
    ctx.fillRect(62, 0, 4, 128);

    // Dashed white lane dividers
    ctx.fillStyle = '#ffffff';
    if (isDualLane) {
      for (let y = 8; y < 128; y += 32) {
        ctx.fillRect(31, y, 2, 16);
        ctx.fillRect(95, y, 2, 16);
      }
    } else {
      for (let y = 8; y < 128; y += 32) {
        ctx.fillRect(63, y, 2, 16);
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    return tex;
  }

  private static createCoastlineBeachTexture(type: 'NS' | 'EW' | 'CORNER'): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    if (type === 'NS') {
      // West Coastline: Left half is golden beach sand, right half is turquoise shallow surf
      ctx.fillStyle = '#d4b27a'; // Golden sand
      ctx.fillRect(0, 0, 64, 128);
      // Sand grains & texture
      ctx.fillStyle = '#c4a268';
      for (let y = 8; y < 128; y += 16) {
        ctx.fillRect(12, y, 2, 2);
        ctx.fillRect(40, y + 6, 2, 2);
      }

      // Turquoise shallow coastal water
      ctx.fillStyle = '#1888c8';
      ctx.fillRect(64, 0, 64, 128);
      // White foamy surf crests
      ctx.fillStyle = '#8be4f8';
      for (let y = 12; y < 128; y += 24) {
        ctx.fillRect(60, y, 8, 128 / 8);
        ctx.fillRect(80, y + 8, 36, 3);
      }
      ctx.fillStyle = '#ffffff';
      for (let y = 14; y < 128; y += 24) {
        ctx.fillRect(62, y, 3, 12);
        ctx.fillRect(84, y + 8, 20, 2);
      }
    } else if (type === 'EW') {
      // North Coastline: Top half is golden beach sand, bottom half is turquoise shallow surf
      ctx.fillStyle = '#d4b27a'; // Golden sand
      ctx.fillRect(0, 0, 128, 64);
      // Sand grains & texture
      ctx.fillStyle = '#c4a268';
      for (let x = 8; x < 128; x += 16) {
        ctx.fillRect(x, 12, 2, 2);
        ctx.fillRect(x + 6, 40, 2, 2);
      }

      // Turquoise shallow coastal water
      ctx.fillStyle = '#1888c8';
      ctx.fillRect(0, 64, 128, 64);
      // White foamy surf crests
      ctx.fillStyle = '#8be4f8';
      for (let x = 12; x < 128; x += 24) {
        ctx.fillRect(x, 60, 16, 8);
        ctx.fillRect(x + 8, 80, 3, 36);
      }
      ctx.fillStyle = '#ffffff';
      for (let x = 14; x < 128; x += 24) {
        ctx.fillRect(x, 62, 12, 3);
        ctx.fillRect(x + 8, 84, 2, 20);
      }
    } else {
      // Corner Beach: Sand in top-left, curving to foamy surf in bottom-right
      ctx.fillStyle = '#d4b27a'; // Sand
      ctx.fillRect(0, 0, 128, 128);

      // Surf curve arc
      ctx.fillStyle = '#1888c8';
      ctx.beginPath();
      ctx.arc(128, 128, 110, Math.PI, 1.5 * Math.PI, false);
      ctx.lineTo(128, 128);
      ctx.closePath();
      ctx.fill();

      // Foamy surf crest arc
      ctx.strokeStyle = '#8be4f8';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(128, 128, 70, Math.PI, 1.5 * Math.PI, false);
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(128, 128, 72, Math.PI, 1.5 * Math.PI, false);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    return tex;
  }

  private static createOceanTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#0a2f64'; // Deep ocean navy
    ctx.fillRect(0, 0, 256, 256);

    // Subtle rolling ocean swell patterns
    ctx.fillStyle = '#114488';
    for (let y = 16; y < 256; y += 32) {
      ctx.fillRect(10, y, 105, 3);
      ctx.fillRect(140, y + 16, 100, 3);
    }
    ctx.fillStyle = '#1888c8';
    for (let y = 32; y < 256; y += 64) {
      ctx.fillRect(45, y, 60, 2);
      ctx.fillRect(175, y, 65, 2);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.repeat.set(24, 24);
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    return tex;
  }

  private static createRetainingWallTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // 1. Concrete Base Tone
    ctx.fillStyle = '#555b62'; // Architectural precast concrete
    ctx.fillRect(0, 0, 256, 256);

    // Subtle concrete grain noise
    for (let i = 0; i < 600; i++) {
      const nx = Math.floor(Math.random() * 256);
      const ny = Math.floor(Math.random() * 256);
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(nx, ny, 2, 2);
    }

    // 2. Vertical Formwork Panel Seams (every 64px)
    for (let x = 0; x < 256; x += 64) {
      // Dark groove recess
      ctx.fillStyle = '#22252a';
      ctx.fillRect(x, 0, 2, 256);
      // Subtle highlight bevel
      ctx.fillStyle = '#78808a';
      ctx.fillRect(x + 2, 0, 1, 256);
    }

    // 3. Horizontal Seam Grooves (every 64px)
    for (let y = 0; y < 256; y += 64) {
      ctx.fillStyle = '#22252a';
      ctx.fillRect(0, y, 256, 2);
      ctx.fillStyle = '#78808a';
      ctx.fillRect(0, y + 2, 256, 1);
    }

    // 4. Formwork Tie-Rod Indentation Holes (small dark circular recessed anchors)
    for (let x = 32; x < 256; x += 64) {
      for (let y = 20; y < 256; y += 64) {
        // Outer anchor bevel
        ctx.fillStyle = '#3a3f45';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        // Inner hole
        ctx.fillStyle = '#181a1d';
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 5. Drainage & Weathering Water Streaks (dripping down from panel seams)
    ctx.fillStyle = 'rgba(20, 24, 28, 0.25)';
    for (let x = 16; x < 256; x += 32) {
      const streakLen = 40 + (Math.abs(x * 37) % 80);
      ctx.fillRect(x, 0, 3, streakLen);
      ctx.fillRect(x + 1, streakLen, 1, 20);
    }

    // 6. Base Foundation Embankment Trim (bottom 25%: rocky foundation trim matching concept art)
    ctx.fillStyle = '#3d4248';
    ctx.fillRect(0, 200, 256, 56);
    // Rocky block mortar seams
    ctx.fillStyle = '#202428';
    ctx.fillRect(0, 200, 256, 3);
    ctx.fillRect(0, 228, 256, 2);
    for (let rx = 20; rx < 256; rx += 48) {
      ctx.fillRect(rx, 200, 2, 28);
      ctx.fillRect(rx + 24, 228, 2, 28);
    }

    // 7. Top Wall Coping Stone Cap (top 6px)
    ctx.fillStyle = '#848d98';
    ctx.fillRect(0, 0, 256, 5);
    ctx.fillStyle = '#2c3035';
    ctx.fillRect(0, 5, 256, 2);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    return tex;
  }
}
