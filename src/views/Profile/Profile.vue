<template>
  <div class="app-content">
    <sidebar></sidebar>
    <div class="main-content">
      <div class="profile">
        <div class="avatar">
          <img :src="avatar" alt="User avatar" />
        </div>
        <div class="info">
          <h1>{{ nickname }}</h1>
          <p>账号：{{ getUsername_glo() }}</p>
          <p>手机号：{{ phonenumber }}</p>
          <p>电子邮箱: {{ getToken_glo() }}</p>
          <p>等级: {{ level }}</p>
          <p>经验值: {{ experience }}</p>
          <div class="demo-progress">
            <el-progress :percentage="60" />
          </div>
          <p>个性签名：{{ signature }}</p>
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
      username: 'zk3',
      phonenumber: '15832369597',
      currentTab: '基本信息',
      password: 'encryptedpassword',
      email: 'user@email.com',
      nickname: 'Nickname',
      experience: 30,
      level: 5,
      avatar: require('../../assets/images/background1.jpg'),
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
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    incrementAndLog() {
      this.increment();
      console.log(this.count);
    },
    decrementAndLog() {
      this.decrement();
      console.log(this.count);
    },
    getUsername_glo() {
      return this.username_glo;
    },
    getToken_glo(){
      return this.token_glo;
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
