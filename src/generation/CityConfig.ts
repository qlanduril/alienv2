export type CityPresetName = 'metropolitan_ny' | 'retro_arcade';

export interface CityGeneratorHyperparameters {
  name: string;
  description: string;

  // 1. Land-Use Coverage (Total Map Area Budget)
  landUse: {
    waterRatio: number;          // Target ratio (0.0..1.0)
    roadRatio: number;           // Target ratio (0.0..1.0)
    negativeSpaceRatio: number;  // Target ratio (Parks, runways, parking, plazas)
    builtLotRatio: number;       // Target ratio (Building structures)
  };

  // 2. Building Height Hierarchy (Vertical Distribution)
  heightDistribution: {
    megaTitan: number;           // Supertall spires ratio (1x-2x per map)
    highRise: number;            // High-rise towers ratio
    midRise: number;             // Mid-rise offices ratio
    lowRise: number;             // 1-2 story shops, houses, warehouses ratio
  };

  // 3. Footprint Sizes
  footprintDistribution: {
    size1x1: number;             // 1x1 infill lots
    size2x2: number;             // 2x2 medium lots
    size3x3: number;             // 3x3 civic lots
    size4x4: number;             // 4x4 mega landmarks
  };

  // 4. District Density Targets (Occupancy caps per block)
  blockOccupancy: {
    downtownCore: number;        // Max occupancy cap (e.g. 0.80 for NY, 0.65 for Arcade)
    maxBuildingStreak: number;   // Max continuous building tiles before forcing an alley/plaza break
    civicLeisure: number;        // Occupancy cap for parks/sports/airfield
    residentialSuburbs: number;  // Occupancy cap for suburban houses
    harborIndustrial: number;    // Occupancy cap for docks/piers
  };

  // 5. Architectural Texture Palette Diversity
  paletteDistribution: {
    blueGlassSpire: number;      // Blue glass spires ratio cap
    whiteConcreteCivic: number;  // White concrete & modern civic ratio
    redBrickBrownstone: number;  // Red brick residential & brownstones ratio
    industrialGreyMetal: number; // Industrial grey metal & warehouses ratio
    accentColorSpire: number;    // Gold/copper/cyan Art Deco accent spires ratio
  };
}

/**
 * PRESET 1: Metropolitan NY (Extracted from NYC-ISONMETRIC.jpg)
 * Dense Gotham high-rise core with 6x6 grid, sandstone plazas, wall-to-wall towers with 4-tile monolith breaking alleys.
 */
export const PRESET_METROPOLITAN_NY: CityGeneratorHyperparameters = {
  name: 'Metropolitan NY',
  description: 'Dense Gotham high-rise grid based on NYC-ISONMETRIC.jpg',
  landUse: {
    waterRatio: 0.15,
    roadRatio: 0.20,
    negativeSpaceRatio: 0.22,
    builtLotRatio: 0.43,
  },
  heightDistribution: {
    megaTitan: 0.01,
    highRise: 0.25,
    midRise: 0.35,
    lowRise: 0.39,
  },
  footprintDistribution: {
    size1x1: 0.65,
    size2x2: 0.23,
    size3x3: 0.08,
    size4x4: 0.04,
  },
  blockOccupancy: {
    downtownCore: 0.80,
    maxBuildingStreak: 4,
    civicLeisure: 0.35,
    residentialSuburbs: 0.45,
    harborIndustrial: 0.30,
  },
  paletteDistribution: {
    blueGlassSpire: 0.25,
    whiteConcreteCivic: 0.25,
    redBrickBrownstone: 0.25,
    industrialGreyMetal: 0.15,
    accentColorSpire: 0.10,
  },
};

/**
 * PRESET 2: Retro Arcade City (Extracted from alinv2city.jpg)
 * Vibrant civic city with airport runways, central Mega-Titan + twin arenas, canal/docks, 30% green parks, 66% low-rise structures.
 */
export const PRESET_RETRO_ARCADE: CityGeneratorHyperparameters = {
  name: 'Retro Arcade City',
  description: 'Vibrant pixel-art city with airfield, central Mega-Titan, canals, and green parks based on alinv2city.jpg',
  landUse: {
    waterRatio: 0.18,
    roadRatio: 0.22,
    negativeSpaceRatio: 0.30,
    builtLotRatio: 0.30,
  },
  heightDistribution: {
    megaTitan: 0.01,
    highRise: 0.08,
    midRise: 0.25,
    lowRise: 0.66,
  },
  footprintDistribution: {
    size1x1: 0.50,
    size2x2: 0.30,
    size3x3: 0.12,
    size4x4: 0.08,
  },
  blockOccupancy: {
    downtownCore: 0.65,
    maxBuildingStreak: 3,
    civicLeisure: 0.25,
    residentialSuburbs: 0.35,
    harborIndustrial: 0.25,
  },
  paletteDistribution: {
    blueGlassSpire: 0.15,
    whiteConcreteCivic: 0.35,
    redBrickBrownstone: 0.25,
    industrialGreyMetal: 0.15,
    accentColorSpire: 0.10,
  },
};

export const DEFAULT_CITY_HYPERPARAMETERS = PRESET_RETRO_ARCADE;

export function getCityPreset(preset: CityPresetName = 'retro_arcade'): CityGeneratorHyperparameters {
  return preset === 'metropolitan_ny' ? PRESET_METROPOLITAN_NY : PRESET_RETRO_ARCADE;
}
