// import Vue from "vue"; filter (1) <<<
// import "./filters"; // we import filters folder here to use filter codes (2)
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./sass/main.scss";
import "normalize.css";
import "jquery";
import "popper.js";

// // // toUpperCase filter (1) <<<
// Vue.filter("uppercase", function (v) {
//   return v.toUpperCase();
// });
// // // Reversing filter (1) <<<
// Vue.filter("reversing", function (v) {
//   return v.split("").reverse().join("");
// });

// Vue.config.productionTip = false;
// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
createApp(App).use(store).use(router).mount("#app");
