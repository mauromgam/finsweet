import { useRef } from "react";

const NewCar: React.FC<{
  onAddCar: (
    enteredMake: string,
    enteredModel: string,
    enteredYear: number
  ) => void;
}> = (props) => {
  const carMakeInputRef = useRef<HTMLInputElement>(null);
  const carModelInputRef = useRef<HTMLInputElement>(null);
  const carYearInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredMake = carMakeInputRef.current!.value;
    const enteredModel = carModelInputRef.current!.value;
    const enteredYear: number = parseInt(carYearInputRef.current!.value);

    if (enteredMake.trim().length === 0) {
      // throw error
      console.log("error 1");
      return;
    }
    if (enteredModel.trim().length === 0) {
      // throw error
      console.log("error 2");
      return;
    }
    if (enteredYear <= 0) {
      // throw error
      console.log("error 3");
      return;
    }

    props.onAddCar(enteredMake, enteredModel, enteredYear);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="make">Make</label>
      <input type="text" id="make" ref={carMakeInputRef} />
      <label htmlFor="model">Model</label>
      <input type="text" id="model" ref={carModelInputRef} />
      <label htmlFor="year">Year</label>
      <input type="number" id="year" ref={carYearInputRef} />
      <button>Add Car</button>
    </form>
  );
};

export default NewCar;
