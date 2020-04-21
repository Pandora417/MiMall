 
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
  },
  saveCartList(state,pro){
    if(localStorage.cartList){
      // localStorage.cartList=JSON.stringify(JSON.parse(localStorage.cartList).concat(JSON.parse(pro)))
      // state.cartList=JSON.parse(localStorage.cartList)
      state.cartList=JSON.parse(localStorage.cartList).concat(JSON.parse(pro))
      localStorage.cartList=JSON.stringify(state.cartList)
    }else{
      state.cartList=state.cartList.concat(JSON.parse(pro))
      localStorage.cartList = JSON.stringify(state.cartList)
    }
  }
}