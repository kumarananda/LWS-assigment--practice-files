import { ADD_PRODUCT } from "./actionTypes"

// product add
export const addNewProduct = (data) => {
    return {
        type : ADD_PRODUCT,
        payload : data
    }
}

