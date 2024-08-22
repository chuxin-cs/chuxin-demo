import { defineConfig } from "unocss";

// presets
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  // 自定义规则
  rules: [["m-100", { margin: "100px" }]],
  // 预设
  presets: [
    // 默认
    presetUno(),
    // className 可以当做属性一样使用
    presetAttributify(),
    // rem to px
    presetRemToPx({
      baseFontSize: 16, // 默认是16px
    }),
  ],
});
