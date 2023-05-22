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
   
  let photoRef = ref()
   
  function upload(params) {
    let formData = new FormData()
    formData.append('photoRef', params.file)
    formData.append('str', '测试字符')
    server({
      url: '/user/focus',
      method: 'post',
      data: formData,
    }).then((resp) => {
      console.log('success')
    })
  }
  function submitUpload() {
    photoRef.value.submit()
  }
   
  </script>