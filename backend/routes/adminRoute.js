import express from "express";
import upload from "../middlewares/multer";
import addDoctor from "../controllers/adminController";
const adminRoute = express.Router();

router.post("/add-doctor", upload.single("image"), addDoctor);

export default adminRoute;
