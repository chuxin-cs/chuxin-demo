package routers

import "github.com/gin-gonic/gin"

type RouterApi struct{}

// TestApi 获取 TestApi 列表
// @Summary 用户登录
// @Description 根据用户名和密码验证用户身份
// @Tags 用户接口
// @Accept json
// @Produce json
// @Failure 400 {string} string "参数错误"
// @Router /api/login [post]
func (r *RouterApi) TestApi(router *gin.Engine) {
	router.GET("/api/test", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "请求成功",
			"code":    200,
		})
	})
}
