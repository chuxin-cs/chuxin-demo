import fs from "fs-extra";

import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//1.创建文件
// fs.ensureFileSync(path.resolve(__dirname, "a.vue"));
//2.删除文件
// fs.removeSync(path.resolve(__dirname, "a.vue"));
//3.删除文件夹
// fs.removeSync(path.resolve(__dirname, "b"));
