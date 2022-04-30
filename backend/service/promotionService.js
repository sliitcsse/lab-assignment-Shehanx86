import {inventory, promotions} from "../fakeDatabase/index.js"

const createPromotion = ctx => {
    const { id, name, price, ...itemIds } = ctx.request.body;
    const items = [];
    itemIds.forEach(id => {
        const item = inventory.getItemById(id);
        inventory.removeItemById(id);
        items.push(item);
    });
    const result = promotions.addPromotion(id, name, price, items);
    ctx.body = result;
} 

const getPromotions = ctx => {
    const { id } = ctx.params;
    const promos = promotions.getPromotions();
    ctx.body = promos;
}

const purchasePromotion = ctx => {
    const { id } = ctx.params;
    const result = promotions.removePromotionById(id);
    ctx.body = result;
}

export { createPromotion, getPromotions, purchasePromotion };