<template>
    <div id="app">
      <header>
        <Navbar />
      </header>
    </div>
</template>
  
<script>
import Navbar from '../Navbar/Navbar';
  
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
    width: 100vw;
    height: 10vh;
    background-color: #222;
    padding: 15px;
}
</style>