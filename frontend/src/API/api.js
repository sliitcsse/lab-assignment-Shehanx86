import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const userLogin = (credentails) => axios.post('/login', credentails);
const createProfile = (profile) => axios.post('/users', profile);

const addItemToCart = (email, itemId) => axios.post(`/users/${email}/cart/${itemId}`);
const fetchCart = (email) => axios.get(`/users/${email}`);
const removeItemFromCart = (email, itemId) => axios.delete(`/users/${email}/cart/${itemId}`);

const addItemToWishlist = (email, itemId) => axios.post(`/users/${email}/wishlist/${itemId}`);
const fetchWishlist = (email) => axios.get(`/users/${email}`);
const removeItemFromWishlist = (email, itemId) => axios.delete(`/users/${email}/cart/${itemId}`);

const fetchItems = () => axios.get('/inventory/items');
const buyItem = (id) => axios.delete(`/inventory/items/${id}`);
const editItem = (id, item) => axios.put(`/inventory/items/${id}`, item);
const createItem = (item) => axios.post('/inventory/items', item);

export {userLogin, createProfile, addItemToCart, fetchCart, removeItemFromCart, fetchItems, buyItem, addItemToWishlist, editItem, createItem};