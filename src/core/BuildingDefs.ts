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
  'b3': { width: 16, length: 16, height: 65, name: 'Mid-rise Apartments', visualScale: 0.85, footprintTiles: 1, heightScale: 0.85, tier: 'midground' },
  'b4': { width: 16, length: 16, height: 70, name: 'Mid-rise Office', visualScale: 0.90, footprintTiles: 1, heightScale: 0.90, tier: 'midground' },
  'res_bronze': { width: 16, length: 16, height: 75, name: 'Bronze Penthouses', visualScale: 0.90, footprintTiles: 1, heightScale: 0.90, tier: 'midground' },
  'res_sky': { width: 16, length: 16, height: 80, name: 'Sky Gardens', visualScale: 0.95, footprintTiles: 1, heightScale: 0.95, tier: 'midground' },

  // --- Background Skyscrapers & High-Rises (2D Sprites across city for 60 FPS performance) ---
  '5': { width: 28, length: 28, height: 110, name: 'Skyscraper', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background' },
  'sky_artdeco': { width: 28, length: 28, height: 120, name: 'Art Deco Titan', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background' },
  'sky_biotech': { width: 28, length: 28, height: 125, name: 'Biotech Helix', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background' },
  'sky_cyber': { width: 28, length: 28, height: 135, name: 'Cyber Spire', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background' },

  // --- Tier 4: Mega-Landmarks (Each 3D Model used ONCE in the city) ---
  'mega_titan': { width: 64, length: 64, height: 180, name: 'Apex Mega-Tower', visualScale: 1.0, footprintTiles: 4, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'skyscraper_demolition' },
  'mega_stadium': { width: 64, length: 48, height: 55, name: 'Metropolitan Arena', visualScale: 0.85, footprintTiles: 4, heightScale: 0.85, tier: 'foreground' },
  'spaceship_hq': { width: 64, length: 64, height: 160, name: 'Alien Spaceship HQ', visualScale: 1.0, footprintTiles: 4, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'spaceship_hq' },
  'cyber_reactor': { width: 48, length: 48, height: 140, name: 'Cyber Quantum Reactor', visualScale: 1.0, footprintTiles: 3, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'cyber_reactor' },
  'financial_tower': { width: 48, length: 48, height: 160, name: 'Metro Financial Tower', visualScale: 1.0, footprintTiles: 3, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'financial_tower' },
  'statue_liberty': { width: 48, length: 48, height: 135, name: 'Statue of Liberty', visualScale: 0.85, footprintTiles: 3, heightScale: 0.85, tier: 'foreground' },
  'pentagon_defense': { width: 64, length: 64, height: 45, name: 'Defense Bunker', visualScale: 0.85, footprintTiles: 4, heightScale: 0.85, tier: 'foreground' },
  'hospital_civic': { width: 48, length: 48, height: 50, name: 'Civic Hospital', visualScale: 0.80, footprintTiles: 3, heightScale: 0.80, tier: 'foreground' },
  'mall_shopping': { width: 48, length: 48, height: 45, name: 'Shopping Plaza', visualScale: 0.80, footprintTiles: 3, heightScale: 0.80, tier: 'foreground' },
  'school_civic': { width: 48, length: 48, height: 45, name: 'Civic Academy', visualScale: 0.80, footprintTiles: 3, heightScale: 0.80, tier: 'foreground' },
};

export interface CityTileData {
  ratioX: number;  // 0..1 position within a chunk
  ratioY: number;
  zone: string;    // "school" | "hospital" etc.
  size: string;    // "3x2" etc.
}
