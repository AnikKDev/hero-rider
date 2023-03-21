import React, { createContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Speciality from "./Speciality/Speciality";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <Speciality />
    </div>
  );
};

export default Homepage;
