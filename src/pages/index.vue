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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default{
  name:'index',
  components:{
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      swiperOptions:{
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
      slideList:[
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
      menuList:[
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
      ]
    }
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
  }
</style>