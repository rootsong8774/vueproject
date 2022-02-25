<template>
  <div id="app">
    Counter : {{$store.state.count}} <br>
    Even or Odd? {{evenOrOdd}}<br>
    <button @click="increment">+</button>
    <button @click="decrement">-</button><br>
    <button @click="incrementIfOdd">Increase if it is odd</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
  ])

}
</script>

<style>

</style>
