import { create } from "zustand";

type StoreState = {
  name: string;
  setName: () => void;
  removeName: () => void;
  updateName: (newState: string) => void;
};

export const useStore = create<StoreState>((set) => ({
  name: "初心",
  setName: () => set((state) => ({ name: "云层上的光" + state.name })),
  removeName: () => set({ name: "chuxin" }),
  updateName: (newState: string) => set({ name: newState }),
}));
