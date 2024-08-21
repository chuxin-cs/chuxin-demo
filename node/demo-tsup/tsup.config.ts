import { defineConfig } from "tsup";

export default defineConfig({
  // 入口文件 或者可以使用 entryPoints 底层是 esbuild
  entry: ["src/main.ts"],

  // 输出目录
  outDir: "dist",

  // 打包类型  支持以下几种 'cjs' | 'esm' | 'iife'
  format: ["cjs", "esm", "iife"],

  // iife 模式下的全局变量名
  // globalName: "chuxin",

  // 生成类型文件 xxx.d.ts
  dts: false,

  // 代码分割 默认esm模式支持 如果cjs需要代码分割的话就需要配置为 true
  splitting: false,

  // sourcemap
  sourcemap: false,

  // 每次打包先删除dist
  clean: true,

  // 压缩代码
  minify: false,

  //
  treeshake: false,
});
