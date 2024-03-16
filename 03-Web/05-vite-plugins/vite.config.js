import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import consolePlugin from "./consolePlugin.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    consolePlugin({
      "@": "./src",
      "~": "./public",
    }),
  ],
});
