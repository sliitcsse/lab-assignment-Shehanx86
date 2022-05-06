import axios from 'axios';

//Setting base url 
axios.defaults.baseURL = 'http://localhost:5000';

//APIs created from backend

const userLogin = (credentails) => axios.post('/login', credentails);
const createProfile = (profile) => axios.post('/users', profile);
const getCustomers = () => axios.get('/customers');

const addItemToCart = (email, itemId) => axios.post(`/users/${email}/cart/${itemId}`);
const fetchCart = (email) => axios.get(`/users/${email}/cart`);
const removeItemFromCart = (email, itemId) => axios.delete(`/users/${email}/cart/${itemId}`);

const addItemToWishlist = (email, itemId) => axios.post(`/users/${email}/wishlist/${itemId}`);
const fetchWishlist = (email) => axios.get(`/users/${email}/wishlist`);
const removeItemFromWishlist = (email, itemId) => axios.delete(`/users/${email}/wishlist/${itemId}`);

const fetchItems = () => axios.get('/inventory/items');
const buyItem = (id) => axios.delete(`/inventory/items/${id}`);
const editItem = (id, item) => axios.put(`/inventory/items/${id}`, item);
const createItem = (item) => axios.post('/inventory/items', item);

const fetchPromotions = () => axios.get('/promotions');
const createPromotion = (promo) => axios.post('/promotions', promo);
const purchasePromotion = (id) => axios.put(`/promotions/${id}/purchase`);


export {userLogin, createProfile, addItemToCart, fetchCart, removeItemFromCart, fetchItems, buyItem, addItemToWishlist, editItem, createItem, fetchWishlist, removeItemFromWishlist, fetchPromotions, createPromotion, purchasePromotion, getCustomers};