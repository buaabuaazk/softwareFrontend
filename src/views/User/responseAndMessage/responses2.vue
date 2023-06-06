<template>
    <div class="body">
        <div class="block">
            <p style="font-size: 20px;">收到的点赞</p>    
        </div>
        <div v-for="(item, index) in likes" :key="index" >
            <div class="border">
            <!-- 在这里放置容器的内容 -->
            <!-- <div class="block"><p>{{item.id}}</p></div> 这里只是一个示例，可以根据需要自定义容器的内容 -->
            <el-avatar style="margin-top:5px"
            :src="this.avatar0[index]" alt="头像" class="img"
            ></el-avatar>
            <div class="block"><p>{{item.conducter}}在{{item.timestamp}}给你的{{item.post_title}}点赞了</p></div>
            <div><p>被点赞的类型为{{item.which_like}}</p></div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex';
  import axios from 'axios';
    export default{
        data() {
            return{
                username: '',
                images: [],
                names: [],
                time: [],
                url: [],
                avatar0: [],
                likes: [
                    {
                        "id": "1",
                        "post_title": "1",
                        "timestamp": "1",
                    },
                    {
                        "id": "1",
                        "post_title": "1",
                        "timestamp": "1",
                    }
                ],
            }
        },
        computed: {
            ...mapState([
            'count',
            'username_glo',
            'token_glo',
            ])
        },
        methods:{
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
            getLikes(){
                try{
                    axios.post('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/get_liked',{},{
                        headers: {
                            Authorization: this.getToken_glo()
                        }
                        })
                        .then(response => {
                            console.log(this.getToken_glo())
                            const code = response.data.code
                            this.likes = response.data.unread_likes
                            console.log(response.data)
                            console.log(code)
                            if(code === 200){
                                console.log(this.likes)
                                for(let i=0;i<this.likes.length;i++){
                                    axios.get('http://81.70.17.242:8000'+this.likes[i].conducter_avatar)
                                    .then(response => {
                                        console.log("path:"+response.data.avatar)
                                        const code = response.data.code;
                                        this.avatar0[i]=response.data.avatar;
                                        console.log("avatar:"+response.data.avatar)
                                        console.log(code)
                                    })
                                    .catch(error =>{
                                        console.log(error)
                                        alert("未知错误，大概率没连服务器")
                                    }) 
                                }
                            }
                        })       
                } catch (error) {
                    return this.$message.error("服务器开摆了");
                }
            },
            getImage(){
                try{
                    axios.post('http://81.70.17.242:8000/user/'+this.getUsername_glo()+'/get_liked',{},{
                        headers: {
                            Authorization: this.getToken_glo()
                        }
                        })
                        .then(response => {
                            console.log(this.getToken_glo())
                            const code = response.data.code
                            this.likes = response.data.unread_likes
                            console.log(response.data)
                            console.log(code)
                            if(code === 200){
                                console.log(this.likes)
                            }
                        })       
                } catch (error) {
                    return this.$message.error("服务器开摆了");
                }
            }
        },
        created(){
            //this.getInfo();
            this.getLikes();
        }
    }
</script>
<style scoped>
.body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
}
.block{
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.border{
    margin-top: 5px;
    color: #222;
    margin-bottom: 40px;
    width: 80%;
    transform: translateX(12%);
    background-color: #FFBB66;
    border-radius: 10px;
    display: block;
}
.img{
    left: 100px;
}
</style>