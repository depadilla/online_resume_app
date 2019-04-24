import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.default.baseURL =
  process.env.NODE_ENV === "development" ? "https://salty-gorge-38704.herokuapp.com/api/students" : "/";
// hello we will revisit the local host 3000 to update the URL

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
