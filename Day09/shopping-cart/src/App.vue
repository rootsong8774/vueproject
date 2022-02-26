<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from "./component/ProductList";
import ShoppingCart from "./component/ShoppingCart";


export default {
  name: 'app',
  components: {ProductList, ShoppingCart}

}
</script>

<style>

</style>
