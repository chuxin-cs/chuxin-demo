# 1.全局安装

npm i -g lerna@6.0.0

# 2.初始化文件夹

mkdir lerna-yarn-workspace && cd lerna-yarn-workspace

# 3.使用 lerna 初始化

lerna init

# 4.使用 lerna 创建包

lerna create @chu-xin/utils
lerna create @chu-xin/react

# 5.给 @chu-xin/utils 和 @chu-xin/react 都安装 axios

lerna add axios

# 6.在 @chu-xin/react 中安装本地 @chu-xin/utils 依赖，默认安装的是项目依赖

lerna add @chu-xin/utils --scope=@chu-xin/react

# 7.如果我们想安装到 开发依赖的话

lerna add @chu-xin/utils --scope=@chu-xin/react --dev

# 8.如果我想删除 @chu-xin/react 和 @chu-xin/utils 中的 node_modules 的话

lerna clean

# 9.但是我如果又想把这些依赖都安装回来呢，或者我第一次拉去项目 我要安装依赖 我不能 cd 到每个包中 npm i ,可以使用

lerna bootstrap

# 10.在全局运行 @chu-xin/react

lerna run butilsld --scope=@chu-xin/react

# 11.运行所有的话

lerna run butilsld
