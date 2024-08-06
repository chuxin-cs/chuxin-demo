import fs from "fs-extra";

import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//1.创建文件
// fs.ensureFileSync(path.resolve(__dirname, "a.vue"));

//2.删除文件
// fs.removeSync(path.resolve(__dirname, "a.vue"));

//3.删除文件夹
// fs.removeSync(path.resolve(__dirname, "ee"));

//4.创建文件夹
// fs.ensureDirSync(path.resolve(__dirname, "c/c"));
// fs.mkdirsSync(path.resolve(__dirname, "d/d"));
// fs.mkdirpSync(path.resolve(__dirname, "ee/ee"));

//5.修改文件夹
// fs.renameSync(
//   path.resolve(__dirname, "a.vue"),
//   path.resolve(__dirname, "b.vue")
// );

//6.读取 json 文件
// let aJson = fs.readJsonSync(path.resolve(__dirname, "a.json"));
// aJson.author = "chuXin";
//7.写入 json 文件
// fs.writeJsonSync(path.resolve(__dirname, "a.json"), aJson, {
//   spaces: 2,
//   EOL: "\r\n",
// });

//7.判断是否有文件夹
// console.log(fs.pathExistsSync(path.resolve(__dirname, "a.vue")));
// console.log(fs.pathExistsSync(path.resolve(__dirname, "c")));
// console.log(fs.existsSync(path.resolve(__dirname, "c")));

//8.文件复制
fs.writeFileSync(
  path.resolve(__dirname, "a.vue"),
  `<template><div>chuxin a.vue</div></template>`,
  {
    encoding: "utf8",
    mode: 0o777,
    flag: "w",
  }
);
