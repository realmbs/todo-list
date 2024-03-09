import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        form: resolve(__dirname, 'form/index.html'),
        list: resolve(__dirname, 'list/index.html'),
        edit: resolve(__dirname, 'edit/index.html'),
      },
    },
  },
});
