<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from '../components/ServiceBar'
import NavFooter from '../components/NavFooter'
export default{
  name:'order',
  components:{
    OrderHeader,
    ServiceBar,
    NavFooter
  },
  data(){
    return{
      title:'',
      tip:''
    }
  },
  mounted(){
    //获取路由
    let path = this.$route.path;
    if(path=='/order/confirm'){
      this.title = '订单确认'
      this.tip = '请认真添写收货地址';
    }else if(path=='/order/list'){
      this.title = '订单列表'
      this.tip = '请确认商品列表无误';
    }else if(path=='/order/pay'){
      this.title = '订单支付'
      this.tip = '请谨防钓鱼链接或诈骗电话';
      //alipay 是个空页面
    }else if(path=='/order/alipay'){
      this.title = '支付宝支付'
      this.tip = '请谨防钓鱼链接或诈骗电话';
    }
  }
}
</script>
<style scoped>

</style>