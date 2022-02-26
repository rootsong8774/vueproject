<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{product.title}} - {{product.price | currency}}<br><button :disabled="!product.inventory" @click="addProductToCart(product)">Add to Cart</button>
    </li>
  </ul>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: "ProductList",
  computed: mapState({
    products: state=> state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: mapActions('cart',['addProductToCart'])
}

</script>

<style scoped>

</style>
