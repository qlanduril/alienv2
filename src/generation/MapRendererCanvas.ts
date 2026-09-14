import { LayerSnapshot } from './MapBaker';
import { TerrainType, OverlayTileType } from '../rendering/TileSystem/TileMap';
import { BUILDING_DEFS, BuildingDef } from '../core/BuildingDefs';
import { SerializedBuilding, RoadAxisType } from './GeneratedMapSchema';

export interface LayerVisibility {
  water: boolean;
  elevation: boolean;
  terrain: boolean;
  roads: boolean;
  districts: boolean;
  buildings: boolean;
  landmarks: boolean;
  occupancy: boolean;
  grid: boolean;
}

export interface CellInspectInfo {
  gx: number;
  gz: number;
  worldX: number;
  worldZ: number;
  terrainType: TerrainType;
  overlayType: OverlayTileType;
  elevation?: number;
  elevationTier?: number;
  isOccupied: boolean;
  district?: string;
  building?: SerializedBuilding;
  buildingDef?: BuildingDef;
}

export type ProjectionMode = '2d' | 'isometric';
export type RenderTheme = 'blueprint' | 'game_tiles';

const GAME_TILE_IMAGE_PATHS: Record<string, string> = {
  water: '/tiles/custom/water.png',
  grass: '/tiles/custom/grass.png',
  plaza_stone: '/tiles/custom/plaza_stone.png',
  sidewalk: '/tiles/custom/sidewalk.png',
  road_ns: '/tiles/custom/road_ns.png',
  road_ew: '/tiles/custom/road_ew.png',
  road_intersection: '/tiles/custom/road_intersection.png',
};

const BUILDING_SPRITE_PATHS: Record<string, string> = {
  '1': '/buildingv2/hospital/png/00_pristine.png',
  '2': '/buildingv2/mall/png/00_pristine.png',
  '3': '/buildingv2/school/png/00_pristine.png',
  '4': '/buildingv2/warehouse/png/00_pristine.png',
  '5': '/buildingv2/skyscraper/png/00_pristine.png',
  'b1': '/buildingv2/shop_lowrise/png/state_000_pristine.png',
  'b2': '/buildingv2/shop_lowrise/png/state_000_pristine.png',
  'b3': '/buildingv2/tower_midrise/png/state_000_pristine.png',
  'b4': '/buildingv2/skyscraper_highrise/png/state_000_pristine.png',
  'res_bronze': '/buildingv2/residential_bronze_penthouses/png/00_pristine.png',
  'res_sky': '/buildingv2/residential_sky_gardens/png/00_pristine.png',
  'sky_cyber': '/buildingv2/skyscraper_cyber_spire/png/00_pristine.png',
  'sky_artdeco': '/buildingv2/skyscraper_artdeco_titan/png/00_pristine.png',
  'sky_biotech': '/buildingv2/skyscraper_biotech_helix/png/00_pristine.png',
  'hospital_civic': '/buildingv2/hospital_civic/png/state_000_pristine.png',
  'mall_shopping': '/buildingv2/mall_shopping/png/state_000_pristine.png',
  'school_civic': '/buildingv2/school_civic/png/state_000_pristine.png',
  'statue_liberty': '/buildingv2/statue_liberty/png/state_000_pristine.png',
  'spaceship_hq': '/buildingv2/spaceship_hq/png/state_000_pristine.png',
  'pentagon_defense': '/buildingv2/pentagon_defense/png/state_000_pristine.png',
  'mega_titan': '/buildingv2/skyscraper/png/00_pristine.png',
  'mega_stadium': '/buildingv2/mall/png/00_pristine.png',
  'art_deco_skyscraper': '/buildingv2/skyscraper_artdeco_titan/png/00_pristine.png',
};

export class MapRendererCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private snapshot: LayerSnapshot | null = null;
  private layers: LayerVisibility = {
    water: true,
    elevation: true,
    terrain: true,
    roads: true,
    districts: true,
    buildings: true,
    landmarks: true,
    occupancy: false,
    grid: true,
  };

  private projection: ProjectionMode = '2d';
  private renderTheme: RenderTheme = 'blueprint';

  // Game Assets Image Cache
  private tileImages: Map<string, HTMLImageElement> = new Map();
  private buildingImages: Map<string, HTMLImageElement> = new Map();

  // Navigation State
  private zoom: number = 1.0;
  private panX: number = 0;
  private panY: number = 0;
  private isDragging: boolean = false;
  private dragStartX: number = 0;
  private dragStartY: number = 0;

  // Hover & Selection State
  private hoveredCell: { gx: number; gz: number } | null = null;
  public onHoverCell?: (info: CellInspectInfo | null) => void;
  public onSelectCell?: (info: CellInspectInfo | null) => void;

  // Color constants for Blueprint Theme
  private static readonly DISTRICT_COLORS: Record<string, { bg: string; border: string; name: string }> = {
    downtown: { bg: 'rgba(56, 189, 248, 0.18)', border: '#38bdf8', name: 'Downtown Core' },
    tech:     { bg: 'rgba(168, 85, 247, 0.18)', border: '#a855f7', name: 'Tech / Cyber' },
    sports:   { bg: 'rgba(245, 158, 11, 0.18)', border: '#f59e0b', name: 'Sports & Arena' },
    suburbs:  { bg: 'rgba(34, 197, 94, 0.18)',  border: '#22c55e', name: 'Residential Suburbs' },
    harbor:   { bg: 'rgba(14, 165, 233, 0.22)', border: '#0ea5e9', name: 'Harbor Waterfront' },
    any:      { bg: 'rgba(148, 163, 184, 0.10)', border: '#94a3b8', name: 'Mixed Zone' }
  };

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false })!;
    this.preloadGameAssets();
    this.attachEventListeners();
    this.fitToScreen();
  }

  private preloadGameAssets() {
    // 1. Preload Ground Tiles
    for (const [key, path] of Object.entries(GAME_TILE_IMAGE_PATHS)) {
      if (!this.tileImages.has(key)) {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          if (this.renderTheme === 'game_tiles') this.render();
        };
        this.tileImages.set(key, img);
      }
    }

    // 2. Preload Building Sprites
    for (const [key, path] of Object.entries(BUILDING_SPRITE_PATHS)) {
      if (!this.buildingImages.has(key)) {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          if (this.renderTheme === 'game_tiles' && this.projection === 'isometric') this.render();
        };
        this.buildingImages.set(key, img);
      }
    }
  }

  public setSnapshot(snapshot: LayerSnapshot) {
    this.snapshot = snapshot;
    this.render();
  }

  public setLayers(layers: Partial<LayerVisibility>) {
    this.layers = { ...this.layers, ...layers };
    this.render();
  }

  public getLayers(): LayerVisibility {
    return { ...this.layers };
  }

  public setProjection(mode: ProjectionMode) {
    this.projection = mode;
    this.fitToScreen();
    this.render();
  }

  public getProjection(): ProjectionMode {
    return this.projection;
  }

  public setRenderTheme(theme: RenderTheme) {
    this.renderTheme = theme;
    if (theme === 'game_tiles') {
      this.preloadGameAssets();
    }
    this.render();
  }

  public getRenderTheme(): RenderTheme {
    return this.renderTheme;
  }

  public resize(width: number, height: number) {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = Math.floor(width * dpr);
    this.canvas.height = Math.floor(height * dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.scale(dpr, dpr);
    this.render();
  }

  public fitToScreen() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width || 800;
    const h = rect.height || 600;

    if (this.projection === '2d') {
      const tileSize = Math.floor(Math.min(w, h) / 66);
      this.zoom = (tileSize * 64) / 1024;
      this.panX = (w - 64 * tileSize) / 2;
      this.panY = (h - 64 * tileSize) / 2;
    } else {
      // Isometric view centering
      this.zoom = 0.9;
      this.panX = w / 2;
      this.panY = h * 0.18;
    }
    this.render();
  }

  public setZoom(deltaZoom: number, centerX?: number, centerY?: number) {
    const rect = this.canvas.getBoundingClientRect();
    const cx = centerX ?? rect.width / 2;
    const cy = centerY ?? rect.height / 2;

    const oldZoom = this.zoom;
    const newZoom = Math.max(0.35, Math.min(8.0, this.zoom * deltaZoom));

    this.panX = cx - (cx - this.panX) * (newZoom / oldZoom);
    this.panY = cy - (cy - this.panY) * (newZoom / oldZoom);
    this.zoom = newZoom;
    this.render();
  }

  public render() {
    if (!this.ctx || !this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // 1. Clear background
    this.ctx.save();
    this.ctx.fillStyle = this.renderTheme === 'game_tiles' ? '#0b1626' : '#070b14';
    this.ctx.fillRect(0, 0, width, height);

    if (!this.snapshot) {
      this.drawEmptyState(width, height);
      this.ctx.restore();
      return;
    }

    // 2. Apply Pan & Zoom Transform
    this.ctx.translate(this.panX, this.panY);

    if (this.projection === '2d') {
      this.renderTopDown(width, height);
    } else {
      this.renderIsometric(width, height);
    }

    this.ctx.restore();
  }

  private getGameTileKey(tile: { terrainType: TerrainType; overlayType: OverlayTileType; roadAxis?: RoadAxisType }): string {
    if (
      tile.overlayType === OverlayTileType.ROAD ||
      tile.terrainType === TerrainType.ROAD_INTERSECTION ||
      tile.terrainType === TerrainType.ROAD_ROUNDABOUT ||
      (tile.terrainType >= TerrainType.ROAD_CURVE_NE && tile.terrainType <= TerrainType.ROAD_CURVE_SW)
    ) {
      if (tile.terrainType === TerrainType.ROAD_INTERSECTION || tile.terrainType === TerrainType.ROAD_ROUNDABOUT) return 'road_intersection';
      if (tile.roadAxis === 'NS' || tile.terrainType === TerrainType.ROAD_STRAIGHT_NS) return 'road_ns';
      return 'road_ew';
    }
    if (tile.terrainType === TerrainType.WATER) return 'water';
    if (tile.terrainType === TerrainType.WATER_SHORE) return 'water';
    if (tile.terrainType === TerrainType.SAND) return 'plaza_stone';
    if (tile.terrainType === TerrainType.PLAZA_STONE) return 'plaza_stone';
    if (tile.terrainType === TerrainType.SIDEWALK) return 'sidewalk';
    return 'grass';
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // TOP-DOWN 2D PLAN RENDERER
  // ─────────────────────────────────────────────────────────────────────────────
  private renderTopDown(_width: number, _height: number) {
    const gridDim = this.snapshot!.gridDim; // 64
    const baseTileSize = 16 * this.zoom;
    const isGameStyle = this.renderTheme === 'game_tiles';

    // 0. Extended Horizon Environment Pass (Outward Highways & Ocean Horizon)
    this.drawExtendedTopDownEnvironment(baseTileSize, isGameStyle, gridDim);

    // 1. Terrain & Water Pass
    for (let gx = 0; gx < gridDim; gx++) {
      for (let gz = 0; gz < gridDim; gz++) {
        const tile = this.snapshot!.tiles[gx]?.[gz];
        if (!tile) continue;

        const x = gx * baseTileSize;
        const y = gz * baseTileSize;

        const isWater = tile.terrainType === TerrainType.WATER || tile.terrainType === TerrainType.WATER_SHORE;
        const isRoad = tile.overlayType === OverlayTileType.ROAD ||
                       tile.terrainType === TerrainType.ROAD_INTERSECTION ||
                       tile.terrainType === TerrainType.ROAD_ROUNDABOUT ||
                       (tile.terrainType >= TerrainType.ROAD_CURVE_NE && tile.terrainType <= TerrainType.ROAD_CURVE_SW);
        const showThisTile = (!isWater || this.layers.water) && (!isRoad || this.layers.roads) && (isWater || isRoad || this.layers.terrain);

        if (isGameStyle) {
          const tileKey = this.getGameTileKey(tile);
          const img = this.tileImages.get(tileKey);

          if (showThisTile && img && img.complete && img.naturalWidth > 0) {
            this.ctx.drawImage(img, x, y, baseTileSize, baseTileSize);
          } else {
            // Authentic game fallback colors
            let fill = '#2d6a2d'; // Game grass
            if (tile.terrainType === TerrainType.WATER) fill = this.layers.water ? '#0a2f64' : '#081e3d';
            else if (tile.terrainType === TerrainType.WATER_SHORE) fill = this.layers.water ? '#1888c8' : '#0a3556';
            else if (tile.terrainType === TerrainType.SAND) fill = '#d4b27a';
            else if (isRoad && this.layers.roads) fill = '#1c1f24';
            else if (tile.terrainType === TerrainType.PLAZA_STONE) fill = '#9e8e78';
            else if (tile.terrainType === TerrainType.SIDEWALK) fill = '#5a6473';

            this.ctx.fillStyle = fill;
            this.ctx.fillRect(x, y, baseTileSize, baseTileSize);
          }
        } else {
          // Studio Blueprint Mode
          let fill = '#172e22'; // default grass
          if (tile.terrainType === TerrainType.WATER) {
            fill = this.layers.water ? '#0a2342' : '#070f1a';
          } else if (tile.terrainType === TerrainType.WATER_SHORE) {
            fill = this.layers.water ? '#0284c7' : '#0a3556';
          } else if (tile.terrainType === TerrainType.SAND) {
            fill = this.layers.terrain ? '#ca8a04' : '#713f12';
          } else if (tile.terrainType === TerrainType.PLAZA_STONE) {
            fill = this.layers.terrain ? '#334155' : '#1e293b';
          } else if (tile.terrainType === TerrainType.SIDEWALK) {
            fill = this.layers.terrain ? '#475569' : '#1e293b';
          } else {
            fill = this.layers.terrain ? '#193324' : '#111d17';
          }

          this.ctx.fillStyle = fill;
          this.ctx.fillRect(x, y, baseTileSize, baseTileSize);

          if ((tile.terrainType === TerrainType.WATER || tile.terrainType === TerrainType.WATER_SHORE) && this.layers.water) {
            this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
            this.ctx.strokeRect(x + 1, y + 1, baseTileSize - 2, baseTileSize - 2);
          }
        }
      }
    }

    // 1.5. Stepped Plateau Elevation Tiers & Retaining Wall Cliffs Layer
    if (this.layers.elevation) {
      for (let gx = 0; gx < gridDim; gx++) {
        for (let gz = 0; gz < gridDim; gz++) {
          const tile = this.snapshot!.tiles[gx]?.[gz];
          if (!tile) continue;

          const x = gx * baseTileSize;
          const y = gz * baseTileSize;
          const tier = tile.elevationTier ?? 1;

          // Subtle plateau tinting
          if (tier === 3) {
            this.ctx.fillStyle = 'rgba(139, 92, 246, 0.20)'; // Cyber violet summit
            this.ctx.fillRect(x, y, baseTileSize, baseTileSize);
          } else if (tier === 2) {
            this.ctx.fillStyle = 'rgba(245, 158, 11, 0.14)'; // Terracotta / amber uptown
            this.ctx.fillRect(x, y, baseTileSize, baseTileSize);
          }

          // Retaining wall cliff lines on borders with lower tiers
          const northTile = gz > 0 ? this.snapshot!.tiles[gx]?.[gz - 1] : null;
          const southTile = gz < gridDim - 1 ? this.snapshot!.tiles[gx]?.[gz + 1] : null;
          const westTile = gx > 0 ? this.snapshot!.tiles[gx - 1]?.[gz] : null;
          const eastTile = gx < gridDim - 1 ? this.snapshot!.tiles[gx + 1]?.[gz] : null;

          const myElev = tile.elevation ?? 0;
          const nElev = northTile?.elevation ?? (myElev > 0 ? 0 : myElev);
          const sElev = southTile?.elevation ?? (myElev > 0 ? 0 : myElev);
          const wElev = westTile?.elevation ?? (myElev > 0 ? 0 : myElev);
          const eElev = eastTile?.elevation ?? (myElev > 0 ? 0 : myElev);

          // Top edge cliff
          if (myElev > nElev) {
            this.ctx.strokeStyle = '#64748b';
            this.ctx.lineWidth = Math.max(2, 2.5 * this.zoom);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + baseTileSize, y);
            this.ctx.stroke();
          }

          // Bottom edge cliff
          if (myElev > sElev) {
            this.ctx.strokeStyle = '#334155';
            this.ctx.lineWidth = Math.max(2, 2.5 * this.zoom);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + baseTileSize);
            this.ctx.lineTo(x + baseTileSize, y + baseTileSize);
            this.ctx.stroke();
          }

          // Left edge cliff
          if (myElev > wElev) {
            this.ctx.strokeStyle = '#64748b';
            this.ctx.lineWidth = Math.max(2, 2.5 * this.zoom);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x, y + baseTileSize);
            this.ctx.stroke();
          }

          // Right edge cliff
          if (myElev > eElev) {
            this.ctx.strokeStyle = '#334155';
            this.ctx.lineWidth = Math.max(2, 2.5 * this.zoom);
            this.ctx.beginPath();
            this.ctx.moveTo(x + baseTileSize, y);
            this.ctx.lineTo(x + baseTileSize, y + baseTileSize);
            this.ctx.stroke();
          }

          // Ramp Direction Indicator
          if (tile.terrainType === TerrainType.ROAD_RAMP_NS || tile.terrainType === TerrainType.ROAD_RAMP_EW) {
            this.ctx.fillStyle = '#00f0ff';
            this.ctx.font = `bold ${Math.max(10, Math.floor(12 * this.zoom))}px system-ui, sans-serif`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            const icon = tile.terrainType === TerrainType.ROAD_RAMP_NS ? (nElev < sElev ? '▲' : '▼') : (wElev < eElev ? '▶' : '◀');
            this.ctx.fillText(icon, x + baseTileSize / 2, y + baseTileSize / 2);
          }
        }
      }
    }

    // 2. Roads Procedural Markings, Curves & Roundabouts
    if (this.layers.roads) {
      for (let gx = 0; gx < gridDim; gx++) {
        for (let gz = 0; gz < gridDim; gz++) {
          const tile = this.snapshot!.tiles[gx]?.[gz];
          if (!tile) continue;

          const isRoad = tile.overlayType === OverlayTileType.ROAD ||
                         tile.terrainType === TerrainType.ROAD_INTERSECTION ||
                         tile.terrainType === TerrainType.ROAD_ROUNDABOUT ||
                         (tile.terrainType >= TerrainType.ROAD_CURVE_NE && tile.terrainType <= TerrainType.ROAD_CURVE_SW);

          if (!isRoad) continue;

          const x = gx * baseTileSize;
          const y = gz * baseTileSize;

          if (!isGameStyle) {
            this.ctx.fillStyle = '#0f172a'; // Dark asphalt
            this.ctx.fillRect(x, y, baseTileSize, baseTileSize);

            // Road curb borders
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x, y, baseTileSize, baseTileSize);
          }

          // Lane markings
          if (baseTileSize >= 8) {
            this.ctx.strokeStyle = 'rgba(245, 158, 11, 0.8)';
            this.ctx.lineWidth = Math.max(1, 1.5 * this.zoom);
            this.ctx.setLineDash([3, 3]);

            const t = tile.terrainType;
            const axis = tile.roadAxis;

            if (axis === 'NS' || t === TerrainType.ROAD_STRAIGHT_NS) {
              this.ctx.beginPath();
              this.ctx.moveTo(x + baseTileSize / 2, y);
              this.ctx.lineTo(x + baseTileSize / 2, y + baseTileSize);
              this.ctx.stroke();
            } else if (axis === 'EW' || t === TerrainType.ROAD_STRAIGHT_EW) {
              this.ctx.beginPath();
              this.ctx.moveTo(x, y + baseTileSize / 2);
              this.ctx.lineTo(x + baseTileSize, y + baseTileSize / 2);
              this.ctx.stroke();
            } else if (axis === 'CURVE_NE' || t === TerrainType.ROAD_CURVE_NE) {
              // Connects North to East
              this.ctx.beginPath();
              this.ctx.arc(x + baseTileSize, y, baseTileSize / 2, Math.PI, Math.PI / 2, true);
              this.ctx.stroke();
            } else if (axis === 'CURVE_NW' || t === TerrainType.ROAD_CURVE_NW) {
              // Connects North to West
              this.ctx.beginPath();
              this.ctx.arc(x, y, baseTileSize / 2, 0, Math.PI / 2, false);
              this.ctx.stroke();
            } else if (axis === 'CURVE_SE' || t === TerrainType.ROAD_CURVE_SE) {
              // Connects South to East
              this.ctx.beginPath();
              this.ctx.arc(x + baseTileSize, y + baseTileSize, baseTileSize / 2, Math.PI, 3 * Math.PI / 2, false);
              this.ctx.stroke();
            } else if (axis === 'CURVE_SW' || t === TerrainType.ROAD_CURVE_SW) {
              // Connects South to West
              this.ctx.beginPath();
              this.ctx.arc(x, y + baseTileSize, baseTileSize / 2, 0, 3 * Math.PI / 2, true);
              this.ctx.stroke();
            } else if (t === TerrainType.ROAD_ROUNDABOUT) {
              // Roundabout cell: circular arc flow
              this.ctx.beginPath();
              this.ctx.arc(x + baseTileSize / 2, y + baseTileSize / 2, baseTileSize * 0.35, 0, Math.PI * 2);
              this.ctx.stroke();
            } else {
              // 4-Way Intersection cross
              this.ctx.beginPath();
              this.ctx.moveTo(x + baseTileSize / 2, y);
              this.ctx.lineTo(x + baseTileSize / 2, y + baseTileSize);
              this.ctx.moveTo(x, y + baseTileSize / 2);
              this.ctx.lineTo(x + baseTileSize, y + baseTileSize / 2);
              this.ctx.stroke();
            }
            this.ctx.setLineDash([]);
          }
        }
      }

      // Unified circular roundabouts overlays
      if (this.snapshot!.roundabouts && this.snapshot!.roundabouts.length > 0) {
        for (const rb of this.snapshot!.roundabouts) {
          const cx = rb.cx * baseTileSize;
          const cy = rb.cz * baseTileSize;
          const outerR = rb.radius * baseTileSize;
          const innerR = Math.max(baseTileSize * 0.8, outerR - baseTileSize * 1.15);
          const laneR = (outerR + innerR) / 2;

          // 1. Outer circular curb
          this.ctx.beginPath();
          this.ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
          this.ctx.strokeStyle = isGameStyle ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 240, 255, 0.45)';
          this.ctx.lineWidth = Math.max(1, 2 * this.zoom);
          this.ctx.stroke();

          // 2. Dashed yellow central ring divider
          this.ctx.beginPath();
          this.ctx.arc(cx, cy, laneR, 0, Math.PI * 2);
          this.ctx.strokeStyle = 'rgba(245, 158, 11, 0.9)';
          this.ctx.lineWidth = Math.max(1, 1.5 * this.zoom);
          this.ctx.setLineDash([4, 4]);
          this.ctx.stroke();
          this.ctx.setLineDash([]);

          // 3. Inner island curb ring & disc
          this.ctx.beginPath();
          this.ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
          this.ctx.fillStyle = rb.islandType === 'grass'
            ? (isGameStyle ? '#235e23' : '#142d1f')
            : (isGameStyle ? '#8c7d6b' : '#334155');
          this.ctx.fill();
          this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          this.ctx.lineWidth = Math.max(1, 2 * this.zoom);
          this.ctx.stroke();
        }
      }
    }

    // 3. Macro District Zoning Overlay
    if (this.layers.districts && this.snapshot!.macroGrid) {
      const macroSize = baseTileSize * 8;
      for (let mx = 0; mx < 8; mx++) {
        for (let mz = 0; mz < 8; mz++) {
          const mod = this.snapshot!.macroGrid[mx]?.[mz];
          if (!mod) continue;

          const dx = mx * macroSize;
          const dz = mz * macroSize;
          const colors = MapRendererCanvas.DISTRICT_COLORS[mod.district] || MapRendererCanvas.DISTRICT_COLORS.any;

          this.ctx.fillStyle = colors.bg;
          this.ctx.fillRect(dx, dz, macroSize, macroSize);

          this.ctx.strokeStyle = colors.border;
          this.ctx.lineWidth = 1.5;
          this.ctx.strokeRect(dx + 1, dz + 1, macroSize - 2, macroSize - 2);

          if (this.zoom >= 0.7) {
            this.ctx.fillStyle = colors.border;
            this.ctx.font = `bold ${Math.max(9, Math.floor(11 * this.zoom))}px system-ui, sans-serif`;
            this.ctx.fillText(colors.name.toUpperCase(), dx + 6, dz + 16);
          }
        }
      }
    }

    // 4. Occupancy / Clearance Mask
    if (this.layers.occupancy && this.snapshot!.occupied) {
      this.ctx.fillStyle = 'rgba(239, 68, 68, 0.28)';
      for (let gx = 0; gx < gridDim; gx++) {
        for (let gz = 0; gz < gridDim; gz++) {
          if (this.snapshot!.occupied[gx]?.[gz]) {
            this.ctx.fillRect(gx * baseTileSize, gz * baseTileSize, baseTileSize, baseTileSize);
          }
        }
      }
    }

    // 5. Buildings Pass
    if (this.layers.buildings) {
      for (const b of this.snapshot!.buildings) {
        const def = BUILDING_DEFS[b.typeKey] || BUILDING_DEFS['3'];
        const isLandmark = b.lotType === 'landmark' || (def.tier === 'background' && def.is3D);

        if (isLandmark && !this.layers.landmarks) continue;

        const bx = b.gx * baseTileSize;
        const bz = b.gz * baseTileSize;
        const bw = b.w * baseTileSize;
        const bh = b.h * baseTileSize;

        // Footprint Shadow
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
        this.ctx.fillRect(bx + 2, bz + 2, bw, bh);

        // Building Fill Color
        let fillColor = '#38bdf8';
        let strokeColor = '#0284c7';

        if (isGameStyle) {
          // Game architectural rooftop colors
          if (def.is3D || isLandmark) {
            fillColor = '#d97706';
            strokeColor = '#f59e0b';
          } else if (def.tier === 'background') {
            fillColor = '#334155';
            strokeColor = '#64748b';
          } else if (def.tier === 'midground') {
            fillColor = '#475569';
            strokeColor = '#94a3b8';
          } else {
            fillColor = '#78350f'; // Warm brick brownstone
            strokeColor = '#9a3412';
          }
        } else {
          // Blueprint neon colors
          if (def.is3D || isLandmark) {
            fillColor = '#f59e0b';
            strokeColor = '#b45309';
          } else if (def.tier === 'background') {
            fillColor = '#a855f7';
            strokeColor = '#7e22ce';
          } else if (def.tier === 'midground') {
            fillColor = '#6366f1';
            strokeColor = '#4338ca';
          }
        }

        this.ctx.fillStyle = fillColor;
        this.ctx.fillRect(bx, bz, bw - 1, bh - 1);

        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = isLandmark ? 2 : 1;
        this.ctx.strokeRect(bx, bz, bw - 1, bh - 1);

        // Name / Footprint label if zoomed in
        if (baseTileSize >= 14 && (bw >= 24 || isLandmark)) {
          this.ctx.fillStyle = '#ffffff';
          this.ctx.font = `bold ${Math.max(8, Math.floor(9 * this.zoom))}px system-ui, sans-serif`;
          const shortName = def.name.length > 12 ? def.name.slice(0, 10) + '..' : def.name;
          this.ctx.fillText(shortName, bx + 3, bz + bh / 2 + 3);
        }
      }
    }

    // 6. Grid Lines & Coordinates Pass
    if (this.layers.grid) {
      this.ctx.strokeStyle = isGameStyle ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.08)';
      this.ctx.lineWidth = 1;

      for (let i = 0; i <= gridDim; i++) {
        const pos = i * baseTileSize;
        this.ctx.beginPath();
        this.ctx.moveTo(pos, 0);
        this.ctx.lineTo(pos, gridDim * baseTileSize);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(0, pos);
        this.ctx.lineTo(gridDim * baseTileSize, pos);
        this.ctx.stroke();

        // Index markers every 8 cells
        if (i % 8 === 0 && i < gridDim && this.zoom >= 0.6) {
          this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          this.ctx.font = '9px monospace';
          this.ctx.fillText(`${i}`, pos + 3, 11);
          this.ctx.fillText(`${i}`, 3, pos + 11);
        }
      }
    }

    // 7. Hovered Cell Highlight
    if (this.hoveredCell) {
      const hx = this.hoveredCell.gx * baseTileSize;
      const hz = this.hoveredCell.gz * baseTileSize;
      this.ctx.strokeStyle = '#00f0ff';
      this.ctx.lineWidth = 2.5;
      this.ctx.strokeRect(hx, hz, baseTileSize, baseTileSize);
      this.ctx.fillStyle = 'rgba(0, 240, 255, 0.25)';
      this.ctx.fillRect(hx, hz, baseTileSize, baseTileSize);
    }
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // ISOMETRIC 2.5D RENDERER
  // ─────────────────────────────────────────────────────────────────────────────
  private renderIsometric(_width: number, _height: number) {
    const gridDim = this.snapshot!.gridDim; // 64
    const isoW = 28 * this.zoom;
    const isoH = 14 * this.zoom;
    const isGameStyle = this.renderTheme === 'game_tiles';

    const elevScale = this.layers.elevation ? 0.7 * this.zoom : 0.0;

    const toIso = (gx: number, gz: number, elev: number = 0) => {
      const sx = (gx - gz) * (isoW / 2);
      const sy = (gx + gz) * (isoH / 2) - elev * elevScale;
      return { x: sx, y: sy };
    };

    // 0. Extended Horizon Environment Pass (Outward Highways & Ocean Horizon)
    this.drawExtendedIsometricEnvironment(toIso, isoW, isoH, isGameStyle, gridDim);

    // Draw Ground Diamonds (back-to-front by gx + gz)
    for (let sum = 0; sum <= (gridDim - 1) * 2; sum++) {
      for (let gx = 0; gx < gridDim; gx++) {
        const gz = sum - gx;
        if (gz < 0 || gz >= gridDim) continue;

        const tile = this.snapshot!.tiles[gx]?.[gz];
        if (!tile) continue;

        const cellElev = tile.elevation ?? 0;
        let elevNW = cellElev;
        let elevNE = cellElev;
        let elevSE = cellElev;
        let elevSW = cellElev;

        if (tile.terrainType === TerrainType.ROAD_RAMP_NS) {
          const northTile = gz > 0 ? this.snapshot!.tiles[gx]?.[gz - 1] : null;
          const southTile = gz < gridDim - 1 ? this.snapshot!.tiles[gx]?.[gz + 1] : null;
          const nElev = northTile?.elevation ?? cellElev;
          const sElev = southTile?.elevation ?? cellElev;
          elevNW = nElev;
          elevNE = nElev;
          elevSE = sElev;
          elevSW = sElev;
        } else if (tile.terrainType === TerrainType.ROAD_RAMP_EW) {
          const westTile = gx > 0 ? this.snapshot!.tiles[gx - 1]?.[gz] : null;
          const eastTile = gx < gridDim - 1 ? this.snapshot!.tiles[gx + 1]?.[gz] : null;
          const wElev = westTile?.elevation ?? cellElev;
          const eElev = eastTile?.elevation ?? cellElev;
          elevNW = wElev;
          elevSW = wElev;
          elevNE = eElev;
          elevSE = eElev;
        }

        const p = toIso(gx, gz);
        const pNW = { x: p.x, y: p.y - elevNW * elevScale };
        const pNE = { x: p.x + isoW / 2, y: p.y + isoH / 2 - elevNE * elevScale };
        const pSE = { x: p.x, y: p.y + isoH - elevSE * elevScale };
        const pSW = { x: p.x - isoW / 2, y: p.y + isoH / 2 - elevSW * elevScale };

        let fill = isGameStyle ? '#2d6a2d' : '#193324';
        if (tile.terrainType === TerrainType.WATER) {
          fill = this.layers.water ? (isGameStyle ? '#0a2f64' : '#0a2342') : '#070f1a';
        } else if (tile.terrainType === TerrainType.WATER_SHORE) {
          fill = this.layers.water ? (isGameStyle ? '#1888c8' : '#0284c7') : '#0a3556';
        } else if (tile.terrainType === TerrainType.SAND) {
          fill = isGameStyle ? '#d4b27a' : (this.layers.terrain ? '#ca8a04' : '#713f12');
        } else if (tile.overlayType === OverlayTileType.ROAD && this.layers.roads) {
          fill = isGameStyle ? '#1c1f24' : '#0f172a';
        } else if (tile.terrainType === TerrainType.PLAZA_STONE && this.layers.terrain) {
          fill = isGameStyle ? '#9e8e78' : '#334155';
        } else if (tile.terrainType === TerrainType.SIDEWALK && this.layers.terrain) {
          fill = isGameStyle ? '#5a6473' : '#475569';
        }

        // Retaining Walls facing Camera (South edge & East edge)
        if (this.layers.elevation) {
          // South edge cliff face (facing camera down-left)
          const southTile = gz < gridDim - 1 ? this.snapshot!.tiles[gx]?.[gz + 1] : null;
          const sNeighborElev = southTile?.elevation ?? (cellElev > 0 ? 0 : cellElev);
          if (elevSW > sNeighborElev || elevSE > sNeighborElev) {
            const pSW_bot = { x: p.x - isoW / 2, y: p.y + isoH / 2 - sNeighborElev * elevScale };
            const pSE_bot = { x: p.x, y: p.y + isoH - sNeighborElev * elevScale };

            this.ctx.beginPath();
            this.ctx.moveTo(pSW.x, pSW.y);
            this.ctx.lineTo(pSE.x, pSE.y);
            this.ctx.lineTo(pSE_bot.x, pSE_bot.y);
            this.ctx.lineTo(pSW_bot.x, pSW_bot.y);
            this.ctx.closePath();
            this.ctx.fillStyle = isGameStyle ? '#3d444d' : '#222d3d';
            this.ctx.fill();
            this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }

          // East edge cliff face (facing camera down-right)
          const eastTile = gx < gridDim - 1 ? this.snapshot!.tiles[gx + 1]?.[gz] : null;
          const eNeighborElev = eastTile?.elevation ?? (cellElev > 0 ? 0 : cellElev);
          if (elevSE > eNeighborElev || elevNE > eNeighborElev) {
            const pSE_bot = { x: p.x, y: p.y + isoH - eNeighborElev * elevScale };
            const pNE_bot = { x: p.x + isoW / 2, y: p.y + isoH / 2 - eNeighborElev * elevScale };

            this.ctx.beginPath();
            this.ctx.moveTo(pSE.x, pSE.y);
            this.ctx.lineTo(pNE.x, pNE.y);
            this.ctx.lineTo(pNE_bot.x, pNE_bot.y);
            this.ctx.lineTo(pSE_bot.x, pSE_bot.y);
            this.ctx.closePath();
            this.ctx.fillStyle = isGameStyle ? '#4d5661' : '#2d3b4e';
            this.ctx.fill();
            this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
          }
        }

        // Draw diamond
        this.ctx.beginPath();
        this.ctx.moveTo(pNW.x, pNW.y);
        this.ctx.lineTo(pNE.x, pNE.y);
        this.ctx.lineTo(pSE.x, pSE.y);
        this.ctx.lineTo(pSW.x, pSW.y);
        this.ctx.closePath();

        this.ctx.fillStyle = fill;
        this.ctx.fill();

        if (this.layers.grid) {
          this.ctx.strokeStyle = isGameStyle ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.05)';
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    // Render 3D Isometric Roundabout Ellipses on Ground Plane
    if (this.layers.roads && this.snapshot!.roundabouts && this.snapshot!.roundabouts.length > 0) {
      for (const rb of this.snapshot!.roundabouts) {
        const rbElev = (this.snapshot!.tiles[Math.floor(rb.cx)]?.[Math.floor(rb.cz)]?.elevation ?? 0) * elevScale;
        const p = toIso(rb.cx, rb.cz);
        const cy = p.y + isoH / 2 - rbElev;
        const rX = rb.radius * isoW * 0.5;
        const rY = rX * 0.5; // Isometric 2:1 foreshortened projection
        const innerRx = Math.max(isoW * 0.4, rX - isoW * 0.55);
        const innerRy = innerRx * 0.5;
        const laneRx = (rX + innerRx) / 2;
        const laneRy = laneRx * 0.5;

        // Asphalt ring ellipse
        this.ctx.beginPath();
        this.ctx.ellipse(p.x, cy, rX, rY, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = isGameStyle ? '#1c1f24' : '#0f172a';
        this.ctx.fill();

        // Outer white curb ellipse
        this.ctx.strokeStyle = isGameStyle ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 240, 255, 0.45)';
        this.ctx.lineWidth = Math.max(1, 1.8 * this.zoom);
        this.ctx.stroke();

        // Dashed yellow divider ellipse
        this.ctx.beginPath();
        this.ctx.ellipse(p.x, cy, laneRx, laneRy, 0, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(245, 158, 11, 0.9)';
        this.ctx.lineWidth = Math.max(1, 1.5 * this.zoom);
        this.ctx.setLineDash([4, 4]);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Inner landscaped island ellipse
        this.ctx.beginPath();
        this.ctx.ellipse(p.x, cy, innerRx, innerRy, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = rb.islandType === 'grass'
          ? (isGameStyle ? '#2d6a2d' : '#193324')
          : (isGameStyle ? '#9e8e78' : '#334155');
        this.ctx.fill();
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
        this.ctx.lineWidth = Math.max(1, 1.8 * this.zoom);
        this.ctx.stroke();
      }
    }

    // Draw Buildings (back to front sorted by isometric depth)
    if (this.layers.buildings) {
      const sortedBuildings = [...this.snapshot!.buildings].sort(
        (a, b) => (a.gx + a.gz) - (b.gx + b.gz)
      );

      for (const b of sortedBuildings) {
        const def = BUILDING_DEFS[b.typeKey] || BUILDING_DEFS['3'];
        const isLandmark = b.lotType === 'landmark' || (def.tier === 'background' && def.is3D);
        if (isLandmark && !this.layers.landmarks) continue;

        const bElev = (b.elevation ?? 0) * elevScale;
        const p = toIso(b.gx + b.w / 2, b.gz + b.h / 2);
        const bW = b.w * isoW * 0.85;
        const bH = b.h * isoH * 0.85;
        const altitude = Math.min(140, Math.max(12, (def.height || 30) * 0.7 * this.zoom));

        const bx = p.x;
        const by = p.y - bElev;

        // If in Game Authentic mode, check if we have the real game sprite loaded!
        const spriteImg = isGameStyle ? this.buildingImages.get(b.typeKey) : null;

        if (spriteImg && spriteImg.complete && spriteImg.naturalWidth > 0) {
          // Draw authentic in-game pristine isometric building sprite!
          const imgAspect = spriteImg.naturalWidth / spriteImg.naturalHeight;
          const drawW = Math.max(bW * 1.85, (def.width || 16) * 1.6 * this.zoom);
          const drawH = drawW / imgAspect;

          // Anchor sprite to bottom-center of the lot
          const drawX = bx - drawW / 2;
          const drawY = by + bH / 2 - drawH;

          this.ctx.drawImage(spriteImg, drawX, drawY, drawW, drawH);
        } else {
          // Extruded 2.5D Isometric Box with authentic shading
          let baseColor = def.is3D ? '#f59e0b' : (def.tier === 'background' ? '#a855f7' : '#38bdf8');
          if (isGameStyle) {
            baseColor = def.is3D ? '#d97706' : (def.tier === 'background' ? '#475569' : '#b45309');
          }

          // Left Face
          this.ctx.fillStyle = this.shadeColor(baseColor, -35);
          this.ctx.beginPath();
          this.ctx.moveTo(bx - bW / 2, by);
          this.ctx.lineTo(bx, by + bH / 2);
          this.ctx.lineTo(bx, by + bH / 2 - altitude);
          this.ctx.lineTo(bx - bW / 2, by - altitude);
          this.ctx.closePath();
          this.ctx.fill();

          // Right Face
          this.ctx.fillStyle = this.shadeColor(baseColor, -15);
          this.ctx.beginPath();
          this.ctx.moveTo(bx, by + bH / 2);
          this.ctx.lineTo(bx + bW / 2, by);
          this.ctx.lineTo(bx + bW / 2, by - altitude);
          this.ctx.lineTo(bx, by + bH / 2 - altitude);
          this.ctx.closePath();
          this.ctx.fill();

          // Top Roof Face
          this.ctx.fillStyle = baseColor;
          this.ctx.beginPath();
          this.ctx.moveTo(bx, by - bH / 2 - altitude);
          this.ctx.lineTo(bx + bW / 2, by - altitude);
          this.ctx.lineTo(bx, by + bH / 2 - altitude);
          this.ctx.lineTo(bx - bW / 2, by - altitude);
          this.ctx.closePath();
          this.ctx.fill();

          this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }
  }

  private drawEmptyState(width: number, height: number) {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    this.ctx.font = '16px system-ui, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Click "Bake Map" or "Step Play" to generate city layers', width / 2, height / 2);
    this.ctx.textAlign = 'left';
  }

  private shadeColor(color: string, percent: number): string {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = Math.floor((R * (100 + percent)) / 100);
    G = Math.floor((G * (100 + percent)) / 100);
    B = Math.floor((B * (100 + percent)) / 100);

    R = Math.min(255, Math.max(0, R));
    G = Math.min(255, Math.max(0, G));
    B = Math.min(255, Math.max(0, B));

    const RR = R.toString(16).padStart(2, '0');
    const GG = G.toString(16).padStart(2, '0');
    const BB = B.toString(16).padStart(2, '0');

    return `#${RR}${GG}${BB}`;
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // EVENT LISTENERS & INTERACTIVITY
  // ─────────────────────────────────────────────────────────────────────────────
  private attachEventListeners() {
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.dragStartX = e.clientX - this.panX;
      this.dragStartY = e.clientY - this.panY;
      this.canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        this.panX = e.clientX - this.dragStartX;
        this.panY = e.clientY - this.dragStartY;
        this.render();
      } else {
        this.handleMouseMove(e);
      }
    });

    window.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.isDragging = false;
        this.canvas.style.cursor = 'crosshair';
      }
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const delta = e.deltaY < 0 ? 1.15 : 0.87;
      this.setZoom(delta, mouseX, mouseY);
    }, { passive: false });

    this.canvas.addEventListener('click', () => {
      if (!this.hoveredCell || !this.snapshot) return;
      const info = this.getCellInspectInfo(this.hoveredCell.gx, this.hoveredCell.gz);
      this.onSelectCell?.(info);
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.hoveredCell = null;
      this.onHoverCell?.(null);
      this.render();
    });
  }

  private handleMouseMove(e: MouseEvent) {
    if (!this.snapshot) return;
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (this.projection === '2d') {
      const baseTileSize = 16 * this.zoom;
      const relX = mouseX - this.panX;
      const relY = mouseY - this.panY;

      const gx = Math.floor(relX / baseTileSize);
      const gz = Math.floor(relY / baseTileSize);

      if (gx >= 0 && gx < this.snapshot.gridDim && gz >= 0 && gz < this.snapshot.gridDim) {
        if (!this.hoveredCell || this.hoveredCell.gx !== gx || this.hoveredCell.gz !== gz) {
          this.hoveredCell = { gx, gz };
          const info = this.getCellInspectInfo(gx, gz);
          this.onHoverCell?.(info);
          this.render();
        }
      } else if (this.hoveredCell) {
        this.hoveredCell = null;
        this.onHoverCell?.(null);
        this.render();
      }
    } else if (this.projection === 'isometric') {
      const isoW = 28 * this.zoom;
      const isoH = 14 * this.zoom;
      const relX = mouseX - this.panX;
      const relY = mouseY - this.panY;

      const u = relX / (isoW / 2);
      const v = relY / (isoH / 2);
      const gx = Math.floor((u + v) / 2);
      const gz = Math.floor((v - u) / 2);

      if (gx >= 0 && gx < this.snapshot.gridDim && gz >= 0 && gz < this.snapshot.gridDim) {
        if (!this.hoveredCell || this.hoveredCell.gx !== gx || this.hoveredCell.gz !== gz) {
          this.hoveredCell = { gx, gz };
          const info = this.getCellInspectInfo(gx, gz);
          this.onHoverCell?.(info);
          this.render();
        }
      } else if (this.hoveredCell) {
        this.hoveredCell = null;
        this.onHoverCell?.(null);
        this.render();
      }
    }
  }

  public getCellInspectInfo(gx: number, gz: number): CellInspectInfo | null {
    if (!this.snapshot) return null;
    const tile = this.snapshot.tiles[gx]?.[gz];
    if (!tile) return null;

    const MAP_BOUNDS = 1024;
    const TILE_SIZE = 16;
    const worldX = -MAP_BOUNDS / 2 + (gx + 0.5) * TILE_SIZE;
    const worldZ = -MAP_BOUNDS / 2 + (gz + 0.5) * TILE_SIZE;

    // Find building on this cell
    const building = this.snapshot.buildings.find(
      b => gx >= b.gx && gx < b.gx + b.w && gz >= b.gz && gz < b.gz + b.h
    );
    const buildingDef = building ? (BUILDING_DEFS[building.typeKey] || BUILDING_DEFS['3']) : undefined;

    // Find macro district
    let district: string | undefined;
    if (this.snapshot.macroGrid) {
      const mx = Math.floor(gx / 8);
      const mz = Math.floor(gz / 8);
      const mod = this.snapshot.macroGrid[mx]?.[mz];
      if (mod) district = mod.district;
    }

    return {
      gx,
      gz,
      worldX,
      worldZ,
      terrainType: tile.terrainType,
      overlayType: tile.overlayType,
      elevation: tile.elevation,
      elevationTier: tile.elevationTier,
      isOccupied: !!this.snapshot.occupied[gx]?.[gz],
      district,
      building,
      buildingDef,
    };
  }

  public exportPNG(): string {
    return this.canvas.toDataURL('image/png');
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // EXTENDED HORIZON RENDERING (Infinite Highways & Expansive Ocean)
  // ─────────────────────────────────────────────────────────────────────────────
  private drawExtendedTopDownEnvironment(baseTileSize: number, isGameStyle: boolean, gridDim: number) {
    if (!this.snapshot) return;

    // Detect water on South & East borders
    let southWaterMinX = gridDim;
    let eastWaterMinZ = gridDim;
    for (let gx = 0; gx < gridDim; gx++) {
      const t = this.snapshot.tiles[gx]?.[gridDim - 1];
      if (t && (t.terrainType === TerrainType.WATER || t.terrainType === TerrainType.WATER_SHORE)) {
        if (gx < southWaterMinX) southWaterMinX = gx;
      }
    }
    for (let gz = 0; gz < gridDim; gz++) {
      const t = this.snapshot.tiles[gridDim - 1]?.[gz];
      if (t && (t.terrainType === TerrainType.WATER || t.terrainType === TerrainType.WATER_SHORE)) {
        if (gz < eastWaterMinZ) eastWaterMinZ = gz;
      }
    }

    const extDistance = 35 * baseTileSize;

    // 1. Extended Ocean (South-East bay)
    if (this.layers.water && (southWaterMinX < gridDim || eastWaterMinZ < gridDim)) {
      const oceanX = Math.max(0, southWaterMinX - 1) * baseTileSize;
      const oceanY = Math.max(0, eastWaterMinZ - 1) * baseTileSize;
      const oceanW = (gridDim * baseTileSize - oceanX) + extDistance;
      const oceanH = (gridDim * baseTileSize - oceanY) + extDistance;
      const beachW = 2 * baseTileSize;

      // Golden beach sand buffer strip
      this.ctx.fillStyle = isGameStyle ? '#d4b27a' : '#927848';
      this.ctx.fillRect(oceanX - beachW, oceanY - beachW, oceanW + beachW, beachW); // North beach
      this.ctx.fillRect(oceanX - beachW, oceanY, beachW, oceanH); // West beach

      // Shallow coastal turquoise surf strip
      this.ctx.fillStyle = isGameStyle ? '#1888c8' : '#14608c';
      this.ctx.fillRect(oceanX, oceanY - baseTileSize, oceanW, baseTileSize);
      this.ctx.fillRect(oceanX - baseTileSize, oceanY, baseTileSize, oceanH);

      // Deep ocean water
      this.ctx.fillStyle = isGameStyle ? '#0a2f64' : '#0a2342';
      this.ctx.fillRect(oceanX, oceanY, oceanW, oceanH);

      // Subtle wave crest lines
      this.ctx.fillStyle = isGameStyle ? '#114488' : 'rgba(56, 189, 248, 0.15)';
      for (let wy = oceanY + 20; wy < oceanY + oceanH; wy += 40 * this.zoom) {
        this.ctx.fillRect(oceanX + 15, wy, oceanW - 30, 2);
      }
    }

    // 2. Extended Highways (North, South, West, East)
    if (this.layers.roads) {
      const isRoad = (t: any) => t && (
        t.overlayType === 1 ||
        t.terrainType === TerrainType.ROAD_STRAIGHT_NS ||
        t.terrainType === TerrainType.ROAD_STRAIGHT_EW ||
        t.terrainType === TerrainType.ROAD_INTERSECTION ||
        t.terrainType === TerrainType.ROAD_ROUNDABOUT ||
        (t.terrainType >= TerrainType.ROAD_CURVE_NE && t.terrainType <= TerrainType.ROAD_CURVE_SW)
      );
      const isWater = (t: any) => t && (t.terrainType === TerrainType.WATER || t.terrainType === TerrainType.WATER_SHORE || t.terrainType === TerrainType.SAND);

      const drawHighwayNS = (gx: number, startY: number, len: number) => {
        const rx = gx * baseTileSize;
        this.ctx.fillStyle = isGameStyle ? '#1c1f24' : '#0f172a';
        this.ctx.fillRect(rx, startY, baseTileSize, len);
        // Yellow double centerline
        this.ctx.fillStyle = '#f5b800';
        this.ctx.fillRect(rx + baseTileSize / 2 - 1, startY, 2, len);
        // White curbs
        this.ctx.fillStyle = isGameStyle ? '#d0d7e0' : 'rgba(255, 255, 255, 0.25)';
        this.ctx.fillRect(rx, startY, 1, len);
        this.ctx.fillRect(rx + baseTileSize - 1, startY, 1, len);
      };

      const drawHighwayEW = (gz: number, startX: number, len: number) => {
        const ry = gz * baseTileSize;
        this.ctx.fillStyle = isGameStyle ? '#1c1f24' : '#0f172a';
        this.ctx.fillRect(startX, ry, len, baseTileSize);
        // Yellow double centerline
        this.ctx.fillStyle = '#f5b800';
        this.ctx.fillRect(startX, ry + baseTileSize / 2 - 1, len, 2);
        // White curbs
        this.ctx.fillStyle = isGameStyle ? '#d0d7e0' : 'rgba(255, 255, 255, 0.25)';
        this.ctx.fillRect(startX, ry, len, 1);
        this.ctx.fillRect(startX, ry + baseTileSize - 1, len, 1);
      };

      // North highways (gz = 0)
      for (let gx = 0; gx < gridDim; gx++) {
        const t = this.snapshot.tiles[gx]?.[0];
        if (isRoad(t) && !isWater(t)) {
          drawHighwayNS(gx, -extDistance, extDistance);
        }
      }

      // South highways (gz = gridDim - 1, safe from water >= 4 tiles)
      for (let gx = 0; gx < gridDim; gx++) {
        const t = this.snapshot.tiles[gx]?.[gridDim - 1];
        if (isRoad(t) && !isWater(t) && gx < southWaterMinX - 4) {
          drawHighwayNS(gx, gridDim * baseTileSize, extDistance);
        }
      }

      // West highways (gx = 0)
      for (let gz = 0; gz < gridDim; gz++) {
        const t = this.snapshot.tiles[0]?.[gz];
        if (isRoad(t) && !isWater(t)) {
          drawHighwayEW(gz, -extDistance, extDistance);
        }
      }

      // East highways (gx = gridDim - 1, safe from water >= 4 tiles)
      for (let gz = 0; gz < gridDim; gz++) {
        const t = this.snapshot.tiles[gridDim - 1]?.[gz];
        if (isRoad(t) && !isWater(t) && gz < eastWaterMinZ - 4) {
          drawHighwayEW(gz, gridDim * baseTileSize, extDistance);
        }
      }
    }
  }

  private drawExtendedIsometricEnvironment(
    toIso: (gx: number, gz: number) => { x: number; y: number },
    isoW: number,
    isoH: number,
    isGameStyle: boolean,
    gridDim: number
  ) {
    if (!this.snapshot) return;

    // Detect water on South & East borders
    let southWaterMinX = gridDim;
    let eastWaterMinZ = gridDim;
    for (let gx = 0; gx < gridDim; gx++) {
      const t = this.snapshot.tiles[gx]?.[gridDim - 1];
      if (t && (t.terrainType === TerrainType.WATER || t.terrainType === TerrainType.WATER_SHORE)) {
        if (gx < southWaterMinX) southWaterMinX = gx;
      }
    }
    for (let gz = 0; gz < gridDim; gz++) {
      const t = this.snapshot.tiles[gridDim - 1]?.[gz];
      if (t && (t.terrainType === TerrainType.WATER || t.terrainType === TerrainType.WATER_SHORE)) {
        if (gz < eastWaterMinZ) eastWaterMinZ = gz;
      }
    }

    // 1. Extended Ocean Diamonds (South-East bay) with beach sand & shallow surf buffer
    if (this.layers.water && (southWaterMinX < gridDim || eastWaterMinZ < gridDim)) {
      const oceanColor = isGameStyle ? '#0a2f64' : '#0a2342';
      const surfColor = isGameStyle ? '#1888c8' : '#14608c';
      const sandColor = isGameStyle ? '#d4b27a' : '#927848';
      const maxExt = gridDim + 12;

      const minX = Math.max(0, southWaterMinX - 2);
      const minZ = Math.max(0, eastWaterMinZ - 2);

      for (let gx = minX; gx < maxExt; gx++) {
        for (let gz = minZ; gz < maxExt; gz++) {
          if (gx < gridDim && gz < gridDim) continue; // Inside city grid is handled by main pass

          let color = oceanColor;
          if (gx === minX || gz === minZ) {
            color = sandColor; // Exterior beach buffer
          } else if (gx === minX + 1 || gz === minZ + 1) {
            color = surfColor; // Exterior shallow surf
          }

          const p = toIso(gx, gz);
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p.x + isoW / 2, p.y + isoH / 2);
          this.ctx.lineTo(p.x, p.y + isoH);
          this.ctx.lineTo(p.x - isoW / 2, p.y + isoH / 2);
          this.ctx.closePath();
          this.ctx.fillStyle = color;
          this.ctx.fill();
        }
      }
    }

    // 2. Extended Isometric Highway Ribbons
    if (this.layers.roads) {
      const isRoad = (t: any) => t && (
        t.overlayType === 1 ||
        t.terrainType === TerrainType.ROAD_STRAIGHT_NS ||
        t.terrainType === TerrainType.ROAD_STRAIGHT_EW ||
        t.terrainType === TerrainType.ROAD_INTERSECTION ||
        t.terrainType === TerrainType.ROAD_ROUNDABOUT ||
        (t.terrainType >= TerrainType.ROAD_CURVE_NE && t.terrainType <= TerrainType.ROAD_CURVE_SW)
      );
      const isWater = (t: any) => t && (t.terrainType === TerrainType.WATER || t.terrainType === TerrainType.WATER_SHORE || t.terrainType === TerrainType.SAND);

      const drawIsoRoadTile = (gx: number, gz: number) => {
        const p = toIso(gx, gz);
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(p.x + isoW / 2, p.y + isoH / 2);
        this.ctx.lineTo(p.x, p.y + isoH);
        this.ctx.lineTo(p.x - isoW / 2, p.y + isoH / 2);
        this.ctx.closePath();
        this.ctx.fillStyle = isGameStyle ? '#1c1f24' : '#0f172a';
        this.ctx.fill();

        // Center line
        this.ctx.strokeStyle = '#f5b800';
        this.ctx.lineWidth = Math.max(1, 1.2 * this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y + isoH / 4);
        this.ctx.lineTo(p.x, p.y + (3 * isoH) / 4);
        this.ctx.stroke();
      };

      const steps = 14;
      // North highways (gz = 0)
      for (let gx = 0; gx < gridDim; gx++) {
        const t = this.snapshot.tiles[gx]?.[0];
        if (isRoad(t) && !isWater(t)) {
          for (let step = 1; step <= steps; step++) {
            drawIsoRoadTile(gx, -step);
          }
        }
      }

      // South highways (gz = gridDim - 1, safe from water >= 4 tiles)
      for (let gx = 0; gx < gridDim; gx++) {
        const t = this.snapshot.tiles[gx]?.[gridDim - 1];
        if (isRoad(t) && !isWater(t) && gx < southWaterMinX - 4) {
          for (let step = 0; step < steps; step++) {
            drawIsoRoadTile(gx, gridDim + step);
          }
        }
      }

      // West highways (gx = 0)
      for (let gz = 0; gz < gridDim; gz++) {
        const t = this.snapshot.tiles[0]?.[gz];
        if (isRoad(t) && !isWater(t)) {
          for (let step = 1; step <= steps; step++) {
            drawIsoRoadTile(-step, gz);
          }
        }
      }

      // East highways (gx = gridDim - 1, safe from water >= 4 tiles)
      for (let gz = 0; gz < gridDim; gz++) {
        const t = this.snapshot.tiles[gridDim - 1]?.[gz];
        if (isRoad(t) && !isWater(t) && gz < eastWaterMinZ - 4) {
          for (let step = 0; step < steps; step++) {
            drawIsoRoadTile(gridDim + step, gz);
          }
        }
      }
    }
  }
}
