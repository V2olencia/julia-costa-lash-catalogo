import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/julia-costa-lash-catalogo/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        stories: resolve(__dirname, 'stories.html'),
      },
    },
  },
});
