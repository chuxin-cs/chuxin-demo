import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "./src/main.ts",
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
    },
  ],
  plugins: [
    commonjs(),
    typescript(),
    // terser()
    babel({
      // 编译库使用
      babelHelpers: "runtime",
      // 只转换源代码，不转换外部依赖
      exclude: "node_modules/**",
    })
  ]
};
