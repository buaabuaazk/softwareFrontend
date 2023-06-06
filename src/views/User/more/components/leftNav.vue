<template>
    <div>
      <el-row>
        <el-col>
          <el-menu
              class="el-menu-vertical-demo"
              background-color="#E9EEF3"
              text-color="black"
              router
              style="height: 250px">
            <!--    List    -->
            <el-menu-item index="/user/set" style="text-align: left">
                <template #title>
                  <el-icon ><Menu /></el-icon>
                  <span>账号与密码</span>
                </template>          
            </el-menu-item>
            <!--    Support    -->
            <el-menu-item index="/user/setBackground" style="text-align: left">
              <template #title>
                <el-icon><tickets /></el-icon>
                <span>设置模式</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeftMenu'
  };
  </script>

  <style scoped>
  .el-menu-vertical-demo{
    height: 100vh
  }
  </style>