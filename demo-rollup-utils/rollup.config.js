import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "main.ts",
  output: [
    {
      file: "dist/utils.cjs.js", // CommonJS 输出
      format: "cjs",
    },
    {
      file: "dist/utils.esm.js", // ES模块 输出
      format: "es",
    },
    {
      file: "dist/utils.min.js", // 压缩后的UMD格式 输出
      format: "umd",
      name: "Utils",
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript(),
    resolve(), // 使得rollup能找到外部模块
    commonjs(), // 将CommonJS转换为ES模块
    babel({
      // 编译库使用
      babelHelpers: "runtime",
      // 只转换源代码，不转换外部依赖
      exclude: "node_modules/**",
    }),
  ],
};
