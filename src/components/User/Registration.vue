<template>
  <div class="registration-form">
    <h1>User Registration</h1>
    <form @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <label for="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" v-model="confirm_password" required>
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" v-model="phone" required>
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
      password: '',
      confirm_password: '',
      phone: '',
    };
  },
  methods: {
    register() {
      console.log('Registering user:', this.username, this.email, this.password, this.confirm_password,this.phone);
      this.$router.push({ name: 'profile' });
    }
  }
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.registration-form h1 {
  text-align: center;
  margin-bottom: 20px;
}

.registration-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.registration-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
}

.registration-form button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.registration-form button:hover {
  background-color: #0056b3;
}
</style>

