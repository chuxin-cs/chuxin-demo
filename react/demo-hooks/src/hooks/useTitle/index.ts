import { useEffect, useRef } from "react";

/**
 * 官网地址：https://ahooks.js.org/zh-CN/hooks/use-title
 * 源码地址：https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useTitle/index.ts
 *
 * 描述：用于设置页面标题。
 */
function useTitle(title: string) {
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useTitle;
