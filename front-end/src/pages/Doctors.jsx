import React from "react";

import FilterDoctors from "../components/FilterDoctors";
import AllDoctors from "../components/AllDoctors";

const Doctors = () => {
  return (
    <div className="flex flex-row">
      <FilterDoctors />
      <AllDoctors />
    </div>
  );
};

export default Doctors;
