// Decoupled HTML UI overlay
export class UIOverlay {
  private static scoreElement: HTMLElement;
  private static flashOverlay: HTMLElement;
  
  public static init() {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '20px';
    container.style.left = '20px';
    container.style.color = 'white';
    container.style.fontFamily = 'monospace';
    container.style.fontSize = '24px';
    container.style.pointerEvents = 'none'; // Don't block raycasting
    
    this.scoreElement = document.createElement('div');
    this.scoreElement.innerText = 'DESTRUCTION: 0%';
    
    container.appendChild(this.scoreElement);
    document.body.appendChild(container);

    this.flashOverlay = document.createElement('div');
    this.flashOverlay.style.position = 'fixed';
    this.flashOverlay.style.top = '0';
    this.flashOverlay.style.left = '0';
    this.flashOverlay.style.width = '100vw';
    this.flashOverlay.style.height = '100vh';
    this.flashOverlay.style.backgroundColor = 'white';
    this.flashOverlay.style.opacity = '0';
    this.flashOverlay.style.pointerEvents = 'none';
    this.flashOverlay.style.transition = 'opacity 0.08s ease-out';
    this.flashOverlay.style.zIndex = '9999';
    document.body.appendChild(this.flashOverlay);
  }

  public static triggerFlash() {
    if (!this.flashOverlay) return;
    
    // Remove transition for instant flash
    this.flashOverlay.style.transition = 'none';
    this.flashOverlay.style.opacity = '0.5';
    
    // Force reflow
    void this.flashOverlay.offsetWidth;
    
    // Restore transition and fade out
    this.flashOverlay.style.transition = 'opacity 0.1s ease-out';
    this.flashOverlay.style.opacity = '0';
  }

  public static updateScore(percent: number) {
    if (this.scoreElement) {
      this.scoreElement.innerText = `DESTRUCTION: ${Math.floor(percent)}%`;
    }
  }
}
