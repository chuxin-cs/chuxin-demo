import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import vueDevTools from "vite-plugin-vue-devtools";

import path from "path";
import { fileURLToPath } from "url";
// 获取当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
// 使用 path.resolve 直接获取当前文件所在的目录
const __dirname = path.resolve(path.dirname(__filename));

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 插件
  plugins: [
    // vue
    vue(),

    // 代码语法降级处理
    legacy({
      // 目标浏览器列表
      targets: ["defaults", "not IE 11"],
    }),

    // 浏览器 devtools
    vueDevTools(),
  ],
  // vite 打包相关配置
  build: {
    // vite 默认打包的文件是 500 KB 如果超过这个阈值就会报错 当前为了演示调整为 900 了
    chunkSizeWarningLimit: 900,
    // rollup 打包的相关配置 vite生产用的rollup打包
    rollupOptions: {
      output: {
        // manualChunks: {
        //   vendor: ["vue"],
        //   "element-plus": ["element-plus"],
        // },
        // 用函数的方式
        // manualChunks(id: any) {
        //   if (id.indexOf("node_modules") != -1) {
        //     return "chuxin";
        //   }
        // },
      },
    },
  },
});
