
import { combineReducers } from "redux";
import bookReducer from "./books/reducer";
import filterReducer from "./filters/reducer";


// combine reducer
const rootReducer = combineReducers({
    books : bookReducer,
    filters : filterReducer
})

export default rootReducer;