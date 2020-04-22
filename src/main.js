import Vue from 'vue'
import Router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

//mock开关
// const mock = false;
// if(mock){
//   require('./mock/api');
// }

// //根据前端的跨域方式做调整
// axios.defaults.baseURL = '/api';
// axios.defaults.timeout = 8000;//超时会终止
//接口错误拦截
// axios.interceptors.response.use(function(response){
//   let res = response.data;
//   if (res.status == 0){ //正常
//     return res.data;
//   }else if(res.status == 10){//状态码异常，未登录
//     window.location.href = '/#/login';
//   }else{
//     alert(res.msg);
//     return Promise.reject(); //抛出异常报错
//   }
// })

Vue.use(VueAxios,axios)
// Vue.use(Message)
Vue.prototype.$message = Message;
Vue.prototype.$axios = axios
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie);
Vue.config.productionTip = false //生产环境的提示

new Vue({
  router:Router,
  store,
  render: h => h(App),
}).$mount('#app')
