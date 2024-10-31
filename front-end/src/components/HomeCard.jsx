import React from "react";
import { assets } from "../../public/assets/assets_frontend/assets";

function HomeCard() {
  return (
    <section>
      <div className="max-w-full h-[698px] flex flex-row justify-between items-center bg-blue-500 mt-4 pt-6 ml-12 mr-12 pl-12 rounded-xl">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-white text-4xl">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <img src={assets.group_profiles} alt="group pictures" />
            <p className="text-sm text-white">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <button className="w-[195px] h-[44px] flex flex-row items-center gap-2 p-2  text-lg rounded-3xl outline-none bg-white text-stone-700">
            Book Appointment{" "}
            <img
              className="w-4 h-2 text-stone-700"
              src={assets.arrow_icon}
              alt=""
            />
          </button>
        </div>
        <div>
          <img className="w-[882px] h-[596px]" src={assets.header_img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HomeCard;
