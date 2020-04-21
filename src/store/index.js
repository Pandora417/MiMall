// 我们组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
//为了缓存
let defaultName = '';
// let defaultCart = 0;
try {
  if (localStorage.username) {
    defaultName = localStorage.username
  }
} catch (e) {
  alert("请重新输入")
}
// try {
//   if (localStorage.cartCount) {
//     defaultCart = localStorage.cartCount
//   }
// } catch (e) {
//   alert("请重新输入")
// }

const state={
  username:defaultName, //登录用户名
  cartCount:0,  //购物车数量
  cartList:[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});