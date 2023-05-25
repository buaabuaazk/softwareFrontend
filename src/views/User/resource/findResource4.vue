<template>
    <div>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- 搜索与添加区域 -->
            <el-input placeholder="请输入内容"
            v-model="queryInfo.query1" clearable @clear="getUserList">
            <template #append>
             <el-button ><el-icon><search /></el-icon></el-button>
            </template>
            </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="getResource">搜索资料</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col span="2">
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
        <el-col span="8">
        <el-input v-model="queryInfo.query2" placeholder="请输入内容"
        clearable >
        </el-input>
        </el-col>
        <el-col span="3">
        <el-button type="primary" @click="getSelectedUserList">查看</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域  -->
      <el-table :data="userlist.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)" 
      :border="border" 
      @row-click="handleRowClick"
      :stripe="stripe">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="文件名" prop="name" width="200px"></el-table-column>
        <el-table-column label="作者" prop="author" width="200px"></el-table-column>
        <el-table-column label="学科" prop="subject" width="200"></el-table-column>
        <el-table-column label="描述" prop="description"></el-table-column>
        <el-table-column label="状态" prop="mg_state">
          <template v-slot="scope">
            <el-switch v-model="scope.row.mg_state" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="280px">
          <template v-slot="scope">
            <!-- 下载按钮 -->
          <el-button type="primary" v-model="scope.row.Id" size="mini" content="下载" @click="DownloadResource(scope.row)" ><el-icon><Download /></el-icon></el-button>
          <!-- 删除按钮 -->
          <el-button type="danger" size="mini" content="删除" @click="deleteResource(scope.row)"><el-icon><delete /></el-icon></el-button>
          <!-- 举报按钮 -->
          <el-tooltip effect="dark" content="举报" placement="top" :enterable="false" @click="ReportResource(scope.row)">
            <el-button type="warning" size="mini"><el-icon><WarnTriangleFilled /></el-icon></el-button> 
         </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 页面区域 -->
      <el-pagination :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="userlist.length" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-card>
    </div>
  </template>
  <script >
import axios from 'axios'
  export default {
    data() {
        return {
            // 获取用户列表的参数对象
            queryInfo: {
                query2: "",
                query1: "",
                pagenum: 1,
                pagesize: 2,
                total: 20
            },
            // 用户列表
            userlist: [{
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                }, {
                    "name": "1",
                    "author": "1",
                    "subject": "1",
                    "description": "111111",
                }
            ],
            // 总数据条数
            total: 0,
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
                {
                    value: "all",
                    label: "全部资源",
                }
            ]
        };
    },
    created() {
        //this.getResource()
        //this.deleteResource()
    },
    methods: {
        async getResource() {
            try {
                const { data: res } = await axios.get("http://81.70.17.242:8000/source/get");
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            catch (error) {
                console.log(error);
            }
        },
        async getSelectedUserList() {
            try {
                const select = this.options.value;
                if(select == 'subject'){
                const { data: res } = await axios.get(`http://81.70.17.242:8000/source/get_subject`, {
                    params: {
                        subject: this.queryInfo.query1
                    }
                });
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            else if(select == 'filetype'){
                const { data: res } = await axios.get(`http://81.70.17.242:8000/source/get_filetype`, {
                    params: {
                        filetype: this.queryInfo.query1
                    }
                });
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            else if(select == 'author'){
                const { data: res } = await axios.get(`http://81.70.17.242:8000/source/get_author`, {
                    params: {
                        author: this.queryInfo.query1
                    }
                });
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            else{
                this.getNamedResource();
            }
            }
            catch (error) {
                console.log(error);
            }
        },
        async getNamedResource() {
            try {
                const { data: res } = await axios.get("http://81.70.17.242:8000/source/get_filename", {
                    params: {
                        file_name: this.queryInfo.query2
                    }
                });
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            catch (error) {
                console.log(error);
            }
        },
        async deleteResource(row) {
            try {
                console.log(row.name)
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/delete",{
                    params:{
                        file_name: row.name
                    }
                });
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            catch (error) {
                console.log(error);
            }
        },
        async DownloadResource(row) {
            try {
                console.log(row.name)
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/download",{
                    params:{
                        file_name: row.name
                    }
                });
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            catch (error) {
                console.log(error);
            }
        },
        async ReportResource(row) {
            try {
                console.log(row.name)
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/report",{
                    params:{
                        file_name: row.name
                    }
                });
                if (res.meta.code !== 200)
                    return this.$message.error("获取用户列表失败");
                this.userlist = res.data.users;
                this.total = res.data.total;
                console.log(res);
            }
            catch (error) {
                console.log(error);
            }
        },
        // 监听 page size 改变的事件
        handleSizeChange(newSize) {
            this.queryInfo.pagesize = newSize;
            //this.getUserList();
        },
        // 监听 页码值 改变的事件
        handleCurrentChange(newPage) {
            this.queryInfo.pagenum = newPage;
            //this.getUserList();
        },
        handleRowClick(row) {
            console.log(row); // 输出点击的行数据对象
        }
    },
}
  </script>
   
  <style lang="less" scoped>
    .select{
      display: flex;
      margin-top: 5px;
      left:0;
      height: 60px;
    }
    .left-aligned-select .el-input__inner {
      text-align: left !important;
    }
    .p{
      font-size:5px;
      padding: 3px;
      color: #222;
      padding-right: 50px;
    }
  </style>