import { ADD_FLIGHT, DELETE_FLIGHT } from "./actionTypes"


//Add flight action
export const addFlight = (data) => {
    return {
        type : ADD_FLIGHT,
        payload : data
    }
}

// Remove flight action 
export const removeFlight = (id) => {
    return {
        type : DELETE_FLIGHT,
        payload : id
    }
}