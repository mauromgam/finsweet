class Car {
  id: number;
  make: string;
  model: string;
  year: number;

  constructor(carMake: string, carModel: string, carYear: number) {
    this.id = Math.random();
    this.make = carMake;
    this.model = carModel;
    this.year = carYear;
  }
}

export default Car;
