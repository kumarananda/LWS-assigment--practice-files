import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";

const medleware = []



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...medleware)))


export default store;