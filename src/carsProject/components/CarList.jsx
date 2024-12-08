import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const { cars, name } = useSelector(
    ({ formStore, carsStore: { cars, searchTerm } }) => {
      const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: formStore.name,
      };
    }
  );

  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    // state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={car.id}
        className={`flex justify-center items-center ${bold && "font-bold"}`}
      >
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="mx-4 p-1 hover:text-white hover:bg-black"
        >
          X
        </button>
      </div>
    );
  });

  return (
    <div className="my-2">
      <hr />
      {"<CarList>"}
      {renderedCars}
      {"</Carlist>"}
      <hr />
    </div>
  );
};

export default CarList;
