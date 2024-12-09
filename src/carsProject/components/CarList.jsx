import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(
    ({ stateCars: { data, searchTerm }, stateForm }) => {
      const filteredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: stateForm.name,
      };
    }
  );

  const handleCarDelete = (car) => dispatch(removeCar(car.id));

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={car.id}
        className="flex justify-center items-center text-lg border-2 border-black rounded-lg my-2"
      >
        <p className={`mx-52 ${bold && 'font-bold'}`}>
          {car.name} - ${car.cost}
        </p>
        <button onClick={() => handleCarDelete(car)}>Delete</button>
      </div>
    );
  });

  return <div>{renderedCars}</div>;
};

export default CarList;
