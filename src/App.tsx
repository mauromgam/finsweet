import React, { useState } from "react";

import Cars from "./components/Cars/Cars";
import NewCar from "./components/Cars/NewCar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";

import Car from "./models/car";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
