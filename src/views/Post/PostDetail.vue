<template>
    <h>这里是详情</h>
  </template>
  
  <script>
  import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'PostDetail',
    data() {
      return {
        post: null,
      };
    },
    mounted() {
      const postId = this.$route.params.id;
  
      // 使用 postId 发送请求获取帖子详情
      /*axios
        .get(`http://81.70.17.242:8000/post/${postId}`)
        .then(response => {
          this.post = response.data;
        });*/
    },
  };
  </script>
  