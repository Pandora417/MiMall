<template>
  <div class="order-list">
    <!-- <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header> -->
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order">
            <div class="order-title">
              <div class="item-info fl">
                {{currentTime}}
                <span>|</span>
                {{addName}}
                <span>|</span>
                订单号：{{orderNo}} 
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{totalPrice}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,index) in orderList" :key="index">
                  <div class="good-img">
                    <img v-lazy="item.productMainImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.productPrice}} X {{item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;">已支付，预计3-5天内送达</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import OrderHeader from './../components/OrderHeader'
  export default{
    name:'order-list',
    components:{
      // OrderHeader
    },
    computed:{
      totalPrice(){
        return localStorage.totalPrice
      }
    },
    data(){
      return{
        currentTime:'2020年02月02日',  //当前日期
        orderNo:201621177059,  //订单编号
        addName:'Pandora',  //地址用户名
        orderList:[]
      }
    },
    methods:{
      getOrderList(){

      },
      getTime(){
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var strHour = date.getHours();
        var strMin = date.getMinutes();
        var strSecond = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (strHour >= 0 && strHour <= 9) {
            strHour = "0" + strHour;
        }
        if (strMin >= 0 && strMin <= 9) {
            strMin = "0" + strMin;
        }
        if (strSecond >= 0 && strSecond <= 9) {
            strSecond = "0" + strSecond;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + strHour + seperator2 + strMin
                + seperator2 + strSecond;
        this.currentTime = currentdate;
      }
    },
    mounted(){
      this.getTime()
      this.orderNo = localStorage.orderNum
      this.addName = JSON.parse(localStorage.addressList)[0].name
      this.orderList = JSON.parse(localStorage.orderList)
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                border-bottom: 1px solid #d7d7d7;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>