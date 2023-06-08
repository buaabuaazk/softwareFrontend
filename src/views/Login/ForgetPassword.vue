<template>
    <div class="ForgetPassword">
      <form @submit.prevent="submitForm">
        <h2>找回密码</h2>
        <label>
          <input v-model="username" placeholder="账号" type="text" required>
        </label>
        <label>
            <input width="10px" v-model="phonenumber" placeholder="手机号" type="text" required @change="checkPhoneNumber">
        </label>
        <label>
            <button @click="sendVerificationCode" :disabled="isButtonDisabled">{{ buttonLabel }}</button>
        </label>
        <label>
            <input width="10px" v-model="verificationCode" placeholder="输入验证码" type="text" required>
        </label>
        <label>
            <input width="10px" v-model="password" placeholder="新密码" type="text" required>
        </label>
        <label>
            <input width="10px" v-model="passwordRepeat" placeholder="确认新密码" type="text" required>
        </label>
        <label>
            <button type="submit">找回密码</button>
        </label>
        <!--
        <label>
          <input v-model="password" placeholder="新密码" type="password" required>
        </label>
        <label>
          <input v-model="passwordRepeat" placeholder="确认密码" type="password" required>
        </label>
        <button type="submit">确认</button>
        -->
        <div style="display: flex; justify-content: space-between;">
          <a href="/#/login">想起密码了？点此登录</a>
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
      validPhoneNumber: false,
      remember: false,
      isButtonDisabled: false,
      remainingSeconds: 0,
      password: '',
      passwordRepeat: '',
      verificationCode: ''
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
        password: this.password,//
        sms_num: this.verificationCode,//
        telephone: this.phonenumber//
      };
      // 如果用户勾选了记住用户名，则将其存储到localStorage中
      if (this.remember) {
        localStorage.setItem('username', this.username);
      } else {
        localStorage.removeItem('username');
      }
      // 在这里，你可以添加发送请求到后端的代码
      axios.post('http://81.70.17.242:8000/user/'+this.username+'/change_password_by_phone',data)
        .then(response => {
          var code = ''
          code = response.data.code
          console.log('code:'+code)
            if(code == 10203)
              alert("验证码错误")
            else if(code == 10205)
              alert("用户名不存在")
            else if(code == 200){
              alert('重置密码成功');
              console.log(response.data.code);
              this.$router.push('/login');
            }
            else{
              alert("未知错误ahhhhh");
            }
            console.log(response.data.code);
            //window.location.href = '/user';
          
          //将token存储到本地，以便之后使用
          //localStorage.setItem('token', token)
        })
        .catch(error => {

        })
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
    },
  }
  }
  
  </script>
  
  <style scoped>
  .ForgetPassword {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/rain7.jpg") no-repeat;
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
    background-color: #239cd8;
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