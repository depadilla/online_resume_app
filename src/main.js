import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import twitter from "vue-twitter";

axios.default.baseURL = process.env.NODE_ENV === "development" ? "HTTP://localhost:3000" : "/";
// hello we will revisit the local host 3000 to update the URL

Vue.config.productionTip = false;
Vue.use(twitter);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
