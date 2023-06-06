<template>
    <div class="user-home">
      <div class="user-home-top">
        <div class="avatar-container">
          <el-avatar
            shape="square"
            fit="fill"
            :src="url"
            style="height: 24px; width: 24px"
            :size="50"
          ></el-avatar>
        </div>
        <!-- 信息框 -->
        <div class="info-container">
          <!-- 用户基本信息 -->
          <div class="user-info">
            <!-- 用户名 -->
            <span class="user-name">{{ vouzenus }}</span>
            <!-- 性别  -->
            <!-- 根据性别展示不同icon -->
            <i class="el-icon-male" v-if="userInfo.gender === 'male'"></i>
            <i class="el-icon-female" v-if="userInfo.gender === 'female'"></i>
            <!-- 编辑按钮 -->
            <el-button
              icon="el-icon-edit"
              style="margin-left: auto"
              size="mini"
              >编辑信息</el-button>
            <!-- 关注按钮 -->
            <el-button
              icon="el-icon-plus"
              style="margin-left: auto"
              size="mini"
              >关注</el-button
            >
            <el-button
              icon="el-icon-check"
              style="margin-left: auto"
              size="mini"
              >{{ btnText }}</el-button>
          </div>
          <el-divider></el-divider>
          <!-- 用户关系  -->
          <ul class="user-relate">
            <!-- 动态数  -->
            <li>
              <span @click="goSocial">动态 0</span>
            </li>
            <el-divider direction="vertical"></el-divider>
            <!-- 关注数 -->
            <li>
              <span @click="goFollow">关注 0</span>
            </li>
            <el-divider direction="vertical"></el-divider>
            <!-- 粉丝数 -->
            <li>
              <span @click="goFan">粉丝 0</span>
            </li>
          </ul>
  
          <!-- 所在位置 -->
          <div class="location">
            <i class="el-icon-location-outline"></i>
            海淀区
          </div>
        </div>
      </div>
      <div class="user-home-mid">
        <!-- 个人简介 -->
        <!-- 听歌排行，最近一周/全部时间，播放最多的10首-->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserHome",
    methods: {            
      // 鼠标经过按钮，显示取消关注
      enterBtnText() {
        this.btnText = "取消关注";
      },
      outBtnText() {
        this.btnText = "已关注";
      },
      // 跳转到动态页面，并展示这个主页所有者的动态
      goSocial() {
      },
      goFollow() {
      },
      goFan() {
      },
      // 跳转到设置页面
      goSetting() {

      },
      // 获取最近播放歌曲列表
      getHistoryList() {
      },
      //展示全部时间
      showAll() {
      },
      //关注用户
      follow() {
      },
      //取消关注
      cancelFollow() {
      },
    },
    mounted() {
    },
    data() {
      return {
        url: require('../../../assets/images/5.jpg'),
        btnText: "已关注",
        user_id: 0,
        // 不完全的用户信息，只是用来在主页展示
        userInfo: {
            gender: 'male',
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .user-home {
    display: block;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-left: 10%;
    margin-right: 10%;
    padding: 20px;
  }
  .user-home-top {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatar-container {
    width: 200px;
    height: 200px;
    margin-right: 80px;
  }
  
  .info-container {
    font-size: 20px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
  }
  
  .user-name {
    font-size: 30px;
    font-weight: bold;
  }
  .el-icon-male {
    color: #409eff;
    margin-left: 10px;
  }
  .el-icon-female {
    color: #e03a24;
    margin-left: 10px;
  }
  .el-divider {
    margin: 10px;
  }
  .user-relate {
    padding: 10px;
    font-family: "Courier New", Courier, monospace;
  }
  
  .user-relate li {
    display: inline-block;
  }
  .user-relate :hover {
    color: #c20c0c;
    cursor: pointer;
  }
  .location {
    font-family: "Courier New", Courier, monospace;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .el-icon-location-outline {
    font-size: 24px;
    color: #e03a24;
    margin-right: 10px;
  }
  
  .user-home-mid {
    margin-top: 50px;
  }
  
  .user-recent-play {
    margin-bottom: 20px;
  }
  
  .title {
    font-family: "Courier New", Courier, monospace;
    color: #666;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 2px solid #c20c0c;
  }
  .time-op {
    font-size: 10px;
    float: right;
  }
  #op1 {
    font-weight: bold;
  }
  </style>