<template>
  <div class="dessert-list">
    <div class="dessert-item" v-for="dessert in desserts" :key="dessert.id">
      <img :src="dessert.image" alt="Dessert Image" class="dessert-image" />
      <h3>{{ dessert.name }}</h3>
      <p>{{ dessert.description }}</p>
      <p>{{ dessert.price }}</p>
      <button @click="addToCart(dessert)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesertsList',
  data() {
    return {
      desserts: [
        { id: 1, name: 'Мороженое Пломбир', image: 'src/assets/ice_cream3.png', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Мороженое Соленая Карамель', image: 'src/assets/ice_cream2.png', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: 'Мороженое Шоколадное', image: 'src/assets/ice_cream1.png', description: 'Описание 3', price: '600 руб' },
      ]
    };
  },
  methods: {
    addToCart(dessert) {
      console.log('Добавлено в корзину:', dessert.name);
    }
  }
};
</script>

<style scoped>
.dessert-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.dessert-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  position: relative;
}

.dessert-image {
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