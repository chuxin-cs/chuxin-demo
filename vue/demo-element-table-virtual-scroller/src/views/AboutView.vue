<template>
  <div class="about">
    <!-- <virtual-scroll
      :data="tableData"
      :item-size="48"
      key-prop="id"
      @change="(renderData) => (virtualList = renderData)"
    > -->
    <!-- row-key="id" -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="address1" label="地址"> </el-table-column>
      <el-table-column prop="address2" label="地址"> </el-table-column>
      <el-table-column prop="address3" label="地址"> </el-table-column>
      <el-table-column prop="address4" label="地址"> </el-table-column>
      <el-table-column prop="address5" label="地址"> </el-table-column>
      <el-table-column prop="address6" label="地址"> </el-table-column>
    </el-table>
    <!-- </virtual-scroll> -->
  </div>
</template>

<script>
// import VirtualScroll from "el-table-virtual-scroll";

export default {
  // components: { VirtualScroll },
  data() {
    return {
      tableData: [],

      virtualList: [],
    };
  },
  mounted() {
    let list = [];
    for (let i = 0; i < 2000; i++) {
      list.push({
        id: i,
        date: "2016-05-02",
        name: "王小虎",
        address1: "上海市普陀区金沙江路 1518 弄",
        address2: "上海市普陀区金沙江路 1518 弄",
        address3: "上海市普陀区金沙江路 1518 弄",
        address4: "上海市普陀区金沙江路 1518 弄",
        address5: "上海市普陀区金沙江路 1518 弄",
        address6: "上海市普陀区金沙江路 1518 弄",
        address: "上海市普陀区金沙江路 1518 弄",
      });
    }

    this.tableData = list;
  },
};
</script>
