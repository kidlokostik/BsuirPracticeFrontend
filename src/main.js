import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Ваш корневой компонент Vue
import router from './router'; // Ваш файл с настройками роутера

const app = createApp(App);
app.use(router);
app.mount('#app');

export default app;