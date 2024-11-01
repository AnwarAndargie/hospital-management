import React from "react";
import { assets } from "../../public/assets/assets_frontend/assets";

function HomeCard() {
  return (
    <section>
      <div className="m-6 h-[40vh] pt-4 pl-4 rounded-md max-w-full md:h-[698px] flex flex-row justify-between items-center bg-blue-500 md:mt-4 xl:pt-6 md:ml-24 md:mr-24 md:pl-12 md:rounded-xl">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-white text-lg md:text-4xl font-bold">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <img
              className="w-16 h-10"
              src={assets.group_profiles}
              alt="group pictures"
            />
            <p className="text-xs md:text-sm text-white">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <button className="w-32 h-8 text-xs md:w-[195px] md:h-[44px] flex flex-row items-center gap-2 p-2  md:text-lg rounded-3xl outline-none bg-white text-stone-700">
            Book Appointment
            <img
              className="w-4 h-2 text-stone-700"
              src={assets.arrow_icon}
              alt=""
            />
          </button>
        </div>
        <div className="flex flex-col items-end">
          <img
            className="w-[35vw] h-[30vh] lg:w-[55vw] lg:h-[40vh] xl:w-[65vw] xl:h-[75vh]"
            src={assets.header_img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HomeCard;
