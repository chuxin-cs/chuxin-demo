import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";

function add(num1: any, num2: any): number {
  return num1 + num2;
}

console.log(add(1, 2));

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
