<template>
    <div class="home" style="z-index: 0">
      <!--  头部   -->
      <header class="header" ref="vantaRef" style="width: 100vw; background-color: yellow;height: 100vh; opacity:0.9; z-index:0 ">
        <!--  轮播图   -->
        <div class="carousel-container">
          <div class="carousel-item" v-for="(item, index) in carouselItems" :key="index" :class="{ active: index === activeIndex }">
            <img :src="item.url" alt="">
            <div class="carousel-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        <!--  轮播图按钮   -->
          <div class="carousel-buttons">
            <button v-for="(item, index) in carouselItems" :key="index" @click="activeIndex = index" :class="{ active: index === activeIndex }"></button>
          </div>
        </div>

        <div class="content">
          <h1>Welcome to the Learning Life Platform</h1>
        </div>
      </header>
      <main>
        <div class="title">
          <ul>海量数据，毫秒响应</ul>
          <ul>学习和生活优质平台</ul>
        </div>
      </main>
      <el-container style="height: 652px; border: 1px hidden #121313 z-index: 0">
        <el-aside style="width: 250px; height: 100%">
          <!--引入自定义左侧菜单栏-->
          <!-- <router-view name="leftNav" style="opacity:0.7"></router-view> -->
          <div style="opacity: 0.7">
            <el-row>
              <el-col>
                <el-menu
                    class="el-menu-vertical-demo"
                    background-color="#E9EEF3"
                    text-color="black"
                    router
                    style="height: 650px,opacity: 0.7">
                  <!--    List    -->
                  <el-menu-item index="/visit" style="text-align: left">
                      <template #title>
                        <el-icon index="/visit"><Menu /></el-icon>
                        <span>List</span>
                      </template>
                  </el-menu-item>
                  <!--    Support    -->
                  <el-sub-menu style="text-align: left">
                    <template #title>
                      <el-icon><tickets /></el-icon>
                      <span>About</span>
                    </template>
                    <!--入门指南-->
                    <el-menu-item index="/test1">
                      <template #title>
                        <span>平台介绍</span>
                      </template>
                    </el-menu-item>              
                    <!--常见问题-->
                    <el-menu-item index="/test2">
                      <template #title>
                        <span>常见问题</span>
                      </template>
                    </el-menu-item>              
                  </el-sub-menu>
                  <el-menu-item index="/echarts" style="text-align: left">
                    <template #title>
                      <el-icon ><eleme /></el-icon>
                      <span>Echarts</span>
                    </template>
                  </el-menu-item>
                  <el-menu-item index="/contact" style="text-align: left">
                      <template #title>
                        <el-icon ><message /></el-icon>
                        <span>Contact</span>
                      </template>
                  </el-menu-item>
                  <el-menu-item  index="/show" style="text-align: left">
                    <template #title>
                      <el-icon ><Reading /></el-icon>
                      <span>HotPosts</span>
                    </template>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-aside>
        <el-main>
          <!--引入跳转路由-->
          <router-view style="opacity:0.7" ></router-view>
        </el-main>
      </el-container>
    </div>
    <div class="footbottom">
      <p>Copyright © 2021  All rights reserved.</p>
      <p>官方邮箱：</p>
      <p>粤ICP备2021021248号</p>
      <!-- {{ modifiedPath }} -->
    </div>
  </template>
  
  <script>
  import * as THREE from "three";
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import GLOBE from "vanta/src/vanta.globe";

  export default {
    data() {
      return {
        MainBackgroundImage: require("../../assets/images/course1.jpg"),
        carouselItems: [
        { url: require('../../assets/images/main.png'), title: 'Image 1', description: 'Description 1' },
        { url: require('../../assets/images/R.jpg'), title: 'Image 2', description: 'Description 2' },
        { url: require('../../assets/images/main3.jpg'), title: 'Image 3', description: 'Description 3' },
      ],
      activeIndex: 0,
      };
    },
    mounted() {
      this.startCarousel();
    },
    // computed: {
    //   modifiedPath() {
    //     const path = this.$router.path;
    //     const modified = path.replace('/', '');
    //     return modified; // 返回去掉 / 的字符串
    //   },
    // },
    methods: {
        startCarousel() {
          setInterval(() => {
            this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
          }, 3000);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        settings() {
          this.$router.push('/account');
        },
        gotoHome: function () {
          this.$router.push('/');
        },
        logout(){
          this.$router.push('/account');
        }
      },
      setup() {
        const vantaRef = ref(null);
        let vantaEffect = null;

        onMounted(() => {
          vantaEffect = GLOBE({
            el: vantaRef.value,
            THREE: THREE,
          });
        });

        onBeforeUnmount(() => {
          if (vantaEffect) {
            vantaEffect.destroy();
          }
        });

        return {
          vantaRef,
        };
      },
  }
  </script>
  
  <style scoped>
  .header {
    padding: 10px;
    background-color: #222;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    opacity: 0.8;
    position: relative;
  }
  .carousel-container {
    position: relative;
    margin-right: 150px;
    margin-top: 0px;
    bottom: 0;
    width: 600px;
    height: 450px; /* 轮播图容器的高度 */
    overflow: hidden;
  }
  
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    transition: opacity 0.3s ease;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #222;
  }
  
  .carousel-buttons {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .carousel-buttons button {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: gray;
    border: none;
    cursor: pointer;
  }
  
  .carousel-buttons button.active {
    background-color: white;
  }

  .content {
    margin-top: 350px;
    padding: 0px;
    text-align: center;
    color: cadetblue;
  }
  
  .section {
    padding: 20px;
  }
  
  .footer {
    text-align: center;
    padding: 20px;
    background-color: #f2f2f2;
    margin-top: 20px;
  }
  
  .img1 {
    width: 300px;
    height: 168.75px;
  }
  .title{
    line-height: 1.8;
    text-align: center;
    padding: 15px;
    background-color: #222;
    font-size: larger;
    color: #f2f2f2;
  }
  </style>
  