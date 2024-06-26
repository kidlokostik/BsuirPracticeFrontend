<template>
  <div class="desert-list">
    <div class="desert-item" v-for="desert in deserts" :key="desert.id">
      <img :src="desert.image" alt="Desert Image" class="desert-image" />
      <h3>{{ desert.name }}</h3>
      <p>{{ desert.description }}</p>
      <p>{{ desert.price }}</p>
      <button @click="addToCart(desert)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesertsList',
  data() {
    return {
      cocktails: [
        { id: 1, name: 'Мороженое Пломбир', image: 'image1.jpg', description: 'Описание 1', price: '500 руб' },
        { id: 2, name: 'Мороженое Соленая Карамель', image: 'image2.jpg', description: 'Описание 2', price: '550 руб' },
        { id: 3, name: 'Мороженое Шоколадное', image: 'image3.jpg', description: 'Описание 3', price: '600 руб' },
      ]
    };
  },
  methods: {
    addToCart(desert) {
      console.log('Добавлено в корзину:', desert.name);
    }
  }
};
</script>

<style scoped>
.desert-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.desert-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.desert-image {
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