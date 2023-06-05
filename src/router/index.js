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
        },
        {
          path: 'test2',
          name: 'test2',
          component: test2,
        },
        {
          path: 'echarts',
          name: 'echart',
          component: echart,
        },
        {
          path: 'test1',
          name: 'test1',
          component: guide,
          meta: {
          },
        },
        {
          path: 'show',
          name: 'show',
          component: show,
          meta: {
          },
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/Visit/contact.vue'),
        }
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
    path: '/zk1',
    name: 'Test1',
    component: () => import('../views/Profile/Test1.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: false,
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
  //个人主页
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile/Profile.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: false
    },
  },
  
  {
    path: '/profile/collection',
    name: 'collection',
    component: () => import('../views/Profile/Collection.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: false
    },
  },
  {
    path: '/profile/release',
    name: 'release',
    component: () => import('../views/Profile/Release.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: false
    },
  },
  {
    path: '/profile/modify',
    name: 'modify',
    component: () => import('../views/Profile/Modify.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: false
    },
  },
  {
    path: '/profile/myrelease',
    name: 'myrelease',
    component: () => import('../views/Profile/MyRelease.vue'),
    meta: {
      // requireNotAuth: true,
      mainNavShow: false
    },
  },
  {
    path: '/post/:id/get_post_by_id',
    name: 'postdetail',
    component: () => import('../views/Post/PostDetail.vue'),
  },  
  //用户区
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      mainNavShow: false,
    },
    children:[
      {
        path: 'firstPage',
        name: 'firstPage',
        component: () => import('../views/User/firstPage/introduce.vue'),
        // meta:{
        //   list:true
        // }
        // children:[
        //   {
        //     path: 'introduce',
        //     name: 'introduce',
        //     component: () => import('../views/User/firstPage/introducePost.vue')
        //   },
        //   {
        //     path: 'focus',
        //     name: 'focus',
        //     component: () => import('../views/User/firstPage/focusPost.vue'),
        //     // meta:{
        //     //   echart:true
        //     // }
        //   },
        //   {
        //     path: 'pop',
        //     name: 'pop',
        //     component: () => import('../views/User/firstPage/popPost.vue'),
        //     meta: {
        //       // requireNotAuth: true,
        //       //mainNavShow: true
        //     },
        //   },
        // ]
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('../views/User/resource/resource.vue'),
      },
      {
        path: 'focus',
        name: 'focus',
        component: () => import('../views/User/firstPage/focus.vue'),
        // meta:{
        //   echart:true
        // }
      },
      {
        path: 'pop',
        name: 'pop',
        component: () => import('../views/User/firstPage/pop.vue'),
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
        },
      },
      {
        path: 'userProfile',
        name: 'userProfile',
        component: () => import('../views/User/more/userProfile.vue'),
        meta: {
          
        }
      },
      {
        path: 'chatGpt',
        name: 'chatGpt',
        component: () => import('../views/User/more/chatGpt.vue'),
      },
      {
        path: 'set',
        name: 'set',
        component: ()=> import('../views/User/more/set.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/User/more/contact.vue'),
      }
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
