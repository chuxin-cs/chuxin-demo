import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { vitePluginRemoveConsole } from "./src/plugins/vite-plugin-remove-console";

export default defineConfig({
  plugins: [
    vue(),

    // 插件1
    vitePluginRemoveConsole(),

    // 插件2
  ],
});
