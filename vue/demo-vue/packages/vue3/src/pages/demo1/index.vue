<template>
  <div>
    <h1>使用指南</h1>

    <h1>options</h1>
    <div>count: {{ store.count }} / double：{{ store.double }}</div>
    <button @click="handleAdd">外部手动修改count + 1</button>
    <button @click="() => store.increment()">
      调用内部 actions 提供的方法 + 1
    </button>
    <div>------------------------------------</div>
    <h1>setup</h1>
    <div>count: {{ store2.count }} / double：{{ store2.double }}</div>
    <button @click="handleAdd2">外部手动修改count + 1</button>
    <button @click="() => store2.increment()">
      调用内部 actions 提供的方法 + 1
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore, useCounterStore2 } from "@/store";

// options
const store = useCounterStore();
const handleAdd = () => {
  console.log(store);
  store.$patch({ count: store.count + 1 });
};

// setup
const store2 = useCounterStore2();
const handleAdd2 = () => {
  console.log(store2);
  store2.$patch({ count: store2.count + 1 });
};
</script>
