<template>
  <div class="drinks-list">
    <div class="drinks-item" v-for="drink in drinks" :key="drink.id">
      <img :src="drink.image" alt="Drink Image" class="drink-image" />
      <h3>{{ drink.name }}</h3>
      <p>{{ drink.description }}</p>
      <p>{{ drink.price }}</p>
      <button @click="addToCart(drink)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrinksList',
  data() {
    return {
      drinks: [
        { id: 1, name: 'Pepsi', image: 'image1.jpg', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Fanta', image: 'image2.jpg', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: 'Coca-Cola', image: 'image3.jpg', description: 'Описание 3', price: '600 руб' },
      ]
    };
  },
  methods: {
    addToCart(drink) {
      console.log('Добавлено в корзину:', drink.name);
    }
  }
};
</script>

<style scoped>
.drinks-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.drinks-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.drink-image {
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