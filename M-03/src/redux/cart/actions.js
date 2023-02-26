import { ADD_CART } from "./actionTypes"

// product add
export const addToCart = (data) => {
    return {
        type : ADD_CART,
        payload : data
    }
}