import React from "react";
import Navbar from "../../Shear/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Shear/Footer/Footer";

const OutLets = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default OutLets;
