<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <div v-for="product in sortedProducts">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img class="product" :src="product.image">
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <router-link
              tag="h1"
              :to="{ name : 'Id', params: {id: product.id} }">{{product.title}}</router-link>
            <p v-html="product.description"></p>
            <p class="price">{{ product.price |  formatPrice }}</p>
            <button class="btn btn-primary btn-lg" @click="addToCart(product)"
                    v-if="canAddToCart(product)">
              Add to cart
            </button>
            <button class="btn btn-primary btn-lg disabled" v-else>Add to cart</button>
            <span class="inventory-message"
                  v-if="product.availableInventory - cartCount(product.id) ===0"> All Out! </span>
            <span class="inventory-message"
                  v-else-if="product.availableInventory - cartCount(product.id) < 5"> Only {{
                product.availableInventory - cartCount(product.id)
              }} left!</span>
            <span class="inventory-message" v-else> Buy Now! </span>

            <div class="rating">
                        <span v-bind:class="{'rating-active': checkRating(n, product)}"
                              v-for="n in 5">☆</span>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </main>

  </div>
</template>

<script>
import MyHeader from './Header'
export default {
  name: "iMain",
  data() {
    return {
      products: {},
      cart: [],
    }
  },
  components: {MyHeader},
  created() {
      axios.get('static/products.json').then((response) => {
        this.products = response.data.products;
        console.log(this.products);
      });
    }
  ,
  methods: {
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
    submitForm() {
      alert('Submitted')
    },
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    cartCount(id) {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    },
    canAddToCart(aProduct) {
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
  },
  filters: {
    formatPrice: function (price) {
      if (!parseInt(price)) {
        return "";
      }
      if (price > 99999) {
        let priceString = (price / 100).toFixed(2);
        let priceArray = priceString.split("").reverse();
        let index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },

  computed: {
    cartItemCount: function () {
      return this.cart.length || '';
    },
    sortedProducts() {
      let productsArray = [...this.products];
      let compare = function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        return 1;
      }
      return productsArray.sort(compare);
    },

  }

}
</script>

<style scoped>

</style>
