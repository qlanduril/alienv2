import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'static',
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
});
