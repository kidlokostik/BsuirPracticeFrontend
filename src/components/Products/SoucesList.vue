<template>
  <div class="souce-list">
    <div class="souce-item" v-for="souce in souces" :key="souce.id">
      <img :src="souce.image" alt="Souce Image" class="souce-image" />
      <h3>{{ souce.name }}</h3>
      <p>{{ souce.description }}</p>
      <p>{{ souce.price }}</p>
      <button @click="addToCart(souce)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoucesList',
  data() {
    return {
      souces: [
        { id: 1, name: 'Сырный соус', image: 'src/assets/sauce1.png', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Кисло-сладкий соус', image: 'src/assets/sauce2.png', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: 'Чесночный соус', image: 'src/assets/sauce3.png', description: 'Описание 3', price: '600 руб' },
      ]
    };
  },
  methods: {
    addToCart(souce) {
      console.log('Добавлено в корзину:', souce.name);
    }
  }
};
</script>

<style scoped>
.souce-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.souce-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  position: relative;
}

.souce-image {
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