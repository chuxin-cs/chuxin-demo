package database

import (
	"demo-gorm/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

// Connect 数据库连接
func Connect() {
	// 数据账号和密码：root / 123456          todo-list 是数据库名称
	dsn := "root:123456@tcp(127.0.0.1:3306)/todo-list?charset=utf8mb4&parseTime=True&loc=Local"

	// 连接数据库
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("数据库连接失败: " + err.Error())
	}

	// 全局变量赋值
	DB = db

	// 自动 User 创建表
	err = DB.AutoMigrate(&model.UserModel{})
	if err != nil {
		panic("数据库中的表创建失败: " + err.Error())
	}
}
