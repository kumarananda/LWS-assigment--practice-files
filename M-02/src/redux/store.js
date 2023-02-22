import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import myLoger from "./middleware/myLoger";

const medleware = [myLoger]



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...medleware)))


export default store;