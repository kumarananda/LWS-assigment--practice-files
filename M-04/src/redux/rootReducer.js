
import { combineReducers } from "redux";
import bookReducer from "./books/reducer";


// combine reducer
const rootReducer = combineReducers({
    books : bookReducer
})

export default rootReducer;