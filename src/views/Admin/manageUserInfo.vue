<template>
    
    <div class="admin">
      <div class="admin-nav">
        <adminNav />
      </div>
      <exceptionUsers></exceptionUsers>>
      <addAdmin></addAdmin>
    </div>
  </template>
  
<script lang="js">
import adminNav from '../../components/adminHeader/adminNavbar.vue'
import exceptionUsers from '../../components/adminHeader/exceptionUsers.vue'
import addAdmin from '../../components/adminHeader/addAdmin.vue'
  export default {
    components:{
      adminNav,
      exceptionUsers,
      addAdmin
    },
    data() {
      return {
      };
    },
    methods: {
      
    },
  };
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
}
</style>
