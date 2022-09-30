import React from "react";
import logo from "../../images/logo.svg";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <img src={logo} className={classes.logo} alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Cars</a>
        </li>
        <li>
          <a href="/">Vans</a>
        </li>
        <li>
          <a href="/">Motorbikes</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <button>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
