<template>
    <div>
      <h2>评论区</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          {{ comment.content }}
          <ul>
            <comment-item v-for="reply in comment.replies" :key="reply.id" :reply="reply" />
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: []
      }
    },
    async mounted() {
      axios.get('http://example.com/api/comments')
        .then(res => {
          if (res.data.code === 200) {
            this.comments = res.data.data.comments;
          } else {
            alert("获取评论失败");
          }
        })
        .catch(err => {
          console.error(err.response ? err.response.data : err.message);
          alert("请求失败");
        });
    },
    components: {
      CommentItem: {
        props: {
          reply: {
            type: Object,
            required: true
          }
        },
        template: `
          <li>
            {{ reply.content }}
            <ul v-if="reply.replies.length">
              <comment-item v-for="reply in reply.replies" :key="reply.id" :reply="reply" />
            </ul>
          </li>
        `
      }
    }
  }
  </script>
  