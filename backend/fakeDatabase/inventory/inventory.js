import Items from "../items/items.js";

export default class Inventory {
    constructor(){
        this.items = new Items();
    }
}
Inventory.prototype.getInventory = function() {
    return this.items;
}