import Vue from 'vue'
import Router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
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
// //接口错误拦截
// axios.interceptors.response.use(function(response){
//   let res = response.data;
//   if (res.status == 0){ //正常
//     return res.data;
//   }else if(res.status == 10){//状态码异常，未登录
//     window.location.href = '/#/login';
//   }else{
//     alert(res.msg);
//   }
// })

Vue.use(VueAxios,axios)
Vue.prototype.$axios = axios
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false //生产环境的提示

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
