import {inventory, promotions} from "../fakeDatabase/index.js"

//creating a promotion
const createPromotion = ctx => {
    const { id, name, price, itemId } = ctx.request.body;
    const item = inventory.getItemById(itemId);
    const removedItem = inventory.removeItemById(itemId);
    if (removedItem === 'Item does not exist!') return ctx.body = removedItem;
    const result = promotions.addPromotion(id, name, price, item);
    ctx.body = result;
} 

//retrieving all promotions
const getPromotions = ctx => {
    const { id } = ctx.params;
    const promos = promotions.getPromotions();
    ctx.body = promos;
}

//purchaseing promotions
const purchasePromotion = ctx => {
    const { id } = ctx.params;
    const result = promotions.removePromotionById(id);
    ctx.body = result;
}

export { createPromotion, getPromotions, purchasePromotion };