import {  createSlice } from "@reduxjs/toolkit"



// initial state
const initialState = {
    titleQuary : "",
    salaryValue : "default"
}




const filterSlice = createSlice({
    name : "filter",
    initialState,
    reducers : {

        filterByTitle : (state, action)=> {
            state.titleQuary = action.payload
        },
        sortBySalary : (state, action) => {
            state.salaryValue = action.payload
        },
        clearSalarySort : (state, action) => {
            state.salaryValue = "default"
        }
    }
})

export default filterSlice.reducer;

export const { filterByTitle, sortBySalary, clearSalarySort } = filterSlice.actions