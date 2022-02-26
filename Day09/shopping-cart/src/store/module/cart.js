import shop from "../../api/shop";

const state = () => ({
  items:[],
  checkoutStatus: null
})

const mutations = {
  pushProductToCart(state, {id}) {
    state.items.push({id, quantity:1})
  },
  incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item=>item.id === id)
    cartItem.quantity++;
  },
  setCartItems(state, {item}){
    state.items=item
  },
  setCheckoutStatus (state, status){
    state.checkoutStatus =status
  }

}

const getters = {
  cartProduct : (state, getters, rootState) =>{
    return state.items.map(({id,quantity}) => {
      const product = rootState.products.all.find(product => product.id===id)
      return {id: product.id, title: product.title, price: product.price, quantity: quantity}
    })
  },
  cartTotalPrice : (state, getters) => {
    return getters.cartProduct.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  checkout ({commit, state}, product){
    const savedCartItems = [...state.items]
    commit['setCheckoutStatus', null]
    commit['setCartItems', {items:[]}]
    shop.buyProducts(product,
      ()=>commit('setCheckoutStatus', 'successful'),
      ()=>{
      commit('setCheckoutStatus', 'failed')
      commit('setCartItems',{items:savedCartItems})
    })

  },
  addProductToCart({state, commit}, product){
    commit['setCheckoutStatus', null]
    if(product.inventory > 0) {
      const cartItem = state.items.find(item => item.id===product.id)
      if(!cartItem) {
        commit('pushProductToCart', {id: product.id})
      } else {
        commit('incrementItemQuantity', cartItem)
      }
    }
    commit('products/decrementProductInventory', {id: product.id}, {root: true})
  }
}

export default {
  namespaced: true,
  actions, getters, mutations, state
}
