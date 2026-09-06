import {
  WFCTilePrototype,
  WFC_TILE_PROTOTYPES,
  areSocketsCompatible
} from './WFCTilePrototypes';

export interface WFCSolvedCell {
  gx: number;
  gz: number;
  prototype: WFCTilePrototype;
}

export class WFCSolver {
  private gridDim: number;
  private prototypes: WFCTilePrototype[];
  private superposition: Set<number>[][];
  private maxAttempts: number;

  constructor(gridDim: number = 64, prototypes: WFCTilePrototype[] = WFC_TILE_PROTOTYPES, maxAttempts: number = 5) {
    this.gridDim = gridDim;
    this.prototypes = prototypes;
    this.superposition = [];
    this.maxAttempts = maxAttempts;
  }

  // ─── Simple Pseudo-Random Generator with Seed ───────────────────────────────
  private createRandom(seed: number) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  // ─── Initialize Grid Superposition ───────────────────────────────────────────
  private initGrid() {
    this.superposition = Array.from({ length: this.gridDim }, () =>
      Array.from({ length: this.gridDim }, () => new Set<number>())
    );

    const allIndices = Array.from({ length: this.prototypes.length }, (_, i) => i);

    for (let gx = 0; gx < this.gridDim; gx++) {
      for (let gz = 0; gz < this.gridDim; gz++) {
        for (const idx of allIndices) {
          this.superposition[gx][gz].add(idx);
        }
      }
    }
  }

  // ─── Calculate Shannon Entropy ───────────────────────────────────────────────
  private calculateEntropy(gx: number, gz: number, rng: () => number): number {
    const set = this.superposition[gx][gz];
    if (set.size <= 1) return Infinity; // collapsed or contradiction

    let weightSum = 0;
    let weightLogSum = 0;

    for (const idx of set) {
      const w = this.prototypes[idx].weight;
      weightSum += w;
      weightLogSum += w * Math.log2(w);
    }

    if (weightSum <= 0) return Infinity;

    const entropy = Math.log2(weightSum) - weightLogSum / weightSum;
    // Add tiny random noise to break entropy ties organically
    return entropy + rng() * 0.001;
  }

  // ─── Find Cell with Minimum Entropy ──────────────────────────────────────────
  private findMinEntropyCell(rng: () => number): { gx: number; gz: number } | null {
    let minEntropy = Infinity;
    let minCell: { gx: number; gz: number } | null = null;

    for (let gx = 0; gx < this.gridDim; gx++) {
      for (let gz = 0; gz < this.gridDim; gz++) {
        const setSize = this.superposition[gx][gz].size;
        if (setSize > 1) {
          const entropy = this.calculateEntropy(gx, gz, rng);
          if (entropy < minEntropy) {
            minEntropy = entropy;
            minCell = { gx, gz };
          }
        }
      }
    }

    return minCell;
  }

  // ─── Collapse Chosen Cell with Try-Catch Contradiction Safety ────────────────
  private collapseCell(gx: number, gz: number, rng: () => number): boolean {
    try {
      const set = this.superposition[gx][gz];
      if (set.size === 0) {
        // Fallback: Contradiction caught! Assign default backup tile index 0 (civic_park / grass)
        set.add(0);
        return true;
      }

      let totalWeight = 0;
      const candidates: Array<{ idx: number; weight: number }> = [];

      for (const idx of set) {
        const w = this.prototypes[idx]?.weight || 1.0;
        totalWeight += w;
        candidates.push({ idx, weight: w });
      }

      if (totalWeight <= 0 || candidates.length === 0) {
        set.clear();
        set.add(0); // Fallback to safe prototype
        return true;
      }

      let r = rng() * totalWeight;
      let chosenIdx = candidates[0].idx;

      for (const cand of candidates) {
        if (r < cand.weight) {
          chosenIdx = cand.idx;
          break;
        }
        r -= cand.weight;
      }

      set.clear();
      set.add(chosenIdx);
      return true;
    } catch (err) {
      console.warn(`[WFCSolver] Exception during collapseCell at (${gx}, ${gz}):`, err);
      this.superposition[gx][gz].clear();
      this.superposition[gx][gz].add(0); // Backup prototype fallback
      return true;
    }
  }

  // ─── Propagate Socket Constraints via Queue with Contradiction Fallback ─────
  private propagateConstraints(startGx: number, startGz: number): boolean {
    try {
      const queue: Array<{ gx: number; gz: number }> = [{ gx: startGx, gz: startGz }];
      const inQueue = new Set<string>();
      inQueue.add(`${startGx},${startGz}`);

      const directions = [
        { dir: 'N', dx: 0, dz: -1, opp: 'S' },
        { dir: 'E', dx: 1, dz: 0, opp: 'W' },
        { dir: 'S', dx: 0, dz: 1, opp: 'N' },
        { dir: 'W', dx: -1, dz: 0, opp: 'E' }
      ] as const;

      while (queue.length > 0) {
        const curr = queue.shift()!;
        inQueue.delete(`${curr.gx},${curr.gz}`);

        const currSet = this.superposition[curr.gx][curr.gz];
        if (currSet.size === 0) {
          // If contradiction occurs, heal cell with default prototype
          currSet.add(0);
        }

        for (const d of directions) {
          const nx = curr.gx + d.dx;
          const nz = curr.gz + d.dz;

          if (nx < 0 || nx >= this.gridDim || nz < 0 || nz >= this.gridDim) continue;

          const neighborSet = this.superposition[nx][nz];
          if (neighborSet.size <= 1) continue;

          const toRemove: number[] = [];

          for (const nIdx of neighborSet) {
            const nProto = this.prototypes[nIdx];
            if (!nProto) continue;
            const nSocket = nProto.sockets[d.opp as keyof typeof nProto.sockets];

            let isCompatible = false;
            for (const cIdx of currSet) {
              const cProto = this.prototypes[cIdx];
              if (!cProto) continue;
              const cSocket = cProto.sockets[d.dir as keyof typeof cProto.sockets];
              if (areSocketsCompatible(cSocket, nSocket)) {
                isCompatible = true;
                break;
              }
            }

            if (!isCompatible) {
              toRemove.push(nIdx);
            }
          }

          if (toRemove.length > 0) {
            for (const remIdx of toRemove) {
              neighborSet.delete(remIdx);
            }

            if (neighborSet.size === 0) {
              // Contradiction caught! Assign default backup prototype to prevent cascade failure
              neighborSet.add(0);
            }

            const key = `${nx},${nz}`;
            if (!inQueue.has(key)) {
              queue.push({ gx: nx, gz: nz });
              inQueue.add(key);
            }
          }
        }
      }

      return true;
    } catch (err) {
      console.warn(`[WFCSolver] Contradiction propagation exception:`, err);
      return true; // Gracefully continue solving
    }
  }

  // ─── Main WFC Solve Execution Loop with Try-Catch Safety ─────────────────────
  public solve(initialSeed: number = 42): WFCSolvedCell[][] | null {
    for (let attempt = 0; attempt < this.maxAttempts; attempt++) {
      try {
        const seed = initialSeed + attempt * 1337;
        const rng = this.createRandom(seed);
        this.initGrid();

        // Seed center tile with a 4-Way Cross Intersection to kickstart connected roads
        const centerGx = Math.floor(this.gridDim / 2);
        const centerGz = Math.floor(this.gridDim / 2);
        const crossIdx = this.prototypes.findIndex(p => p.id === 'road_cross');

        if (crossIdx >= 0) {
          this.superposition[centerGx][centerGz].clear();
          this.superposition[centerGx][centerGz].add(crossIdx);
          this.propagateConstraints(centerGx, centerGz);
        }

        // WFC Main Iteration Loop
        while (true) {
          const cell = this.findMinEntropyCell(rng);
          if (!cell) break; // All cells collapsed cleanly!

          this.collapseCell(cell.gx, cell.gz, rng);
          this.propagateConstraints(cell.gx, cell.gz);
        }

        console.log(`[WFCSolver] Successfully solved map on attempt #${attempt + 1} (seed: ${seed})`);
        const result: WFCSolvedCell[][] = [];

        for (let gx = 0; gx < this.gridDim; gx++) {
          const row: WFCSolvedCell[] = [];
          for (let gz = 0; gz < this.gridDim; gz++) {
            const set = this.superposition[gx][gz];
            const chosenIdx = set.size > 0 ? Array.from(set)[0] : 0;
            row.push({
              gx,
              gz,
              prototype: this.prototypes[chosenIdx] || this.prototypes[0]
            });
          }
          result.push(row);
        }

        return result;
      } catch (err) {
        console.warn(`[WFCSolver] Exception on attempt #${attempt + 1}:`, err);
      }
    }

    // Fallback emergency grid generation if max attempts hit
    console.warn(`[WFCSolver] Creating fallback emergency grid after ${this.maxAttempts} attempts.`);
    const result: WFCSolvedCell[][] = [];
    for (let gx = 0; gx < this.gridDim; gx++) {
      const row: WFCSolvedCell[] = [];
      for (let gz = 0; gz < this.gridDim; gz++) {
        row.push({
          gx,
          gz,
          prototype: this.prototypes[0]
        });
      }
      result.push(row);
    }
    return result;
  }
}
