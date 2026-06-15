export interface BuildingDef {
  width: number;   // tile footprint X
  length: number;  // tile footprint Y
  height: number;  // collision height (altitude units)
  name: string;
}

export const BUILDING_DEFS: Record<string, BuildingDef> = {
  '1': { width: 2, length: 2, height: 2, name: 'Hospital' },
  '2': { width: 4, length: 4, height: 1, name: 'Mall' },
  '3': { width: 3, length: 2, height: 1, name: 'School' },
  '4': { width: 4, length: 2, height: 1, name: 'Warehouse' }
};

export interface CityTileData {
  ratioX: number;  // 0..1 position within a chunk
  ratioY: number;
  zone: string;    // "school" | "hospital"
  size: string;    // "3x2" etc.
}
