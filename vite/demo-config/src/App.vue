<script setup lang="ts">
import { ref } from "vue";
import { add } from "@/utils";

let count = ref(add(1, 2));
</script>

<template>
  <div>
    <h1>vite config</h1>

    <div>{{ count }}</div>
  </div>
</template>
