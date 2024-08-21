<template>
  <div class="home">
    <h1>This is an home page</h1>

    <div>
      <el-input
        v-model="input"
        v-valid-forbid
        placeholder="请输入内容"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      input: "",
    };
  },
};
</script>
