<template>
    <div class="list">
      <!--员工信息列表-->
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%" height="300">
        <el-table-column label="编号" width="200" prop="id"/>
        <el-table-column label="书名" width="200" prop="name"/>
        <el-table-column label="机构" width="200" prop="sex"/>
        <el-table-column label="文献领域" width="200" prop="date"/>
        <el-table-column label="发表日期" width="200">
            <template v-slot="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <template v-slot:reference>
                    <div class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.address }}</el-tag>
                    </div>
                  </template>
                </el-popover>
            </template>
        </el-table-column>
      </el-table>
      <!--分页组件-->
      <el-row>
        <el-col :span="12" offset="12">
          <el-pagination
              style="margin: 15px 0px"
              background
              layout="prev, pager, next, jumper, total, sizes"
              :page-size="size"
              :current-page="now"
              :page-sizes="[2,4,6,8,10,12]"
              @current-change="findPage"
              @size-change="findSize"
              :total="total">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'list',
    props: {
      msg: String
    },
    data() {
      return {
        tableData: [],
        search: '',
        show: false,
        show2: false,
        form: {
          id: '',
          name: '',
          sex: '男',
          date: '',
          address: ''
        },
        total: 0,
        now: 1,
        size: 4
      }
    },
    methods: {
      findPage(now_page) {    //用来处理当前页的方法,page为当前页
        this.now = now_page;
        this.showAllUsers(now_page, this.size);
      },
      findSize(now_size) {    //用来处理每页条数的方法,size为当前页条数
        this.size = now_size;
        this.showAllUsers(this.now, now_size);
      },
      showAllUsers(currentPage, pageSize) {   //异步请求显示所有数据
        currentPage = currentPage ? currentPage : this.now;
        pageSize = pageSize ? pageSize : this.size;
        // this.axios.get("http://localhost:8082/user/findByPage?nowPage=" + currentPage + "&rows=" + pageSize).then(res => {
        //   this.tableData = res.data.users;
        //   this.total = res.data.total;
        // });
      }
    },
    created() {
      this.showAllUsers();
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
  </style>
  