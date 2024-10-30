const { name } = require("./package.json");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // transpileDependencies: true,

  // 打包 public path
  // publicPath: "./",

  // 关闭警告
  // lintOnSave: false,

  // webpack 打包配置项
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        "@": require("path").resolve(__dirname, "./src"),
      },
    },
    // 文件输出
    // output: {
    //   // 库名称
    //   library: `${name}-[name]`,
    //   // 库的打包格式
    //   libraryTarget: "umd", // 把微应用打包成 umd 库格式
    //   // vue2.0 使用的是这个 jsonpFunction 模式
    //   jsonpFunction: `webpackJsonp_${name}`,
    // },
  },

  // webpack 打包的配置
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("images")
  //     .use("url-loader")
  //     .loader("url-loader")
  //     .tap((options) => Object.assign(options, { limit: 50000 }));
  // },

  // 项目运行配置项
  // devServer: {
  //   // 运行端口
  //   port: 9007,
  // },
});
