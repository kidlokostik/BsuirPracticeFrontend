<template>
  <div class = "login-form">
    <h1>User Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <br>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required>
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
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Logging in with:', this.username, this.email, this.password);
      this.$router.push({ name: 'profile' });
    }
  }
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.login-form h1 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
}


.login-form button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #0056b3;
}
</style>