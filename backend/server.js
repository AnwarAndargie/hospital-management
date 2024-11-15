import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRoute from "./routes/adminRoute.js";
import usersRoute from "./routes/usersRoute.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

//routes
app.use("/api/admin", adminRoute);
app.get("/", (req, res) => {
  res.send("App is working");
});
app.use("/api/users", usersRoute);
app.listen(PORT, () => {
  console.log(`app running at port number ${PORT}`);
});
