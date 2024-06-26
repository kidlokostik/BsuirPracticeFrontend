<template>
  <div>
    <h1>User Registration</h1>
    <form @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <br>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Implement your registration logic here
      console.log('Registering user:', this.username, this.email, this.password);
      // Example: redirect to profile page after successful registration
      this.$router.push({ name: 'profile' });
    }
  }
};
</script>

<style scoped>
/* Добавьте стили по желанию */
</style>