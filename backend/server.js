import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { createProfile, getCustomers, login } from "./service/userService.js";
import { addItem, editItem, getItem, getItems, removeItem } from "./service/inventoryService.js";
import { addItemToCart, removeItemFromCart, viewCart } from "./service/cartService.js";
import { addItemToWishlist, removeItemFromWishlist, viewWishlist } from "./service/wishListService.js";
import { createPromotion, getPromotions, purchasePromotion } from "./service/promotionService.js";

const app = new koa();
app.use(cors({origin: '*'}));
const router = new koaRouter();
app.use(bodyParser());

//user service routes
router.post('/login', login);
router.post('/users', createProfile);
router.get('/customers', getCustomers);

//cart service routes
router.post('/users/:email/cart/:itemId', addItemToCart);
router.get('/users/:email/cart', viewCart);
router.delete('/users/:email/cart/:itemId', removeItemFromCart);

//wishlist service routes
router.post('/users/:email/wishlist/:itemId', addItemToWishlist);
router.get('/users/:email/wishlist', viewWishlist);
router.delete('/users/:email/wishlist/:itemId', removeItemFromWishlist);

//inventory service routes
router.post('/inventory/items', addItem);
router.get('/inventory/items', getItems);
router.get('/inventory/items/:id', getItem);
router.put('/inventory/items/:id', editItem);
router.delete('/inventory/items/:id', removeItem);

//promotion service routes
router.post('/promotions', createPromotion);
router.get('/promotions', getPromotions);
router.put('/promotions/:id/purchase', purchasePromotion);

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(5000, () => console.log('app running on 5000'))