import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; //这个path用到了上面安装的@types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
