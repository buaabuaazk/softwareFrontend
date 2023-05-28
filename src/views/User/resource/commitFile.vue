<template>
  <div>
  <div>
    <el-upload
      ref="formData1"
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
  </div>
  <div >
      <el-select v-model="options.value" placeholder="Select" class="left-aligned-select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
      <p class="p">选择学科</p>
      <el-input v-model="description" placeholder="对文件的描述" class="input"
      clearable
      rows="12"
      show-word-limit
      maxlength="30"
      type="textarea"/>
  </div>
</div>
  </template>
   
  <script>
  import axios from 'axios' 
  import { mapState, mapMutations } from 'vuex'
import { ref } from 'vue'
  export default{
    data(){
    return{
      description: "",
      formData1: new FormData(),
      options : [
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
    }
  },
  computed: {
    ...mapState([
      'count',
       'username_glo',
       'token_glo'
     ])
    },
  methods :{
      ...mapMutations([
        'increment',
       'decrement'
      ]),
    getToken_glo(){
      return this.token_glo;
    },
  async upload(params) {  
    this.formData1.append('file', params.file)
    this.formData1.append('name', params.file.name)
    this.formData1.append('file_size',params.file.size)
    // formData1.append('author', null)
    this.formData1.append('description', params.file.lastModifiedDate)
    this.formData1.append('subject', this.options.value)
    //console.log(token_glo)
    //console.log(this.formData1.get('token'));
    console.log(this.options.value);
    console.log(this.formData1.get('file'));
    console.log(this.formData1.get('description'));
    console.log(this.formData1.get('name'));
    console.log(this.formData1.get('subject'));
    // console.log(this.$root.globalData.token_global);
  },
  //获取个人文件
  async getPersonalResource() {
            try {
                const { data: res } = await axios.get(`http://81.70.17.242:8000/source/get_author`,
                    {headers: {
                        Authorization: this.getToken_glo()
                    }
                    }
                );
                console.log(res);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                this.userlist = res.resource_info_list;
                //this.userlist = ref([...res.resource_info_list]);
                console.log(this.userlist);
                console.log(this.getToken_glo())
            }
            catch (error) {
                console.log(error);
            }
        },
        //上传文件
  async submitUpload()
  {
    axios.post('http://81.70.17.242:8000/source/post', this.formData1,{
      headers: {
        Authorization: this.getToken_glo()
      }
    })
    .then(response => {
          const code = response.data.code
          const message = response.data.message
          const error = response.data.error;
          console.log(code)
          console.log(message)
          console.log(error)
          console.log(this.formData1)
          //console.log(this.formData1.get('authorization'))
          this.getPersonalResource();
          // console.log(params.file)
          // console.log(params.file.name)
          if(code === 200){
            this.formData1= new FormData();
            alert('上传成功');
          }
          else if(code === 400){
            alert(error);
          }
        })
      }
    }
  }
   
  </script>
  <style>
  .input{
    width: 30vw;
    height: 35vh;
  }
  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    padding: 6px;
    color: #999;
  }
</style>