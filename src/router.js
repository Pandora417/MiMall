import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Login from './pages/login'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderComfirm from './pages/orderComfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'
Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component:Home,
      redirect: '/index',  //默认选项
      children:[           //子路由
        {
          path:'/index',
          name:'index',
          component:Index
        }, {
          path:'/product/:id', //动态定义路由
          name:'product',
          component:Product
        }, {
          path:'/detail/:id', //动态定义路由
          name:'detail',
          component:Detail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children:[
        {
          path: 'list',
          name: 'order-list',
          component: OrderList
        },
        {
          path: 'confirm',
          name: 'order-comfirm',
          component: OrderComfirm
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: Alipay
        }
      ]
    }
  ]
});