import initialState from "./initialState";
import { FILTER_SCARCH, FILTER_STATUS } from './actionTypes'


// create reucer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_SCARCH :
            return {
                ...state,
                search : action.payload ,

            }

        case FILTER_STATUS :
            return {
                ...state,
                status : action.payload ,
            }
        
        default:
            return state;
    }
}

export default reducer ;