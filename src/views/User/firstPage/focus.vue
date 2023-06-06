<template>
  <div id="app">
      <div class="app-content">
          <BlankSidebar></BlankSidebar>
      </div>
    <div class="posts-container">
      <div class="forum-post" v-for="(post, index) in posts" :key="index">
        <div class="post-info" @click="this.$router.push(post.url)">
          <img @click.stop="showDialog(post.author)" :src="this.avatar0[index]" alt="发帖人头像" />
          <div>{{ post.author }}</div>
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
        <div>
            <div v-if="visible" class="dialog">
            <div class="dialog-content">
              <p>你确定要关注此用户吗</p>
              <button @click="confirm">确定</button>
              <button @click="hideDialog">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex'
import BlankSidebar from '@/components/BlankSidebar.vue';
import { ref } from 'vue';
export default {
  name: "App",
  components: {
    BlankSidebar
  },
  computed: {
    ...mapState([
      'count',
      'username_glo',
      'token_glo',
      'exp_glo'
    ])
  },

  data() {
    return {
      posts: [],
      avatar0:[],
      showUserModal: false,
      currentUser: {},
      dialogVisible: false, // 控制模态框的显示/隐藏
      visible: false,
      f_author:'',
    };
  },
  mounted() {
    const data = {
      //author:this.username_glo
    }
    console.log(this.token_glo)
    console.log(this.username_glo)
    axios.get('http://81.70.17.242:8000/post/'+this.username_glo+'/get_follow_post', data,{
          headers: {
            Authorization: this.token_glo//待更新
          }
        })
      .then(response => {
        const data = response.data;
        const code = response.data.code;
        if(code == 200) {
          console.log('获取成功')
          this.posts = data.data.posts
          for(let i=0;i<this.posts.length;i++){
            axios.get('http://81.70.17.242:8000/user/'+this.posts[i].author+'/get_avatar',data) 
            .then(response => {
                  const code = response.data.code;
                  const data = response.data;
                  if(code==200){
                    console.log("cgl_avatar")
                    this.avatar0[i]=data.avatar
                    console.log("avatar:"+data.avatar)
                  }
                  else{
                    console.log("code_avatar:"+code)
                    console.log(this.token_glo)
                  }
                })
            .catch(error =>{
              console.log(error)
                alert("未知错误,大概率没连服务333器")
            }) 
          }
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
    ...mapMutations([
      'increment',
      'decrement',
      'updateUsername_glo',
      'updateToken_glo',
      'updateExp_glo'
    ]),
    showDialog(ass){
      this.visible = true;
      this.f_author = ass;
    },
    confirm(){
      const data={
        follow_user_name:this.f_author
      }
      axios.post('http://81.70.17.242:8000/user/'+this.username_glo+'/follow',data,{
          headers: {
            Authorization: this.token_glo//待更新
          }
        }) 
            .then(response => {
                  const code = response.data.code;
                  const data = response.data;
                  if(code==200){
                    alert('关注成功')                    
                  }
                  else{
                    console.log("code_:"+code)
                    console.log(this.token_glo)
                    if(code==10209){
                      alert('不能关注自己')
                    }
                    else if(code == 10210){
                      alert('已关注')
                    }
                  }
                })
            .catch(error =>{
              console.log(error)
                alert("未知错误，大概率没连服务333器")
            }) 
            this.visible=false
    },
    hideDialog(){
      this.visible=false
    },
    jump() {
      window.location.href = '/profile'
    },
    showUserInfo() {
      console.log('showUserInfo method called');
      this.dialogVisible = true;
      console.log('showUserInfo method called2');
    },
    navigateToPost(url,level){
      if(level>Math.floor(this.exp_glo/500)){
        alert('这个帖子需要'+level+'级才能查看，你的等级不够');
      }
      else{
        this.$router.push(url)
      }
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
.empty-sidebar {
  width: 33%;
  justify-content: left;
}

.sidebar-container {
  width: 30%;
  display: flex;
  justify-content: center;
}
.dialog {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
}

.dialog-content {
background-color: #fff;
padding: 20px;
border-radius: 4px;
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.dialog-content button {
margin: 10px;
}
.posts-container {
  width: 70%;
  color: #83b2e4;
}
.post-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
