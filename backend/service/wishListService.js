import { inventory, users } from "../fakeDatabase/index.js"

const viewWishlist = ctx => {
    const { email } = ctx.params;
    const user = users.getUserByEmail(email);
    const result = user.getWishlist().getItems();
    ctx.body = result;
}

const addItemToWishlist = ctx => {
    const { email, itemId } = ctx.params;
    const wishlist = users.getUserByEmail(email).getWishlist();
    const item = inventory.getItemById(itemId);
    const {id, name, details, price} = item;
    const result = wishlist.addItem(id, name, details, price);
    ctx.body = result;
}

const removeItemFromWishlist = ctx => {
    const { email, itemId } = ctx.params;
    const wishlist = users.getUserByEmail(email).getWishlist();
    const result = wishlist.removeItemById(itemId);
    ctx.body = result;
}

export { viewWishlist, addItemToWishlist, removeItemFromWishlist };