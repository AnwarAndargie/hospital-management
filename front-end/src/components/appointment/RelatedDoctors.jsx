import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link, useNavigate } from "react-router-dom";

function RelatedDoctors({ docId }) {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const selctedDoc = doctors.find((doctor) => doctor._id === docId);
  const relateDoctors = doctors.filter(
    (doctor) => doctor.speciality === selctedDoc.speciality
  );
  return (
    <section className="mt-12 lg:mt-36">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-xl lg:text-4xl font-bold text-gray-700 mb-2">
          Related Doctors
        </h1>
        <p className="text-xs lg:text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 mt-2 xl:mt-8">
          {relateDoctors.map((doctor) => (
            <div
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
                scrollTo(0, 0);
              }}
              key={doctor.id}
              className="transform transition duration-300 scale-95 hover:opacity-100 hover:scale-100 cursor-pointer"
            >
              <div className="flex flex-col w-72 h-72 md:w-52 md:h-52 border rounded-t-xl bg-blue-50 transition-shadow hover:shadow-lg">
                <img
                  className="w-64 h-72 md:w-full md:h-60 object-cover rounded-t-xl mb-2"
                  src={doctor.image}
                  alt={`${doctor.name} profile`}
                />
              </div>
              <div className="bg-white p-4 border-t-0 rounded-b-md">
                <p className="text-green-500 text-lg md:text-sm mb-1">
                  Available
                </p>
                <p className="text-xl md:text-lg font-semibold">
                  {doctor.name}
                </p>
                <p className="text-lg md:text-sm font-light">
                  {doctor.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedDoctors;
