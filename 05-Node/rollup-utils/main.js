function Vue() {
  init();
}

let name = "Vue";

const init = () => {
  console.log(`我是init初始化函数:${name}`);
};

export default Vue;
