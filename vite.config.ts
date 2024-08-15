import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/fly-flat/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@interface": path.resolve(__dirname, "./src/interface"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@composables": path.resolve(__dirname, "./src/composables"),
    },
  },
})
