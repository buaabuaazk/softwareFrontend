<template>
    <div class="exception-resources-container">
      <h1>异常资源</h1>
      <table>
        <thead>
          <tr>
            <th>资源ID</th>
            <th>资源名称</th>
            <th>异常原因</th>
            <th>url</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="resource in resources" :key="resource.id">
            <td>{{ resource.id }}</td>
            <td>{{ resource.name }}</td>
            <td>{{ resource.reason }}</td>
            <td>{{ resource.url }}</td>
            <td>
              <button @click="warn(resource.id)">警告</button>
              <button @click="del(resource.id)">删除</button>
              <button @click="ignore(resource.id)">忽略</button>
              <button @click="showResourceDetail(resource.id)">显示详情</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        resources: [],
        
      }
    },
    async mounted() {
      try {
        const response = await axios.get('http://81.70.17.242:8000/admin/get_exception_resources', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const { code, data } = response.data;
        if (code === 200) {
          this.resources = data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    methods: {
      async warn(id) {
        const reason = prompt("请输入警告原因：");
        if (!reason) {
          return;
        }
        try {
          await axios.post('http://81.70.17.242:8000/admin/warn_exception_resource', {
            id,
            reason,
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
          });
          alert('已警告该异常资源');
        } catch (err) {
          console.log(err);
        }
      },
      async del(id) {
        if (confirm("确认删除该异常资源吗？")) {
          try {
            await axios.post('http://81.70.17.242:8000/admin/delete_resource', {
              id,
            }, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              }
            });
            alert('已删除该异常资源');
            this.resources = this.resources.filter(resource => resource.id !== id);
          } catch (err) {
            console.log(err);
          }
        }
      },
      async ignore(id) {
        const confirmed = confirm('确定要忽略此异常资源吗？');
        if (!confirmed) {
          return;
        }
        try {
          await axios.post('http://81.70.17.242:8000/admin/ignore_exception_resource', {
            id,
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          alert('已忽略此异常资源');
          this.resources = this.resources.filter(resource => resource.id !== id);id
        } catch (err) {
          console.error(err.response ? err.response.data : err.message);
          alert('请求失败');
        }
      },
      showPostDetail() {
            axios.get(`http://81.70.17.242:8000/`+`this.url`)
            .then(res => {
                if (res.data.code === 200) {
                const postDetail = res.data.data.post;
                alert(`帖子详情：${postDetail.title} - ${postDetail.id}`);
                // 在这里可以跳转到帖子详情页面，并将帖子的详细信息传递过去
                } else {
                alert("帖子不存在");
                }
            })
            .catch(err => {
                console.error(err.response ? err.response.data : err.message);
                alert("请求失败");
            });
        }
    }
  }
  </script>
  