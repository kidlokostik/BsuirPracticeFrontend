<template>
  <div class="promotion-list">
    <div class="promotion-item" v-for="promotion in promotions" :key="promotion.id">
      <img :src="promotion.image" alt="Promotion Image" class="promotion-image" />
      <h3>{{ promotion.name }}</h3>
      <p>{{ promotion.description }}</p>
      <p>{{ promotion.price }}</p>
      <button @click="addToCart(promotion)">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromotionsList',
  data() {
    return {
      promotions: [
        { id: 1, name: 'Акция Охотничий завтрак', image: 'src/assets/promotions.png', description: 'Пицца Охотничья + Картофель из печи', price: '300 руб' },
        { id: 2, name: 'Акция Сладкая курочка', image: 'src/assets/promotions.png', description: 'Куриные крылья + Шоколадный молочный коктейль + Мороженое пломбир', price: '350 руб' },
        { id: 3, name: 'Акция XL', image: 'src/assets/promotions.png', description: '4 сезона + Картофель из печи + Куриные наггетсы + Fanta', price: '500 руб' },
      ]
    };
  },
  methods: {
    addToCart(promotion) {
      console.log('Добавлено в корзину:', promotion.name);
    }
  }
};
</script>

<style scoped>
.promotion-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.promotion-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  position: relative;
}

.promotion-image {
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
