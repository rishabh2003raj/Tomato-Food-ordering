import express from "express";
import multer from "multer";
import { addFood,listFood,removeFood } from "../Controllers/FoodController.js";

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "Uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
