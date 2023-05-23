<template>
    <el-upload
      ref="photoRef"
      :auto-upload="false"
      :http-request="upload"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>
   
      <el-button class="ml-3" type="success" @click="submitUpload">
        上传文件
      </el-button>
    </el-upload>
  </template>
   
  <script setup>
  import { ref } from 'vue'
  import server from '../../router/index.js'
  import axios from 'axios'
   
  let photoRef = ref()
   
  function upload(params) {
    let formData = new FormData()
    formData.append('photoRef', params.file)
    formData.append('str', '测试字符')
    server({
      url: 'http://81.70.17.242:8000/source/post/',
      method: 'post',
      data: formData,
    }).then((resp) => {
      console.log('success')
    })
  }
  function submitUpload() {
    // photoRef.value.submit()
    axios.post('http://81.70.17.242:8000/source/post/', "file='formData' &name='1' &author='1' &description='1'&subject='10'")
    .then(response => {
          // 处理登录成功的情况
          const token = response.data.token
          // 将token存储到本地，以便之后使用
          localStorage.setItem('token', token)
          //打印一下
          console.log(token)
          // 进行页面跳转等操作
          window.location.href = 'https://www.baidu.com'
        })
  }
   
  </script>