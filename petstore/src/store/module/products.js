import axios from "axios";

export const SET_STORE = 'SET_STORE';
export const SET_FILTER = 'SET_FILTER'

export default {
  state : {
    products: {},
    filteredProducts: []
  },
  getters : {
    products: state => state.products,
    filteredProducts: state=>state.filteredProducts
  },

  mutations : {

    [SET_STORE](state, products) {
      state.products = products
    },
    [SET_FILTER](state, products ) {
      state.filteredProducts = products
    }

  },
  actions : {
    initStore: ({commit, products}) => {
      axios.get('static/products.json')
      .then((response) => {
        console.log(response.data.products)
        commit(SET_STORE, response.data.products)
        commit(SET_FILTER, response.data.products)
      })
    }
  }
}



