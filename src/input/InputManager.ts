export class InputManager {
  private static keys: Record<string, boolean> = {};
  private static pointerDown: boolean = false;
  private static mouseX: number = 0;
  private static mouseY: number = 0;
  private static screenWidth: number = window.innerWidth;
  private static screenHeight: number = window.innerHeight;

  public static init() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
    
    window.addEventListener('pointerdown', () => this.pointerDown = true);
    window.addEventListener('pointerup', () => this.pointerDown = false);
    
    window.addEventListener('pointermove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    });
  }

  public static isKeyDown(code: string): boolean {
    return !!this.keys[code];
  }

  public static isPointerDown(): boolean {
    return this.pointerDown;
  }

  // Returns Normalized Device Coordinates (NDC) for Raycasting
  public static getMouseNDC(): { x: number, y: number } {
    return {
      x: (this.mouseX / this.screenWidth) * 2 - 1,
      y: -(this.mouseY / this.screenHeight) * 2 + 1
    };
  }
}
