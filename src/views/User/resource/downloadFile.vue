<template>
    <div>5</div>
  </template>
  // 引入 Axios 库
  
  <script>
  //import { defineComponent } from '@vue/composition-api'
  import axios from 'axios';
  
  // 发送下载文件的请求
  const { data: res } = axios.post("http://81.70.17.242:8000/source/download",                    
                        {"name": "平时作业3-答案.pdf"}
                    ,{
                    headers: {
                        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ind1Iiwicm9sZSI6InVzZXIifQ.xHvn0qVY4truIizkSeKpgkHj5xOvLXGBlirENh4ghm8"
                    }
                });
    // 创建下载链接
    const downloadLink = document.createElement('a');
    const blobUrl = URL.createObjectURL(new Blob([res]));
    downloadLink.href = blobUrl;
    downloadLink.download = '中文文件.txt';
    
    // 模拟点击下载链接
    downloadLink.click();
    
    // 释放 URL 对象
    URL.revokeObjectURL(blobUrl);
  
  </script>
  