<template>
  <div class="cart">
    <h2>My Cart</h2>
    <p v-show="!products.length">
      <i>Add the products to the cart.</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">{{product.title}}-{{product.price}} x {{product.quantity}}</li>
    </ul>
    <p>Total : {{total|currency}} </p>
    <p><button :disabled="!products.length"
        @click="checkout(products)">Purchase</button></p>
    <p v-show="checkoutStatus">Purchase Status : {{checkoutStatus}}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "ShoppingCart",
  computed: {
    ...mapState({checkoutStatus: state => state.cart.checkoutStatus}),
    ...mapGetters('cart', {
      products: 'cartProduct',
      total: 'cartTotalPrice',
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>

<style scoped>

</style>
