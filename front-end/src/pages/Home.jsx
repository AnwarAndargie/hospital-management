import React from "react";
import HomeCard from "../components/home/HomeCard";
import BySpeciality from "../components/home/BySpeciality";
import TopDoctors from "../components/home/TopDoctors";
import BookAppointmentCard from "../components/home/BookAppointmentCard";

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
