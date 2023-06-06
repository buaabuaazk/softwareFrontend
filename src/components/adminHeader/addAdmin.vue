<template> 
  <div class="admin-apply-container"> 
    <h1 class="title">管理员申请列表</h1> 
    <el-table v-loading="loading" :data="admins" style="width: 100%"> 
      <el-table-column prop="username" label="用户名" align="center"></el-table-column> 
      <el-table-column label="操作" align="center" key="slot"> 
        <template v-slot="scope">
          <el-button type="success"  @click="approveAdmin(scope.row.username)">批准</el-button>
          <el-button type="danger"  @click="refuseAdmin(scope.row.username)">拒绝</el-button>
        </template>
      </el-table-column> 
    </el-table> 
  </div> 
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      admins: [],
      newAdmin: '',
    };
  },
  created() {
    this.getAdmins();
  },
  methods: {
    async getAdmins() {
      try {
        const response = await axios.get('http://81.70.17.242:8000/admin/get_admin_requests');
        if (response.data.code === 200) {
          this.admins = response.data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async approveAdmin(username) {
    if (confirm("确认批准该用户的管理员申请吗？")) {
      try {
        const response = await axios.post('http://81.70.17.242:8000/admin/handle_admin_requests', {
          username,
        });
        if (response.data.code === 200) {
          alert('已批准该用户的管理员申请');
          this.admins = this.admins.filter(admin => admin.username !== username);
        } else {
          console.error(err.response ? err.response.data : err.message);

        }
      } catch (err) {
        console.error(err.response ? err.response.data : err.message);

      }
    }
  },
    async refuseAdmin(username) {
      if (confirm("确认拒绝该用户的管理员申请吗？")) {
        try {
          await axios.post('http://81.70.17.242:8000/admin/refuse_admin_requests', {
            username,
          });
          alert('已拒绝该用户的管理员申请');
          this.admins = this.admins.filter(admin => admin.username !== username);
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
};
</style>