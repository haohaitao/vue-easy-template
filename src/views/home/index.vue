<!--
 * @Description  : 
 * @Author       : pacino
 * @Date         : 2021-09-03 17:19:57
 * @LastEditTime : 2021-09-10 10:56:59
 * @LastEditors  : pacino
-->
<template>
  <div>
    <div>我是首页</div>
    <router-link to="/other">切换其它页</router-link>
  </div>
</template>

<script>
import { bbb } from "@/apis/homeApi.js";
export default {
  data() {
    return {};
  },
  created() {
    console.log("---home----");
    bbb().then(() => {
      // TODO
    });
  },
  methods: {},
};
</script>

<style scoped></style>
