import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const item = (
    <>
      <Link to="/" className="hover:text-yellow-500">
        HOME
      </Link>
      <Link to="/contact" className="hover:text-yellow-500">
        CONTACT US
      </Link>
      <Link to="/dashboard" className="hover:text-yellow-500">
        DASHBOARD
      </Link>
      <Link to="/menu" className="hover:text-yellow-500">
        OUR MENU
      </Link>
      <Link to="/shop" className="hover:text-yellow-500">
        OUR SHOP
      </Link>
      <Link to="/logout" className="hover:text-yellow-500">
        SIGN OUT
      </Link>
    </>
  );

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <span className="text-yellow-500">BISTRO BOSS</span>{" "}
          <span>RESTAURANT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">{item}</div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart className="text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>

          {/* Profile Icon */}
          <Link to="/profile">
            <FaUserAlt className="text-xl" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-500 focus:outline-none text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="flex flex-col space-y-4 px-6 py-4">{item}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
