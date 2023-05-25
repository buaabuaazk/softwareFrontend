<template>
  <div class="AdministratorLogin">
    <form @submit.prevent="submitForm">
      <h2>管理员登录</h2>
      <label>
        <input v-model="username" placeholder="账号" type="text" required>
      </label>
      <div class="remember-me">
        <input type="checkbox" id="remember" v-model="remember">
        <p style="font-size: 12px;" for="remember">记住用户名</p>
      </div>
      <label>
        <input v-model="password" placeholder="密码" type="password" required>
      </label>
      <button type="submit">登录</button>
      <div style="display: flex; justify-content: space-between;">
        <a href="/login/forgetpassword">忘记密码</a>
        <a href="/login">用户登录</a>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
     // remember: false
    }
  },

  mounted() {
    // 在页面加载时检查localStorage中是否有存储用户名
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
      this.remember = true;
    }
  },
  methods: {
    submitForm() {
      const data = {
        username: this.username,
        password: this.password
      };
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // 如果用户勾选了记住用户名，则将其存储到localStorage中
      if (this.remember) {
        localStorage.setItem('username', this.username);
      } else {
        localStorage.removeItem('username');
      }
      // 在这里，你可以添加发送请求到后端的代码
      console.log('start');
      axios.post('http://81.70.17.242:8000/admin/login',data)
        .then(response => {
          console.log('start_success');
          // 处理登录成功的情况
          console.log('success')
          var code = ''
          code = response.data.code
          console.log('code:'+code)
          if (code === 10201) {
            alert('用户名不存在！')
          } else if (code === 10202) {
            alert('密码错误！')
          } else if(code === 200){
            var token = ''
            token = response.data.data.token
            //打印一下
            console.log(token)
            console.log(code)
            //将username存到全局变量
            
            alert('登录成功')
            this.$router.push('/profile');
          }
          //将token存储到本地，以便之后使用
          //localStorage.setItem('token', token)
        })
        .catch(error => {
          console.log('start_error');
          var code = ''
          code = error.code
          console.log(code)
        })
    }
    }
  }

</script>

<style scoped>
.AdministratorLogin {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/background1.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  opacity: 0.6;
}

h2 {
  text-align: center;
  color: #333;
}

label {
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: #555;
}
input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

button {
  padding: 10px;
  font-size: 18px;
  background-color: #239cd8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 1.0;
}

input[type="checkbox"] {
  margin-right: 5px;
}

button:hover {
  background-color: #0056b3;
}
.remember-me {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  color: #555;
}
.remember-me label {
  margin-left: 5px;
}
</style>