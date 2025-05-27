// 指明当前文件属于哪个包
package main

// 导入 fmt 包 go 内置包
import (
	util "demo-hello-world/utils"
	utils "demo-hello-world/utils/a/b/c"
	"fmt"
)

// 创建 main 方法
func main() {
	// 打印 “你好，世界”
	fmt.Println("你好，世界")
	util.Add()
	utils.Add()
	utils.Name()
	util.Main()
}
