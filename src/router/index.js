import { createRouter, createWebHistory } from 'vue-router';
import list from "../views/Visit/list.vue"
import home from "../views/Home/Home.vue"
import test2 from "../views/Visit/part/test2.vue"
import echart from "../views/Visit/echarts.vue"
import guide from "../views/Visit/part/guide.vue"
import show from "../views/Visit/part/test3.vue"
import user from "../views/User/userHome.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    
    redirect: 'visit',
    meta: {
      mainNavShow: true,
    },
    children:[
        {
          path: 'visit',
          name: 'list',
          component: list,
          // meta:{
          //   list:true
          // }
        },
        // {
        //   path: 'test1',
        //   name: 'test1',
        //   component: test1,
        //   // meta:{
        //   //   test1:true
        //   // }
        // },
        {
          path: 'test2',
          name: 'test2',
          component: test2,
          // meta:{
          //   test2:true
          // }
        },
        {
          path: 'echarts',
          name: 'echart',
          component: echart,
          // meta:{
          //   echart:true
          // }
        },
        {
          path: 'test1',
          name: 'test1',
          component: guide,
          meta: {
            // requireNotAuth: true,
            //mainNavShow: true
          },
        },
        {
          path: 'show',
          name: 'show',
          component: show,
          meta: {
            // requireNotAuth: true,
            //mainNavShow: true
          },
        },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: true,
    },
  },
  {
    path: '/login/administrator',
    name: 'AdministratorLogin',
    component: () => import('../views/Login/AdministratorLogin.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: true,
    },
  },
  {
    path: '/login/register',
    name: 'Register',
    component: () => import('../views/Login/Register.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: true,
    },
  },
  {
    path: '/login/forgetpassword',
    name: 'ForgetPassword',
    component: () => import('../views/Login/ForgetPassword.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: true,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      mainNavShow: false,
    },
    children:[
      {
        path: 'introduce',
        name: 'introduce',
        component: () => import('../views/User/introduce.vue'),
        // meta:{
        //   list:true
        // }
      },
      // {
      //   path: 'test1',
      //   name: 'test1',
      //   component: test1,
      //   // meta:{
      //   //   test1:true
      //   // }
      // },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('../views/User/resource.vue'),
        // meta:{
        //   test2:true
        // }
      },
      {
        path: 'focus',
        name: 'focus',
        component: () => import('../views/User/focus.vue'),
        // meta:{
        //   echart:true
        // }
      },
      {
        path: 'pop',
        name: 'pop',
        component: () => import('../views/User/pop.vue'),
        meta: {
          // requireNotAuth: true,
          //mainNavShow: true
        },
      },
      {
        path: 'postAndChat',
        name: 'postAndChat',
        component: () => import('../views/User/postAndChat.vue'),
        meta: {
          // requireNotAuth: true,
          //mainNavShow: true
        },
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
