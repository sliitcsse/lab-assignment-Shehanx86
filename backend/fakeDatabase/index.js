
import Inventory from "./inventory/inventory.js";
import Promotions from "./promotion/promotions.js";
import Users from "./users/users.js";

//Creating fake inventory object
export const inventory = new Inventory().getInventory();

//Creating fake promotions object
export const promotions = new Promotions();

//Creating fake Users object
export const users = new Users();
