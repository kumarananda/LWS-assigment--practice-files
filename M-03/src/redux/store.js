import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";



// create store 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))


// export
export default store