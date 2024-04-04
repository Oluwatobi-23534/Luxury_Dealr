import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

import {
  addOrderItems,
  getOrderById,
  getUserOrders,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/user-orders").get(protect, getUserOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/deliver/:id").patch(protect, admin, updateOrderToDelivered);
router.route("/pay/:id").patch(protect, updateOrderToPaid);


export default router;
