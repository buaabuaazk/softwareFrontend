<!-- Sidebar.vue -->
  <template>
    <aside class="sidebar">
      <div class="sidebar-content">
        <ul>
          <!-- 侧边栏的链接 -->
          <li><a href="/profile">个人信息</a></li>
          <li><a href="/profile/collection">我的收藏</a></li>
          <li><a href="/profile/release">我的发布</a></li>
          <li><a href="/profile/modify">修改信息</a></li>
        </ul>
      </div>
    </aside>
    
  </template>
  <script>
  export default {
    name: 'Sidebar',
    // 组件的逻辑代码
  }
  </script>
  
  <style scoped>
  .sidebar {
    /* 自定义侧边栏的样式 */
    width: 300px;
    background-color: #f0f0f0;
    /* ... */
  }

  .sidebar ul {
    padding: 0;
    margin: 0;
  }

  .sidebar ul li {
    list-style-type: none;
  }

.sidebar-content {
  width: 65%; /* 侧边栏占 2/3 宽度 */
  float: left;
  background-color: #f0f0f0;
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
