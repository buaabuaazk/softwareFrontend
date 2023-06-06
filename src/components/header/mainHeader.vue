<template>
    <div id="app">
      <header>
        <Navbar />
      </header>
    </div>
</template>
  
<script>
import Navbar from './Navbar';
  
export default {
    name: 'app',
    components: {
      Navbar
    }
}
</script>
  
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  
body {
    font-family: 'montserrat', sans-serif;
}
  
header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 10vh;
    background-color: #222;
    padding: 15px;
    z-index: 9999;
    opacity: 0.9;
}
</style>