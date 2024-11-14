import userModel from "../models/users/userModel.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    res.json({ sucess: false, msg: "user not found" });
  }
};
