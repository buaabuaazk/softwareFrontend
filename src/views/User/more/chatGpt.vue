<template>
  <div class="box">
    <el-input v-model="message" @keyup.enter="sendMessage" 
    :rows="5"
    type="textarea"
    placeholder="发送一条消息"
    class="input"/>
    <div style="width=90%; display:flex">
      <div style="width: 92%"></div>
      <div style="right:5% ;margin-top: 0px;">
        <button class="button" @click="sendMessage">发送</button>
      </div>
    </div>
    <div v-for="(msg, index) in messages" :key="index" class="chat">
      <div class="talk">
        <template v-if="index % 2 === 0">
          <el-icon style="font-size: 20px;color:antiquewhite">
            <position />
          </el-icon>
        </template>
        <template v-else>
          <el-icon style="font-size: 20px;color:antiquewhite">
            <Star />
          </el-icon>
        </template>
        <div style="color:aqua">
        {{ msg.content }}
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import chatgptAPI from '../../../api/chatgpt.js';
 
export default {
  data() {
    return {
      message: '',
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      try {
      //console.log(this.message);
      //this.messages=[];
      this.messages.push({"role": "user", "content": this.message})
      const response = await chatgptAPI.getResponse(this.message,this.messages);
      const content = response['choices'][0]['message']['content'];
      console.log(content)
      this.messages.push({"role": "assistant", "content": response['choices'][0]['message']['content']});
      console.log(this.messages);
      this.message='';
      }
      catch (error){
        console.error(error);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.box{
  width: 98vw;
  height: 100vh;
  background-color: #333;
  display: block;
  justify-content: center;
}
.input{
  width: 90%;
  height: 20%;
  margin-top : 1vh;
  padding: 15px;
}
.chat{
  height: 10vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.talk{
  width: 70%;
  border: solid;
  margin: 7px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  /* 基础样式 */
display: inline-block;
padding: 12px 24px;
font-size: 16px;
font-weight: bold;
text-decoration: none;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s ease;
text-align: left;
/* 背景色和文本颜色 */
background-color: #222;
color: #fff;

/* 悬停效果 */
&:hover {
background-color: #0056b3;
}

/* 激活效果 */
&:active {
background-color: red;
}

/* 禁用效果 */
&:disabled {
background-color: #ccc;
cursor: not-allowed;
}
}
</style>