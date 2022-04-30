import Item from "./item.js";

export default class Items {
    constructor() {
        this.items = [];
    }
}

Items.prototype.addItem = function(id, name, details, price) {
    if(this.getItemById(id)) return 'Item already exists!';
    const newItem = new Item(id, name, details, price);
    return this.items.push(newItem);
}
Items.prototype.getItems = function() {
    return this.items;
}
Items.prototype.removeItemById = function(id) {
    const item = this.getItemById(id);
    if(!item) return 'Item does not exist!';
    const index = this.items.indexOf(item);
    return this.items.splice(index, 1);
}
Items.prototype.getItemById = function(id) {
    const item = this.items.find(item => item.id == id);
    return item;
}
Items.prototype.updateItemById = function(id, name, details, price) {
    if(!this.getItemById(id)) return 'Item does not exist!';
    return this.getItemById(id).updateItem(name, details, price);
}