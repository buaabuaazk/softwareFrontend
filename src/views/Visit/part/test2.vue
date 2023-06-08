<template>
    <section>
      <div class="container">
        <div class="background-img">
          <div class="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div class="pad">
            <div class="content">
              <h2>常见问题</h2>
              <p class="p1">Q1</p>
              <div class="rounded-box"><p>资源区有什么用</p></div>
              <p class="p2">A1</p>
              <div class="right">
                <div class="rounded-box2"><p>资源区可以查看海量资源并且可以下载到本地，同时也可以上传自己的文件。对于违规的文件可以进行举报</p></div>
              </div>
              <p class="p1">Q2</p>
              <div class="rounded-box"><p>发帖区有什么用</p></div>
              <p class="p2">A2</p>
              <div class="right">
                <div class="rounded-box2"><p>发帖区可以进行发帖，查看帖子和相应的评论。有些帖子只有达到一定等级才能查看</p></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "AnimatedBorder",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  padding-top: 0px;
  padding-bottom: 0px;
}

body {
  background-color: #111845;
}

.background-img {
  background-image: url("../../../assets/images/commonQuestion.png");
  height: 550px;
  width: 1000px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0% auto;
  padding: 20px;
  border: 1px solid #2a3cad;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #2a3cad;
  position: relative;
}

.content h2 {
  font-size: 19px;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: #111845a6;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgb(23, 32, 90);
  border: 2px solid #2a3cad;
  color: white;
  padding: 20px;
}

.box:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  pointer-events: none;
}

.box:hover:before {
  left: -50%;
  transform: skewX(-5deg);
}

.box .content {
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 1px solid #f0a591;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);
}

.box span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}

.box span:nth-child(1) {
  transform: rotate(0deg);
}
.box span:nth-child(1)::before {
  right: 0;
  top: 0;
  transform-origin: top right;
}

.box span:nth-child(2) {
  transform: rotate(90deg);
}
.box span:nth-child(2)::before {
  left: 0;
  top: 0;
  transform-origin: top left;
}

.box span:nth-child(3) {
  transform: rotate(180deg);
}
.box span:nth-child(3)::before {
  left: 0;
  top: 0;
  transform-origin: top left;
}
.box span:nth-child(4) {
  transform: rotate(270deg);
}
.box span:nth-child(4)::before {
  left: 0;
  top: 0;
  transform-origin: top left;
}
.box span:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #50dfdb;
  animation: animate 4s linear infinite; 
}

@keyframes animate {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
.p1{
  padding: 15px;
  text-align: left;
}
.p2{
  padding: 15px;
  text-align: right;
}
.rounded-box{
  border-radius: 25px;
  position: relative;
  padding: 20px;
  border: solid;
  width: 200px;
  height: auto;
  text-align: left;
}
.rounded-box2{
  border-radius: 25px;
  position: relative;
  padding: 20px;
  border: solid;
  width: 200px;
  height: auto;
  text-align: right;
}
.right{
  display: flex;
  justify-content: flex-end;
}
.content{
  height: auto;
  overflow: auto;
}
.content::-webkit-scrollbar {
  width: 0.5em; /* 定义滚动条宽度 */
  background-color: transparent; /* 设置滚动条背景颜色 */
}

.content::-webkit-scrollbar-thumb {
  background-color: #888; /* 设置滚动条的颜色 */
}

.content::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* 设置鼠标悬停时滚动条的颜色 */
}
.pad{
  height: 500px;
  overflow: auto;
}
</style>
