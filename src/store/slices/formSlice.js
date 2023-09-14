import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: '',
    },
    reducers: {  // rememeber the s
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    }
})

export const {changeName, changeCost } = formSlice.actions;  // those are the different action creators that are generated for us
export const formReducer = formReducer.reducer;  // the one single combined reducer