import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/main.ts",
  output: [
    {
      file: "dist/utils.cjs.js", // CommonJS 输出
      format: "cjs",
      exports: "named", // 主入口 export default 导出
    },
    {
      file: "dist/utils.esm.js", // ES模块 输出
      format: "es",
    },
    {
      file: "dist/utils.min.js", // 压缩后的UMD格式 输出
      format: "umd",
      name: "Utils",
      exports: "named", // 主入口 export default 导出
    },
  ],
  plugins: [
    // ts
    typescript(),

    // 加载 commonjs 模块
    commonjs(),
    // 加载模块
    resolve(),

    // 代码压缩
    // terser()

    // 支持这样导入 import {name} from "../package.json"
    json(),

    // 语法降级
    babel({
      // 编译库使用
      babelHelpers: "runtime",
      // 只转换源代码，不转换外部依赖
      exclude: "node_modules/**",
    }),
  ],
};
