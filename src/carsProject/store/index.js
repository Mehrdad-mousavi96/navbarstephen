import { configureStore } from "@reduxjs/toolkit";
import { changeCost, changeName, formReducer } from "./slices/formSlice";
import { addCar, carsReducer, changeSearchTerm, removeCar } from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        stateForm: formReducer,
        stateCars: carsReducer
    }
})

export {store, addCar, removeCar, changeSearchTerm, changeName, changeCost}