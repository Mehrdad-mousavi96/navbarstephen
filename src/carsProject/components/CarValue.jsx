import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ carsStore: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc, car) => acc + car.cost, 0);
  });

  return <div>Total Value: ${totalCost}</div>;
};

export default CarValue;
