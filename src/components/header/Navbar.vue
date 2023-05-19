<template>
    <nav>
      <div class="menu-item"><a href="#" @click="gotoHome">Home</a></div>
      <div class="menu-item"><a href="#" @click="gotoLogin">Login</a></div>
      <Dropdown title="Resources" :items="Resources" />
      <div class="menu-item"><a href="#">Community</a></div>
    </nav>
</template>
  
<script>
import { method } from 'lodash';
import Dropdown from './Dropdown';
  
  export default {
    name: 'Resources',
    components: {
      Dropdown
    },
    data () {
      return {
        'Resources': [
          {
            title: '学习资料',
            link: 'https://space.bilibili.com/237173875/'
          },
          {
            title: '休闲时刻',
            link:'https://space.bilibili.com/237173875/'
          },
          {
            title: '维基百科',
            link: 'https://space.bilibili.com/237173875/'
          }
        ]
      }
    },
    methods: {
        gotoLogin: function() {
            this.$router.push('/login');
        },
        gotoHome: function(){
            this.$router.push('/visit');
        }
    }
  }
</script>
  
  <style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  nav .menu-item {
    color: #FFF;
    padding: 10px 40px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
  }
  
  nav .menu-item.active,
  nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #FF5858;
  }
  
  nav .menu-item a {
    color: inherit;
    text-decoration: none;
  }
  </style>
  