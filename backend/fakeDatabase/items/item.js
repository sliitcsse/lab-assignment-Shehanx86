export default class Item {
    constructor(id, name, details, price) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.price = price;
    }
}

Item.prototype.updateItem = function(name, details, price) {
    this.name = name;
    this.details = details;
    this.price = price;
}