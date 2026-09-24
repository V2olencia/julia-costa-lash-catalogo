import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/julia-costa-lash-catalogo/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        stories: resolve(import.meta.dirname, 'stories.html'),
      },
    },
  },
});
