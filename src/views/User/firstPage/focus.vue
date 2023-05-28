<template>
    <div class="slider-demo-block">
      <el-slider v-model="points" disabled/>
    </div>
  </template>
  
  <script>
  export default{
    data(){
        return{
            points: 25,
        }
    }
  }
  </script>
  <style scoped>
  .slider-demo-block {
    display: flex;
    align-items: center;
  }
  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
  </style>
  