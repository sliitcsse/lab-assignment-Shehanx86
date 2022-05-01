import {inventory, promotions} from "../fakeDatabase/index.js"

const createPromotion = ctx => {
    const { id, name, price, itemId } = ctx.request.body;
    const item = inventory.getItemById(itemId);
    const removedItem = inventory.removeItemById(itemId);
    if (removedItem === 'Item does not exist!') return ctx.body = removedItem;
    const result = promotions.addPromotion(id, name, price, item);
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