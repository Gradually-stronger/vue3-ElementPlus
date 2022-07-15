import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import './index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@wangeditor/editor/dist/css/style.css'

import App from './App.vue';
import router from './router/index';
import { store } from './vuex/index';
import Particles from 'particles.vue3';
/**
 * //挂载全局 app.config.globalProperties.$ELEMENT = option
 * import { getCurrentInstance} from 'vue';
 * const {ctx } = getCurrentInstance();
 */

createApp(App).use(router).use(store).use(Particles).mount('#app');
