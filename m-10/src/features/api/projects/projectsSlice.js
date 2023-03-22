import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shows : []
};

const projectsShowSlice = createSlice({
    name: "projectsShow",
    initialState,
    reducers: {
        getProductShowItems : (state, action) => {
            console.log(action);
            console.log("action");
            state.shows = action.payload
        }
    },
});

export const {getProductShowItems} = projectsShowSlice.actions;
export default projectsShowSlice.reducer;
