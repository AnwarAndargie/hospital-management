import React, { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";

function DoctorAppointment({ docId }) {
  const { assets, doctors } = useContext(AppContext);
  const selctedDoc = doctors.find((doctor) => doctor._id === docId);

  return (
    <section className="ml-6 mt-4 mr-6 lg:ml-24 lg:mt-8 lg:mr-24">
      <div className="flex flex-col lg:flex lg:flex-row gap-2 lg:gap-4">
        <div className="w-[100vw] h-[50vh] lg:w-[40vw] lg:h-[50vh] rounded-lg bg-blue-600">
          <img
            className="w-3/4 lg:w-[266px] lg:h-[322px]"
            src={selctedDoc.image}
            alt={`${selctedDoc.name}`}
          />
        </div>
        <div className="border-2 p-4 w-full lg:rounded-xl lg:p-8">
          <div className="flex gap-2">
            <h1 className=" text-xl lg:text-2xl font-bold  text-gray-900">
              {selctedDoc.name}
            </h1>
            <img src={assets.verified_icon} alt="" />
          </div>
          <div className="flex items-center gap-3 text-sm">
            <p>
              {selctedDoc.degree}-{selctedDoc.speciality}
            </p>
            <p className="border rounded-md p-1">{selctedDoc.experience}</p>
          </div>
          <p className="font-semibold">
            About <img className="inline ml-2" src={assets.info_icon} alt="" />
          </p>
          <p className="text-sm">{selctedDoc.about}</p>
          <p className="mt-12">
            Appointment Fee:{" "}
            <p className="inline font-semibold ">${selctedDoc.fees}</p>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DoctorAppointment;
