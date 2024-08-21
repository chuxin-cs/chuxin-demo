import { useMemo, useState } from "react";

/**
 * 官网地址：https://ahooks.js.org/zh-CN/hooks/use-toggle
 * 源码地址：https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useToggle/index.ts
 *
 * 描述：用于设置页面标题。
 */

export interface Actions<T> {
  toggle: () => void;
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
}

// 不传任何参数时
function useToggle<T = boolean>(): [boolean, Actions<T>];
// 传入一个参数时
function useToggle<T>(defaultValue: T): [T, Actions<T>];
// 传入两个参数时
function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [T | U, Actions<T | U>];

let _actions: any = null;

function useToggle<D, R>(
  defaultValue: D = false as unknown as D,
  reverseValue?: R
) {
  let [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (
      reverseValue === undefined ? !defaultValue : reverseValue
    ) as D | R;
    const toggle = () =>
      setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | R) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);

    return {
      set,
      toggle,
      setLeft,
      setRight,
    };
  }, []);
  console.log("=================================");
  console.log(_actions, actions, _actions == actions);
  _actions = actions;

  return [state, actions];
}

export default useToggle;
