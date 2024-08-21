import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 开源的
import Inspector from "vite-plugin-vue-inspector";
import vueDevTools from "vite-plugin-vue-devtools";
import commonjs from "vite-plugin-commonjs";

// 自己写着玩的
import { vitePluginRemoveConsole } from "./src/plugins/vite-plugin-remove-console/index";
import depTreeVisualizer from "./src/plugins/vite-plugins-i/index";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue
    vue(),
    // commonjs 转 esModules
    commonjs(),
    // 代码分析
    Inspector(),
    // devtools
    vueDevTools(),
    // 删除 console
    vitePluginRemoveConsole(),
    // 分析
    depTreeVisualizer(),
  ],
  server: {
    host: true,
  },
});
