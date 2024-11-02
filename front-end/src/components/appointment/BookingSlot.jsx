import React, { useState } from "react";

function BookingSlot() {
  const [date, setDate] = useState({});
  const [selectedTime, setSelectedTime] = useState("");
  const slots = [
    { day: "MON", No: 10 },
    { day: "TUE", No: 11 },
    { day: "WED", No: 12 },
    { day: "THU", No: 13 },
    { day: "FRI", No: 14 },
    { day: "SAT", No: 15 },
    { day: "SUN", No: 16 },
  ];
  const time = [
    "8:00 am",
    "8:30 am",
    "9:00 am",
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
  ];
  console.log(date);
  return (
    <section className="ml-6 lg:ml-96 mt-8 mr-24">
      <h1 className="text-2xl mb-4 font-semibold text-gray-700">
        Booking Slots
      </h1>
      <div>
        <div className="flex gap-4">
          {" "}
          {slots.map((slot) => {
            return (
              <button
                onClick={() => {
                  setDate(slot);
                }}
                className={`w-10 h-16 text-xs rounded-xl lg:w-16 lg:h-24 border outline-none lg:rounded-[44px] lg:text-sm ${
                  date.day === slot.day ? `bg-blue-500 text-white` : ``
                }`}
              >
                <p>{slot.day}</p>
                <p>{slot.No}</p>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2 lg:flex lg:gap-2 mt-4">
          {time.map((item) => {
            return (
              <button
                onClick={() => {
                  setSelectedTime(item);
                }}
                className={`  w-28 h-10 border rounded-[44px] outline-none p-2 ${
                  selectedTime === item ? `bg-blue-500 text-white` : ``
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <button className="w-32 h-8 rounded-xl text-xs lg:w-64 lg:h-16 p-2 mt-6 border lg:rounded-[60px] outline-none bg-blue-500 text-white lg:text-sm font-medium">
          Book an appointment
        </button>
      </div>
    </section>
  );
}

export default BookingSlot;
