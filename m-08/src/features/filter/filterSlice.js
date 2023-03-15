import {  createSlice } from "@reduxjs/toolkit"



// initial state
const initialState = {
    featuredShow : "All",
    searchValue : ""
}




const filterSlice = createSlice({
    name : "filter",
    initialState,
    reducers : {
        filterSearch : (state, action)=> {
            state.searchValue = action.payload
        },
        filterFeatured : (state, action)=> {
            state.featuredShow = action.payload
        },

    }
})

export default filterSlice.reducer;

export const { filterSearch, filterFeatured } = filterSlice.actions