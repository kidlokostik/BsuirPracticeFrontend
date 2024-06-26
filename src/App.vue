<template>
  <div id="app">
    <header class="header">
      <img src="./assets/logo.png" alt="Logo" class="logo" />
      <div class="header-content">
        <button v-if="!menuVisible" class="address-button" @click="showAddressForm = !showAddressForm">
          Адрес доставки
        </button>
        <nav class="menu" v-show="menuVisible">
          <router-link to="/">Меню</router-link>
          <router-link to="/actions">Акции</router-link>
          <router-link to="/contacts">Контакты</router-link>
          <router-link to="/login">Вход</router-link>
        </nav>
      </div>
      <button class="burger-menu" @click="toggleMenu">
        ☰
      </button>
    </header>

    <ProductsList />
    <router-view></router-view>

    <div v-if="showAddressForm" class="address-form">
      <form @submit.prevent="submitForm">
        <label>
          Адрес:
          <input type="text" v-model="form.address" required />
        </label>
        <label>
          Телефон:
          <input type="tel" v-model="form.phone" required />
        </label>
        <label>
          Номер заказчика:
          <input type="text" v-model="form.customerNumber" required />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";

export default {
  name: 'App',
  components: {
    ProductsList
  },
  data() {
    return {
      showAddressForm: false,
      menuVisible: false,
      form: {
        address: '',
        phone: '',
        customerNumber: ''
      }
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      this.showAddressForm = false; // Скрыть форму при открытии меню
    },
    submitForm() {
      // Логика отправки формы
      console.log(this.form);
      this.showAddressForm = false; // Скрыть форму после отправки
    }
  }
};
</script>

<style scoped>
.products-list {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.product-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 50px;
}

.header-content {
  display: flex;
  align-items: center;
}

.address-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.burger-menu {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu {
  display: flex;
  gap: 30px; /* Увеличиваем отступы между элементами */
  background-color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu a {
  text-decoration: none;
  color: #000;
  padding: 10px 20px; /* Устанавливаем отступы вокруг текста */
}

.address-form {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  margin: 20px;
}

.address-form form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.address-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.address-form button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>