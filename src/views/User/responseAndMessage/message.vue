<template>
    <div class="box">
      <div class="posts">
        <messages />
      </div>
      <div class="person">
        <personalVue />
      </div>
    </div>
  </template>
  <script >
import personalVue from '../components/personal.vue';
import messages from './messages.vue';
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
        messages,
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
      background-image: url('../../../assets/images/rain3.gif');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .posts{
      width: 50vw;
      height: 150vh;
      margin-top: 10px;
      margin-left: 100px;
      border: hidden;
      opacity: 0.5;
      background-color: black;
    }

  </style>
  