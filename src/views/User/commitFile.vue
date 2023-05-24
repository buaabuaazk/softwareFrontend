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
   

  let formData1 = new FormData()
  function upload(params) {
    formData1.append('file', params.file)
    formData1.append('name', params.file.name)
    formData1.append('author', null)
    formData1.append('description', params.file.lastModifiedDate)
    formData1.append('subject', params.file.type)
    console.log(formData1.getAll('name'));
    console.log(formData1);
  }
  function submitUpload() 
  {
    axios.post('http://81.70.17.242:8000/source/post', formData1)
    .then(response => {
          const code = response.data.code
          const message = response.data.message
          const error = response.data.error;
          console.log(code)
          console.log(message)
          console.log(error)
          console.log(formData1.getAll('name'))
          // console.log(params.file)
          // console.log(params.file.name)
          if(code === 200){
            formData1= new FormData();
            alert('上传成功');
          }
          else if(code === 400){
            alert(error);
          }
        })
  }
   
  </script>