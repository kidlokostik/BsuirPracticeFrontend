<template>
  <div class="pizza-list">
    <div class="pizza-item" v-for="pizza in pizzas" :key="pizza.id">
      <img :src="pizza.image" alt="Pizza Image" class="pizza-image" />
      <h3>{{ pizza.name }}</h3>
      <p>{{ pizza.description }}</p>
      <p>{{ pizza.price }} руб</p>
      <button @click="addToCart(pizza)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'PizzaList',
  data() {
    return {
      pizzas: []
    };
  },
  created() {
    this.fetchPizzas();
  },
  methods: {
    async fetchPizzas() {
      try {
        const response = await api.getProducts();
        this.pizzas = response.data.filter(product => product.category_id === 1);
      } catch (error) {
        console.error('Failed to fetch pizzas:', error);
      }
    },
    addToCart(pizza) {
      console.log('Добавлено в корзину:', pizza.name);
    }
  }
};
</script>

<style scoped>
.pizza-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.pizza-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.pizza-image {
  width: 100%;
  height: auto;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
