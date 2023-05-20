<template>
    <div class="box">
        <div ref="vantaRef" style="width: 100%; height: 100vh ;opacity:0.8">

        </div>
            <div class="banner">
                <h1>学习生活平台</h1>
                <p>该Web系统旨在为用户提供一个在线的学习生活平台。用户可以在该平台上浏览和下载各种教育资源，如课程材料、教科书、视频课程和习题集。用户还可以参加在线学习社区，与其他用户交流并分享学习经验和资源。</p>
                <div style="text-align:left ;margin-top: 15px">
                    <button class="button" @click="navigateToLogin">开始使用</button>
                </div>
            </div>
            <div class="logo">
            </div>
            <div class="mainFunction">
                <p>主要功能</p>
            </div>
            <div class="featureContainer">
                <div class="feature">
                  <el-icon style="font-size:24px;padding: 1px"><Reading /></el-icon>
                  <span>功能1</span>
                  <p>浏览各种教育资源</p>
                </div>
                <div class="feature2">
                  <el-icon style="font-size:24px;padding: 1px"><ChatLineSquare /></el-icon>
                  <span>功能2</span>
                  <p>与大佬一起探讨学术问题</p>
                </div>
                <div class="feature3">
                    <el-icon style="font-size:24px;padding: 1px"><Folder /></el-icon>
                    <span>功能3</span>
                    <p>方便管理个人资源</p>
                </div>
                <div class="feature4">
                    <el-icon style="font-size:24px;padding: 1px"><GoldMedal /></el-icon>
                    <span>功能4</span>
                    <p>积分系统激发学习乐趣</p>
                </div>
                <!-- 添加更多功能块 -->
            </div>
    </div>
</template>
  
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import WAVES from 'vanta/src/vanta.waves'; 
import { useRouter } from 'vue-router'

export default {
  setup() {
    const vantaRef = ref(null);
    let vantaEffect = null;

    onMounted(() => {
      vantaEffect = WAVES({
        el: vantaRef.value,
        THREE: THREE,
      });

      VANTA.WAVES({
        el: vantaRef.value,
        /*以下为样式配置*/
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x5f88,
        shininess: 76.0,
        waveHeight: 12.0,
        waveSpeed: 0.95,
        zoom: 0.89,
      });
    });

    onBeforeUnmount(() => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    });
    const router = useRouter();
    const navigateToLogin = () => {
      // 使用 Vue Router 导航到 /login 页面
      // 请确保在当前组件中引入了 Vue Router，并且已经正确配置了路由
      router.push('/login');
    };
    return {
      vantaRef,
      navigateToLogin,
    };
  },
};
</script>
  
<style lang="less" scoped>
  .box {
    position: relative;
  }
  
  .banner {
    width: 45%;
    height: 260px;
    z-index: 999;
    position: absolute;
    top: 10%;
    left: 2%;
    color: #fff;
    h1 {
      margin-left: 0;
      left: 0;
      font-size: 46px;
      text-align: left;
    }
    p {
      margin-top: 30px;
      font-size: 18px;
      text-align: left;
    }
    button {
                /* 基础样式 */
        display: inline-block;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-align: left;
        /* 背景色和文本颜色 */
        background-color: #007bff;
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
  }
  .logo{
    background-image: url('../../../assets/images/logo.jpg');
    z-index: 999;
    position: absolute;
    top: 10%;
    height: 260px;
    width: 45%;
    right: 3%;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
}
.mainFunction{
    position: absolute;
    top: calc(10% + 290px);
    text-align: left;
    left: 2%;
    width: 100%;
    height: 50px;
    z-index: 999;
    p{
        font-size: 31px;
        color: #222;
    }
}
.featureContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .feature {
    position: absolute;
    width: 25%;
    left: 0;
    padding: 10px;
    border-radius: 4px;
    top: calc(10% + 360px);
  }
  
  .feature span {
    font-size: 32px;
    margin-bottom: 5px;
  }
  .feature2 {
    position: absolute;
    width: 25%;
    left: 25%;
    padding: 10px;
    border-radius: 4px;
    top: calc(10% + 360px);
  }
  
  .feature2 span {
    font-size: 32px;
  }
  .feature4 {
    position: absolute;
    width: 25%;
    left: 75%;
    padding: 10px;
    border-radius: 4px;
    top: calc(10% + 360px);
  }
  
  .feature4 span {
    font-size: 32px;
  }
  .feature3 {
    position: absolute;
    width: 25%;
    left: 50%;
    padding: 10px;
    border-radius: 4px;
    top: calc(10% + 360px);
  }
  
  .feature3 span {
    font-size: 32px;
  }
</style>