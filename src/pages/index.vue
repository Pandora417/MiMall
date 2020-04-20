<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="'/#/product/' + sub.id" target="_blank">
                      <img :src="sub.img" alt="">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/'+item.id">
              <img :src="item.img">
            </a>
          </swiper-slide>
          <!-- 如果需要分页器  slot是插槽-->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+ item.id" v-for="item in adsList" :key="item.id">
          <img v-lazy="item.img">
        </a>
      </div>
      <div class="banner">
        <a :href="'/#/product/1'">
          <img v-lazy="'/imgs/banner-1.png'">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/1">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item,index) in phoneList" :key="index">
              <div class="item" v-for="sub in item" :key="sub.id">
                <!-- <span>新品</span> -->
                <div class="item-img">
                  <img v-lazy="sub.mainImage" :alt="sub.subtitle">
                </div>
                <div class="item-info">
                  <h3>{{sub.name}}</h3>
                  <p>{{sub.subtitle}}</p>
                  <span class="price" @click="addCart(sub.id)">{{sub.price}} 元</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal 
      title="提示" 
      sureText="查看购物车" 
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="goToCart()"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功!</p>
      </template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default{
  name:'index',
  components:{
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal
  },
  data(){
    return {
      swiperOptions:{ //轮播参数
        autoplay:true,
        loop:true,
        effect : 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[ //轮播图片
        {
          id:'1',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'2',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'3',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'4',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'5',
          img:'/imgs/slider/slide-5.jpg'
        },
      ],
      menuList:[ //菜单栏中的手机参数
        [
          {
            id:0,
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id:1,
            img:'/imgs/item-box-2.png',
            name:'小米CC9'
          },
          {
            id:2,
            img:'/imgs/item-box-3.jpg',
            name:'小米CC9'
          },
          {
            id:3,
            img:'/imgs/item-box-4.jpg',
            name:'小米CC9'
          },
        ],
        [
          {
            id:0,
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id:1,
            img:'/imgs/item-box-2.png',
            name:'小米CC9'
          },
          {
            id:2,
            img:'/imgs/item-box-3.jpg',
            name:'小米CC9'
          },
          {
            id:3,
            img:'/imgs/item-box-4.jpg',
            name:'小米CC9'
          },
        ],[
          {
            id:0,
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id:1,
            img:'/imgs/item-box-2.png',
            name:'小米CC9'
          },
          {
            id:2,
            img:'/imgs/item-box-3.jpg',
            name:'小米CC9'
          },
          {
            id:3,
            img:'/imgs/item-box-4.jpg',
            name:'小米CC9'
          },
        ],[
          {
            id:0,
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id:1,
            img:'/imgs/item-box-2.png',
            name:'小米CC9'
          },
          {
            id:2,
            img:'/imgs/item-box-3.jpg',
            name:'小米CC9'
          },
          {
            id:3,
            img:'/imgs/item-box-4.jpg',
            name:'小米CC9'
          },
        ],[
          {
            id:0,
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id:1,
            img:'/imgs/item-box-2.png',
            name:'小米CC9'
          },
          {
            id:2,
            img:'/imgs/item-box-3.jpg',
            name:'小米CC9'
          },
          {
            id:3,
            img:'/imgs/item-box-4.jpg',
            name:'小米CC9'
          },
        ],[
          {
            id:0,
            img:'/imgs/item-box-1.png',
            name:'小米CC9'
          },
          {
            id:1,
            img:'/imgs/item-box-2.png',
            name:'小米CC9'
          },
          {
            id:2,
            img:'/imgs/item-box-3.jpg',
            name:'小米CC9'
          },
          {
            id:3,
            img:'/imgs/item-box-4.jpg',
            name:'小米CC9'
          },
        ]
      ],
      adsList:[ //广告位的手机参数
        {
          id:1,
          img:'/imgs/ads/a1.png'
        },
        {
          id:2,
          img:'/imgs/ads/a2.jpg'
        },
        {
          id:3,
          img:'/imgs/ads/a3.png'
        },
        {
          id:4,
          img:'/imgs/ads/a4.jpg'
        },
      ],
      phoneList:[],//手机展示区
      showModal:false,
      indexCart:[], //index页面的加入购物车数组
      product:{}
    }
  },
  methods:{
    addCart (id) {
      this.showModal=true;
      //做登录拦截
      this.axios.get('product'+ id +'.json').then((res)=>{
        this.product = res.data.data;
        let pro = {}
        pro.productId=this.product.id;
        pro.productName=this.product.name;
        pro.productMainImage=this.product.mainImage;
        pro.productPrice=this.product.price;
        pro.quantity=1;
        this.indexCart.push(pro)
      })
      
    },
    goToCart () {
      // 此处要添加判断
      // let path=location.hash;
      // if (path != '/#/index'){
      //   window.location.href = '/#/login'
      // }
      
      this.$router.push({
        name:'cart',
        query:{
          routeParams:JSON.stringify(this.indexCart)
        }
      });
    },
    getPhoneList(){
      this.axios.get('phoneList8.json').then((res)=>{
        let result = res.data.data;
        let arr = []
        arr[0]=result.phoneList.slice(0,4)
        arr[1]=result.phoneList.slice(4,8)
        this.phoneList = arr;
        console.log(this.phoneList)
      })
    }
  },
  mounted(){
    this.getPhoneList()
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/mixin';
  @import '../assets/scss/config';
  .index{
    .swiper-box{
      .swiper-container{
        height: 451px;
        img{
          width: 100%;
        }
        .swiper-button-prev{
          margin-left: 264px;
        }    
      }
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: rgba(85,88,90,.48);
        box-sizing: border-box;
        .menu-item{
          height: 50px;
          line-height: 50px;
          a{
            position: relative;
            display: block;
            font-size: 16px;
            padding-left: 30px;
            color:#fff;
            &:after{
              content: " ";
              position: absolute;
              @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              right: 30px;
              top: 17.5px;
            }
          }
          &:hover{
            background-color: #ff6600;
            .children{
              display: block;
            }
          }
          .children{
            display: none;
            position: absolute;
            top:0;
            left:264px;
            width: 962px;
            height: 451px;
            background: #ffffff;
            border: 1px solid #e5e5e5;
            ul{
              display: flex;
              justify-content: space-between;
              height: 75px;
              li{
                height: 75px;
                line-height: 75px;
                width: 241px;
                flex: 1;
                padding-left: 23px;
                a{
                  color:#333333;
                  font-size: 14px;
                  img{
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .ads-box{
      margin-top: 14px;
      margin-bottom: 31px;
      @include flex();
      a{
        width: 296px;
        height: 167px;
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background: $colorJ;
      padding: 30px 0;
      width: 100%;
      h2{
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 24px;
          img{
            width: 224px;
            height: 619px;
          }
        }
        .list-box{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 302px;
              background:#ffffff;
              text-align: center;
              span{
                top: 10px;
                position: relative;
                // display: inline-block;
                // width: 67px;
                // height: 24px;
                // background-color: #7ecf68;
              }
              .item-img{
                img{
                  height: 195px;
                  width: 100%;
                }
              }
              .item-info{
                h3{
                  color:#333333;
                  font-size: 14px;
                  line-height: 14px;
                  font-weight: bold;
                }
                p{
                  color: $colorD;
                  line-height: 13px;
                  margin: 10px;
                }
                .price{
                  color: #ff6600;
                  font-size: 14px;
                  font-weight: bold;
                  cursor: pointer;
                  &:after{
                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                    content:" ";
                    vertical-align: middle;
                    margin-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>