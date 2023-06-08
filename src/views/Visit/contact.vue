<template>
  <div class="containerback">
    <h1>联系我们</h1>
    <p class="contact-info">{{ contact }}</p>
    <el-form ref="form" id="contact-form" :model="form" label-width="120px" class="demo-ruleForm">
      <el-form-item label="您的姓名" required>
        <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
      </el-form-item>
      <el-form-item label="您的邮箱" required>
        <el-input v-model="form.email" placeholder="请输入您的邮箱"></el-input>
      </el-form-item>
      <el-form-item label="您的留言" required>
        <el-input v-model="form.message" type="textarea" rows="5" placeholder="请输入您的留言"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <img src="../../assets/images/contact.jpg" align="center" width="200px" alt="图片" title="图片示例" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "contact",
  setup() {
    const form = ref({
      name: "",
      email: "",
      message: "",
    });
    const submitForm = () => {
      console.log("提交表单");
      this.$refs["form"].validate((valid) => {
        if (valid) {
          alert("表单提交成功！");
          this.$refs["form"].resetFields();
        } else {
          alert("表单提交失败！");
          return false;
        }
      });
    };
    const resetForm = () => {
      console.log("重置表单");
      this.$refs["form"].resetFields();
    };
    return {
      form,
      submitForm,
      resetForm,
    };
  },
  data() {
    return {
      contact:
        "欢迎联系我们！如果您有任何问题、建议或合作意向，请随时联系我们。我们的专业团队将竭诚为您服务，为您提供最好的服务和解决方案。请致电：184-3515-6536，或发送电子邮件至20375091@buaa.edu.cn。您的反馈对我们非常重要，期待与您沟通！",
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 86px;
}
.containerback{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/admin-background.png");
  background-size: cover;
}

h1 {
  font-size: 54px;
  margin: 50px auto;
  font-weight: 500;
  text-align: center;
  color: #5a7699;
  animation: bounce 20s infinite;
}
@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
p.contact-info {
  text-align: left;
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto;
}
.el-form-item {
  margin-bottom: 20px;
}
.el-form-item__label {
  font-weight: bold;
}
.el-textarea__inner {
  min-height: 120px;
}
</style>
