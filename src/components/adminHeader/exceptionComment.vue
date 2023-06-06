<template> 
<div class="exception-comments-container"> 
  <h1 class="title">异常评论列表</h1> 
  <el-table v-loading="loading" :data="comments" style="width: 100%"> 
  <el-table-column prop="id" label="评论ID" align="center"></el-table-column> 
  <el-table-column prop="content" label="评论内容" align="center"></el-table-column> 
  <el-table-column prop="reason" label="异常原因" align="center"></el-table-column> 
  <el-table-column prop="url" label="URL" align="center"></el-table-column> 
  <el-table-column label="操作" align="center" key="slot"> 
    <template v-slot="scope">
      <el-button type="danger" @click="del(scope.row.id)" >删除</el-button> 
      <el-button type="info" @click="ignore(scope.row.id)">忽略</el-button> 
      <el-button type="primary" @click="showCommentDetail(scope.row.id)">显示详情</el-button> 
    </template>
  </el-table-column> 
  </el-table> 
</div> 
</template>
  <script>
  import { ref } from 'vue'
  const loading = ref(true)
  import axios from 'axios';
  export default {
  data() {
      return {
          comments: [],
      }
  },
  async mounted() {
      axios.get('http://81.70.17.242:8000/admin/get_exception_comments')
          .then(res => {
          if (res.data.code === 200) {
              this.comments = res.data.data;
          }
      });
      },
  methods: {
    async del(id) {
      if (confirm("确认删除该异常评论吗？")) {
        try {
          const data = {
            id: id
          };
          await axios.delete("http://81.70.17.242:8000/admin/delete_comment", {
            data: data,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          alert("已删除该评论");
          // 从本地评论列表中删除删除的评论
          this.comments = this.comments.filter(comment => comment.id !== id);
        } catch (err) {
          console.log('错误码：', err.response.data.code);
          alert("请求失败");
        }
      }
    },
      async ignore(id) {
          const confirmed = confirm('确定要忽略此异常评论吗？');
          if (!confirmed) {
              return;
          }
          try {
              await axios.post('http://81.70.17.242:8000/admin/ignore_exception_comment', {
                  'id':id
              }, {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
              });
              alert('已忽略此异常评论');
              this.comments = this.comments.filter(comment => comment.id !== id);
          } catch (err) {
              console.error(err.response ? err.response.data : err.message);
              alert('请求失败');
          }
      },
      showCommentDetail(id) {
      axios.get(`http://81.70.17.242:8000/comment/${id}/get_comment_by_id`)
        .then(res => {
            const commentDetail = res.data;
            console.log(commentDetail);
            alert(`评论详情：${commentDetail.content}`);
            // 在这里跳转到评论详情页面，显示评论详情
        })
        .catch(err => {
          console.log('请求失败:', err);
          alert("请求失败");
        });
    }
  }
}
  </script>
<style scoped> 
.title { font-size: 24px; margin-bottom: 20px; margin-top: 60px;} 

</style>
