<template>
    <div>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <!-- 搜索与添加区域 -->
            <el-input placeholder="请输入内容"
            v-model="queryInfo.query" clearable @clear="getUserList">
            <template #append>
             <el-button ><el-icon><search /></el-icon></el-button>
            </template>
            </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="getUserList">搜索资料</el-button>
        </el-col>
      </el-row>
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
        <!-- 分类 -->
        <p class="p">选择学科</p>
        <el-button type="primary" @click="getReource">查看</el-button>
      </div>
      <!-- 用户列表区域  -->
      <el-table :data="userlist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="名称" prop="username"></el-table-column>
        <el-table-column label="文件类型" prop="email"></el-table-column>
        <el-table-column label="学科" prop="mobile"></el-table-column>
        <el-table-column label="上传者" prop="role_name"></el-table-column>
        <el-table-column label="状态" prop="mg_state">
          <template v-slot="scope">
            <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template v-slot="scope">
            <!-- 修改按钮 -->
          <el-button type="primary" v-model="scope.row.Id" size="mini"><el-icon><edit /></el-icon></el-button>
          <!-- 删除按钮 -->
          <el-button type="danger" size="mini"><el-icon><delete /></el-icon></el-button>
          <!-- 分配角色按钮 -->
          <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
            <el-button type="warning" size="mini"><el-icon><setting /></el-icon></el-button> 
         </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 页面区域 -->
      <el-pagination :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-card>
    </div>
  </template>
  <script >
    import axios from "axios";
    import { ref } from 'vue'
    export default {
    data () {
      return {
        queryInfo: {
          query: '', // 查询参数
          pagenum: 1, // 当前页码
          pagesize: 2 // 每页显示条数
        },
        // 用户列表
        userlist: [],
        // 总数据条数
        total: 0,
      }
    },
    handleSizeChange (newSize) {
        this.queryInfo.pagesize = newSize
        this.getUserList()
      },
      // 监听 页码值 改变的事件
      handleCurrentChange (newPage) {
        this.queryInfo.pagenum = newPage
        this.getUserList()
      },
  //   methods: {
  //     async getUserList () {
  //   axios.get('http://81.70.17.242:8000/source/get_subject',value.value)
  //   .then(response => {
  //     const tableData = response.data;
  //     console.log(tableData); // 在控制台打印数据或进行其他操作
  //   })
  // } 
  //     },
  }
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
  function getUserList () {
    // axios.get('http://81.70.17.242:8000/source/get_subject',value.value)
    // .then(response => {
    //   const tableData = response.data;
    //   console.log(tableData); // 在控制台打印数据或进行其他操作
    // })
  }
  </script>
   
  <style lang="less" scoped>
    .select{
      display: flex;
      margin-top: 5px;
      left:0;
      width: 20vw;
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