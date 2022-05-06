import { inventory, users } from "../fakeDatabase/index.js"

//view cart service function
const viewCart = ctx => {
    const { email } = ctx.params;
    const user = users.getUserByEmail(email);
    const result = user.getCart().getItems();
    ctx.body = result;
}

//add item to cart function
const addItemToCart = ctx => {
    const { email, itemId } = ctx.params;
    const cart = users.getUserByEmail(email).getCart();
    const item = inventory.getItemById(itemId);
    const {id, name, details, price} = item;
    const result = cart.addItem(id, name, details, price);
    ctx.body = result;
}

//removing item from cart function
const removeItemFromCart = ctx => {
    const { email, itemId } = ctx.params;
    const cart = users.getUserByEmail(email).getCart();
    const result = cart.removeItemById(itemId);
    ctx.body = result;
}

export { viewCart, addItemToCart, removeItemFromCart }