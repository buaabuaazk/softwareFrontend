<template>
    <div>
      <div class="head">
        已上传资源
      </div>
    <el-card>
        <el-table
          :data="userlist.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
      @row-click="handleRowClick"
      :border="border" 
      :stripe="stripe">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="文件名" prop="name" width="120px"></el-table-column>
        <el-table-column label="作者" prop="author" width="80px"></el-table-column>
        <el-table-column label="学科" prop="subject" width="80px"></el-table-column>
        <el-table-column label="修改时间" prop="description" width="120px"></el-table-column>
        <el-table-column label="上传时间" prop="upload_time" width="120px">
        </el-table-column>
        <el-table-column label="操作" width="280px">
          <template v-slot="scope">
            <!-- 下载按钮 -->
          <!-- <el-button type="primary" content="下载" placement="top" :enterable="false" @click="DownloadResource(scope.row)" ><el-button type="warning" ></el-button><el-icon><Download /></el-icon></el-button> -->
          <el-tooltip effect="dark" content="下载" placement="top" :enterable="false" @click="DownloadResource(scope.row)">
            <el-button type="primary" @click="DownloadResource(scope.row)"><el-icon><Download /></el-icon></el-button> 
          </el-tooltip>
          <!-- 删除按钮 -->
          <!-- <el-button type="danger" content="删除" placement="top" :enterable="false" @click="deleteResource(scope.row)"><el-icon><delete /></el-icon></el-button> -->
          <el-tooltip effect="dark" content="删除" placement="top" :enterable="false" @click="deleteResource(scope.row)">
            <el-button type="danger"  @click="deleteResource(scope.row)"><el-icon><delete /></el-icon></el-button> 
          </el-tooltip>
          <!-- 举报按钮 -->
          <el-tooltip effect="dark" content="举报" placement="top" :enterable="false" @click="ReportResource(scope.row)">
            <el-button type="warning" ><el-icon><WarnTriangleFilled /></el-icon></el-button> 
          </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
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
import { ref } from 'vue';
import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
        return {
            stripe: true,
            // 获取用户列表的参数对象
            queryInfo: {
                query2: "",
                query1: "",
                pagenum: 1,
                pagesize: 2,
                total: 20
            },
            userlist1: [],
            // 用户列表
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
            // 总数据条数
            total: 0,
        };
    },
    created() {
        this.getPersonalResource()
    },
    computed: {
    ...mapState([
      'count',
      'username_glo',
      'token_glo',
     ])
    },
    methods: {
      handleSizeChange(newSize) {
            this.queryInfo.pagesize = newSize;
            //this.getUserList();
        },
        // 监听 页码值 改变的事件
        handleCurrentChange(newPage) {
            this.queryInfo.pagenum = newPage;
            //this.getUserList();
        },
      ...mapMutations([
        'increment',
        'decrement'
        ]),
        getToken_glo(){
            return this.token_glo;
        },
      async getPersonalResource() {
            try {
                const { data: res } = await axios.get(`http://81.70.17.242:8000/source/get_author`,
                    {headers: {
                        Authorization: this.getToken_glo()
                    }
                    }
                );
                if (res.code !== 200)
                    return this.$message.error("获取用户列表失败");
                console.log(res);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                this.userlist = ref([...res.resource_info_list]);
                console.log(this.userlist1);
            }
            catch (error) {
                console.log(error);
            }
        },
    }
  }
  </script>
  <style scoped>
  .head{
    margin-bottom:40px;
  }
  </style>
    