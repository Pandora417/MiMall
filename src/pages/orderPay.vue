<template>
  <div class="order-pay">
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
              <p>收货信息：{{orderDetail.name}} {{orderDetail.phone}} {{orderDetail.province}} {{orderDetail.city}} {{orderDetail.district}}</p>
            </div>
            <div class="order-total">
              <p>应付总额：<span>{{totalPrice}}</span>元</p>
              <p @click="showDetail=!showDetail" class="orderD">订单详情<em class="icon-down up"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{orderNo}}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{orderDetail.name}} {{orderDetail.phone}} {{orderDetail.province}} {{orderDetail.city}} {{orderDetail.district}}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item,index) in orderList" :key="index">
                    <img v-lazy="item.productMainImage"/>{{item.productName}}全网通版 6GB内存 深空灰 64GB
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <div class="pay-list">
              <p>支付平台</p>
              <a href="/#/order/list" class="toList">支付成功后，点击查看我的订单</a>
            </div>
            <div class="pay">
              <div class="pay-ali"></div>
              <div class="ali"></div>
            </div>
            <div class="pay">
              <div class="pay-wechat"></div>
              <div class="wechat"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <scan-pay-code v-if="showPay"></scan-pay-code>
  </div>
</template>
<script>
// import OrderHeader from './../components/OrderHeader'
import ScanPayCode from './../components/ScanPayCode'
export default{
  name:'order-pay',
  data(){
    return {
      orderNo:this.$route.query.orderNo,  //订单编号
      showDetail:false,//是否显示订单详情
      showPay:false,//是否显示微信支付弹框
      orderDetail:{},  //地址详情
      // payType:1,  //默认是支付宝支付
      orderList:[]//商品详情
    }
  },
  components:{
    // OrderHeader,
    ScanPayCode
  },
  computed:{
    username(){
      return localStorage.username
    },
    // orderAddress(){
    //   this.address = JSON.parse(localStorage.username).city
    //   return this.address
    // },
    totalPrice(){
      return localStorage.totalPrice
    },
  },
  methods:{
    // 关闭微信弹框
    closePayModal(){
      this.showPay = false;
      this.showPayModal = true;
      clearInterval(this.T);
    },
    goOrderList(){
      this.$router.push('/order/list');
    },
    getOrderDetail(){
      this.orderDetail = JSON.parse(localStorage.addressList)[0]
      this.orderList = JSON.parse(localStorage.orderList)
    }
    // paySubmit(payType){
    //   if(payType==1){
    //     console.log(this.orderNo)
    //     window.open('/#/order/alipay?orderNo='+this.orderNo,'_blank')
    //   }
    // }
  },
  mounted(){
    this.getOrderDetail()
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/mixin';
  @import '../assets/scss/config';
  .order-pay{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:61px;
      .order-wrap{
        padding: 62px 50px;
        background-color: #fff;
        font-size:14px;
        margin-bottom:30px;
        .item-order{
          display: flex;
          align-items: center;
          .icon-succ{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background:url('/imgs/icon-gou.png') #80c58a no-repeat center;
            background-size:60px;
            margin-right:40px;
          }
          .order-info{
            margin-right: 248px;
            h2{
              font-size:24px;
              color:$colorB;
              margin-bottom:20px;
            }
            p{
              color:$colorC;    
              margin: 10px 0;
              font-size: 16px;
              span{
                color:#FF6700;
              }
            }
          }
          .order-total{
            &>p:first-child{
              margin-bottom:30px;
            }
            .orderD{
              cursor: pointer;
            }
            span{
              font-size:28px;
              color:#FF6700;
            }
            .icon-down{
              display:inline-block;
              width:14px;
              height:10px;
              background:url('/imgs/icon-down.png') no-repeat center;
              background-size:contain;
              margin-left:9px;
              transition:all .5s;
              cursor:pointer;
              &.up{
                transform: rotate(180deg);
              }
            }
            .icon-up{
              transform: rotate(180deg);
            }
          }
        }
        .item-detail{
          border-top: 1px solid #D7D7D7;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          margin-top: 45px;
          .item{
            margin-bottom:19px;
            .detail-title{
              float:left;
              width:100px;
            }
            .detail-info{
              display:inline-block;
              img{
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .item-pay{
        padding:26px 50px 72px;
        background-color:$colorG;
        color: $colorB;
        height: 450px;
        h3{
          font-size: 20px;
          font-weight: 200;
          color: $colorB;
          padding-bottom: 24px;
          border-bottom: 1px solid #D7D7D7;
          margin-bottom: 26px;
        }
        .pay-way{
          font-size:18px;
          .pay-list{
            display: flex;
            justify-content: space-between;
            p{
              margin: 10px 0;
            }
            .toList{
              background: $colorA;
              height: 50px;
              width: 270px;
              float: right;
              color: #fff;
              text-align: center;
              line-height: 50px;
              border-radius: 10px;
            }
          }
          .pay{
            display: block;
            width: 500px;
            height: 580px;
            // border: 1px solid #D7D7D7;
            float: left;
            cursor: pointer;
            box-sizing: border-box;
            &:last-child{
              margin-left:20px;
            }
            &.checked{
              border:1px solid #FF6700;
            }
            .pay-ali{
              @include bgImg(120px,60px,'/imgs/pay/icon-ali.png',contain);
              margin: 0 190px;
            }
            .ali{
              @include bgImg(240px,270px,'/imgs/pay/alipay.png',contain);
              margin: 0 130px;
            }
            .pay-wechat{
              @include bgImg(120px,60px,'/imgs/pay/icon-wechat.png',contain);
              margin: 0 190px;
            }
            .wechat{
              @include bgImg(240px,270px,'/imgs/pay/wechat.png',contain);
              margin: 0 130px;
            }
          }
          
        }
      }
    }
  }
  .service{
    .container{
      height: 100px;
    }
  }
</style>