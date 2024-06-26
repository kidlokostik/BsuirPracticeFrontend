import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import PizzaList from './components/PizzaList.vue';
import SnacksList from './components/SnacksList.vue';
import Cart from './components/Cart/Cart.vue';
import Login from './components/User/Login.vue';
import Registration from './components/User/Registration.vue';
import Profile from './components/User/Profile.vue';
import AuthGuard from './router/auth-guard.js';
import DrinksList from "./components/DrinksList.vue";
import CocktailsList from "./components/CocktailsList.vue";
import DesertsList from "./components/DesertsList.vue";
import SoucesList from "./components/SoucesList.vue";

const routes = [
    { name: 'home', path: '/', component: Home, props: true },
    { name: 'pizza', path: '/pizza', component: PizzaList },
    { name: 'snacks', path: '/snacks', component: SnacksList },
    { name: 'drinks', path: '/drinks', component: DrinksList },
    { name: 'cocktails', path: '/cocktails', component: CocktailsList },
    { name: 'desserts', path: '/desserts', component: DesertsList },
    { name: 'sauces', path: '/sauces', component: SoucesList },
    { name: 'cart', path: '/cart', component: Cart, props: true },
    { name: 'login', path: '/login', component: Login },
    { name: 'signup', path: '/signup', component: Registration },
    { name: 'profile', path: '/profile', component: Profile, beforeEnter: AuthGuard },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;