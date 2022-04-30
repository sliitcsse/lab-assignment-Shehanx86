
import Inventory from "./inventory/inventory.js";
import Promotions from "./promotion/promotions.js";
import Users from "./users/users.js";

export const inventory = new Inventory().getInventory();
export const promotions = new Promotions();
export const users = new Users();
