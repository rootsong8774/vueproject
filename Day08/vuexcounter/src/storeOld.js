import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 0,
}
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
}
const actions = {
  increment: ({commit})=>commit('increment'),
  decrement: ({commit})=>commit('decrement'),
  incrementIfOdd({commit, state}){
    if(state.count%2===1) {
      commit('increment')
    }
  }
}
const getters = {
  evenOrOdd: (state)=>state.count%2 ? 'odd' : 'even'
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
