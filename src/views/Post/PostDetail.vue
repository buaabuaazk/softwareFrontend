<template>
  <div class="post-detail" v-if="post">
    <div class="post-author">
      <img :src="require('@/assets/images/inABind.png')" alt="作者头像" />
      <div class="author-info">
        <h3>{{ post.author }}</h3>
        <p>{{ formatTime(post.update_time) }}</p>
      </div>
    </div>
    <h2 class="post-title">{{ post.title }}</h2>
    <div class="post-content">
      <p v-html="formatContent(post.content)"></p>
    </div>
    <div class="navigation-bar">
      <p>{{ formatTime(post.update_time) }}</p>
      <!--<button @click="toggleLike" :class="{ 'liked': isLiked }">点赞11</button>-->
      <span style="margin-right: 20px;">
        <i
          class="fa"
          :class="['fa-thumbs-up', isLiked ? 'liked' : '']"
          @click="toggleLike"
          style="cursor: pointer;"
        ></i>
        {{ post.like_count }}
      </span>
      <button @click="commentPost()">评论</button>
      <button>收藏</button>
      <button @click="reportPost()">举报</button>
    </div>
    <div class="comments">
      <div v-for="comment in this.comment" :key="comment.id" class="comment">
        <div class="comment-author">
          <img :src="require('@/assets/images/background1.jpg')" alt="评论者头像" />
          <p>{{ comment.author.name }}</p>
        </div>
        <p class="comment-content">{{ comment.content }}</p>
        <div class="comment-actions">
          <button :style="{ backgroundColor: buttonColor}" :disabled="isClicked" @click="likeComment(comment.id)">点赞{{ comment.like_count }}</button>
          <button @click="reportComment(comment.id)">举报</button>
          <button @click="replyComment(comment.id)">回复</button>
          <button @click="toggleReplies(comment.id)">
            {{ comment.showReplies ? '隐藏回复' : '查看回复' }}
          </button>
        </div>
        <div class="replies" v-if="comment.showReplies">
          <p v-for="reply in comment.replies" :key="reply.id">{{ reply.content }}</p>
        </div>
      </div>
    </div>

    <!-- Modal section -->
    <div class="modal" v-if="showCommentModal">
      <input type="text" v-model="commentContent" />
      <p v-if="commentError">{{ commentError }}</p>
      <button @click="submitComment">提交</button>
      <button @click="toggleCommentModal">关闭</button>
    </div>
    <!-- 举报的弹框 -->
    <div class="modal" v-if="showReportModal">
      <input type="text" placeholder="请输入举报原因" v-model="reportContent" />
      <button @click="submitReport">提交</button>
      <button @click="toggleReportModal">关闭</button>
    </div>
    <!-- Feedback section -->
    <div v-if="feedbackMessage">{{ feedbackMessage }}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { DataTexture } from 'three';
  import { mapState, mapMutations } from 'vuex'
  import { ref } from 'vue';
  import { faL } from '@fortawesome/free-solid-svg-icons';
  export default {
    name: 'PostDetail',
    data() {
      return {
        post: '',
        title:'',
        isLiked: ref(false),
        showCommentModal: false,
        showReportModal: false,
        commentContent: ref(''),
        commentReport: ref(''),
        commentError: ref(''),
        commentReport: ref(''),
        postId: '',  // 新增属性 postId
        reportContent: '',
        comment:'',
        isClicked: ref(false),
        buttonColor: '#00ffff',
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
      const postId = this.$route.params.id;
      this.postId = postId;
      const data = {}
      axios.get('http://81.70.17.242:8000/post/'+postId+'/get_post_by_id',data)
        .then(response => {
          const data = response.data;
          const code = response.data.code;
          if(code==200){
            this.post = data.data.post;
            console.log("cgl200")
            console.log(postId)
            console.log(this.post.title)
          }
          else{
            console.log(code)
          }
        })
        .catch(error =>{
            console.log(error)
            alert("未知错误")
        })
        axios.get('http://81.70.17.242:8000/comment/'+postId+'/get_all_comment',data)
        .then(response => {
          const data = response.data;
          const code = response.data.code;
          if(code==200){
            this.comment = data.data;
            console.log("cgl200")
            console.log(this.comment)
          }
          else{
            console.log(code)
          }
        })
        .catch(error =>{
            console.log(error)
            alert("未知错误")
        })
    },
    methods: {
      
        formatContent(str) {
          // 替换空格
          let replacedSpaces = str.replace(/ /g, '&nbsp;');
          // 替换换行符
          let replacedNewlines = replacedSpaces.replace(/\n/g, '<br>');
          return replacedNewlines;
        },
      toggleLike() {
        
        this.isLiked = !this.isLiked;
        //执行点赞或取消点赞的逻辑
        if (this.isLiked) {
          //点赞
          const data = {
            title:this.post.title,
          };
          axios.post('http://81.70.17.242:8000/post/' + this.username_glo + '/like', data, {
            headers: {
              Authorization: this.token_glo//待更新
            }
          })
            .then(response => {
              var code = ''
              code = response.data.code
              if(code == 200) {
                console.log("cgl111")
                this.post.like_count++;
              } else {
                console.log('error code :'+code)
                console.log(this.post.title)
                //console.log(this.token_glo)
                console.log(this.username_glo)
              }
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          //取消点赞
          const data = {
            title:this.post.title,
          };
          axios.post('http://81.70.17.242:8000/post/' + this.username_glo + '/unlike', data, {
            headers: {
              Authorization: this.token_glo//待更新
            }
          })
            .then(response => {
              var code = ''
              code = response.data.code
              if(code == 200) {
                console.log("cgl111")
                this.post.like_count--;
              } else {
                console.log('error code :'+code)
                console.log(this.post.title)
                //console.log(this.token_glo)
                console.log(this.username_glo)
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
      },
      commentPost() {
        this.toggleCommentModal();
      },
      reportPost() {
        this.toggleReportModal();
      },
      toggleCommentModal() {
        this.showCommentModal = !this.showCommentModal;
        // Clear the comment content and error when toggling the modal
        this.commentContent = '';
        this.commentError = '';
      },
      toggleReportModal() {
        this.showReportModal = !this.showReportModal;
        // Clear the comment content and error when toggling the modal
        this.reportContent = '';
        //this.commentError = '';
      },
      submitReport(){
        console.log(this.reportContent);
        alert("举报成功，感谢你为维护社区环境作出的努力")
      },
      submitComment() {
        // Check if the comment is empty
        if (!this.commentContent.trim()) {
          this.commentError = '评论不能为空';
          return;
        }
        // Implement comment submission logic here
        console.log('Submit comment:', this.commentContent);
        //请求后端
        const data = {
          content: this.commentContent,
          post_id: this.postId,
        };
        axios.post('http://81.70.17.242:8000/comment/' + this.postId + '/post', data, {
          headers: {
            Authorization: this.token_glo//待更新
          }
        })
          .then(response => {
            var code = ''
            code = response.data.code
            console.log('code:'+code)
            if(code === 200){
              alert('评论发布成功！')
              //待增加一个跳转
            }
          })
          .catch(error => {
            console.log(error)
          })
        this.toggleCommentModal();
      },
      savePost(){
        //暂不启用
      },
      likeComment(idd){
        const data = {}
        axios.post('http://81.70.17.242:8000/comment/' +idd+ '/like', data, {
          headers: {
            Authorization: this.token_glo//待更新
          }
        })
        .then(response => {
          const data = response.data;
          const code = response.data.code;
          console.log(code)
          this.isClicked = true;
          this.buttonColor='#87CEEB';
        })
        .catch(error =>{
            console.log(error)
            alert("未知错误")
        })
      },
      formatTime(isoTimeString) {
        let date = new Date(isoTimeString);
        let year = date.getUTCFullYear();
        let month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        let day = date.getUTCDate().toString().padStart(2, '0');
        let hours = (date.getUTCHours()+8).toString().padStart(2, '0');
        let minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      },
    },
};
</script>

  
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

/* 可以在此添加其他样式 */
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.liked {
  color: blue;
}
.post-detail {
  margin: 0 auto;
  width: 80%;
  font-family: Arial, sans-serif;
  color: #333;
}
.click-button {
  background-color: blue;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.click-button.clicked {
  background-color: green;
}

.post-author {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 20px;
}
.post-author img,
.comment-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.author-info p {
  margin: 0;
  margin-left: 10px;
  font-weight: bold;
}

.post-title {
  font-size: 2em;
  margin-top: 20px;
  color: #444;
}

.post-content {
  margin-top: 20px;
  font-size: 1.2em;
  line-height: 1.6;
  text-align: justify;
  
}
.post-content p {
  margin-top: 20px;
}

.comments {
  margin-top: 40px;
}

.comment {
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.comment-author {
  display: flex;
  align-items: center;
}

.comment-content {
  margin-top: 10px;
  font-size: 1.1em;
}

.comment-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.comment-actions button {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 0.9em;
  color: #444;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.navigation-bar {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.navigation-bar button {
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #888;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal1{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.modal input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.modal button {
  margin-top: 10px;
  padding: 10px 20px;
  color: #fff;
  background-color: #888;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
