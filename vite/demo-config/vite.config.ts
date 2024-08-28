import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },

  // plugins
  plugins: [
    // vue plugin
    vue(),
  ],

  // vite 打包相关配置
  build: {
    // vite 默认打包的文件是 500 KB 如果超过这个阈值就会报错 当前为了演示调整为 900 了
    chunkSizeWarningLimit: 900,
    // rollup 打包的相关配置 vite生产用的rollup打包
    rollupOptions: {
      output: {
        // 1、manualChunks 默认方式
        manualChunks: {
          vendor: ["vue"],
          "element-plus": ["element-plus"],
          pinia: ["pinia"],
          "vue-router": ["vue-router"],
        },
      },
    },
  },
});
