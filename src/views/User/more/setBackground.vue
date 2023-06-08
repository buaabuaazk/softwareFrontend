<template>
  <div class="main-container">
    <div class="left-nav-container">
      <LeftNav />
    </div>
    <div class="right-container">
      <div class="action-container">
        <el-button size="large" class="action-button" type="primary" @click="register">
          申请成为管理员
        </el-button>
        <el-button class="action-button" type="warning" size="large" @click="logout">
          退出登录
        </el-button>
        <el-button class="action-button" type="danger" size="large" @click="delete1">
          注销账号
        </el-button>
      </div>
      <div class="intro-container">
        <h3>操作说明</h3>
        <p>申请成为管理员：点击此按钮可以申请成为管理员。</p>
        <p>退出登录：点击此按钮可以退出当前登录账号。</p>
        <p>注销账号：点击此按钮可以注销当前账号并删除所有相关信息。</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import LeftNav from './components/leftNav.vue';
  import { mapState, mapMutations } from 'vuex';
  import axios from 'axios';

  export default {
    data(){
      return{
        url: require('../../../assets/images/5.jpg'),
        username: "",
        oldPassword: "",
        newPassword: "",
        IsNewPassword: "",
        formData1: new FormData(),
        nickname: '',
        email: '',
        role: '', 
        experience: '',
        level: '',
        avatar: '', 
        signature: ''
      }
    },
    components:{
      LeftNav
    },
    computed: {
    ...mapState([
      'count',
       'username_glo',
       'token_glo',
     ])
    },
    methods:{
      ...mapMutations([
        'increment',
        'decrement',
        'updateUsername_glo',
        'updateToken_glo'
      ]),
      getToken_glo(){
        return this.token_glo;
      },
      getUsername_glo(){
        return this.username_glo;
      },
      // async getInfo()
      // {
      //     axios.get('http://81.70.17.242:8000/user/info/',{
      //     headers: {
      //       Authorization: this.getToken_glo()
      //     }
      //   })
      //   .then(response => {
      //         this.username = response.data.username
      //         const code = response.data.code
      //         this.nickname = response.data.data.nickname
      //         this.email = response.data.data.email
      //         this.signature = response.data.data.signature
      //         this.avatar = response.data.data.avatar
      //         const error = response.data.error
      //         console.log(error)
      //         console.log(code)
      //         console.log(this.nickname)
      //       })    
        // } catch (error) {
        //   return this.$message.error("服务器开摆了");
        // }
      // },
      logout(){
        axios.post('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/logout',{},{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(this.getToken_glo())
              console.log(response.data)
              if(code === 200){
                this.$router.push('/visit')
                this.updateToken_glo('null');
                this.updateUsername_glo('null');
                console.log(this.getToken_glo)
                return this.$message.success("退出成功");
              }
              else if(code === 10200){
                return this.$message.error("请求方式错误");
              }
              else if(code === 10206){
                return this.$message.error("请登录");
              }
              else{
                return this.$message.error("用户被删除或异常");
              }
            }) 
      },
      delete1(){
        axios.delete('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/delete_account',{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(this.getToken_glo())
              console.log(response.data)
              if(code === 200){
                this.$router.push('/visit')
                return this.$message.success("退出成功");
              }
              else if(code === 10200){
                return this.$message.error("请求方式错误");
              }
              else if(code === 10206){
                return this.$message.error("请登录");
              }
              else{
                return this.$message.error("用户被删除或异常");
              }
            }) 
      },
      register(){
        axios.post('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/admin_apply',{},{
          headers: {
            Authorization: this.getToken_glo()
          }
        })
        .then(response => {
              const code = response.data.code
              console.log(this.getToken_glo())
              console.log(response.data)
              if(code === 200){
                this.$router.push('/visit')
                return this.$message.success("请求成功");
              }
              else if(code === 10200){
                return this.$message.error("请求方式错误");
              }
              else if(code === 10206){
                return this.$message.error("请登录");
              }
              else{
                return this.$message.error("用户被删除或无权限的操作");
              }
            }) 
      },
    },
    created() {
        
    }
  };
  </script>

  <style lang="less" scoped>
  .main-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.left-nav-container {
  flex: 1;
}
.right-container {
  flex: 3;
  padding-left: 2rem;
}

.action-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  margin-left: 150px;
}

.action-button {
  margin-bottom: 1rem;
}
.tooltip {
  margin-left: 10px;
}

.action-button {
  background: linear-gradient(to right, #108ff0, #84c6f2);
  color: white;
  margin-right: 10px;
}
  .button {
    /* 基础样式 */
  display: inline-block;
  padding: 12px 24px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: left;
  /* 背景色和文本颜色 */
  background-color: red;
  color: #fff;
  width: 110px;
  height: 60px;
  /* 悬停效果 */
  &:hover {
  background-color: #0056b3;
  }
  
  /* 激活效果 */
  &:active {
  background-color: red;
  }
  
  /* 禁用效果 */
  &:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  }
  }

  .intro-container {
  margin-top: -200px;
  margin-left: 50px;
}

.intro-container h3 {
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 50px;
}

.intro-container p {
  font-size: 16px;
  line-height: 30px;
  margin: 20px;
  margin-left: 50px;
}

  </style>