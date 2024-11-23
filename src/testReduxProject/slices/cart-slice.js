import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) { 
                state.items[itemIndex].quantity++
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload)

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1)
            } else {
                state.items[itemIndex].quantity--
            }
        },
    }
})