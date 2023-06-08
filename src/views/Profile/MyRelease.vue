<template>
  <div id="app">
    <div class="app-content">
      <sidebar></sidebar>
    </div>
    <div class="posts-container">
      <div class="forum-post" v-for="(post, index) in posts" :key="index">
        <div class="post-info" @click="() => $router.push(post.url)">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-content">{{ truncateString(post.content) }}</div>
          <!--<div>ID: {{ post.id }}</div>-->
          <div style="display: flex;">
            <span style="margin-right: 20px;">
              <font-awesome-icon icon="thumbs-up" /> {{ post.like_count }}
            </span>
            <span style="margin-right: 20px;">
              <font-awesome-icon icon="comment" /> {{ post.comment_count }}
            </span>
            <span class="post-time">
              {{ formatTime(post.update_time) }}
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex'
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: "App",
  components: {
    Sidebar
  },
  data() {
    return {
      posts: []
    };
  },
  computed: {
    ...mapState([
      'count',
      'username_glo',
      'token_glo'
    ])
  },
  mounted() {
    const data = {}
    axios.get('http://81.70.17.242:8000/post/'+this.username_glo+'/get_post_by_time', data)
      .then(response => {
        const data = response.data;
        const code = response.data.code;
        if(code == 200) {
          this.posts = data.data.posts
          console.log(data.data.posts[1])
          console.log("cgl111")
        } else {
          console.log('error code :'+code)
        }
      })
      .catch(error => {
        console.log(error)
        alert("未知错误，大概率没连服务器")
      })
  },
  methods: {
    jump() {
      window.location.href = '/user/postAndChat'
    },
    truncateString(str) {

      if (str.length <= 50) {
        return str;
      } else {
        return str.slice(0, 50) + "...";
      }
    },
    formatTime(isoTimeString) {
        let date = new Date(isoTimeString);
        let options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        // 指定中国的时区
        let formattedDate = date.toLocaleString('zh-CN', options);

        // 去掉日期中的 '/'，并将 ' ' 替换为 'T'，以符合 YYYY-MM-DDTHH:mm 的格式
        formattedDate = formattedDate.replace(/\//g, '-').replace(' ', ' ');

        return formattedDate;
      },

    getUsername_glo() {
      return this.username_glo;
    },
    getToken_glo(){
      return this.token_glo;
    },
    likePost(postId) {
      // Code for liking the post goes here
    },
    commentPost(postId) {
      // Code for commenting on the post goes here
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
  font-family: Arial, sans-serif;
}

.sidebar-container {
  width: 30%;
  display: flex;
  justify-content: center;
}

.posts-container {
  width: 70%;
  color: #83b2e4;
}

.forum-post {
  display: flex;
  border: 1px solid #c37272;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  width: 100%;
}

.post-info {
  text-align: left; 
  flex-grow: 1;
}

.post-time {
  font-size: 14px;
  color: #1e1818;
  margin-bottom: 10px;
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.app-content {
  display: flex;
  padding-top: 50px;
  background-color: #f3f1f1;
}

.post-content {
  font-size: 16px;
  color: #2f2f30;
  line-height: 1.5;
}

.like-button, .comment-button {
  border: none;
  background: none;
  color: #007BFF;
  cursor: pointer;
  margin: 10px;
}

</style>
