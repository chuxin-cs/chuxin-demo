import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import VirtualScroller from "vue-virtual-scroller";
Vue.use(VirtualScroller);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
