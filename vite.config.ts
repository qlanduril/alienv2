import { defineConfig } from 'vite';
import { createAlienCitadelGLB } from './scripts/build_3d_citadel.js';

createAlienCitadelGLB();

export default defineConfig({
  publicDir: 'static',
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
});
