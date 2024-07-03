<template>
  <div class="cocktail-list">
    <div class="cocktail-item" v-for="cocktail in cocktails" :key="cocktail.id">
      <img :src="cocktail.image" alt="Cocktail Image" class="cocktail-image" />
      <h3>{{ cocktail.name }}</h3>
      <p>{{ cocktail.description }}</p>
      <p>{{ cocktail.price }}</p>
      <button @click="addToCart(cocktail)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CocktailsList',
  data() {
    return {
      cocktails: [
        { id: 1, name: 'Сырный соус', image: 'image1.jpg', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Кисло-сладкий соус', image: 'image2.jpg', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: 'Чесночный соус', image: 'image3.jpg', description: 'Описание 3', price: '600 руб' },
      ]
    };
  },
  methods: {
    addToCart(cocktail) {
      console.log('Добавлено в корзину:', cocktail.name);
    }
  }
};
</script>

<style scoped>
.cocktail-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.cocktail-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.cocktail-image {
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