/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-09-03 15:48:04
 * @LastEditTime : 2021-09-03 17:26:45
 * @LastEditors  : pacino
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
