package main

import (
	"fmt"
	"log"
)

func main() {
	fmt.Println("==> 程序开始")
	defer func() {
		if err := recover(); err != nil {
			log.Printf("程序回复:%v\n", err)
		}
	}()
	riskyOperation()
	fmt.Println("我其实都不会走到这里来！！！")

}

func riskyOperation() {
	panic("发生严重的错误，打个比方 mysql 连接失败我就可以用这个，这样程序就不往下走了，直接捕获在控制台输出")
}
