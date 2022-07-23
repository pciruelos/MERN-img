import React, { useState } from "react";
import Logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const [Navbar, SetNavbar] = useState(false);
  const handleClick = () => SetNavbar(!Navbar);
  return (
    <nav className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-blue-700 text-black ">
      <div>
        <img src={Logo} alt="ninguno" style={{ width: "100px" }} />
      </div>

      <div className="hidden md:flex">
        <ul className="hidden md:flex font-medium font-sans">
          <li className="px-2">
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/about">About this page</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/new">Upload an IMG</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="md:hidden z-10">
        {!Navbar ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !Navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-blue-900 flex flex-col justify-center items-center font-sans font-bold"
        }
      >
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/">
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/about">
            About this Page
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/new">
          Upload An Img
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
