import type { PluginOption, Plugin } from "vite";

export function vitePluginQrcodeTerminal(options: PluginOption): Plugin {
  let config: any;

  return {
    // 插件名称
    name: "vite-plugin-qrcode-terminal",
    // 本地服务运行
    apply: "serve",
    // 拿到最后解析完成的配置
    configResolved(resolvedConfig: any) {
      config = resolvedConfig;
      console.log(config);
    },
  };
}

export default vitePluginQrcodeTerminal;
