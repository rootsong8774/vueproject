import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: JSON.parse('[]')
  },
  actions,
  mutations,
})
