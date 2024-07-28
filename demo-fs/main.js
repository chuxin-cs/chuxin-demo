const fs = require("fs")

// 创建文件夹
fs.mkdir("./dist", (err) => {
    // EEXIST 代表已经存在了
    if(err && err.code !== "EEXIST"){
        return;
    }
    console.log("创建成功")
})

//



//


// 