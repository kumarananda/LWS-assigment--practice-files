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
            // let update = state.shows.filter(item => item !== action.payload);
            // state.shows = update

            state.shows = state.shows.filter(item => item !== action.payload);
    
        },
        addProductShowItems : (state, action) => {
            let update = state.shows.push(action.payload);
            console.log(update);
            // state.shows = update
        }
    },
});

export const {getProductShowItems, removeProductShowItems, addProductShowItems} = projectsShowSlice.actions;
export default projectsShowSlice.reducer;
