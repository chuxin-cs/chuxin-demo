import { createApp } from "vue";
import App from "./App.vue";

// 引入css
import "./styles/index.scss";
import "@unocss/reset/normalize.css";
import "virtual:uno.css";

createApp(App).mount("#app");
