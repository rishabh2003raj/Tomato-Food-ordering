import express from "express";
import authMiddleWare from "../Middleware/auth.js";
import { placeOrder, userOrders,listOrders, updateStatus } from "../Controllers/OrderController.js";


const orderRouter = express.Router();


orderRouter.post ("/place",authMiddleWare,placeOrder);
orderRouter.post("/userOrders",authMiddleWare,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus)
export default orderRouter;
