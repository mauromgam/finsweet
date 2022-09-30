import { useState } from "react";
import Car from "../../models/car";
import Cars from "../Cars/Cars";
import NewCar from "../Cars/NewCar";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const addCarHandler = (make: string, model: string, year: number) => {
    const newCar = new Car(make, model, year);

    setCars((prevCars) => {
      return prevCars.concat(newCar);
    });
  };

  return (
    <main>
      <Card className={classes.home}>
        <NewCar onAddCar={addCarHandler} />
        <Cars cars={cars} />
      </Card>
    </main>
  );
};

export default Home;
