<template>
<!--  <div class = "login-form">-->
<!--    <h1>User Login</h1>-->
<!--    <form @submit.prevent="login">-->
<!--      <label for="username">Username:</label>-->
<!--      <input type="text" id="username" v-model="username" required>-->
<!--      <br>-->
<!--      <label for="email">Email:</label>-->
<!--      <input type="text" id="email" v-model="email" required>-->
<!--      <br>-->
<!--      <label for="password">Password:</label>-->
<!--      <input type="password" id="password" v-model="password" required>-->
<!--      <br>-->
<!--      <button type="submit">Login</button>-->
<!--    </form>-->
<!--  </div>-->
  <div v-if="startValidation && email != '' && !isValidEmail">invalid email address</div>
  <input :class="{ valid : isValidEmail == true , inValid : isValidEmail == false}" v-model="email" type="text" placeholder="Email"> <br>

  <div v-if="startValidation && password != '' && !isStrongPassword">weak password!</div>
  <input :class="{ valid : isStrongPassword == true , inValid : isStrongPassword == false}" v-model="password" type="" placeholder="Password"> <br>

  <input :class="{ valid : isPasswordConfirmed == true , inValid : isPasswordConfirmed == false}" v-model="confirmPassword" type="" placeholder="Confirm password"> <br>
  <br>
  <button @click="register">Register</button>
</template>

<script>
import {computed} from "vue";

export default {
  data() {
    return {
      startValidation: false,
      isValidEmail: false,
      isStrongPassword: false,
      isPasswordConfirmed: false
    };
  },
  methods: {
    register() {
      this.startValidation = true;

      if (this.isValidEmail && this.isStrongPassword && this.isPasswordConfirmed) {
        alert("all");
      }
    }
  },

  isValidEmail = computed(() => {
    return startValidation.value ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) : null;
  })

  isStrongPassword = computed(() => {
    return startValidation.value ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value) : null;
  })

  isPasswordConfirmed = computed(() => {
    return startValidation.value ? password.value == confirmPassword.value : null;
  })


};


// export default {
//   name: 'Login',
//   data() {
//     return {
//       username: '',
//       email: '',
//       password: ''
//     };
//   },
//   methods: {
//     login() {
//       console.log('Logging in with:', this.username, this.email, this.password);
//       this.$router.push({ name: 'profile' });
//     }
//   }
// };
</script>

<style scoped>

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