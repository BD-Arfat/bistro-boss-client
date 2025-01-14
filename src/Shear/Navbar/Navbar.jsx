import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const item = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        CONTACT US
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to="/ourMenu"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        OUR MENU
      </NavLink>
      <NavLink
        to="/order"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        OUR PRODUCTS
      </NavLink>
    </>
  );

  return (
    <nav className="bg-black fixed z-10 w-full -mt-1 text-white">
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
          <Link
            className="bg-white px-4 text-black py-2 rounded-sm font-bold"
            to={"/login"}
          >
            Login Now
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
