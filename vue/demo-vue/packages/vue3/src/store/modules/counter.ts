import { ref, computed } from "vue";
import { defineStore } from "pinia";

// options
export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// 组合式
export const useCounterStore2 = defineStore("counter2", () => {
  // state
  const count = ref(0);

  // getters
  const double = computed(() => count.value * 2);

  // actions
  function increment() {
    count.value++;
  }

  return { count, double, increment };
});
