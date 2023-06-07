<template>
    <div style="min-height: 100vh; height:auto; border: 1px ;hidden #121313 ;z-index: 0 ;margin-top: 10px;display: flex;">
      <div style="width: 250px; height: 100%; margin-left: 250px;">
        <!--引入自定义左侧菜单栏-->
        <!-- <router-view name="leftNav" style="opacity:0.7"></router-view> -->
        <LeftNav />
      </div>
      <div style="width: 600px; min-height: 100vh; height: auto;margin-left: 10px;background-color:#E9EEF3; display: flex; flex-direction: column">
        <div style="width:100%;height:100px">
          <p>申请成为管理员</p>
          <button class="button" @click="register"><p>申请成为管理员</p></button>
        </div>
        <div style="width:100%;height:100px">
          <p>退出登录</p>
          <button class="button" @click="logout">退出登录</button>
        </div>
        <div style="width:100%;height:100px">
          <p>
            注销账号
          </p>
          <button class="button" @click="delete1">注销账号</button>
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
  .el-menu-vertical-demo{
    height: 100vh
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
  </style>