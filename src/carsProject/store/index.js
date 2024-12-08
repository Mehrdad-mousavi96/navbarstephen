import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
     reducer: {
        carsStore: carsReducer,
        formStore: formReducer
     }
})

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
}

