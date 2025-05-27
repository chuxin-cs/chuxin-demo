package model

import "time"

// Model 通用字段
type Model struct {
	ID        uint      `gorm:"primary_key" json:"id"` // 主键id
	CreatedAt time.Time `json:"created_at"`            // 创建时间
	UpdatedAt time.Time `json:"updated_at"`            // 更新时间
}

// UserModel 用户模型
type UserModel struct {
	Model
	Name     string `json:"name" gorm:"type:varchar(20);not null"`      // 用户名
	Password string `json:"password" gorm:"type:varchar(100);not null"` // 密码
}

// TableName 数据库表名
func (UserModel) TableName() string {
	return "sys_user"
}
