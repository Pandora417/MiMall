<template>
  <div  class="order-confirm">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2 class="addr-title">收货地址</h2>
            <div class="addr-list clearfix">
              <div 
                class="addr-info" 
                v-for="(item,index) in addressList" 
                :key="index"
                :class="{'checked':index == checkIndex}"
                @click="checkIndex=index"
              >
                <h2>{{item.name}}</h2>
                <div class="phone">{{item.phone}}</div>
                <div class="street">{{item.province}} {{item.city}} {{item.area}} <br>{{item.address}}</div>
                <div class="postcode">{{item.postcode}}</div>
                <div class="action">
                  <a href="javascript:;" class="fl">
                    <!-- <svg class="icon icon-edit"><use xlink:href="#icon-edit"></use></svg> -->
                  </a>
                  <a href="javascript:;" class="fr" @click="delConfirm(item)">
                    <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                  </a>
                </div>
              </div>
              <div class="addr-add" @click="openAddressModal">
                <div class="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div class="item-good">
            <h2>商品</h2>
            <ul>
              <li v-for="(item,index) in orderList" :key="index">
                <div class="good-name">
                  <img v-lazy="item.productMainImage" alt="">
                  <span>{{item.productName}} ({{item.subtitle}})</span>
                </div>
                <div class="good-price">{{item.productPrice}}元 x {{item.quantity}}</div>
                <div class="good-total">{{item.productPrice*item.quantity}}元</div>
              </li>
              
            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-name">商品件数：</span>
              <span class="item-val">{{count}}件</span>
            </div>
            <div class="item">
              <span class="item-name">商品总价：</span>
              <span class="item-val">{{totalPrice}}元</span>
            </div>
            <div class="item">
              <span class="item-name">优惠活动：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-name">运费：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item-total">
              <span class="item-name">应付总额：</span>
              <span class="item-val">{{totalPrice}}元</span>
            </div>
          </div>
          <div class="btn-group">
            <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
            <a href="javascript:;" class="btn btn-large" @click="orderSubmit">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <modal
      title="提示"
      btnType="1"
      :showModal="showDelModal"
      @submit="delAddress()"
      @cancel="showDelModal=false"
    >
      <template v-slot:body>
        <p>是否删除？</p>
      </template>
    </modal>
    <modal
      title="新增确认"
      btnType="1"
      :showModal="showEditModal"
      @submit="addAddress()"
      @cancel="showEditModal=false"
    >
      <template v-slot:body>
        <div class="edit-wrap">
          <div class="item">
            <input type="text" class="input" placeholder="姓名" v-model="addItem.name">
            <input type="text" class="input" placeholder="手机号" v-model="addItem.phone">
          </div>
          <div class="item">
            <v-distpicker 
              @province="onChangeProvince"
              @city="onChangeCity"
              @area="onChangeArea"
            >
            </v-distpicker>
            <!-- <select name="province" v-model="addItem.province">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">河北</option>
            </select>
            <select name="city" v-model="addItem.city">
              <option value="北京">北京</option>
              <option value="天津">天津</option>
              <option value="河北">石家庄</option>
            </select>
            <select name="district" v-model="addItem.district">
              <option value="北京">昌平区</option>
              <option value="天津">海淀区</option>
              <option value="河北">东城区</option>
              <option value="天津">西城区</option>
              <option value="河北">顺义区</option>
              <option value="天津">房山区</option>
            </select> -->
          </div>
          <div class="item">
            <input type="text" class="input detail" placeholder="详细地址" v-model="addItem.address">
          </div>
          <div class="item">
            <input type="text" class="input detail" placeholder="邮政编号" v-model="addItem.postcode">
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from './../components/Modal'
import VDistpicker from 'v-distpicker'
export default{
  name:'order-confirm',
  components:{
    Modal,
    VDistpicker 
  },
  data(){
    return {
      // addressList:[],//收货地址列表
      orderList:[],//购物车中需要结算的商品列表
      showDelModal:false, //是否显示确认删除弹框
      showEditModal:false,//是否显示新增弹框
      totalPrice:0,  //总金额
      count:0,  //商品总件数
      delItem:{},  //删除item地址
      addItem:{},  //新增item地址
      checkIndex:0,  //默认地址为第一项
      orderNum:201621177059
    }
  },
  computed:{
    addressList(){
      localStorage.addressList=JSON.stringify(this.$store.state.addressList)
      return this.$store.state.addressList;
    }
  },
  methods:{
    //获取默认地址列表
    getAddressList(){
      this.$axios.get('/json/address.json').then((res)=>{
        this.addressList.push(res.data)
        this.$store.dispatch('saveAddressList',JSON.stringify(this.addressList));
        // console.log(this.addressList)
      })
    },
    //获取默认订单列表
    getOrderList(){
      this.totalPrice = localStorage.totalPrice;//商品总金额
      this.orderList = JSON.parse(localStorage.cartList).filter(item=>item.checked) //filter带有过滤循环功能
      localStorage.orderList = JSON.stringify(this.orderList);
      this.orderList.map((item)=>{
        this.count += item.quantity;
      })
    },
    //是否确认删除
    delConfirm(item){
      this.showDelModal=true;
      this.delItem = item;
    },
    //删除地址
    delAddress(){
      let delItem = this.delItem
      // console.log(delItem)
      this.addressList.forEach((item,index)=>{
        if (delItem.name == item.name){
          this.addressList.splice(index,1);
          this.showDelModal=false;
        }
      })
      this.$message.success('删除地址成功');
    },
    onSubmit(){
      
    },
    //添加地址
    addAddress(){
      // console.log(this.addItem);
      // this.onSubmit()
      if(this.addItem.name == undefined){
        this.$message.error('请填写姓名')
        return
      }
      if(this.addItem.phone == undefined){
        this.$message.error('请填写手机号码')
        return
      }else if(!(/^1[34578]\d{9}$/.test(this.addItem.phone))){
        this.$message.error('手机号码格式错误')
        return
      }
      if(this.addItem.province == undefined || this.addItem.city == undefined || this.addItem.area == undefined){
        this.$message.error('请将地区信息填写完整')
        return;
      }
      if(this.addItem.address == undefined){
        this.$message.error('请填写具体地址')
        return
      }
      this.addressList.push(this.addItem)
      this.addItem = {}
      // console.log(this.addItem)
      this.showEditModal=false;
    },
    //获取绑定的省市区信息
    onChangeProvince(data) {
      this.addItem.province = data.value
    },
    onChangeCity(data){
      this.addItem.city = data.value
    },
    onChangeArea(data){
      this.addItem.area = data.value
      this.addItem.postcode = data.code
    },
    // 打开新增地址弹框
    openAddressModal(){
      this.addItem = {};
      this.showEditModal = true;
    },
    getDate() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + month + strDate
               + date.getHours() + date.getMinutes()
              + date.getSeconds();
      this.orderNum = currentdate;
      localStorage.orderNum = this.orderNum;
      // console.log(this.orderNum)
    },
    // 订单提交
    orderSubmit(){
      let item = this.addressList[this.checkIndex];
      if(!item){
        this.$message.error('请选择一个收货地址');
        return;
      }
      this.getDate()
      this.$router.push({
        path:'/order/pay',
        query:{
          orderNo:this.orderNum
        }
      })
    }
  },
  mounted(){
    // this.getAddressList()
    this.getOrderList();
    this.getDate()
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/config';
  .order-confirm{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:84px;
      .order-box{
        background-color:$colorG;
        padding-left: 40px;
        padding-bottom: 40px;
        .addr-title{
          font-size: 20px;
          color: $colorB;
          font-weight: 200;
          margin-bottom:21px;
        }
        .item-address{
          padding-top: 38px;
          .addr-list{
            .addr-info,.addr-add{
              box-sizing:border-box;
              float: left;
              width:271px;
              height:180px;
              border:1px solid $colorH;
              margin-right: 15px;
              padding: 15px 24px;
              font-size: 14px;
              color:#757575;
            }
            .addr-info{
              cursor:pointer;
              h2{
                height:27px;
                font-size:18px;
                font-weight: 300;
                color:#333;
                margin-bottom:10px;
              }
              .street{
                height:50px;
              }
              .action{
                height:40px;
                line-height:40px;
                .icon{
                  width: 20px;
                  height: 20px;
                  fill: $colorC;
                  vertical-align: middle;
                  &:hover{
                    fill: #FF6700;
                  }
                }
              }
              &.checked{
                border:1px solid #ff6700;
              }
            }
            .addr-add{
              text-align:center;
              color: #999999;
              cursor:pointer;
              .icon-add{
                width:30px;
                height:30px;
                border-radius:50%;
                background:url('/imgs/icon-add.png') #E0E0E0 no-repeat center;
                background-size:14px;
                margin: 0 auto;
                margin-top: 45px;
                margin-bottom: 10px;
              }
            }
          }
        }
        .item-good{
          margin-top:34px;
          border-bottom: 1px solid $colorH;
          padding-bottom: 12px;
          h2{
            border-bottom:1px solid $colorH;
            padding-bottom: 5px;
          }
          li{
            display:flex;
            align-items: center;
            height:40px;
            line-height:40px;
            margin-top:10px;
            font-size:16px;
            color:$colorB;
            .good-name{
              flex:5;
              img{
                width:30px;
                height:30px;
                vertical-align:middle;
              }
            }
            .good-price{
              flex:2;
            }
            .good-total{
              padding-right:44px;
              color:$colorA;
            }
          }
        }
        .item-shipping,.item-invoice{
          margin-top:31px;
          line-height: 20px;
          h2{
            display: inline-block;
            margin-right: 71px;
            font-size: 20px;
            width: 80px;
          }
          span,a{
            font-size:16px;
            color:#FF6700;
            margin-right:23px;
          }
        }
        .detail{
          padding: 50px 44px 33px 0;
          border-bottom: 1px solid #f5f5f5;
          text-align: right;
          font-size: 16px;
          color: $colorC;
          .item-val{
            color:#FF6700;
          }
          .item{
            line-height: 15px;
            margin-bottom: 12px;
          }
          .item-val{
            display:inline-block;
            width:100px;
          }
          .item-total{
            .item-val{
              font-size:28px;
            }
          }
        }
        .btn-group{
          margin-top: 37px;
          text-align: right;
        }
      }
    }
    .edit-wrap{
      font-size:14px;
      .item{
        margin-bottom:15px;
        .input{
          display:inline-block;
          width:283px;
          height:40px;
          line-height:40px;
          padding-left:15px;
          border:1px solid $colorH;
          &+.input{
            margin-left:14px;
          }
        }
        select{
          height:40px;
          line-height:40px;
          border:1px solid $colorH;
          margin-right: 30px;
          padding: 10px;
        }
        .detail{
          height:62px;
          width:100%;
          padding:13px 15px;
          box-sizing:border-box;
          border:1px solid $colorH;
        }
      }
    }
  }
</style>