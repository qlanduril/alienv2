export interface BuildingDef {
  width: number;   // footprint width (world units)
  length: number;  // footprint length (world units)
  height: number;  // collision height (altitude units)
  name: string;
  visualScale: number; // visual scale multiplier for rendering
  tier?: 'foreground' | 'midground' | 'background';
}

export const BUILDING_DEFS: Record<string, BuildingDef> = {
  // --- Foreground (Large Landmark Civic Buildings: 3x3 multi-tile footprint = 48x48) ---
  '1': { width: 48, length: 48, height: 45, name: 'Hospital', visualScale: 1.8, tier: 'foreground' },
  '2': { width: 48, length: 48, height: 40, name: 'Mall', visualScale: 1.8, tier: 'foreground' },
  '3': { width: 48, length: 48, height: 40, name: 'School', visualScale: 1.8, tier: 'foreground' },
  '4': { width: 48, length: 48, height: 40, name: 'Warehouse', visualScale: 1.8, tier: 'foreground' },


  // --- Single-Tile Low-Rises (1x1 tile footprint = 16x16) ---
  'b1': { width: 16, length: 16, height: 30, name: 'Low-rise Shop', visualScale: 1.2, tier: 'foreground' },
  'b2': { width: 16, length: 16, height: 35, name: 'Brownstone', visualScale: 1.2, tier: 'foreground' },

  // --- Midground (Medium High-Rises: 1x1 footprint = 16x16) ---
  'res_bronze': { width: 16, length: 16, height: 90, name: 'Bronze Penthouses', visualScale: 2.2, tier: 'midground' },
  'res_sky': { width: 16, length: 16, height: 95, name: 'Sky Gardens', visualScale: 2.2, tier: 'midground' },
  'b3': { width: 16, length: 16, height: 85, name: 'Mid-rise Apartments', visualScale: 2.0, tier: 'midground' },
  'b4': { width: 16, length: 16, height: 90, name: 'Mid-rise Office', visualScale: 2.0, tier: 'midground' },

  // --- Background (Skyscrapers: 1x1 footprint = 16x16) ---
  '5': { width: 16, length: 16, height: 180, name: 'Skyscraper', visualScale: 3.8, tier: 'background' },
  'sky_artdeco': { width: 16, length: 16, height: 200, name: 'Art Deco Titan', visualScale: 4.0, tier: 'background' },
  'sky_biotech': { width: 16, length: 16, height: 210, name: 'Biotech Helix', visualScale: 4.2, tier: 'background' },
  'sky_cyber': { width: 16, length: 16, height: 220, name: 'Cyber Spire', visualScale: 4.4, tier: 'background' }
};


export interface CityTileData {
  ratioX: number;  // 0..1 position within a chunk
  ratioY: number;
  zone: string;    // "school" | "hospital" etc.
  size: string;    // "3x2" etc.
}

