import userModel from "../models/users/userModel.js";
import bcrypt from "bcrypt";

export const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    res.json({ sucess: false, msg: "user not found" });
  }
  if (bcrypt.compare(password, user.password)) {
    return res.status(403).json({ msg: "Incorrect password" });
  }
  return res
    .status(200)
    .json({ msg: `user ${user.fullName} logged in successfully` });
};
