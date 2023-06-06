<template>
  <div class="admin" v-show="admin">
    <div class="admin-nav">
      <adminNav />
    </div>
    <div class="admin-content">
        <findResourceVue></findResourceVue>
        <commitFile></commitFile>
        <personalFile></personalFile>
    </div>
  </div>
</template>

<script lang="js">
import adminNav from '../../components/adminHeader/adminNavbar.vue'
import findResourceVue from '../User/resource/findResource.vue'
import commitFile from '../User/resource/commitFile.vue';
import personalFile from '../User/resource/personalFile.vue';
import exceptionResource from '../../components/adminHeader/exceptionResource.vue'
export default {
  data() {
    return {
      admin: false,
    };
  },
  components: {
    adminNav,
    findResourceVue,
    commitFile,
    personalFile,
    exceptionResource,  
  },
  mounted() {
    this.admin = true;
  },
}
</script>

<style scoped>
.admin {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/admin-background.png") no-repeat;
  background-size: cover;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.admin-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.admin-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 100px;
}

.left-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
}

.right-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
}

@media (max-width: 768px) {
  .admin-content {
    flex-direction: column;
  }

  .left-content {
    width: 100%;
  }

  .right-content {
    width: 100%;
  }
}
</style>
