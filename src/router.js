import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import PizzaList from './components/Products/PizzaList.vue';
import SnacksList from './components/Products/SnacksList.vue';
import Login from './components/User/Login.vue';
import Registration from './components/User/Registration.vue';
import Profile from './components/User/Profile.vue';
import AuthGuard from './router/auth-guard.js';
import DrinksList from "./components/Products/DrinksList.vue";
import CocktailsList from "./components/Products/CocktailsList.vue";
import DesertsList from "./components/Products/DesertsList.vue";
import SoucesList from "./components/Products/SoucesList.vue";

const routes = [
    { name: 'home', path: '/', component: Home, props: true },
    { name: 'pizza', path: '/pizza', component: PizzaList },
    { name: 'snacks', path: '/snacks', component: SnacksList },
    { name: 'drinks', path: '/drinks', component: DrinksList },
    { name: 'cocktails', path: '/cocktails', component: CocktailsList },
    { name: 'desserts', path: '/desserts', component: DesertsList },
    { name: 'sauces', path: '/sauces', component: SoucesList },
    { name: 'login', path: '/login', component: Login },
    { name: 'signup', path: '/signup', component: Registration },
    { name: 'profile', path: '/profile', component: Profile, beforeEnter: AuthGuard },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;