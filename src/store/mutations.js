 
/**
 * 商城Vuex-mutations
 */

export default{
  saveUserName(state,username) {
    state.username=username;
    try {
      localStorage.username = username
    } catch (error) {
      console.log("缓存出错")
    }
  },
  saveCartCount(state,cartCount){
    state.cartCount=cartCount;
    try {
      localStorage.cartCount = cartCount
    } catch (error) {
      console.log("缓存出错")
    }
  }
}