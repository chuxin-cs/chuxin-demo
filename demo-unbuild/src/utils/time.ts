import dayjs from "dayjs";

export const formatTime = (
  time: string | number | Date,
  format = "YYYY-MM-DD HH:mm:ss"
) => {
  return dayjs(time).format(format);
};

// ==> spring-boot-demo 收纳所有的spring-boot语言项目
// ==> go-demo  收纳所有的go语言项目
// ==> vite vue react node js ts 这些是不是太多了？

/**
 * 如果上面整体收纳为3个项目
 * spring-boot-demo
 * chuxin-demo {vite、vue、react、node、js、ts、koa、nest、express} 可以不断延伸等等
 * go-demo
 * spring-cloud-demo
 * python-demo
 * chuxin {cli、create-chuxin} 这里面整一些和项目中有用的东西
 *
 *
 *
 * **/
