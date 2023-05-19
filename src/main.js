import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from "axios";
import VueAxios from "vue-axios";
import * as echarts from 'echarts';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, {
    locale: zhLocale
})
app.use(ElementPlus);
app.use(router);
app.use(VueAxios, axios);
app.config.globalProperties.$echarts = echarts;

app.mount('#app');
