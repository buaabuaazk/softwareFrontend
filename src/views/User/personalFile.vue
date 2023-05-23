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
  const tableData = ref([  {
    id: 1,
    name: "文件1",
    type: "类型1",
    subject: "学科1",
    time: "2023-05-19",
    size: "10MB",
    status: "可发放",
  },
  {
    id: 2,
    name: "文件2",
    type: "类型2",
    subject: "学科2",
    time: "2023-05-20",
    size: "5MB",
    status: "不可发放",
  },
  {
    id: 3,
    name: "文件3",
    type: "类型3",
    subject: "学科3",
    time: "2023-05-21",
    size: "8MB",
    status: "可发放",
  },
  {
    id: 4,
    name: "文件4",
    type: "类型4",
    subject: "学科4",
    time: "2023-05-22",
    size: "12MB",
    status: "不可发放",
  },
  {
    id: 5,
    name: "文件5",
    type: "类型5",
    subject: "学科5",
    time: "2023-05-23",
    size: "6MB",
    status: "可发放",
  },
  {
    id: 6,
    name: "文件6",
    type: "类型6",
    subject: "学科6",
    time: "2023-05-24",
    size: "15MB",
    status: "不可发放",
  },
  {
    id: 7,
    name: "文件7",
    type: "类型7",
    subject: "学科7",
    time: "2023-05-25",
    size: "9MB",
    status: "可发放",
  },
  {
    id: 8,
    name: "文件8",
    type: "类型8",
    subject: "学科8",
    time: "2023-05-26",
    size: "7MB",
    status: "不可发放",
  },
  {
    id: 9,
    name: "文件9",
    type: "类型9",
    subject: "学科9",
    time: "2023-05-27",
    size: "11MB",
    status: "可发放",
  },
  {
    id: 10,
    name: "文件10",
    type: "类型10",
    subject: "学科10",
    time: "2023-05-28",
    size: "4MB",
    status: "不可发放",
  },
]);
  const getApiData = () => {
  };
  getApiData();
  const columns = [
    {
      key: "id",
      dataKey: "id",//需要渲染当前列的数据字段
      title: "id",//显示在单元格表头的文本
      width: 80,//当前列的宽度，必须设置
    },
    {
      key: "name",
      dataKey: "name",//需要渲染当前列的数据字段
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
    