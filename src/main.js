import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store' // 导入 Vuex 的 store 对象
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from "axios";
import VueAxios from "vue-axios";
import * as echarts from 'echarts';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThumbsUp, faComment)

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(ElementPlus, {
    locale: zhLocale
})
app.use(ElementPlus);
app.use(router);
app.use(store);//store
app.use(VueAxios, axios);
app.config.globalProperties.$echarts = echarts;
axios.defaults.baseURL = "http://81.70.17.242.8000";
app.mount('#app');
