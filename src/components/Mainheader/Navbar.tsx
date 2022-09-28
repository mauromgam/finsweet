import React from "react";
import logo from "../../images/logo-black.svg";

import classes from "./Navbar.module.css";

const Navbar: any = (props: any) => {
  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <img src={logo} className={classes.logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>
            <button className={classes.dark}>Free trial</button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
