import Items from "../items/items.js";

export default class Promotion {
    constructor(name, price, items){
        this.name = name;
        this.promotionItems = items;
        this.price = price;
    }
}
Promotion.prototype.getPromotionItems = function() {
    return this.promotionItems;
}
Promotion.prototype.getPromotionName = function() {
    return this.name;
}
