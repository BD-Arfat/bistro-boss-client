import React from "react";
import Banner from "../Banner/Banner";
import Order_online from "../Order_online/Order_online";
import BistroBoss from "../BistroBoss/BistroBoss";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Order_online></Order_online>
      <BistroBoss></BistroBoss>
    </div>
  );
};

export default Home;
