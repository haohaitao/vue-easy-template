/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-09-03 17:25:25
 * @LastEditTime : 2021-09-10 10:40:56
 * @LastEditors  : pacino
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName:"home"*/ "@/views/home/"),
      meta: { title: "home" },
    },
    {
      path: "/other",
      component: () => import(/* webpackChunkName:"other"*/ "@/views/other/"),
      name: "homePage",
      meta: { title: "other" },
    },
  ],
});
