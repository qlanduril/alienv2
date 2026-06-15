export type Entity = number;

export class ECS {
  private static nextEntityId: number = 1;
  public static entities: Set<Entity> = new Set();
  public static systems: ((delta: number) => void)[] = [];

  public static createEntity(): Entity {
    const id = this.nextEntityId++;
    this.entities.add(id);
    return id;
  }

  public static destroyEntity(entity: Entity): void {
    this.entities.delete(entity);
    // Note: Component data cleanup should happen here or via event listeners
  }

  public static addSystem(system: (delta: number) => void): void {
    this.systems.push(system);
  }

  public static tick(delta: number): void {
    for (const system of this.systems) {
      system(delta);
    }
  }
}
