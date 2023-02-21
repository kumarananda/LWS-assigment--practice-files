import { combineReducers } from "redux";
import flightReducer from "./Flights/flightReducer";


// combine reducer
const rootReducer = combineReducers({
    flight : flightReducer
});


export default rootReducer ;