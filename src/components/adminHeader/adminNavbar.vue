<template>
    <div class="h-6" />
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      @select="handleSelect"
    >
    
      <el-menu-item index="/admin" class="admin" align="center"><span style="color: #00a7d0;font-size:25px">趣学交流管理端</span></el-menu-item>
      <el-menu-item index="/Admin/manageUserInfo" class="resource" ><template #title><span style="font-size:20px"><a  @click="gotoManageUserInfo">用户管理</a></span></template></el-menu-item>
      <el-menu-item index="/Admin/manageResource" class="resource" ><template #title><span style="font-size:20px"><a  @click="gotoManageResource">资源管理</a></span></template></el-menu-item>
      <el-menu-item index="/Admin/managePostAndChat" class="post" ><template #title><span style="font-size:20px"><a  @click="gotoManagePostAndChat">讨论区管理</a></span></template></el-menu-item>
      <el-menu-item index="/visit" class="post" ><template #title><span style="font-size:20px"><a  @click="gotoVisitor">返回</a></span></template></el-menu-item>
      <div class="whether">
        <div id="he-plugin-simple"></div>
      </div>

    </el-menu>
  </template>
  
  <script >
  export default {
    name: 'Resources',
    components: {
    },
    data () {
        return{
            weatherData: [],
            weatherImg:'' 
        }
         
    },
    methods: {
        gotoManageUserInfo: function(){
            this.$router.push('./manageUserInfo');
        },
        gotoManagePostAndChat: function(){
          this.$router.push('./managePostAndChat');
        },
        gotoManageResource: function(){
            this.$router.push('./manageResource');
        },
        gotoVisitor:function(){
            this.$router.push('../visit');
        },
        
    },
    mounted(){
    window.WIDGET = {
        "CONFIG": {
            "modules": "01234",
            "background": "5",
            "tmpColor": "FFFFFF",
            "tmpSize": "16",
            "cityColor": "FFFFFF",
            "citySize": "16",
            "aqiColor": "FFFFFF",
            "aqiSize": "16",
            "weatherIconSize": "24",
            "alertIconSize": "18",
            "padding": "10px 10px 10px 10px",
            "shadow": "0",
            "language": "auto",
            "fixed": "false",
            "vertical": "top",
            "horizontal": "left",
            "city":'CN100000000',
            "float":"false",
            "key": "f70898de9e0b48eda4380c31d69dfd1d"
        }
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0'
    document.getElementsByTagName('head')[0].appendChild(script)
    },

  }
  </script>
<style scoped>
.h-6{
    position:fixed;
}
.user{
    padding-left: 100px;
    padding-right: 100px;
    color: blue;
    font-family: "Lucida Console";
}
.firstPage{
    padding-left: 260px;
    padding-right: 30px;
}
.resource{
    padding-right:60px;
    padding-left: 60px;
}
.post{
    padding-right:60px;
    padding-left: 60px;
}
.text{
    padding-top: 11px;
}
.text-input{
    top:50%;
    width: 200px;
    height: 30px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}
.whether{
    margin-top: 6px;
    margin-left: 130px;
    position: relative;
    z-index: 9999;
}

</style>