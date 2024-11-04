import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is working");
});

app.listen(PORT, () => {
  console.log(`app running at port number ${PORT}`);
});
