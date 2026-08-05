import { TileMap } from './TileSystem/TileMap';
import { TileRenderer } from './TileSystem/TileRenderer';
import { DecalManager } from './TileSystem/DecalManager';

export class GroundRenderer {
  public static init() {
    // 1. Initialize Tile Map Grid
    TileMap.init();

    // 2. Initialize Layer 2 Dynamic Decal Manager
    DecalManager.init();

    // 3. Initialize Multi-Layer Tile Renderer
    TileRenderer.init();
  }

  public static finalizeMap() {
    // Called after city generator registers all building lots
    TileRenderer.buildMapMesh();
  }
}
