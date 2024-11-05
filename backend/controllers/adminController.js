//import async from "async";

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
      res.send({ sucess: false, msg: "Data is missing" });
    }
  } catch (error) {}
};

export default addDoctor;
