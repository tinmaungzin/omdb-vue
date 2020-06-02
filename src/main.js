import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/fonts/font-awesome.min.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
// import NProgress from 'nprogress';


// import "./assets/js/jquery-1.11.1.min.js";
// import "./assets/js/plugins.js";
// import "./assets/js/app.js";
window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

