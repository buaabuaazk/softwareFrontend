<template>
    <findResourceVue></findResourceVue>
    <commitFile></commitFile>
    <personalFile></personalFile>
</template>
   
  <script >
import findResourceVue from './findResource.vue'
import commitFile from './commitFile.vue';
import personalFile from './personalFile.vue';
  export default {
   components:{
    findResourceVue,
    commitFile,
    personalFile
   }
  }
  </script>
   
  <style lang="less" scoped>
   
  </style>
  