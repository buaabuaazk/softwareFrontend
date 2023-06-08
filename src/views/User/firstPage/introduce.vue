<template>
  <div class="box">
    <div class="posts">
      <popPost>
        <div class="posts-container">
          <div class="forum-post" v-for="(post, index) in posts" :key="index">
            <div class="post-info" @click="navigateToPost(post.url,post.level)">
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
      </popPost>
    </div>
    <div class="person">
      <div class="personPost">
        <div class="personPostTop">
          <!-- <div class="personPostTopCenter"> -->
          <div class="level">
            <el-icon style="font-size: 25px;padding: 2px;margin-right: 5px;margin-top: 5px;"><User /></el-icon>
            <div class="">创作中心</div>
              <!-- <a href="/user/level"> -->
                <div class="lv">
                  Lv {{ level }}
                </div>
              <!-- </a> -->
          </div>
          <!-- </div> -->
        </div>
        <div class="function">
          <div class="functionFlex">
            <div class="function1">
              <div>
                发帖子
              </div>
              <div class="function1Icon">
                <el-button type="primary" @click="gotoPost" style="width:80px;height:50px;opacity:0.7"><el-icon style="font-size:20px"><ChatDotRound /></el-icon></el-button> 
              </div>
            </div>
            <div class="function2">
              <div>
                交作业
              </div>
              <div class="function2Icon">
                <el-button type="success" @click="gotoSpoc" style="width:80px;height:50px;opacity:0.7"><el-icon style="font-size:20px"><Platform /></el-icon></el-button> 
              </div>
            </div>
            <div class="function3">
              <div>
                找资源
              </div>
              <div class="function3Icon">
                <el-button type="warning" @click="gotoResearch" style="width:80px;height:50px;opacity:0.7"><el-icon style="font-size:20px"><Collection /></el-icon></el-button> 
              </div>
            </div>
          </div>
        </div>
        <el-carousel  direction="vertical" :autoplay="true" :interval="5000" :arrow="always" class="information">
          <el-carousel-item class="informationFlex" style="background-color: #99a9bf;">
            <div class="information1">
              <div>
                关注数
              </div>
              <div style="justify-content: center;display: flex;">
                <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                  {{ readCount }}
                </div>
              </div>
            </div>
            <div class="information2">
              <div>
                粉丝数
              </div>
              <div style="justify-content: center;display: flex">
                <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                  {{ likeCount }}
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item style="background-color: #d3dce6;" class="information4">
            <div style=" justify-content: center;display: flex;">
            <div class="information3">
              <div>
                在线人数
              </div>
              <div style="justify-content: center;display: flex;">
                <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                  {{onlineCount}}
                </div>
              </div>
            </div>
            </div>
          </el-carousel-item>
          <el-carousel-item style="background-color: #777799;" class="information4">
            <div style=" justify-content: center;display: flex;">
            <div class="information3">
              <div>
                资源数量
              </div>
              <div style="justify-content: center;display: flex;">
                <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                  {{resourceCount}}
                </div>
              </div>
            </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="personLevel">
        <div style="height:8vh;align-items: center; justify-content: center; top:2px">
          <div style="height:5vh;margin-top:2vh">
            我的经验值
          </div>
        </div>
        <div style="height:10vh; width:100%; position:absolute; top:7vh; justify-content:center;display:flex">
          <div style="width:90%;">
            <el-progress :percentage= this.experience*100/20  
            :text-inside="true"
            :stroke-width="24"
            status="success"/>
          </div>
        </div>
        <div style="height:6vh; width:100%; position:absolute; top:13vh">
          <div style="font-size: 24px; color: aqua">
            规则说明
          </div>
        </div>
        <div style="height:10vh; width:100%; position:absolute; top:20vh; justify-content:center; display:flex">
          <div style="width:90%;">
          <p style="text-indent: 32px;line-height: 1.8;text-align: left;">用户每次登录、发帖、评论或被点赞等都会获得一定的经验值，当积累到一定经验值之后，用户会升级。</p>
          <p style="text-indent: 32px;text-align: left;line-height: 1.8;">对于不同等级的用户，权限也不相同。权限的设置包括阅读权限（高级用户可以对帖子上信息的浏览内容进行权限设置。对于被设置浏览内容权限的帖子的信息，只有等级高于一定级别的用户才能够查看完整的帖子信息）。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import axios from 'axios';
import introducePost from "./introducePost.vue";
import focusPost from "./focusPost.vue";
import popPostVue from './popPost.vue';
import { mapState, mapMutations } from 'vuex';
//const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
  export default{
    data() {
      return{
        readCount: 0,
        likeCount: 0,
        onlineCount: 0,
        resourceCount: 10,
        level: 1,
        experience: 1,
        isFirstLine: true,
        posts: [],
        avatar0:[],
        page: 1,
        perPage: 10,
        pages: [],
        showUserModal: false,
        currentUser: {},
        dialogVisible: false, // 控制模态框的显示/隐藏
        visible: false,
        f_author:'',
      }
    },
  components: {
    introducePost,
    focusPost,
    popPostVue,
  },
  computed: {
    ...mapState([
      'count',
       'username_glo',
       'token_glo'
     ]),
     displayedPosts() {
      return this.paginate(this.posts);
    }
  },
    mounted() {
    const data = {}
    axios.get('http://81.70.17.242:8000/post/'+this.username_glo+'/recommend', data)
      .then(response => {
        const data = response.data;
        this.posts = data.recommended_posts;
        console.log('follow:'+data.recommended_posts[0].title)
        if(true) {
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
  methods:{
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
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page - 1) * perPage;
      let to = page * perPage;
      return posts.slice(from, to);
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
      console.log(level)
      console.log("2222ppp+"+Math.floor(this.exp_glo/500))
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
    gotoPost: function() {
      this.$router.push('/user/postAndChat');
    },
    gotoSpoc: function(){
      window.location.href = 'https://spoc.buaa.edu.cn/spoc/rdmooc/rdMoocHome.do';
    },
    gotoResearch: function(){
      this.$router.push('/user/resource')
    },
    getFollowNum()
      {
          axios.get('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/get_follow_num',{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              this.readCount = response.data.follow_num
              console.log(this.readCount)
              console.log(response.data)
              console.log(code)
            })    
        // } catch (error) {
        //   return this.$message.error("服务器开摆了");
        // }
      },
      getFanNum()
      {
          axios.get('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/get_fans_num',{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              this.likeCount = response.data.fans_num
              console.log(this.likeCount)
              console.log(response.data)
              console.log(code)
            })    
        // } catch (error) {
        //   return this.$message.error("服务器开摆了");
        // }
      },
      getOnlineNum()
      {
          axios.get('http://81.70.17.242:8000/user/online_num')
        .then(response => {
              const code = response.data.code
              this.onlineCount = response.data.data.online_user_num
              console.log(this.onlineCount)
              console.log(response.data)
              console.log(code)
            })    
        // } catch (error) {
        //   return this.$message.error("服务器开摆了");
        // }
      },
      getLevel()
      {
          axios.get('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/check_level',{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              this.level = response.data.data.level
              this.experience = response.data.data.experience
              console.log(this.level)
              console.log(this.experience)
              console.log(response.data)
              console.log(code)
            })    
        // } catch (error) {
        //   return this.$message.error("服务器开摆了");
        // }
      },
      getResourceNum()
      {
          axios.get('http://81.70.17.242:8000/source/get_all')
        .then(response => {
              const code = response.data.code
              this.resourceCount = response.data.total_resources
              console.log(this.resourceCount)
              console.log(response.data)
              console.log(code)
            })    
        // .catch (error) {
        //   return this.$message.error("服务器开摆了");
        // }
      },
  },
  created(){
    this.getFanNum();
    this.getFollowNum();
    this.getOnlineNum();
    this.getLevel();
    this.getResourceNum();
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
    background-image: url('../../../assets/images/rain3.jpg');
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
    background-color: azure;
  }
  .person{
    background-color: antiquewhite;
    margin-top: 10px ;
    width: 25vw;
    height: 100vh;
    margin-left: 30px;
    display: block;
    
    
  }
  .personPost{
    display: grid;
    width: 25vw;
    height: 40vh;
    background-color: azure;
  }
  .personPostTop{
    display: flex;
    height: 5vh;
    justify-content: center;
  }
  .level{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lv{
    color: aqua;
  }

  .function{
    position: absolute;
    margin-top: 6vh;
    width: 25vw;
    height: 25vh;
    padding: 10px;
    align-items: center;
    justify-content: center; 
  }
  .functionFlex{
    display: flex;
    width: 22vw;
    height: 20vh;
  }
  .function1{
    width: 33.3%;
    position: absolute;
    left: 0;
    padding: 10px;
    border-radius: 4px;
  }
  .function1Icon{
    padding: 10px;
    width: 100px;
    height: 60px;
  }
  .function2{
    width: 33.3%;
    position: absolute;
    left: 33.3%;
    padding: 10px;
    border-radius: 4px;
  }
  .function2Icon{
    padding: 10px;
    width: 100%;
    height: 60px;
  }
  .function3{
    width: 33.3%;
    position: absolute;
    left: 66.6%;
    padding: 10px;
    border-radius: 4px;
  }
  .function3Icon{
    padding: 10px;
    width: 100%;
    height: 60px;
  }
  .information{
    position: absolute;
    margin-top: 20vh;
    width: 25vw;
    height: 20vh;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
  .informationFlex{
    display: flex;
    width: 23.6vw;
    height: 18vh;
  }
  .information1{
    width: 50%;
    position: absolute;
    right: 40%;
    padding: 10px;
    border-radius: 4px;
  }
  .information2{
    width: 50%;
    position: absolute;
    left: 40%;
    padding: 10px;
    border-radius: 4px;
  }
  .information3{
    width: 23.6vw;
    height: 2vh;
    position: absolute;
    justify-content: center;
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
  }
  .information4{
    width: 23.6vw;
    height: 18vh;
  }
  .personLevel{
    margin-top: 20px;
    display: grid;
    width: 25vw;
    height: 60vh;
    background-color: azure;
    position: absolute;
  }
  .first-line {
    margin-left: 0; /* 取消第一行的上边距 */
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
  width: 100%;
  color: #79afea;
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

