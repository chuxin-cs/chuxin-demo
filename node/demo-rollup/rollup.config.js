import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";
import filesize from "rollup-plugin-filesize";
import progress from "rollup-plugin-progress";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

// 废弃的包如下：
// 1.rollup-plugin-babel   ==> @rollup/plugin-babel
// 2.rollup-plugin-terser  ==> @rollup/plugin-terser

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

    // 别名 vue 和 react 项目现在已经用烂了
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }),

    // 语法降级
    babel({
      // 编译库使用
      babelHelpers: "runtime",
      // 只转换源代码，不转换外部依赖
      exclude: "node_modules/**",
    }),

    // 进度条
    progress({
      clearLine: true, // 清除上一行的输出
      completeChar: "=", // 完成部分的字符
      incompleteChar: "-", // 未完成部分的字符
      width: 50, // 进度条宽度
      // 其他可选配置项
    }),

    // 打包之后显示文件大小
    filesize(),
  ],
};
