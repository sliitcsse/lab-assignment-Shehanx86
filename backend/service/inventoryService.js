import {inventory} from "../fakeDatabase/index.js"

//adding item to inventory
const addItem = ctx => {
    const { id, name, details, price } = ctx.request.body;
    const result = inventory.addItem(id, name, details, price);
    ctx.body = result;
} 

//getting items from inventory
const getItems = ctx => {
    const items = inventory.getItems();
    ctx.body = items;
}

//Editing item in the inventory
const editItem = ctx => {
    const { id } = ctx.params;
    console.log(id)
    const { name, details, price } = ctx.request.body;
    const result = inventory.updateItemById(id, name, details, price);
    ctx.body = result;
}

//getting one item details from inventory
const getItem = ctx => {
    const { id } = ctx.params;
    const result = inventory.getItemById(id);
    ctx.body = result;
}

//removing an item in the inventory
const removeItem = ctx => {
    const { id } = ctx.params;
    const result = inventory.removeItemById(id);
    ctx.body = result;
}

export { addItem, getItems, editItem, removeItem, getItem };