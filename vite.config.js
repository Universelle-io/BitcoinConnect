import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'bitcoinconnect',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['@leather-wallet/types', '@leather.io/rpc', 'bitcoinsdk', 'nanostores'],
      output: {
        globals: {
          bitcoinsdk: 'bitcoinsdk',
          nanostores: 'nanostores'
        }
      }
    }
  },
  server: {
    open: true
  }
});