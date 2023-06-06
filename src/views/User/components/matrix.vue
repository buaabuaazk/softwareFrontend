<template>
  <div class="container">
    <div class="bubble" v-for="(bubble, index) in bubbles" :key="index" :style="getBubbleStyle(bubble.bbColor)">
      <el-avatar style="margin-top:5px"
            :src="this.avatar0[index]" alt="头像" class="img"
            ></el-avatar>
      <div class="title">{{ bubble.post_title }}</div>
      <div class="post-info" @click="() => $router.push(bubble.post_url)">查看详情</div>
    </div>
<!--   
    <div class="middle">
      <h1>Speech<br>Bubbles</h1>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';
export default {
  data() {
    return {
          name:[
            'vouzenus1',
            'vouzenus2',
            'vouzenus3'
          ],
      bubbles: [],
      avatar0: [],
    };
  },
  computed: {
            ...mapState([
            'count',
            'username_glo',
            'token_glo',
            ])
        },
    created(){
      this.getComments()
    },
  methods: {
    ...mapMutations([
                'increment',
                'decrement'
            ]),
            getToken_glo(){
                return this.token_glo;
            },
            getUsername_glo(){
                return this.username_glo;
            },
            getComments(){
                try{
                    axios.post('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/get_commented',{},{
                        headers: {
                            Authorization: this.getToken_glo()
                        }
                        })
                        .then(response => {
                            const code = response.data.code
                            console.log(code)
                            this.bubbles = response.data.unread_comments
                            console.log(this.bubbles)
                            console.log(code)
                            if(code === 200){
                                console.log(response.data.unread_comments)
                                for(let i=0;i<this.bubbles.length;i++){
                                    axios.get('http://81.70.17.242:8000'+this.bubbles[i].conducter_avatar)
                                    .then(response => {
                                        console.log("path:"+response.data.avatar)
                                        const code = response.data.code;
                                        this.avatar0[i]=response.data.avatar;
                                        console.log("avatar:"+response.data.avatar)
                                        console.log(code)
                                    })
                                    .catch(error =>{
                                        console.log(error)
                                        alert("未知错误，大概率没连服务333器")
                                    }) 
                                }
                            }
                        })       
                } catch (error) {
                    return this.$message.error("服务器开摆了");
                }
            },
    getBubbleStyle(color) {
      return {
        '--bbColor': color,
      };
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin-inline: auto;
  font-family: sans-serif;
  display: grid;
  grid-template-areas:
    'br'
    'bc'  
    'bl';
  padding: 2rem;
  gap: 2rem;
}

 .bubble {
  --bbArrowSize: 1.5rem;
  --bbBorderRadius: 1rem;
  --bbPadding: 1rem;
  background: var(--bbColor);
  border-radius: var(--bbBorderRadius);
  padding: var(--bbPadding);
  position: relative;
} 

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}


.middle {
  grid-area: cc;
  align-self: center;
  justify-self: center;
  text-align: center;
  color: #222;
}
</style>