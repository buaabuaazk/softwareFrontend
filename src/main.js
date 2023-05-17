import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
