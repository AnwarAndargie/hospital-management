import React from "react";
import {
  assets,
  specialityData,
} from "../../public/assets/assets_frontend/assets";
import { div } from "three/webgpu";
import { Link } from "react-router-dom";

function BySpeciality() {
  return (
    <section id="speciality" className="mt-2 ml-6 md:mt-4 mr-6 xl:mt-12">
      <div className="flex flex-col items-center gap-y-2 xl:gap-y-6">
        <h1 className="text-lg lg:text-2xl xl:text-4xl text-neutral-900 font-medium ">
          Find by Speciality{" "}
        </h1>
        <p className="text-sm md:text-lg xl:text-lg">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <div className="grid grid-cols-3  md:flex md:flex-row md:gap-x-6 justify-between items-center xl:mt-8">
          {specialityData.map((item) => {
            return (
              <Link to={`/doctors/${item.speciality}`}>
                <div className="flex flex-col gap-y-2 lg:gap-y-3 xl:gap-y-4 items-center transform transition duration-300 scale-95 hover:opacity-100 hover:scale-100">
                  <img
                    className="w-14 h-14 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full"
                    src={item.image}
                    alt=""
                  />
                  <p className="text-xs lg:text-sm xl:text-md">
                    {item.speciality}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BySpeciality;
