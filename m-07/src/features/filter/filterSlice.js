import {  createSlice } from "@reduxjs/toolkit"



// initial state
const initialState = {
    jobType : "All Available",
    titleQuary : "",
    salaryValue : ""
}




const filterSlice = createSlice({
    name : "filter",
    initialState,
    reducers : {
        filterbyType : (state, action)=> {
            state.jobType = action.payload
        },
        filterByTitle : (state, action)=> {
            state.titleQuary = action.payload
        },
        sortBySalary : (state, action) => {
            state.salaryValue = action.payload
        }
    }
})

export default filterSlice.reducer;

export const {filterbyType, filterByTitle, sortBySalary } = filterSlice.actions