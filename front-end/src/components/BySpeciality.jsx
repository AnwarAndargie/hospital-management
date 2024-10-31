import React from "react";
import {
  assets,
  specialityData,
} from "../../public/assets/assets_frontend/assets";
import { div } from "three/webgpu";

function BySpeciality() {
  return (
    <section className="mt-12">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-4xl text-neutral-900">Find by Speciality </h1>
        <p className="text-lg">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <div className="flex flex-row gap-x-6 justify-between items-center mt-8">
          {specialityData.map((item) => {
            return (
              <div className="flex flex-col gap-y-4 items-center">
                <img
                  className="w-32 h-32 rounded-full"
                  src={item.image}
                  alt=""
                />
                <p className="text-lg">{item.speciality}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BySpeciality;
