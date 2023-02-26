import { CART_ADD, CART_DECREASE, CART_DELETE, CART_INCREASE } from "./actionTypes"

// Cart add
export const addToCart = (data) => {
    return {
        type : CART_ADD,
        payload : data
    }
}

// Cart delete
export const deleteCart = (data) => {
    return {
        type : CART_DELETE,
        payload : data
    }
}

// Cart increase
export const increaseCartCount = (data) => {
    return {
        type : CART_INCREASE,
        payload : data
    }
}

// Cart increase
export const decreaseCartCount = (data) => {
    return {
        type : CART_DECREASE,
        payload : data
    }
}


