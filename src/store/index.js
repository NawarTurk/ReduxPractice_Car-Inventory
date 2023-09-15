import { configureStore } from '@reduxjs/toolkit';
import {
    carsReducer, 
    addCar, 
    removeCar, 
    changeSearchTerm
} from './slices/carsSlice';
import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlice';

const store = configureStore({
    reducer: {  // this obj dictates what the general state of our store
        cars: carsReducer,
        form: formReducer,
    }
})

export {store, carsReducer, removeCar, addCar, changeSearchTerm, formReducer, changeName, changeCost};