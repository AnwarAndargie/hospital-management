import React from "react";
import { doctors } from "../../public/assets/assets_frontend/assets";
import { Link } from "react-router-dom";

function TopDoctors() {
  return (
    <section className="flex flex-col xl:w-full ml-6 mr-6 mt-4 xl:ml-12 xl:mt-12 xl:mr-12  items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-lg xl:text-4xl font-medium">Top Doctors to Book</h1>
        <p className="text-xs xl:text-lg">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 xl:gap-4 mt-4 xl:mt-8">
          {doctors.map((doctor) => (
            <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
              <div className="flex flex-col w-72 h-72 md:w-52 md:h-52 border rounded-t-xl md:p-4 bg-blue-50 transition-shadow">
                <img
                  className="w-64 h-72 md:max-w-48 md:max-h-60 object-cover rounded-t-xl mb-2"
                  src={doctor.image}
                  alt={`${doctor.name} profile`}
                />
              </div>
              <div className="bg-white p-4 border-x border-y border-b border-t-0 rounded-b-md">
                <p className="text-green-500 text-lg md:text-sm ">
                  <li className="m-0">Available</li>
                </p>
                <p className="text-xl md:text-lg font-semibold">
                  {doctor.name}
                </p>
                <p className=" text-lg md:text-sm font-light">
                  {doctor.speciality}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 mb-4 md:mt-8">
          <button className="w-24 h-10 text-sm md:w-[195px] md:h-[44px] items-center p-2  md:text-lg rounded-3xl outline-none bg-blue-100 text-center text-stone-700">
            more
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopDoctors;
