import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

function BookAppointmentCard() {
  const { assets } = useContext(AppContext);
  return (
    <section className="m-6 md:mt-24 md:ml-24 md:mr-24 md:mb-16">
      <div className=" h-[35vh]  max-w-full xl:h-[55vh] bg-blue-500 border rounded-xl flex flex-row gap-4 p-4 relative">
        <div className="flex flex-col justify-center pl-2 xl:pl-8">
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-white font-bold">
            Book Appointment With 100+ Trusted Doctors
          </h1>
          <button className="w-24 h-12  md:w-[195px] md:h-[44px] text-sm md:text-lg items-center p-2  rounded-3xl outline-none bg-white text-center text-stone-700 mt-2">
            Create Account
          </button>
        </div>
        <div className="w-2/3">
          {" "}
          <img
            className="w-44 h-32 md:w-[480px] md:h-[400px] absolute right-0 -top-12 "
            src={assets.appointment_img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default BookAppointmentCard;
