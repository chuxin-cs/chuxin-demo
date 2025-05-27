package main

import (
	"demo-gorm/database"
	"demo-gorm/model"
	"fmt"
)

func main() {
	// 数据库连接
	database.Connect()

	// 增
	user := model.UserModel{Name: "初心", Password: "123456"}
	err := database.DB.Create(&user).Error
	if err != nil {
		fmt.Println("创建失败:", err)
	}
	fmt.Println("插入成功，ID:", user.ID) // 自动填充主键

	// 删
	//database.DB.Delete(&user)
	//fmt.Println("删除成功，ID:", user.ID)

	// 改
	database.DB.Where("id = ?", user.ID).Model(&user).Updates(model.UserModel{Name: "chuxin", Password: "123456789"})
	fmt.Println("修改成功：", user)

	// 查
	var userList []model.UserModel
	err = database.DB.Find(&userList).Error
	if err != nil {
		panic(err)
	}
	fmt.Println("查询的用户数据:", userList)
}
