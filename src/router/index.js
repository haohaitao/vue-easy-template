/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-09-03 17:25:25
 * @LastEditTime : 2021-09-03 17:49:04
 * @LastEditors  : pacino
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home"),
      meta: { title: "home" },
    },
    {
      path: "/other",
      component: () => import("@/views/other"),
      name: "homePage",
      meta: { title: "other" },
    },
  ],
});
