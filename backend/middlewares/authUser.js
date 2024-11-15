import userModel from "../models/users/userModel.js";
import bcrypt from "bcrypt";

export const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, msg: "Incorrect password" });
    }

    return res.status(200).json({
      success: true,
      msg: `User ${user.fullName} logged in successfully`,
    });
  } catch (error) {
    console.error("Error during user authentication:", error);
    return res.status(500).json({ success: false, msg: "Server error" });
  }
};
