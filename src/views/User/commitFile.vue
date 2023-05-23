<template>
    <el-upload
      ref="file"
      :auto-upload="true"
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
  import axios from 'axios'
   
  let file = ref()
  let formData1 = new FormData()
  function upload(params) {
    formData1.append('file', params.file)
    formData1.append('name', '1')
    formData1.append('author', '1')
    formData1.append('description', '1')
    formData1.append('subject', '1')
    axios.post('http://81.70.17.242:8000/source/post', formData1)
    .then(response => {
          // 处理登录成功的情况
          const code = response.data.code
          const message = response.data.message
          const error = response.data.error;
          // 将token存储到本地，以便之后使用
          //localStorage.setItem('token', token)
          //打印一下
          console.log(code)
          console.log(message)
          console.log(error)
          // console.log(file.value);
          // 进行页面跳转等操作
        })
  }
  function submitUpload(params) 
  {
    formData1.append('file', params.file)
    formData1.append('name', '1')
    formData1.append('author', '1')
    formData1.append('description', '1')
    formData1.append('subject', '1')
    // photoRef.value.submit()
    axios.post('http://81.70.17.242:8000/source/post', formData1)
    .then(response => {
          // 处理登录成功的情况
          const code = response.data.code
          const message = response.data.message
          const error = response.data.error;
          // 将token存储到本地，以便之后使用
          //localStorage.setItem('token', token)
          //打印一下
          console.log(code)
          console.log(message)
          console.log(error)
          console.log(formData1.get('file')); // 打印文件对象
          console.log(formData1.get('name')); // 打印文件名
          console.log(formData1.get('author')); // 打印文件作者
          console.log(formData1.get('description')); // 打印文件描述
          // console.log(formData1.get('subject'));
          console.log(file.value);
          // 进行页面跳转等操作
        })
  }
   
  </script>