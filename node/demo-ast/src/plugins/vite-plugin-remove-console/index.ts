import path from "path";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generator from "@babel/generator";

export function vitePluginRemoveConsole() {
  return {
    // 插件名称
    name: "vite-plugin-remove-console",
    /**
     * load:加载
     * id 为 文件的 src 路径
     */
    load1(id) {
      // 首先找到 App.vue
      if (id.indexOf("App.vue") != -1) {
        console.log(id, "==>id");

        const code = `function example() {
          let a = 1;
          let b = 2;
          return a + b;
        }`;

        // ast 三大步骤：
        const ast = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        const visitor = {
          VariableDeclaration(path) {
            if (path.node.kind === "let") {
              path.node.kind = "const";
            }
          },
        };

        // 进行代码替换
        traverse(ast, visitor);

        // 把替换后的代码重新生成为最新的代码
        const output = generator(ast, {});

        console.log(output.code);
      }
    },
    transform1(code, id) {
      if (id.indexOf("App.vue") != -1) {
        const ast = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        // 使用 @babel/traverse 遍历 AST 并删除 console 语句
        traverse(ast, {
          CallExpression(path) {
            if (path.get("callee.object").isIdentifier({ name: "console" })) {
              path.remove();
            }
          },
        });

        // 使用 @babel/generator 将修改后的 AST 转换为代码
        const { code: modifiedCode } = generator(ast, {}, code);

        return {
          code: modifiedCode,
          map: null,
        };
      }
    },
    transform(code, id) {
      if (path.extname(id) === ".vue") {
        // 使用 @babel/parser 解析代码为 AST
        const ast = parse(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
        });

        traverse(ast, {
          VariableDeclaration(path) {
            if (path.node.kind === "var") {
              path.node.kind = "let";
            }
          },
        });

        const { code: modifiedCode } = generator(ast, {}, code);

        console.log(modifiedCode, "==");

        return {
          code: modifiedCode,
          map: null,
        };
      }
    },
  };
}
