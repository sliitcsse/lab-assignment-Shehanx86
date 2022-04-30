import Promotion from "./promotion.js";

export default class Promotions {
    constructor() {
        this.promotions = [];
    }
}

Promotions.prototype.getPromotions = function() {
    return this.promotions;
}
Promotions.prototype.addPromotion = function(id, name, price, items) {
    const promotion = this.promotions.find(promotion => promotion.id === id);
    if (promotion) return 'Promotion already exists!';
    const newPromotion = new Promotion(id, name, price, items);
    return newPromotion;
}
Promotion.prototype.removePromotionById = function(id) {
    const promo = this.getPromotionItems(id);
    let filtered = this.filter(promo => promo.id != id );
    this.promotions = filtered;
    return promo;
}
Promotion.prototype.getPromotionById = function(id) {
    const promo = this.promotions.find(promo => promo.id === id);
    return promo;
}
