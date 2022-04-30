import {inventory} from "../fakeDatabase/index.js"

const addItem = ctx => {
    const { id, name, details, price } = ctx.request.body;
    const result = inventory.addItem(id, name, details, price);
    ctx.body = result;
} 

const getItems = ctx => {
    const items = inventory.getItems();
    ctx.body = items;
}

const editItem = ctx => {
    const { id } = ctx.params;
    console.log(id)
    const { name, details, price } = ctx.request.body;
    const result = inventory.updateItemById(id, name, details, price);
    ctx.body = result;
}

const getItem = ctx => {
    const { id } = ctx.params;
    const result = inventory.getItemById(id);
    ctx.body = result;
}

const removeItem = ctx => {
    const { id } = ctx.params;
    const result = inventory.removeItemById(id);
    ctx.body = result;
}

export { addItem, getItems, editItem, removeItem, getItem };