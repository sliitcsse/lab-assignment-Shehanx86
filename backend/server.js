import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";
import { createProfile, login } from "./service/userService.js";
import { addItem, editItem, getItem, getItems, removeItem } from "./service/inventoryService.js";
import { addItemToCart, removeItemFromCart, viewCart } from "./service/cartService.js";
import { addItemToWishlist, removeItemFromWishlist, viewWishlist } from "./service/wishListService.js";
import { createPromotion, getPromotions, purchasePromotion } from "./service/promotionService.js";

const app = new koa();
const router = new koaRouter();
app.use(bodyParser());

router.post('/login', login);
router.post('/users', createProfile);

router.post('/users/:email/cart/item/:itemId', addItemToCart);
router.get('/users/:email/cart', viewCart);
router.delete('/users/:email/cart/item/:itemId', removeItemFromCart);

router.post('/users/:email/wishlist/item/:itemId', addItemToWishlist);
router.get('/users/:email/wishlist', viewWishlist);
router.delete('/users/:email/wishlist/item/:itemId', removeItemFromWishlist);

router.post('/inventory/items', addItem);
router.get('/inventory/items', getItems);
router.get('/inventory/items/:id', getItem);
router.put('/inventory/items/:id', editItem);
router.delete('/inventory/items/:id', removeItem);

router.post('/promotions', createPromotion);
router.get('/promotions', getPromotions);
router.put('/promotions/:id/purchase', purchasePromotion);

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => console.log('app running on 3000'))