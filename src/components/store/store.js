import { createStore } from 'vuex';

export default createStore({
    state: {
        showAllProducts: false
    },
    mutations: {
        SET_SHOW_ALL_PRODUCTS(state, value) {
            state.showAllProducts = value;
        }
    },
    actions: {
        setShowAllProducts({ commit }, value) {
            commit('SET_SHOW_ALL_PRODUCTS', value);
        }
    }
});