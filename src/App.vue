<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/scss/reset.scss'

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss">
// 在此处引用顺序很重要，而且要加分号；和@，还有lang="scss"
  @import './assets/scss/reset.scss';
  @import './assets/scss/base.scss';
  @import './assets/scss/mixin.scss';
  @import './assets/scss/config.scss';  
  @import './assets/scss/modal.scss';
  @import './assets/scss/button.scss';

</style>
