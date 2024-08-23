console.log("chuxin: Babel...");

// 01、用于演示 箭头函数转换的 Babel demo
import { whyBabel } from "./why-babel/index.js";
whyBabel().then((res) => {
  console.log(res, "res");
});
