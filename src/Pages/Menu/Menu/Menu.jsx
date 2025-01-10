import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shear/Cover/Cover";
import image from "../../../assets/menu/banner3.jpg";
// import image2 from "../../../assets/menu/dessert-bg.jpeg";
// import image3 from "../../../assets/menu/pizza-bg.jpg";
// import image4 from "../../../assets/menu/salad-bg.jpg";
// import image5 from "../../../assets/menu/soup-bg.jpg";
// import From_our_menu from "../../Home/From_our_menu/From_our_menu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Our menu page</title>
      </Helmet>
      <Cover
        img={image}
        title={"OUR MENU"}
        des={"Would you like to try a dish?"}
      ></Cover>
    </div>
  );
};

export default Menu;
