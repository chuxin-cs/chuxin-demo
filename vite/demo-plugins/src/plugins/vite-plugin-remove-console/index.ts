import path from "path";
import type { PluginOption } from "vite";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generator from "@babel/generator";

export interface Options {}

export function vitePluginRemoveConsole(): PluginOption {
  return {
    // 插件名称
    name: "vite-plugin-remove-console",
    // 运行实际是 serve 运行   build 打包
    apply: "serve",
    // 执行实际  pre
    enforce: "post",
    transform(source: string, id: string) {
      // 如果插件是 node_modules 就不处理了
      if (/node_modules/.test(id)) {
        return {
          code: source,
          map: null,
        };
      }

      if (path.extname(id) === ".vue" || path.extname(id) === ".ts") {
        // 解析字符串格式的代码，生成语法树
        const ast = parse(source, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        // 代码替换
        traverse(ast, {
          CallExpression(path: any) {
            if (path.get("callee.object").isIdentifier({ name: "console" })) {
              path.remove();
            }
          },
        });

        // 使用 @babel/generator 将修改后的 AST 转换为代码
        const { code } = generator(ast, {}, source);
        return {
          code,
          map: null,
        };
      }
    },
  };
}
