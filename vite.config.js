import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: './', // 🔥 Ważne na cPanel
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', // 🔥 Stabilne nazwy plików
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      },
    },
  },
});
