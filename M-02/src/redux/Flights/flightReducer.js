import { ADD_FLIGHT, DELETE_FLIGHT } from "./actionTypes";
import flightInitial from "./initialState";


// create booking reducer
const flightReducer = (state= flightInitial, {type, payload}) => {
    switch (type) {
        case ADD_FLIGHT:
            return {
                ...state,
                flights : state.flights.length >= 3 ? 
                    [...state.flights] : 
                        [...state.flights, 
                        {...payload, id: state.flights.length ? state.flights[state.flights.length-1].id+1 : 0} ] 
                        
            }
        case DELETE_FLIGHT:
            return {
                ...state,
                flights : state.flights.filter(data => data.id !== payload )
                        
            }

        default:
            return state
    }
}

export default flightReducer;