<template>
  <div class="snack-list">
    <div class="snack-item" v-for="snack in snacks" :key="snack.id">
      <img :src="snack.image" alt="Snack Image" class="snack-image" />
      <h3>{{ snack.name }}</h3>
      <p>{{ snack.description }}</p>
      <p>{{ snack.price }}</p>
      <button @click="addToCart(snack)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnacksList',
  data() {
    return {
      snacks: [
        { id: 1, name: 'Картофель из печи', image: 'src/assets/potato.png', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Куриные крылья', image: 'src/assets/chicken.png', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: 'Куриные наггетсы', image: 'src/assets/nuggets.png', description: 'Описание 3', price: '600 руб' },
      ]
    };
  },
  methods: {
    addToCart(snack) {
      console.log('Добавлено в корзину:', snack.name);
    }
  }
};
</script>

<style scoped>
.snack-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.snack-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  position: relative;
}

.snack-image {
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