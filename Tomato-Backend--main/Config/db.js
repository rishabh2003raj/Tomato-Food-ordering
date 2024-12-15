import mongoose from  "mongoose";

export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://pandeyji9304:7763021300Pa$@cluster0.aiffj3e.mongodb.net/food-delhivery').then(()=>console.log("DB Connected"));
   //await mongoose.connect('mongodb://localhost:27017/food-delhivery').then(()=>console.log("DB Connected"));

    

}