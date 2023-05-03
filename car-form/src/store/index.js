import { carsReducer } from "./slices/carsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

console.log(store.getState());

export { store };
