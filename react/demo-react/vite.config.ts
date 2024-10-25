import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置别名
    alias: {
      "@": path.resolve("./src"),
      "#": path.resolve("./types"),
    },
  },
})
