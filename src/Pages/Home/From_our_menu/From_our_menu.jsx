import React, { useEffect, useState } from "react";
import SectionTaitle from "../../../Components/SectionTaitle/SectionTaitle";
import MenuItme from "../../../Shear/MenuItems/MenuItme";

const From_our_menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenuItems = data.filter(
          (item) => item.category === "popular"
        );
        setMenu(popularMenuItems);
      });
  }, []);
  return (
    <div className="md:w-11/12 md:mx-auto mb-28">
      <SectionTaitle
        title={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTaitle>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItme key={item._id} item={item}></MenuItme>
        ))}
      </div>
    </div>
  );
};

export default From_our_menu;
