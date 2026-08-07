import { ECS, Entity } from '../core/ECS';
import { BUILDING_DEFS, BuildingDef } from '../core/BuildingDefs';
import { BUILDING_ZONES } from '../core/ZoneDefs';
import {
  PositionComponent,
  HealthComponent,
  ZonalHealthComponent,
  CollisionComponent,
  RenderStateComponent,
  PlayerTagComponent,
  TargetComponent
} from '../core/Components';
import { LotManager } from '../rendering/TileSystem/LotManager';
import { TileMap } from '../rendering/TileSystem/TileMap';
import { BuildingRenderer } from '../rendering/BuildingRenderer';
import { HitZoneManager } from '../rendering/HitZoneManager';
import { CityGenerator } from './CityGenerator';
import { GroundRenderer } from '../rendering/GroundRenderer';
import { DestructionSystem } from './DestructionSystem';

export interface ShowcaseBuildingInfo {
  entity: Entity;
  typeKey: string;
  def: BuildingDef;
  worldX: number;
  worldY: number;
}

export class ShowcaseManager {
  public static isShowcaseMode: boolean = false;
  private static showcaseEntities: ShowcaseBuildingInfo[] = [];

  public static readonly SHOWCASE_KEYS: string[] = [
    '1', '2', '3', '4',
    'b1', 'b2', 'b3', 'b4',
    'res_bronze', 'res_sky',
    '5', 'sky_artdeco', 'sky_biotech', 'sky_cyber',
    'mega_titan', 'spaceship_hq', 'statue_liberty', 'pentagon_defense'
  ];

  public static toggleMode(): void {
    this.setMode(this.isShowcaseMode ? 'city' : 'showcase');
  }

  public static setMode(mode: 'city' | 'showcase'): void {
    if ((mode === 'showcase') === this.isShowcaseMode) return;

    this.isShowcaseMode = (mode === 'showcase');
    this.clearWorld();

    if (this.isShowcaseMode) {
      this.generateShowcase();
    } else {
      CityGenerator.generateCity();
      GroundRenderer.finalizeMap();
    }
  }

  public static clearWorld(): void {
    // 1. Remove all building entities from ECS & Component Stores
    const toRemove: Entity[] = [];
    for (const entity of ECS.entities) {
      if (!PlayerTagComponent.has(entity)) {
        toRemove.push(entity);
      }
    }

    for (const entity of toRemove) {
      ECS.destroyEntity(entity);
      PositionComponent.delete(entity);
      HealthComponent.delete(entity);
      ZonalHealthComponent.delete(entity);
      CollisionComponent.delete(entity);
      TargetComponent.delete(entity);
      RenderStateComponent.delete(entity);
    }

    // 2. Clear Renderers & Maps
    BuildingRenderer.clearAll();
    HitZoneManager.clearAll();
    TileMap.init();
    this.showcaseEntities = [];
  }

  public static generateShowcase(): void {
    const keys = this.SHOWCASE_KEYS;
    const itemsPerRow = 7;
    const spacingX = 90; // Wide horizontal spacing for isometric view
    const spacingY = 110; // Deep vertical spacing between rows

    const startX = -((itemsPerRow - 1) * spacingX) / 2; // Center horizontally
    const startY = -40; // Ground Y start

    for (let i = 0; i < keys.length; i++) {
      const typeKey = keys[i];
      const row = Math.floor(i / itemsPerRow);
      const col = i % itemsPerRow;

      const worldX = startX + col * spacingX;
      const worldY = startY + row * spacingY;

      const entity = ECS.createEntity();
      const def = BUILDING_DEFS[typeKey] || BUILDING_DEFS['3'];

      PositionComponent.set(entity, {
        worldX,
        worldY,
        worldZ: 0.05
      });

      HealthComponent.set(entity, {
        currentHP: 100,
        maxHP: 100,
        state: 0
      });

      const zoneMap = new Map();
      const zonesDef = BUILDING_ZONES[typeKey] || BUILDING_ZONES['3'];
      for (const zd of zonesDef) {
        zoneMap.set(zd.id, {
          id: zd.id,
          level: 0,
          hp: 100,
          maxHp: 100
        });
      }

      ZonalHealthComponent.set(entity, {
        zones: zoneMap,
        totalHp: 100 * zonesDef.length,
        maxTotalHp: 100 * zonesDef.length,
        globalDamageLevel: 0
      });

      CollisionComponent.set(entity, {
        width: def.width * def.visualScale,
        length: def.length * def.visualScale,
        height: def.height,
        active: true
      });

      RenderStateComponent.set(entity, {
        meshId: `building_${entity}`,
        texturePrefix: `building_${typeKey}_stage_`,
        currentFrame: 0,
        visible: true,
        opacity: 1
      });

      LotManager.calculateAndRegisterLot(entity, worldX, worldY, typeKey, 'showcase');

      this.showcaseEntities.push({
        entity,
        typeKey,
        def,
        worldX,
        worldY
      });
    }

    GroundRenderer.finalizeMap();

    // Reposition Player UFO in front of showcase
    for (const entity of ECS.entities) {
      if (PlayerTagComponent.has(entity)) {
        const pos = PositionComponent.get(entity);
        if (pos) {
          pos.worldX = 0;
          pos.worldY = -120; // South of row 1
          pos.worldZ = 10;   // Flight altitude
        }
      }
    }

    console.log(`Showcase generated with ${this.showcaseEntities.length} unique building definitions.`);
  }

  public static resetAllHP(): void {
    for (const info of this.showcaseEntities) {
      const health = HealthComponent.get(info.entity);
      const zonal = ZonalHealthComponent.get(info.entity);
      const render = RenderStateComponent.get(info.entity);

      if (health) {
        health.currentHP = health.maxHP;
        health.state = 0;
      }
      if (zonal) {
        zonal.totalHp = zonal.maxTotalHp;
        zonal.globalDamageLevel = 0 as any;
        for (const z of zonal.zones.values()) {
          z.hp = z.maxHp;
          z.level = 0 as any;
        }
      }
      if (render) {
        render.currentFrame = 0;
      }
    }
  }

  public static damageAll(percent: number = 25): void {
    for (const info of this.showcaseEntities) {
      const zonal = ZonalHealthComponent.get(info.entity);
      if (zonal) {
        for (const zone of zonal.zones.values()) {
          const dmgAmount = (zone.maxHp * percent) / 100;
          DestructionSystem.applyZonalDamage(info.entity, zone.id, dmgAmount, { x: 0.5, y: 0.5 });
        }
      }
    }
  }

  public static getShowcaseBuildings(): ShowcaseBuildingInfo[] {
    return this.showcaseEntities;
  }
}
