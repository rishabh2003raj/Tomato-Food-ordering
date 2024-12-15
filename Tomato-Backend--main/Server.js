import express from "express";
import cors from "cors"
import { connectDb } from "./Config/db.js";
import foodRouter from "./Routes/FoodRoute.js";
import "dotenv/config";
import userRouter from "./Routes/userRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";


//appconfig
const app=express()
const port=4000


//midleware
app.use(express.json())
app.use(cors())

//Db connection
connectDb();

//api end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('Uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req, res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on https://localhost:${port}`);
})

