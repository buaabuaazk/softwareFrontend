<template>
  <div class="Register">
    <form @submit.prevent="submitForm">
      <h2>注册</h2>
      <label>
        <input v-model="username" placeholder="账号" type="text" required>
      </label>
      <label>
        <input v-model="phonenumber" placeholder="手机号" type="text" required>
      </label>
      <label>
        <input v-model="email" placeholder="邮箱" type="text" required>
      </label>
      <label>
        <input v-model="password" placeholder="密码" type="password" required>
      </label>
      <label>
        <input v-model="passwordRepeat" placeholder="确认密码" type="password" required>
      </label>
      <button type="submit" @click="registerClick">注册</button>
      <div style="display: flex; justify-content: space-between;">
        <a href="/login">点此登录</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      remember: false
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
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // 如果用户勾选了记住用户名，则将其存储到localStorage中
      if (this.remember) {
        localStorage.setItem('username', this.username);
      } else {
        localStorage.removeItem('username');
      }
      // 在这里，你可以添加发送请求到后端的代码
    },
    registerClick(){
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if(this.username=="111")
        alert("用户名不合法！");
      else if(!regex.test(this.email)){
        //document.getElementById("email").value = "";
        alert("邮箱名不合法!");
      }
      
      else
        alert("注册成功！")

    }
  }
}
</script>

<style scoped>
.Register {
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