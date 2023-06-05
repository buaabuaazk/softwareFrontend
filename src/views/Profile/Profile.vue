<template>
  <div class="app-content">
    <sidebar></sidebar>
    <div class="main-content">
      <div class="profile">
        <div class="avatar">
          <img :src="'data:image/png;base64,' + avatar" />
        </div>
        <div class="info">
          <h1>{{ user.nickname }}</h1>
          <p>账号:{{ getUsername_glo() }}</p>
          <p>电子邮箱: {{ user.email }}</p>
          <p>等级: {{ user.level }}</p>
          <p>经验值: {{ user.experience }}</p>
          <template>
        <font-awesome-icon icon="hotjar" />
      </template>
          <div class="demo-progress">
            <el-progress :percentage=user.experience/2 />
          </div>
          <p>个性签名：{{ user.signature }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '@/components/Sidebar.vue';
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      user: {},
      username: 'zk3',
      phonenumber: '15832369597',
      currentTab: '基本信息',
      password: 'encryptedpassword',
      email: 'user@email.com',
      nickname: 'Nickname',
      experience: 30,
      level: 5,
      avatar: '',
      signature: 'This is my signature.',
    }
  },
  computed: {
    ...mapState([
      'count',
      'username_glo',
      'token_glo'
    ])

  },
  mounted(){
    const data = {
    }
    axios.get('http://81.70.17.242:8000/user/'+this.username_glo+'/info',data,)
        .then(response => {
          const data = response.data;
          const code = response.data.code;
          if(code==200){
            this.user = data.data;
            console.log("cgl")
          }
          else{
            console.log(code)
          }
        })
        .catch(error =>{
            console.log(error)
            alert("未知错误，大概率没连服务器")
        })
    axios.get('http://81.70.17.242:8000/user/' + this.username_glo + '/get_avatar', data)
      .then(response => {
            const code = response.data.code;
            const data = response.data;
            if(code==200){
              console.log("cgl_avatar")
              console.log("avatar:"+data.avatar);
              this.avatar = data.avatar;
            }
            else{
              console.log("code_avatar:"+code)
              console.log(this.token_glo)
            }
          })
          .catch(error =>{
              console.log(error)
              alert("未知错误，大概率没连服务器")
          }) 
  },
  methods: {
    /*
    ...mapMutations([
      'increment',
      'decrement'
    ]),*/
    
    getUsername_glo() {
      return this.username_glo;
    },
    getToken_glo(){
      return this.token_glo;
    },
    base64ToImage(base64Data) {
      const image = new Image();
      image.src = base64Data;

      // 使用一个延迟操作来确保图片加载完成
      return new Promise((resolve, reject) => {
        image.onload = () => {
          resolve(image);
        };

        image.onerror = (error) => {
          reject(error);
        };
      });
    }
  }
}
</script>

<style scoped>
.app-content {
  display: flex;
  padding-top: 50px;
}

.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 250px;
}

.sidebar {
  flex-shrink: 0;
}

.main-content {
  flex-grow: 1;
  padding-left: 20px;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px;
  margin-right: 20px;
  background: linear-gradient(to bottom right, #ffffff, #f2f2f2);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-bottom: 20px;
}

.avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.info {
  margin-left: 50px;
  margin-bottom: 20px;
  text-align: left;
}

.info h1 {
  margin: 0;
  padding: 0;
  font-size: 2em;
  color: #000;
}

.info p {
  margin: 5px 0;
  color: #666;
  line-height: 1.5;
}

.info .role {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}
</style>
