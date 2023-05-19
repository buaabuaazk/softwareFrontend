<template>
    <div>
      <el-row>
        <el-col>
          <el-menu
              class="el-menu-vertical-demo"
              background-color="#E9EEF3"
              text-color="black"
              router
              style="height: 650px">
            <!--    List    -->
            <el-sub-menu index="/list" style="text-align: left">
                <template #title>
                  <el-icon ><Menu /></el-icon>
                  <span>List</span>
                </template>
                <!--  发表年份  -->
                <el-sub-menu>
                    <template #title>
                        <span>Publication Year</span>
                    </template>
                    <el-menu-item>
                        <template #title>
                            <span>2021</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>
                <!--  作者  -->
                <el-sub-menu>
                    <template #title>
                        <span>Author</span>
                    </template>
                    <el-menu-item>
                        <template #title>
                            <span>vouzenus</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>
                <!--  机构  -->
                <el-sub-menu>
                    <template #title>
                        <span>Institution</span>
                    </template>
                    <el-menu-item>
                        <template #title>
                            <span>A</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <!--    Support    -->
            <el-sub-menu index="/test" style="text-align: left">
              <template #title>
                <el-icon><tickets /></el-icon>
                <span>Support</span>
              </template>
              <!--入门指南-->
              <el-menu-item index="/test/test1">
                <template #title>
                  <span>使用指南</span>
                </template>
              </el-menu-item>              
              <!--常见问题-->
              <el-menu-item index="/test/test2">
                <template #title>
                  <span>常见问题</span>
                </template>
              </el-menu-item>              
            </el-sub-menu>
            <el-menu-item index="/echarts" style="text-align: left">
              <template #title>
                <el-icon ><eleme /></el-icon>
                <span>Echarts</span>
              </template>
            </el-menu-item>
            <el-menu-item  style="text-align: left">
                <template #title>
                  <el-icon ><message /></el-icon>
                  <span>Contact</span>
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

  <style>
  .el-menu-vertical-demo{
    height: 645px
  }
  </style>
  