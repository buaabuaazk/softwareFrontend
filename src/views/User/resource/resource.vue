<template>
    <findResource></findResource>
    <div class="main">
      <commitFile class="commitFile"></commitFile>
      <personalFile class="personalFile"></personalFile>
    </div>
</template>
   
  <script >
import findResource from './findResource4.vue'
import commitFile from './commitFile.vue';
import personalFile from './personalFile.vue';
  export default {
   components:{
    findResource,
    commitFile,
    personalFile
   }
  }
  </script>
   
  <style lang="less" scoped>
  .main{
    display: flex;
  }
  .commitFile{
    width: 45vw;
    height: 50vh;
  }
  .personalFile{
    width: 55vw;
    height: 50vh;
   }
  </style>
  