import express from "express";
const router = express.Router();
import getOrder from "../controllers/orders";


/* GET home page. */
// get all orders
router.get("/api/v1/orders",getOrder.getOrders);

// fetch all the orders
router.get("/api/v1/orders/:id", getOrder.getSpecific);

// place a new orders /post
router.post("/api/v1/orders", getOrder.postOrders);

//update orders
router.put("/api/v1/orders/:id", getOrder.updateOrders);
export default router;
