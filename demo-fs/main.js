const fs = require("fs")

// 创建文件夹
fs.mkdir("./dist", (err) => {
    // EEXIST 代表已经存在了
    if (err && err.code == "EEXIST") {
        console.log("目录已存在")
        return;
    }
    console.log("创建成功")
})

// 修改名字
fs.rename("./dist", "./dist1", (err) => {
    if (err && err.code == "ENOENT") {
        console.log("修改失败")
        return;
    }
    console.log("修改成功~")
})



//


// 