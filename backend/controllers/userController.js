import userModel from "../models/users/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({ success: false, msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      fullName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ success: true, msg: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: "Server error" });
  }
};
