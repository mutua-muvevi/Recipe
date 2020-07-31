import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const linkText = {
    textDecoration: "none",
  }

  return (
    <div>
      <div className="Nav">
        <h2>LOGO</h2>
        <ul className="Navbar">
          <NavLink to="/" style={linkText}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" style={linkText}>
            <li>About</li>
          </NavLink>
          <NavLink to="/contact" style={linkText}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
