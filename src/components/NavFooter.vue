<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;" target="_blank">帮助中心</a><span>|</span>
      <a href="javascript:;" target="_blank">关于我们</a><span>|</span>
      <a href="https://www.mi.com/about/user-agreement" target="_blank">小米商城用户协议 </a><span>|</span>
      <a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html" target="_blank">小米商城隐私政策</a><span>|</span>
      <a href="https://static.mi.com/feedback/" target="_blank">问题反馈</a>
    </div>
    <div class="footer-copyright">Copyright ©2020 潘倩 All Rights Reserved.</div>
  </div>
  

</template>
<script>
export default{
  name:'NavFooter'
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  .footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 20px;
      img{
        width: 53px;
        height: 45px;
        margin-bottom: 5px;
      }
    }
    .footer-link{
      margin-bottom: 12px;
      a{
        color: $colorD;
        display: inline-block;
      }
      span{
        margin:0 8px;
      }
    }
  }
</style>