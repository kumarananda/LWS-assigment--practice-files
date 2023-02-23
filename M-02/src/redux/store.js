import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import myLoger from "./middleware/myLoger";

const medleware = [myLoger]


// without composeWithDevTools for build
const store = createStore(rootReducer, applyMiddleware(...medleware))

// with composeWithDevTools for Debagging 
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...medleware)))


export default store;