<template>
  <div>
    <button @click="showDialog">显示弹框</button>
    <div v-if="visible" class="dialog">
      <div class="dialog-content">
        <p>这是一个弹框</p>
        <button @click="confirm">确定</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);

    const showDialog = () => {
      visible.value = true;
    }
    const hideDialog = () => {
      visible.value = false;
    }

    const confirm = () => {
      console.log('点击了确定按钮');
      hideDialog();
    }

    const cancel = () => {
      hideDialog();
    }

    return {
      visible,
      showDialog,
      confirm,
      cancel,
    }
  }
}
</script>

<style>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dialog-content button {
  margin: 10px;
}
</style>