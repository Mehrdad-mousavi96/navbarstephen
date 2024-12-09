import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector(({ stateForm }) => ({
    name: stateForm.name,
    cost: stateForm.cost,
  }));

  const handleNameChange = (event) => dispatch(changeName(event.target.value));

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="flex justify-between items-center my-4">
      <form onSubmit={handleSubmit}>
        <div className="flex ">
          <div>
            <label htmlFor="">Name</label>
            <input
              value={name}
              onChange={handleNameChange}
              placeholder="enter car name"
              className="border-2 mx-2 border-black rounded-lg text-center px-1 "
            />
          </div>

          <div>
            <label htmlFor="">Cost</label>
            <input
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
              className="border-2 mx-2 border-black rounded-lg text-center px-1"
            />
          </div>

          <div>
            <button className="border-2 rounded-lg border-black p-0.5 hover:bg-black hover:text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
