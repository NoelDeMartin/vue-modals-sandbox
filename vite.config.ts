import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vue-modals-sandbox/' : '/',
  plugins: [vue(), tailwindcss()],
  fmt: { semi: true, singleQuote: true, sortImports: true },
  lint: { options: { typeAware: true, typeCheck: true } },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
