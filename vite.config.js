import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        de: resolve(__dirname, 'de/index.html'),
        fr: resolve(__dirname, 'fr/index.html')
      }
    }
  }
});
