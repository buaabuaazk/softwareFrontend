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
      <label>
          <input v-model="verificationCode" placeholder="验证码" type="text" required>
          <button type="button" :disabled="isButtonDisabled" @click="sendVerificationCode">{{ buttonLabel }}</button>
      </label>
      <button type="submit">注册</button>
      <div style="display: flex; justify-content: space-between;">
        <a href="/#/login">点此登录</a>
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
      phonenumber: '',
      email: '',
      password: '',
      passwordRepeat:'',
      remember: false,
      verificationCode: '',
      validPhoneNumber: false,
      isButtonDisabled: false,
      remainingSeconds: 0,
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
  computed: {
    buttonLabel() {
      if (this.isButtonDisabled) {
        return `还有 ${this.remainingSeconds} 秒后可再次发送`;
      } else {
        return '发送验证码';
      }
    }
  },
  methods: {
    submitForm() {
      const data = {
        username: this.username,
        email: this.email,
        password_1: this.password,
        password_2: this.passwordRepeat,
        sms_num: this.verificationCode,
        telephone: this.phonenumber
      };
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // 如果用户勾选了记住用户名，则将其存储到localStorage中
      if (this.remember) {
        localStorage.setItem('username', this.username);
      } else {
        localStorage.removeItem('username');
      }
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      const phonenumberRegex = /^1[3-9]\d{9}$/;
      if(this.username=="")
        alert("请输入用户名");
      else if(!phonenumberRegex.test(this.phonenumber)){
        alert("请输入正确的手机号")
      }
      else if(!emailRegex.test(this.email)){
        alert("请输入正确的邮箱名");
      }
      else if(this.password!=this.passwordRepeat){
        alert("两次输入的密码须一致");
      }
      console.log("qqqq");
      // 在这里，你可以添加发送请求到后端的代码
      axios.post('http://81.70.17.242:8000/visitor/register/',data)
        .then(response => {
          var code = ''
          code = response.data.code
          console.log('code:'+code)
            if(code == 10110)
              alert("验证码错误")
            else if(code == 10101)
              alert("用户名已被注册")
            else if(code == 200){
              alert('注册成功');
              console.log(response.data.code);
              window.location.href = '/#/login';
            }
            else{
              alert("未知错误ahhhhh");
            }
            console.log(response.data.code);
            //window.location.href = '/user';
        })
        .catch(error => {
            console.log("error:"+error.code);
        })
      
    },
    registerClick(){
      /*
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if(this.username=="111")
        alert("用户名不合法！");
      else if(!regex.test(this.email)){
        //document.getElementById("email").value = "";
        alert("邮箱名不合法!");
      }
      else
        alert("注册成功！")
        */
    },
    sendVerificationCode(){
      const data = {
        telephone: this.phonenumber
      };
      const phonenumberRegex = /^1[3-9]\d{9}$/;
      if(this.phonenumber=='')
        alert("请填写手机号后再发送验证码");
      else if(!phonenumberRegex.test(this.phonenumber))
        alert("请填写正确的手机号");
      else{
        //向后端请求发送验证码
        axios.post('http://81.70.17.242:8000/visitor/sms',data)
        .then(response => {
            alert('验证码发送成功');
            //window.location.href = '/user';
            console.log(response.data.code);
        })
        .catch(error => {

        })
        //alert("验证码发送成功！");
        
        this.isButtonDisabled = true;
        this.remainingSeconds = 5;
        let intervalId = setInterval(() => {
          this.remainingSeconds--;
          if (this.remainingSeconds <= 0) {
            clearInterval(intervalId);
            this.isButtonDisabled = false;
          }
        }, 1000);
      }
    }
  }
}
</script>

<style scoped>
.input-button-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.input-field {
    flex: 3;
    flex-direction: row;
}

.button-field {
    flex: 1;
    flex-direction: row;
}
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

.button1 {
  padding: 3px;
  font-size: 18px;
  background-color: #239cd8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 1.0;
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