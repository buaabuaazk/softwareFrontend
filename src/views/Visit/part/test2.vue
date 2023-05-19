<template>
    <div>
      <h1>test2</h1>
      <div>admin: {{admin}}</div>
      <div>password: {{password}}</div>
      <div class="box" @click="returnTest1()">返回test1</div>
    </div>
  </template>
  
  <script>
    export default {
      name: "test2",
      data () {
        return {
          // 保存传递过来的值
          admin:'',
          password:'',
        }
      },
      created() {
        this.getTest1Data()
      },
      methods:{
        getTest1Data() {
          this.admin = this.$route.query.admin
          this.password = this.$route.params.password
          //debugger
          console.log('admin', this.admin)
          console.log('password', this.password)
        },
        returnTest1() {
          this.$router.push({
            path:'/test1',
          })
        }
      }
    }
  </script>
  
  <style scoped>
    .box{
      width: 100px;
      height: 60px;
      background-color: rgba(230, 49, 94, 0.8);
      text-align: center;
      line-height: 60px;
      margin: 0 500px;
    }
  </style>