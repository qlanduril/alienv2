import { Entity } from './ECS';

export interface Position {
  worldX: number;
  worldY: number;
  worldZ: number;
}

export interface Health {
  currentHP: number;
  maxHP: number;
  state: number; // 0 to maxFrame
}

export interface Collision {
  width: number;
  length: number;
  height: number;
  active: boolean;
}

export interface Target {
  isHighValue: boolean;
}

export interface Weapon {
  currentSelected: string;
  heatLevel: number;
  fireRate: number;
}

export interface PlayerTag {}

// Replaces the old PixiJS-coupled Render component
export interface RenderState {
  meshId: string;
  texturePrefix: string;
  currentFrame: number;
  visible: boolean;
  opacity: number;
}

// Global Component Stores
export const PositionComponent = new Map<Entity, Position>();
export const HealthComponent = new Map<Entity, Health>();
export const CollisionComponent = new Map<Entity, Collision>();
export const TargetComponent = new Map<Entity, Target>();
export const WeaponComponent = new Map<Entity, Weapon>();
export const PlayerTagComponent = new Set<Entity>();
export const RenderStateComponent = new Map<Entity, RenderState>();
