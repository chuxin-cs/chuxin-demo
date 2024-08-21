import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  // 入口文件
  entries: ["src/index"],

  // 打包
  rollup: {
    // emitCJS: true 表示在打包过程中，Rollup 将输入模块转换为 CommonJS 模块格式。这意味着模块将使用 require 和 module.exports 语法。这种格式通常用于在 Node.js 环境中运行的应用程序
    emitCJS: true,
    // inlineDependencies: true 表示在打包过程中，Rollup 将直接内联所有的依赖，而不是将它们作为单独的模块包含在最终的打包文件中。这可以减少文件数量，减少网络请求，并且可以提高应用程序的加载速度。内联依赖也可以减少代码的复杂性，因为依赖被嵌入到了主文件中，不需要额外的模块加载
    inlineDependencies: false,
  },

  clean: true,

  // declaration: true,
});
