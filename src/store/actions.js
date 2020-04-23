 
/**
 * 商城Vuex-actions
 */

export default{
  saveUserName(context,username){
    context.commit('saveUserName',username)
  },
  saveCartCount(context,cartCount){
    context.commit('saveCartCount',cartCount)
  },
  saveCartList(context,pro){
    context.commit('saveCartList',pro)
  },
  saveAddressList(context,addressList){
    context.commit('saveAddressList',addressList)
  }
}