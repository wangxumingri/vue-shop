import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import './assets/css/global.css'
// 导入阿里的图标
import './assets/fonts/iconfont.css'
// 导入element.js
import './plugins/element.js'

// 全局配置axios
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:8888/api";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
