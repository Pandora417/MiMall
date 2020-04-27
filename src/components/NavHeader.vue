<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="top-user">
          <!-- <a href="/#/index">首页</a> -->
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="" v-if="username" @click="logout">退出</a>
          <!-- <a :href="'/#/login'" v-if="!username">登录</a> -->
          <a href="javascript:;" v-if="!username" @click="register">注册</a>
          <a href="javascript:;" class="my-cart" @click="goCart">
            <span class="icon-cart"></span>
            购物车&nbsp;&nbsp;
            <span v-if="username">({{cartCount}})</span>
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in productList" :key="index">
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in redmi" :key="index">
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
// import {mapState} from 'vuex'
export default{
  name:'NavHeader',
  data(){
    return {
      data:{},
      productList:[],
      styleObject:{
        display:'none'
      },
      cartCount:0,
      redmi:[]  //六个红米手机
    }
  },
  computed:{
    //可解决变量延迟问题
    username(){
      // return this.$store.state.username
      return localStorage.username;
    }
    
    // ...mapState(['cartCount'])
  },
  methods:{
    login(){
      this.$router.push('/login');    
      
    },
    logout(){
      localStorage.username=''
      localStorage.cartList=[]
      // this.$router.push('/#/index');
    },
    register(){
      this.$router.push('/login');
    },
    getProductList(){
      this.axios.get('/json/products6.json').then((res) => { // 只要是放在public文件夹下的json文件都可以不修改配置直接引入
        let result = res.data;
        if (result.status == 0) {
          this.data = result.data;
          this.productList = this.data.productList;
        }
      })
    },
    getRedMi(){
      this.axios.get('/json/redmi6.json').then((res)=>{
        this.redmi = res.data.data.phoneList
        console.log(this.redmi)
      })
    },
    goCart(){
      if(this.username){
        this.$router.push('/cart')
      }else{
        this.$message.info('请先登录')
      }
    },
    getCartCount(){
      let test1 = localStorage.cartList
      if (typeof test1 == 'string') {
        this.cartCount = JSON.parse(test1).length;
      }
    }
  },
  filters:{
    currency(val){
      if (!val)return '0.00'
      return '￥'+val.toFixed(2) + '元'
    }
  },
  mounted(){
    this.getProductList();
    this.getCartCount();
    this.getRedMi();
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: $colorB;
      color: $colorL;
      .container{
        @include flex();
        a{
          display: inline-block;
          color: $colorL;
          margin-right: 17px;
        }
        .my-cart{
          width:110px;
          background-color: $colorA;
          text-align: center;
          margin-right: 0px;
          color: $colorG;
          .icon-cart{
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url(/imgs/icon-cart-checked.png) no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        height: 112px;
        @include flex();
        // .header-logo{}
        .header-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: $colorB;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color:$colorA;
              .children{
                height: 220px;
                opacity:1;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity:0;
              overflow:hidden;
              z-index: 10;
              background-color: $colorG;
              transition:all .5s;
              border-top: 1px solid $colorH;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              .product{
                position: relative;
                float:left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                background: $colorG;
                a{
                  display: inline-block;
                  .pro-img{
                    height: 137px;
                    img{
                      width: auto;
                      height: 111px;
                      margin-top: 26px;
                    }
                  }
                  .pro-name{
                    font-weight: bold;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: $colorB;
                  }
                  .pro-price{
                    font-weight: bold;
                    color: $colorA;
                  }
                }
                &:before{
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width:1px;
                }
                &:last-child:before{ //去掉最后一个子元素的竖线
                  display: none;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 54px;
            border:1px solid $colorM;
            display: flex;
            align-items: center;
            input{
              border:none;
              border-right: 1px solid $colorM;
              width: 264px;
              height: 50px;
              padding-left: 14px;
              box-sizing: border-box;
            }
            a{
              display: inline-block;
              height: 18px;
              width: 18px;
              background: url(/imgs/icon-search.png) no-repeat center;
              background-size: contain;
              margin: auto;
            }
          }
        }
      }
    }
  }
</style>