import { createSlice, nanoid } from "@reduxjs/toolkit";


const carsSlice = createSlice({
    name: 'cars',

    initialState: {
        data: [],
        searchTerm: ''
    },

    reducers: {
        addCar: (state, action) => {
            // action.payload === {name: '', cost: number}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })

        },
        removeCar: (state, action) => {
            // action.payload === the id o fthe car want to remove
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated
        },
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions
export const carsReducer = carsSlice.reducer