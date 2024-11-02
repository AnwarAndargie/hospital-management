import React from "react";
import { useParams } from "react-router-dom";
import DoctorAppointment from "../components/appointment/DoctorAppointment";
import RelatedDoctors from "../components/appointment/RelatedDoctors";
import BookingSlot from "../components/appointment/BookingSlot";

const Appointment = () => {
  const { docId } = useParams();

  return (
    <section>
      <DoctorAppointment docId={docId} />
      <BookingSlot />
      <RelatedDoctors docId={docId} />
    </section>
  );
};

export default Appointment;
