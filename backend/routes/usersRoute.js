import express from "express";
import { registerUser } from "../controllers/userController.js";
import { authUser } from "../middlewares/authUser.js";

const router = express.Router();

router.post("/register", registerUser).post("/login", authUser);

export default router;
