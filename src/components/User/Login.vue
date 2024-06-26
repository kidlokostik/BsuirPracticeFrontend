<template>
  <div>
    <h1>User Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implement your login logic here
      console.log('Logging in with:', this.username, this.password);
      // Example: redirect to profile page after successful login
      this.$router.push({ name: 'profile' });
    }
  }
};
</script>

<style scoped>
/* Добавьте стили по желанию */
</style>