<template>
    <div class="body">
        <div class="block">
            <p style="font-size: 20px;">收到的点赞</p>    
        </div>
        <div class="block">
            <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="img"
            />
            <p>**姓名在**时间为你点赞了</p>
        </div>
        <div class="block">
            <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <p>**姓名在**时间为你点赞了</p>
        </div>
        <div class="block">
            <p style="font-size: 20px;">收到的举报</p>    
        </div>
        <div class="block">
            <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="img"
            />
            <p>**姓名在**时间给你举报了</p>
        </div>
        <div class="block">
            <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <p>**姓名在**时间给你举报了</p>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                images: [],
                names: [],
                time: [],
                posts: []
            }
        }
    }
</script>
<style scoped>
.body{
    display: flex;
    flex-direction: column;
}
.block{
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img{
    left: 100px;
}
</style>