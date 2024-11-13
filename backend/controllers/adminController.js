import bcrypt from "bcrypt";
import validator from "validator";
import cloudinary from "cloudinary";
import doctorModel from "../models/doctors/doctorModel.js";

const addDoctor = async (req, res) => {
  const {
    name,
    password,
    email,
    speciality,
    degree,
    experience,
    description,
    address,
    fee,
  } = req.body;
  const imageFile = req.file;
  console.log(
    name,
    password,
    email,
    speciality,
    degree,
    experience,
    description,
    address,
    fee
  );
  console.log(imageFile);
  try {
    if (
      !name ||
      !password ||
      !email ||
      !speciality ||
      !degree ||
      !experience ||
      !description ||
      !address ||
      !fee
    ) {
      res.json({ sucess: false, msg: "Data is missing" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ sucess: false, msg: "Please Enter a valid email" });
    }
    if (!password.length < 8) {
      return res.json({ sucess: false, msg: "Please Enter a strong password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const newData = new doctorModel({
      name,
      password: hashPassword,
      email,
      speciality,
      degree,
      experience,
      description,
      address,
      image: imageUrl,
      fee,
    });
    newData.save();
  } catch (error) {
    console.log(error);
    return res.json({ sucess: false, msg: error.message });
  }
};

export { addDoctor };
