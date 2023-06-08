<template>
    <div class="head">
            <div class="title">
                <div style="width:15%">
                    <h2 style="color:burlywood">通知消息</h2>
                </div>
                <div style="width:55%"></div>
                <div style="width:30%">
                    <span>设置</span>
                    <el-icon><Edit></Edit></el-icon>
                </div>
            </div>
    </div>
    <div class="middle">
        <div style="width:30%">
            <h2 style="color:dimgray">最近收到的评论</h2>
        </div>
        <div style="width:70%"></div>
    </div>
    <div>
        <matrixVue></matrixVue>
    </div>
</template>
<script>
    import matrixVue from "../components/matrix.vue";
    export default{
      components:{
        matrixVue
    }
    }
</script>
<style scoped>
.head{
    border-bottom: groove;
    height: 10vh;
    display:flex;
}
.title{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
}
.middle{
    height: 8vh;
    border-bottom: groove;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>