<template>
  <div id="app">
    {{count}}<br>
    <button @click="increment">+</button><br>
    <button @click="decrement">-</button><br>
    <button @click="incrementIfOdd">Increase if it is odd</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementIfOdd() {
      if(this.count%2===1) {
        this.increment();
      }
    },
  }
}
</script>

<style>

</style>
