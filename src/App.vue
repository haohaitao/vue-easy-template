<!--
 * @Description  : 
 * @Author       : pacino
 * @Date         : 2021-09-03 18:01:12
 * @LastEditTime : 2021-09-09 15:03:10
 * @LastEditors  : pacino
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
