import { add } from "./utils/index";
const vue = () => {
  let chu_xin = "云层上的光";
  alert(chu_xin);
  console.log(add(1, 2));
};

vue();

export { vue };

export default {
  vue,
};
