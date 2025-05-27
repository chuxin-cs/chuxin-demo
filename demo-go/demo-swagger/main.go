package main

import (
	_ "demo-swagger/docs" // 新增文档导入
	routers "demo-swagger/router"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func main() {
	router := gin.New()

	// swagger
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	var r = routers.RouterApi{}
	r.TestApi(router)

	// 启动
	err := router.Run(":9000")
	if err != nil {
		return
	}
}
