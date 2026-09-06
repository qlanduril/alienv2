export interface BuildingDef {
  width: number;   // footprint width (world units)
  length: number;  // footprint length (world units)
  height: number;  // collision height (altitude units)
  name: string;
  visualScale: number; // visual scale multiplier for rendering
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
  'b3': { width: 16, length: 16, height: 85, name: 'Mid-rise Apartments', visualScale: 0.9, footprintTiles: 1, heightScale: 0.9, tier: 'midground' },
  'b4': { width: 16, length: 16, height: 90, name: 'Mid-rise Office', visualScale: 1.0, footprintTiles: 1, heightScale: 1.0, tier: 'midground' },
  'res_bronze': { width: 16, length: 16, height: 110, name: 'Bronze Penthouses', visualScale: 1.1, footprintTiles: 1, heightScale: 1.1, tier: 'midground' },
  'res_sky': { width: 16, length: 16, height: 115, name: 'Sky Gardens', visualScale: 1.2, footprintTiles: 1, heightScale: 1.2, tier: 'midground' },

  // --- Background Skyscrapers (1x1 footprint) ---
  '5': { width: 16, length: 16, height: 220, name: 'Skyscraper', visualScale: 1.4, footprintTiles: 1, heightScale: 1.4, tier: 'background' },
  'sky_artdeco': { width: 16, length: 16, height: 260, name: 'Art Deco Titan', visualScale: 1.5, footprintTiles: 1, heightScale: 1.5, tier: 'background' },
  'sky_biotech': { width: 16, length: 16, height: 280, name: 'Biotech Helix', visualScale: 1.6, footprintTiles: 1, heightScale: 1.6, tier: 'background' },
  'sky_cyber': { width: 16, length: 16, height: 320, name: 'Cyber Spire', visualScale: 1.7, footprintTiles: 1, heightScale: 1.7, tier: 'background' },

  // --- Tier 4: Mega-Landmarks & Special Buildings ---
  'mega_titan': { width: 64, length: 64, height: 800, name: 'Apex Mega-Tower', visualScale: 0.85, footprintTiles: 4, heightScale: 0.85, tier: 'background', is3D: true, gltfKey: 'skyscraper_demolition' },
  'mega_stadium': { width: 64, length: 48, height: 120, name: 'Metropolitan Arena', visualScale: 1.4, footprintTiles: 4, heightScale: 1.4, tier: 'foreground' },
  'spaceship_hq': { width: 64, length: 64, height: 400, name: 'Alien Spaceship HQ', visualScale: 2.0, footprintTiles: 4, heightScale: 2.0, tier: 'background' },
  'statue_liberty': { width: 48, length: 48, height: 350, name: 'Statue of Liberty', visualScale: 1.5, footprintTiles: 3, heightScale: 1.5, tier: 'foreground' },
  'pentagon_defense': { width: 64, length: 64, height: 150, name: 'Defense Bunker', visualScale: 2.0, footprintTiles: 4, heightScale: 2.0, tier: 'foreground' }
};

export interface CityTileData {
  ratioX: number;  // 0..1 position within a chunk
  ratioY: number;
  zone: string;    // "school" | "hospital" etc.
  size: string;    // "3x2" etc.
}
