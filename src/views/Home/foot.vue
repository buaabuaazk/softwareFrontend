<template>
    <el-footer class="footbottom">
        <p>Copyright © 2021 {{ domain }}. All rights reserved.</p>
        <p>官方邮箱：<a :href=sendtoEmail>{{ email }}</a></p>
        <p><a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2021021248号</a></p>
    </el-footer>
</template>
<script>
export default{
    data(){
        return{
            domain: this.GLOBAL.domain,
            sendtoEmail: 'mailto:' + this.GLOBAL.email,
            email: this.GLOBAL.email,
        }
    }
}
</script>
<style>
.footbottom{
    height: 150px!important;
    background-color: #ebecec;
    color: #9b9ea0;
    position: relative;
    padding: 20px;
  }
  .footbottom a {
    text-decoration: none;
  }
  .footbottom a:link {
    color: #9b9ea0;
  }
  .footbottom a:hover {
    color: #00aeff;
  }
  .footbottom a:visited {
    color: #9b9ea0;
  }
</style>