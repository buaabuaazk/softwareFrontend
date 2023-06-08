<template>
  <div class="background">
  <div class="post-detail" v-if="post">
    <div class="post-author">
      <img :src="avatar"/>
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
      <button @click="deletePost()">删除</button>
      <button @click="reportPost()">举报</button>
    </div>
    <div class="comments">
      <div v-for="(comment,index) in this.comment" :key="comment.id" class="comment">
        <div class="comment-author">
          <img :src="this.avatar0[index]" alt="评论者头像" />
          <p>{{ comment.author }}</p>
        </div>
        <p>{{ formatTime(comment.created_at) }}</p>
        <p class="comment-content">{{ comment.content }}</p>
        <div class="comment-actions">
          <button 
            :style="{ backgroundColor: buttonColor}" 
            :disabled="isClicked[comment.id]" 
            @click="likeComment(comment.id)"
          >
          点赞{{ comment.like_count }}</button>
          <button @click="reportComment(comment.id)">举报</button>
          <button @click="replyComment(comment.id)">回复</button>
        </div>
        <div class="replies">
          <div v-for="reply in comment.replies" :key="reply.id" class="reply">
            <!-- 评论的评论的详细内容 -->
            <div class="reply-author">
              <img :src="avatar" alt="作者头像" />
              <p>{{ reply.author }}</p>
            </div>
            <div class="reply-content">
              
                <p>{{ reply.content }}</p>
                <p>{{  formatTime(reply.created_at) }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 评论的弹框 -->
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
    <!-- 评论评论的弹框 -->
    <div class="modal" v-if="showCommentModal0">
      <input type="text" v-model="commentContent0" />
      <p v-if="commentError">{{ commentError }}</p>
      <button @click="submitComment0">提交</button>
      <button @click="toggleCommentModal0">关闭</button>
    </div>
    <!-- 举报评论的弹框 -->
    <div class="modal" v-if="showReportModal00">
      <input type="text" placeholder="请输入举报原因" v-model="reportContent00" />
      <button @click="submitReport00">提交</button>
      <button @click="toggleReportModal00">关闭</button>
    </div>
    <!-- Feedback section -->
    <div v-if="feedbackMessage">{{ feedbackMessage }}</div>
  </div>
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
        showReplies: false,
        showCommentModal: false,
        showCommentModal0: false,
        showCommentModal00: false,
        showReportModal: false,
        showReportModal00: false,
        commentContent: ref(''),
        commentContent0: ref(''),
        commentContent00: ref(''),
        commentReport: ref(''),
        commentError: ref(''),
        commentReport: ref(''),
        postId: '',  // 新增属性 postId
        reportContent: '',
        reportContent00: '',
        comment:'',
        comment_id:'',
        isClicked: {
          '1': false,
          '2': false,
          '3': false,
          '4': false,
          '5': false,
          '6': false,
          '7': false,
          '8': false,
        },
        avatar: require('../../assets/images/background1.jpg'),
        avatar0:[],
        buttonColor: '#00ffff',
        author:'',
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
            this.author=this.post.author;
            this.title=this.post.title;
            console.log('0000:'+this.author)
            axios.get('http://81.70.17.242:8000/user/'+this.author+'/get_avatar',data) 
              .then(response => {
                    const code = response.data.code;
                    const data = response.data;
                    if(code==200){
                      console.log("cgl_avatar")
                      //console.log("avatar:"+data.avatar);
                      this.avatar = data.avatar;
                    }
                    else{
                      console.log("code_avatar:"+code)
                      console.log(this.token_glo)
                    }
                  })
              .catch(error =>{
                console.log(error)
                  alert("未知错误，大概率没连服务333器")
              }) 
          }
          else{
            console.log(code)
          }
        })
        .catch(error =>{
            console.log(error)
            alert("未知332错误")
        })
        axios.get('http://81.70.17.242:8000/comment/'+postId+'/get_all_comment',data)
        .then(response => {
          const data = response.data;
          const code = response.data.code;
          if(code==200){
            this.comment = data.data;
            console.log("cgl200")           
            for(let i=0;i<this.comment.length;i++){
              axios.get('http://81.70.17.242:8000/user/'+this.comment[i].author+'/get_avatar',data) 
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
                  alert("未知错误，大概率没连服务333器")
              }) 
            }
          }
          else{
            console.log(code)
          }
        })
        .catch(error =>{
            console.log(error)
            alert("未知错误2")
        })
    },
    methods: {
      toggleLike() {
        this.isLiked = !this.isLiked;
        //执行点赞或取消点赞的逻辑
        if (this.isLiked) {
          //点赞
          const data = {
            title:this.post.title,
          };
          axios.post('http://81.70.17.242:8000/post'  + '/like', data, {
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
          axios.post('http://81.70.17.242:8000/post'  + '/unlike', data, {
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
      toggleCommentModal0(idd) {
        this.showCommentModal0 = !this.showCommentModal0;
        // Clear the comment content and error when toggling the modal
        this.commentContent0 = '';
        this.commentError = '';
        this.comment_id=idd;
      },
      toggleCommentModal00(idd) {
        this.showReportModal00 = !this.showReportModal00;
        // Clear the comment content and error when toggling the modal
        this.reportContent = '';
        this.comment_id=idd;
        //this.commentError = '';
      },
      toggleReportModal() {
        this.showReportModal = !this.showReportModal;
        // Clear the comment content and error when toggling the modal
        this.reportContent = '';
        //this.commentError = '';
      },
      toggleReportModal00() {
        this.showReportModal00 = !this.showReportModal00;
        // Clear the comment content and error when toggling the modal
        this.reportContent = '';
        //this.commentError = '';
      },
      submitReport00(){
        const data = {
          reason: this.reportContent00,
        };
        axios.post('http://81.70.17.242:8000/comment/' + this.comment_id + '/report', data, {
          headers: {
            Authorization: this.token_glo
          }
        })
          .then(response => {
            console.log(this.reportContent00);
            console.log(response.data.code)
            alert("举报成功，感谢你为维护社区环境作出的努力")
            console.log(this.reportContent00);
            console.log(response.data.code)
          })
          .catch(error => {
            console.log(error)
          })
        
      },
      submitReport(){
        const data = {
          reason: this.commentContent,
          id: this.postId,
        };
        axios.post('http://81.70.17.242:8000/post/' +  'report', data, {
          headers: {
            Authorization: this.token_glo
          }
        })
          .then(response => {
            alert("举报成功，感谢你为维护社区环境作出的努力")
            console.log(this.reportContent);
            console.log(response.data.code)
          })
          .catch(error => {
            console.log(error)
          })
        
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
      submitComment0() {
        // post评论的评论
        if (!this.commentContent0.trim()) {
          this.commentError = '评论不能为空';
          return;
        }
        //请求后端
        const data = {
          content: this.commentContent0,
          comment_id: this.postId
        };
        axios.post('http://81.70.17.242:8000/comment/' + this.comment_id + '/comment', data, {
          headers: {
            Authorization: this.token_glo
          }
        })
          .then(response => {
            alert('评论的评论发布成功')
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
        const data = {
          title: this.title,
        }
        axios.post('http://81.70.17.242:8000/comment/' +idd+ '/like', data, {
          headers: {
            Authorization: this.token_glo//待更新
          }
        })
        .then(response => {
          const data = response.data;
          const code = response.data.code;
          console.log(code)
        })
        .catch(error =>{
            console.log(error)
            alert("未知错误1")
        })
      },
      toggleReplies(comment){
        comment.showReplies = !comment.showReplies;
      },
      replyComment(idd){
        this.toggleCommentModal0(idd);
      },
      reportComment(idd){
        this.toggleCommentModal00(idd);
      },
      deletePost(){
        var userResponse = confirm('你确定要删除这个帖子吗');
        if(userResponse) {
            console.log('用户点击了确定按钮，现在删除');
            const data = {
              title:this.title
            }
        axios.post('http://81.70.17.242:8000/post/' +this.username_glo+ '/delete', data, {
            headers: {
              Authorization: this.token_glo//待更新
            }
          })
          .then(response => {
            const data = response.data;
            const code = response.data.code;
            console.log(code)
            if(code==200)
              alert('删除成功');
            if(code==10205)
              alert('你不能删除别人的帖子')
            this.$router.push('/profile/myrelease');
          })
          .catch(error =>{
              console.log(error)
              alert("未知错误1")
          })
        } else {
            console.log('用户点击了取消按钮');
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
      formatContent(str) {
        // 替换空格
        let replacedSpaces = str.replace(/ /g, '&nbsp;');
        // 替换换行符
        let replacedNewlines = replacedSpaces.replace(/\n/g, '<br>');
        return replacedNewlines;
      },
    },

};
</script>

  
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

/* 可以在此添加其他样式 */
.background{
  background-image: url('../../../assets/images/rain6.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
  height: auto;
}
.spaced-between {
  display: flex;
  justify-content: space-between;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.replies {
  margin-top: 20px;
}

.reply {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.reply-author img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.reply-author p {
  font-weight: bold;
}

.reply-content {
  margin-top: 5px;
}

.reply-content p {
  margin-bottom: 5px;
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

.comment-author p{
    font-family: Arial, sans-serif; /* 设置字体 */
    font-size: 20px; /* 设置字号 */
    font-weight: bold;
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
