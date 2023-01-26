// ./src/main.js

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// if (localStorage.getItem("state")) {
//   pinia.state.value = JSON.parse(localStorage.getItem("state"));
// }

// watch(
//   pinia.state,
//   (newState) => {
//     console.log({ newState });
//     localStorage.setItem("state", JSON.stringify(newState));
//   },
//   {
//     deep: true,
//   }
// );

app.use(pinia);
app.use(router);

app.mount("#app");
