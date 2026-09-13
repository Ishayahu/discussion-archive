import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  build: {
    outDir: process.env.APPDEPLOY_VITE_OUT_DIR || 'dist',
    sourcemap:
      process.env.APPDEPLOY_VITE_SOURCEMAP === 'hidden' ? 'hidden' : false,
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        politics: resolve(rootDir, 'politics.html'),
        philosophy: resolve(rootDir, 'philosophy.html'),
        debate1: resolve(rootDir, 'debate1.html'),
        debate2: resolve(rootDir, 'debate2.html'),
        selfhood: resolve(rootDir, 'selfhood.html'),
        futureSelf: resolve(rootDir, 'future-self.html'),
      },
      maxParallelFileOps: 128,
    },
  },
});
