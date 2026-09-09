import { defineConfig, Plugin } from 'vite';
import { createAlienCitadelGLB } from './scripts/build_3d_citadel.js';

createAlienCitadelGLB();

function watchStaticMapsPlugin(): Plugin {
  return {
    name: 'watch-static-maps',
    configureServer(server) {
      server.watcher.add('static/*.json');
      server.watcher.on('change', (file) => {
        if (file.endsWith('.json')) {
          console.log(`[vite] static map changed (${file}), triggering full reload...`);
          server.ws.send({ type: 'full-reload' });
        }
      });
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [watchStaticMapsPlugin()],
  publicDir: 'static',
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
});
