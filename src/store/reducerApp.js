import { combineReducers } from "redux";
import menu from "./menu/menuSlice";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu });

export default reducers;
