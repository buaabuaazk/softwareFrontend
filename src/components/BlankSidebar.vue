<!-- BlankSidebar.vue -->
<template>
  <aside class="sidebar">
    <div class="middle">
      <div class="sidebar-content">
        <ul>
          <li class="sidebar-item">
            <router-link to="/profile/release">发布帖子</router-link>
          </li>
          <img width="230" height="500" src="https://tpc.googlesyndication.com/daca_images/simgad/3946611849639402086" alt="图片描述">
        </ul>
      </div>  
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
  opacity: 0.6;
  /* ... */
}

.sidebar ul {
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  list-style-type: none;
   /* border: 3px solid #1f54c8;添加边框样式 */
  padding: 0px; /* 添加内边距，使边框与内容有一定间距 */
  
}

.middle{
  display: flex;
  justify-content: center;
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
.sidebar-item{
    padding: 10px;
    font-size: 18px;
    background-color: #239cd8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 1.0;
}
.sidebar ul li a:hover {
  background-color: #ddd;
}
</style>
