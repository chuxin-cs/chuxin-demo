package main

import (
	"demo-viper/config"
	"fmt"
)

func main() {
	config.Viper() // 读取配置

	fmt.Println(config.GlobalConfig.Database.Host)
}
