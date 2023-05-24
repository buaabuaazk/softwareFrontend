<template>
  <div class="app-content">
    <sidebar>
    </sidebar>
    <div class="main-content">
        <div class="profile">
        <div class="avatar">
          <img :src="avatar" alt="User avatar" />
        </div>
        <div class="info">
          <h1>{{ nickname }}</h1>
          <p class="role">{{ role }}</p>
          <p>电子邮箱: {{ this.$root.globalData.username_global }}</p>
          <p>经验值: {{ experience }}</p>
          <p>等级: {{ level }}</p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'App',
    components: {
      Sidebar
    },
  data() {
    return {
      currentTab: '基本信息',
      password: 'encryptedpassword',
      email: 'user@email.com',
      nickname: 'Nickname',
      role: 'User',
      experience: 500,
      level: 5,
      registrationDate: '2023-05-22',
      avatar: require('../../assets/images/background1.jpg'),
      signature: 'This is my signature.',
    }
  },
}
</script>

<!--
<style scoped>
.container {
  display: flex;
}

.menu {
  flex-shrink: 0;
  width: 100px;
}

.menu button {
  border: none; /* 删除边框 */
  padding: 10px 20px; /* 增大按钮 */
  cursor: pointer; /* 按钮鼠标形状为手形 */
  background-color: #ddd; /* 设置背景颜色 */
  margin-bottom: 10px; /* 按钮间的间距 */
  width: 100%; /* 宽度填满父容器 */
}

.menu button:hover {
  background-color: #bbb; /* 鼠标悬停时的背景颜色 */
}

.content {
  flex-grow: 1;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}

.avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.info {
  margin-left: 20px;
  text-align: left;
}

.info p, .info h1 {
  margin: 5px 0;
}
.app-content {
  display: flex; /* 使子元素沿着水平线排列 */
  padding-top: 50px;
}

.sidebar {
  flex-shrink: 0; /* 防止侧边栏在空间不足时缩小 */
}

.main-content {
  flex-grow: 1; /* 让 main-content 元素占用剩余的空间 */
  /* 其他样式 */
}
</style>
-->

<style scoped>
.app-content {
  display: flex; 
  padding-top: 50px;
}

.sidebar {
  flex-shrink: 0; 
}

.main-content {
  flex-grow: 1;
  padding-left: 20px;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px;  /* Increased vertical padding */
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.info {
  margin-left: 50px;  /* Increased margin to create more space between the image and the text */
  text-align: left;
}

.info h1 {
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  color: #333;
}

.info p {
  margin: 5px 0;
  color: #666;
}

.info .role {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}
</style>

