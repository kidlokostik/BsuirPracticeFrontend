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
      desserts: []
    };
  },
  created() {
    this.fetchDeserts();
  },
  methods: {
    async fetchDeserts() {
      try {
        const response = await api.getProducts();
        this.cocktails = response.data.filter(product => product.category_id === 3);
      } catch (error) {
        console.error('Error fetching deserts:', error);
      }
    },
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
}

.dessert-image {
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