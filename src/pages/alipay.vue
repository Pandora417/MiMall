<template>
  <div class="ali-pay">
    <loading></loading>
  </div>
</template>
<script>
import Loading from './../components/Loading'
export default{
  name:'alipay',
  components:{
    Loading
  },
  data(){
    return{
      orderNo:this.$route.query.orderNo,  //订单编号
      content:''
    }
  },
  mounted(){
    this.paySubmit()
  },
  methods:{
    paySubmit(){
      console.log(this.orderNo)
    }
  }
}
</script>
<style scoped>

</style>