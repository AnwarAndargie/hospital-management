import React from "react";
import HomeCard from "../components/HomeCard";
import BySpeciality from "../components/BySpeciality";
import TopDoctors from "../components/TopDoctors";
import BookAppointmentCard from "../components/BookAppointmentCard.";

const Home = () => {
  return (
    <div>
      <HomeCard />
      <BySpeciality />
      <TopDoctors />
      <BookAppointmentCard />
    </div>
  );
};

export default Home;
