import React from "react";

import classes from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar />
    </header>
  );
};

export default Header;
