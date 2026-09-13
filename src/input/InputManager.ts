export class InputManager {
  private static keys: Record<string, boolean> = {};
  private static pointerDown: boolean = false;
  private static pointerSecondaryDown: boolean = false;
  private static mouseX: number = 0;
  private static mouseY: number = 0;
  private static screenWidth: number = window.innerWidth;
  private static screenHeight: number = window.innerHeight;

  // Virtual Joystick & Touch state
  public static joystickVector: { x: number; y: number } = { x: 0, y: 0 };
  public static isMobile: boolean = false;
  private static virtualFirePrimary: boolean = false;
  private static virtualFireSecondary: boolean = false;

  public static setVirtualJoystick(x: number, y: number): void {
    this.joystickVector.x = x;
    this.joystickVector.y = y;
  }

  public static setVirtualFirePrimary(down: boolean): void {
    this.virtualFirePrimary = down;
  }

  public static setVirtualFireSecondary(down: boolean): void {
    this.virtualFireSecondary = down;
  }

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
    
    const updatePointerPos = (e: MouseEvent | PointerEvent) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    };
    window.addEventListener('pointermove', updatePointerPos, { passive: true });
    window.addEventListener('mousemove', updatePointerPos, { passive: true });

    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    });
  }

  public static isKeyDown(code: string): boolean {
    return !!this.keys[code];
  }

  public static isPointerDown(): boolean {
    return this.pointerDown || this.virtualFirePrimary;
  }

  public static isSecondaryPointerDown(): boolean {
    return this.pointerSecondaryDown || this.virtualFireSecondary;
  }

  // Returns Normalized Device Coordinates (NDC) for Raycasting
  public static getMouseNDC(): { x: number, y: number } {
    return {
      x: (this.mouseX / this.screenWidth) * 2 - 1,
      y: -(this.mouseY / this.screenHeight) * 2 + 1
    };
  }
}
