<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>
          {{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
        <!-- <a href="javascript:;">我的订单</a> -->
        <!-- <a href="javascript:;">Pandora</a> -->
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  name:'OrderHeader',
  props:{
    title:String
  },
  computed:{
    ...mapState(['username'])
    // 等价于username(){
    //   return this.$store.state.username;
    // }
  },
}
</script>
<style lang="scss">
  @import '../assets/scss/config';
  .order-header{
    padding:30px 0;
    border-bottom:2px solid $colorA;
    .header-logo{
      float:left;
    }
    .title,.username{
      display:inline-block;
      height:55px;
      line-height:55px;
    }
    .title{
      float:left;
      margin-left:54px;
      h2{
        font-size:28px;
        color:$colorB;
      }
      span{
        font-size:14px;
        margin-left:17px;
        color:#999999;
        font-weight:200;
      }
    }
    .username{
      float:right;
      a{
        color:$colorC;
        font-size:16px;
        margin-left: 30px;
      }
    }
  }
</style>