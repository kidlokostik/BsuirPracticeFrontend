import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './components/store/store.js';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

export default app;