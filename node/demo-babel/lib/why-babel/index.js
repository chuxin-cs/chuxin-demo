"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whyBabel = void 0;
const whyBabel = () => {
  // Babel 接收到的输入是： ES2015 箭头函数
  let babelBefore = [1, 2, 3].map(n => n + 1);

  // Babel 输出： ES5 语法实现的同等功能
  let babelAfter = [1, 2, 3].map(function (n) {
    return n + 1;
  });
  console.log("babel 之前：", babelBefore);
  console.log("babel 之后：", babelAfter);
};
exports.whyBabel = whyBabel;