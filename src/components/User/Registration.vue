<template>
  <div class="registration-form">
    <h1>User Registration</h1>
    <form @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" @blur="validateUsername" :class="{ error: isUsernameError }" required>
      <div v-if="isUsernameError" class="error-message">{{ usernameError }}</div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" @blur="validateEmail" :class="{ error: isEmailError }" required>
      <div v-if="isEmailError" class="error-message">{{ emailError }}</div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" @blur="validatePassword" :class="{ error: isPasswordError }" required>
      <div v-if="isPasswordError" class="error-message">{{ passwordError }}</div>
      <label for="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" v-model="confirmPassword" @blur="validateConfirmPassword" :class="{ error: isPasswordError }" required>
      <div v-if="isConfirmPasswordError" class="error-message">{{ confirmPasswordError }}</div>
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" v-model="phone" @blur="validatePhone" :class="{ error: isPhoneError }" required>
      <div v-if="isPhoneError" class="error-message">{{ phoneError }}</div>
      <button :disabled="!isFormValid" type="submit">Register</button>
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
      confirmPassword: '',
      phone: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
      phoneError: '',
      isUsernameError: false,
      isEmailError: false,
      isPasswordError: false,
      isConfirmPasswordError: false,
      isPhoneError: false,
    };
  },
  computed: {
    isFormValid() {
      return this.username.trim() !== '' &&
          this.email.trim() !== '' &&
          this.password.trim() !== '' &&
          this.confirmPassword.trim() !== '' &&
          this.phone.trim() === '' &&
          !this.isUsernameError &&
          !this.isEmailError &&
          !this.isPasswordError &&
          !this.isConfirmPasswordError &&
          !this.isPhoneError;
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
      if (this.confirmPassword.trim() === '') {
        this.emailError = 'Email required';
        this.isEmailError = true;
      } else if (!emailRegex.test(this.email.trim())) {
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
    validateConfirmPassword() {
      if (this.confirmPassword.trim() === '') {
        this.confirmPasswordError = 'Confirm password is required';
        this.isConfirmPasswordError = true;
      } else if (this.confirmPassword !== this.password) {
        this.confirmPasswordError = 'Confirm password does not match';
        this.isConfirmPasswordError = true;
      } else {
        this.confirmPasswordError = '';
        this.isConfirmPasswordError = false;
      }
    },
    validatePhone() {
      const phoneRegex = /(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/;
      if (this.phone.trim() === '') {
        this.phoneError = 'Phone number is required';
        this.isPhoneError = true;
      } else if (!phoneRegex.test(this.phone.trim())) {
        this.phoneError = 'Phone number is incorrect';
        this.isPhoneError = true;
      } else {
        this.phoneError = '';
        this.isPhoneError = false;
      }
    },
    register() {
      console.log('Registering user:', this.username, this.email, this.password, this.confirmPassword, this.phone);
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

