// main.js
import { createApp } from "vue";
import "@/style/style.css";
import App from "./App.vue";
import router from "./router/router";

createApp(App).use(router).mount("#app");
