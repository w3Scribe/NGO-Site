import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    viteTsconfigPaths(),
    viteReact({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    dedupe: ['@trpc/server'],
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@/backend': path.resolve(__dirname, '../backend'),
      '@app': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './components'),
      '@ui': path.resolve(__dirname, './components/ui'),
      '@constants': path.resolve(__dirname, './constants'),
      '@lib': path.resolve(__dirname, './lib'),
      '@pages': path.resolve(__dirname, './pages'),
      '@utils': path.resolve(__dirname, './utils'),
      '@assets': path.resolve(__dirname, './assets'),
      '@public': path.resolve(__dirname, './public'),
      'components': path.resolve(__dirname, './components'),
      'lib': path.resolve(__dirname, './lib'),
    },
  },
  server: {
    open: false,
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'dist',
  },
});
