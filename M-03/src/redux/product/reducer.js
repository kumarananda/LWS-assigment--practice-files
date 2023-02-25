import { ADD_PRODUCT } from "./actionTypes";
import initialState from "./initialState";


const nextProductId = (products) => {
    const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
    return maxId + 1;
};

// create reucer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    ...action.payload,
                    id : nextProductId(state)
                }
            ]
        default:
            return state;
    }
}

export default reducer ;