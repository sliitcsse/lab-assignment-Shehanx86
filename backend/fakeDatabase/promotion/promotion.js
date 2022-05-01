import Items from "../items/items.js";

export default class Promotion {
    constructor(id, name, price, item){
        this.id = id;
        this.name = name;
        this.item = item;
        this.price = price;
    }
}
Promotion.prototype.getPromotionItems = function() {
    return this.item;
}
Promotion.prototype.getPromotionId = function() {
    return this.id;
}
Promotion.prototype.getPromotionName = function() {
    return this.name;
}
