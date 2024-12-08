import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => ({
    name: state.formStore.name,
    cost: state.formStore.cost,
  }));
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  const handleNameChange = (event) => dispatch(changeName(event.target.value));

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };


  return (
    <>
      {"<CarForm>"}
      <div className="border-2 rounded-md border-black p-2 m-4 flex justify-evenly items-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center rounded-md"
        >
          <div>
            <label>Name</label>
            <input
              className="border-2 border-black m-2 rounded-md"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label>Cost</label>
            <input
              className="border-2 border-black m-2 justify-center items-center rounded-md"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>

          <div>
            <button className=" border-2 p-1 border-black rounded-lg hover:bg-black hover:text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
      {"</CarForm>"}
    </>
  );
};

export default CarForm;
