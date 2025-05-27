package router

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Person struct {
	// json格式从name取值，并且该值为必须的
	Name string `json:"name" binding:"required"`
}

// Add 增
func Add(c *gin.Context) {
	name := c.PostForm("name")
	c.JSON(200, "post x-www-form-urlencoded请求"+name)
}

// Del 删
func Del(c *gin.Context) {
	c.String(200, "del")
}

// Edit 改
func Edit(c *gin.Context) {
	var person Person
	if err := c.ShouldBindJSON(&person); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}
	c.JSON(200, "post json格式请求")
}

// GetList 查
func GetList(c *gin.Context) {
	// r.GET("/user/:id", func(){  }) 取前端传的参数
	// localhost:9000/user/1
	id := c.Query("id")

	// 取前端传的参数
	page1 := c.Query("page")
	pageSize1 := c.Query("pageSize")

	// 取前端传的参数，没有的情况下用默认值
	page := c.DefaultQuery("page", "1")
	pageSize := c.DefaultQuery("pageSize", "10")

	c.String(200, "getList"+id+page+pageSize+page1+pageSize1)
}
