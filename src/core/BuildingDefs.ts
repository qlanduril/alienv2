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
  maxHp?: number; // Total health points scaled by footprint and height
}

export const BUILDING_DEFS: Record<string, BuildingDef> = {
  // --- Foreground (Large Landmark Civic Buildings: 3x3 multi-tile footprint = 48x48) ---
  '1': { width: 48, length: 48, height: 45, name: 'Hospital', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground', maxHp: 260 },
  '2': { width: 48, length: 48, height: 40, name: 'Mall', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground', maxHp: 250 },
  '3': { width: 48, length: 48, height: 40, name: 'School', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground', maxHp: 250 },
  '4': { width: 48, length: 48, height: 40, name: 'Warehouse', visualScale: 0.75, footprintTiles: 3, heightScale: 0.75, tier: 'foreground', maxHp: 240 },

  // --- Foreground Low-Rises (South Borders: 1x1 footprint) ---
  // Little buildings destroyable in 2–3 shots (at 25 dmg per shot)
  'b1': { width: 16, length: 16, height: 30, name: 'Low-rise Shop', visualScale: 0.7, footprintTiles: 1, heightScale: 0.7, tier: 'foreground', maxHp: 60 },
  'b2': { width: 16, length: 16, height: 35, name: 'Brownstone', visualScale: 0.75, footprintTiles: 1, heightScale: 0.75, tier: 'foreground', maxHp: 75 },

  // --- Midground Urban Blockers (1x1 footprint) ---
  'b3': { width: 16, length: 16, height: 65, name: 'Mid-rise Apartments', visualScale: 0.85, footprintTiles: 1, heightScale: 0.85, tier: 'midground', maxHp: 110 },
  'b4': { width: 16, length: 16, height: 70, name: 'Mid-rise Office', visualScale: 0.90, footprintTiles: 1, heightScale: 0.90, tier: 'midground', maxHp: 125 },
  'res_bronze': { width: 16, length: 16, height: 75, name: 'Bronze Penthouses', visualScale: 0.90, footprintTiles: 1, heightScale: 0.90, tier: 'midground', maxHp: 140 },
  'res_sky': { width: 16, length: 16, height: 80, name: 'Sky Gardens', visualScale: 0.95, footprintTiles: 1, heightScale: 0.95, tier: 'midground', maxHp: 150 },

  // --- Background Skyscrapers & High-Rises (2D Sprites across city for 60 FPS performance) ---
  '5': { width: 28, length: 28, height: 110, name: 'Skyscraper', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background', maxHp: 200 },
  'sky_artdeco': { width: 28, length: 28, height: 120, name: 'Art Deco Titan', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background', maxHp: 220 },
  'sky_biotech': { width: 28, length: 28, height: 125, name: 'Biotech Helix', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background', maxHp: 230 },
  'sky_cyber': { width: 28, length: 28, height: 135, name: 'Cyber Spire', visualScale: 0.85, footprintTiles: 2, heightScale: 1.0, tier: 'background', maxHp: 250 },

  // --- Tier 4: Mega-Landmarks (Each 3D Model used ONCE in the city) ---
  'mega_titan': { width: 64, length: 64, height: 180, name: 'Apex Mega-Tower', visualScale: 1.0, footprintTiles: 4, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'skyscraper_demolition', maxHp: 500 },
  'mega_stadium': { width: 64, length: 48, height: 55, name: 'Metropolitan Arena', visualScale: 0.85, footprintTiles: 4, heightScale: 0.85, tier: 'foreground', maxHp: 360 },
  'spaceship_hq': { width: 64, length: 64, height: 160, name: 'Alien Spaceship HQ', visualScale: 1.0, footprintTiles: 4, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'spaceship_hq', maxHp: 480 },
  'cyber_reactor': { width: 48, length: 48, height: 140, name: 'Cyber Quantum Reactor', visualScale: 1.0, footprintTiles: 3, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'cyber_reactor', maxHp: 350 },
  'financial_tower': { width: 48, length: 48, height: 160, name: 'Metro Financial Tower', visualScale: 1.0, footprintTiles: 3, heightScale: 1.0, tier: 'background', is3D: true, gltfKey: 'financial_tower', maxHp: 380 },
  'statue_liberty': { width: 48, length: 48, height: 135, name: 'Statue of Liberty', visualScale: 0.85, footprintTiles: 3, heightScale: 0.85, tier: 'foreground', maxHp: 320 },
  'pentagon_defense': { width: 64, length: 64, height: 45, name: 'Defense Bunker', visualScale: 0.85, footprintTiles: 4, heightScale: 0.85, tier: 'foreground', maxHp: 350 },
  'hospital_civic': { width: 48, length: 48, height: 50, name: 'Civic Hospital', visualScale: 0.80, footprintTiles: 3, heightScale: 0.80, tier: 'foreground', maxHp: 275 },
  'mall_shopping': { width: 48, length: 48, height: 45, name: 'Shopping Plaza', visualScale: 0.80, footprintTiles: 3, heightScale: 0.80, tier: 'foreground', maxHp: 260 },
  'school_civic': { width: 48, length: 48, height: 45, name: 'Civic Academy', visualScale: 0.80, footprintTiles: 3, heightScale: 0.80, tier: 'foreground', maxHp: 260 },
};

/**
 * Derives a building's max total HP based on explicit definition or footprint/height scaling.
 */
export function getBuildingMaxHP(def: BuildingDef): number {
  if (def.maxHp !== undefined && def.maxHp > 0) {
    return def.maxHp;
  }

  const tiles = def.footprintTiles ?? Math.max(1, Math.round(Math.max(def.width, def.length) / 16));
  const h = def.height ?? 40;

  let baseHp = 35;
  let heightFactor = 1.0;

  if (tiles === 1) {
    baseHp = 25;
    heightFactor = 1.2;
  } else if (tiles === 2) {
    baseHp = 90;
    heightFactor = 1.0;
  } else if (tiles === 3) {
    baseHp = 160;
    heightFactor = 1.2;
  } else {
    baseHp = 240;
    heightFactor = 1.4;
  }

  const rawHp = baseHp + h * heightFactor;
  return Math.max(25, Math.round(rawHp / 5) * 5);
}

export interface CityTileData {
  ratioX: number;  // 0..1 position within a chunk
  ratioY: number;
  zone: string;    // "school" | "hospital" etc.
  size: string;    // "3x2" etc.
}
