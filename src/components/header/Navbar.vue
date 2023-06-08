<template>
    <nav>
      <svg xmlns="http://www.w3.org/2000/svg" width="180px" height="7vh" viewBox="0 0 500 200">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00b4db;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0083b0;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        
        <g transform="translate(200 100)">
          <text x="-140" y="20" fill="	#FFFF00" font-size="130" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">f</text>
          <text x="-100" y="19" fill="	#EE7700 " font-size="80" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">u</text>
          <text x="-60" y="12" fill="#7700FF " font-size="90" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">n</text>
          <text x="-20" y="16" fill="#00b4db" font-size="85" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">n</text>
          <text x="-5" y="15" fill="#0083b0" font-size="90" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">y</text>
          <text x="70" y="45" fill="#D1BBFF" font-size="185" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">L</text>
          <text x="85" y="12" fill="#00b4db" font-size="85" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">e</text>
          <text x="125" y="15" fill="#FFDDAA" font-size="95" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">a</text>
          <text x="165" y="18" fill="#5555FF" font-size="80" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">r</text>
          <text x="205" y="16" fill="#00FFFF" font-size="90" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle">n</text>
        </g>
      </svg> 
      <div style="100px"><p style="color:#0083b0;font-size:30px">趣学交流</p></div>
      <div style="width:600px"></div>
      <div class="menu-item"><a  @click="gotoHome">Home</a></div>
      <div style="width:50px"></div>
      <div class="menu-item"><a  @click="gotoLogin">Login</a></div>
      <div style="width:50px"></div>
      <div class="menu-item"><a @click="gotoUserHome">Contact</a></div>
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
      }
    },
    methods: {
        gotoLogin: function() {
            this.$router.push('/login');
        },
        gotoHome: function(){
            this.$router.push('/visit');
        },
        gotoUserHome: function(){
          this.$router.push('/contact');
        }
    }
  }
</script>
  
  <style>
  nav {
    display: flex;
    align-items: center;
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
  