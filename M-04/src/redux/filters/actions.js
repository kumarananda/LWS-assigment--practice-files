import { FILTER_SCARCH, FILTER_STATUS } from "./actionTypes"


// search filtering
export const filterScarch = (value) => {
    return {
        type : FILTER_SCARCH,
        payload : value

    }
}

// status filtering
export const filterStatus = (value) => {
    return {
        type : FILTER_STATUS,
        payload : value

    }
}

