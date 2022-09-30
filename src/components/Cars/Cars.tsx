import React, { FC } from "react";

import Car from "../../models/car";
import CarItem from "./CarItem";

const Cars: FC<{ cars: Car[] }> = (props) => {
  return (
    <ul>
      {props.cars.map((car) => (
        <CarItem
          key={car.id}
          make={car.make}
          model={car.model}
          year={car.year}
        />
      ))}
    </ul>
  );
};

export default Cars;
