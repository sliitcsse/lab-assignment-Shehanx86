import Items from "../items/items.js";

export default class User {
    constructor(name, email, password, role) {
        this.password = password;
        this.name = name;
        this.email = email;
        this.role = role;
        this.wishList = new Items();
        this.cart = new Items();
    }
}
User.prototype.getWishlist = function(){
    return this.wishList;
}
User.prototype.getCart = function(){
    return this.cart;
}