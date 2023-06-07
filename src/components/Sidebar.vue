<!-- Sidebar.vue -->
<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <ul>
        <!-- 侧边栏的链接 -->
        <li><router-link to="/user/userProfile">个人信息</router-link></li>
        <li><router-link to="/profile/myrelease">我的发布</router-link></li>
        <li><router-link to="/profile/release">发布帖子</router-link></li>
      </ul>
    </div>
  </aside>
  
</template>
<script>
export default {
  name: 'Sidebar',
  // 组件的逻辑代码
  methods:{
    toModify(){
      this.$router.push('/profile/modify');
    }
  }
}
</script>

<style scoped>
.sidebar {
  /* 自定义侧边栏的样式 */
  width: 300px;
  background-color: #f5f5f3;
  /* ... */
}

.sidebar ul {
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  list-style-type: none;
  border: 3px solid #1f54c8; /* 添加边框样式 */
  padding: 0px; /* 添加内边距，使边框与内容有一定间距 */
}


.sidebar-content {
width: 65%; /* 侧边栏占 2/3 宽度 */
float: left;
background-color: #58c4e4;
}

.profile-content{
width: 35%; /* 个人信息占 1/3 宽度 */
float: right;
padding: 20px;
box-sizing: border-box;
}
.sidebar ul li a {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid #ddd;
}

.sidebar ul li a:hover {
  background-color: #ddd;
}
</style>
