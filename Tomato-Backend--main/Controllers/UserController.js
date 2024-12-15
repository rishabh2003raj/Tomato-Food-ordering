import userModel from "../Models/userModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user
const loginUser = async (req, res)=>{
    const {email, password} = req.body;
    console.log(email)
    console.log(password)
    try {
        const user = await userModel.findOne({email});
        console.log(user);

        if(!user){
            return res.json({success:false, message:"Id not exists"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:"false", message:"Invalid User"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
 
}

const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}



//register user
const registerUser = async(req, res)=>{
const {name,password,email}=req.body;
try {
    //checking is user is exist or not
    const exists = await userModel.findOne({email});
    // console.log(exists);
    if (exists) {
        return res.json({success:false,message:"User aleredy exist"})
    } 
    //valaditaing  email format & strong password
    if (!validator.isEmail(email)) {
        return res.json({success:false,message:"please enter valid email"})
    } 
    if (password.length<8){
        return res.json({success:false,message:"Please enter strong password"})
    }

     //haasing user password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword

    })

    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token});




} catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
}
}

export{loginUser,registerUser};