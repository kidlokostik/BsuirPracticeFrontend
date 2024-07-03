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
        { id: 1, name: 'Шоколадный молочный коктейль', image: 'src/assets/coctails2.png', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Клубничный молочный коктейль', image: 'src/assets/coctails1.png', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: 'Ванильный молочный коктейль', image: 'src/assets/coctails3.png', description: 'Описание 3', price: '600 руб' },
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
  position: relative;
}

.cocktail-image {
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