<template>
  <div class="exception-users-container">
    <h1 class="title">异常用户</h1>
    <el-table v-loading="loading" :data="users" style="width: 100%">
      <el-table-column prop="user" label="用户名" align="center"></el-table-column>
      <el-table-column prop="reason" label="异常原因" align="center"></el-table-column>
      <el-table-column prop="time" label="异常时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center" key="slot">
        <template v-slot="scope">
            <el-button type="warning" @click="warn(scope.row.user)">警告<i class="el-icon-edit-outline"></i></el-button>
            <el-button type="danger" @click="del(scope.row.user)">删除</el-button>
            <el-button type="info" @click="ignore(scope.row.user)">忽略</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue'
  const loading = ref(true)
  export default {
    data() {
      return {
        users: [],
      }
    },
    async mounted() {
      try {
        const response = await axios.get('http://81.70.17.242:8000/admin/get_exception_users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const { code, data } = response.data;
        if (code === 200) {
          this.users = data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    methods: {
      async warn(username) {
        const reason = prompt("请输入警告原因：");
        alert(username);
        if (!reason) {
          return;
        }
        try {
          await axios.post('http://81.70.17.242:8000/admin/warn_exception_user', {
            username,
            reason,
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
          });
          alert('已警告该异常用户');
        } catch (err) {
          console.log(err);
        }
      },
      async del(username) {
        if (confirm("确认删除该异常用户吗？")) {
          try {
            await axios.post('http://81.70.17.242:8000/admin/delete_exception_user', {
              username,
            }, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              }
            });
            alert('已删除该异常用户');
            this.users = this.users.filter(user => user.user !== username);
          } catch (err) {
            console.log(err);
          }
        }
      },
      async ignore(username) {
        const confirmed = confirm('确定要忽略此异常用户吗？');
        if (!confirmed) {
          return;
        }
        try {
          await axios.post('http://81.70.17.242:8000/admin/ignore_exception_user', {
            username,
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          alert('已忽略此异常用户');
          this.users = this.users.filter(user => user.user !== username);
        } catch (err) {
          console.error(err.response ? err.response.data : err.message);
          alert('请求失败');
        }
      },
    }
  }
  </script>
<style scoped>
.exception-users-container {
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>