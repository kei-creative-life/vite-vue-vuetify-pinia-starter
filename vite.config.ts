import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  // css: {
  //   postcss: {
  //     plugins: [postcssNesting],
  //   },
  // },
  root: 'src',
  base: '/',
  publicDir: '../public',
  envDir: path.resolve(__dirname, './'),
  build: {
    outDir: '../dist',
  },
  server: { port: 3800 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
