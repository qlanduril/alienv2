import { ECS } from '../core/ECS';
import { BUILDING_DEFS } from '../core/BuildingDefs';
import { PositionComponent, HealthComponent, ZonalHealthComponent, CollisionComponent, RenderStateComponent } from '../core/Components';
import { AssetLoader } from '../assets/AssetLoader';
import { BUILDING_ZONES } from '../core/ZoneDefs';

export class CityGenerator {
  public static generateCity() {
    const groundTex = AssetLoader.getTexture('ground');
    const repeat = groundTex ? groundTex.repeat.x : 15;
    
    // Dynamic scale matching the size of one ground tile repeat
    const mapWidth = 1000 / repeat;
    const mapHeight = 1000 / repeat;
    
    const data = AssetLoader.mapData;
    
    if (!data || data.length === 0) {
      console.warn("No map data found, skipping city generation.");
      return;
    }

    let count = 0;
    for (let col = 0; col < repeat; col++) {
      for (let row = 0; row < repeat; row++) {
        // Calculate center of this tile in world space
        // The ground is 1000x1000, centered at (0, 0), so it goes from -500 to 500.
        const tileCenterX = -500 + (col + 0.5) * mapWidth;
        const tileCenterZ = -500 + (row + 0.5) * mapHeight;

        for (const entry of data) {
          // Find building def based on zone. Example: "school" -> '3'
          let typeKey = '3'; // Default to school
          if (entry.zone === 'hospital') typeKey = '1';
          else if (entry.zone === 'mall') typeKey = '2';
          else if (entry.zone === 'warehouse') typeKey = '4';

          const def = BUILDING_DEFS[typeKey];
          const entity = ECS.createEntity();
          
          // Calculate world coordinates from ratios within this tile.
          const worldX = tileCenterX + (entry.ratioX * mapWidth) - (mapWidth / 2);
          const worldZ = tileCenterZ + (entry.ratioY * mapHeight) - (mapHeight / 2);
          
          PositionComponent.set(entity, {
            worldX: worldX,
            worldY: worldZ, // depth (Three.js Z)
            worldZ: 0 // altitude (Three.js Y)
          });
          
          HealthComponent.set(entity, {
            currentHP: 100,
            maxHP: 100,
            state: 0
          });

          // Initialize Zonal Health
          const zoneMap = new Map();
          const zonesDef = BUILDING_DEFS[typeKey] ? BUILDING_ZONES[typeKey] : BUILDING_ZONES['3'];
          for (const zd of zonesDef) {
            zoneMap.set(zd.id, {
              id: zd.id,
              level: 0, // PRISTINE
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
            width: def.width,
            length: def.length,
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
          
          count++;
        }
      }
    }
    
    console.log(`Generated ${count} buildings from map_data.json`);
  }
}
