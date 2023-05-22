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
  import { request } from "../../router/index.js";
  //方式二
  // const ElButton = resolveComponent("ElButton");
  // const ElTag = resolveComponent("ElTag");
  const tableData = ref([]);
  //获取表格数据（mockjs生成）的方法
  const getApiData = () => {
    // request("table2").then((res) => {
    //   tableData.value = res.data;
    // });
  };
  getApiData();
  //columns 是一个数组，里面的值为每一列的配置信息
  const columns = [
    {
      key: "id",
      dataKey: "id",//需要渲染当前列的数据字段，如{id:9527,name:'Mike'}，则填id
      title: "id",//显示在单元格表头的文本
      width: 80,//当前列的宽度，必须设置
    },
    {
      key: "name",
      dataKey: "name",//需要渲染当前列的数据字段，如{id:9527,name:'Mike'}，则填name
      title: "名称",
      width: 100,
    },
    {
      key: "type",
      dataKey: "type",
      title: "文件类型",
      width: 180,
    },
    {
      key: "subject",
      dataKey: "subject",
      title: "学科",
      minWidth: 100,
      width: 110,
    },
    {
      key: "time",
      dataKey: "time",
      title: "上传时间",
      width: 140,
    },
    {
      key: "size",
      dataKey: "size",
      title: "大小",
      width: 120,
    },
    {
      key: "status",
      dataKey: "status",
      title: "状态",
      width: 80,
      cellRenderer: ({ cellData }) =>
        h(
          ElTag,
          { type: cellData == "可发放" ? "success" : "danger" },
          { default: () => cellData }
        ),
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
    