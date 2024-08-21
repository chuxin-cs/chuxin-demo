import { create } from "zustand";

const useUserStore = create((set) => ({
  // 对象格式
  user: {
    name: "chuxin",
    user: {
      name: "cs",
    },
  },
  updateUser: (state: any) => {
    console.log(state);
    // 然怪这里的 set({}) 调用的时候要用 对象包裹着  这样里面是直接进行 = 赋值操作
    return set({ user: { ...state } });
  },

  updateUser1: (state: any) => {
    console.log(state);
    // 然怪这里的 set({}) 调用的时候要用 对象包裹着  这样里面是直接进行 = 赋值操作
    return set(state);
  },

  // 单个
  name: "云层上的光",
  updateName: (state: any) => {
    console.log(state);
    return set({ name: "chuxin" });
  },
}));

export { useUserStore };
