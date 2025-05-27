package main

import (
	"fmt"
	"github.com/chuxin-cs/demo-crud/router"
	"github.com/gin-gonic/gin"
)

type User struct {
	Name string
	Age  int
}

func test() {
	fmt.Println("开始===============")
	var obj = User{Name: "chuXin", Age: 27}
	fmt.Println(obj)
	// 使用 & 将 obj 的引用地址给到b
	var b = &obj

	// 修改值
	b.Name = "初心"
	b.Age = 18
	
	// 打印
	fmt.Println(obj, "222 obj")
	// 再用 * 指针来取 b
	fmt.Println(*b, "111 b")

	fmt.Println("结束===============")
}

func main() {
	test()

	r := gin.Default()
	r.GET("/add", router.Add)
	r.GET("/del", router.Del)
	r.GET("/edit", router.Edit)
	r.GET("/getList", router.GetList)
	// 运行在 9000 端口
	r.Run(":9000")
}
