<template>
  <div id="app">
    <mainHeader v-if="$route.meta.mainNavShow"/>
    <router-view name="home" />
    <el-container style="height: 652px; border: 1px hidden #121313">
      <el-aside style="width: 250px; height: 100%">
        <!--引入自定义左侧菜单栏-->
        <leftNav v-if="$route.meta.leftNav"></leftNav>
      </el-aside>
      <el-main>
        <!--引入跳转路由-->
        <router-view name="list" v-if="$route.meta.list"></router-view>
        <router-view name="test1" v-if="$route.meta.test1"></router-view>
        <router-view name="test2" v-if="$route.meta.test2"></router-view>
        <router-view name="echart" v-if="$route.meta.echart"></router-view>
      </el-main>
  </el-container>
  <!-- <router-view name="foot" v-if="$route.meta.foot"></router-view> -->
  </div>
</template>

<script>
import mainHeader from "./views/header/mainHeader";
import LeftNav from '@/components/home/leftNav'
export default {
  name: 'App',
  components: {
    mainHeader,
    LeftNav
  },
  data() {
    return {

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