<template>
    <div>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :gutter="0">
        <el-col :span="8">
          <!-- 搜索与添加区域 -->
            <el-input placeholder="请输入内容"
            v-model="queryInfo.query1" clearable>
            <template #append>
             <el-button ><el-icon><search /></el-icon></el-button>
            </template>
            </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="getNamedResource">搜索资料</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">
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
        <el-col :span="4">
        <el-input v-model="queryInfo.query2" placeholder="请输入内容"
        clearable >
        </el-input>
        </el-col>
        <el-col :span="1">
        <el-button type="primary" @click="getSelectedUserList">查看</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域  -->
      <el-table  :data="userlist.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
      :border="border" 
      :stripe="stripe"
      @row-click="handleRowClick"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column label="文件名" prop="name" width="280px"></el-table-column>
        <el-table-column label="作者" prop="author" width="120px"></el-table-column>
        <el-table-column label="学科" prop="subject" width="200"></el-table-column>
        <el-table-column label="修改时间" prop="description"></el-table-column>
        <el-table-column label="上传时间" prop="upload_time">
        </el-table-column>
        <el-table-column label="操作" width="280px">
          <template v-slot="scope">
            <!-- 查看按钮 -->
            <el-tooltip effect="dark" content="查看" placement="top" :enterable="false" @click="getResource(scope.row)">
                <el-button type="success" @click="getResource(scope.row)"><el-icon><Document /></el-icon></el-button> 
            </el-tooltip>
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
            <el-button type="warning" @click="ReportResource(scope.row)"><el-icon><WarnTriangleFilled /></el-icon></el-button> 
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
    <div id="yourElementId">Hello, World!</div>
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
        //this.getPersonalResource()
        //this.deleteResource()
        //this.DownloadResource()
        //this.ReportResource()
        //this.people()
    },
    computed: {
    ...mapState([
      'count',
       'username_glo',
       'token_glo'
     ])
    },
    methods: {
        ...mapMutations([
        'increment',
        'decrement'
        ]),
        getToken_glo(){
            return this.token_glo;
        },
        //得到个人资源
        async getPersonalResource() {
            try {
                const { data: res } = await axios.get(`http://81.70.17.242:8000/source/get_author`,
                    {headers: {
                        Authorization: this.getToken_glo()
                    }
                    }
                );
                // if (res.code !== 200)
                //     return this.$message.error("获取用户列表失败");
                //this.userlist1 = Array.from(res.resource_info_list);
                //this.queryInfo.total = res.resource_info_list.length;
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
        //得到分类资源
        async getSelectedUserList() {
            try {
                const select = this.options.value;
                if(select == 'subject'){
                const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_subject`, {

                        "subject": this.queryInfo.query2
                    }
                // ,
                //     {headers: {
                //         Authorization: this.getToken_glo()
                //     }
                // }
                );
                // if (res.code !== 200)
                //     return this.$message.error("获取用户列表失败");
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                console.log(this.getToken_glo());
                console.log(this.queryInfo.query2);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
            }
            else if(select == 'filetype'){
                const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_filetype`, {
                        "filetype": this.queryInfo.query2
                },
                // {
                //     headers: {
                //         Authorization: this.getToken_glo()
                //     }
                // }
                );
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                console.log(this.getToken_glo());
                console.log(this.queryInfo.query2);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
            }
            else if(select == 'author'){
                const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get_writer`, {
                        "author": this.queryInfo.query2
                    // headers: {
                    //     Authorization: this.getToken_glo()
                    // }
                });
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                console.log(this.getToken_glo());
                console.log(this.queryInfo.query2);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
            }
            // else{
            //     try {
            //     const { data: res } = await axios.post(`http://81.70.17.242:8000/source/get`, {
            //         "name": this.queryInfo.query2
            //     }
            //     // ,{
            //     //         headers: {
            //     //             Authorization: this.getToken_glo()
            //     //         }
            //     // }
            //     );
            //     // if (res.code !== 200)
            //     //     return this.$message.error("获取用户列表失败");
            //     // this.userlist = Array.from(res.resource_info_list);
            //     // this.queryInfo.total = res.resource_info_list.length;
            //     console.log(res);
            //     console.log(res.resource_info_list);
            //     // console.log(res.resource_info_list.length);
            //     console.log(this.userlist);
            //     }
            //     catch (error) {
            //         console.log(error);
            //     }
            //     }
            }
            catch (error) {
                console.log(error);
            }
        },
        //按名字搜索资源
        async getNamedResource() {
            try {
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/get_name", 
                     {
                        "name": this.queryInfo.query1
                    },
                //     {
                //     headers: {
                //         Authorization: this.getToken_glo()
                //     }
                // }
                );
                if (res.code !== 200)
                return this.$message.error("未搜索到相关资源");
                this.userlist = res.resource_info_list;
  //              this.queryInfo.total = res.resource_info_list.length;
                console.log(res);
                console.log(res.code)
                console.log(this.getToken_glo());
                console.log(this.queryInfo.query2);
                console.log(res.resource_info_list);
                console.log(res.resource_info_list.length);
                console.log(this.userlist);
            }
            catch (error) {
                console.log(error);
            }
        },
         // 查看资源
         async getResource(row) {
            try {
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/get", {
                    "name": row.name
                }
                // ,{
                        // headers: {
                        //     Authorization: this.getToken_glo()
                        // }
                // }
                );
                // if (res.code !== 200)
                //     return this.$message.error("获取用户列表失败");
                console.log(res);
                //var decodedString = decodeURIComponent(res);
                //console.log(decodedString);
                var element = document.getElementById("yourElementId");
                //res_utf8 = res.decode('utf-8');
                element.innerText = res;
                //this.queryInfo.total = res.resource_info_list.length;
                //console.log(res.resource_info_list);
                //console.log(res.resource_info_list.length);
                //console.log(this.userlist);
            }
            catch (error) {
                console.log(error);
            }
        },
        //删除资源
        async deleteResource(row) {
            try {
                // console.log(row.name)
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/delete",
                {"name": row.name},
                {
                    headers: {
                        Authorization: this.getToken_glo()
                    }
                }
                    );
                    console.log(res)
                this.getSelectedUserList()
                if (res.code == 200)
                    return this.$message.success("删除成功");
                else{
                    return this.$message.error("删除失败");
                }
                //this.userlist = res.data.users;
                //this.total = res.data.total;
                //console.log(res);
            }
            catch (error) {
                console.log(error);
            }
        },

        //下载资源
        async DownloadResource(row) {
            try {
                console.log(row.name)
                //console.log(row.get('name'))
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/download",                    
                        {"name": row.name}
                    ,{
                    headers: {
                        Authorization: this.getToken_glo()
                    }
                });
                // if (res.code == 200)
                //     return this.$message.error("获取用户列表失败");
                console.log(res);
                console.log(this.getToken_glo());
                //console.log(this.queryInfo.query2);

                // console.log(res.resource_info_list);
                // console.log(res.resource_info_list.length);
                // console.log(this.userlist);

            }
            catch (error) {
                console.log(error);
            }
        },
        //举报资源
        async ReportResource(row) {
            try {
                console.log(row.name)
                const { data: res } = await axios.post("http://81.70.17.242:8000/source/report",
                    {"name": row.name,"reason": "内容违规"}
                    ,{
                    headers: {
                        Authorization: this.getToken_glo()
                    }
                }

                );
                if (res.code == 200)
                    return this.$message.success("举报成功");
                else{
                    return this.$message.error("举报成功");
                }

                console.log(res);
                console.log(this.getToken_glo());
                console.log(res.resource_info_list);
                //console.log(res.resource_info_list.length);
                console.log(this.userlist);
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
        // handleRowClick(row) {
        //     console.log(row); // 输出点击的行数据对象
        // }
    },
}
  </script>
   
  <style lang="less" scoped>
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