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
             <el-button @click="getUserList"><el-icon><search /></el-icon></el-button>
            </template>
            </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">搜索资料</el-button>
        </el-col>
      </el-row>
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
  export default {
    data () {
      return {
        // 获取用户列表的参数对象
        queryInfo: {
          query: '', // 查询参数
          pagenum: 1, // 当前页码
          pagesize: 2 // 每页显示条数
        },
        // 用户列表
        userlist: [],
        // 总数据条数
        total: 0
      }
    },
    created () {
      this.getUserList()
    },
    methods: {
      async getUserList () {
        // const { data: res } = await this.$http.get('users', {
        //   params: this.queryInfo
        // })
        // if (res.meta.status !== 200) return this.$message.error('获取用户列表失败')
        // this.userlist = res.data.users
        // this.total = res.data.total
        // console.log(res)
      },
      // 监听 page size 改变的事件
      handleSizeChange (newSize) {
        this.queryInfo.pagesize = newSize
        this.getUserList()
      },
      // 监听 页码值 改变的事件
      handleCurrentChange (newPage) {
        this.queryInfo.pagenum = newPage
        this.getUserList()
      },
      // 监听 switch 开头状态的改变
    //   async userStateChanged (userinfo) {
    //     const { data: res } = await this.$http.put(`users/${userinfo.id}/state/${userinfo.mg_state}`)
    //     if (res.meta.status !== 200) {
    //       userinfo.mg_state = !userinfo.mg_state
    //       return this.$message.error('更新用户状态失败')
    //     }
    //     this.$message.success('更新用户状态成功')
    //   }
    }
   
  }
  </script>
   
  <style lang="less" scoped>
   
  </style>