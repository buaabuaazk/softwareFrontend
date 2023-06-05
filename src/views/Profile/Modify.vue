<template>
  <div class="app-content">
    <sidebar></sidebar>
    <div class="main-content">
      <div class="avatar">
          <img :src="avatar" alt="User avatar" />
        </div>
      <div class="profile">
        <div>
          <button @click="selectAvatar">上传头像</button>
          <input
            ref="fileInput"
            type="file"
            style="display: none"
            @change="uploadAvatar"
            accept="image/*"
          />
        </div>
        <div class="info">
          <h1>{{ nickname }}</h1>
          <p>{{ role }}</p>
          <p>{{ email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { mapState, mapMutations } from 'vuex';
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      currentTab: '基本信息',
      password: 'encryptedpassword',
      email: 'user@example.com',
      nickname: 'Nickname',
      role: 'User',
      experience: 500,
      level: 5,
      registrationDate: '2023-05-22',
      avatar: require('../../assets/images/background1.jpg'),
      signature: 'This is my signature.'
    };
  },
  computed: {
    ...mapState(['count', 'username_glo', 'token_glo'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    getToken_glo() {
      return this.token_glo;
    },
    selectAvatar() {
      this.$refs.fileInput.click();
    },
    convertImageToBase64(imageFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(imageFile);
      });
    },
    uploadAvatar(event) {
      const file = event.target.files[0];
      // 进行上传操作，例如使用FormData发送文件到服务器
      // 示例中仅打印文件信息
      const formData = new FormData();
      formData.append('avatar', file);
      axios.post('http://81.70.17.242:8000/user/' + this.username_glo + '/change_avatar', formData, {
        headers: {
          Authorization: this.token_glo//待更新
        }
      })
      .then(response => {
            const code = response.data.code;
            if(code==200){
              console.log("cgl")
            }
            else{
              console.log("code:"+code)
            }
          })
          .catch(error =>{
              console.log(error)
              alert("未知错误，大概率没连服务器")
          }) 
      console.log('Selected file:', file);
    }
  }
};
</script>

<style scoped>
.app-content {
  display: flex;
  padding-top: 50px;
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
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.avatar {
  position: relative;
}

.avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.avatar button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.info {
  margin-left: 50px;
  text-align: left;
}

.info h1 {
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  color: #333;
}

.info p {
  margin: 5px 0;
  color: #666;
}

.info .role {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}
</style>
