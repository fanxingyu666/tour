import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import qs from 'qs'
import MyHeader from './components/myheader.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//让myheader变成全局组件
Vue.component("my-header",MyHeader)
Vue.config.productionTip = false
axios.defaults.baseURL="http://127.0.0.1:3000";
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
