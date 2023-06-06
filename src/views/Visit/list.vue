<template>
    <div class="list">
      <!--员工信息列表-->
      <el-table :data="userlist.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
      :border="border"
      :stripe="stripe"
      style="width: 100%" height="300">
                <el-table-column type="index" width="120px"></el-table-column>
                <el-table-column label="文件名" prop="name" width="280px"></el-table-column>
                <el-table-column label="作者" prop="author" width="120px"></el-table-column>
                <el-table-column label="学科" prop="subject" width="200"></el-table-column>
                <el-table-column label="修改时间" prop="description"></el-table-column>
                <el-table-column label="上传时间" prop="upload_time">
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="12" class="page">
          <el-pagination :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="userlist.length" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      >
      </el-pagination>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="search">
        <el-col :span="12"></el-col>
        <el-col :span="4">
        <el-select v-model="options.value" placeholder="选择查找种类" class="left-aligned-select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
        </el-col>
        <!-- 查找内容 -->
        <el-col :span="6">
        <el-input v-model="queryInfo.query" placeholder="请输入内容"
        clearable >
        </el-input>
        </el-col>
        <el-col :span="2">
        <el-button type="primary" @click="getSelectedUserList">查看</el-button>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
import { init } from 'events';
  export default {
    name: 'list',
    // props: {
    //   msg: String
    // },
    data() {
      return {
        options: [
                {
                    value: "subject",
                    label: "学科",
                },
                {
                    value: "filetype",
                    label: "文件类型",
                },
                {
                    value: "author",
                    label: "作者",
                },
            ],
        queryInfo: {
                query:"",
                pagenum: 1,
                pagesize: 5,
                total: 20
            },
            userlist: [{
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                    "upload_time":"1"
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                    "upload_time":"1"
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                    "upload_time":"1"
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                    "upload_time":"1"
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                    "upload_time":"1"
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                    "upload_time":"1"
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                    "upload_time":"1"
                }
            ],
      }
    },
    methods: {
      async init(){
        try {
          const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
                        "subject": 'math'
                    }
                );
                 if (res.code !== 200)
                     return this.$message.error("获取用户列表失败");
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                //console.log(this.getToken_glo());
                console.log(this.queryInfo.query);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
        } catch (error) {
          console.log(error);
        }
      },
      async getSelectedUserList() {
            try {
                const select = this.options.value;
                if(select == 'subject'){
                const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {
                        "subject": this.queryInfo.query
                    }
                );
                 if (res.code !== 200)
                     return this.$message.error("获取用户列表失败");
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                //console.log(this.getToken_glo());
                console.log(this.queryInfo.query);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
            }
            else if(select == 'filetype'){
                const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_filetype`, {
                        "filetype": this.queryInfo.query
                },
                );
                if (res.code !== 200)
                     return this.$message.error("获取用户列表失败");
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                //console.log(this.getToken_glo());
                console.log(this.queryInfo.query);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
            }
            else if(select == 'author'){
                const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_writer`, {
                        "author": this.queryInfo.query
                    // headers: {
                    //     Authorization: this.getToken_glo()
                    // }
                });
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                //console.log(this.getToken_glo());
                console.log(this.queryInfo.query2);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
            }
            }
            catch (error) {
                console.log(error);
            }
        },
      handleSizeChange(newSize) {
            this.queryInfo.pagesize = newSize;
            //this.getUserList();
        },
      handleCurrentChange(newPage) {
            this.queryInfo.pagenum = newPage;
            //this.getUserList();
        },
        handleRowClick(row) {
            console.log(row); // 输出点击的行数据对象
        }
      },
    created() {
      this.init()
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .search{
    margin-top: 50px;
  }
  .page{
    margin-top: 10px;
  }
  </style>
  