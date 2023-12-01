import React from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const namItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  return (
    <div>
      <header className="max-w-screen-2xl xl:px-28 px-4">
        <nav className=" flex justify-between items-center container md:py-4 pt-6 pb-3">
          <FaSearch className=" text-black   cursor-pointer hidden md:block" />
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          {/*Account and shopping btn  */}
          <div className="text-lg text-black sm:flex items-center gap-4 hidden">
            <Link to="/" className="flex items-center gap-2">
              <FaUser />
              Account
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <FaShoppingBag />
              Shopping
            </Link>
          </div>
          {/* Navbar for sm device */}
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className=" w-5 h-5 text-red-800" />
              ) : (
                <FaBars className=" w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </nav>
        <hr />
        {/* Category Items */}
        <div className=" pt-4">
          <ul className="hidden lg:flex items-center justify-between text-black ">
            {namItems.map(({ title, path }) => (
              <li key={title}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Only Mobile menu items */}
        <div className="sm:hidden">
          <ul
            className={`bg-black text-white px-4 py-2 rounded ${
              isMenuOpen ? "" : "hidden"
            } `}
          >
            {namItems.map(({ title, path }) => (
              <li
                key={title}
                className=" hover:text-orange-500 my-3 cursor-pointer "
              >
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
