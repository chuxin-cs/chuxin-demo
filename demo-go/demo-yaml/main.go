package main

import (
	"demo-yaml/config"
	"fmt"
)

func main() {
	config.Load()
	fmt.Println(config.GlobalConfig.Database.Host)
}
