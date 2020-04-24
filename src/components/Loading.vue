<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bars.svg" alt="">
  </div>
</template>
<script>
  export default {
    name:'loading'
  }
</script>
<style lang="scss" scoped>
  .loading{
    height: 337px;
    line-height: 300px;
    text-align: center;
    img{
      height: 100%;
    }
  }
</style>