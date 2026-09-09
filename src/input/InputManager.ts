export class InputManager {
  private static keys: Record<string, boolean> = {};
  private static pointerDown: boolean = false;
  private static pointerSecondaryDown: boolean = false;
  private static mouseX: number = 0;
  private static mouseY: number = 0;
  private static screenWidth: number = window.innerWidth;
  private static screenHeight: number = window.innerHeight;

  public static init() {
    window.addEventListener('keydown', (e) => {
      if (e.code) this.keys[e.code] = true;
      if (e.key) {
        this.keys[e.key] = true;
        this.keys[e.key.toLowerCase()] = true;
      }
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code) || ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
    });
    window.addEventListener('keyup', (e) => {
      if (e.code) this.keys[e.code] = false;
      if (e.key) {
        this.keys[e.key] = false;
        this.keys[e.key.toLowerCase()] = false;
      }
    });
    
    window.addEventListener('pointerdown', (e) => {
      if (e.button === 2) {
        this.pointerSecondaryDown = true;
      } else {
        this.pointerDown = true;
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (e.button === 2) {
        this.pointerSecondaryDown = false;
      } else {
        this.pointerDown = false;
      }
    });

    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    
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

  public static isSecondaryPointerDown(): boolean {
    return this.pointerSecondaryDown;
  }

  // Returns Normalized Device Coordinates (NDC) for Raycasting
  public static getMouseNDC(): { x: number, y: number } {
    return {
      x: (this.mouseX / this.screenWidth) * 2 - 1,
      y: -(this.mouseY / this.screenHeight) * 2 + 1
    };
  }
}
