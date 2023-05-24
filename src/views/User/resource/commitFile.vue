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
    <div class="select">
      <el-select v-model="value" placeholder="Select" class="left-aligned-select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
      <p class="p">选择学科</p>
    </div>
  </template>
   
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios' 
  const value = ref('')
  const options = [
    {
      value: 'OS',
      label: 'OS',
    },
    {
      value: 'Math',
      label: 'Math',
    },
    {
      value: 'English',
      label: 'English',
    },
    {
      value: 'Chinese',
      label: 'Chinese',
    },
    {
      value: 'Others',
      label: 'Others',
    },
  ]
  let formData1 = new FormData()
  function upload(params) {
    formData1.append('file', params.file)
    formData1.append('name', params.file.name)
    // formData1.append('author', null)
    formData1.append('description', params.file.lastModifiedDate)
    formData1.append('subject', value.value)
    console.log(value.value);
    console.log(formData1.get('file'));
    console.log(formData1.get('description'));
    console.log(formData1.get('name'));
    console.log(formData1.get('subject'));
    // console.log(this.$root.globalData.token_global);
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