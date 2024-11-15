import userModel from "../models/users/userModel.js";
import bcrypt from "bcrypt";

export const authUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    res.json({ sucess: false, msg: "user not found" });
  }
};

export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    res.json({ sucess: false, msg: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new userModel({ fullName, email, hashedPass });
  newUser.save();
};
