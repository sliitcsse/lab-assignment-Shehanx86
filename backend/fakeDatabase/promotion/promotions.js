import Promotion from "./promotion.js";

export default class Promotions {
    constructor() {
        this.promotions = [];
    }
}

Promotions.prototype.getPromotions = function() {
    return this.promotions;
}
Promotions.prototype.addPromotion = function(id, name, price, item) {
    const promotion = this.promotions.find(promotion => promotion.getPromotionId() == id);
    if (promotion) return 'Promotion already exists!';
    const newPromotion = new Promotion(id, name, price, item);
    this.getPromotions().push(newPromotion);
    return newPromotion;
}
Promotions.prototype.removePromotionById = function(id) {
    let filtered = this.promotions.filter(promo => promo.getPromotionId() != id );
    this.promotions = filtered;
    return id;
}
Promotions.prototype.getPromotionById = function(id) {
    const promo = this.promotions.find(promo => promo.getPromotionId() === id);
    return promo;
}
