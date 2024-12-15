import orderModel from "../Models/orderModels.js";
import userModel from "../Models/UserModels.js";


const placeOrder = async (req, res) => {
const frontend_url = "http://localhost/5174";

    try {
        console.log(req.body);
       
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
        res.json({ success: true, message: "Order placed successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "An error occurred while placing the order" });
    }
};

const userOrders = async (req, res)=>{
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({sucess:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

// Listing orders for admin panel
const listOrders = async (req,res)=>{
    try {
        const orders  = await orderModel.find({});
        res.json({success:true,data:orders}) 
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
}


//api for updating order status


const updateStatus = async(req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true, message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

export { placeOrder, userOrders,listOrders ,updateStatus};