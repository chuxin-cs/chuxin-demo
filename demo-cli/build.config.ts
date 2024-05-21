import path from "node:path";
import url from "node:url";
import { defineBuildConfig } from "unbuild";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default defineBuildConfig({
  // 入门文件
  entries: ["src/index"],
  // 删除 dist
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: "node18",
      minify: true,
    },
  },
  alias: {
    // we can always use non-transpiled code since we support node 18+
    prompts: "prompts/lib/index.js",
  },
});
