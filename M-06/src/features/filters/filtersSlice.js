import { createSlice } from "@reduxjs/toolkit"



// initial state
const initialState = { 
    sortBy: "",
    filterBy : "all"
}


const filterSlice = createSlice({
    name : "filter",
    initialState,
    reducers : {
        sortUpdate : (state, action) => {
            state.sortBy = action.payload
        },
        filterUpdate : (state, action) => {
            state.filterBy = action.payload
        }
    }
})

export default filterSlice.reducer
export const { sortUpdate, filterUpdate } = filterSlice.actions;
