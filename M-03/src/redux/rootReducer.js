
import { combineReducers } from "redux";
import productReducer from "./product/reducer"

// combine reducer
const rootReducer = combineReducers({
    products : productReducer,
})

export default rootReducer;