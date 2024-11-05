import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    addres: {
      type: String,
      required: true,
    },
    slots_booked: {
      type: Object,
      default: {},
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { minimize: false }
);

const doctorModel = mongoose.model("doctor", doctorSchema);

export default doctorModel;
