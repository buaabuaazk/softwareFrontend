<template>
    <div class="">
      <div class="title">已下载资源</div>
      <el-divider></el-divider>
      <div style="width: 100%; height: 500px">
        <el-auto-resizer>
          <template #default="{ height, width }">
            <el-table-v2
              :columns="columns"
              :data="tableData"
              :width="width"
              :height="height"
              :row-class="tableRowClassName"
              fixed
            />
          </template>
        </el-auto-resizer>
      </div>
      <div style="margin-top: 10px">
        共
        <el-link type="primary" style="font-size: 20px">{{
          tableData.length
        }}</el-link>
        条数据
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, h, resolveComponent } from "vue";
  import { ElMessageBox, ElMessage,ElButton,ElTag} from "element-plus";
  import axios from "axios";
  const tableData = ref([]); 
  const fetchData = async () => {
  // try {
  //   axios.get('http://81.70.17.242:8000/source/get_author')
  //   .then(response => {
  //     tableData.value = response.data.resources;
  //     console.log(tableData.value); // 在控制台打印数据或进行其他操作
  //     //console.log(tableData.resource_data)
  //   })
  // } catch (error) {
  //   console.error(error); // 处理请求错误
  //  }
};
const fetchData1 = async () => {
  // try {
  //   axios.get('http://81.70.17.242:8000/source/get_subject',{'subject':'math'})
  //   .then(response => {
  //     tableData.value = response.data;
  //     console.log(tableData.value); // 在控制台打印数据或进行其他操作
  //     //console.log(tableData.resource_data)
  //   })
  // } catch (error) {
  //   console.error(error); // 处理请求错误
  //  }
};
  fetchData1();
  fetchData();
  //console.log(tableData.value);
  //console.log(tableData.rawValue);
  const columns = [
    {
      key: "name",
      //dataKey: "id",//需要渲染当前列的数据字段
      title: "name",//显示在单元格表头的文本
      width: 80,//当前列的宽度，必须设置
    },
    {
      key: "author",
      //dataKey: "文件",//需要渲染当前列的数据字段
      title: "作者",
      width: 100,
    },
    {
      key: "subject",
      dataKey: "subject",
      title: "学科",
      width: 180,
    },
    {
      key: "decription",
      dataKey: "decription",
      title: "描述",
      minWidth: 100,
      width: 110,
    },
    {
      key: "file_size",
      title: "文件大小",
      width: 100,
    },
    {
      key: "upload_time",
      dataKey: "upload_time",
      title: "上传时间",
      width: 240,
    },
    {
      key: "handle",
      title: "操作",
      width: 100,
      align: "center",
      cellRenderer: (data) =>
        h(
          ElButton,
          { onClick: () => handleDelete(data), type: "danger", icon: "Delete" },
          { default: () => "删除" }
        ),
    },
  ];

  //自定义渲染带状态的表格（每隔一行显示不同的背景色）
  const tableRowClassName = ({ row, rowIndex }) => {
    let step = 4;
    for (let i in tableData.value) {
      if (rowIndex === step * i - 3) {
        return "warning-row";
      }
      if (rowIndex === step * i - 1) {
        return "success-row";
      }
    }
    return "";
  };
  //删除操作
  const handleDelete = (data) => {
    ElMessageBox.confirm(`确定删除 ${data.rowData.name}?`, "提 示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        tableData.value.splice(data.rowIndex, 1);
        ElMessage({
          type: "success",
          message: "删除成功",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "取消删除",
        });
      });
  };

  </script>
    