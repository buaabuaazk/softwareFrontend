<template>
  <div id="app">
    <mainHeader />
    <router-view/>
  </div>
</template>

<script>
import mainHeader from "./components/header/mainHeader";
export default {
  name: 'App',
  components: {
    mainHeader
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