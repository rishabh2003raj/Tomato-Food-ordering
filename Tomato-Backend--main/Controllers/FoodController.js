import foodmodel from "../Models/foodModels.js";
import fs from 'fs';
import { response } from "express";
import { log } from "console";

//add food item
const addFood = async(req, res)=>{
    let image_filename= `${req.file.filename}`
    console.log(req.body)

    const food = new foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })

    
    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all food list
const listFood = async (req,res)=>{
try {
    const  foods = await foodmodel.find({});
        res.json({success:true, data:foods})
    
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
}
}

//remove food item
const removeFood = async(req,res)=>{
try {
    const food =await foodmodel.findById(req.body.id);
    fs.unlink(`Uploads/${food.image}`,()=>{})

    await foodmodel.findByIdAndDelete(req.body.id);
    res.json({success:true, message:"food removed"})

} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
}
}

export {addFood,listFood,removeFood}