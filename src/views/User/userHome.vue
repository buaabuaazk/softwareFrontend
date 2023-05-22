<template>
    <userNav />
    <router-view></router-view>
</template>
  
<script >
import userNav from '../../components/userHeader/userNavbar.vue'
    export default{
        components:{
            userNav
        }
    }
</script>