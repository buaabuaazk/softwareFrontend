<template>
    <div class="image">
      <div class="table">
        <h2 style="color:cadetblue;width:120px">查找资料</h2>
        <findResource></findResource>
      </div>
      <!-- <div class="cars">
        <div>
        <el-carousel :interval="4000" type="card" height="200px" class="car">
          <el-carousel-item >
            <div class="back">
            <h3 text="2xl" justify="center">资源区</h3>
            <p style="color:#1989fa">查看上传下载任意资源</p>
            </div>
          </el-carousel-item>
          <el-carousel-item >
            <div class="back1">
            <h3 text="2xl" justify="center">发帖区</h3>
            <p style="color:#1989fa">和网友一起探讨学术和生活问题</p>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="back2">
            <h3 text="2xl" justify="center">管理员端</h3>
            <p style="color:#1989fa">加入管理端一起来维护秩序吧</p>
            </div>
          </el-carousel-item>
        </el-carousel>
        </div>
      </div> -->
    <div class="main">
      <h2 style="color:darkcyan">上传文件</h2>
      <commitFile class="commitFile"></commitFile>
    </div>
    <div class="main">
      <personalFile class="personalFile"></personalFile>
    </div>
    </div>
</template>
   
  <script >
import findResource from './findResource4.vue'
import commitFile from './commitFile.vue';
import personalFile from './personalFile.vue';
  export default {
   components:{
    findResource,
    commitFile,
    personalFile
   }
  }
  </script>
   
  <style lang="less" scoped>
  .image{
    background-image: url('../../../assets/images/preview.gif');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .table{
    padding: 30px;
    width: 80%;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
  .table .h2{
    padding-right: 30px;
  }
  .main{
    padding: 30px;
    width: 80%;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
  .commitFile{
    margin-top: 15px;
    width: 50vw;
    height: 50vh;
    opacity: 0.8;
  }
  .personalFile{
    margin-top: 15px;
    width: 55vw;
    height: 50vh;
    opacity: 0.8;
   }
   .cars {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    width: 50vw;
    height: 60vh;
    margin-top: 20px;
  }
  
   .car{
    margin-top:20px;
  }
  .back{
    height: 200px;
    background-image: url(../../../assets/images/home1.jpg);
  }
  .back1{
    height: 200px;
    background-image: url(../../../assets/images/home2.jpg);
  }
  .back2{
    height: 200px;
    background-image: url(../../../assets/images/home3.jpg);
  }
  </style>
  