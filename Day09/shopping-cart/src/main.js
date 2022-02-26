import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {currency} from "./currency";

Vue.filter('currency', currency)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
