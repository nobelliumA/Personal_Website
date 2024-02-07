import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <Nav className="flex pt-3 pb-3 text-xl items-center">
        <Link
          to="/home"
          className=" text-2xl hover:text-indigo-700  pl-8 no-underline text-green-400 "
        >
          Jasmine Shone
        </Link>
        <Link to="/home" className="pl-8 no-underline text-green-700">
          Home
        </Link>
        <Link to="/about" className="pl-8 no-underline text-green-700">
          About
        </Link>
        <Link to="/projects" className="pl-8 no-underline text-green-700">
          Projects
        </Link>
        <Link to="/resume" className="pl-8 no-underline text-green-700">
          Resume
        </Link>
        <Link to="/contact" className="pl-8 no-underline text-green-700">
          Contact
        </Link>
      </Nav>
    </>
  );
}

export default NavBar;
