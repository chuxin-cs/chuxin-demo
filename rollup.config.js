const pkg = require("./package.json");
const { babel } = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "./src/index.js",
  output: [
    {
      file: pkg.browser,
      format: "umd",
      name: "Vue",
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: pkg.main,
      format: "cjs",
    },
  ],
  plugins: [
    // es+ 代码做降级处理
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    // 转换commonjs
    commonjs(),
  ],
};