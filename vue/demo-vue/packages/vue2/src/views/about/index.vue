<template>
  <div class="about">
    <div class="container">
      <div class="left"></div>
      <div class="chuxin"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let chuxin = document.querySelector(".chuxin");
        let left = document.querySelector(".left");
        let right = document.querySelector(".right");
        let clientWidth = 1920;
        // 输出
        console.log(chuxin);
        // 如果不存在就返回
        if (!chuxin) {
          return;
        }
        // 鼠标按下
        chuxin.onmousedown = (clickEvent) => {
          console.log(1);
          // 获取抽屉主体部分的宽度
          const drawerWidth = chuxin.clientWidth; // clientWidth为元素包含border在内的宽度
          // 获取用户点击的位置
          const clickX = clickEvent.clientX; // 点击事件对象的clientX，clientY参照点为页面的左上角
          console.log(drawerWidth, clickX, left, right, "drawerWidth,clickX");

          // 通过document.onmousemove监听鼠标的移动事件
          document.onmousemove = function (moveEvent) {
            moveEvent.preventDefault();
            const { clientX } = moveEvent;
            console.log(clientX);
            let rightWidth = clientWidth - clientX - drawerWidth;
            let leftWidth = clientX;

            left.style.width = leftWidth + "px";
            right.style.width = rightWidth + "px";
          };
          // 鼠标点击结束，清除鼠标移动监听
          document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
          };
          // 注释补充：在鼠标点击回调中添加onmousemove鼠标移动的回调逻辑，并在鼠标弹起时清除，相当于onmousemove只在鼠标点击过程中生效
        };
      });
    },
  },
};
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    .left {
      width: calc((100% - 10px) / 2);
      box-sizing: border-box;
      float: left;
      background-color: pink;
      height: 100%;
    }
    .chuxin {
      width: 10px;
      height: 100%;
      float: left;
      background-color: #000;
      cursor: col-resize;
    }
    .right {
      width: calc((100% - 10px) / 2);
      box-sizing: border-box;
      float: left;
      background-color: #666;
      height: 100%;
    }
  }
}
</style>
