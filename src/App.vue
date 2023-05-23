<template>
  <div id="app">
    <mainHeader v-if="$route.meta.mainNavShow"/>
    <router-view />
  </div>
</template>

<script>
import mainHeader from "./components/header/mainHeader";
export default {
  name: 'App',
  components: {
    mainHeader,
  },
  data() {
    return {
      globalData: {
        // 定义全局变量
        username_global: '',
        token_global: '',
      }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(241, 241, 241);
}
</style>