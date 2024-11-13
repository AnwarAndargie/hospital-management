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
  const image = req.file;
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
  console.log(image);
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
  } catch (error) {
    console.log(error);
  }
};

export { addDoctor };
