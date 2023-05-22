<template>
    <div class="h-6" />
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      @select="handleSelect"
    >
      <el-menu-item index="/user" class="user"><span style="color: #00a7d0;font-size:28px">趣学交流</span></el-menu-item>
      <el-sub-menu index="/user" class="firstPage">
        <template #title>首页</template>
        <el-menu-item index="/user/focus"><template #title><span>关注</span></template></el-menu-item>
        <el-menu-item index="/user/introduce"><template #title><span>推荐</span></template></el-menu-item>
        <el-menu-item index="/user/pop"><template #title><span>热榜</span></template></el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/user/resource" class="resource"><template #title><span>资源库</span></template></el-menu-item>
      <el-menu-item index="/user/postAndChat" class="post"><template #title><span>发帖区</span></template></el-menu-item>
      <el-menu-item class="text">
        <input type="text" class="text-input" placeholder="输入搜索关键字">
        <el-icon class="icon"><Search /></el-icon>
        <el-button type="primary" :icon="Search">Search</el-button>
      </el-menu-item>
      
      <el-sub-menu index="/user/message" class="message">
        <template #title>消息</template>
        <el-menu-item index="/user/">查看私信</el-menu-item>
        <el-menu-item index="/user/introduce">查看回复</el-menu-item>
        <el-menu-item index="/user/at">查看@提到我</el-menu-item>
        <el-menu-item index="/user/friend">查看好友申请</el-menu-item>
        <el-menu-item index="/user/collect">查看收藏</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="" class="more">
        <template #title>更多</template>
        <el-menu-item index="/user/person">个人中心</el-menu-item>
        <el-menu-item index="/user/contact">问题反馈</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script >

  </script>
<style scoped>
.h-6{
    position:fixed;
}
.user{
    padding-left: 100px;
    padding-right: 100px;
    color: blue;
    font-family: "Lucida Console";
}
.firstPage{
    padding-left: 260px;
    padding-right: 8px;
}
.resource{
    padding-right:30px;
}
.post{
    padding-right: 30px;
}
.text{
    padding-top: 11px;
}
.text-input{
    top:50%;
    width: 200px;
    height: 30px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}
.icon{
    position: absolute;
    top: 40%;
    right: 8px;
    color: #222;
    transform: translateX(-400%);
}

.more{
    right:0;
}
</style>