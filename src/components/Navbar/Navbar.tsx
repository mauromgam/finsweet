import React from "react";
import logo from "../../images/logo-black.svg";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <img src={logo} className={classes.logo} alt="logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <button>Free trial</button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
