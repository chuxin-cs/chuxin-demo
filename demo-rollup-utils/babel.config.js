export default {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
  ],
  plugins: [
    [
      // 与 babelHelpers: 'runtime' 配合使用
      "@babel/plugin-transform-runtime",
    ],
  ],
};
