import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
<<<<<<< HEAD
import { Tweet, Moment, Timeline } from "vue-tweet-embed";
axios.default.baseURL = process.env.NODE_ENV === "development" ? "HTTP://localhost:3000" : "/";
=======

axios.default.baseURL =
  // process.env.NODE_ENV === "development" ? "https://salty-gorge-38704.herokuapp.com/api/students";
  process.env.NODE_ENV === "development" ? "localhost:3000" : "/";

>>>>>>> 490b3dd3829a4c6e0e36ce6016e7cbc20512296a
// hello we will revisit the local host 3000 to update the URL

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
