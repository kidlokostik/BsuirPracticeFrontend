<template>
  <div class="login-form">
    <h1>User Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" @blur="validateUsername" :class="{ error: isUsernameError }" required>
      <div v-if="isUsernameError" class="error-message">{{ usernameError }}</div>
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" @blur="validateEmail" :class="{ error: isEmailError }" required>
      <div v-if="isEmailError" class="error-message">{{ emailError }}</div>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" @blur="validatePassword" :class="{ error: isPasswordError }" required>
      <div v-if="isPasswordError" class="error-message">{{ passwordError }}</div>
      <br>
      <button :disabled="!isFormValid" type="submit" @click="validateInput">Login</button>
      <div v-if="isEmptyError" class="error-message">{{ inputError }}</div>
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
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      inputError: '',
      isUsernameError: false,
      isEmailError: false,
      isPasswordError: false,
      isEmptyError: false,
    };
  },
  computed: {
    isFormValid() {
      return this.username.trim() !== '' &&
          this.email.trim() !== '' &&
          this.password.trim() !== '' &&
          !this.isUsernameError &&
          !this.isEmailError &&
          !this.isPasswordError &&
          !this.isEmptyError;
    }
  },
  methods: {
    validateUsername() {
      if (this.username.trim() === '') {
        this.usernameError = 'Username is required';
        this.isUsernameError = true;
      } else {
        this.usernameError = '';
        this.isUsernameError = false;
      }
    },
    validateEmail() {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(this.email.trim())) {
        this.emailError = 'Invalid email format';
        this.isEmailError = true;
      } else {
        this.emailError = '';
        this.isEmailError = false;
      }
    },
    validatePassword() {
      if (this.password.trim() === '') {
        this.passwordError = 'Password is required';
        this.isPasswordError = true;
      } else if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long';
        this.isPasswordError = true;
      } else {
        this.passwordError = '';
        this.isPasswordError = false;
      }
    },
    validateInput() {
      if (this.username.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
        this.inputError = 'All fields are required';
        this.isEmptyError = true;
      } else {
        this.inputError = '';
        this.isEmptyError = false;
        this.login();
      }
    },
    login() {
      console.log('Logging in with:', this.username, this.email, this.password);
      this.$router.push({ name: 'profile' });
    }
  }
};
</script>

<style scoped>

error {
  border-color: red;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-bottom: 5px;
}

login-form {
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