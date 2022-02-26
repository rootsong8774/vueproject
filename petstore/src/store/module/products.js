import axios from "axios";

const state = {
  products: {}
}
const getters = {
  products: state => state.products
}

const mutations = {
  setStore (state, products) {
    state.products = products
  }
}

const actions = {
  initStore : ({commit}) => {
    axios.get('static/products.json')
    .then((response) => {
      console.log(response.data.products)
      commit('setStore', response.data.products)
    })
  }
}

export default {
  state, getters, mutations, actions
}
