<template>
    <div style="height: 652px; border: 1px ;hidden #121313 ;z-index: 0 ;margin-top: 10px;display: flex;">
      <div style="width: 250px; height: 100%; margin-left: 250px;">
        <!--引入自定义左侧菜单栏-->
        <!-- <router-view name="leftNav" style="opacity:0.7"></router-view> -->
        <LeftNav />
      </div>
      <div style="width: 600px; height: 100%;margin-left: 10px;background-color:#E9EEF3; display: flex; flex-direction: column">
        <div style="border-bottom: groove; justify-content: center; display: flex; align-items: center;height:60px">
          <h2>账号与密码</h2>
        </div>
        <div>
          <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改用户名</p></div>
        </div>
        <div style="display: flex;margin-top:20px;justify-content: center;">
          <el-icon style="font-size: 24px;"><Edit /></el-icon>
          <el-input v-model="username" placeholder="请输入新的用户名" class="input"
      clearable
      rows="1"
      show-word-limit
      maxlength="10"
      type="textarea"/>
        </div>
        <div style="width:200px ;margin-top: 10px;">
          <button class="button" @click="changeUsername">确认</button>
        </div>
        <div style="margin-bottom: 10px;">
          <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改密码</p></div>
        </div>
        <div>
          <div style="width: 400px;display:flex;margin-top:20px;justify-content: center;">
            <el-icon style="font-size: 24px;"><Edit /></el-icon>
          <el-input v-model="oldPassword" placeholder="请输入原来的密码" class="input"
          clearable
      rows="1"
      show-word-limit
      maxlength="30"
      type="password"
      show-password/>
          </div>
        </div>
        <div style="width: 400px; display:flex;margin-top:20px;justify-content: center;">
          <el-icon style="font-size: 24px;"><Edit /></el-icon>
          <el-input v-model="newPassword" placeholder="请输入新的密码" class="input"
          clearable
      rows="1"
      show-word-limit
      maxlength="30"
      type="password"
      show-password/>
        </div>
        <div style="display: flex; width: 400px;margin-top:20px;justify-content: center;">
          <el-icon style="font-size: 24px;"><check /></el-icon>
          <el-input v-model="IsNewPassword" placeholder="确认密码" class="input"
      clearable
      rows="1"
      show-word-limit
      maxlength="30"
      type="password"
      show-password/>
        </div>
        <div style="width:200px ;margin-top: 10px;">
          <button class="button" @click="changePassword">确认</button>
        </div>
        <div>
          <div style="width: 200px;margin-top: 20px;"><p style="font-size: 24px;">修改头像</p></div>
        </div>
        <div style="width:200px">
        <el-upload
          ref="formData1"
          :auto-upload="true"
          :http-request="upload"
        >
          <template #trigger>
            <el-avatar
            :size="80"
            :src="url"
            ></el-avatar>
          </template>   
          <div style="width:200px ;margin-top: 10px;">
            <button class="button" @click="changeImage">确认</button>
          </div>
        </el-upload>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import LeftNav from './components/leftNav.vue';

  export default {
    data(){
      return{
        url: require('../../../assets/images/5.jpg'),
        username: "",
        oldPassword: "",
        newPassword: "",
        IsNewPassword: "",
        formData1: new FormData(),
      }
    },
    components:{
      LeftNav
    },
    methods:{
      changeUsername(){

      },
      changePassword(){

      },
      changeImage(){

      },
      async upload(params) {  
        this.formData1.append('file', params.file)
        // console.log(this.$root.globalData.token_global);
      },
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
  background-color: #222;
  color: #fff;
  
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