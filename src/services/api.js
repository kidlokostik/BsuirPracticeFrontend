// src/services/api.js

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    // Category API
    getCategories() {
        return apiClient.get('/categories');
    },

    getCategoryById(id) {
        return apiClient.get(`/categories/${id}`);
    },

    createCategory(category) {
        return apiClient.post('/categories', category);
    },

    updateCategory(id, category) {
        return apiClient.put(`/categories/${id}`, category);
    },

    deleteCategory(id) {
        return apiClient.delete(`/categories/${id}`);
    },

    // Order API
    getOrders() {
        return apiClient.get('/orders');
    },

    getOrderById(id) {
        return apiClient.get(`/orders/${id}`);
    },

    createOrder(order) {
        return apiClient.post('/orders', order);
    },

    updateOrder(id, order) {
        return apiClient.put(`/orders/${id}`, order);
    },

    deleteOrder(id) {
        return apiClient.delete(`/orders/${id}`);
    },

    addOrderItem(orderId, orderItem) {
        return apiClient.put(`/orders/${orderId}`, orderItem);
    },

    addOrderItems(orderId, orderItems) {
        return apiClient.post(`/orders/${orderId}`, orderItems);
    },

    // Product API
    getProducts() {
        return apiClient.get('/products');
    },

    getProductById(id) {
        return apiClient.get(`/products/${id}`);
    },

    createProduct(product) {
        return apiClient.post('/products', product);
    },

    updateProduct(id, product) {
        return apiClient.put(`/products/${id}`, product);
    },

    deleteProduct(id) {
        return apiClient.delete(`/products/${id}`);
    },

    // User API
    getUsers() {
        return apiClient.get('/users');
    },

    getUserById(id) {
        return apiClient.get(`/users/${id}`);
    },

    createUser(user) {
        return apiClient.post('/users', user);
    },

    updateUser(id, user) {
        return apiClient.put(`/users/${id}`, user);
    },

    deleteUser(id) {
        return apiClient.delete(`/users/${id}`);
    }
};