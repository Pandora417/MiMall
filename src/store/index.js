// 我们组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

//为了刷新后数据依旧还是缓存的数据
let defaultName = '';
let defaultCartList = [];
let defaultAddressList = [];
try {
  if (localStorage.username) {
    defaultName = localStorage.username
  }
} catch (e) {
  alert("该浏览器不支持localStorage")
}
try {
  if (localStorage.cartList) {
    defaultCartList = JSON.parse(localStorage.cartList)
  }
} catch (e) {
  alert("该浏览器不支持localStorage")
}
try {
  if (localStorage.addressList) {
    defaultAddressList = JSON.parse(localStorage.addressList)
  }
} catch (e) {
  alert("该浏览器不支持localStorage")
}

const state={
  username:defaultName, //登录用户名
  cartCount:0,  //购物车数量
  cartList:defaultCartList, //购物车列表
  addressList:defaultAddressList  //地址列表
}

export default new Vuex.Store({
  state,
  mutations,
  actions
});