import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducerApp";

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers,
});

const { dispatch } = store;

export { store, dispatch };
