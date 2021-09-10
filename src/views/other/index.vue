<!--
 * @Description  : 
 * @Author       : pacino
 * @Date         : 2021-09-03 17:43:23
 * @LastEditTime : 2021-09-10 10:57:09
 * @LastEditors  : pacino
-->
<template>
  <div>
    <div>我是其它页</div>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("---other----");
  },
};
</script>

<style scoped></style>
