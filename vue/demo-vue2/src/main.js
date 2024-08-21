import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.directive("valid-forbid", {
  bind(el) {
    el.addEventListener("input", (event) => {
      let value = event.target.value;
      // 定义正则表达式来替换非法字符
      value = value
        .replace(
          /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
          ""
        )
        .replace(/\s/g, "");
      // 设置处理后的值
      event.target.value = value;
      // 触发 Vue 的 input 事件以更新 v-model
      event.target.dispatchEvent(new Event("input"));
    });
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
