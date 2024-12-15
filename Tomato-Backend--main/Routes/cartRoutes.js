import express from "express"

import { addToCart,removeFromCart, getcart } from "../Controllers/cartController.js"
import authMiddleWare from "../Middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleWare,addToCart)
cartRouter.post("/remove",authMiddleWare,removeFromCart)
cartRouter.post("/get",authMiddleWare,getcart)


export default cartRouter;