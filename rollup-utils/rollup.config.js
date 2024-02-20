const { babel } = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "main.js",
  output: [
    {
      file: "./dist/vue-umd.js",
      format: "umd",
      name: "Vue",
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    },
    {
      file: "./dist/vue-es.js",
      format: "es",
    },
    {
      file: "./dist/vue-cjs.js",
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
