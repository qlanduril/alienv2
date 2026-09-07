export interface BuildingDef {
  width: number;   // footprint width (world units)
  length: number;  // footprint length (world units)
  height: number;  // collision height (altitude units)
  name: string;
  visualScale: number; // visual scale multiplier for rendering (must stay <= 0.95 to avoid road overflow)
  footprintTiles?: number;
  heightScale?: number;
  tier?: 'foreground' | 'midground' | 'background';
  is3D?: boolean;
  gltfKey?: string;
}

export const BUILDING_DEFS: Record<string, BuildingDef> = {
  // --- Foreground (Large Landmark Civic Buildings: 3x3 multi-tile footprint = 48x48) ---
  '1': { width: 48, length: 48, height: 45, name: 'Hospital', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground' },
  '2': { width: 48, length: 48, height: 40, name: 'Mall', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground' },
  '3': { width: 48, length: 48, height: 40, name: 'School', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground' },
  '4': { width: 48, length: 48, height: 40, name: 'Warehouse', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground' },

  // --- Foreground Low-Rises (South Borders: 1x1 footprint) ---
  'b1': { width: 16, length: 16, height: 30, name: 'Low-rise Shop', visualScale: 0.7, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'b2': { width: 16, length: 16, height: 35, name: 'Brownstone', visualScale: 0.75, footprintTiles: 1, heightScale: 0.75, tier: 'foreground' },

  // --- Midground Urban Blockers (1x1 footprint) ---
  'b3': { width: 16, length: 16, height: 85, name: 'Mid-rise Apartments', visualScale: 0.85, footprintTiles: 1, heightScale: 0.85, tier: 'midground' },
  'b4': { width: 16, length: 16, height: 90, name: 'Mid-rise Office', visualScale: 0.90, footprintTiles: 1, heightScale: 0.90, tier: 'midground' },
  'res_bronze': { width: 16, length: 16, height: 110, name: 'Bronze Penthouses', visualScale: 0.90, footprintTiles: 1, heightScale: 0.90, tier: 'midground' },
  'res_sky': { width: 16, length: 16, height: 115, name: 'Sky Gardens', visualScale: 0.95, footprintTiles: 1, heightScale: 0.95, tier: 'midground' },

  // --- Background Skyscrapers (1x1 footprint — visualScale capped <= 0.95 so sprites sit cleanly inside 16-unit grid cell) ---
  '5': { width: 16, length: 16, height: 220, name: 'Skyscraper', visualScale: 0.95, footprintTiles: 1, heightScale: 1.4, tier: 'background' },
  'sky_artdeco': { width: 16, length: 16, height: 260, name: 'Art Deco Titan', visualScale: 0.95, footprintTiles: 1, heightScale: 1.5, tier: 'background' },
  'sky_biotech': { width: 16, length: 16, height: 280, name: 'Biotech Helix', visualScale: 0.95, footprintTiles: 1, heightScale: 1.6, tier: 'background' },
  'sky_cyber': { width: 16, length: 16, height: 320, name: 'Cyber Spire', visualScale: 0.95, footprintTiles: 1, heightScale: 1.7, tier: 'background' },

  // --- Tier 4: Mega-Landmarks & Special Buildings ---
  'mega_titan': { width: 64, length: 64, height: 800, name: 'Apex Mega-Tower', visualScale: 0.85, footprintTiles: 4, heightScale: 0.85, tier: 'background', is3D: true, gltfKey: 'skyscraper_demolition' },
  'mega_stadium': { width: 64, length: 48, height: 120, name: 'Metropolitan Arena', visualScale: 0.95, footprintTiles: 4, heightScale: 0.95, tier: 'foreground' },
  'spaceship_hq': { width: 64, length: 64, height: 400, name: 'Alien Spaceship HQ', visualScale: 0.95, footprintTiles: 4, heightScale: 0.95, tier: 'background' },
  'statue_liberty': { width: 48, length: 48, height: 350, name: 'Statue of Liberty', visualScale: 0.90, footprintTiles: 3, heightScale: 0.90, tier: 'foreground' },
  'pentagon_defense': { width: 64, length: 64, height: 150, name: 'Defense Bunker', visualScale: 0.90, footprintTiles: 4, heightScale: 0.90, tier: 'foreground' },

  // --- JanaChumi Isometric Pack V1 Buildings & Objects ---
  'jana_building0': { width: 16, length: 16, height: 140, name: 'Glass Tower V1', visualScale: 0.90, footprintTiles: 1, heightScale: 1.1, tier: 'background' },
  'jana_building1': { width: 16, length: 16, height: 120, name: 'Office Tower V1', visualScale: 0.90, footprintTiles: 1, heightScale: 1.0, tier: 'midground' },
  'jana_building2': { width: 16, length: 16, height: 95, name: 'Apartment Block V1', visualScale: 0.85, footprintTiles: 1, heightScale: 0.9, tier: 'midground' },
  'jana_police': { width: 16, length: 16, height: 80, name: 'Metro Police Dept', visualScale: 0.85, footprintTiles: 1, heightScale: 0.85, tier: 'midground' },
  'jana_shop0': { width: 16, length: 16, height: 40, name: 'Corner Bakery', visualScale: 0.80, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'jana_shop1': { width: 16, length: 16, height: 45, name: 'Supermarket', visualScale: 0.80, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'jana_pink_house': { width: 16, length: 16, height: 35, name: 'Pink Villa', visualScale: 0.75, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'jana_purple_house': { width: 16, length: 16, height: 35, name: 'Suburban Cottage', visualScale: 0.75, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'jana_school': { width: 48, length: 48, height: 75, name: 'Central Academy', visualScale: 0.80, footprintTiles: 3, heightScale: 0.8, tier: 'foreground' },
  'jana_fountain': { width: 16, length: 16, height: 20, name: 'Park Fountain', visualScale: 0.85, footprintTiles: 1, heightScale: 0.5, tier: 'foreground' },

  // --- Kenney Isometric City Pack (static/tiles/kenny/PNG/) ---
  'kenney_tower_cyber': { width: 16, length: 16, height: 280, name: 'Kenney Cyber Spire', visualScale: 0.95, footprintTiles: 1, heightScale: 1.6, tier: 'background' },
  'kenney_tower_office': { width: 16, length: 16, height: 220, name: 'Kenney Office Tower', visualScale: 0.95, footprintTiles: 1, heightScale: 1.4, tier: 'background' },
  'kenney_tower_artdeco': { width: 16, length: 16, height: 240, name: 'Kenney Art Deco Spire', visualScale: 0.95, footprintTiles: 1, heightScale: 1.5, tier: 'background' },
  'kenney_building_block': { width: 16, length: 16, height: 120, name: 'Kenney Apartments', visualScale: 0.90, footprintTiles: 1, heightScale: 1.0, tier: 'midground' },
  'kenney_house_red': { width: 16, length: 16, height: 35, name: 'Suburban Red Cottage', visualScale: 0.80, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'kenney_house_beige': { width: 16, length: 16, height: 35, name: 'Suburban Beige Villa', visualScale: 0.80, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'kenney_shop_blue': { width: 16, length: 16, height: 45, name: 'Kenney Blue Shop', visualScale: 0.85, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'kenney_shop_green': { width: 16, length: 16, height: 45, name: 'Kenney Green Market', visualScale: 0.85, footprintTiles: 1, heightScale: 0.7, tier: 'foreground' },
  'kenney_hospital': { width: 48, length: 48, height: 75, name: 'Kenney Metro Hospital', visualScale: 0.85, footprintTiles: 3, heightScale: 0.8, tier: 'foreground' },
  'kenney_stadium': { width: 64, length: 64, height: 120, name: 'Kenney Sports Arena', visualScale: 0.90, footprintTiles: 4, heightScale: 0.9, tier: 'foreground' }
};

export interface CityTileData {
  ratioX: number;  // 0..1 position within a chunk
  ratioY: number;
  zone: string;    // "school" | "hospital" etc.
  size: string;    // "3x2" etc.
}
