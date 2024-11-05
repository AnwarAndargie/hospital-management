import express from "express";
import upload from "../middlewares/multer.js";
import { addDoctor } from "../controllers/adminController.js";
const adminRoute = express.Router();

adminRoute.post("/add-doctor", upload.single("image"), addDoctor);

export default adminRoute;
