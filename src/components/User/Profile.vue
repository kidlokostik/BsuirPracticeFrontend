<template>
  <div>
    <h1>User Profile</h1>
    <p>Welcome to your profile page.</p>
    <form @submit.prevent="register">
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
      phone: '',
      phoneError: '',
      isPhoneError: false,
    };
  },
  computed: {
    isFormValid() {
      return this.phone.trim() === '' &&
          !this.isPhoneError;
    }
  },
  methods: {
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
      console.log('Registering user:', this.username, this.email, this.password, this.confirmPassword,this.phone);
      this.$router.push({ name: 'profile' });
    }
  }
};
</script>

<style scoped>

</style>