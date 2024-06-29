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
        { id: 1, name: 'Охотничья', image: 'image1.jpg', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Карбонара', image: 'image2.jpg', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: '4 сезона', image: 'image3.jpg', description: 'Описание 3', price: '600 руб' },
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