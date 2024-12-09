import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
    const dispatch = useDispatch()
  const searchTerm = useSelector(({ stateCars }) => stateCars.searchTerm);

  const handleSearchTermChange = (e) => dispatch(changeSearchTerm(e.target.value));

  return (
    <div className="flex justify-around my-4">
      <h3>My Cars</h3>
      <div>
        <label className="">Search</label>
        <input
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="mx-2 border-black border-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default CarSearch;
