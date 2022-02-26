import Shop from "../../api/shop";

const state = () => ({
  all: []
})

const getters = {

}

const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  decrementProductInventory(state, {id}) {
    const product = state.all.find(p => p.id === id);
    product.inventory--;
  }
}

const actions = {
  getAllProducts({commit}) {
    Shop.getProducts(product => {
      commit('setProducts', product)
    })
  }
}

export default {
  namespaced: true,
  state, getters, actions, mutations
}
