<template>
  <div class="box">
    <div class="posts">
      <IntroducePost />
    </div>
    <div class="person">
      <div class="personPost">
        <el-icon style="font-size: 15px;padding: 2px;margin-right: 5px;margin-top: 10px;"><User /></el-icon>
        <span>创作中心</span>
      </div>
      <div class="personFocus">

      </div>
    </div>
  </div>
</template>
<script >
  import introducePost from "./introducePost.vue";
  export default{
  components: {
    introducePost
  }
}
</script>
<style>
  .box{
    display: flex;
    margin: 0px auto;
    padding: 0 16px;
    position: relative;
    background-color: antiquewhite;
  }
  .posts{
    width: 50vw;
    height: 150vh;
    margin-top: 10px;
    margin-left: 100px;
    border: hidden;
    background-color: azure;
  }
  .person{
    display: block;
    background-color: antiquewhite;
    margin-top: 10px ;
    width: 30vw;
    height: 150vh;
    margin-left: 30px;
  }
  .personPost{
    width: 25vw;
    height: 40vh;
    background-color: azure;
  }
</style>

