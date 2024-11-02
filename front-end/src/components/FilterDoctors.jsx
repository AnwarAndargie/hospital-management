import React from "react";
import { specialityData } from "../../public/assets/assets_frontend/assets";

function FilterDoctors() {
  return (
    <section className="ml-24 mt-6">
      <p className="text-lg">Browse through the doctors</p>
      <div className="flex flex-col gap-y-4  ">
        {specialityData.map((spec) => {
          return (
            <div className="border rounded items-center p-3 active:bg-zinc-500 cursor-pointer transition-all">
              {spec.speciality}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FilterDoctors;
