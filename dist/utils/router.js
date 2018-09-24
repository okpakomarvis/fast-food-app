"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _orders = require("../controllers/orders");

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/* GET home page. */
// get all orders
router.get("/orders", _orders2.default.getOrders);

// fetch all the orders
router.get("/orders/:id", _orders2.default.getSpecific);

// place a new orders /post
router.post("/orders", _orders2.default.postOrders);

//update orders
router.put("/orders/:id", _orders2.default.updateOrders);
exports.default = router;