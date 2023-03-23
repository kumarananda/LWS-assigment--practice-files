import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows : []
};

const projectsShowSlice = createSlice({
    name: "projectsShow",
    initialState,
    reducers: {
        getProductShowItems : (state, action) => {
            state.shows = action.payload
        },

        removeProductShowItems : (state, action) => {
            state.shows = state.shows.filter(item => item !== action.payload);
        },
        addProductShowItems : (state, action) => {
            state.shows.push(action.payload);
        }
    },
});

export const {getProductShowItems, removeProductShowItems, addProductShowItems} = projectsShowSlice.actions;
export default projectsShowSlice.reducer;
