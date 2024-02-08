import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <Nav className=" flex pt-3 pb-3 text-xl items-center">
        <Link
          to="/home"
          className=" text-2xl hover:text-indigo-700 pl-8 no-underline text-green-400 transition ease-in-out delay-75 hover:-translate-y-1 duration-300 hover:scale-110"
        >
          Jasmine Shone
        </Link>

        <Link
          to="/about"
          className=" hover:text-indigo-700 pl-8 no-underline  text-green-700 hover:-translate-y-1 duration-300 hover:scale-110"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="hover:text-indigo-700 pl-8 no-underline text-green-700  hover:-translate-y-1 duration-300 hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className="hover:text-indigo-700 pl-8 no-underline text-green-700 hover:-translate-y-1 duration-300 hover:scale-110"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="hover:text-indigo-700 pl-8 no-underline text-green-700 hover:-translate-y-1 duration-300 hover:scale-110"
        >
          Contact
        </Link>
      </Nav>
    </>
  );
}

export default NavBar;
