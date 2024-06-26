<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      products: [
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Drink', price: 5 }
        // Add more products as needed
      ]
    };
  },
  methods: {
    checkout() {
      // Implement checkout logic here
      console.log('Processing checkout...');
    }
  }
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
