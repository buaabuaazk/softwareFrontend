import { createRouter, createWebHistory } from 'vue-router';
import list from "../components/list.vue"
import home from "../views/Home/Home.vue"
import test1 from "../components/part/test1.vue"
import test2 from "../components/part/test2.vue"
import echart from "../components/echarts.vue"
import foot from "../views/Home/foot.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      home,
      list,
      foot
    },
    meta: {
      mainNavShow: true,
      leftNav: true,
      list: true,
      foot:true
    },
  },
  {
    path: '/login',
    name: 'SignIn',
    component: () => import('../views/login/UserLogin.vue'),
    meta: {
        mainNavShow: false,
        leftNav: false,
        list: false,
    }
   },
   {
    path: '/test/test1',
    name: 'test1',
    //component: () => import('../components/part/test1.vue'),
    components: {
      test1
    },
    meta: {
      leftNav: true,
      mainNavShow: false,
      list: false,
      test1: true
    }
  },
  {
    path: '/test/test2',
    name: 'test2',
    components: {
      test2
    },
    meta: {
      leftNav: true,
      mainNavShow: false,
      list: false,
      test2: true
    }
  },
  {
    path: '/echarts',
    name: 'echart',
    // component: () => import('@/components/echarts.vue'),
    components: {
      echart
    },
    meta: {
      leftNav: true,
      mainNavShow: false,
      list: false,
      echart: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
