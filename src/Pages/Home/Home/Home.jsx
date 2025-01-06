import React from "react";
import Banner from "../Banner/Banner";
import Order_online from "../Order_online/Order_online";
import BistroBoss from "../BistroBoss/BistroBoss";
import From_our_menu from "../From_our_menu/From_our_menu";
import Our_menus from "../Our_menus/Our_menus";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Order_online></Order_online>
      <BistroBoss></BistroBoss>
      <From_our_menu></From_our_menu>
      <Our_menus></Our_menus>
    </div>
  );
};

export default Home;
