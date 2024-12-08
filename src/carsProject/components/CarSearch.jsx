import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((store) => store.carsStore.searchTerm);

  const handleSearchTermChange = (event) =>
    dispatch(changeSearchTerm(event.target.value));

  return (
    <div className="m-2">
      {"<CarSearch>"}
      <div className="flex justify-around">
        <h3>My Cars</h3>
        <div>
          <label htmlFor="">
            <b>Search</b>
          </label>
          <input
            className="border-2 border-black rounded-lg mx-2"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      {"</CarSearch>"}
      <hr />
    </div>
  );
};

export default CarSearch;
