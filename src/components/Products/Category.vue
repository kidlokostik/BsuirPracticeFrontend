<template>
  <div>
    <h1>Category Page</h1>
    <p>This is the category page.</p>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
    <form @submit.prevent="createCategory">
      <input v-model="newCategory.name" placeholder="Category name" />
      <button type="submit">Add Category</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'Category',
  data() {
    return {
      categories: [],
      newCategory: {
        name: ''
      }
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await api.getCategories();
        this.categories = response.data;
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    },
    async createCategory() {
      try {
        await api.createCategory(this.newCategory);
        this.newCategory.name = '';
        this.fetchCategories();
      } catch (error) {
        console.error('Failed to create category:', error);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

form {
  margin-top: 20px;
}

input {
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
}
</style>
