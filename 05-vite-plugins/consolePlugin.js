import path from "path";
import gogo from "gogocode";

function resolveAlias(alias) {
  const resolve = (p) => path.resolve(__dirname, p);
  const result = {};
  for (const key in alias) {
    console.log(alias[key], __dirname);
    result[key] = resolve(alias[key]);
  }
  return result;
}
function consolePlugin(alias) {
  return {
    /**
     * 插件名称
     */
    name: "consolePlugin",

    options(options) {
      console.log(
        `options:我在服务启动时被调用了~,我有一个参数 options ${options}`
      );
    },

    configResolved(config) {
      config.resolve.alias = resolveAlias(alias);

      console.log(config.resolve, "configResolved");
    },

    /**
     * 当前方法会加载所有的页面资源
     */
    load(id, options) {
      // main.js  index.css App.vue
      // console.log(id, options, "load id");
      if (
        id == "G:/chuxin/chuxin-cs/chuxin-demo/05-vite-plugins/src/index.css"
      ) {
        return `#main{background-color:#000;color:#fff}a {
          font-weight: 500;
          color: #646cff;
          text-decoration: inherit;
        }`;
      }
    },

    transform(src, id) {
      console.log(id);
      if (id == "G:/chuxin/chuxin-cs/chuxin-demo/05-vite-plugins/src/main.js") {
        return {
          code: gogo(src)
            .find("console.log()")
            .remove()
            .find("console.error()")
            .remove()
            .generate(),
          map: null, // 如果可行将提供 source map
        };
      }
      // console.log(src, "gogo");
    },
  };
}
export default consolePlugin;
