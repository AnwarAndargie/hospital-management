import React, { useEffect, useState } from "react";
import { doctors } from "../../public/assets/assets_frontend/assets";
import { specialityData } from "../../public/assets/assets_frontend/assets";
import { Link, useNavigate, useParams } from "react-router-dom";

function AllDoctors() {
  const { speciality } = useParams();
  const [filteredDocs, setFilteredDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (speciality) {
      setFilteredDocs(
        doctors.filter((doctor) => doctor.speciality === speciality)
      );
    } else {
      setFilteredDocs(doctors);
    }
  }, [speciality]);

  return (
    <section className="flex flex-col xl:w-full m-6 mt-4 xl:mr-4 items-center">
      <div className="flex flex-col md:flex md:flex-row md:gap-2 md:w-full">
        <div className="ml-6 mt-2 md:ml-24 md:mt-6">
          <p className="text-lg ml-4">Browse through the doctors</p>
          <div className="grid grid-cols-2 gap-4 p-4 items-center md:pl-2 md:flex md:flex-col md:gap-y-4">
            {specialityData.map((spec) => (
              <div
                key={spec.speciality}
                onClick={() => {
                  speciality === `${spec.speciality}`
                    ? navigate("/doctors")
                    : navigate(`/doctors/${spec.speciality}`);
                }}
                className={`border rounded items-center md:p-2 cursor-pointer transition-all w-72 ${
                  speciality === spec.speciality
                    ? `bg-indigo-200 text-black`
                    : ``
                }`}
              >
                {spec.speciality}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 mt-4 xl:mt-8">
            {filteredDocs.map((doctor) => (
              <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
                <div className="transform transition duration-300 scale-95 hover:opacity-100 hover:scale-100">
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllDoctors;
