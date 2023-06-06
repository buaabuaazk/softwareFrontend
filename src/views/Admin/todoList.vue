<template>
  <el-card shadow="hover" style="height: 403px">
    <template #header>
      <div class="clearfix">
        <span>待办事项</span>
      </div>
    </template>

    <el-table :show-header="false" :data="todoList" style="width: 100%">
      <el-table-column width="40">
        <template #default="scope">
          <el-checkbox v-model="scope.row.status"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <div
            class="todo-item"
            :class="{'todo-item-del': scope.row.status}"
          >
            {{ scope.row.title }}{{scope.row.description}}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { reactive } from 'vue';

export default {
  props: {
    todoList: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const todoList = reactive(props.todoList);

    return {
      todoList
    };
  }
};

</script>
<style scoped>
.todo-item {
	font-size: 14px;
}

.todo-item-del {
	text-decoration: line-through;
	color: #999;
}
</style>