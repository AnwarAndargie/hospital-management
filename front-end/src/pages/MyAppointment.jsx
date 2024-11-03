import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  const [paid, setPaid] = useState(false);
  return (
    <section className="ml-24 mr-24 mt-24">
      <div>
        <h1 className="text-lg font-semibold text-zinc-700 mt-8 mb-4">
          My Appointments
        </h1>
        <hr className="h-0.5 w-full " />
        <div className="flex flex-col">
          {doctors.slice(0, 4).map((doctor) => {
            return (
              <div className="flex flex- justify-between p-4 relative">
                <div className="flex flex-row space-x-4">
                  <div className="w-1/3 bg-blue-50">
                    <img
                      className="w-full h-[35vh]"
                      src={doctor.image}
                      alt={doctor.name}
                    />
                  </div>

                  <div className="mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-700">
                        {doctor.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {doctor.speciality}
                      </p>
                    </div>
                    <div className="mt-4">
                      <h1 className="text-lg text-gray-700">Address:</h1>
                      <p className="text-sm text-gray-500">
                        {doctor.address.line1}
                      </p>
                      <p className="text-sm text-gray-500">
                        {doctor.address.line2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 absolute bottom-5 right-0">
                  {!paid ? (
                    <button
                      onClick={() => {
                        setPaid(true);
                      }}
                      className="w-52 h-10 border rounded-md bg-blue-500 text-white outline-none hover:bg-white hover:text-gray-700 transition-all"
                    >
                      Pay Here
                    </button>
                  ) : (
                    ""
                  )}
                  <button className="w-52 h-10 border rounded-md bg-white text-gray-700 outline-none hover:bg-red-500 hover:text-white transition-all">
                    Cancel Appointment
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="h-0.5 w-full " />
      </div>
    </section>
  );
};

export default MyAppointment;
