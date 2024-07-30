const path = require("path");

module.exports = {
    // 开发模式
    mode: "development",

    // 入口
    entry: path.resolve(__dirname, "./src/main.js"),

    // 出口
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    }
}