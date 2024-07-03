<template>
  <div class="pizza-list">
    <div class="pizza-item" v-for="pizza in pizzas" :key="pizza.id">
      <img :src="pizza.image" alt="Pizza Image" class="pizza-image" />
      <h3>{{ pizza.name }}</h3>
      <p>{{ pizza.description }}</p>
      <p>{{ pizza.price }}</p>
      <button @click="addToCart(pizza)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaList',
  data() {
    return {
      pizzas: [
        { id: 1, name: 'Охотничья', image: 'src/assets/pizza2.png', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Карбонара', image: 'src/assets/pizza3.png', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: '4 сезона', image: 'src/assets/pizza1.png', description: 'Описание 3', price: '600 руб' },
      ]
    };
  },
  methods: {
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
  position: relative;
}

.pizza-image {
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}
</style>