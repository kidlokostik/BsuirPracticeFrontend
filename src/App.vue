<template>
  <div id="app">
    <header class="header">
      <div class="header-left">
        <img src="./assets/logo.jpg" alt="Logo" class="logo" />
      </div>
      <div class="header-content">
        <nav class="menu" v-show="menuVisible">
          <router-link to="/actions">Акции</router-link>
          <router-link to="/contacts">Контакты</router-link>
          <router-link to="/login">Вход</router-link>
          <router-link to="/signup">Регистрация</router-link>
        </nav>
      </div>
      <div class="header-right">
        <button class="burger-menu" @click="toggleBurger">
          ☰
        </button>
      </div>
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
import ProductsList from "./components/Products/ProductsList.vue";
import { mapActions, mapState } from 'vuex';

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
      },
      currentComponent: null
    };
  },
  computed: {
    ...mapState(['showProductCategories']),
  },
  methods: {
    toggleBurger() {
      this.menuVisible = !this.menuVisible;
      this.showAddressForm = false;
    },
    ...mapActions(['setShowProductCategories', 'setCurrentComponent']),
    submitForm() {
      console.log(this.form);
      this.showAddressForm = false;
    },
  },
  watch: {
    $route(to) {
      if (to.path !== '/cart') {
        this.setShowProductCategories(false);
        this.setCurrentComponent(null);
      }
    }
  }
};
</script>


<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-left,
.header-right {
  flex: 0 0 auto;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
}

.logo {
  height: 70px;
}

.burger-menu {
  font-size: 36px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu {
  display: flex;
  gap: 30px;
  background-color: white;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu a {
  text-decoration: none;
  color: #000;
  padding: 10px 20px;
}

.address-form {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

.address-form form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.address-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.address-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.address-button{
  height: 70px;
  border-radius: 3px;
  width: 140px;
}

.address-form button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;
}

.address-form button:hover {
  background-color: #218838;
}
</style>