<template>
  <div class="products-list">
    <router-link class="product-button" to="/pizza">Пицца</router-link>
    <router-link class="product-button" to="/snacks">Закуски</router-link>
    <router-link class="product-button" to="/drinks">Напитки</router-link>
    <router-link class="product-button" to="/cocktails">Коктейли</router-link>
    <router-link class="product-button" to="/desserts">Десерты</router-link>
    <router-link class="product-button" to="/sauces">Соусы</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductsList'
};
</script>

<style scoped>
.products-list {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.product-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
}
</style>