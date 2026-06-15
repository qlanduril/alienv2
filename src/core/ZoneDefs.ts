export enum DamageZone {
  TOP_LEFT     = 'TOP_LEFT',
  TOP_CENTER   = 'TOP_CENTER',
  TOP_RIGHT    = 'TOP_RIGHT',
  MID_LEFT     = 'MID_LEFT',
  CENTER       = 'CENTER',
  MID_RIGHT    = 'MID_RIGHT',
  BASE_LEFT    = 'BASE_LEFT',
  BASE_CENTER  = 'BASE_CENTER',
  BASE_RIGHT   = 'BASE_RIGHT',
}

export interface ZoneDef {
  id: DamageZone;
  u0: number; v0: number; // top-left UV corner
  u1: number; v1: number; // bottom-right UV corner
  hpWeight: number;       // damage multiplier for structural damage calc
  structureWeight: number; // how much this zone collapse contributes to total building collapse
}

// A standard 3x3 grid definition
const createStandard3x3Grid = (): ZoneDef[] => [
  { id: DamageZone.TOP_LEFT,    u0: 0.0, v0: 0.0, u1: 0.33, v1: 0.33, hpWeight: 1.0, structureWeight: 0.05 },
  { id: DamageZone.TOP_CENTER,  u0: 0.33, v0: 0.0, u1: 0.66, v1: 0.33, hpWeight: 1.5, structureWeight: 0.15 },
  { id: DamageZone.TOP_RIGHT,   u0: 0.66, v0: 0.0, u1: 1.0, v1: 0.33, hpWeight: 1.0, structureWeight: 0.05 },
  { id: DamageZone.MID_LEFT,    u0: 0.0, v0: 0.33, u1: 0.33, v1: 0.66, hpWeight: 1.2, structureWeight: 0.10 },
  { id: DamageZone.CENTER,      u0: 0.33, v0: 0.33, u1: 0.66, v1: 0.66, hpWeight: 2.0, structureWeight: 0.30 }, // critical
  { id: DamageZone.MID_RIGHT,   u0: 0.66, v0: 0.33, u1: 1.0, v1: 0.66, hpWeight: 1.2, structureWeight: 0.10 },
  { id: DamageZone.BASE_LEFT,   u0: 0.0, v0: 0.66, u1: 0.33, v1: 1.0, hpWeight: 1.5, structureWeight: 0.05 },
  { id: DamageZone.BASE_CENTER, u0: 0.33, v0: 0.66, u1: 0.66, v1: 1.0, hpWeight: 2.5, structureWeight: 0.15 }, // base supports
  { id: DamageZone.BASE_RIGHT,  u0: 0.66, v0: 0.66, u1: 1.0, v1: 1.0, hpWeight: 1.5, structureWeight: 0.05 },
];

export const BUILDING_ZONES: Record<string, ZoneDef[]> = {
  '1': createStandard3x3Grid(), // Hospital
  '2': createStandard3x3Grid(), // Mall
  '3': createStandard3x3Grid(), // School
  '4': createStandard3x3Grid(), // Warehouse
};
