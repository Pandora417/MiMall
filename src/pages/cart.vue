<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span class="checkbox" :class="{'checked':checkAllFlag}" @click="toggleAll"></span>全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item,index) in cartList" :key="index">
              <div class="item-check">
                <span 
                  class="checkbox" 
                  v-bind:class="{'checked':item.checked}" 
                  @click="editCart('checked',item)"
                ></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt="">
                <div class="pro-name"><span>{{item.productName}}</span></div>
                
              </div>
              <div class="item-price">{{item.productPrice}}元</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="editCart('minus',item)">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="editCart('add',item)">+</a>
                </div>
              </div>
              <div class="item-total">{{(item.productPrice*item.quantity) | currency}}</div>
              <div class="item-del" @click="delCartConfim(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/">继续购物</a>
            共<span>{{cartList.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{totalPrice}}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示" 
      btnType="3"
      modalType="middle"
      :showModal="showModal"
      @submit="delProduct()"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>是否删除此商品？</p>
      </template>
    </modal>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
import Modal from './../components/Modal'

export default{
  name:'cart',
  components:{
    OrderHeader,
    ServiceBar,
    NavFooter,
    Modal
  },
  data(){
    return{
      showModal:false,
      delItem:'',  //准备删除的商品
      allChecked:false,  //是否全选
      cartTotalPrice:0,  //商品总金额
    }
  },
  computed:{
    //是否全选
    checkAllFlag(){
      //当数组中所有对象都返回true时，整体才会返回true
      return this.cartList.every((item)=>{
        return item.checked;
      })
    },
    //购物车列表
    cartList(){
      localStorage.cartList=JSON.stringify(this.$store.state.cartList)
      // return JSON.parse(localStorage.cartList)
      return this.$store.state.cartList
    },
    //计算总价格
    totalPrice(){
      let money =0;
      this.cartList.forEach((item)=>{
        if(item.checked){
          money+=item.productPrice*item.quantity;
        }
      })
      return money;
    },
    //已选商品数量
    checkedNum(){
      return this.cartList.filter(item=>item.checked).length;
    }
  },
  //过滤器
  filters:{
    currency(value){
      if(!value) return 0.00;
      return '￥' + value.toFixed(2) + '元';
    }
  },
  methods:{
    editCart(type,item){  //添加
      if(type=='add'){
        if(item.quantity == 10){
          this.$message.warning('购买不允许超过10件')
        }else{
          item.quantity++;
        }
      }else if(type=='minus'){  //减少
        if(item.quantity == 1){
          this.$message.warning('商品至少保留一件')
          return;
        }else{
          item.quantity--;
        }
      }else{  //是否勾选
        item.checked=!item.checked;
      }
    },
    // 购物车下单
    order(){
      if(this.checkedNum){
        localStorage.totalPrice=this.totalPrice;
        this.$router.push('/order/confirm');
      }
    },
    //是否全选
    toggleAll(){
      let flag= !this.checkAllFlag;
      this.cartList.forEach((item)=>{
        item.checked=flag;
      })
    },
    //删除数据：弹出确认弹框
    delCartConfim(item){
      this.delItem=item;
      this.showModal = true;
    },
    //删除产品
    delProduct(){
      let delItem=this.delItem;
      this.cartList.forEach((item,index)=>{
        if(delItem.productId == item.productId){
          this.cartList.splice(index,1);
           this.showModal=false;
        }
      })
    }
  },
  mounted(){

  }

}
</script>
<style lang="scss">
  @import '../assets/scss/config';
  .cart{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid $colorH;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url('/imgs/icon-gou.png') $colorA no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid $colorH;
            font-size:16px;
            .item-check{
              flex:1;
            }
            .item-name{
              flex:3;
              font-size: 18px;
              color: $colorB;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              .pro-name{
                width: 255px;
                
              }
              
            }
            .item-price{
              flex:1;
              color:$colorB;
            }
            .item-num{
              flex:2;
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid $colorH;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:$colorB;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:$colorB;
                }
              }
            }
            .item-total{
              flex:1;
              color:$colorA;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: $colorC;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: $colorC;
            margin-right:37px;
          }
          span{
            color:$colorA;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:$colorA;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>