<template>
  <div class="person">
    <div class="personPost">
      <div class="personPostTop">
        <!-- <div class="personPostTopCenter"> -->
        <div class="level">
          <el-icon style="font-size: 25px;padding: 2px;margin-right: 5px;margin-top: 5px;"><User /></el-icon>
          <div class="">创作中心</div>
            <!-- <a href="/user/level"> -->
              <div class="lv">
                Lv 1
              </div>
            <!-- </a> -->
        </div>
        <!-- </div> -->
      </div>
      <div class="function">
        <div class="functionFlex">
          <div class="function1">
            <div>
              发帖子
            </div>
            <div class="function1Icon">
              <el-button type="primary" @click="gotoPost" style="width:80px;height:50px;opacity:0.7"><el-icon style="font-size:20px"><ChatDotRound /></el-icon></el-button> 
            </div>
          </div>
          <div class="function2">
            <div>
              交作业
            </div>
            <div class="function2Icon">
              <el-button type="success" @click="gotoSpoc" style="width:80px;height:50px;opacity:0.7"><el-icon style="font-size:20px"><Platform /></el-icon></el-button> 
            </div>
          </div>
          <div class="function3">
            <div>
              找资源
            </div>
            <div class="function3Icon">
              <el-button type="warning" @click="gotoResearch" style="width:80px;height:50px;opacity:0.7"><el-icon style="font-size:20px"><Collection /></el-icon></el-button> 
            </div>
          </div>
        </div>
      </div>
      <el-carousel  direction="vertical" :autoplay="true" :interval="5000" :arrow="always" class="information">
        <el-carousel-item class="informationFlex" style="background-color: #99a9bf;">
          <div class="information1">
            <div>
              阅读量
            </div>
            <div style="justify-content: center;display: flex;">
              <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                {{readCount}}
              </div>
            </div>
          </div>
          <div class="information2">
            <div>
              点赞量
            </div>
            <div style="justify-content: center;display: flex">
              <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                {{ likeCount }}
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item style="background-color: #d3dce6;" class="information4">
          <div style=" justify-content: center;display: flex;">
          <div class="information3">
            <div>
              在线人数
            </div>
            <div style="justify-content: center;display: flex;">
              <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                {{onlineCount}}
              </div>
            </div>
          </div>
          </div>
        </el-carousel-item>
        <el-carousel-item style="background-color: #777799;" class="information4">
          <div style=" justify-content: center;display: flex;">
          <div class="information3">
            <div>
              资源数量
            </div>
            <div style="justify-content: center;display: flex;">
              <div style="border: hidden; width: 80px; height: 50px; background-color:#f1f1f1!important;align-items: center; justify-content: center; display:flex;">
                {{resourceCount}}
              </div>
            </div>
          </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="personLevel">
      <div style="height:8vh;align-items: center; justify-content: center; top:2px">
        <div style="height:5vh;margin-top:2vh">
          我的经验值
        </div>
      </div>
      <div style="height:10vh; width:100%; position:absolute; top:7vh; justify-content:center;display:flex">
        <div style="width:90%;">
          <el-progress :percentage="50" 
          :text-inside="true"
          :stroke-width="24"
          status="success"/>
        </div>
      </div>
      <div style="height:6vh; width:100%; position:absolute; top:13vh">
        <div style="font-size: 24px; color: aqua">
          规则说明
        </div>
      </div>
      <div style="height:10vh; width:100%; position:absolute; top:20vh; justify-content:center; display:flex">
        <div style="width:90%;">
        <p style="text-indent: 32px;line-height: 1.8;text-align: left;">用户每次登录、发帖、评论或被点赞等都会获得一定的经验值，当积累到一定经验值之后，用户会升级。</p>
        <p style="text-indent: 32px;text-align: left;line-height: 1.8;">对于不同等级的用户，权限也不相同。权限的设置包括阅读权限（高级用户可以对帖子上信息的浏览内容进行权限设置。对于被设置浏览内容权限的帖子的信息，只有等级高于一定级别的用户才能够查看完整的帖子信息）。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import introducePost from "./introducePost.vue";
import focusPost from "./focusPost.vue";
import popPostVue from './popPost.vue';
//const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
export default{
  data() {
    return{
      readCount: 0,
      likeCount: 0,
      onlineCount: 0,
      resourceCount: 0,
      isFirstLine: true,
    }
  },
components: {
  introducePost,
  focusPost,
  popPostVue
},
methods:{
  gotoPost: function() {
    this.$router.push('/user/postAndChat');
  },
  gotoSpoc: function(){
    window.location.href = 'https://spoc.buaa.edu.cn/spoc/rdmooc/rdMoocHome.do';
  },
  gotoResearch: function(){
    this.$router.push('/user/resource')
  }
}
}
</script>
<style scoped>
.person{
  background-color: antiquewhite;
  margin-top: 10px ;
  width: 25vw;
  height: 150vh;
  margin-left: 30px;
  display: block;
}
.personPost{
  display: grid;
  width: 25vw;
  height: 40vh;
  background-color: azure;
}
.personPostTop{
  display: flex;
  height: 5vh;
  justify-content: center;
}
.level{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lv{
  color: aqua;
}

.function{
  position: absolute;
  margin-top: 6vh;
  width: 25vw;
  height: 25vh;
  padding: 10px;
  align-items: center;
  justify-content: center; 
}
.functionFlex{
  display: flex;
  width: 22vw;
  height: 20vh;
}
.function1{
  width: 33.3%;
  position: absolute;
  left: 0;
  padding: 10px;
  border-radius: 4px;
}
.function1Icon{
  padding: 10px;
  width: 100px;
  height: 60px;
}
.function2{
  width: 33.3%;
  position: absolute;
  left: 33.3%;
  padding: 10px;
  border-radius: 4px;
}
.function2Icon{
  padding: 10px;
  width: 100%;
  height: 60px;
}
.function3{
  width: 33.3%;
  position: absolute;
  left: 66.6%;
  padding: 10px;
  border-radius: 4px;
}
.function3Icon{
  padding: 10px;
  width: 100%;
  height: 60px;
}
.information{
  position: absolute;
  margin-top: 20vh;
  width: 25vw;
  height: 20vh;
  padding: 10px;
  align-items: center;
  justify-content: center;
}
.informationFlex{
  display: flex;
  width: 23.6vw;
  height: 18vh;
}
.information1{
  width: 50%;
  position: absolute;
  right: 40%;
  padding: 10px;
  border-radius: 4px;
}
.information2{
  width: 50%;
  position: absolute;
  left: 40%;
  padding: 10px;
  border-radius: 4px;
}
.information3{
  width: 23.6vw;
  height: 2vh;
  position: absolute;
  justify-content: center;
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
}
.information4{
  width: 23.6vw;
  height: 18vh;
}
.personLevel{
  margin-top: 20px;
  display: grid;
  width: 25vw;
  height: 60vh;
  background-color: azure;
  position: absolute;
}
</style>
