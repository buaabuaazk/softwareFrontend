<template>
    <div class="box">
      <div class="posts">
        <responses2 />
      </div>
      <div class="person">
        <personalVue />
      </div>
    </div>
  </template>
  <script >
import personalVue from '../components/personal.vue';
import responses2 from './responses2.vue';
  //const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
    export default{
      data() {
        return{
          readCount: 0,
          likeCount: 0,
          onlineCount: 0,
          resourceCount: 0,
          isFirstLine: true,
        }
      },
    components: {
        personalVue,
        responses2,
    },
    methods:{
      gotoPost: function() {
        this.$router.push('/user/postAndChat');
      },
      gotoSpoc: function(){
        window.location.href = 'https://spoc.buaa.edu.cn/spoc/rdmooc/rdMoocHome.do';
      },
      gotoResearch: function(){
        this.$router.push('/user/resource')
      }
    }
  }
  </script>
  <style scoped>
    .box{
      display: flex;
      margin: 0px auto;
      padding: 0 16px;
      position: relative;
      background-color: antiquewhite;
      background-image: url('../../../assets/images/rain4.gif');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .posts{
      width: 50vw;
      min-height: 150vh;
      height: auto;
      margin-top: 10px;
      margin-left: 100px;
      border: hidden;
      opacity: 0.6;
    }

  </style>