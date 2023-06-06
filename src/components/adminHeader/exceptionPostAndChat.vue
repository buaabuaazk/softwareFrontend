<template> 
<div class="exception-posts-container"> 
    <h1 class="title">异常帖子列表</h1> 
    <el-table v-loading="loading" :data="posts" style="width: 100%"> 
    <el-table-column prop="id" label="帖子ID" align="center"></el-table-column> 
    <el-table-column prop="title" label="帖子标题" align="center"></el-table-column> 
    <el-table-column prop="reason" label="异常原因" align="center"></el-table-column> 
    <el-table-column prop="url" label="URL" align="center"></el-table-column> 
    <el-table-column label="操作" align="center" key="slot"> 
        <template v-slot="scope">
        <el-button @click="del(scope.row.id)" type="danger">删除</el-button> 
        <el-button @click="ignore(scope.row.id)" type="info">忽略</el-button> 
        <el-button @click="showPostDetail(scope.row.id)" type="primary">显示详情</el-button> 
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
            posts: [],
        }
    },
    async mounted() {
        axios.get('http://81.70.17.242:8000/admin/get_exception_posts')
            .then(res => {
            if (res.data.code === 200) {
                this.posts = res.data.data;
            }
        });
        },
    methods: {
        async del(id) {
            if (confirm("确认删除该异常帖子吗？")) {
                try {
                await axios.post("http://81.70.17.242:8000/admin/delete_post", {
                    'id' : id,
                }, 
                {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
                );
                alert("已删除该帖子");
                // 从本地帖子列表中删除删除的帖子
                this.posts = this.posts.filter(post => post.id !== id);
                } catch (err) {
                console.error(err.response ? err.response.data : err.message);
                alert("请求失败");
                }
            }
        },
        async ignore(id) {
            const confirmed = confirm('确定要忽略此异常帖子吗？');
            if (!confirmed) {
                return;
            }
            try {
                await axios.post('http://81.70.17.242:8000/admin/ignore_exception_post', {
                    'id' : id,
                }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                });
                alert('已忽略此异常帖子');
                this.posts = this.posts.filter(post => post.id !== id);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
                alert('请求失败');
            }
        },
        showPostDetail(id) {
            axios.get(`http://81.70.17.242:8000/post/${id}/get_post_by_id`)
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
<style scoped> 
.title { font-size: 24px; margin-bottom: 20px; } 
</style>