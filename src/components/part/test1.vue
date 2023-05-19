<template>
    <div class="all">
        <div class="title">
            <h1>使用指南</h1>
        </div>
        <div class="introduce">
            <div class="one">
                <p>该网页面向以下几类用户</p>
            </div>
            <div class="second">
                <ul>访客：未注册或未登录的用户</ul>
                <ul>用户：已注册并登录的用户</ul>
                <ul>管理员：管理该系统的后台人员</ul>
            </div>
        </div>
        <div class="fangke">
            <p>访客无需登录即可享受巨量资源，检索万千文献</p>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style scoped>
    .all {
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-top: 0px;
        width: 80vw;
        height: 100vh;
        /*background-color: yellow;*/
        background-image: url('../../assets/6.jpg');
        /*background-repeat: no-repeat;*/
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 1;
    }

    .title{
        padding: 15px;
        font-size: 20px;
        width: 100%;
    }
    .title h1{
        text-align: center;
        color: white;
    }
    .introduce{
        font-style: normal;
        margin-left: 10px;
        font-size: 15px;
        color: white;
        display: flex;
    }
    .one {
        margin-left:400px;
    }
    .second{
        margin-right: 400px;
    }
    .fangke{
        margin-left: 300px;
        margin-right: 300px;
        height: 100px;
        background-size: cover;
        background-image: url('../../assets/7.jpg');
        border: solid;
        opacity: 0.5;
    }
</style>