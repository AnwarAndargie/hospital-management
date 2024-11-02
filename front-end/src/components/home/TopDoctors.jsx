import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <section className="flex flex-col xl:w-full ml-6 mr-6 mt-4 xl:ml-12 xl:mt-12 xl:mr-12  items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-lg xl:text-4xl font-medium">Top Doctors to Book</h1>
        <p className="text-xs xl:text-lg">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 xl:gap-4 mt-4 xl:mt-8">
          {doctors.slice(0, 10).map((doctor) => (
            <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
              <div className="card transform transition duration-300 scale-95 hover:opacity-100 hover:scale-100">
                <div className="flex flex-col w-72 h-72 md:w-52 md:h-52 border rounded-t-xl md:p-4 bg-blue-50  ">
                  <img
                    className="w-64 h-72 md:max-w-48 md:max-h-60 object-cover rounded-t-xl mb-2"
                    src={doctor.image}
                    alt={`${doctor.name} profile`}
                  />
                </div>
                <div className="bg-white p-4 border-x border-y border-b border-t-0 rounded-b-md">
                  <div className="flex items-center gap-2 text-center">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p className="text-green-500 text-lg md:text-sm ">
                      Available
                    </p>
                  </div>

                  <p className="text-xl md:text-lg font-semibold">
                    {doctor.name}
                  </p>
                  <p className=" text-lg md:text-sm font-light">
                    {doctor.speciality}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 mb-4 md:mt-8 ">
          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="w-24 h-10 text-sm md:w-[195px] md:h-[44px] items-center p-2  md:text-lg rounded-3xl outline-none bg-blue-100 text-center text-stone-700"
          >
            more
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopDoctors;
