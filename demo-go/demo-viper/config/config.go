package config

import (
	"fmt"
	"github.com/spf13/viper"
	"log"
)

// Configs 整合所有的 struct
type Configs struct {
	Database Database `mapstructure:"database"`
	Server   Server   `mapstructure:"server"`
}

// Database 数据库相关
type Database struct {
	Host     string `mapstructure:"host" json:"host" yaml:"host"`
	Port     int    `mapstructure:"port" json:"port" yaml:"port"`
	Name     string `mapstructure:"name" json:"name" yaml:"name"`
	User     string `mapstructure:"user" json:"user" yaml:"user"`
	Password string `mapstructure:"password" json:"password" yaml:"password"`
}

// Server 服务相关
type Server struct {
	Port int `mapstructure:"port" yaml:"port" json:"port" `
}

// GlobalConfig 定义全局变量
var GlobalConfig Configs

// Viper 读取config 文件下的配置 相比spring boot 的 application.yaml 可以直接读取 还是差一丢丢体验
func Viper() {
	// 设置文件名
	viper.SetConfigName("config")
	// 设置文件格式
	viper.SetConfigType("yaml")
	// 设置文件目录
	viper.AddConfigPath(".")

	// 先读取配置文件
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("读取配置文件失败: %s \n", err))
	}

	// 读取文件
	err = viper.Unmarshal(&GlobalConfig)

	// 读取成功会返回nil  所以在go的设计里面 如果出错了 就不会返回nil  成功的话会返回nil
	if err != nil {
		log.Fatalf("解析配置到结构体失败, %v\n", err)
	}
}
