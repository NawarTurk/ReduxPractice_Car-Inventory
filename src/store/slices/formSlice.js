import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0,
    },
    reducers: {  // rememeber the s
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        })
    }
})

export const {changeName, changeCost } = formSlice.actions;  // those are the different action creators that are generated for us
export const formReducer = formSlice.reducer;  // the one single combined reducer