import express from "express";
const router = express.Router();
import Orders from "../controllers/orders";


/* GET home page. */
// get all orders
router.get("/orders",Orders.getOrders);

// fetch all the orders
router.get("/orders/:id", Orders.getSpecific);

// place a new orders /post
router.post("/orders", Orders.postOrders);

//update orders
router.put("/orders/:id", Orders.updateOrders);
export default router;
