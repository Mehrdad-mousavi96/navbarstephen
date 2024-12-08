import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",

  initialState: {
    cars: [],
    searchTerm: "",
  },
 
  reducers: {
    addCar: (state, action) => {
      // Assumption:
      // action.payload === {name: 'Ford', cost: 140}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });

    },
    removeCar: (state, action) => {
      // Assumption:
      // action.payload === the id of the car we want to remove
      const updated = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updated;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
